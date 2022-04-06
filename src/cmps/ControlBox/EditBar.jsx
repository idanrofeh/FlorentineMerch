import { useState, useEffect } from "react";
import { EditBarBtn } from "./EditBarBtn.jsx";
import { AiOutlineUpload } from "react-icons/ai";

export function EditBar({
  changeItemColor,
  preview,
  changeFunctions,
  toggleIsFront,
  side,
}) {
  const [modalType, setModalType] = useState(false);
  const btns = ["📁", "🎨", "🔄", "✍🏽", "👕"];
  const { numOfItems, canvas, notes, priceForOne } = preview;
  return <section className="hidden edit-bar"></section>;
}
