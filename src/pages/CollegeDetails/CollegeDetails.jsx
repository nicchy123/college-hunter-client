import React, { useContext, useEffect, useState } from "react";
import { AiFillCaretRight, AiOutlineUser } from "react-icons/ai";
import { BiComment, BiShare } from "react-icons/bi";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const CollegeDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const postDetails = useLoaderData();
  const { image, name, admissionDates, events, sports } = postDetails;



  return (
    <div className="min-h-[600px] font-primary">
      <div className="bg-white rounded-lg shadow p-4 container lg:w-3/6 my-10 lg:mb-32">
        <div className="flex justify-between"></div>
        {image && <img className="w-full" src={image} alt="" />}

        <h1 className="md:text-2xl font-semibold my-2">
          Name: <span className="font-bold">{name}</span>
        </h1>
        <h1 className="md:text-2xl font-semibold my-2">
          Admission Date: <span className="font-bold">{admissionDates}</span>
        </h1>
        <h1 className="md:text-2xl font-semibold my-2 flex gap-5">
          Sports:{" "}
          <span className="font-bold flex gap-5">
            {sports.map((sport) => (
              <p>{sport}</p>
            ))}
          </span>
        </h1>
        <h1 className="md:text-2xl font-semibold my-2 flex gap-5">
          Events:{" "}
          <span className="font-bold flex gap-5">
            {events.map((sport) => (
              <p>{sport}</p>
            ))}
          </span>
        </h1>
        <div className="flex justify-between mt-4">
          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500 focus:outline-none">
            <BiComment className="w-5 h-5" />
            Comment
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500 focus:outline-none">
            <BiShare className="w-5 h-5" />
            Share
          </button>
        </div>
        <div>
          <div className="flex justify-start items-center gap-3 my-8 ">
            {user?.photoURL ? (
              <img
                className="w-8 h-8 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <AiOutlineUser className="w-10 h-10 p-1 rounded-full object-cover border" />
            )}
            <input
              id="comment"
                type="text"
              className="border border-black outline-none rounded-full p-2 w-full "
              placeholder="Write a comment....."
            />
            <AiFillCaretRight className="w-10 h-10 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
