import React, {  useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import College from "../../components/College/College";
import Admit from "../../components/Admit/Admit";
const Admission = () => {
  const [loading, setLoading] = useState(true);
  const [colleges, setcolleges] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/colleges`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setcolleges(data);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }


  return (
    <div className="flex flex-col  items-center my-10 min-h-[600px] container">

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  my-10">
        {colleges.map((college) => (
          <Admit key={college._id} college={college} />
        ))}
      </div>
      <div>
        {!colleges.length && (
          <div className="min-h-[70vh] flex justify-center items-center">
            <p className="text-center text-2xl">No Universiry Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admission;
