import React from 'react'
import { useDispatch } from 'react-redux';
import { approveArtRequest } from '../../../redux/actions/adminActions';

//MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function ArtRequestCard({_id, userName, requestId, userImage, email, title, description, img, origin, technique, style, colors, releaseDate, price, tags, setReload, reload}) {
    const dispatch = useDispatch()
    function handleApprove(e){
        if(e.target.value === "yes"){
            dispatch(approveArtRequest({user: _id, paint_id: requestId, approve: true, email: email }))
                .then(() => {setReload(!reload)})
        } else {
            dispatch(approveArtRequest({user: _id, paint_id: requestId, approve: false, email: email }))
                .then(() => {setReload(!reload)})
        }
    }
    return (
        <>
            <tr className='relative flex flex-row bg-gray-200 p-2 my-2 mx-2 w-full h-80 shadow-lg rounded'>
                    <div className='w-72 bg-gray-300 flex flex-col items-center justify-center p-0 h-full rounded shadow-lg'>
                        { userImage ? <Avatar src={userImage} sx={{ width: 40, height: 40 }} /> : <Avatar sx={{ width: 40, height: 40 }}>{userName.substring(0, 1).toUpperCase()}</Avatar>}
                        <h2>{userName}</h2>
                        <h3 className='h-5 m-2s text-lg'><span className='font-bold underline'>Title:</span> {title.toUpperCase()}</h3>
                        <h3 className='text-gray-700'><span className='font-semibol'>My Style:</span> {style}</h3>
                        <h3 className='underline font-medium text-center text-base'>Details:</h3>
                        <h3 className='block'><span className='font-semibold'>Technique:</span> {technique && technique.join(", ")}</h3>
                        <h3 className='block'><span className='font-semibold'>Colors:</span> {colors && colors.join(", ")}</h3>
                        {tags.length ? <h3 className='block'><span className='font-semibold'>Tags:</span> {tags && tags.join(", ")}</h3> : null}
                    </div>
                    <div className='w-96 flex items-center justify-center px-2 py-2'>
                        <img className='object-contain max-w-fit' src={img} />
                    </div>
                    <div>
                        <div className='p-2 w-72'>
                            <h3 className='font-medium text-center underline'>Description:</h3>
                            <span className='block'>{description}</span>
                        </div>
                    </div>
                    <div className="p-2 text-center flex flex-col justify-evenly">
                        <div>
                            <h3 className='font-medium text-center underline' >Others:</h3>
                            <h3 className='block'><span className='font-semibold'>Origin:</span> {origin}</h3>
                            <h3 className='block'><span className='font-semibold'>Release Age:</span> {releaseDate}</h3>
                        </div>
                        <div className='bg-gray-300 rounded shadow-lg py-3 px-2'>
                            <h3 className='block text-xl'><span className='font-semibold'>Price:</span><MonetizationOnIcon className='text-green-500 mb-1' />{price}</h3>
                            <h3 className='block text-xl font-bold'>APPROVE:</h3>
                            <div className='flex items-center justify-center'>
                                <Button sx={{mx: 1}} value="yes" onClick={(e) => {handleApprove(e)}} color="success" variant="contained">YES</Button>
                                <Button sx={{mx: 1}} value="no" onClick={(e) => {handleApprove(e)}} color="error" variant="contained">NO</Button>
                            </div>
                        </div>
                    </div>
            </tr>
        </>
    )
}
