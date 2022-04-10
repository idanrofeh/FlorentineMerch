import axios from 'axios';
import { printData } from '../data/print';

const frontItemURLs = {
  short:
    "https://res.cloudinary.com/dc6ailej1/image/upload/v1649537460/front_tshirt_short_black_swldjz.jpg",
  hoodie:
    "https://res.cloudinary.com/dc6ailej1/image/upload/v1649537560/front_hoodie_black_faquxa.jpg",
  hoodieNoZip: "https://res.cloudinary.com/dc6ailej1/image/upload/v1649537564/front_hoodie_nozipper_black_p93jop.jpg",
};

const backItemURLs = {
  short: "https://res.cloudinary.com/dc6ailej1/image/upload/v1649537560/back_tshirt_short_black_lpxsop.jpg",
  hoodie: "https://res.cloudinary.com/dc6ailej1/image/upload/v1649537559/back_hoodie_black_vmdsaq.jpg",
  hoodieNoZip: "https://res.cloudinary.com/dc6ailej1/image/upload/v1649537560/back_hoodie_nozipper_black_bkflm3.jpg"
}
export const imgService = {
  uploadPrint,
  getImgDimensions,
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

async function getImgDimensions(url, printType, itemType) {
  console.log(url, printType, itemType);
  let printImg = new Image();
  printImg.src = url;
  const promise = new Promise((resolve, reject) => {
    printImg.onload = () => {
      let { maxHeight, maxWidth } = printData.printLayout[itemType][printType];
      const ratio = (printImg.height) / (printImg.width);
      const imgShape = ratio > 1 ? "narrow" : "wide";

      let height;
      let width;
      if (imgShape === "narrow") {
        height = maxHeight;
        width = height / ratio;
      } else {
        width = maxWidth;
        height = width * ratio;
      };
      resolve({ height, width });
    };
  })
  return promise;
};