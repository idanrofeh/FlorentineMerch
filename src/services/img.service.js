import axios from 'axios';

export const imgService = {
  uploadPrint,
  itemURLs
}

const itemURLs = {
  short:
    "https://res.cloudinary.com/dc6ailej1/image/upload/v1648500864/newtshirt_f4601y.png",
  hoodie:
    "https://res.cloudinary.com/dc6ailej1/image/upload/v1648528448/kisspng-hoodie-t-shirt-sweater-top-october-s-very-own-5afdfb8d57ab65.9085175115265944453591_zqyuh9.png",
  long: "https://res.cloudinary.com/dc6ailej1/image/upload/v1648522611/kisspng-t-shirt-polo-shirt-clothing-top-neck-5ace24beb4ae37.3365356515234592627401_kgiz0l.png",
};

async function uploadPrint(print) {
  const formData = new FormData();
  formData.append("file", print);
  formData.append("upload_preset", "zbxbp7ja");
  const { data } = await axios.post(
    "https://api.cloudinary.com/v1_1/dc6ailej1/image/upload",
    formData
  );
  return data;
};