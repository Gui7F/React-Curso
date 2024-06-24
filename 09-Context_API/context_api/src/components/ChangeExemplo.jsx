import { useContext } from "react";
import { ExemploContext } from "../context/ExemploContext";

const ChangeExemplo = () => {
   
    const {exemplo, setExemplo} = useContext(ExemploContext)

  return (
    <div>
        <button onClick={() => setExemplo(exemplo + 1)}>Add + 1</button>
    </div>
  )
}

export default ChangeExemplo