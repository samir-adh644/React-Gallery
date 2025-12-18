import axios from 'axios'
import {useState,useEffect} from 'react'
import Cards from './components/Cards.jsx';


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


  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>


  if (userData.length>0){
    printUserData= userData.map((elem,idx)=>{

      return <div key ={idx}>
          <Cards elem={elem}/>
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
          style={{opacity:index == 1? 0.6 :1}}
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
