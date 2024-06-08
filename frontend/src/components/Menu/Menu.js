// import React, { useEffect, useContext} from 'react';
// import { Row, Col } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
// import Navbar2 from '../Navbar/Navbar2';
// import Button from 'react-bootstrap/Button';
// import './Menu.css';
// import Badge from 'react-bootstrap/Badge';
// import foodItems from './data';
// import {CartContext} from '../cart/Cart';

// const backendUrl = process.env.REACT_APP_BACKEND_URL;
//   const Menu = () => {
//     const { cartItems, setCartItems } = useContext(CartContext);
  
//     function addToCart(id) {
//       const foodToAdd = foodItems.find((item) => item.food_id === id);
//       if (foodToAdd) {
//         // Check if the food item is already in the cart
//         const existingItem = cartItems.find((item) => item.food_id === id);
//         if (existingItem) {
//           // If the food item is already in the cart, update the quantity and price
//           setCartItems((prevItems) => {
//             return prevItems.map((item) =>
//               item.food_id === id
//                 ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + item.food_price }
//                 : item
//             );
//           });
//         } else {
//           // If the food item is not in the cart, add it as a new item
//           setCartItems((prevItems) => [
//             ...prevItems,
//             { ...foodToAdd, quantity: 1, totalPrice: foodToAdd.food_price },
//           ]);
//         }
//       }
//     }

  

//   const fetchData = () => {
//     // ... Your fetchData function ...
//     // const url="http://localhost:5000/api/foods"
//     const url = `${backendUrl}/api/foods`

//     const params={
//     method:'get',
//     headers:{
//         'Content-Type':'application/json'
//     }
// }
// fetch(url,params).then((res)=>{
//     return res.json()
// }).then((data)=>{
// console.log(data);
// // setFoodData(data)

// })
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Navbar2 />


//       <div className='menu'>
//         <Row xs={1} sm={2} md={3} lg={4}>
//         {foodItems.map((f) => (
//            <Col key={f.food_id}>
//           <Card className='card' key={f.food_id}>
//             <Card.Img variant="top" src={process.env.PUBLIC_URL + '/' + f.food_image} />
//             <Badge bg="secondary">Huge Discounts</Badge>
//             <Card.Body>
//               <Card.Title>{f.food_name}</Card.Title>
//               <Card.Text>Price: {f.food_price} ¥ </Card.Text>
//               <Button variant="primary" onClick={() => addToCart(f.food_id)}>Add to Cart</Button>
//               {/* <Link variant="primary" onClick={() => addToCart(f.food_id)}>Add to Cart</Link> */}
//             </Card.Body>
//             <Card.Text>
        
//         <div className="ratings">
//           {f.ratings}
//                 <i className="fa fa-star rating-color"></i>
//             </div> 
//         </Card.Text>
//           </Card>
//           </Col>
//         ))}
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default Menu;


import React, { useEffect, useContext } from 'react';
import { Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Navbar2 from '../Navbar/Navbar2';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import foodItems from './data';
import { CartContext } from '../cart/Cart';

const Menu = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const fetchData = () => {
    const url = `${backendUrl}/api/foods`;
    const params = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(url, params)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (id) => {
    const foodToAdd = foodItems.find((item) => item.food_id === id);
    if (foodToAdd) {
      const existingItem = cartItems.find((item) => item.food_id === id);
      if (existingItem) {
        setCartItems((prevItems) => {
          return prevItems.map((item) =>
            item.food_id === id
              ? { ...item, quantity: item.quantity + 1, totalPrice: item.totalPrice + item.food_price }
              : item
          );
        });
      } else {
        setCartItems((prevItems) => [
          ...prevItems,
          { ...foodToAdd, quantity: 1, totalPrice: foodToAdd.food_price },
        ]);
      }
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className='menu'>
        <Row xs={1} sm={2} md={3} lg={4}>
          {foodItems.map((f) => (
            <Col key={f.food_id}>
              <Card className='card' key={f.food_id}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/' + f.food_image} />
                <Badge bg="secondary">Huge Discounts</Badge>
                <Card.Body>
                  <Card.Title>{f.food_name}</Card.Title>
                  <Card.Text>Price: {f.food_price} ¥ </Card.Text>
                  <Button variant="primary" onClick={() => addToCart(f.food_id)}>Add to Cart</Button>
                </Card.Body>
                <Card.Text>
                  <div className="ratings">
                    {f.ratings}
                    <i className="fa fa-star rating-color"></i>
                  </div>
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Menu;
