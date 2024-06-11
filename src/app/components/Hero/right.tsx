"use client"

export default function Right() {
    return (
        <div className=" flex lg:mt-20 mt-72 lg:w-[50%] relative">
          <img
            className=" absolute lg:-top-[100px]  lg:left-[180px]"
            src={`/assets/colorheroright.png`}
            alt=""
          />
    
          <img
            className=" absolute lg:left-44  lg:-bottom-[370px]"
            src={`/assets/3.png`}
            alt=""
          />
          <img
            className=" lg:scale-90 absolute lg:left-[170px] lg:-bottom-[330px]"
            src={`/assets/2.png`}
            alt=""
          />
          <img
            className=" lg:scale-90 absolute lg:left-[65px] lg:-bottom-[260px]"
            src={`/assets/1.png`}
            alt=""
          />
        </div>
      );
}