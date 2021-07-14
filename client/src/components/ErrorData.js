import React from 'react';
import img from '../img/4.png';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import '../App.css';

const ErrorData = () => {
    return (
        <>
           <div className='d-flex align-items-center justify-content-center mt-5' style={{height: "35em"}}>
                    <div className="d-flex align-items-center justify-content-center errorpg ">
                    <NavLink className='erlink' to='/'>Go back</NavLink>
                        <div className="row">
                                <div className="col-md-4 position-relative">
                                    <img src={img} style={{height:'400px'}} alt="404" />
                                </div>
                                
                        </div>
                        
                    </div> 
                    {/* <button className='btn-primary' ></button> */}
                    
                    
            
            </div>
            
        </>
    )
}

export default ErrorData;
