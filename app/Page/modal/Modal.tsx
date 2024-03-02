import { Button } from "@nextui-org/react";
import Image from "next/image";
import moto from "@/app/image/moto.png";
import panierrepas from "@/app/image/panierrepas.png";


const App = ({ showModal, setShowModal }: any) => {
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="modal1">
      {showModal && ( 
      <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span> 
            <h2 className="modal-title"> Modes de retrait</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="modal-body">
                <a href="">
                  <Image
                    src={moto}
                    alt="moto"
                    style={{
                      width: "30%",
                      height: "30%",
                    }}
                    className="hidden md:block"
                  />{" "}
                </a>
                <div>a importer</div>
              </div>
              <div>
                <a href="">
                  <Image
                    src={panierrepas}
                    alt="pizza"
                    className="hidden md:block"
                    style={{
                      width: "30%",
                      height: "30%",
                    }}
                  />
                </a>
                <div> en livraison</div>
              </div>
            </div>
            <div className="text">
              {" "}
              <h5 className=" text-center  mb-3  "> Aujourd hui</h5>
            </div>
            <div id="liste_select">
              <select
                id="zoneSelect"
                className="form-select form-select-lg mb-3 text-center "
              >
                <option selected id="1" value="20240229 181500">
                  18h15
                </option>
                <option value="20240229 183000">18h30</option>
                <option value="20240229 230000">23h00</option>
              </select>
            </div>
            <Button className="button">valider</Button>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .modal-title{
          align-items: center;
          justify-content: center;
          text-align:center;
        }
        .modal-body{
          align-items: center;
          justify-content: center;
          text-align:center;
        }
        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          width: 30%;
          height: 70%;
        }
        .close {
          cursor: pointer;
          background-color: red;
          width: 5%;
          height: 5%;
          justify-content: center;
          align-items: right;
        }
      `}</style>
    </div>
  );
};

export default App;
