import React, {useState} from "react";

function Gif() {
  const [gif,mostraGif] = useState(false) 

  const show = () => {
    mostraGif(true)
  }

  const hide = () => {
    mostraGif(false)
  }

  return(
    <>
      <button onClick={show}>Mostra Gif</button>
      {gif && <img src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif" onClick={hide}/>}
    </>
  )
}

export default Gif;