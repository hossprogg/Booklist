import React,{useContext} from 'react'
import {Bookcontext} from '../context/bookcontext'
import Bdetails from './bookdetails'

const List = () => {
    const {Read} = useContext(Bookcontext)
     return Read.length ? (//this is replace the '()'
            <div className="book-list">
                <ul>          
                        {
                            Read.map(list =>{//u gonna iterate here so put thhe key here 
                                return (//new meth of iterating and printing  on a separated files.js
                                    <Bdetails book={list} key={list.id}/>
                                )
                            })
                        }
                </ul>
            </div>
        )
        :(
            <div className="empty">still don t have any book </div>
        )
}
 
export default List;