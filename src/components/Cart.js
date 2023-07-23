import React from "react";
import { useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { remove } from "../store/CartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(productCart);

  const cards = products.map((product) => {
    const removeFromCart = (id) => {
      dispatch(remove(id));
    };
    return (
      <div className="col-md-12 text-center" style={{ marginBottom: "10px" }}>
        <Card key={product.id} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>

          <Card.Footer style={{ background: "white" }}>
            <Button variant="danger" onClick={() => removeFromCart(product.id)}>
              Remove from Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <h2 className="text-center">My Cart</h2>
      {cards}
    </>
  );
};

export default Cart;
