import React from 'react'
import styles from '../styles/formList.module.css';

const Header = () => {
  return (
    <div className='grid h-48 gap-4 place-content-center' >
      <h1 className={`text-4xl text-black ${styles.title}`} >TO-DO LIST</h1>
    </div>
  )
}
 
export default Header  

