import { db } from "../firebase/config"

import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth"

import {useState, useEffect} from "react"

export const useAuthentication = () =>{
    const[authError, setAuthError] = useState(null)
    const [loading, setLoading] = useState(null)

    //cleanup : E para cancelar qualque função que esteja executando ainda apos autenticação
    //deal with memory leak: 
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth();

    function checkIfIsCancelled () {
        if(cancelled) {
            return;
        }
    }

    //Register
    const createUser = async(data) =>{
        checkIfIsCancelled()
        setAuthError(null)
        setLoading(true)

        try{

         const {user} = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
         )
         await updateProfile(user, {
            displayName: data.displayName
         }
            
         )

         setLoading(false)
           
         return user

        }catch(error){
        
        let systemErrorMessage;

          if(error.message.includes("Password")){
            systemErrorMessage = "A senha precisa ter mais de 6 caracteres"
          }else if(error.message.includes("email-already")){
            systemErrorMessage="Email já cadastrado no sistema."
          }else{
            systemErrorMessage="Ocorreu um erro inesperado, tente novamente!"
          }
          setAuthError(systemErrorMessage)
        }

       setLoading(false)
    };
    //Register

    //Logout - SignOut
    
    const logout = () =>{
     checkIfIsCancelled()
     signOut(auth)

    }


    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return{
        auth,
        createUser,
        authError,
        loading,
        logout,
    }
}