import {useState, useEffect, useReducer} from "react"
import {db} from "../firebase/config"
import { doc, updateDoc } from "firebase/firestore"

const initialState = {
    loading: null,
    error: null,
}

const updateReducer = (state, action) =>{

     switch(action.type) {
        case "LOADING":
            return{loading: true, error: null}
        case "UPDATED_DOC":
            return{loading:false, error:null}
        case "ERROR":
            return{loading:false, error:action.type}
        default:
            return state
     }

}

export const useUpdateDocument = (docCollection) =>{

  const [response, dispatch] = useReducer(updateReducer, initialState);

   const [cancelled, setCancelled] = useState(false);

   const checkBeforeDispatch = (action) =>{
     if(!cancelled){
        dispatch(action)
     }
   }  

 
   const updateDocument = async(id, data) =>{

    checkBeforeDispatch({
        type: "LOADING"
    })
     try {
        
        const refDoc = await doc(db, docCollection, id);
        const docUpdate = await updateDoc(refDoc, data);

        checkBeforeDispatch({
            type: "UPDATED_DOC",
            payload: docUpdate
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
  
  return{updateDocument, response}

}
