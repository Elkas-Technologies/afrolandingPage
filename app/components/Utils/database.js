import { MongoClient } from 'mongodb';

let client = null;

export async function connectDatabase() {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_CONNECTION_STRING);
    await client.connect();
  }
  return client.db();
}