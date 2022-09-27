import React from 'react'
import { useState } from 'react'
//MUI
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';


export default function ArtistRequest() {

    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);

    const [input, setInput] = useState({
        message: "",
        url1: "",
        url2: "",
        url3: ""
    })

    function handleChange(e){

    }

    function handleClose(){
        setOpen(false);
        setInput({
            message: "",
            url1: "",
            url2: "",
            url3: ""
        })
    }

    function handleSubmit(){
        if(!Object.keys(input)){
            return console.log("debes completar campos")
        } else {
            dispatch(sendRequest({...input}))
            setOpen(false);
            setInput({
            message: "",
            url1: "",
            url2: "",
            url3: ""
            })
        }
    }

    return (
        <>
            <Button onClick={() => {setHandleClick(true)}} variant="contained">Become An Artist</Button>
            {click ? 
            <div className='my-50% mx-50%'> 
                    <div className='flex'>

                    <IconButton onClick={() => {handleClose()}} sx={{ width: 60, height: 60, mr: "2rem", bgcolor: lightGreen[300], ":hover": { bgcolor: lightGreen[500] } }} aria-label="send">
                        <CloseIcon sx={{ width: 40, height: 40}}/>
                    </IconButton>
                    </div>
        
                    <TextField
                            sx={{ mx: 2, width: "60vh"}}
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            value={newComment}
                            size="small"
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                <Button onClick={() => {setHandleClick(true)}} variant="contained">Send</Button>
                </div> 
            : null }
        </>
    )
}


export default function BasicModal() {

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
