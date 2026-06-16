import React from 'react'
import { useState, useEffect } from 'react'
import { MdRunningWithErrors } from "react-icons/md";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import {  Link , useParams} from 'react-router'



function Loading() {
  return (
  <div className='min-h-screen bg-gray-50 flex items-center justify-center '>
    <div className='flex flex-col items-center gap-3'>
      <div className='w-10 h-10 border-4 border-green-400 border-t-transparent rounded-full animate-spin'/>
      <p className='text-gray-500 font-medium'>Loading...</p>
    </div>
  </div>
)
}

function ErrorMessage() {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
      <div className='flex flex-col items-center gap-3'>
        <p className='text-2xl'> <MdRunningWithErrors /> </p>
        <p className='text-gray-500 font-medium'>Failed to load, check your connection and refresh homie.</p>
      </div>
    </div>
  )
}

export function Characters( ) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

    useEffect (()=>{
        const fetchData= async () => {
          try {
            const res = await fetch('https://rickandmortyapi.com/api/character');
            if (!res.ok) throw new Error("Error to fetch");
            const data = await res.json()
            setData(data.results)
          } catch (error) {
            setError(true)

          } finally{
            setLoading(false)
          }
            
            
          } 

        
        fetchData()
    } , [])

    if (loading) return <Loading />
    
    if (error) return  <ErrorMessage />

console.log(data);    
    
  return (
    <> 
    <div className=''>
      <div className='bg-[#EEF9EC] mb-8'>
        <div className='  max-w-7xl mx-auto px-6 md:px-6 py-10 '>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>All Character</h1>
            <p className='text-gray-500'>Browse every character from across the Central Finite Curve — from genius <br /> scientists to sentient butter-passing robots.</p>
        </div>
      </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-25  '>
      
         {
           data.map(character =>(
            <Link key={character.id} to={`/characters/${character.id}`} className=' bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:-translate-y-1  hover:text-[#8bec79]  transition-all duration-200 cursor-pointer'>
              <img src={character.image} alt={character.name}  className=''/>
             
              <div  className=' flex flex-col   p-4 text-center text-base font-semibold '> 
                
                <span className=' '>{character.name}</span> 
                <span className='font-medium text-xs text-gray-600'>{character.species} - {character.status}</span>
                
              </div>
            </Link>
           )) 
         }
    </div>
    </div>
    </>
  )
}

export function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null)
  const [loading, setloading] = useState(true)
  const [error, setError] = useState(false)
  const [similar, setSimilar] = useState([])
  const [episodes, setEpisodes] = useState([])

useEffect(() => {

   if (!character) return  

  const fetchEpisodes = async () => {
    const res = await Promise.all(character.episode.map(url => fetch(url)))
    const data = await Promise.all(res.map(r => r.json()))
    setEpisodes(data)
  }
  fetchEpisodes()
}, [character])

  useEffect(() => {
    setloading(true);
    setError(false);

const fetchCharacterData = async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await res.json()
        setCharacter(data)

            const simRes = await fetch('https://rickandmortyapi.com/api/character')
    const simData = await simRes.json()
    const similar = simData.results
      .filter(c => c.id !== Number(id))
        .sort(() => Math.random() - 0.5)
      .slice(3, 7)
    setSimilar(similar)


      } catch (error) {
        setError(true)
      } finally {
        setloading(false)
      }
    }
    fetchCharacterData()
  }, [id]);

  if (loading) return    <Loading />
  if (error) return  <ErrorMessage />

  return (
    
    <div className='min-h-screen bg-gray-50'>

      <div  className='max-w-4xl mx-auto px-6 py-8 '>

      <Link to="/characters" className='flex gap-2 mb-7 items-center text-gray-500 hover:text-gray-900 transition-colors'>
        <IoArrowBackCircleOutline  size={20}/> Back to Characters
      </Link>

      <div className='bg-white border border-gray-200 rounded-xl overflow flex gap-8 p-6 mb-6  '>
        <img src={character.image} alt={character.name} className='w-56 h-65 rounded-lg object-cover shrink-0 ' />

        <div className='flex flex-col justify-center '>
          <h2 className='text-3xl font-bold text-gray-900 mb-1'>{character.name}</h2>
          <p className='text-gray-400 mb-6'> {character.species} · {character.gender}</p>

          <div className='flex flex-col gap-3'>
            <div className='flex gap-8'>
              <span  className='text-gray-400 w-24'>Status</span>
              <span className='font-semibold text-gray-900 flex items-center gap-1'>
                <span className={`text-xs ${
                    character.status === 'Alive' ? 'text-green-500' :
                    character.status === 'Dead' ? 'text-red-500' : 'text-gray-400'
                  }`} >●</span> {character.status}
              </span>
            </div>

            <div className='flex gap-8'>
              <span className='text-gray-400 w-24'>Species</span>
              <span className='font-semibold text-gray-900'>{character.species}</span>
            </div>
            <div className='flex gap-8'>
              <span className='text-gray-400 w-24'>Gender</span>
              <span className='font-semibold text-gray-900'>{character.gender}</span>
            </div>
            <div className='flex gap-21'>
              <span className='text-gray-400'>Origin</span>
              <span className='font-semibold text-gray-900'>{character.origin.name}</span>
            </div>
            <div className='flex gap-17'>
              <span className='text-gray-400'>Location</span>
              <span className='font-semibold text-gray-900'>{character.location.name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#FEFCE8] border border-gray-200 rounded-xl p-6 mb-6'>
        <h3 className='text-lg font-bold text-gray-900 mb-4'>Appears In</h3>
        <div className='flex flex-wrap gap-3'>

          {episodes.map(ep=>(
          <span key={ep.id}
           className='bg-[#FEF08A] text-yellow-800 text-sm px-3 py-1 rounded-full border border-yellow-200'>
            Episode {ep.id}-{ep.name}
          </span>
        ))}
        </div>
        
      </div>

      <div className='bg-white border border-gray-200 rounded-xl p-6'>
        <h3 className='text-lg font-bold text-gray-900 mb-4'>You Might Also Like</h3>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {similar.map(c => (
          <Link key={c.id} to={`/characters/${c.id}`}>
            <img src={c.image} alt={c.name} className='rounded-lg'/>
            <p className='font-semibold text-gray-900 text-center mt-2'>{c.name}</p>
            <p className='text-xs text-gray-500 text-center'>{c.species}</p>
          </Link>
        ))}       
         </div>
      </div>
      </div>
    </div>
  );
}