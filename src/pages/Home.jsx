// import { RxHamburgerMenu } from "react-icons/rx";
// import { CiSearch } from "react-icons/ci";
// import React ,{ useState, useEffect } from 'react';

// export default function Contact() {
//     const [data , setData] = useState([])

//     useEffect(()=>{
//         const fetchData = async()=>{
            
//         const res= await fetch('https://rickandmortyapi.com/api/character');
//         const data = await res.json()
//         setData (data)
// }
//  fetchData()
// }, [])
//   return (
//     // <div>

//     //         <form action="">

//     //         <RxHamburgerMenu />
//     //         <h1>Contact</h1>
//     //         <input type="text" />
//     //         </form>
//     <div 
//     className="flex flex-col gap-4 p-3">
//       {/* <img src="https://images.unsplash.com/photo-1605596507299-0fe2cbf21ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9zJTIwZm9yJTIwcHJvZmlsZSUyMHVpfGVufDB8fDB8fHww" alt="" /> */}
//       {data.map(user => (
//         <div key={user.id} className="flex items-center justify-between p-4 bg-blue-200 
//         bg-[url()] ">
          
//           <div>
//           <h3>{user.name}</h3>
//           <p>{user.email}</p>
//           <p>{user.phone}</p></div>
//           <div>
//             <button>See more </button>
//           </div>
//         </div>
//       ))}
//     </div>
//     // </div>
//   )
// }
import React from 'react'

export default function Home() {
  return (
    <div>Home</div>
  )
}
