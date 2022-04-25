export default async (req, res) => {
  if (req.method === 'POST') {
    const ean = req.body.ean;

    fetch(
      `https://api.bol.com/catalog/v4/search/?q=${ean}&offset=0&limit=1&dataoutput=products&apikey=92D2DDD17E2245BDAFC0E359939510CA&format=json`
      //`https://api.bol.com/catalog/v4/search/?q=8720279128701&offset=0&limit=1&dataoutput=products&apikey=8DF32B26097242598188DB66927A8393&format=json`
    )
      .then((response) => response.json())
      .then((json) => res.status(200).json(json.products[0].images[4]));
    //.then((json) => res.status(200).json('{"ean": "working"}'));
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
