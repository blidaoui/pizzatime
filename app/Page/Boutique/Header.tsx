"use client";
import React from "react";
import { useSnapshot } from "valtio/react";
import { Card } from "@nextui-org/react";
import Icons from "@/app/components/Icons/Icons";
import ImgHeader from "@/app/components/imageHeader/ImgHeader";
import store from "@/app/components/store";
import ModalInfo from "../modal/ModalInfo";
import { ListShop } from "@/app/const/ListShop";

function Header() {
  const [showModal, setShowModal] = React.useState(false);
  const { id } = useSnapshot(store);
  const companyToShow: any = ListShop[id];
  return (
    <div style={{ position: "relative" }}>
      <ImgHeader />
      <Card>
        <div
          style={{
            position: "absolute",
            top: "50%",
            height: "14rem",
            width: "30%",
            left: "20%",
            transform: "translate(-50%, -50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {companyToShow && (
            <>
              <p>{`${companyToShow.Company.replace(/\s/g, "")}`} </p>
              <p>
                ouvert de {companyToShow.openingTime} à{" "}
                {companyToShow.closingTime}{" "}
              </p>
              <p>
                {companyToShow.Address},{companyToShow.PostalCode}{" "}
                {companyToShow.town}
              </p>
            </>
          )}
          <p className="" role="button" onClick={() => setShowModal(true)}>
            Informations utiles
          </p>
          <Icons />
          <ModalInfo setShowModal={setShowModal} showModal={showModal} />
        </div>
      </Card>
    </div>
  );
}
export default Header;
