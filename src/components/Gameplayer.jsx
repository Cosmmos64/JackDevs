import React from 'react';
import { EmulatorJS } from "react-emulatorjs";

function Gameplayer() {
  let searchParams = new URL(document.location).searchParams;
  const core = searchParams.get('core');
  const rom = searchParams.get('rom');
  
  return(
    <div className='wrapper'>
      <EmulatorJS
        EJS_core={core}
        EJS_gameUrl={rom}
        />
    </div>
  )
}
export default Gameplayer;