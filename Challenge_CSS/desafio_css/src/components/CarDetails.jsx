import styles from "./CarDetails.module.css"

const CarDetails = ({id,nome,cor,ano}) => {
  return (
    <div>
       <ul className={styles.ul_styles}>
         <li className={styles.li_styles}>id: {id}</li>
         <li className={styles.li_styles}>Nome: {nome}</li>
         <li className={styles.li_styles}>Cor: {cor}</li>
         <li className={styles.li_styles}>Ano: {ano}</li>
       </ul>
    </div>
  )
}

export default CarDetails