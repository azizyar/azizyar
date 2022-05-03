import { NEW_IMAGES_URL } from '@/config/index'
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
        body: JSON.stringify({
          artEan: ean,
        }),
        ///body: JSON.stringify({ artEan: ean }),
      })
      // convert the data to json
      const json = await data.json()

      // set state with the result
      console.log(json)
      //setValues(json)
    }

    fetchData(ean)

    //console.log('Working!!!' + ean + values)
    //console.log(values)
  }

  return (
    <>
      {orderitems.map((orderitem) => (
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
            <button onClick={() => updatImage(orderitems[0].product.ean)}>
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
