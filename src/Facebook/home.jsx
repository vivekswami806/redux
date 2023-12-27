import React from "react";
function Home(){
    return(
        <>

       <div className="cont">
          <div id="conttext">
            <h1 className="facebook">facebook</h1>
             <p className="text">FacebookFacebook helps you connect and <br/>share with the people in your life.</p>
          </div>
          <div className="UserPass">
              <input type="text" placeholder="Enter your name"/>  
              <input type="password" placeholder="Enter your Passward"/> 
              <button className="submit" id="sub">Submit</button> 
              <p> <a href="#" id="forget"> forget Password ?</a> </p>
               <button className="newAcc"> Create New Account </button>
          </div>
       </div>
        </>
    )
}
export default Home