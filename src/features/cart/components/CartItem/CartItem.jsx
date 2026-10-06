import "./CartItem.css";

function CartItem({ product, onRemove, isSelected, onToggle }) {
  return (
    <div className="cart-item">
      <div className="cart-item-checkbox">
        <input type="checkbox" checked={isSelected} onChange={() => onToggle(product.id)} />
      </div>
      <div className="cart-item-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="cart-item-info"> <h3>{product.name}</h3> <p>{product.brand}</p> <span>${product.price}</span> </div>

      <button className="cart-item-remove" onClick={() => onRemove(product.id)}> Remove </button>
    </div>
  )
}

export default CartItem;