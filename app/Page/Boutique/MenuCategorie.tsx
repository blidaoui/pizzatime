import store from "@/app/components/store";
import { Card } from "@nextui-org/react";
import React, { useState } from "react";
import { useSnapshot } from "valtio";
import Modal from "../modal/Modal";
import { Listcard } from "@/app/const/Listcard";

function MenuCategorie() {
  const [selectedOption, setSelectedOption] = useState(""); 

  const { id } = useSnapshot(store);
  const [showModal, setShowModal] = useState(false);


  let card = Listcard[id];
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    setShowModal(true); 
  };
  const categorieShop: any = Object.values(card.categories)
  return (
    <Card >
      <div className="d-flex justify-content-between"  style={{ cursor: "pointer" }} >
        <div className="mt-2">
          <ul style={{ backgroundColor: "#FFFFFF" }}>
            {categorieShop
              .slice(0, 10)
              .map((value: any, key: number) => (
                <li key={key}  style={{ cursor: "pointer" }} onClick={() => setShowModal(true)}>
                  {value.title}</li>
            ))}
          </ul>
        </div>
       
          <div className="d-flex align-items-center">
            <select className="max-w-xs nav-link mx-5"  value={selectedOption}
            onChange={handleSelectChange} >
              {categorieShop
                .slice(10, categorieShop.length)
                .map((value: any, key: number) => (
                  <option key={key} value={value.title} >
                    {value.title}
                  </option>
                ))}
            </select>
      {showModal && (
        <>
          <div
            className="modal-background"
            onClick={() => setShowModal(false)}
          />
          <Modal setShowModal={setShowModal} showModal={showModal} />
        </>
      )}
       </div>
      </div>
    </Card>
  );
}

export default MenuCategorie;
