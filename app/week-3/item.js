export default function Item(props) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        
        <h2 className="text-lg font-bold text-gray-800">{props.name}</h2>
        
        <p className="text-gray-500 text-sm mt-1">
          <span className="font-medium">Buy</span> {props.quantity} in {props.category}  
        </p>
        
      </div>
    );
  }