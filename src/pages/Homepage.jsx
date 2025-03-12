import React from "react";
import HomepageImage from "../assets/images/NIC logo.png";
import AgriStack from "../assets/images/agri_stack_logo.png";
import SealOfOdisha from "../assets/images/Seal_of_Odisha.png";

function Homepage() {
  return (
    <section className="bg-dark-cyan h-[100vh]">
      <div className="top_link pt-5 ml-15 flex">
        <a href="/" className="homepageImage">
          <img src={HomepageImage} className="w-[205px]" />
        </a>
        <div className="all-link justify-center mt-5 ml-[400px]">
          <ul className="text-white flex gap-20">
            <li className="font-semibold text-lg text-shades-2  transition duration-200 ease-in hover:text-white">
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="font-semibold text-lg text-shades-2 transition duration-200 ease-in hover:text-white">
              <a href="/checkEnrollmentStatus">check Enrollment Status</a>
            </li>
            <li className="font-semibold text-lg text-shades-2 transition duration-200 ease-in hover:text-white">
              <a href="/LoginwithCSC">Login with CSC</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="login_area flex items-center justify-center">
        <div className="left mr-[30%]">
          <img src={AgriStack} className="w-[300px]" />
        </div>

        <div className="right h-[70vh] w-[22%] bg-white rounded-[30px]">
          <div className="login_side_top">
            <div className="Login_top_image flex justify-center p-[30px]">
              <img src={SealOfOdisha} />
            </div>

            <div className="login_Selector flex justify-center">
              <h4 className="text-[25px] font-bold mr-[20px]">Login In as</h4>
              <ul className="flex border border-black rounded">
                <li className="flex items-center px-4 text-sm font-semibold text-white bg-jade rounded">
                  <button className="">Official</button>
                </li>
                <li className="flex items-center px-4 text-base font-semibold text-jade ">
                  <button>Framer</button>
                </li>
              </ul>
            </div>
          </div>

          <div className="login_side_body">
            <div className="insert_id_mobileNo_email flex justify-center mt-[20px] ">
              <input
                type="text"
                placeholder="Insert User ID / Mobile No. / Email as Username"
                className="border-1 border-shades-1 focus:outline-none focus:ring-1 focus:ring-jade rounded-[6px] h-[20px] w-[400px] p-[15px] text-sm font-semibold "
              />
            </div>

            <div className="passwrd_otp_slection mt-[20px] mb-[10px] ml-[20px] flex">
              <label className="password mr-8 flex">
                <input
                  type="radio"
                  name="slectLoginOption"
                  value="Password"
                  className="mr-2"
                />
                <p>Password</p>
              </label>
              <label className="otp flex">
                <input
                  type="radio"
                  name="slectLoginOption"
                  value="OTP"
                  className="mr-2"
                />
                <p>OTP</p>
              </label>
            </div>
            <div className="password flex flex-col jus">
              <div className="flex justify-center">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="border-1 border-shades-1 focus:outline-none focus:ring-1 focus:ring-jade rounded-[6px] h-[20px] w-[400px] p-[15px] text-sm font-semibold "
                />
              </div>
              <a className="ml-4 mt-1 mb-4 text-jade cursor-pointer text-[14px] font-medium">
                Forgot Password?
              </a>
            </div>
            <div className="ml-4">
              <button className="px-5 py-2 bg-jade rounded-[8px] text-white">Login In</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
