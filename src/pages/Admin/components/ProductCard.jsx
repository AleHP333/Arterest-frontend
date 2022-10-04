import { Link } from 'react-router-dom';
import Chip from "@mui/material/Chip"

export default function ProductCard({ userName, title, img, _id, seen, lastCheck }) {

    return (
        <div className="border-t-0 w-1/3 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left" key={_id}>
            <Link to={`/admin/artworks/artworkDetail/${_id}`}>
                <div className='w-72 bg-gray-300 flex flex-col relative items-center justify-evenly p-0 h-full rounded shadow-lg'>
                        <div className='text-xl mb-2' >{userName}</div>
                        <div className='my-2'>
                            <span className={`rounded-sm p-2 ${lastCheck ? "bg-green-500" : "bg-red-600"}`}>{lastCheck ? "CHECKED" : "UNCHECKED"}</span>
                            <span className={`rounded-sm p-2 ${seen ? "bg-green-500" : "bg-red-600"}`}>{seen ? "AVAILABLE" : "REMOVED"}</span>
                            <img src={img} alt='' className=' object-fit max-w-fit'/>
                        </div>
                        <div className='text-xl'>{title}</div>
                </div>
            </Link>
        </div>
    )
}