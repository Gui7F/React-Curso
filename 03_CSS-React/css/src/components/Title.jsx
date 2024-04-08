import React from 'react'
import styles from './Title.module.css'
const Title = () => {
  return (
    <div>
        <h1 className={styles.my_title}>CSS Modules Titulo</h1>
    </div>
  )
}

export default Title

// O css.module serve para você criar um module unico para o component, ele é scroped oque siginifica 
// dizer que ele não vaza para outro components no momento da compilação, porque ele aplica um id
// unico para cada component