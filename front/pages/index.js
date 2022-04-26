import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@/components/Layout';
import { NEW_TOKEN_URL, NEW_IMAGES_URL, API_URL } from '@/config/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Address from '@/components/Address';

export default function HomePage({ cont }) {
  const [resourceType, setResourceType] = useState('image');
  const [resp, setState] = useState([]);

  const fetchData = useCallback(async (ean) => {
    const data = await fetch(`${NEW_IMAGES_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        ean: 8720279199985,
      }),
    });
    const json = await data.json();
    console.log('Working');
    setState(json);
  }, []);

  useEffect(() => {
    const getImg = fetchData()
      // make sure to catch any error

      .catch(console.error);
  }, [resourceType]);

  //setState('555');

  console.log(resp);

  return (
    <Layout>
      <button onClick={() => setResourceType('image')}>Posts</button>
      <h1>Orders: </h1>
      <ToastContainer />
      <img src={resp.url} height='100' width='100'></img>

      {cont.map((con) => (
        <Address key={con.orderId} address={con} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res4 = await fetch(`${NEW_TOKEN_URL}`, { method: 'post' });
  const newToken = await res4.json();

  const cont = [];

  const bolRes = await fetch(`https://api.bol.com/retailer/orders`, {
    method: 'get',

    headers: {
      Accept: 'application/vnd.retailer.v7+json',
      Authorization: 'Bearer ' + newToken.token,
    },
  });

  const data = await bolRes.json();

  const mmm = data.orders;

  for (let k in mmm) {
    // console.log(k)

    const bolDetail = await fetch(
      `https://api.bol.com/retailer/orders/${mmm[k].orderId}`,
      {
        method: 'get',

        headers: {
          Accept: 'application/vnd.retailer.v7+json',
          Authorization: 'Bearer ' + newToken.token,
        },
      }
    );

    const dat = await bolDetail.json();

    dat.orderItems.forEach(async (item, index) => {
      const imgRes = await fetch(`${API_URL}/images?ean=${item.product.ean}`);
      const imgs = await imgRes.json();

      const imgUrl = imgs[0] ? imgs[0].url : '/images/event-default.png';

      // console.log(imgUrl);

      const img = imgUrl;
      dat.orderItems[index].product['image'] = img;
    });

    cont.push(dat);
  }

  if (bolRes.ok) {
    return {
      props: { cont },
    };
  }
}
