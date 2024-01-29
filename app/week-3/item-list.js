import Item from "./item";
export default function ItemList() {

  const items = [
    {
      name: "milk, 4 L 🥛",
      quantity: 1,
      category: "dairy",
    },
    {
      name: "bread 🍞",
      quantity: 2,
      category: "bakery",
    },
    {
      name: "eggs, dozen 🥚",
      quantity: 2,
      category: "dairy",
    },
    {
      name: "bananas 🍌",
      quantity: 6,
      category: "produce",
    },
    {
      name: "broccoli 🥦",
      quantity: 3,
      category: "produce",
    },
    {
      name: "chicken breasts, 1 kg 🍗",
      quantity: 1,
      category: "meat",
    },
    {
      name: "pasta sauce 🍝",
      quantity: 3,
      category: "canned goods",
    },
    {
      name: "spaghetti, 454 g 🍝",
      quantity: 2,
      category: "dry goods",
    },
    {
      name: "toilet paper, 12 pack 🧻",
      quantity: 1,
      category: "household",
    },
    {
      name: "paper towels, 6 pack",
      quantity: 1,
      category: "household",
    },
    {
      name: "dish soap 🍽️",
      quantity: 1,
      category: "household",
    },
    {
      name: "hand soap 🧼",
      quantity: 4,
      category: "household",
    },
  ];
      return (    
        <div className="bg-gray-100 p-8 max-w-2xl  rounded-lg shadow">

        <h1 className="text-3xl font-medium text-gray-800 mb-6">Shopping List</h1>
  
        <div className="grid grid-cols-1 gap-6">
        
        <div className="space-y-4">

      {items.map(item => (
        <Item 
          key={item.name} 
          className="bg-white p-4 rounded-lg shadow"
          {...item} 
        />
        
      ))}
    </div>

  
        </div>
  
      </div>
      );}