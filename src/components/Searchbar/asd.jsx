// From React
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
// Actions
import {
  getProductSearchbar,
  getProductAutocomplete,
  emptyAutocomplete,
} from "../../redux/actions/productActionsTest";
// Icons
import { AiOutlineSearch } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
// Custom Styles
import "./Searchbar.css";
import { listItemTextClasses } from "@mui/material";

export default function Searchba() {
  const [input, setInput] = useState("");
  let [caja, setArray] = useState([1]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let autocomplete = useSelector(
    (state) => state.testReducer.productsAutocomplete
  );

  async function handleStateChanges(e) {
    e.preventDefault();
    setArray([...caja,]);
    await setInput(e.target.value);
    if (e.target.value !== "") {
      await dispatch(getProductAutocomplete(e.target.value));
      setArray(caja.shift());
    } else {
      await dispatch(emptyAutocomplete());
      setArray(caja.shift());
    }
  }

  function clearAutocomplete() {
    dispatch(emptyAutocomplete());
  }

  useEffect(() => {
    if (caja || !caja?.length) {
      dispatch(emptyAutocomplete());
    }
  }, [caja]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input) {
      dispatch(getProductSearchbar(input));
      navigate(`/home?art=${input}`);
    }
    setInput("");
  }

  function deleteActualSearch() {
    setInput("");
  }

  return (
    <div className="flex flex-col w-full">
      <form onSubmit={(e) => handleSubmit(e)} className="flex w-full">
        <button className="" type="submit">
          <AiOutlineSearch />
        </button>
        <input
          className=""
          type="text"
          name="search"
          value={input}
          placeholder="Search..."
          onBlur={() => {
            clearAutocomplete();
          }}
          onChange={handleStateChanges}
          autoComplete="off"
        />
        {input.length > 0 ? (
          <IconButton
            onClick={() => deleteActualSearch()}
            size="small"
            aria-label="delete"
          >
            <CloseIcon className="" fontSize="small" />
          </IconButton>
        ) : null}
      </form>
      <div className="flex w-full">
        <div className="flex flex-col border-solid border-2 bg-white border-gray-100 absolute w-2/3">
          {autocomplete?.slice(0, 5).map((e) => {
            return (
              <Link
                to={`/detail/${e._id}`}
                className="flex cursor-pointer text-start hover:bg-gray-100"
              >
                <div className="flex center h-10 w-8">
                  <img src={e.img} alt="" />
                </div>
                <div>
                  <div>{e.title}</div>
                  <div>by {e.user.userName}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
