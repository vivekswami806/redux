import React from 'react';
 
function ElentElement () {
    function Saerchele(){
        console.log("ebevt")
    }
    function Changehandel(){
        console.log("hhh");
    } 
   


  return (
    <>
       <div >
        <input type='text' onClick={Saerchele}/>
       <button id="search" > search</button>
       </div>

       <div>
        <input type="text" onChange={Changehandel}/>
        <select name="sort" id="sort">
            <option >A_Z</option>
            <option >Z_A</option>
            <option >low-high</option>
            <option >High-low</option>
        </select>
       </div>
    </> 
  )
}

export default ElentElement;