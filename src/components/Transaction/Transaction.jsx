import React, { useEffect } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../../redux/actions/InteractionsActions";
import { container_buttons, container } from "./Transaction.module.css";
import { Button } from "react-bootstrap";


export default function Transaction() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const transaction = useSelector(
    (state) => state.interactionsReducer.transactionDetail
  );

  useEffect(() => {
    if (transaction === "success") {
      swal({
        title: `Transacción exitosa`,
        icon: "success",
      });
      if (transaction === "fail") {
        swal({
          title: `Error en la transacción`,
          icon: "error",
        });
      }
      dispatch({ type: "SET_TRANSACTION_DETAIL", payload: "none" });
    }
  }, [transaction]);

  return (
    <div>
      {transaction ? (
        <h1>Loading</h1>
      ) : (
        <div className={container}>
          <h1>Back to:</h1>
          <div className={container_buttons}>
            <br />
            <br />
            <Button onClick={() => navigate("/")}>Home</Button>
            <Button onClick={() => navigate("/profile/buyHistory")}>
             Buy History
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
