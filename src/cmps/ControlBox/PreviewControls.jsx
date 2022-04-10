import { ItemColorList } from "./ItemColorList.jsx";
import { ItemTypeSelect } from "./ShirtTypeSelect.jsx";
import { SideBtn } from "./SideBtn.jsx";

export function PreviewControls({
  changeItemColor,
  handlePreviewChange,
  preview,
  toggleIsFront,
}) {
  return (
    <section className="preview-controls">
      <ItemTypeSelect
        itemType={preview.itemType}
        handlePreviewChange={handlePreviewChange}
      />
      <ItemColorList changeItemColor={changeItemColor} />
      <SideBtn toggleIsFront={toggleIsFront} />
    </section>
  );
}
