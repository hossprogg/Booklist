import React ,{useContext} from 'react';
import {Bookcontext } from '../context/bookcontext'

const Nav = () => {
     const {Read} = useContext(Bookcontext)
    return ( 
        <div className="navbar">
            <h1>Books Reading List</h1>
            <p>currently u have {Read.length} book </p>
        </div>
     );
}
 
export default Nav