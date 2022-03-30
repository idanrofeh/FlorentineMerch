import { useState, useEffect, useRef } from "react";

import { imgService } from "../services/img.service";

export function Canvas({ canvasData, side }) {
  const [img, setImg] = useState(null);
  const [print, setPrint] = useState(null);
  const canvas = useRef(null);

  useEffect(() => {
    const { item, frontPrint } = canvasData;
    setBaseImg(item);
    if (frontPrint) {
      setPrintImg(frontPrint.url);
    }
  }, [canvasData]);

  useEffect(() => {
    if (img && canvas) {
      const ctx = canvas.current.getContext("2d");
      drawShirt(ctx);
      if (print) {
        drawPrint(ctx);
      }
    }
  }, [img, canvasData, print]);

  const setBaseImg = (item) => {
    const shirtImg = new Image();
    shirtImg.onload = () => {
      setImg(shirtImg);
    };
    const itemsStr = side + "ItemURLs";
    shirtImg.src = imgService[itemsStr][item];
  };

  const setPrintImg = (url) => {
    const printImg = new Image();
    printImg.onload = () => {
      setPrint(printImg);
    };
    printImg.src = url;
  };

  const drawShirt = (ctx) => {
    ctx.globalCompositeOperation = "copy";
    ctx.clearRect(0, 0, 400, 400);
    ctx.drawImage(img, 20, 20, 350, 350);
    ctx.globalCompositeOperation = "source-in";
    ctx.fillStyle = canvasData["item-color"];
    ctx.fillRect(0, 0, 400, 400);
  };

  const drawPrint = (ctx) => {
    const currPrint = canvasData[side + "Print"];
    const { type } = currPrint;
    ctx.globalCompositeOperation = "source-over";
    switch (type) {
      case "normal":
        ctx.drawImage(print, 150, 100, 100, 100);
        break;
      case "big":
        ctx.drawImage(print, 120, 100, 150, 180);
        break;
      case "pocket":
        ctx.drawImage(print, 125, 100, 70, 70);
        break;
      default:
        return;
    }
  };

  return <canvas ref={canvas} height="400" width="400"></canvas>;
}
