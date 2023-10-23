/* eslint-disable react/prop-types */
const DirectionalButtons = ({ leftList, setLeftList, rightList, setRightList, checkedItems }) => {
  const transferRight = () => {
    console.log(checkedItems);
    const freeToTransfer = checkedItems.every((item) => {
      return !rightList.includes(item);
    });

    if (freeToTransfer) {
      setRightList([...rightList, ...checkedItems]);
    }
  };

  const transferLeft = () => {
    const freeToTransfer = checkedItems.every((item) => {
      return !leftList.includes(item);
    });

    if (freeToTransfer) {
      setLeftList([...leftList, checkedItems]);
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
