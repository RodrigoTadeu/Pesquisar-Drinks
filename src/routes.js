import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Principal from './Principal/principal'
import Produto from './Produto/produto'

export default function routes() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element ={<Principal/>}/>
                <Route path='/produto/:idDoProduto' element={<Produto/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
