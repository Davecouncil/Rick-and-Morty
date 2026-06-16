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
import { Link } from 'react-router'
import { RiArrowRightCircleLine } from "react-icons/ri";
import ChatGpt from '../assets/ChatGPT Image Jun 16, 2026, 02_37_44 PM.png'




export default function Home() {
  return (
    <>
      <div className='relative h-125 bg-cover bg-center' style={{backgroundImage:`url(${ChatGpt})`}} >

      <div className='absolute w-screen text-white h-120 flex justify-center items-center '>
        <div className='flex flex-col gap-7 items-center'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl '>Explore the Multiverse</h1>
      <p className='text-wrap mt-6 text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed '>Browse hundreds of characters from across every dimension of the Rick and Morty universe. Wubba lubba dub dub!</p>
      <Link to="/characters" className=' bg-[#79D36E] mt-10 inline-block px-7 py-3 rounded-xl  text-base font-semibold text-white rounded-md hover:bg-green-800 transition-colors'> Browse Characters </Link>
      </div>
    </div>
    </div>


    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
    <div className='flex flex-col items-center gap-4 '>
      <h1>Featured Characters</h1>
      <p className='flex w-120 items-center justify-cente '>Meet some of the most iconic faces from across the Central Finite Curve.</p>
      <div>
        hhhh
      </div>
      <Link> View All Character <RiArrowRightCircleLine /> </Link>
    </div>
    </div>
    </section>
    </>
  )
}
