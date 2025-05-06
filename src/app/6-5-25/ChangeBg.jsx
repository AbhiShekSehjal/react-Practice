import React, { useState } from 'react'
import ClickImage from './ClickImage'

function ChangeBg() {

  const [clickImage, setClickImage] = useState(false);

  const styles = {
    bg: {
      backgroundColor: "lightblue",
      width: "600px",
      height: "600px",
      margin: "50px auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }
  }

  return (
    <div style={styles.bg}>
      <ClickImage clickImage={clickImage} setClickImage={setClickImage} />
    </div>
  )
}

export default ChangeBg
