import { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleBuyNow = () => {
    const message = `Order Details:\nItem: T-shirt\nQuantity: ${quantity}\nName: ${name}\nAddress: ${address}\nPhone: ${phone}`;
    const whatsappURL = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h2>T-shirt</h2>

      <label>Quantity</label>
      <div>
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
        <span style={{ margin: "0 10px" }}>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <label>Full Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", marginBottom: "10px" }} />

      <label>Delivery Address</label>
      <input value={address} onChange={(e) => setAddress(e.target.value)} style={{ width: "100%", marginBottom: "10px" }} />

      <label>Phone Number</label>
      <input value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: "100%", marginBottom: "20px" }} />

      <button onClick={handleBuyNow} style={{ width: "100%", padding: "10px", backgroundColor: "blue", color: "white" }}>
        Buy Now
      </button>
    </div>
  );
}

export default App;
