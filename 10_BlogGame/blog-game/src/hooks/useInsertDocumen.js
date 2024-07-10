import {useState, useEffect, useReducer} from "react"
import {db} from "../firebase/config"
import { collection, addDoc, Timestamp } from "firebase/firestore"

const initialState = {
    loading: null,
    error: null,
}

const insertReducer = (state, action) =>{

     switch(action.type) {
        case "LOADING":
            return{loading: true, error: null}
        case "INSERTED_DOC":
            return{loading:false, error:null}
        case "ERROR":
            return{loading:false, error:action.type}
        default:
            return state
     }

}

export const useInsertDocument = (docCollection) =>{

  const [response, dispatch] = useReducer(insertReducer, initialState);

   const [cancelled, setCancelled] = useState(false);

   const checkBeforeDispatch = (action) =>{
     if(!cancelled){
        dispatch(action)
     }else if(cancelled){
        return;
     }
   }  

 
   const insertDocument = async(document) =>{

    checkBeforeDispatch({
        type: "LOADING",
        payload: insertDocument
    })
     try {
        
       
        const newDocument = {...document, createdAt: Timestamp.now()}
        
        const addDocumentOnCollection = await addDoc(
            collection(db, docCollection), newDocument
        )

        checkBeforeDispatch({
            type: "INSERTED_DOC",
            payload: insertDocument
        })

     } catch (error) {
      
        checkBeforeDispatch({
            type: "ERROR",
            payload: error.message
        })

     } 

   }


   useEffect(() => {
    return  setCancelled(true)
   }, []);
  
  return{insertDocument, response}

}
