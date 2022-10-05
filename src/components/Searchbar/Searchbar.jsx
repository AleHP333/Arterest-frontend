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

export default function Searchbar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let autocomplete = useSelector(
    (state) => state.testReducer.productsAutocomplete
  );

  function handleStateChanges(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function clearAutocomplete() {
    setInput("");
    dispatch(emptyAutocomplete());
  }

  useEffect(() => {
    if (input !== "") {
      dispatch(getProductAutocomplete(input));
    } else {
      dispatch(emptyAutocomplete());
    }
  }, [input, setInput]);

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
    <div className="flex flex-col md:w-1/3 w-full">
      <form
        onSubmit={(e) => handleSubmit(e)}
        onBlur={() => {
          clearAutocomplete();
        }}
        className="flex justify-start w-full overflow-hidden border-2 border-gray-300 rounded-full text-gray-500 items-center px-4 py-1"
      >
        <button>
          <AiOutlineSearch
            onMouseDown={() => {
              navigate(`/home?art=${input}`);
              console.log("mouse", input);
            }}
          />
        </button>

        <input
          className="self-center focus:outline-none w-full"
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
      {autocomplete.length && input !== "" ? (
        <div className="flex w-full relative justify-center mt-1 border-none">
          <div className="flex flex-col border-solid border-1 bg-white border-gray-300 absolute w-full rounded-3xl overflow-hidden">
            {autocomplete?.slice(0, 5).map((e) => {
              return (
                <Link
                  to={`/detail/${e._id}`}
                  onMouseDown={() => navigate(`/detail/${e._id}`)}
                  className="flex cursor-pointer text-start  hover:bg-gray-100 border-b"
                >
                  <div className="flex center h-5/6 w-1/6">
                    <img
                      src={e.img}
                      alt=""
                      className="h-full object-center object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-start ml-1 my-auto gap-1">
                    <div className="font-bold">{e.title}</div>
                    <div className="text-gray-500">by {e.user.userName}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
