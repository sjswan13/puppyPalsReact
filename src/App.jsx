import React, { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'
import './index.css'

function App() {

  const [puppies, setPuppies] = useState(puppyList)
  const [featPupID, setFeatPupID] = useState(null);


  console.log(puppyList, 'puppies');

  const handleClick = (puppyID) => {
    console.log('puppy id:', puppyID);
    setFeatPupID(puppyID);
  }
  const featuredPup = puppies.find((pup) => pup.id === featPupID)
  console.log(featuredPup)

  return (
    <div className='App'>
        {
          puppies.map((puppy) => {
            return (
            <p onClick={() => handleClick(puppy.id)}
             key={puppy.id}>
              {puppy.name}
            </p>
            );
          })}
         {featPupID && (
            <div>
              <h2>{featuredPup.name}</h2>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
            </div>
         )}
      </div>
  )
}

export default App
