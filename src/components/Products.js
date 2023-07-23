import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";
import { getProductsData } from "../store/productSlice";
import { useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  // const [products, setProducts] = useState([]);
  useEffect(() => {
    /* call an api
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result)); */
    //Dispatch an action fetchProducts
    dispatch(getProductsData());
  }, []);

  if (status === "loading") {
    return <p>Loading.........</p>;
  }

  if (status === "error") {
    return <p>Something went wrong!!! Try again</p>;
  }

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product));
  };

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
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <h2 className="text-center">Product Dashboard</h2>
      <div className="row">{cards}</div>
    </>
  );
};

export default Products;
