import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Admit = ({college}) => {
    const {name, researchHistory, sports, image,admissionDates,events, _id, } = college;
    return (
      <div className=" lg:w-96 w-full mx-auto bg-base-300 rounded-xl shadow-3xl">
     {
      image?
      <figure>
      <img className='w-full h-60 rounded-md object-cover cursor-pointer' src={image} alt="teacher" />
      
        </figure>
      :
      <FaUser className='w-6 h-6 rounded-full' />
     }
      <div className="items-center text-center p-5 ">
        <h2 className="card-title ">
          name: {name}</h2>
          <h1 className='text-start'>{
            researchHistory?.length > 100? 
            <p>{researchHistory?.slice(0,100)}...</p>
            :
            <p>{researchHistory}</p>
          }</h1>

    
        <div className="card-actions justify-end">
          <button className="btn bg-blue-500 btn-secondary">
            <Link to={`/admit/${_id}`}>
            Admit
            </Link>
          </button>
        </div>
      </div>
    </div>
    );
};


export default Admit;
