import "../App.css";
import image from "../assets/Screen.png"

const Card = () => {
  return (
    <div className="w-[450px] h-[300px] bg-[#ADA8C8] rounded-xl shadow-md relative ">
      {/* Top Section */}
      <div className="w-full h-[160px] pt-6 pl-6 relative">
        {/* Profile Image */}
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#cdcadf]">
          <img
            src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Background Dots */}
        <div className="dots absolute w-64 h-40 top-5 right-10">
        <img className="absolute right-2 top-1 object-contain z-10" src={image} alt="Graph" />        
        </div>
      </div>

      {/* Bottom Section */}
      <div className="h-[120px] flex justify-between">
        {/* Text Content */}
        <div className="flex flex-col ml-6">
          <p className="text-[#dad7ec] flex items-center gap-2 font-medium">
            1
            <span>
              <hr className="w-8 border" />
            </span>
            Let's start
          </p>
          <h1 className="text-xl font-bold text-[#fdfcff] mt-2">
            Experience the power of <br />
            seamless task management
          </h1>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            <span className="w-20 h-1 bg-[#E2E0EF] rounded"></span>
            <span className="w-20 h-1 bg-[#C2BDDD] rounded"></span>
            <span className="w-20 h-1 bg-[#C2BDDD] rounded"></span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-2 pr-6 pt-12">
          <button className="w-8 h-8 rounded-full flex justify-center items-center text-white bg-[#BCB8D3] hover:text-[#BCB8D3] hover:bg-[#FFFFFA]">
            ❮
          </button>
          <button className="w-8 h-8 rounded-full flex justify-center items-center text-[#B7B5C0] hover:text-[#FFFFFA] bg-[#FFFFFA] hover:bg-[#BCB8D3]">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
