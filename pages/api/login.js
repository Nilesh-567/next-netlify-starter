// pages/api/login.js
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://mongodb:Nilesh123@mydatabase.sgxomt2.mongodb.net/";
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Only allow POST requests
  }

  const { name, password } = req.body;

  try {
    await client.connect();
    const database = client.db('Vercel');
    const collection = database.collection('flask');

    // Check if the user exists with the provided name and password
    const user = await collection.findOne({ name, password });

    if (user) {
      res.status(200).json({ message: 'Login successful!' });
    } else {
      res.status(401).json({ message: 'Invalid name or password.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    await client.close();
  }
}
