import React, { useContext, useEffect, useState } from "react";
import { AiFillCaretRight, AiOutlineUser } from "react-icons/ai";
import { BiComment, BiShare } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const AdmitDetails = () => {
  const { user } = useContext(AuthContext);
  const postDetails = useLoaderData();
  const { image, name, admissionDates, events, sports } = postDetails;

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = user?.displayName;
    const email = user?.email;
    const number = form.number.value;
    const location = form.location.value;
    const subject = form.sub.value;
    const data = { userName, email, number, location, subject, name };
    console.log(data);
    fetch("http://localhost:5000/admitted-college", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res=>console.log(res));
  };

  return (
    <div className="min-h-[600px] font-primary">
      <div className="bg-white rounded-lg shadow p-4 container lg:w-3/6 my-10 lg:mb-32">
        <div className="flex justify-between"></div>
        {image && <img className="w-full h-96" src={image} alt="" />}

        <h1 className="md:text-2xl font-semibold my-4 text-center ">
          <span className="font-bold">{name}</span>
        </h1>
        <hr />

        <form className="my-10 shadow-xl rounded-lg p-3" onSubmit={handleAdd}>
          <div>
            <div>
              <Link>
                <h3 className="text-3xl font-bold text-center">
                  Admission Form
                </h3>
              </Link>
            </div>
            <div className="mt-4">
              <h1 className="font-semibold p-1">Candidate Name</h1>
              <input
                defaultValue={user?.displayName}
                readOnly
                className="w-full p-2 border rounded-lg outline-none"
                placeholder="Enter your name"
                type="text"
              />
            </div>
            <div className="mt-4">
              <h1 className="font-semibold p-1">Candidate Email</h1>
              <input
                defaultValue={user?.email}
                readOnly
                required
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-lg  outline-none"
                type="email"
              />
            </div>
            <div className="mt-4">
              <h1 className="font-semibold p-1">Versity Name</h1>
              <input
                required
                value={name}
                name="name"
                type="text"
                className="w-full p-2 border rounded-lg  outline-none"
                placeholder="Your device name"
              />
            </div>
            <div className="mt-4">
              <h1 className="font-semibold p-1">Subject Name</h1>
              <input
                required
                name="sub"
                type="text"
                className="w-full p-2 border rounded-lg  outline-none"
                placeholder="Your subject name"
              />
            </div>

            <div className="mt-4 flex items-center gap-4">
              <div>
                <h1 className="font-semibold p-1">Mobile Number</h1>
                <input
                  required
                  name="number"
                  type="number"
                  className="w-full p-2 border rounded-lg  outline-none"
                  placeholder="Your mobile number"
                />
              </div>
              <div>
                <h1 className="font-semibold p-1">Location</h1>
                <input
                  required
                  name="location"
                  type="text"
                  className="w-full p-2 border rounded-lg  outline-none"
                  placeholder="Your  location"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#252422] rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmitDetails;
