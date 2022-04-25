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
        ean: ean,
      }),
    });
    const json = await data.json();
    // console.log(json);

    setState(json);
  }, []);

  useEffect(() => {
    fetchData(8720279199985)
      // make sure to catch any error
      .catch(console.error);
  }, [resourceType]);

  //setState('555');

  console.log(resp);

  return (
    <Layout>
      <h1>Orders: </h1>
      <ToastContainer />
      <button onClick={() => setResourceType('image')}>Posts</button>
      <img src={resp.url} height='100' width='100'></img>

      {cont.map((con) => (
        <Address key={con.orderId} address={con} />
      ))}
    </Layout>
  );
}

//export async function getStaticProps() {
export async function getServerSideProps() {
  const iimmgg = async (ean) => {
    //async function iimmgg(ean) {
    const open = await fetch(
      `https://api.bol.com/catalog/v4/search/?q=${ean}&offset=0&limit=1&dataoutput=products&apikey=92D2DDD17E2245BDAFC0E359939510CA&format=json`
    );
    const openbol = await open.json();
    const resopen = openbol.products;

    return resopen;
  };

  const img = async (ean) => {
    const res5 = await fetch(`${NEW_IMAGES_URL}`, {
      method: 'post',
      body: {
        ean,
      },
    });
    const newImages = await res5.json();
    return newImages;
  };

  const neuImgUrl = await img(8720279155127);

  console.log(neuImgUrl.url);

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
  //const cookies = cookie.parse('foo=bar; equation=E%3Dmc%5E2')
  const data = await bolRes.json();

  const mmm = data.orders;

  //test not working
  // //console.log(mmm)

  //   // const imgs = async (ean) => {
  //   //   const res5 = await fetch(`${NEW_IMAGES_URL}`, {
  //   //     method: 'post',
  //   //     body: {
  //   //       ean,
  //   //     },
  //   //   });
  //   //   const newImages = await res5.json();
  //   //   return newImages;
  //   // };

  //   dat.orderItems.forEach(async (item, index) => {
  //     const neuImgUrl = await fetch(`${NEW_IMAGES_URL}`, {
  //       method: 'post',
  //       body: {
  //         ean: item.product.ean,
  //       },
  //     });
  //     const newImages = await neuImgUrl.json();
  //     const img = newImages.url;
  //     dat.orderItems[index].product['image'] = img;
  //   });

  //end test not working

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
    //const cookies = cookie.parse('foo=bar; equation=E%3Dmc%5E2')
    const dat = await bolDetail.json();

    dat.orderItems.forEach(async (item, index) => {
      const popopo = await iimmgg(item.product.ean);
      const img = popopo[0].images[4].url;
      dat.orderItems[index].product['image'] = img;
    });

    cont.push(dat);
    // setCount(dat);
    //console.log(dat.orderItems);
  }

  if (bolRes.ok) {
    return {
      props: { cont },
      //revalidate: 1,
    };
  }
}
