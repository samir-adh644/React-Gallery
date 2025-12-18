import axios from 'axios'
import {useState} from 'react'


function App() {

  const [userData,setUserData]=([]);


  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
    setUserData(response.data)
  }

  return (
    <>
    <div className="main bg-black text-white h-screen">

      <button 
      onClick={getData}
      className="bg-green-600 px-5 py-2 rounded text-white m-4 active:scale-95 ">
        Get Data
      </button>

    </div>
     
    </>
  )
}

export default App
