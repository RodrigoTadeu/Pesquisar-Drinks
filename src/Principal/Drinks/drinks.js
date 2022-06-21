import React, {useState, useEffect} from 'react'
import './drinks.css'
import Pesquisa from '../Pesquisa/pesquisa'

export default function Drinks() {
  const [drinks, setDrinks] = useState ([])  

  useEffect (() => {
    fetch (`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
      .then (resultado => resultado.json())
      .then (data => setDrinks(data.drinks))
      
  } ,[])


  return (
    <div>
     <Pesquisa drinks={drinks}/>
    </div>
  )
}


