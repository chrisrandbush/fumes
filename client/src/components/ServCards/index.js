import React, { useEffect, useState } from "react";
import "./style.css";
import api from "../../utils/api";

function ServCards() {
  const [serviceState, setServiceState] = useState([]);

  useEffect(() => {
    api.services().then((res) => {
      setServiceState(res.data);
      // ServiceArr = res.data;
      console.log(serviceState);
    });
  }, []);

  let cart = [];

  const addCart = (name, value, description) => {
    cart.push(name, value, description);
    // console.log(cart);
    api
      .pushCart({
        name: name,
        value: value,
        description: description,
      })
      .then((res) => {
        console.log("ADD CART WORKED");
      });
  };

  return (
    <section className="serviceMain pt-5">
      {serviceState ? (
        <div className="container" id="cardGrid">
          {serviceState.map((allServices) => {
            return (
              <React.Fragment>
                <div
                  className="card-box"
                  id="servCard"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h2 className="card-title">{allServices.name}</h2>
                    <p className="card-text">{allServices.description}</p>
                    <p className="card-text">$ {allServices.value}</p>

                    <i
                      href="#"
                      data-product="0"
                      className="card-link fa fa-cart-plus"
                      onClick={() =>
                        addCart(
                          allServices.name,
                          allServices.value,
                          allServices.description
                        )
                      }
                    >
                      Add to Cart
                    </i>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
}

export default ServCards;
