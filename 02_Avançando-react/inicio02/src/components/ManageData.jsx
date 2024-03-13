import { useState } from "react"

const ManageData = () => {
   
   const [data, setData] = useState(20);

  return (
    <div>
        <p>Valor:{data} </p>
        <button onClick={()=> setData(50)}>Mudar Valor</button>
    </div>
  )
}

export default ManageData