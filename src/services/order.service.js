import axios from 'axios';

export const orderService = {
  uploadPrint
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