import { useNavigate, useHistory } from "react-router-dom";

function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div>Order Confirmed</div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}

export default OrderSummary;
