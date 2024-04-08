import side from "../Assets/aiu-1.jpg";
const colors = {
  primary: "#060606",
  background: "#E0E0E0",
  dusabled: "#D9D9D9",
};
const login = () => {
  return (
    // <div className="w-full min-h-screen flex items-start">
    //   <div className=" relative w-1/3 h-full flex flex-col ">
    //     <div className="absolute top-[25%] left-[10%] flex flex-col ">
    //       <h1 className="text-2xl text-[#E0E0E0] font-extrabold my-4 ">
    //         welcome to aiu
    //       </h1>
    //     </div>
    //     <img src={side} className="w-full  h-full  object-cover " />
    //   </div>
    // </div>
    <div
      style={{
        backgroundImage: { side },
        width: "300px",
        height: "250px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "12px",
      }}
    ></div>
  );
};
export default login;
