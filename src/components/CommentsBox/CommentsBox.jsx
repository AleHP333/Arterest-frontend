import React, { useState } from 'react'


//MUI IMPORTS
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import { IconButton } from '@mui/material';
import { lightGreen } from '@mui/material/colors';

export default function CommentsBox() {
    
    const [editable, setEditable] = useState(false)

    return (
    <div>
        <div className="w-full">
            <h2 className="pb-8 shadow-md text-5xl text-center font-bold">Comments</h2>
            <div className="m-10 underline text-3xl ml-20 font-bold">Leave a comment!</div>
            <div
                className="flex-col w-full py-4 my-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                    <div className="flex flex-row md-10">
                        <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                        <div className="flex-col mt-1">
                        <div className="flex items-center flex-1 px-4 font-bold leading-tight">Anonymous
                            <span className="ml-2 text-xs font-normal text-gray-500">3 days ago</span>
                        </div>
                        <TextField
                            sx={{ mx: 2, width: "60vh"}}
                            id="outlined-multiline-static"
                            multiline
                            rows={2}
                            defaultValue=""
                            size="small"
                        />
                        <IconButton sx={{ width: 60, height: 60, mr: "2rem" }} aria-label="send">
                            <SendIcon/>
                        </IconButton>
                            
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className="bg-gray-100 py-5">
            {/* {comments && comments?.map((comment) => {
                return ( */}
                    <div
                        className="flex-col w-full py-4 my-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                        <div className="flex flex-row md-10">
                            <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                            <div className="flex-col mt-1">
                                <div className="flex items-center flex-1 px-4 font-bold leading-tight">Anonymous
                                    <span className="ml-2 text-xs font-normal text-gray-500">3 days ago</span>
                                </div>
                                {editable === false ? <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600" contentEditable={editable}>Very cool! I'll have
                                    to learn more about Tailwind.
                                </div> :
                                <TextField
                                sx={{ mx: 2, width: "60vh"}}
                                id="outlined-multiline-static"
                                multiline
                                rows={2}
                                defaultValue="Very cool!"
                                size="small"
                                />
                                }
                                {editable === false ? 
                                <button onClick={() => {setEditable(true)}} className="inline-flex items-center mx-4 px-1 ml-1 flex-column rounded-full hover:bg-gray-400">
                                    <EditIcon />
                                </button> :
                                <IconButton onClick={() => {setEditable(false)}} sx={{ width: 60, height: 60, mr: "2rem", bgcolor: lightGreen[300], ":hover": { bgcolor: lightGreen[500] } }} aria-label="send">
                                    <CheckIcon sx={{ width: 40, height: 40}}/>
                                </IconButton>
                                }
                                {editable === false ? <button className="inline-flex items-center px-1 ml-1 flex-column rounded-full hover:bg-gray-400">
                                    <DeleteIcon />
                                </button> :
                                null
                                }
                            </div>
                        </div>
                    </div>
                {/* )
            })} */}
        </div>
    </div>
  )
}
