// import React from 'react'

// function EventHandling() {
//     // function bgHandler(arg)
//     // {
//     //     // let container=document.getElementById('container')
//     //     // container.style.backgroundColor="orange"
//     //     console.log('hii i am bghandler',arg)
//     // }
//     let name,pass,email,course,msg
//     function userHandler(e)
//     {
//         name=e.target.value
//     }
//     function emailHandler(e)
//     {
//        email=e.target.value
//     }
//     function passHandler(e)
//     {
//         pass=e.target.value
//     }
//     function selectHandler(e)
//     {
//         course=e.target.value
//     }
//     function msgHandler(e)
//     {
//         msg=e.target.value
//     }

//     function submitHandler()
//     {
//         console.log('hii i am submitHandler')
//         console.log(name,course,email,pass,msg)
//     }
//  00
//       username <input type='text' placeholder='enter your username' onChange={userHandler}/>
//       <br/>
//       email <input type='text' placeholder='enter your email'
//       onChange={emailHandler}/>
//       <br/> 
//       password <input type='text' placeholder='enter your password' onChange={passHandler}/>
//       <br/>
//       course:
//       <select onClick={selectHandler}>
//         <option value="react">react</option>
//         <option value="next">next</option>
//         <option value="vue">vue</option>
//       </select> 
//       <br/>
//        Drop your msg: <textarea rows="20" cols="20" onChange={msgHandler}></textarea>
//       <br/>
//      <button onClick={submitHandler}>click</button>
//     </>
//   )
// }

// export default EventHandling
