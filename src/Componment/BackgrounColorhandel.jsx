import React from 'react'
function BackgrounColorhandel() {
    let eventHandler=(e)=>{
        console.log("i am event handler",e);
       
    }
    let eventChange =(e)=>{
   
        console.log( e.target.value);
    }
    return (
        <>
            <div>
                <input type="text" name="name" id="" onChange={eventChange} />
                <h1>hi am event handler </h1>
                <h2 onClick={eventHandler}> click</h2>

                {/* /*arrgument */ }
                <button onClick={(e)=>{
                    eventHandler("vivek")
                }}> click me </button>
            </div>
        </>
    )
}

export default BackgrounColorhandel