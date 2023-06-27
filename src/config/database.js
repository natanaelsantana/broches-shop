const { MongoClient } = require('mongodb');

const uri = process.env.URL;

async function getProductDetails(idUnico) {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('<database-name>');
    const collection = database.collection('<collection-name>');

    const product = await collection.findOne({ idUnico });

    return product;
  } finally {
    await client.close();
  }
}

module.exports = getProductDetails;

