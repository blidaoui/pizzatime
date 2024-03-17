import React, { ChangeEvent, useEffect } from "react";
import { useSnapshot } from "valtio";
import store from "@/app/components/store";
import { Listcard } from "@/app/const/Listcard";
import i1 from "@/public/image/i1.jpg";
function ItemCategorie() {
  useEffect(() => {
    const cartIcon = document.querySelector(".add-cart");
    const cart = document.querySelector(".offcanvas");
    const closecart = document.querySelector(".btn-close");

    if (cartIcon && cart && closecart) {
      cartIcon.addEventListener("click", () => {
        cart.classList.add("active");
      });

      closecart.addEventListener("click", () => {
        cart.classList.add("active");
      });
    }

    // Nettoyage des écouteurs d'événements lors du démontage du composant
    return () => {
      if (cartIcon && cart && closecart) {
        cartIcon.removeEventListener("click", () => {
          cart.classList.add("active");
        });
      }
    };
  }, []);

  useEffect(() => {
    const removeCartButtons = document.querySelectorAll(".cart-remove"); // Utilisation de querySelectorAll pour obtenir tous les boutons avec la classe 'cart-remove'

    removeCartButtons.forEach((button) => {
      button.addEventListener("click", removeCartItem); // Ajout d'un écouteur d'événements 'click' à chaque bouton
    });
    return () => {
      // Nettoyage des écouteurs d'événements lors du démontage du composant
      removeCartButtons.forEach((button) => {
        button.removeEventListener("click", removeCartItem);
      });
    };
  }, []); // Utilisation d'un tableau vide comme dépendance pour n'exécuter l'effet qu'une seule fois
  useEffect(() => {
    const quantityInputs = document.querySelectorAll(".cart-quantity"); // Utilisation de querySelectorAll pour obtenir tous les boutons avec la classe 'cart-remove'

    quantityInputs.forEach((input) => {
      // var input=quantityInputs[i];
      input.addEventListener("change", quantityChanged);
      // Ajout d'un écouteur d'événements 'click' à chaque bouton
    });
    return () => {
      // Nettoyage des écouteurs d'événements lors du démontage du composant
      quantityInputs.forEach((input) => {
        input.addEventListener("change", quantityChanged);
      });
    };
  }, []);
  function removeCartItem(event: any) {
    const buttonClicked = event.target;
    buttonClicked.parentElement?.remove(); // Suppression de l'élément parent du bouton (le cart-box)
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
      total = total + price * quantity;
      total = Math.round(total * 100) / 100;
    }
    var totalPriceElement = document.getElementsByClassName("total-price")[0];
    if (totalPriceElement) {
      totalPriceElement.innerHTML = `$${total.toFixed(2)}`; // Affichage du total avec 2 décimales
    }
  }
  const { id } = useSnapshot(store);
  let card = Listcard[id];
  return (
    <>
      <div></div>
      <div className="shop container">
        <div className="row row-cols-1 row-cols-md-4">
          {Object.entries(card.categories).map(([key, value]: any) => (
            <div className="col-sm my-3">
              <div className="shop-content" style={{ width: "18rem" }}>
                <div className="product-box">
                  <h5 className="card-title">{value.title}</h5>
                  <img
                    className="product-img"
                    src={value.image}
                    alt="Card image cap"
                  />
                  <span className="price">{value.price}</span>
                  <button
                    className="add-cart"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                    type="button"
                  >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXxJREFUSEvt1r9LVlEcx/GX4JbQ6hShUG4Z0qZig2OBW0jg/+AQJE5CY+i/ENLgIghCi1BUW0I4BWKie+DiavgcOY883e7tfk8Ij8Nzt3PO53ze9/uDe79D+vQM9Ynrf8DDeIyp/NL7+I6LkiBKwEn7Gq9wtwI5wxo2ovAS8CZethivYzkCj4IX8T4bnmbzz3k9h7e4l9fz2GuDR8E/MYaU0gf4VTEe7WTjCHfwFTM3AR7PpslrFW8aTNP+Cn7nHjj/FzwS8TS+ZJNn2G0wfN7p9p189gSp2xufCDjV8GN2eIpPDW5R3dX1KngEB7mebWUqOT/GI1ynvwpOTdHt1hLjiHa2p2R/Rdybrnc4wX0sZefuXh2oTte790eZqhHX1Slau6K7txocqV+TpjFbkYgH4JIMDFJ9/bkdNFf0KxVtsNvfXBP4EQ2nUPcQh907dYPAduefvFBo2ibfwoteUR047aUxZrJmUGgDVM/T/PUNH6oHkdGnFBbS9w18CQsNax/K6ElAAAAAAElFTkSuQmCC" />
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
                              <div className="cart-box">
                                <img src="" alt="" className="cart-img" />
                                <div className="detail-box">
                                  <div className="cart-product-title"></div>

                                  <div className="cart-price">25$</div>
                                  <input
                                    defaultValue={1}
                                    type="number"
                                    className="cart-quantity"
                                  />
                                </div>
                                <img
                                  className="bx bxs-trash-alt cart-remove"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAOZJREFUSEvtlkEOAUEQRd/EyoojOIK4AM7AwoJwA4m4hQVHkLCRcIbhAuIIjsDKTugEmQw9NTUjaZLubVfV619VXd0BjlbgiIsGXADGQNFy2AswAa5pxGjAM2AoBJ0Co2+C+8A8TUCgA6wk27jiBhBKThn3m8D26fsz4AowyKhIcjOlOtoUR52rQFmKJuyfgMMnm6SuNvWo5wTv7nU1ffO2PDiaEp/qLH3mm+uVNX+d/HXys1o7RP5rgKyBllZizH4DtLXvcRdY5AT3gKUWbOxrj19ISXmAM2Dqu7f5aT70SnayuTPwDXrVNh/ho6CWAAAAAElFTkSuQmCC"
                                  alt="Remove"
                                />
                              </div>
                            </div>

                            <div className="total">
                              <div className="total-title">total:</div>
                              <div className="total-price">0 $</div>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default ItemCategorie;
