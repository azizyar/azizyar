import Link from 'next/link'
import styles from '@/styles/Address.module.css'
import OrderItem from 'components/OrderItem'

export default function EventItem({ address }) {
  //console.log(address)
  return (
    <>
      <div className={styles.event}>
        <div className={styles.info}>
          <OrderItem orderitems={address.orderItems} />
        </div>
        <div className={styles.info}>
          <h3>Order : {address.orderId}</h3>
          <h3>
            Name : {address.shipmentDetails.firstName}{' '}
            {address.shipmentDetails.surname}
          </h3>
          <h4>
            {address.shipmentDetails.streetName}{' '}
            {address.shipmentDetails.houseNumber}{' '}
            {address.shipmentDetails.houseNumberExtension}
          </h4>
          <h4>
            {address.shipmentDetails.zipCode} {address.shipmentDetails.city}{' '}
          </h4>
        </div>
      </div>
    </>
  )
}
