import { NEW_IMAGES_URL, API_URL } from '@/config/index'
import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Address.module.css'
//import { API_URL } from '@/config/index'

export default function OrderItem({ orderitems }) {
  //console.log(orderitems[0].product.ean)

  const [values, setValues] = useState({})

  const updatImage = (ean) => {
    const fetchData = async (ean) => {
      // get the data from the api

      console.log('Workingggg ' + ean)
      const data = await fetch(`${NEW_IMAGES_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          artEan: ean,
        }),
        ///body: JSON.stringify({ artEan: ean }),
      })
      // convert the data to json
      const json = await data.json()

      const imgUrl = json.url
      console.log(imgUrl)
      const data2 = await fetch(`${API_URL}/images`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ean: ean,
          url: imgUrl,
        }),
        ///body: JSON.stringify({ artEan: ean }),
      })
      // convert the data to json
      const json2 = await data2.json()

      // set state with the result
      console.log(json2)
      //setValues(json)
    }

    fetchData(ean)

    //console.log('Working!!!' + ean + values)
    //console.log(values)
  }

  return (
    <>
      {orderitems.map((orderitem, index) => (
        <div key={orderitem.product.ean}>
          <div className={styles.img}>
            <Image
              src={
                orderitem.product.image
                  ? orderitem.product.image
                  : '/images/event-default.png'
              }
              width={150}
              height={150}
            />
            <button onClick={() => updatImage(orderitems[index].product.ean)}>
              Posts
            </button>
          </div>
          <h4>
            OrderItem: {orderitem.product.ean}{' '}
            {orderitem.fulfilment.latestDeliveryDate}{' '}
            {orderitem.fulfilment.exactDeliveryDate}
          </h4>
          <span>OrderItem: {orderitem.product.title}</span>
        </div>
      ))}
    </>
  )
}
// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/images?ean=8720279199770`) //${orderitems.product.ean}
//   const img = await res.json()

//   console.log(img)
// }
