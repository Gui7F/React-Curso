const Events = () =>{
    
    function handleClick (){
        console.log('Ativou o evento de click')
    }

    return(
        <div>
            <div>
                <button onClick={handleClick}>Click Aqui</button>
            </div>
        </div>
    )
}

export default Events