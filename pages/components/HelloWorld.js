import React from 'react'
import styles from "./helloworld.module.css"

function HelloWorld(props) {
  return (
      <div className={styles.helloworld}>
          HelloWorld {props.name}
      </div>
  )
}

export default HelloWorld