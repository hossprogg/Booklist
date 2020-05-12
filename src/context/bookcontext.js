import React,{createContext , useReducer} from 'react'
import { Bookreducer } from '../reducer/bookreducer';

export const Bookcontext = createContext()

const BookProvider = (props) => {//u have to put props (sended) here 
    const [Read,dispatch] = useReducer(Bookreducer,[])
    
    return (    //no 3 point here baliz just call it 
        <Bookcontext.Provider value={{Read ,dispatch}}>
            {props.children}
        </Bookcontext.Provider>
     );
}
 
export default BookProvider

