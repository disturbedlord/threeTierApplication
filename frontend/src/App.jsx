import { useEffect, useState } from "react";

function App() {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    fetch("/api/rate") // this hits the Nginx middleware
      .then((res) => res.json())
      .then((data) => setRate(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Gold Price</h1>
      {rate ? (
        <p style={{ fontSize: "24px" }}>{rate.gold_price} ₹</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
