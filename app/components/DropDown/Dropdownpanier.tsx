import React, { useEffect } from "react";

function Dropdownpanier(): React.JSX.Element {
  useEffect(() => {
    const cartIcon = document.querySelector(".cart-icon");
    const cart = document.querySelector(".offcanvas");
    const closecart = document.querySelector(".btn-close");

    if (cartIcon && cart && closecart) {
      cartIcon.addEventListener("click", () => {
        cart.classList.add("active");
      });

      closecart.addEventListener("click", () => {
        cart.classList.remove("active");
      });
    }

    // Nettoyage des écouteurs d'événements lors du démontage du composant
    return () => {
      if (cartIcon && cart && closecart) {
        cartIcon.removeEventListener("click", () => {
          cart.classList.add("active");
        });
        closecart.removeEventListener("click", () => {
          cart.classList.remove("active");
        });
      }
    };
  }, []);

  useEffect(() => {
    const removeCartButtons = document.querySelectorAll(".cart-remove");

    removeCartButtons.forEach((button) => {
      button.addEventListener("click", removeCartItem);
    });
    return () => {
      removeCartButtons.forEach((button) => {
        button.removeEventListener("click", removeCartItem);
      });
    };
  }, []);

  useEffect(() => {
    const quantityInputs = document.querySelectorAll(".cart-quantity");

    quantityInputs.forEach((input) => {
      input.addEventListener("change", quantityChanged);
    });
    return () => {
      quantityInputs.forEach((input) => {
        input.removeEventListener("change", quantityChanged);
      });
    };
  }, []);

  function removeCartItem(event: any) {
    const buttonClicked = event.target;
    buttonClicked.parentElement?.remove();
    updatetotal();
  }

  function quantityChanged(event: any) {
    var input = event.target;
    if (isNaN(input.value) || input.value < 1) {
      input.value = "1";
    }
    updatetotal();
  }

  function updatetotal() {
    var cartContext = document.getElementsByClassName("cart-context")[0];
    var carBoxes = cartContext.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < carBoxes.length; i++) {
      var cartBox = carBoxes[i];
      var priceElement = cartBox.getElementsByClassName("cart-price")[0];
      var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
      var price = parseFloat(priceElement.innerHTML.replace("$", ""));
      var quantity = parseInt((quantityElement as HTMLInputElement).value);
      total += price * quantity;
    }
    var totalPriceElement = document.getElementsByClassName("total-price")[0];
    if (totalPriceElement) {
      totalPriceElement.innerHTML = `$${total.toFixed(2)}`;
    }
  }

  return (
    <nav className="navbar mt-4 mb-3 mx-5 position-absolute fixed-top ">
      <div className="container-fluid align-items-center">
        <div></div>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <img
            className="cart-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXxJREFUSEvt1r9LVlEcx/GX4JbQ6hShUG4Z0qZig2OBW0jg/+AQJE5CY+i/ENLgIghCi1BUW0I4BWKie+DiavgcOY883e7tfk8Ij8Nzt3PO53ze9/uDe79D+vQM9Ynrf8DDeIyp/NL7+I6LkiBKwEn7Gq9wtwI5wxo2ovAS8CZethivYzkCj4IX8T4bnmbzz3k9h7e4l9fz2GuDR8E/MYaU0gf4VTEe7WTjCHfwFTM3AR7PpslrFW8aTNP+Cn7nHjj/FzwS8TS+ZJNn2G0wfN7p9p189gSp2xufCDjV8GN2eIpPDW5R3dX1KngEB7mebWUqOT/GI1ynvwpOTdHt1hLjiHa2p2R/Rdybrnc4wX0sZefuXh2oTte790eZqhHX1Slau6K7txocqV+TpjFbkYgH4JIMDFJ9/bkdNFf0KxVtsNvfXBP4EQ2nUPcQh907dYPAduefvFBo2ibfwoteUR047aUxZrJmUGgDVM/T/PUNH6oHkdGnFBbS9w18CQsNax/K6ElAAAAAAElFTkSuQmCC"
          />
        </button>
     
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="cart-title" id="offcanvasNavbarLabel">
              {" "}
              your cart
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <header className="header">
              <div className="nav container">
                <div className="cart">
                  <h2 className="cart-title"> </h2>
                  <div className="cart-context">
                    
                  </div>

                  <div className="total">
                    <div className="total-title">total:</div>
                    <div className="total-price"></div>
                  </div>
                  <button type="button" className="btn-buy">
                    Buy now
                  </button>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Dropdownpanier;
