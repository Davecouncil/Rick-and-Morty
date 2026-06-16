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
import React from 'react'
import { Link } from 'react-router'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className='bg-gray-100 mt-16'>
      
      <div className='max-w-7xl mx-auto px-6 py-12'>


      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-300 pb-4'>


        <div className='flex flex-col gap-3'>
          <h2 className='text-[#ACD66E] text-xl font-bold  '>Rick & Morty</h2>
          <p className='text-gray-400 text-sm text-balance '>Your ultimate guide to every character across the infinite dimensions of the Rick and Morty multiverse. Wubba lubba dub dub!</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h3 className='text-sm font-bold'>Navigate</h3>
          <div className='flex flex-col gap-3 text-gray-400'>
            <Link to='/'>Home</Link>
            <Link to='/characters'>All Characters</Link>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <h3 className='text-sm font-bold'>Fan Favorites</h3>
          <div className='flex flex-col gap-3 text-gray-400'>
            <Link to='/characters/1'>Rick Sanchez</Link>
            <Link to='/characters/2'>Morty Smith</Link>
            <Link to='/characters/3'>Summer Smith</Link>
            <Link to='/characters/242'>Evil Morty</Link>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <h3 className='text-sm font-bold'>Quote of the Day</h3>
          <div className='flex flex-col gap-3 text-gray-400'>
            <p className='border-l-2 border-red-300 p-2 italic  '>“Nobody exists on purpose. Nobody belongs anywhere. Everybody’s gonna die. Come watch TV.”</p>
            <p className='text-xs'>— Morty Smith</p>
          </div>
        </div>

      </div>

      <div className=' flex flex-col gap-3'>
        <h3 className='text-l font-bold'>Find Me On</h3>
          <div className='flex items-center gap-5 text-2xl'>
            <a href='https://x.com/Davecouncil3' target='_blank' rel='noreferrer'> <FaSquareXTwitter /> </a>
            <a href='https://github.com/Davecouncil' target='_blank' rel='noreferrer'><FaGithub /></a>
          </div>
        <p className='text-xs text-gray-400'>© 2026 Rick & Morty Character Browser. This is a fan-made project — not affiliated with Adult Swim or the show creators.</p>
      </div>
      </div>
    </footer>
  )
}
