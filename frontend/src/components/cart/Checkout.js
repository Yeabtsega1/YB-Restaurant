import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import "./Checkout.css"
import image from "./../images/food.webp"
import { CartContext } from '../cart/Cart';

export default function Checkout() {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <>
      <div style={{ height: "100%", backgroundImage: `url(${image})`, backgroundSize: "cover", fontFamily: ' "Merriweather", serif' }}>
        <div className="checkout-container">
          <h1 className="h1" >
            <div> Your Food Cart</div>
          </h1>
          <Link className="btn btn-light mx-1" to="/Home" role="button">
            Back
          </Link>
          <h3 className="h3">
            <i>Checkout your favourite food Added: </i>
          </h3>
          <div className="cart-container">
            {cartItems.map((item, index) => (
              <div className="fooditem" key={`${item.food_id}_${index}`}>
                <div className="foodname">{item.food_name}</div>
                <div>{item.food_price} ¥</div>
                <div>{item.quantity}</div>
                <div>{item.food_price * item.quantity} ¥</div>
              </div>
            ))}
            <div className="coupon">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Have a coupon code"
                  aria-label=""
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-primary" id="button-addon2">
                  Apply
                </Button>
              </InputGroup>
            </div>
            {/* Display the total price for all items */}
            <div className="total-price">Total Price:{totalPrice} ¥</div>
          </div>
        </div>
        <Link
          className="btn btn-primary mx-auto" style ={{position: "fixed", bottom: "0px", width: "100px", height: "50px", left: "50%", transform: "translate(-50%, -50%)"}}
          to="/payment">Payment</Link>
      </div>
    </>
  );
}


// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
// import "./Checkout.css";
// import image from "./../images/food.webp";
// import { CartContext } from '../cart/Cart';

// export default function Checkout() {
//   const { cartItems, totalPrice } = useContext(CartContext);

//   return (
//     <>
//       <div style={{ height: "100%", backgroundImage: `url(${image})`, backgroundSize: "cover", fontFamily: ' "Merriweather", serif' }}>
//         <div className="checkout-container">
//           <h1 className="h1" >
//             <div> Your Food Cart</div>
//           </h1>
//           <h2 className="h2">
//             <i>Checkout your favourite food Added: </i>
//           </h2>
//           <Link className="btn btn-light mx-1" to="/Home" role="button">
//             Back
//           </Link>
//           <div className="cart-container">
//             {cartItems.map((item, index) => (
//               <div className="fooditem" key={`${item.food_id}_${index}`}>
//                 <div className="foodname">{item.food_name}</div>
//                 <div>{item.food_price} ¥</div>
//                 <div>{item.quantity}</div>
//                 <div>{item.food_price * item.quantity} ¥</div>
//               </div>
//             ))}
//              <div className="total-price">Total Price:{totalPrice} ¥</div>
//             <div className="coupon">
//               <InputGroup className="mb-3">
//                 <Form.Control
//                   placeholder="Have a coupon code"
//                   aria-label=""
//                   aria-describedby="basic-addon2"
//                 />
//                 <Button variant="outline-primary" id="button-addon2">
//                   Apply
//                 </Button>
//               </InputGroup>
//             </div>
//             {/* Display the total price for all items */}
//           </div>
//         </div>
//         <Link
//           className="btn btn-primary mx-auto"
//           to="/payment">Payment</Link>
//       </div>
//     </>
//   );
// }


