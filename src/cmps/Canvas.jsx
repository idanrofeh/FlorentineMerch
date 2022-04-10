// import { useState, useEffect, useRef } from "react";

// import { imgService } from "../services/img.service";

// export function Canvas({ preview, side, print }) {
//   const [img, setImg] = useState(null);
//   const [print, setPrint] = useState(null);
//   const canvas = useRef(null);

//   useEffect(() => {
//     const { itemType } = preview;
//     setBaseImg(itemType);
//     if (preview[side + "Print"].url) {
//       setPrintImg(preview[side + "Print"].url);
//     } else setPrint(null);
//   }, [side, preview]);

//   useEffect(() => {
//     if (img && canvas) {
//       const ctx = canvas.current.getContext("2d");
//       drawShirt(ctx);
//       if (print) {
//         drawPrint(ctx);
//       }
//     }
//   }, [img, preview, print, side]);

//   const setBaseImg = (item) => {
//     const shirtImg = new Image();
//     shirtImg.onload = () => {
//       setImg(shirtImg);
//     };
//     const itemsStr = side + "ItemURLs";
//     shirtImg.src = imgService[itemsStr][item];
//   };

//   const setPrintImg = (url) => {
//     const printImg = new Image();
//     printImg.onload = () => {
//       setPrint(printImg);
//     };
//     printImg.src = url;
//   };

//   const drawShirt = (ctx) => {
//     ctx.globalCompositeOperation = "copy";
//     ctx.clearRect(0, 0, 400, 400);
//     ctx.drawImage(img, 20, 20, 350, 350);
//     ctx.globalCompositeOperation = "source-in";
//     ctx.fillStyle = preview.itemColor;
//     ctx.fillRect(0, 0, 400, 400);
//   };

//   const drawPrint = (ctx) => {
//     const currPrint = preview[side + "Print"];
//     const { type } = currPrint;
//     ctx.globalCompositeOperation = "source-over";
//     switch (type) {
//       case "normal":
//         ctx.drawImage(print, 150, 100, 100, 100);
//         break;
//       case "big":
//         ctx.drawImage(print, 120, 100, 150, 180);
//         break;
//       case "pocket":
//         ctx.drawImage(print, 125, 100, 70, 70);
//         break;
//       default:
//         return;
//     }
//   };
//   const canvasClass = side === "front" ? "canvas" : "canvas-rotate";
//   return (
//     <canvas
//       className={canvasClass}
//       ref={canvas}
//       height="400"
//       width="400"
//     ></canvas>
//   );
// }
