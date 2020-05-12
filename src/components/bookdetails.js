import React ,{useContext} from 'react';
import {Bookcontext ,} from '../context/bookcontext'

const Bdetails = ({book}) => {
    const { dispatch } = useContext(Bookcontext)
    return ( 
        <li onClick={()=> dispatch({type :'REMOVE_BOOK',id : book.id})} >
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
         </li>
     )
}
export default Bdetails