import { useState } from "react";
import "./App.css";
import List from "./List";
import DirectionalButtons from "./DirectionalButtons";
import { data } from "./data";

function App() {
  const [leftList, setLeftList] = useState(data);
  const [rightList, setRightList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const transferItems = (listItems, transferList, listName) => {
    if (listName === "leftList") {
      const updatedLeftList = [...listItems];
      const remainingLeftList = updatedLeftList.filter((leftItem) => !checkedItems.includes(leftItem));
      setRightList([...transferList, ...checkedItems]);
      setLeftList(remainingLeftList);
    }

    if (listName === "rightList") {
      const updatedRightList = [...listItems];
      const remainingRightList = updatedRightList.filter((rightItem) => !checkedItems.includes(rightItem));
      setLeftList([...transferList, ...checkedItems]);
      setRightList(remainingRightList);
    }

    setCheckedItems([]);
  };

  return (
    <div className="app">
      <List items={leftList} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
      <DirectionalButtons leftList={leftList} rightList={rightList} checkedItems={checkedItems} transferItems={transferItems} />
      <List items={rightList} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
    </div>
  );
}

export default App;
