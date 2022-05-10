import { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import { NEW_TOKEN_URL, API_URL, NEW_IMAGES_URL } from '@/config/index'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Address from '@/components/Address'

export default function HomePage({ cont }) {
  const [reactData, setReactData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setReactData(cont)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  //console.log(reactData)

  return (
    <Layout>
      <h1>Orders: </h1>
      <ToastContainer />
      {reactData.map((con) => (
        <Address key={con.orderId} address={con} />
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res4 = await fetch(`${NEW_TOKEN_URL}`, { method: 'post' })
  const newToken = await res4.json()

  const bolRes = await fetch(`https://api.bol.com/retailer/orders`, {
    method: 'get',

    headers: {
      Accept: 'application/vnd.retailer.v7+json',
      Authorization: 'Bearer ' + newToken.token,
    },
  })

  const data = await bolRes.json()

  const images = data.orders

  // get the data from the api
  const test = async (ean) => {
    const response = await fetch(`${NEW_IMAGES_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        ean: ean,
      }),
    })
    const json = await response.json()
    return json
  }

  const t = await test(8720279128701)

  console.log(t.url)

  const cont = []
  for (let k in images) {
    // console.log(k)

    const bolDetail = await fetch(
      `https://api.bol.com/retailer/orders/${images[k].orderId}`,
      {
        method: 'get',

        headers: {
          Accept: 'application/vnd.retailer.v7+json',
          Authorization: 'Bearer ' + newToken.token,
        },
      }
    )

    const dat = await bolDetail.json()

    dat.orderItems.forEach(async (item, index) => {
      const imgRes = await fetch(`${API_URL}/images?ean=${item.product.ean}`)
      const imgs = await imgRes.json()

      const imgUrl = imgs[0] ? imgs[0].url : '/images/event-default.png'

      const img = imgUrl
      dat.orderItems[index].product['image'] = img
    })

    cont.push(dat)
  }

  if (bolRes.ok) {
    return {
      props: { cont },
    }
  }
}
