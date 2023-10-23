/* eslint-disable react/prop-types */
import ListItem from "./ListItem";

const List = ({ items, checkedItems, setCheckedItems }) => {
  return (
    <div className="list-container">
      {items?.map((item) => {
        return <ListItem key={item} item={item} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />;
      })}
    </div>
  );
};

export default List;
