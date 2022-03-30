import { useState, useEffect, useRef } from "react";

import { imgService } from "../services/img.service";

export function Canvas({ canvasData, isFront }) {
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
    shirtImg.src = imgService.itemURLs[item];
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
    const { frontPrint } = canvasData;
    const { x, y, height, width } = frontPrint;
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(print, x, y, height, width);
  };

  return <canvas ref={canvas} height="400" width="400"></canvas>;
}
