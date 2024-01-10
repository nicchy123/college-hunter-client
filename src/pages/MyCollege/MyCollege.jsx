import React, { useContext, useEffect, useState } from "react";
import { AiFillCaretRight, AiOutlineUser } from "react-icons/ai";
import { BiComment, BiShare } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/my-college/${user?.email}`, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, []);
  if(loading){
    return <h1>Loading...</h1>
  }

  console.log(data);
  const {email, location, name, number, subject,userName}=data
  return (
  
    <div className="text-center flex flex-col justify-center items-center gap-5 my-10">
      <h1 className="text-3xl font-semibold">{name}</h1>
      <h1>College Locaton: {location}</h1>
      <h1>Your Name : {userName}</h1>
      <h1>{email}</h1>
      <h1>{subject}</h1>
      <h1>Number: {number}</h1>
    </div>
  );
};

export default MyCollege;
