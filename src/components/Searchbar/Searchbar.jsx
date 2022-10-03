// From React
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// Actions
import {
  getProductSearchbar,
  getProductAutocomplete,
} from "../../redux/actions/productActionsTest";
// Icons
import { AiOutlineSearch } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
// Custom Styles
import "./Searchbar.css";

export default function Searchbar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const autocomplete = useSelector(
    (state) => state.testReducer.productsAutocomplete
  );

  function handleStateChanges(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  useEffect(() => {
    dispatch(getProductAutocomplete(input));
  }, []);

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
              <div className="cursor-pointer text-start my-1 mx-0 hover:bg-gray-100">
                <div></div>
                <div>{e.title}</div>
                <div></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
