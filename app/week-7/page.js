"use client";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const[items, setItems] = useState(itemsData);
  const handelAddItem = (item) => {
    setItems([...items, item]);
  };
  const[selectedItemName, setSelectedItemName] = useState(null);
function handleItemSelect(item) {
  console.log(item);
  const cleanName = item.replace(/[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, '')
  .replace(/[^\x20-\x7E]/g, '')  
  .split(',')[0]
  .trim();
  setSelectedItemName(cleanName)
  console.log(cleanName);
}
  return (

    <main>
      <h1>WEEK 6 Assignment - Here is my shopping List</h1>
      <div className = "flex">
      <div className = "flex-1"> 
      <NewItem onAddItem={handelAddItem} />
        <ItemList items = {items} onItemSelect={handleItemSelect}/>
         </div>
         <div className = "flex-1"> 
<MealIdeas ingredient={selectedItemName} />
         </div>
      </div>
      </main>
  );
}