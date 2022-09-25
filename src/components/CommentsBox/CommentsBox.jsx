import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//MUI IMPORTS
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import { IconButton } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import { addComment, deleteComment, modifyComment } from '../../redux/actions/userActions';
import SmsIcon from '@mui/icons-material/Sms';
import Button from '@mui/material/Button';
//ALERT
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from 'react';
import { getComments } from '../../redux/actions/productActionsTest';

export default function CommentsBox({paintId}) {
    
    const loggedUser = useSelector((state) => state.userSignReducer.userData)

    //HOOKS
    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const [modifiedComment, setModifiedComment] = useState("Hola que tal");
    const [newComment, setNewComment] = useState("")
    const [commentIdToDelete, setCommentIdToDelete] = useState("")
    const [reload, setReload] = useState(false)
    const [paintComments, setPaintComments] = useState()
    //ALERT FUNCTIONS
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    function handleCloseDisagree(){
        setOpen(false);
    }

    const handleCloseAgree = () => {
        handleDelete()
        setOpen(false);
    };

    //FUNCTIONS
    //EDIT COMMENT
    function handleEdit(id, commentBefore){
        if(modifiedComment !== commentBefore){
            dispatch(modifyComment(id, modifiedComment)).then(response => setPaintComments(response))
        } 
        setEditable(false)
        setModifiedComment("")
    }

    //ADD COMMENT
    function handleComment(e){
        dispatch(addComment(paintId, newComment)).then(response => setPaintComments(response))
        setNewComment("")
    }
    //DELETE COMMENT
    async function handleDelete(){
        await dispatch(deleteComment(commentIdToDelete))
        setReload(!reload)
    }

    //USE EFFECT
    useEffect(() => {
        dispatch(getComments(paintId)).then(response => setPaintComments(response))
    }, [reload])

    return (
    <div>
        {
        <>
            <div>
                <Dialog
                    open={open}
                    onClose={() => handleCloseDisagree()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure to delete the comment?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        If you delete your comment, it will disapear from the comment box
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleCloseDisagree()}>Disagree</Button>
                    <Button onClick={() => handleCloseAgree()} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
                 </Dialog>
            </div>        
        </>
        }
        <div className="w-full">
            <h2 className="pb-8 shadow-md text-5xl text-center font-bold">Comments</h2>
            <div className="m-10 underline text-3xl ml-20 font-bold">{ loggedUser ? "Leave a comment!" : "Login and comment!"}</div>
            { loggedUser ? <div
                className="flex-col w-full py-4 my-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                    <div className="flex flex-row md-10">
                        <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                            src={loggedUser.userImage} />
                        <div className="flex-col mt-1">
                        <div className="flex items-center flex-1 px-4 font-bold leading-tight">{loggedUser.userName}
                            <span className="ml-2 text-xs font-normal text-gray-500">Write below</span>
                        </div>
                        <TextField
                            sx={{ mx: 2, width: "60vh"}}
                            id="outlined-multiline-static"
                            multiline
                            rows={2}
                            value={newComment}
                            size="small"
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <IconButton onClick={() => handleComment()} sx={{ width: 60, height: 60, mr: "2rem" }} aria-label="send">
                            <SendIcon/>
                        </IconButton>        
                    </div>
                </div>
            </div> : 
            <div className="flex justify-center w-full py-4 my-4 mx-auto mt-3 bg-gray-300 border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                <Link to={"/signIn"}>
                    <Button sx={{ fontWeight: 600, fontSize: '2.4rem', width: "2rem"}} disableElevation variant="contained" size="large">Login<SmsIcon /></Button>
                </Link>
            </div>
            }
        </div>
        <hr></hr>
        <div className="bg-gray-100 py-5">
            {paintComments && paintComments?.map((comment) => {
                return (
                    loggedUser && comment.userId._id === loggedUser._id ?
                    <div
                        className="flex-col w-full py-4 my-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                        <div className="flex flex-row md-10">
                            <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                                src={loggedUser.userImage ? loggedUser.userImage : "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/660_pedro.jpg"} />
                            <div className="flex-col mt-1">
                                <div className="flex items-center flex-1 px-4 font-bold leading-tight">{loggedUser.userName}
                                    <span className="ml-2 text-xs font-normal text-gray-500">3 days ago</span>
                                </div>
                                { comment._id === editable ? 
                                <TextField
                                sx={{ mx: 2, width: "60vh"}}
                                id="outlined-multiline-static"
                                multiline
                                rows={2}
                                defaultValue=""
                                size="small"
                                value={modifiedComment}
                                onChange={(e) => {setModifiedComment(e.target.value)}}
                                /> :
                                <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                                    {comment.comment}
                                </div> 
                                }
                                { comment._id === editable ? 
                                <IconButton onClick={(e) => {handleEdit(comment._id, comment.comment )}} sx={{ width: 60, height: 60, mr: "2rem", bgcolor: lightGreen[300], ":hover": { bgcolor: lightGreen[500] } }} aria-label="send">
                                <CheckIcon sx={{ width: 40, height: 40}}/>
                                </IconButton> :
                                editable === false &&
                                <button onClick={() => {setEditable(comment._id); setModifiedComment(comment.comment)}} className="inline-flex items-center mx-4 px-1 ml-1 flex-column rounded-full hover:bg-gray-400">
                                    <EditIcon />
                                </button>
                                }
                                {editable === false ? <button onClick={() => {handleClickOpen(); setCommentIdToDelete(comment._id)}} className="inline-flex items-center px-1 ml-1 flex-column rounded-full hover:bg-gray-400">
                                    <DeleteIcon />
                                </button> :
                                null
                                }
                            </div>
                        </div>
                    </div> : 
                    <div className="flex-col w-full py-4 my-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                        <div className="flex flex-row md-10">
                            <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                                src={comment.userId.userImage ? comment.userId.userImage : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"} />
                            <div className="flex-col mt-1">
                                <div className="flex items-center flex-1 px-4 font-bold leading-tight">{comment.userId.userName}
                                    <span className="ml-2 text-xs font-normal text-gray-500">3 days ago</span>
                                </div>
                                <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                                    {comment.comment}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })} 
        </div>
    </div>
  )
}
