import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {useHistory} from 'react-router-dom';

const About = () => {

    const history = useHistory();
    const [userData, setuserData] = useState({});

    const callAboutPage = async ()=>{
        try {
            const res= await fetch('/about',{
                method:'GET',
                headers:{
                    Accept:'application/json',
                    "Content-Type":'application/json'
                },
                credentials:'include'
            });
            // console.log(res)
            const data= await res.json();
            
            setuserData(data);
            console.log(userData);

            if(!res.status===200){
                const error=new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            
            console.log('this')
            history.push('/login');
        }
    }

    useEffect(() => {
        
        callAboutPage();
        // alert('lalit')
    }, []);

    return (
        <>
           <div className="container">
               <form action="" method="GET">
                   <div className="row">
                        <div className="col-md-4 mt-5 ">
                            <img src="data:image/jpeg;base64,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" alt="" srcset="" />
                        </div>
                        <div className="col-md-6 mt-5 ">
                            <div className="profile-head">
                                <h5>{userData.name}</h5>
                                <h6>Web Developer</h6>
                                <ul className="nav nav-tabs" role='tablist'>
                                    <li className="nav-item">
                                        <a href="#home" id='home-tab' className="nav-link table-active" data-toggle='tav' role='tab'>About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#profile" id='profile-tab' className="nav-link table-active" data-toggle='tav' role='tab'>Timeline</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 mt-5">
                            <input type="submit" name="btnAddMore" className="" value='Edit Profile' />
                        </div>
                   </div>

                   <div className="row">
                       <div className="col-md-4">
                           <div className="pro-work">
                               <p>Work Link</p>
                               <a href="http://" >Yt</a><br />
                               <a href="http://" >Yt</a><br />
                               <a href="http://" >Yt</a><br />
                               <a href="http://" >Yt</a><br />
                               <a href="http://" >Yt</a><br />
                           </div>
                        </div>
                           <div className="col-md-5 pl-5">
                               <div className="tab-content profile-tab">
                                   <div className="tab-pane fade show active" id='home' role='tabpanel' area-aria-labelledby='home-tab'>
                                       <div className="row">
                                           <div className="col-md-6">
                                               <label> User Id</label>
                                           </div>
                                           <div className="col-md-6 val" >
                                               <p>{userData._id}</p>
                                           </div>
                                       </div>

                                       <div className="row">
                                           <div className="col-md-6">
                                               <label> Name</label>
                                           </div>
                                           <div className="col-md-6 val" >
                                               <p>{userData.name}</p>
                                           </div>
                                       </div>

                                       <div className="row">
                                           <div className="col-md-6">
                                               <label> Email</label>
                                           </div>
                                           <div className="col-md-6 val" >
                                               <p>{userData.email}</p>
                                           </div>
                                       </div>

                                       <div className="row">
                                           <div className="col-md-6">
                                               <label> Phone</label>
                                           </div>
                                           <div className="col-md-6 val" >
                                               <p>{userData.phone}</p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       
                   </div>
               </form>
           </div>
        </>
    )
}

export default About;
