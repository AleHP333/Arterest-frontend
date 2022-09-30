import React, { useEffect } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import  "./Tran.css";
import { Button } from "react-bootstrap";
import axios from 'axios';


export default function Transaction() {
  const navigate = useNavigate();
  
  // const transact = async () => {
  //  let transaction = await axios(`http://localhost:3001/capture-order`);
  //   return transaction.data.data
    
   
       
  // };

  const transact = "success"

  
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
        <div className="container" >
          <h1>Back to:</h1>
          <div className="container_buttons" >
            <br />
            <br />
            <Button className="butt" onClick={() => navigate("/home")}>Home</Button>
            <Button className="butt" onClick={() => navigate("/profile/history")}>
             Buy History
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
