const Challenge = () =>{
     
    const valor1 = 10
    const valor2 = 20

    function clickSoma(){
        console.log(valor1 + valor2)
    }

    return(
       <div>
        <button onClick={clickSoma}>Somar</button>
       </div>
    )
}

export default Challenge