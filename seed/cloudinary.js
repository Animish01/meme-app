const cloudinary = require('cloudinary').v2;

const uploadImage = async (image) => {
  // cloudinary.config not in this commit as it contains sensitive keys
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
