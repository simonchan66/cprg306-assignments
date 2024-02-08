"use client";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const[items, setItems] = useState(itemsData);
  const handelAddItem = (item) => {
    setItems([...items, item]);
  };

  return (

    <main>
      <h1>WEEK 6 Assignment - Here is my shopping List</h1>
      <div>
      <NewItem onAddItem={handelAddItem} />
        <ItemList items = {items}/>
      </div>
      </main>
  );
}