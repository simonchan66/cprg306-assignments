"use client";
import Item from "./item";
import { useState } from "react";

export default function ItemList({items, onItemSelect}) {
const [sortBy, setSortBy] = useState("name");
const itemsCopy = [...items];

const handleSort = (sortBy) => {
  setSortBy(sortBy);
};
itemsCopy.sort((a, b) => {if (a[sortBy] < b[sortBy]) {return -1;} if (a[sortBy] > b[sortBy]) {return 1;} return 0;}); 


return (
  <div className="bg-gray-100 p-8 max-w-2xl  rounded-lg shadow">
    <h1 className="text-3xl font-medium text-gray-800 mb-6">Shopping List</h1>
    <div className="flex justify-center gap-4 mb-6">
      Sorted by:
      <button
onClick={() => handleSort("name")}
className={`px-4 py-2 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
  sortBy === 'name' ? 'bg-red-500' : 'bg-blue-500'
}`}
>
        Name
      </button>
      <button
        onClick={() => handleSort("category")}
        className={`px-4 py-2 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
  sortBy === 'category' ? 'bg-red-500' : 'bg-blue-500'
}`}
>
        Category
      </button>
      <button
        onClick={() => handleSort("groupedCategory")}
        className={`px-4 py-2 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
  sortBy === 'groupedcategory' ? 'bg-red-500' : 'bg-blue-500'
}`}
 >
        Grouped Category
      </button>
    </div>

    <div className="grid grid-cols-1 gap-6">
      <div className="space-y-4">
        {itemsCopy.map((item) => (
          <Item
            key={item.name}
            className="bg-white p-4 rounded-lg shadow"
            {...item}
            onSelect={onItemSelect}
          />
        ))}
      </div>
    </div>
  </div>
);}