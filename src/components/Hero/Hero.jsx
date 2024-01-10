import React, { useContext, useEffect, useState } from "react";
import College from "../College/College";
import { FaSearch } from "react-icons/fa";
const Hero = () => {
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

  const images = [
    "https://www.pewresearch.org/wp-content/uploads/2022/04/FT_22.03.29_CollegeGradFacts__feature.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_NZ2nBkr24qVPNt9BaUm06kFtzOoswMtlNgCQp9aEb7lVOVXKti9t3w8l5Fd6l39jBg&usqp=CAU",
    "https://thehill.com/wp-content/uploads/sites/2/2019/12/graduates_12192019_1.jpg?w=1280",
    "https://image.cnbcfm.com/api/v1/image/106864237-1617726340611-gettyimages-73532230-10055899_089.jpeg?v=1690476735",
    "https://compote.slate.com/images/d230f5db-a3f0-4bb5-bc13-4e8bdda0e464.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9OwyKjl4cq9ICo1lkFExy80NTYCjXbvo8ansiSKeocHE4y5hvewNdcZibYXM__Mq__-w&usqp=CAU"
  ]

  
   const research_papers = [
      {
        "title": "Exploring the Impact of Artificial Intelligence on Healthcare",
        "link": "https://www.bachelorprint.com/wp-content/uploads/2023/07/how-to-write-a-research-paper-apa-example-1.png"
      },
      {
        "title": "Climate Change Mitigation Strategies: A Comparative Analysis",
        "link": "https://images.template.net/wp-content/uploads/2017/06/Career-Development-Research-Paper.jpg"
      },
      {
        "title": "The Role of Blockchain Technology in Supply Chain Management",
        "link": "https://open.lib.umn.edu/app/uploads/sites/13/2015/04/6954609e0cb6ae3991944bf943b9063b.jpg"
      },
      {
        "title": "Understanding the Psychology of Online Consumer Behavior",
        "link": "https://www.bachelorprint.com/wp-content/uploads/2023/07/how-to-write-a-research-paper-apa-example-1.png"
      },
      {
        "title": "Advancements in Quantum Computing: Current State and Future Prospects",
        "link": "https://www.bachelorprint.com/wp-content/uploads/2023/07/how-to-write-a-research-paper-apa-example-1.png"
      }
    ]
  
  

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
        {search.slice(0,3).map((college) => (
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

      <div>
      <h1 className="text-center text-3xl font-bold my-10">Recent College Graduates</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:px-32">
          {
            images.map(img=> {
              return <img className="w-full h-60 object-cover rounded-xl" src={img}/>
            })
          }
        </div>
      </div>
      <div>
      <h1 className="text-center text-3xl font-bold my-10"> Researched by the college students</h1>
        <div className="grid  md:grid-cols-2 grid-cols-1 gap-10 lg:px-32">
          {
            research_papers.map((paper, i)=> {
              return <div className=" border-2  border-black  p-3">
                <h1 className="font-semibold text-lg my-2">{i}) { paper.title}</h1>
                <img className="w-full h-60 object-cover rounded-xl" src={paper.link}/>
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;
