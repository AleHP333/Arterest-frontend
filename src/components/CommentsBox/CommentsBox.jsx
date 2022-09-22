import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

//MUI IMPORTS
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import { IconButton } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
import { addComment, deleteComment } from '../../redux/actions/userActions';
import SmsIcon from '@mui/icons-material/Sms';
import Button from '@mui/material/Button';
//ALERT
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from 'react';

export default function CommentsBox({paintId, comments}) {
    //HOOKS
    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const [modifyComment, setModifyComment] = useState("Hola que tal");
    const [newComment, setNewComment] = useState("")
    const [loggedUser, setLoggedUser] = useState(true)
    const [commentIdToDelete, setCommentIdToDelete] = useState("")

    const [loggedUserData, setLoggedUserData] = useState({name: "Pedro", userImage: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/660_pedro.jpg"})

    //ALERT
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

    //FAKE STATES

    const array = [{_id: 1, comment: "buenardo", userId: 1, name: "Pedro", userImage: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/660_pedro.jpg" },
    {_id: 2, comment: "QUE BUENA PINTURA", userId: 2, name: "Jorge", userImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" },
    {_id: 3, comment: "Na mentira xd", userId: 2, name: "Jorge", userImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" }]

    const [comment, setComment] = useState([
        {_id: 1, comment: "buenardo", userId: 1, name: "Pedro", userImage: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/660_pedro.jpg" },
        {_id: 2, comment: "QUE BUENA PINTURA", userId: 2, name: "Jorge", userImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" },
        {_id: 3, comment: "Na mentira xd", userId: 2, name: "Jorge", userImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" },
    ])
    const [userId] = useState(1)

    //FUNCTIONS
    function handleEdit(id){
        console.log(id)
        setEditable(false)
        const elcomment = comment.find(comment => comment._id === id )
        const index = comment.indexOf(elcomment)
        console.log(index)
        const modify = {...elcomment, comment: modifyComment }
        console.log("modificado", modify)
        let modifiedComments = comment.map(comm => {
            if(comm === comment[index]){
                return modify
            } else {
                return comm
            }
        })
        console.log("arraymod",modifiedComments)
        setComment([...modifiedComments])
        setModifyComment("")
        // dispatch(modifyComment(id, modifyComment))
    }

    useEffect(() => {

    }, [comment])

    function handleComment(e){
        // dispatch(addComment(paintId, newComment))
        let randomId = Math.floor(Math.random() * 100)
        console.log("numeber", randomId)
        let newCommentToSend = {_id: randomId, comment: newComment,name: loggedUserData.name, userId: 1, userImage: loggedUserData.userImage}
        console.log("newComment", newCommentToSend)
        setComment([ newCommentToSend, ...comment])
        setNewComment("")
    }
    console.log("nuevo coment", comment)

    function conditionalAlert(){

    }

    function handleDelete(){
        const filter = comment.filter(comm => comm._id !== commentIdToDelete)
        setComment(filter)
        // dispatch(deleteComment(commentId))
    }

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
                            src={loggedUserData.userImage} />
                        <div className="flex-col mt-1">
                        <div className="flex items-center flex-1 px-4 font-bold leading-tight">{loggedUserData.name}
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
                <Button sx={{ fontWeight: 600, fontSize: '2.4rem', width: "2rem"}} disableElevation variant="contained" size="large">Loggin<SmsIcon /></Button>
            </div>
            }
        </div>
        <hr></hr>
        <div className="bg-gray-100 py-5">
            {comment && comment?.map((comment) => {
                return (
                    comment.userId === userId ?
                    <div
                        className="flex-col w-full py-4 my-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                        <div className="flex flex-row md-10">
                            <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                                src={comment.userImage} />
                            <div className="flex-col mt-1">
                                <div className="flex items-center flex-1 px-4 font-bold leading-tight">{comment.name}
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
                                value={modifyComment}
                                onChange={(e) => {setModifyComment(e.target.value)}}
                                /> :
                                <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                                    {comment.comment}
                                </div> 
                                }
                                { comment._id === editable ? 
                                <IconButton onClick={() => {handleEdit(comment._id)}} sx={{ width: 60, height: 60, mr: "2rem", bgcolor: lightGreen[300], ":hover": { bgcolor: lightGreen[500] } }} aria-label="send">
                                <CheckIcon sx={{ width: 40, height: 40}}/>
                                </IconButton> :
                                editable === false &&
                                <button onClick={() => {setEditable(comment._id); setModifyComment(comment.comment)}} className="inline-flex items-center mx-4 px-1 ml-1 flex-column rounded-full hover:bg-gray-400">
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
                                src={comment.userImage} />
                            <div className="flex-col mt-1">
                                <div className="flex items-center flex-1 px-4 font-bold leading-tight">{comment.name}
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
