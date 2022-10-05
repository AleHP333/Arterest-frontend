import React, { useEffect } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import "./Tran.css";
import { Button } from "react-bootstrap";
import f from "../../assets/fail.png"


export default function TransF() {
  const navigate = useNavigate();


  const transact = "error";

  useEffect(() => {
    if (transact === "success") {
      swal({
        title: `Succesfully transaction`,
        icon: "success",
      });
      if (transact === "fail") {
        swal({
          title: `Failed transaction`,
          icon: "error",
        });
      }
    }
  }, []);

  return (
    <div>

      {!transact ? (
        <h1>Loading</h1>
        ) : (
          <div className="container1" >
          <div>
            <div className="container_buttons">
              <br />
              <br />
              <Button className="butt" onClick={() => navigate("/home")}>
                Home
              </Button>
              <Button
                className="butt"
                onClick={() => navigate("/cart")}
              >
                Cart
              </Button>
            </div>
          </div>
        </div>
      )}
          <img className="img" src= {f}>

          </img>
    </div>
  );
}
