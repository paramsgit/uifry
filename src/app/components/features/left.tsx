"use client"



export default function Left() {
  return (
    <div className=" w-[50%]">
      <div className="   absolute  lg:w-[720px] w-[425px]  lg:right-[560px] lg:h-[720px]   ">
        <img
          className=" absolute lg:top-0 top-[100px]"
          src={`/assets/colorfeaturesleft.png`}
          alt=""
        />

        <img
          className=" absolute lg:top-[150px] top-[100px]"
          src={`/assets/star48.png`}
          alt=""
        />
        <img
          className=" relative lg:scale-95 lg:top-0 top-[100px]"
          src={`/assets/featuresMobile.png`}
          alt=""
        />
      </div>
    </div>
  );
}