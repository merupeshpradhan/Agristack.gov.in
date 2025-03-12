import React from "react";
import HomepageImage from "../assets/images/NIC logo2.png";
import AgriStack from "../assets/images/agri_stack_logo.png";
import SealOfOdisha from "../assets/images/Seal_of_Odisha.png";

function Homepage() {
  return (
    <section className="bg-dark-cyan h-[100vh] py-[30px] px-[79px]">
      <div className="top_link  flex">
        <a href="/" className="homepageImage">
          <img src={HomepageImage} className="w-[175px] " />
        </a>
        <div className="all-link justify-center mt-5 ml-[400px]">
          <ul className="text-white flex gap-10">
            <li className="font-semibold text-lg text-shades-2  transition duration-200 ease-in hover:text-white flex items-center">
              <a href="/dashboard" className="font-bold">Dashboard</a>
              <div className="w-1.5 h-1.5 bg-white rounded-full mt-1 ml-10"></div>
            </li>
            <li className="font-semibold text-lg text-shades-2 transition duration-200 ease-in hover:text-white flex items-center">
              <a href="/checkEnrollmentStatus" className="font-bold">check Enrollment Status</a>
              <div className="w-1.5 h-1.5 bg-white rounded-full mt-1 ml-10"></div>
            </li>
            <li className="font-semibold text-lg text-shades-2 transition duration-200 ease-in hover:text-white flex items-center">
              <a href="/LoginwithCSC" className="font-bold">Login with CSC</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="login_area flex items-center justify-center mt-[45px] mx-auto">
        <div className="left mr-[30%]">
          <img src={AgriStack} className="w-[290px]" />
        </div>

        <div className="h-[70vh] w-[20%]">
          <div className="right bg-white rounded-[30px] px-[30px] py-[20px]">
            <div className="login_side_top">
              <div className="Login_top_image flex justify-center">
                <img src={SealOfOdisha} />
              </div>

              <div className="login_Selector flex justify-center mt-[20px]">
                <h4 className="text-[22px] font-medium  mr-[20px]">Login In as</h4>
                <ul className="flex border border-black rounded">
                  <li className="flex items-center px-4 text-sm font-semibold text-white bg-jade rounded cursor-pointer">
                    <button className="cursor-pointer">Official</button>
                  </li>
                  <li className="flex items-center px-4 text-base font-semibold text-jade cursor-pointer">
                    <button className="cursor-pointer">Framer</button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="login_side_body">
              <div className="insert_id_mobileNo_email flex justify-center mt-[20px] ">
                <input
                  type="text"
                  placeholder="Insert User ID / Mobile No. / Email as Username"
                  className="border-1 border-shades-1 focus:outline-none focus:ring-1 focus:ring-jade rounded-[6px] h-[20px] w-[350px] p-[15px] text-[12px] font-medium "
                />
              </div>

              <div className="passwrd_otp_slection mt-[20px] mb-[10px] ml-[20px] flex">
                <label className="password mr-8 flex">
                  <input
                    type="radio"
                    name="slectLoginOption"
                    value="Password"
                    className="mr-2 cursor-pointer"
                  />
                  <p className="font-medium cursor-pointer">Password</p>
                </label>
                <label className="otp flex">
                  <input
                    type="radio"
                    name="slectLoginOption"
                    value="OTP"
                    className="mr-2 cursor-pointer"
                  />
                  <p className="font-medium cursor-pointer">OTP</p>
                </label>
              </div>
              <div className="password flex flex-col mt-[20px]">
                <div className="flex justify-center">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="border-1 border-shades-1 focus:outline-none focus:ring-1 focus:ring-jade rounded-[6px] h-[20px] w-[350px] p-[15px] text-[12px] font-medium "
                  />
                </div>
                <a className="ml-1 mt-1 mb-4 text-jade cursor-pointer text-[14px] font-thin">
                  Forgot Password?
                </a>
              </div>
              <div className="ml-1">
                <button className="px-5 py-2 bg-jade rounded-[8px] text-white cursor-pointer">
                  Login In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
