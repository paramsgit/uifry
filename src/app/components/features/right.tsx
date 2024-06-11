"use client"


export default function Right() {
  return (
    <>
        <div className=" mt-32 lg:mx-0 mx-4 lg:w-[48%] w-[425px] relative">
      <img
        className=" absolute lg:-right-[40%] right-5"
        src={`/assets/colorfeaturesright.png`}
        alt=""
      />

      <h1 className="  uppercase lg:text-[18px] font-[ClashDisplay-Medium] tracking-widest text-primary-red">
        Features
      </h1>
      <h1 className=" dark:text-primary-white font-[ClashDisplay-Bold] lg:text-[48px] text-[44px] ">
        Uifry Premium
      </h1>

      <div className=" mt-7 relative">
        <h1 className=" flex text-lg font-[ClashDisplay-Semibold] gap-3 items-center dark:text-primary-white">
          <img className=" size-5 " src={`/assets/features1.png`} alt="" />
          <span className=" tracking-wide  font-[ClashDisplay-Semibold] capitalize ">
            budgeting intervals
          </span>
        </h1>
        <p className=" text-gray-500 font-[ClashDisplay-Medium]  capitalize mt-3">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
      <div className=" mt-8 relative">
        <h1 className=" flex text-lg font-[ClashDisplay-Semibold] tracking-wide gap-3 items-center dark:text-primary-white">
          <img className=" size-5 " src={`/assets/features2.png`} alt="" />
          <span className=" font-[ClashDisplay-Semibold] tracking-wide capitalize">
            budgeting intervals
          </span>
        </h1>
        <p className=" text-gray-500 capitalize font-[ClashDisplay-Medium] mt-3">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
      <div className=" mt-8">
        <h1 className=" flex text-lg font-[ClashDisplay-Semibold] gap-3 items-center dark:text-primary-white">
          <img className=" size-5 " src={`/assets/features3.png`} alt="" />
          <span className=" font-[ClashDisplay-Semibold] capitalize">
            budgeting intervals
          </span>
        </h1>
        <p className=" text-gray-500 capitalize font-[ClashDisplay-Medium] mt-3">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
    </div>
    </>
  );
}