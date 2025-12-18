import axios from 'axios'
import {useState,useEffect} from 'react'


function App() {

  const [userData,setUserData]=useState([]);
  const [index , setIndex]=useState(1)


  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }
  useEffect(function(){
    getData()
  },[index])

  let printUserData ="Loading"
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

     
      
        <div className="seconddiv flex flex-wrap gap-4 semibold">
          {printUserData}
        </div>

        <div className='flex justify-center items-center p-4'>
          < button 
          onClick={()=>{
            if (index>1){
              setUserData([]);
                setIndex(index-1)

                        }
          }}
          className='bg-amber-400 text-black rounded m-4 px-4 py-4 font-semibold cursor-pointer active:scale-95'>Prev</ button>
          <h2>Page {index}</h2>
          < button 
          onClick={()=>{
            setUserData([]);
              setIndex(index+1)
          }}
          className='bg-amber-400 text-black rounded m-4 px-4 py-4 font-semibold cursor-pointer active:scale-95'> Next </button>
        </div>

      </div>
     
    </>
  )
}

export default App
