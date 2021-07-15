import React from 'react';
import '../App.css';
import { useState , useEffect } from 'react';

const Contact = () => {
    // const [messageData, setMessage] = useState('');
    // const [show, setShow] = useState(false);
    
    // const pushMessage = async ()=>{
    //     try {
    //         const res= await fetch('/getdata',{
    //             method: 'GET',
    //             headers:{
    //                 "Content-Type":"application/json"
    //             },
    //         });

    //         const data=await res.json();
    //         setMessage(data.name);
    //         setShow(true);
    //         // console.log(homeData);

    //         if(!res.status===200){
    //             const error = new Error(res.error);
    //             throw error;
    //         }
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }

    // useEffect(() => {
    //     pushMessage();
    // }, []);
    return (
        <>
            <div className='d-flex align-items-center justify-content-center mt-5 bg' style={{height: "35em"}}>
                    <div className="d-flex align-items-center justify-content-center bg1">
                    
                        <form class="cf">
                        <div class="half left cf">
                            <input type="text" className="inputbx" placeholder="Name"/>
                            <input type="email" className="inputbx" placeholder="Email address"/>
                            <input type="text" className="inputbx" placeholder="Subject"/>
                        </div>
                        <div class="btn-cnt ">
                            <textarea name="message" type="text" className="inputbx halfm" placeholder="Message"></textarea>
                        </div>  
                        <input type="submit" value="Submit" id="input-submit"/>
                        </form>
                    </div>
            
            </div>
            
        </>
    )
}

export default Contact;
