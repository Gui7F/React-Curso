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

    //Aqui dispachamos a ação de carregamento antes de inserir o documento 
    // Que seria o carremanto do documento sendo inserido
    checkBeforeDispatch({
        type: "LOADING",
        payload: insertDocument
    })
     try {
        
        //Aqui salvamos as informações do documento vindo do front-end
        // dentro de newDocument, atraves de spreed, é o segundo propriedade 
        //é a uma crianção de nova prop createAt: com timestamp.now() como conteudo
        //para salva a hora que dado é criado
        const newDocument = {...document, createAt: Timestamp.now()}
        
        //Aqui esta função vai pesquisar no banco de dados um lugar para inserir
        //o dados vindo do front-end, os dados pode ou não chegar por isso a insertDocument
        // é async e ela é a await, o primero paramerto de addDoc é a collection com db(banco de dados)
        // e docCollection que é coleção que queremos, caso de certo ele insere o newDocument que é 
        // os dados vindos do front-end
        const addDocumentOnCollection = await addDoc(
            collection(db, docCollection), newDocument
        )

        //Aqui estamos dando dispatch que seria guiando os dados que deven ser inseridos
        // e os estados que o sistema deve assumir baseado nos casos que estão em insertReducer
        // para ser sincero devo estudar mais este hook para entender melhor esta parte
         
        //Este é o dispatch de que o documento foi inserido com sucesso 
        checkBeforeDispatch({
            type: "INSERTED_DOC",
            payload: insertDocument
        })

     } catch (error) {
        
        //Aqui estamos mandando um dispacho para pega a message de erro que acontecer 
        //no sistema. 

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
