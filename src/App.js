import logo from './logo.svg';
import './App.css';
import React,{Fragment} from 'react';

import { RedLayout } from 'suhtur/layouts/red'
import { GreenLayout } from 'suhtur/layouts/green'

import { CatList } from 'suhtur/pages/cat/cat.list'
import { CatDetail } from 'suhtur/pages/cat/cat.detail'
import { DogList } from 'suhtur/pages/dog/dog.list'
import { DogDetail } from 'suhtur/pages/dog/dog.detail'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function RouteElement({p:page,l:Layout,...props}){
  return (
    <Layout
     {...props}
    />
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="cat/detail" element={
            <RouteElement 
              p={<CatDetail />}
              l={RedLayout}
            />
          } />

          <Route path="cat/list" element={<CatList />} />

          <Route path="dog/detail" element={
            <RouteElement 
              p={<DogDetail />}
              l={GreenLayout}
            />
          } />
          <Route path="dog/list" element={<DogList />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
