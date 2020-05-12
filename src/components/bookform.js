import React,{useContext , useState} from 'react';
import {Bookcontext} from '../context/bookcontext'

const FormB = () => {
    const {dispatch} = useContext(Bookcontext)
    const [title , setitle] = useState('')
    const [author , setauthor] = useState('') 

    const handlesubmit =(e)=>{
        e.preventDefault()
        dispatch({type :'ADD_BOOK',book :{ author,title }})
    setitle('')
    setauthor('')
}
    return ( 
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="bookssss title" value={title} onChange={ (e)=> setitle(e.target.value)}   />
            <input type="text" placeholder="author book" value={author} onChange={ (e)=>setauthor(e.target.value)}  />
            <input type="submit" value="add book"/>
        </form>
     );

    }
export default FormB