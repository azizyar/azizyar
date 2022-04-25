//import { API_URL } from '@/config/index';
import { API_URL, TOKEN_URL, CREDENTIALS } from '@/config/index';
export default async (req, res) => {
  if (req.method === 'POST') {
    const ean = req.body.ean;

    const imgs = await fetch(`${API_URL}/images/?ean=${ean}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const img = await imgs.json();

    res.status(200).json(img);
    // res.status(200).json('NOT Working');
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
