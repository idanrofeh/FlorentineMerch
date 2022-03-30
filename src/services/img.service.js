import axios from 'axios';

const frontItemURLs = {
  short:
    "https://res.cloudinary.com/dc6ailej1/image/upload/v1648500864/newtshirt_f4601y.png",
  hoodie:
    "https://res.cloudinary.com/dc6ailej1/image/upload/v1648528448/kisspng-hoodie-t-shirt-sweater-top-october-s-very-own-5afdfb8d57ab65.9085175115265944453591_zqyuh9.png",
  long: "https://res.cloudinary.com/dc6ailej1/image/upload/v1648522611/kisspng-t-shirt-polo-shirt-clothing-top-neck-5ace24beb4ae37.3365356515234592627401_kgiz0l.png",
};

const backItemURLs = {
  short: "https://res.cloudinary.com/dc6ailej1/image/upload/v1648660396/Daco_2183638_e3vt5b.png",
  hoodie: "https://res.cloudinary.com/dc6ailej1/image/upload/v1648660645/classic-pink-pink-hoodie-back-template-clothing-apparel-sweater-sweatshirt-transparent-png-886125_gylfq1.png",
  long: "https://res.cloudinary.com/dc6ailej1/image/upload/v1648660523/long-sleeve-shirt-gildan-long-sleeve-back-clothing-apparel-person-human-transparent-png-905625_snmebc.png"
}
export const imgService = {
  uploadPrint,
  frontItemURLs,
  backItemURLs
}


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