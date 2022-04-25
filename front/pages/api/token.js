//import { API_URL } from '@/config/index';
import { API_URL, TOKEN_URL, CREDENTIALS } from '@/config/index';
export default async (req, res) => {
  if (req.method === 'POST') {
    const strapiRes = await fetch(`${API_URL}/time-token`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const time = await strapiRes.json();

    const now = new Date().getTime();
    const oldtime = +time.time;
    const deference = now - oldtime;
    console.log(deference);

    if (deference >= 290000) {
      //console.log(deference + ' working!');

      const qlsRes = await fetch(`${TOKEN_URL}`, {
        method: 'post',
        headers: {
          Authorization:
            'Basic ' + Buffer.from(`${CREDENTIALS}`).toString('base64'),
          'Content-Type': 'application/json',
        },
      });
      const data = await qlsRes.json();

      const values = {
        token: data.access_token,
        time: +now,
      };

      const res2 = await fetch(`${API_URL}/time-token`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          //  Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      const res3 = await fetch(`${API_URL}/time-token`);
      const newTime = await res3.json();

      res.status(200).json(newTime);
    } else {
      const res3 = await fetch(`${API_URL}/time-token`);
      const newTime = await res3.json();

      res.status(200).json(newTime);
      // res.status(200).json('NOT Working');
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
