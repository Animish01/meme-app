'use server'

const fs = require('fs');
const cloudinary = require('cloudinary').v2;
const { db } = require('@vercel/postgres');

const uploadImage = async (image, client) => {
  cloudinary.config({
    cloud_name: 'dfs95q0ck',
    api_key: 'key from env',
    api_secret: 'secret from env',
    secure: true,
  });

  const imagePath = __dirname.split('scripts')[0] + image;

  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result.url);

    await client.sql`
    INSERT INTO memes (url)
    VALUES (${result.url})`

    console.log('upload success');
  } catch (e) {
    console.log(e);
  }
};

const main = async () => {
  const client = await db.connect();
  const filePath = __dirname.split('scripts')[0];
  const images = fs.readdirSync(filePath+'/images');
  console.log('db connected');

  images.forEach(image => {
    uploadImage(`images/${image}`, client);
  })
}

main();