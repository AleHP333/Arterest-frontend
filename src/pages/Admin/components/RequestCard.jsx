import React from 'react'

//MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { turnArtist } from '../../../redux/actions/adminActions';

export default function RequestCard({img, _id, requestId, isArtist, userName, email, msg, url1, url2, url3, setReload, reload}) {

    const dispatch = useDispatch()

    function handleApprove(e){
        if(e.target.value === "yes"){
            dispatch(turnArtist({_id: _id, isArtist: true, email: email, requestId: requestId}))
                .then(() => setReload(!reload))
        } else {
            dispatch(turnArtist({_id: _id, isArtist: false}))
                .then(() => setReload(!reload))      
        }
    }

  return (
    <>
        <tr>
            <th  className="border-t-0 align-middle h-0 w-0 p-0 border-l-0 border-r-0 text-xs whitespace-nowrap pl-2 text-left">
            <div className='flex flex-col items-center'>
                { img ? <Avatar src={img} sx={{ width: 40, height: 40 }} /> : <Avatar sx={{ width: 40, height: 40 }}>{userName.substring(0, 1).toUpperCase()}</Avatar>}
                <h2>{userName}</h2>
            </div>
            </th>
            <td className="border-t-0 px-6 w-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {msg}
            </td>
            <td className="border-t-0 px-6 w-0  text-xs whitespace-nowrap p-4 cursor-pointer">
                <div className='flex flex-col items-center justify-evenly'>
                    <a className='text-sm' href={url1} target="_blank">URL 1</a>
                    <a className='text-sm' href={url2} target="_blank">URL 2</a>
                    <a className='text-sm' href={url3} target="_blank">URL 3</a>
                </div>
            </td>
            <td className="border-t-0 px-6 ml-4 text-xs whitespace-nowrap p-4 cursor-pointer">
                <div className='flex items-center justify-center'>
                    <Button value="yes" onClick={(e) => {handleApprove(e)}} color="success" variant="contained">YES</Button>
                    <Button value="no" onClick={(e) => {handleApprove(e)}} color="error" variant="contained">NO</Button>
                </div>
            </td>
        </tr>
    </>
  )
}

    // <div className='flex w-full justify-evenly'>
    //     <div className='flex flex-col '>
    //     { img ? <Avatar src={img} sx={{ width: 40, height: 40 }} /> : <Avatar sx={{ width: 40, height: 40 }}>{userName.substring(0, 1).toUpperCase()}</Avatar>}
    //     <h2>{userName}</h2>
    //     </div>
    //     <div>
    //         {msg}
    //     </div>
    //     <ul>
    //         <li><a src={url1} target="_blank">URL 1</a></li>
    //         <li><a src={url2} target="_blank">URL 2</a></li>
    //         <li><a src={url3} target="_blank">URL 3</a></li>
    //     </ul>
    // </div>