// En src/pages/api/getProducts.ts
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const response = await fetch('http://127.0.0.1:8000/apis/shop/product/');
//     console.log(true)
//     console.log(response)
//     if (!response.ok) {
//       return res.status(response.status).json({ error: 'Error al obtener los productos' });
//     }
//     const products = await response.json();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ error: 'Error de conexión' });
//   }
// }
