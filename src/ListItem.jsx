/* eslint-disable react/prop-types */
const ListItem = ({ item, checkedItems, setCheckedItems }) => {
  const itemChecked = () => {
    if (checkedItems.includes(item)) {
      const updatedCheckedItems = [...checkedItems];
      const remainingItems = updatedCheckedItems.filter((checkedItem) => checkedItem !== item);
      setCheckedItems(remainingItems);
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  console.log(checkedItems);

  return (
    <div>
      <input type="checkbox" onChange={itemChecked} />
      {item}
    </div>
  );
};

export default ListItem;
