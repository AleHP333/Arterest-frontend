import { Link } from 'react-router-dom';


export default function ProductCard({ userName, title, img, _id }) {

    return (
        <div className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left" key={_id}>
            <Link to={`/admin/artworks/artworkDetail/${_id}`}>
                <ul>
                    <li >Artist Name : {userName}</li>
                    <img src={img} alt='' className='w-24 h-32 scale-x-150 scale-y-150'/>
                    <li >Artwork Title : {title}</li>
                </ul>
            </Link>
        </div>
    )
}