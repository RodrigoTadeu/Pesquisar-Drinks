import React, {useState,useEffect} from 'react'
import './pesquisa.css'
import { useNavigate } from 'react-router-dom'

export default function Pesquisa({drinks}) {
  const navegate = useNavigate()
  const [ search, setSearch ] = useState ('')
  const [ dados, setDados ] = useState ([])

  useEffect (() => {
    if (!search) return 
    fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`) 
      .then ((response) => response.json())
      .then ((result) => setDados(result.drinks))

  },[search])

  const handlePesquisa = (idDoProduto) => {
    navegate (`/produto/${idDoProduto}`)
  }

 
  return (
    <div className='container1'>
        <label>
            <input 
              className='input-pesquisa' 
              type='search' 
              placeholder='Pesquisar drink'
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}/>
        </label>

        {search.length>=2 ?
            <div className='container2'>
            {dados.map (
                drink => <div className='chield'  key={drink.idDrink}> 
                                <img className= "img" width='100%' onClick={() => handlePesquisa(drink.idDrink)} src= {drink.strDrinkThumb}/> 
                                <div className= "name">{drink.strDrink}</div> 
                               
                          </div>
            )}
          </div>
          : <div className='container2'>
          {drinks.map (
              drink => <div className='chield'  key={drink.idDrink}> 
                              <img className= "img" width='100%' onClick={() => handlePesquisa(drink.idDrink)} src= {drink.strDrinkThumb}/> 
                              <div className= "name">{drink.strDrink}</div> 
                             
                        </div>
          )}
        </div>
          
        }

        

   </div>
   
  )
}
  

