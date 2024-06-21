const cloudinary = require('cloudinary').v2;

const uploadImage = async (image) => {
  cloudinary.config({
    cloud_name: 'dfs95q0ck',
    api_key: 'get_from_env',
    api_secret: 'get_from_env',
    secure: true,
  });

  const imagePath = __dirname.split('test')[0] + image;

  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

uploadImage('images/template.jpeg');
