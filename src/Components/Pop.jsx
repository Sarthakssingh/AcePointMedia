import React from 'react';
import { useState,useEffect } from 'react';
import "./Page.css";

function Pop() {

    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {setLoading(true)}, 10000)
    },[])

  return (          
    <div className='shadow m-3 p-2 background'>
        <hr className='rule2'/>
        {loading ? 
        <div className="">
        <h3 className="in-heading">Last Step - You are eligible and qualify for compensation.</h3>
        <span className="yellow-bg">FREE CONSULTATION CALL</span>
        <p className="in-para">There are absolutely NO costs or commitments incurred for calling and talking to our legal terms.</p>
        <h2 className="call">TAP TO CALL</h2>
        <button className='sub-button'>+1(346) 788-6952</button>
        <p className="para">Lorem ipsum a facilis hic! Hicdolores temporibus debiti Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium neque placeat voluptatibus, sapiente quasi accusamus cupiditate amet consectetur provident quas vitae quis nihil doloius tibus! Eoluptates ratione.</p>
        </div>
        : 
        <div class="loading"></div>
        

        }
        
    </div>
  )
}

export default Pop;