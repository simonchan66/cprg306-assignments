export default function Item({name, quantity, category, onSelect}) {
    
  const handleClick = () => {
    onSelect(name);
  }
  
  return (
      <div className="bg-white p-4 rounded-lg shadow" onClick={handleClick}>
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-gray-500 text-sm mt-1">
        <span className="font-medium">Buy</span> {quantity} in {category}
      </p>
    </div>
    );
  }