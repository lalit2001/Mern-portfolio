import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState , useEffect } from 'react';

const Home = () => {

    const [homeData, setHome] = useState('');
    const [show, setShow] = useState(false);
    
    const UseHomePage = async ()=>{
        try {
            const res= await fetch('/getdata',{
                method: 'GET',
                headers:{
                    "Content-Type":"application/json"
                },
            });

            const data=await res.json();
            setHome(data.name);
            setShow(true);
            console.log(homeData);

            if(!res.status===200){
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        UseHomePage();
    }, []);


    return (
        <>
            <div className='d-flex align-items-center justify-content-center  bg' style={{height: "92vh"}}>
                    <div >
                        <h1 className='text-center position-relative'><span style={{color:'gray'}}>WELCOME</span></h1>
                        <h1 className='text-center position-relative'><span style={{color:'gray'}}>{homeData}</span></h1>
                        
                        <p className="pt=5 pg">{show ?"Happy to see you back": "I am a MERN Developer"}</p>
                    </div>
            </div>
        </>
    )
}

export default Home;
