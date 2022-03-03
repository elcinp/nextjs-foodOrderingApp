import styles from "../styles/Featured.module.css"
import Image from "next/image"

const Featured = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/arrowl.png"/>
        
        <Image src="/img/arrowr.png"/>
    </div>
  )
}

export default Featured