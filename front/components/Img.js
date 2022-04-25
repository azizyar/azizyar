// //import { API_URL } from '@/config/index';
// import { API_URL } from '@/config/index';
// export default async (req, res) => {
//   if (req.method === 'POST') {
//     const ean = req.body.ean;

//     const imgs = await fetch(`${API_URL}/images/?ean=${ean}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const img = await imgs.json();

//     res.status(200).json(img);
//     // res.status(200).json('NOT Working');
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).json({ message: `Method ${req.method} not allowed` });
//   }
// };

import { useState } from 'react';
import { useRouter } from 'next/router';
//import styles from '@/styles/Search.module.css'

export default function img() {
  const [img, setTerm] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/images?ean=${img}`);
    setTerm('');
  };

  return (
    <div>
      <div className={styles.img}>
        <Image
          src={evt.image ? img : '/images/event-default.png'}
          width={170}
          height={100}
        />
      </div>
    </div>
  );
}
