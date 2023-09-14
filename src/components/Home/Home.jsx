import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import './Home.css';

const Home = () => {
     
   
const [allActors,setAllActors] = useState([]);
     
      const [selectedActors, setSelectedActors] = useState([]);
      const [remaining , setRemaining] = useState(0);

     const [totalCost,setTotalCost] = useState(0)
      
    useEffect(()=>{
    fetch(`./data.json`)
    .then(res=> res.json())
    .then(data =>  setAllActors(data));

    },[]);


    const handleSelectActor = (actor) =>{
         const isExist = selectedActors.find(item => item.id==actor.id)
         let count = actor.salary;
          if(isExist){
             return alert("already booked")
          }else{
              selectedActors.forEach((item) =>{
                count =  count + item.salary
              });
              console.log(count);
              const totalRemainng = 20000-count;

            
               if(count > 20000){
           return  alert("taka sesh ar hbe na")
               }else{
                setTotalCost(count);
                setRemaining(totalRemainng);
              setSelectedActors([...selectedActors,actor]);
               }
             
          }

    }
  
   
    return (
        <div className='container'>

               <div className="home-container">
                 
                 <div className="card-container">
                
              {

                // eslint-disable-next-line no-unused-vars, react/jsx-key
                allActors.map(actor=> ( <div key={actor.id} className='card'>

                <div className='card-img' >
                    <img className='photo text-center' src={actor.image} alt="" />
                </div>
                <h2 className='text-xl'>name:{actor.name}</h2>
                <p>
                <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, deserunt!
                </small>
                </p>
                
                <div className="info">
                <p>
                salary:{actor.salary}
                </p>
                <p>role:{actor.role}</p>
                </div>
                <button 
                  onClick={()=>{
                    handleSelectActor(actor)
                  }}
                 className='card-btn'>
                Select
                </button>
                              </div>))
              }

                 </div>
                
                 <div className="cart">

                    <Cart selectedActors={selectedActors}
                     remaining={remaining}
                     totalCost={totalCost}></Cart>
                 
                 </div>
    
               </div>
        </div> 
    );
};

export default Home;