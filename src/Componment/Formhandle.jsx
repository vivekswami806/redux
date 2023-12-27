import React, { useState } from 'react'
import "./style/formhandel.css"
function Formhandle() {
//    let inputfield =
        let [data ,setdata]= useState({username:'',email:"",password:'',cpassword:'',course:'',textarea:""});

        function inputHandler(e){
            let text = e.target.value;
            let name = e.target.name

            setdata({...data, [name]: text})
        }
        function submithandler(){
            console.log(data );
            setdata({username:'',email:"",password:'',cpassword:'',course:'',textarea:"" })
        }

  return (
    <div className='formhandel'>
   userName : <input type="text" name="username" id="" placeholder='enter ur name ' onChange={inputHandler} value={data.username} />
   email : <input type="text" name="email" id="" placeholder='enter ur name '  onChange={inputHandler} value={data.email}/>
   password: <input type="text" name="password" id="" placeholder='enter ur password ' onChange={inputHandler} value={data.password} />
   comfirm password : <input type="text" name="cpassword" id="" placeholder='enter ur CP' onChange={inputHandler} value={data.cpassword}/>
   <select name="course" id="" onChange={inputHandler} value={data.course}>
    <option value="mern">mern</option>
    <option value="reactjs" >react</option>
    <option value="nodejs" >nodejs</option>
   </select>
   Comment: <textarea name="textarea" id="" cols="30" rows="10" placeholder='comment yor idea ' onChange={inputHandler} value={data.textarea}></textarea>
 <button onClick={submithandler}> submit</button>



 <div>
    {data.username}
 </div>
    </div>
  )
}

export default Formhandle