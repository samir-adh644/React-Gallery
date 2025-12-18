import axios from 'axios'
import {useState,useEffect} from 'react'


function App() {

  const [userData,setUserData]=useState([]);


  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
    setUserData(response.data)
  }
  useEffect(function(){
    getData()
  },[])

  let printUserData ="No images Available"
  if (userData.length>0){
    printUserData= userData.map((elem,idx)=>{

      return <div key ={idx}>
      
      <a href={elem.url} target='_blank'>
          <div className="image h-40 w-44 overflow-hidden bg-white rounded-xl">
          <img  className="h-full w-full object-cover" src={elem.download_url} alt="" />
          <div className="name">
            <h1 className='font-bold text-white'>{elem.author}</h1>
          </div>
      </div>
      </a>

    </div>
    

    })
  }


  return (
    <>
    <div className="main bg-black text-white h-screen p-4  overflow-auto">

     

        <div className="seconddiv flex flex-wrap gap-4">
          {printUserData}
        </div>

      </div>
     
    </>
  )
}

export default App
