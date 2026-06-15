import React from 'react'
import { useState, useEffect } from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import {  Link , useParams} from 'react-router'


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

    if (loading) {
      return <p>Loading...</p>
    }
    if(error){
      return <p> Fail to load data refresh or check internet connection homie </p>
    }
    console.log(data);
    
    
  return (
    <> 
    <div className=''>
        <h1>All Character</h1>
        <p>Browse every character from across the Central Finite Curve — from genius scientists to sentient butter-passing robots.</p>
    </div>
    <div className='grid grid-cols-4'>
      
         {
           data.map(character =>(
            <Link key={character.id} to={`/characters/${character.id}`} className=' flex flex-col '>
              <img src={character.image} alt={character.name} />
             
              <div  className='flex items-center  '> 
                {character.name}
                {character.species} - {character.status}
              </div>
            </Link>
           )) 
         }
    </div>
    </>
  )
}

export function CharacterDetail() {
  const { id } = useParams();
  const  [character, setCharacter] = useState(null)
  const [loading , setloading ] = useState(true)
  const [error, setError] = useState(false)


  useEffect(() => {
    setloading(true);
    setError(false);


  
    const fetchCharacterData= async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await res.json()
        setCharacter(data)
      } catch (error) {
          setError(true)
      } finally {
  setloading(false)
}
    
    }
    fetchCharacterData()
  }, [id]);


  if (loading) {
  return <p>Loading...</p>
}
if (error) {
  return <p>Fail to load character...</p>
}


  return (
    <div>
      <Link to="/characters" className='flex gap-2'> <IoArrowBackCircleOutline /> Back to characters</Link>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
    </div>
  );
}