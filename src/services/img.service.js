import axios from 'axios';
import { printData } from '../data/print';

const frontItemURLs = {
  short:
    "https://res.cloudinary.com/dc6ailej1/image/upload/v1650065096/front_short_sleeve_ughxnq.png",
  hoodieNoZip:
    "https://res.cloudinary.com/dc6ailej1/image/upload/v1650065096/front_hoodie_akuhe8.png",
  hoodie: "https://res.cloudinary.com/dc6ailej1/image/upload/v1650065096/front_hoodie_no_zip_zyon3h.png",
};

const backItemURLs = {
  short: "https://res.cloudinary.com/dc6ailej1/image/upload/v1650065095/back_short_sleeve_zdfpia.png",
  hoodie: "https://res.cloudinary.com/dc6ailej1/image/upload/v1650065096/back_hoodie_vy1dsj.png",
  hoodieNoZip: "https://res.cloudinary.com/dc6ailej1/image/upload/v1650065096/back_hoodie_no_zip_jpi8ye.png"
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

async function getImgDimensions(url, printType, itemType, maxHeight, maxWidth) {
  let printImg = new Image();
  printImg.src = url;
  const promise = new Promise((resolve, reject) => {
    printImg.onload = () => {
      if (!maxHeight) maxHeight = printData.printLayout[itemType][printType].maxHeight;
      if (!maxWidth) maxWidth = printData.printLayout[itemType][printType].maxWidth;
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

export const imgService = {
  uploadPrint,
  getImgDimensions,
  frontItemURLs,
  backItemURLs
}