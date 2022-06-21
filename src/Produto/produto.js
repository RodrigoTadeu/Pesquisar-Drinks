import React, {useState, useEffect} from 'react'
import './produto.css'
import { useParams } from 'react-router-dom'

export default function Informações() {
  const {idDoProduto} = useParams()
  const [infos, setInfos] = useState ([])

  useEffect (()=> {
    fetch (`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDoProduto}`)
      .then (result => result.json())
      .then ((data) => setInfos(data.drinks))
  },[])

  return (
    <div className='a'>
        <div className='container3'>
        { infos.map (
                info => <div className='chield2'  key={info.idDrink}> 
                                <div className= "name2">
                                  {info.strDrink}
                                </div>

                                <div className='info'>
                                  <div className='img-container'> 
                                  <img className= "img2" src= {info.strDrinkThumb}/> 
                                  </div>

                                  <div className='instruçoes'>
                                    <h2>Instruções de Preparo</h2>
                                    <div>
                                      {info.strInstructions}
                                    </div>
                                    <h2>Tipo</h2>
                                    <div>
                                      {info.strAlcoholic}
                                    </div>
                                    <h2>Ingredientes</h2>
                                    <div className='i'>
                                      {info.strIngredient1}<br/>
                                      {info.strIngredient2}<br/>
                                      {info.strIngredient3}<br/>
                                      {info.strIngredient4}
                                    </div>
                                    <h2>Categoria</h2>
                                    <div>
                                      {info.strCategory}
                                    </div>
                                  </div>

                                  
                                </div>  
                                
                                
                                

                               
                        </div>
        )}
        </div>
    </div>
  )
}
