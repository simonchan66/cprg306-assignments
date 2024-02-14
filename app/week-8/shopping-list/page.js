"use client";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();
  const[items, setItems] = useState(itemsData);
  const[selectedItemName, setSelectedItemName] = useState(null);
  if (!user) {
    return (
      <main className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="mb-4">You must be logged in to view this page.</p>
          <Link href="/week-8">
            <h2 className="text-blue-600 hover:underline">Go to login page</h2>
          </Link>
        </div>
      </main>
    );
  }



  const handelAddItem = (item) => {
    setItems([...items, item]);
  };

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
      <h1>WEEK 8 Assignment - Learn Oauth</h1>
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