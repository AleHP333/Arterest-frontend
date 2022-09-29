import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export default function ArtRequestCard({_id, userName, userImage, email, title, description, img, origin, technique, style, colors, releaseDate, price, tags}) {
    return (
        <>
            <tr className='relative flex flex-row bg-gray-200 p-2 my-2 mx-2 w-full h-80'>
                    <div className='w-60 flex flex-col items-center justify-center p-0 h-full'>
                        { userImage ? <Avatar src={userImage} sx={{ width: 40, height: 40 }} /> : <Avatar sx={{ width: 40, height: 40 }}>{userName.substring(0, 1).toUpperCase()}</Avatar>}
                        <h2>{userName}</h2>
                        <h3 className='h-5 m-2'><span className='font-bold'>Title:</span> {title.toUpperCase()}</h3>
                        <span>My style: {style}</span>
                        <h3>Details:</h3>
                        <span className='block'>{technique && technique.join(", ")}</span>
                        <span className='block'>{colors && colors.join(", ")}</span>
                        <span className='block'>{tags && tags.join(", ")}</span>
                    </div>
                    <div>
                        <img className='object-contain h-50 w-20' src={img} />
                    </div>
                    <div>
                        <div>
                            <h3>Description:</h3>
                            <span className='block'>{description}</span>
                        </div>
                    </div>
                    <div>
                        <h3>Others:</h3>
                        <span className='block'>{origin}</span>
                        <span className='block'>{releaseDate}</span>
                        <span className='block'>{price}</span>
                    </div>
                    <div></div>
            </tr>
        </>
    )
}
