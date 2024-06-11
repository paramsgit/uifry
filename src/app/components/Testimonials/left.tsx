"use client"


export default function Left() {
  return (
    <div className=" lg:w-[60%] w-[425px] ">
      <img
        className=" absolute  lg:top-[70px] lg:-left-[40px] lg:scale-100 scale-75 -left-16 top-4"
        src={`/assets/colortes.png`}
        alt=""
      />

      <img
        className=" absolute lg:-bottom-[110px] lg:-left-[130px]"
        src={`/assets/star48.png`}
        alt=""
      />
      <img
        className=" absolute lg:-top-[80px] lg:-left-[65px]  lg:w-auto w-[425px]"
        src={`/assets/tesEllipse.png`}
        alt=""
      />
      <img className=" absolute " src={`/assets/testimonialWhole.png`} alt="" />
    </div>
  );
}
