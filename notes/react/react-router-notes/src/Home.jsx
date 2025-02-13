import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
      <button onClick={() => navigate("order-summary")}>Place Order</button>
    </>
  );
}

export default Home;
