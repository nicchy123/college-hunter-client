import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const College = ({college}) => {
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
      <div className=" text-md p-5 ">
        <h2>
         College Name: <span className="font-bold">{name}</span></h2>
        <h2>
         Admission Date: <span className="font-bold">{admissionDates}</span></h2>
          <h1>
            Research History: <span className="font-bold">{researchHistory}</span>
          </h1>

    
        <div className="card-actions justify-end">
          <button className=" px-4 py-1 rounded-xl bg-blue-500 text-white mt-5">
            <Link to={`/colleges/${_id}`}>
            Details
            </Link>
          </button>
        </div>
      </div>
    </div>
    );
};


export default College;
