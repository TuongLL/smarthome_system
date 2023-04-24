import { AUTH_LOGIN } from '@/api';
import axios from 'axios';
import cors from 'cors';

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

export default function handler(req, res) {
  // Set CORS headers
  cors(corsOptions)(req, res, async () => {
    // Handle POST request
    if (req.method === 'POST') {
      const data = req.body.data;
      // const response = await axios.post(AUTH_LOGIN, {}).thxen(res => console.log(res))
      // console.log(response)
      // ...
      res.status(200).json({ message: 'success' });
      return;
    }

    // Handle other request methods
    // ...
  });
}
