import { useState, useEffect, useRef } from "react";

export function Canvas({ canvasData }) {
  const [img, setImg] = useState(null);
  const [print, setPrint] = useState(null);
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
          "https://res.cloudinary.com/dc6ailej1/image/upload/v1648528448/kisspng-hoodie-t-shirt-sweater-top-october-s-very-own-5afdfb8d57ab65.9085175115265944453591_zqyuh9.png";
        break;
      case "long":
        shirtImg.src =
          "https://res.cloudinary.com/dc6ailej1/image/upload/v1648522611/kisspng-t-shirt-polo-shirt-clothing-top-neck-5ace24beb4ae37.3365356515234592627401_kgiz0l.png";
        break;
      default:
        return;
    }
    if (canvasData.frontPrint) {
      const printImg = new Image();
      printImg.onload = () => {
        setPrint(printImg);
      };
      printImg.src = canvasData.frontPrint.url;
    }
  }, [canvasData]);

  useEffect(() => {
    if (img && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.globalCompositeOperation = "copy";
      ctx.clearRect(0, 0, 400, 400);
      ctx.drawImage(img, 20, 20, 350, 350);
      ctx.globalCompositeOperation = "source-in";
      ctx.fillStyle = canvasData["item-color"];
      ctx.fillRect(0, 0, 400, 400);
      if (print) {
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(print, 150, 100, 100, 100);
      }
    }
  }, [img, canvas, canvasData, print]);

  return <canvas ref={canvas} height="400" width="400"></canvas>;
}
