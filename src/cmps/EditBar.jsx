export function EditBar({
  changeItemColor,
  itemColors,
  orderData,
  handleItemChange,
  handleOrderChange,
  handleFileChange,
  handlePrintChange,
  toggleIsFront,
  side,
}) {
  const { numOfItems, canvas, notes, priceForOne } = orderData;
  return <section className="hidden edit-bar"></section>;
}
