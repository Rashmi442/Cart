// import React from "react";

// const CartSummary = ({ count }) => {
//   return (
//     <div>
//       <h3>Items in Cart: {count}</h3>
//     </div>
//   );
// };

// export default CartSummary;
import React from "react";

const Cartsummary = ({ cart }) => {
  // claculate thet total price from cart item
  //reduce()-add all items prices together
  //sum - total value
  //price - current product price
  //total -is final amount
  //0 -Initial value of total

  const total = cart.reduce((sum, price) => sum + price, 0);
  return (
    <div>
      <h3>Total Amount : ₹{total}</h3>
    </div>
  );
};

export default Cartsummary;
