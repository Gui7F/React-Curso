import{db} from "firebase/firestore"

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

    const auth = getAuth

    function checkIfIsCancelled () {
        if(cancelled) {
            return;
        }
    }

    const createUser = async(data) =>{
        checkIfIsCancelled()

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
        }catch(error){
          
        }
       setLoading(false)
    };

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return{
        auth,
        createUser,
        authError,
        loading,
    }
}