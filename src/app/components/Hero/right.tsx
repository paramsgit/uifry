"use client"

export default function Right() {
    return (
        <div className=" flex lg:mt-20 mt-72 lg:w-[50%] relative">
          <div className="heroPhoneDiv">
          <img
            className="phoneBg absolute lg:-top-[100px]  lg:left-[180px]"
            src={`/assets/colorheroright.png`}
            alt=""
          />
    
          <img
            className="phone3 animatePhone3 absolute lg:left-[176px]  lg:-bottom-[370px]"
            src={`/assets/3.png`}
            alt=""
          />
          <img
            className="phone2 lg:scale-90 absolute lg:left-[170px] lg:-bottom-[330px]"
            src={`/assets/2.png`}
            alt=""
          />
          <img
            className="phone1 animatePhone1 lg:scale-90 absolute lg:left-[65px] lg:-bottom-[260px]"
            src={`/assets/1.png`}
            alt=""
          />
          </div>
        </div>
      );
}