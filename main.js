'use strict';
{
  const mori =document.getElementById('mori');
 
  function moriVoice(){
    document.getElementById('mori-sound').play();
  };

  mori.addEventListener('click',()=>{
    moriVoice();
    console.log(1);
  })

  
}
