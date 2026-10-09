
function ProductCard({
  name,
  price,
  quantity,
  selectedColor,
  deliveryCity,
  setQuantity,
  setSelectedColor,
  setDeliveryCity
}) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      margin: "20px auto",
      maxWidth: "400px",
      borderRadius: "10px"
    }}>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Selected Colour: {selectedColor}</p>
      <p>Delivery City: {deliveryCity}</p>

      <label>Choose Colour: </label>
      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="Black">Black</option>
        <option value="Blue">Blue</option>
        <option value="White">White</option>
      </select>

      <br /><br />

      <label>Delivery City: </label>
      <input
        value={deliveryCity}
        onChange={(e) => setDeliveryCity(e.target.value)}
      />

      <p>Quantity: {quantity}</p>
      <p>Total: ₹{quantity * price}</p>

      {quantity === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <p>Product added to cart</p>
      )}

      <button onClick={() => setQuantity(quantity + 1)}>
        Add to Cart
      </button>

      <button
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity === 0}
        style={{ marginLeft: "8px" }}
      >
        Remove One
      </button>

      <button
        onClick={() => setQuantity(0)}
        style={{ marginLeft: "8px", marginTop: "8px" }}
      >
        Reset Cart
      </button>
    </div>
  );
}

export default ProductCard;