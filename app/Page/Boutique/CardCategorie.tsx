"use client";
import React, { useState } from "react";
import { useSnapshot } from "valtio";
import store from "@/app/components/store";
import { Listcard } from "@/app/const/Listcard";
import Modal from "../modal/Modal";

function CardCategorie() {
  const [showModal, setShowModal] = useState(false);

  const { id } = useSnapshot(store);
  let card = Listcard[id];
  return (
    <div>
      <div className="shop container">
        <div className="row row-cols-1 row-cols-md-4">
          {Object.entries(card.categories).map(([key, value]: any) => (
            <div className="col-sm my-3">
              <div className="shop-content" style={{ width: "18rem" }}>
                <div className="product-box">
                  <h5 className="card-title">{value.title}</h5>
                  <img
                    className="product-img"
                    onClick={() => setShowModal(true)}
                    src={value.image}
                    alt="Card image cap"
                  />
                  {showModal ? (
                    <>
                      <div
                        className="modal-background"
                        onClick={() => setShowModal(false)}
                      />
                      <Modal
                        setShowModal={setShowModal}
                        showModal={showModal}
                      />
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CardCategorie;
