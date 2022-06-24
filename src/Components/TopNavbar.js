import React from 'react';
import './TopNav.css';
import {FaCubes, FaAngleDown, FaUserCircle} from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

const TopNavbar = () => {
  return (
    <div style={{borderBottom: '1px solid #bbb', paddingBottom: "10px"}}>
          <div className="topnav">
            
                 <IconContext.Provider value={{ style: {fontSize: '40px', color: "green"}}}>
                    <div style={{flexGrow: '0'}}>
                    <FaCubes />
                    </div>
                 </IconContext.Provider>
             
             
             
                
                <IconContext.Provider value={{ style: {fontSize: '30px', height: '0.8em'}}}>
                    <div style={{flexGrow: '0.8', paddingLeft: '25px', paddingTop: "10px"}}>
                        <div style={{display: "flex"}}>
                           <div>
                             MY APPLICATION
                           </div>
                           <FaAngleDown />
                        </div>
                        
                    </div>
                 </IconContext.Provider>
            
             <div style={{flexGrow: '8'}}></div>

             
                    <div style={{flexGrow: '3', paddingLeft: '25px', paddingTop: "10px"}}>
                        <div style={{display: "flex"}}>
                        <IconContext.Provider value={{ style: {fontSize: '40px', height: '0.8em'}}}>
                          <div>
                            <FaUserCircle /> 
                          </div>
                        </IconContext.Provider>
                        
                         
                          <div style={{padding: "5px"}}> Barde Ridel</div>
                          <IconContext.Provider value={{ style: {fontSize: '40px', height: '0.8em'}}}>
                            <div>
                               <FaAngleDown />
                            </div>
                          </IconContext.Provider>
                          
                         
                        </div>
                      
                    </div>
                
             
    </div>
    </div>
   
  )
}

export default TopNavbar