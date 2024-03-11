const TemplateExpression = () =>{
     
    const name = 'Luffy'
    const data = {
        age: 17,
        job: 'Pirata'
    }

    return(
        <div>
          <h2>Olá {name},você é o Rei dos Piratas. Sua idade é {data.age} e seu job é {data.job}</h2>
        </div>
    )
}

export default TemplateExpression