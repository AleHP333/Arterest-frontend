import { Link } from 'react-router-dom';


export default function ProductCard({ userName, title, img, _id }) {

    return (
        <div className="border-t-0 w-1/3 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left" key={_id}>
            <Link to={`/admin/artworks/artworkDetail/${_id}`}>
                <div className='w-72 bg-gray-300 flex flex-col items-center justify-evenly p-0 h-full rounded shadow-lg'>
                        <div className='text-xl' >{userName}</div>
                        <img src={img} alt='' className='object-contain max-w-fit'/>
                        <div className='text-xl'>{title}</div>
                </div>
            </Link>
        </div>
    )
}