
import { useState, useEffect } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  useEffect(() => {
    document.title = `Amazon Product Store - ${quantity} items`;
  }, [quantity]);

  return (
    <div>
      <Header />

      <div style={{ textAlign: "center", padding: "10px" }}>
        <button onClick={() => setShowProduct(!showProduct)}>
          Show/Hide Product
        </button>
      </div>

      {showProduct && (
        <ProductCard
          name="Wireless Mouse"
          price={499}
          quantity={quantity}
          selectedColor={selectedColor}
          deliveryCity={deliveryCity}
          setQuantity={setQuantity}
          setSelectedColor={setSelectedColor}
          setDeliveryCity={setDeliveryCity}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;