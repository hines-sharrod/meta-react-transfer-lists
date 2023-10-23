/* eslint-disable react/prop-types */
const DirectionalButtons = ({ leftList, rightList, checkedItems, transferItems }) => {
  const transferRight = () => {
    const freeToTransfer = checkedItems.every((item) => {
      return !rightList.includes(item);
    });

    if (freeToTransfer) {
      transferItems(leftList, rightList, "leftList");
    }
  };

  const transferLeft = () => {
    const freeToTransfer = checkedItems.every((item) => {
      return !leftList.includes(item);
    });

    if (freeToTransfer) {
      transferItems(rightList, leftList, "rightList");
    }
  };

  return (
    <div className="buttons-container">
      <button disabled={leftList?.length === 0} onClick={transferRight}>
        &gt;
      </button>
      <button disabled={rightList?.length === 0} onClick={transferLeft}>
        &lt;
      </button>
    </div>
  );
};

export default DirectionalButtons;
