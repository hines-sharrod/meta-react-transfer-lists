import { useState } from "react";
import "./App.css";
import List from "./List";
import DirectionalButtons from "./DirectionalButtons";
import { data } from "./data";

function App() {
  const [leftList, setLeftList] = useState(data);
  const [rightList, setRightList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  return (
    <div className="app">
      <List items={leftList} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
      <DirectionalButtons leftList={leftList} setLeftList={setLeftList} rightList={rightList} setRightList={setRightList} checkedItems={checkedItems} />
      <List items={rightList} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
    </div>
  );
}

export default App;
