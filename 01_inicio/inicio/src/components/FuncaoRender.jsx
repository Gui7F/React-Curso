// Nesta aula vamos ver uma função de renderização onde podemos coloca jsx dentro da função
// para com uma estrutura logica definirmos qual será renderizado

const FuncaoRender = () =>{

    function renderiza (x){
       if(x){
        <h1>Renderiza valor true</h1>
       } else{
         <h1>Renderiza valor false</h1>
       }
    }


    return(
       <div>
         {renderiza(true)}
         {renderiza(false)}
       </div>
    )
}

export default FuncaoRender