// import { RxHamburgerMenu } from "react-icons/rx";
// import { CiSearch } from "react-icons/ci";
// import React ,{ useState, useEffect } from 'react';

// export default function Contact() {
//     const [data , setData] = useState([])

//     useEffect(()=>{
//         const fetchData = async()=>{
            
//         const res= await fetch ("https://jsonplaceholder.typicode.com/users")
//         const data = await res.json()
//         setData (data)
// }
//  fetchData()
// }, [])
//   return (
//     <div>

//             {/* <form action="">

//             <RxHamburgerMenu />
//             <h1>Contact</h1>
//             <input type="text" />
//             </form> */}
//     <div>
//       {data.map(user => (
//         <div key={user.id}>
//           <h3>{user.name}</h3>
//           <p>{user.email}</p>
//           <p>{user.phone}</p>
//         </div>
//       ))}
//     </div>
//     </div>
//   )
// }

// // export default function Contact() {
// //   const [data, setData] = useState([])

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const res = await fetch("https://jsonplaceholder.typicode.com/users")
// //       const data = await res.json()
// //       setData(data)
// //     }

// //     fetchData()
// //   }, [])

// //   return (
// //     <div>
// //       {data.map(user => (
// //         <div key={user.id}>
// //           <h3>{user.name}</h3>
// //           <p>{user.email}</p>
// //           <p>{user.phone}</p>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }