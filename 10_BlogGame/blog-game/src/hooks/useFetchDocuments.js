import { useState, useEffect } from "react";
import { db } from "../firebase/config";

//Funçoes do firebase para gerenciar dados
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
  QuerySnapshot,
} from "firebase/firestore";

//Aqui vamos receber por parametro a collection a pesquisa e uid do usuário toda
// estes states serão monitorados por useEffect caso algum altere a chama para carrega-
//mento de dados é iniciada |

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //deal with memory leak = vazamento de memoria tambem aplicado aqui

  const [cancelled, setCancelled] = useState();

  useEffect(() => {
    async function loadData() {
      if (cancelled) return;

      setLoading(true);

      const collectionRef = await collection(db, docCollection);

      try {
        //Busca por tags

        //dashbord

        let q;
        q = await query(collectionRef, orderBy("createAT", "desc"));

        await onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });

        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);

        setLoading(false);
      }
    }
    loadData();
  }, [docCollection, uid, search, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { documents, loading, error };
};
