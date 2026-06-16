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
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { RiArrowRightCircleLine } from "react-icons/ri";
import ChatGpt from '../assets/ChatGPT Image Jun 16, 2026, 02_37_44 PM.png'

export default function Home() {
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    const fetchFeatured = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4')
      const data = await res.json()
      setFeatured(data)
    }
    fetchFeatured()
  }, [])

  return (
    <>
      <div className='relative h-125 bg-cover bg-center' style={{ backgroundImage: `url(${ChatGpt})` }}>
        <div className='absolute w-screen text-white h-120 flex justify-center items-center'>
          <div className='flex flex-col gap-7 items-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl'>Explore the Multiverse</h1>
            <p className='mt-6 text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed'>Browse hundreds of characters from across every dimension of the Rick and Morty universe. Wubba lubba dub dub!</p>
            <Link to="/characters" className='bg-[#79D36E] mt-10 inline-block px-7 py-3 rounded-xl text-base font-semibold text-white hover:bg-green-800 transition-colors'>Browse Characters</Link>
          </div>
        </div>
      </div>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className='flex flex-col items-center gap-4'>
            <h1 className='text-3xl font-bold text-gray-900'>Featured Characters</h1>
            <p className='text-gray-500 text-center max-w-md'>Meet some of the most iconic faces from across the Central Finite Curve.</p>

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6'>
              {featured.map(c => (
                <Link key={c.id} to={`/characters/${c.id}`} className='border border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200'>
                  <img src={c.image} alt={c.name} className='w-full'/>
                  <div className='p-3 text-center'>
                    <p className='font-semibold text-gray-900'>{c.name}</p>
                    <p className='text-xs text-gray-500'>{c.species}</p>
                  </div>
                </Link>
              ))}
            </div>

            <Link to='/characters' className='py-2.5 px-6 rounded-md text-xs font-medium text-gray-500 flex items-center gap-3 border border-gray-300 mt-4'>
              View All Characters <RiArrowRightCircleLine />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}