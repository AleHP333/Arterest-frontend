// import React from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux'

// export default function NavBar(){
//     const [input, setInput] = useState({search: ''})
//     const dispatch = useDispatch()

//     function handleStateChanges(e){
//         setInput({[e.target.name]: e.target.value});
//     }

//     function handleSubmit(e){
//         e.preventDefault();
//         dispatch(getArtByName(input.search));
//     }
    
//     return(
//         <nav>
//             <Link to='/home'>
//                 <h1>Home</h1>
//             </Link>
//             <form onSubmit={(e) => handleSubmit(e)}>
//                 <input type="text" name="search" value={input} 
//                 placeholder="Artwork..." onChange={handleStateChanges} required/>
//                 <button type="submit">Search</button>
//             </form>
//         </nav>
//     )
// }