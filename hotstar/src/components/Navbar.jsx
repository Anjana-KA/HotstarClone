import React, { useState } from "react";
import logo from "../Images/logo.svg"
import myspace from "../Images/myspace.svg"
import search from "../Images/search.svg"
import home from "../Images/home.svg"
import tv from "../Images/tv.svg"
import movies from "../Images/movies.svg"
import sports from "../Images/sports.svg"
import category from "../Images/category.svg"


const Navbar = () => {
    const [touch,setTouch] = useState(false)

    return (
        
       <div className=' grid grid-cols-2 bg-transparent  h-screen w-28 absolute z-10 navbar'>
            <div onMouseEnter={()=> setTouch(true)} onMouseLeave={()=> setTouch(false)}>

                <img src={logo} className="w-16 ml-8 mt-6" />
                <a href="#" class="subscribe-button">Subscribe&nbsp;<span>&gt;&nbsp;</span> </a> <br></br>
               <br></br>
                <img src={myspace} className="w-7 ml-9 mt-8 cursor-pointer  hover:scale-125 transition-transform duration-300" />
                <img src={search} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300" />
                <img src={home} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300" /> 
                <img src={tv} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300" />
                <img src={movies} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300" />
                <img src={sports} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300" />
                <img src={category} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300" />
               
<br></br>
            </div>

            {touch &&
             <div className=" z-20 ml-8 w-20  h-screen font-bold text-base text-slate-300 ">
                <h4 className="mt-40">My Space</h4>
                <h4 className="mt-9">Search</h4>
                <h4 className="mt-9">Home</h4>
                <h4 className="mt-9">TV</h4>
                <h4 className="mt-9">Movies</h4>
                <h4 className="mt-9">Sports</h4>
                <h6 className="mt-9">Categories</h6>
            </div> 
            } 
        </div>
        
    )
}
export default Navbar














// import React, { useState } from "react";
// import logo from "../Images/logo.svg";
// import myspace from "../Images/myspace.svg";
// import search from "../Images/search.svg";

// const Navbar = () => {
//   const [touch, setTouch] = useState(false);

//   const handleMouseEnter = () => {
//     setTouch(true);
//   };

//   const handleMouseLeave = () => {
//     setTouch(false);
//   };

//   return (
//     <div
//       className="grid grid-cols-2 bg-transparent h-screen w-28 absolute z-10 navbar"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div>
//         <img src={logo} className="w-16 ml-8 mt-6" alt="Logo" />
//         <a href="#" className="subscribe-button">
//           Subscribe&nbsp;<span>&gt;&nbsp;</span>{" "}
//         </a>{" "}
//         <br />
//         <br />
//         <img
//           src={myspace}
//           className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300"
//         />
//         <img
//           src={search}
//           className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300"
//         />
//       </div>

//       {touch && (
//         <div className="z-20 ml-8 w-20 h-screen font-bold text-base text-slate-300 ">
//           <h4 className="mt-40">My Space</h4>
//           <h4 className="mt-9">Search</h4>
//           {/* Add other content similarly */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

