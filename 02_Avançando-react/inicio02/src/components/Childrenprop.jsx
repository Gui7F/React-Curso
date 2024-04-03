import React from 'react'

const Childrenprop = ({children, props}) => {
  return (
    <div>
        <h1>Este é o titulo do container</h1>
        {children}
        <p>O valor da prop: {props}</p>
    </div>
  )
}

export default Childrenprop