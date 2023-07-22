import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //call an api
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const cards = products.map((product) => {
    return (
      <div className="col-md-3" style={{ marginBottom: "10px" }}>
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
            <Button variant="primary">Add to Cart</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Products;
