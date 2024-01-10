import React, {  useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import College from "../../components/College/College";
const Colleges = () => {
  const [loading, setLoading] = useState(true);
  const [colleges, setcolleges] = useState([]);
  const [search, setSearch] = useState(colleges);
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
        setSearch(data);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleSearch = (text) => {
    console.log(text);
    const data = colleges.filter((college) =>
      college.name.toLowerCase().includes(text)
    );
    setSearch(data);
  };
  return (
    <div className="flex flex-col  items-center my-10 min-h-[600px] container">
      <div className="flex w-full justify-center items-center gap-2">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="search college : harbard : unity..."
          className="input border border-gray-300 w-2/3"
          type="text"
        />
        <FaSearch className="w-5 h-5 cursor-pointer" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  my-10">
        {search.map((college) => (
          <College key={college._id} college={college} />
        ))}
      </div>
      <div>
        {!search.length && (
          <div className="min-h-[70vh] flex justify-center items-center">
            <p className="text-center text-2xl">No Universiry Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Colleges;
