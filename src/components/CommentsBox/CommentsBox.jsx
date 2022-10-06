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
import BrushIcon from '@mui/icons-material/Brush';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
//ALERT
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from 'react';
import { getComments } from '../../redux/actions/productActionsTest';
import Avatar from '@mui/material/Avatar';
import { banUser, commentDeleteAdmin } from '../../redux/actions/adminActions';

function dateTransform(date){
    const dates = date.substring(0, 10);
    const slice = dates.split("-")
    const spanishDate = `${slice[2]}/${slice[1]}/${slice[0]}`
    return spanishDate
}

export default function CommentsBox({paintId}) {
    
    const loggedUser = useSelector((state) => state.userSignReducer.userData)

    //HOOKS
    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const [modifiedComment, setModifiedComment] = useState("Hola que tal");
    const [newComment, setNewComment] = useState("")
    const [commentIdToDelete, setCommentIdToDelete] = useState({commentId: "", user: ""})
    const [reload, setReload] = useState(false)
    const [paintComments, setPaintComments] = useState()
    //ALERT FUNCTIONS
    const [open, setOpen] = React.useState(false);

    console.log(paintComments)

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
        if(commentIdToDelete.user === "admin"){
            await dispatch(commentDeleteAdmin(commentIdToDelete.commentId))
        } else {
            await dispatch(deleteComment(commentIdToDelete.commentId))
        }
        setReload(!reload)
    }

    async function userBan(user){
        const userT = {
            _id: user._id,
            isBanned: !user.isBanned
        }
        await dispatch(banUser(userT))
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
                <DialogActions>
                    <Button onClick={() => handleCloseDisagree()}>Cancel</Button>
                    <Button onClick={() => handleCloseAgree()} autoFocus>
                        Accept
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
                            { loggedUser.userImage !== undefined ? 
                            <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt="" src={loggedUser.userImage !== undefined ? loggedUser.userImage : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"} />
                                : <Avatar sx={{ width: 40, height: 40 }}>{loggedUser.userName.substring(0, 1).toUpperCase()}</Avatar>}
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
            <div className="flex justify-center w-full py-4 my-4 mx-auto mt-3  sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                <Link to={"/signIn"}>
                    <Button sx={{ fontWeight: 600, fontSize: '2.4rem', width: "300px" ,backgroundColor: "rgba(248, 113, 113)"}} disableElevation variant="contained" size="large">Login<SmsIcon /></Button>
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
                            { loggedUser.userImage !== undefined ? <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt=""
                                src={loggedUser.userImage !== undefined ? loggedUser.userImage : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"} />
                                : <Avatar sx={{ width: 40, height: 40 }}>{loggedUser.userName.substring(0, 1).toUpperCase()}</Avatar>}
                            <div className="flex-col mt-1">
                                <div className="flex items-center relative flex-1 px-4 font-bold leading-tight">{loggedUser.userName}
                                    {loggedUser.isArtist ? <BrushIcon className='text-green-400 ml-2'/> : null}
                                    {loggedUser.isAdmin ? <LocalPoliceIcon className='text-blue-500 ml-2' /> : null}
                                    <span className="ml-2 text-xs font-normal text-gray-500">{dateTransform(comment.date)}</span>
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
                                {editable === false ? <button onClick={() => {handleClickOpen(); setCommentIdToDelete({commentId: comment._id, user: "user"})}} className="inline-flex items-center px-1 ml-1 flex-column rounded-full hover:bg-gray-400">
                                    <DeleteIcon />
                                </button> :
                                null
                                }
                            </div>
                        </div>
                    </div> : 
                    <div className={`flex-col w-full py-4 my-4 mx-auto mt-3 ${comment.userId.isBanned && (loggedUser && loggedUser.isAdmin) ? "bg-red-200" : "bg-white"} border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3`} >
                        <div className="flex flex-row md-10">
                            <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt=""
                                src={comment.userId.userImage ? comment.userId.userImage : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" } />
                            <div className="flex-col mt-1">
                                <div className="flex items-center flex-1 px-4 font-bold leading-tight">{comment.userId.userName}
                                    {comment.userId.isArtist ? <BrushIcon className='text-green-400 ml-2'/> : null}
                                    {comment.userId.isAdmin ? <LocalPoliceIcon className='text-blue-500 ml-2' /> : null}
                                    <span className="ml-2 text-xs font-normal mr-10 text-gray-500">{dateTransform(comment.date)}</span>
                                    {loggedUser && loggedUser.isAdmin ? <>
                                        {comment.userId.isBanned ? <IconButton onClick={() => {userBan(comment.userId)}}><RemoveCircleIcon className='text-red-400' /></IconButton>
                                            :   <IconButton onClick={() => {userBan(comment.userId)}}><RemoveCircleOutlineIcon /></IconButton>
                                        }
                                        <IconButton name="admin" onClick={(e) => {handleClickOpen(); setCommentIdToDelete({commentId: comment._id, user: "admin"})}} ><DeleteForeverIcon /></IconButton>
                                        </>
                                        : null
                                    }
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
