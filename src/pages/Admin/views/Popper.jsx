import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import { BsFillPencilFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


export default function TransitionsPopper() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate()

  function handleEdit() {
    navigate(`admin/editproduct/${id}`);
  }
  function handleDelete() {

  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
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
                onClick={() => handleEdit()}
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
  );
}