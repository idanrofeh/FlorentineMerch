import { useState, useEffect, useRef } from "react";

export function Canvas({ canvasData }) {
  const [img, setImg] = useState(null);
  const canvas = useRef(null);

  useEffect(() => {
    const shirtImg = new Image();
    shirtImg.onload = () => {
      setImg(shirtImg);
    };
    switch (canvasData.item) {
      case "short":
        shirtImg.src =
          "https://res.cloudinary.com/dc6ailej1/image/upload/v1648500864/newtshirt_f4601y.png";
        break;
      case "hoodie":
        shirtImg.src =
          "https://res.cloudinary.com/dc6ailej1/image/upload/v1648522551/58e38d12204d556bbd97b164_c5nc5r.png";
        break;
      case "long":
        shirtImg.src =
          "https://res.cloudinary.com/dc6ailej1/image/upload/v1648522551/58e38d12204d556bbd97b164_c5nc5r.png";
        break;
      default:
        return;
    }
  }, [canvasData]);

  useEffect(() => {
    if (img && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.drawImage(img, 20, 50, 350, 350);
      ctx.globalCompositeOperation = "source-in";
      ctx.fillStyle = canvasData["item-color"];
      ctx.fillRect(0, 0, 400, 400);
    }
  }, [img, canvas, canvasData]);

  return <canvas ref={canvas} height="400" width="400"></canvas>;
}
