import Image from 'next/image'
import styles from '@/styles/Address.module.css'
//import { API_URL } from '@/config/index'

export default function OrderItem({ orderitems }) {
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
