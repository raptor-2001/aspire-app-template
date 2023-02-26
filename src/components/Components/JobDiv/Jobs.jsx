import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import pratLogo from '../../../assets/favicon.png'
import { useState,useEffect } from 'react';



//for all jobs we will be using high order array method called Map
// We shall lit all the job into an array called Data

const Data = [
    {
    id:1,
    image:pratLogo,
    title: 'Web Developer',
    time:'now',
    location:'India',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit Provident, dignissimos accusamus autem minus assumend placeat quae ratione odit dolore expedita?',
    company:'Druva India Co.'

    },

    {
        id:2,
        image:pratLogo,
        title: 'Web Developer',
        time:'now',
        location:'India',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit Provident, dignissimos accusamus autem minus assumend placeat quae ratione odit dolore expedita?',
        company:'Druva India Co.'
    
        },

        {
            id:3,
            image:pratLogo,
            title: 'Web Developer',
            time:'now',
            location:'India',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit Provident, dignissimos accusamus autem minus assumend placeat quae ratione odit dolore expedita?',
            company:'Druva India Co.'
        
            },

            {
                id:4,
                image:pratLogo,
                title: 'Web Developer',
                time:'now',
                location:'India',
                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit Provident, dignissimos accusamus autem minus assumend placeat quae ratione odit dolore expedita?',
                company:'Druva India Co.'
            
                },

                {
                    id:5,
                    image:pratLogo,
                    title: 'Web Developer',
                    time:'now',
                    location:'India',
                    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit Provident, dignissimos accusamus autem minus assumend placeat quae ratione odit dolore expedita?',
                    company:'Druva India Co.'
                
                    },

                    {
                        id:6,
                        image:pratLogo,
                        title: 'Web Developer',
                        time:'now',
                        location:'India',
                        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit Provident, dignissimos accusamus autem minus assumend placeat quae ratione odit dolore expedita?',
                        company:'Druva India Co.'
                    
                        },

                        {
                            id:7,
                            image:pratLogo,
                            title: 'Web Developer',
                            time:'now',
                            location:'India',
                            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit Provident, dignissimos accusamus autem minus assumend placeat quae ratione odit dolore expedita?',
                            company:'Druva India Co.'
                        
                            },

                            {
                                id:8,
                                image:pratLogo,
                                title: 'Web Developer',
                                time:'now',
                                location:'India',
                                desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit Provident, dignissimos accusamus autem minus assumend placeat quae ratione odit dolore expedita?',
                                company:'Druva India Co.'
                            
                                }

]

// Above is for single Npw how to map it for multiple jobs


const Jobs  = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:4000/api/job/get_jobs')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);
  
    
   console.log(data);

       
    return (
        <div> 
            
            <div  className = "jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

                {
                    data.map((e)=>{
                        return (
                            <div key = {e._id} className="group group/item singlejob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-[#2a68ff] shadow-lg shadow-[#f1f4f8]-400/700 hover:shadow-lg">
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className ='text-[16px] font-semibold text-textColor group-hover:text-white'>
                            {e.recruiterName}
                        </h1>
                   

                    <span className="flex items-center text-[#000] gap-1">
                        <BiTimeFive />{e.time}
                    </span>

                    </span>

                    {/* <h6 className ="text-[#000]">{e.location}</h6> */}

            <p className ='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                
               {e.description}
                  
            </p>



            <div className='company flex items-center gap-2'>
                {/* <img src={image} alt="Company Logo" className = 'w-[10%]' /> */}

                <span className = "text-[14px] py-[1rem] block group-hover:text-white">
                    {e.recruiter}
                </span>
            </div>


            <botton className='align-center border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
           Apply Now
            {/* <NavLink to="/Sources/form" className="px-3 py-2 bg-[#328cf2] rounded-3xl font-semibold text-white">Apply Now</NavLink> */}
            </botton>

                </div>
                        )
                    })
                }
            </div>

        </div>

    )
}

export default Jobs