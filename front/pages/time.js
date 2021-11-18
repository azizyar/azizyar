import Layout from '@/components/Layout'
import { API_URL, TOKEN_URL, CREDENTIALS } from '@/config/index'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Address from '@/components/Address'

export default function HomePage({ cont }) {
  // console.log(cont)
  return (
    <Layout>
      <h1>Orders: </h1>
      <ToastContainer />

      {cont.map((con) => (
        <Address key={con.orderId} address={con} />
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/time-token`)
  const time = await res.json()

  const iimmgg = async (ean) => {
    //async function iimmgg(ean) {
    const open = await fetch(
      `https://api.bol.com/catalog/v4/search/?q=${ean}&offset=0&limit=1&dataoutput=products&apikey=92D2DDD17E2245BDAFC0E359939510CA&format=json`
    )
    const openbol = await open.json()
    const resopen = openbol.products

    return resopen
  }

  const now = new Date().getTime()
  const oldtime = +time.time
  const deference = now - oldtime
  //console.log(deference)

  if (deference >= 290000) {
    //console.log(deference + ' working!')

    const qlsRes = await fetch(`${TOKEN_URL}`, {
      method: 'post',
      headers: {
        Authorization:
          'Basic ' + Buffer.from(`${CREDENTIALS}`).toString('base64'),
        'Content-Type': 'application/json',
      },
    })
    const data = await qlsRes.json()

    const values = {
      token: data.access_token,
      time: +now,
    }

    const res2 = await fetch(`${API_URL}/time-token`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        //  Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    })

    if (!res2.ok) {
      toast.error('Something Went Wrong')
    } else {
      const evt = await res2.json()
      toast('Updat Susses!')
    }
  }

  const res3 = await fetch(`${API_URL}/time-token`)
  const newTime = await res3.json()

  const cont = []

  const bolRes = await fetch(`https://api.bol.com/retailer/orders`, {
    method: 'get',

    headers: {
      Accept: 'application/vnd.retailer.v5+json',
      Authorization: 'Bearer ' + newTime.token,
    },
  })
  //const cookies = cookie.parse('foo=bar; equation=E%3Dmc%5E2')
  const data = await bolRes.json()

  const mmm = data.orders

  //console.log(mmm)

  for (let k in mmm) {
    // console.log(k)

    const bolDetail = await fetch(
      `https://api.bol.com/retailer/orders/${mmm[k].orderId}`,
      {
        method: 'get',

        headers: {
          Accept: 'application/vnd.retailer.v5+json',
          Authorization: 'Bearer ' + newTime.token,
        },
      }
    )
    //const cookies = cookie.parse('foo=bar; equation=E%3Dmc%5E2')
    const dat = await bolDetail.json()

    //console.log(dat.orderItems[0].product)

    dat.orderItems.forEach(async (item, index) => {
      const popopo = await iimmgg(item.product.ean)
      const img = popopo[0].images[4].url
      dat.orderItems[index].product['image'] = img
    })

    cont.push(dat)
  }

  if (bolRes.ok) {
    return {
      props: { cont },
      revalidate: 1,
    }
  }
}
