import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../../redux/actions/productActionsTest';
// import Popper from '../views/Popper'
import { useNavigate, Link, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import { BsFillPencilFill } from 'react-icons/bs'



const AllArtWork = () => {
  const dispatch = useDispatch()
  const artwork = useSelector((state) => state.testReducer.allProducts)
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate()
  const { _id } = useParams()
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;


  useEffect(() => {
    dispatch(getAllProducts(dispatch));
  }, [dispatch]);


  function handleEdit(_id) {
    navigate(`/admin/editproduct/${_id}`);
  }
  
  function handleDelete() {

  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };




  return (
    <>

      <div className="relative" >

        {/* Header */}
        <div className="w-full h-48 bg-red-600 mx-auto rounded absolute inset-x-0 top-0 -mt-24 flex items-center justify-center">

        </div>
        <div className="container  px-4  md:container md:px-10 mx-auto w-full -m-24">
          <div className="container absolute px-4  md:container md:px-10 mx-auto w-full -m-24">

            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700">
                      All Artworks
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <Link to='/admin'>
                      <button
                        className="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        BACK
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                {/* Projects table */}
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Artwork Title
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Artist Name
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Preview
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Modify
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {artwork.length ? artwork.map((art) => {
                      return (
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {art.title}
                          </th>

                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {art._id}
                          </th>

                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {art.userName}
                          </td>

                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            <img src={art.img} className='w-24 h-32 scale-x-150 scale-y-150' />
                          </td>

                          <td className="flex border-t-0 px-6 ml-4 text-xs whitespace-nowrap p-4 cursor-pointer">
                            <div>
                              <button aria-describedby={id} type="button" onClick={handleClick}>
                                <BsFillPencilFill />
                              </button>

                              <Popper id={id} open={open} anchorEl={anchorEl} transition>
                                {({ TransitionProps }) => (
                                  <Fade {...TransitionProps} timeout={350}>
                                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                                      <button
                                        type='button'
                                        onClick={() => handleEdit(art._id)}
                                      >Edit
                                      </button>
                                      <button
                                        type='button'
                                        onClick={() => handleDelete()}
                                      >Delete
                                      </button>
                                    </Box>
                                  </Fade>
                                )}
                              </Popper>

                            </div>
                          </td>

                        </tr>
                      )
                    }) : 'hola'}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default AllArtWork;

