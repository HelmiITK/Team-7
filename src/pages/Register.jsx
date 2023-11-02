import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";
import { BiSolidUserDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/authActions";
import Slider from "react-slick";

import captenAmerica from "../assets/captain-america_449504.png";
import spiderMan from "../assets/spiderman_1090806.png";
import xman from "../assets/xman.png";
import hulk from "../assets/hulk.png";
import flash from "../assets/flash.png";
import ironMan from "../assets/ironMan.png";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
    combineTheNames(event.target.value, lastname);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
    combineTheNames(firstname, event.target.value);
  };

  const combineTheNames = (firstname, lastname) => {
    const combinedName = `${firstname} ${lastname}`;
    setName(combinedName);
  };

  const passwordValidation = (password, confirm) => {
    if (password !== confirm) {
      setPasswordError("Password not match!");
    } else {
      setPasswordError("");
    }
  };
  const handlePasswordMatch = (event) => {
    setPassword(event.target.value);
    passwordValidation(event.target.value, confirmpassword);
  };
  const handleConfirmPasswordMatch = (event) => {
    setConfirmPassword(event.target.value);
    passwordValidation(password, event.target.value);
  };

  const regis = async (event) => {
    event.preventDefault();

    dispatch(register(email, name, password, navigate));
  };

  // animasi slide icon superhero
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      {/* <div className="bg-slate-950 w-full h-screen">
        <div className="w-80 h-screen lg:w-[700px] lg:h-screen rounded-e-[60px] bg-gradient-to-r from-cyan-800 bg-opacity-50 absolute left-0 top-0">
          <div className="lg:mt-48 lg:w-96 lg:p-12 lg:rounded-2xl lg:ml-40 lg:bg-slate-900 lg:bg-opacity-50 lg:flex lg:flex-col lg:shadow-2xl">
            <div className="mt-4 mx-4 lg:mt-0 lg:mx-0">
              <h1 className="text-white text-base font-medium lg:font-medium lg:text-lg lg:mb-2">
                Welcome to 🎞️🍿
              </h1>
              <p className="text-red-600 text-4xl font-extrabold lg:text-6xl lg:font-extrabold">
                MovieList
              </p>
            </div>
            <div className="absolute top-2 -right-36 left-56 lg:relative overflow-clip lg:right-0 lg:left-0 lg:top-0">
              <Slider {...settings} className="lg:mt-6">
                <img
                  src={captenAmerica}
                  alt="icon capten america"
                  className="p-3 lg:p-4"
                />
                <img
                  src={spiderMan}
                  alt="icon spiderman"
                  className="p-3 lg:p-4"
                />
                <img
                  src={ironMan}
                  alt="icon superhero1"
                  className="p-3 lg:p-4"
                />
                <img src={hulk} alt="icon hulk" className="p-3 lg:p-4" />
                <img src={flash} alt="icon iron man" className="p-3 lg:p-4" />
                <img src={xman} alt="icon xman" className="p-3 lg:p-4" />
              </Slider>
            </div>
          </div>
        </div> */}

      {/* Register Card */}

      {/* <div className="box mt-[94px] lg:mt-0 right-3 absolute top-20 ">
          <span className="box2 hidden lg:block"></span>
          <div className=" box3 bg-slate-700 bg-opacity-10 rounded-xl px-5 pb-5 pt-4">
            <div className="text-3xl font-bold mb-2 flex flex-row items-center justify-center text-white">
              <BiSolidUserDetail className="text-5xl text-red-600" />
              <h1 className="text-cyan-400">Register</h1>
            </div>
            <form
              action="submit"
              onSubmit={regis}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Firstname"
                  className="block font-semibold mb-2 text-slate-700
                                        after:content-['*']
                                        after:ml-1
                                        after:text-pink-500"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  placeholder="nama depan..."
                  className="py-3 px-2 border border-slate-300 rounded-xl w-full text-sm placeholder:text-slate-400
                                    focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500\
                                    invalid:text-pink-700
                                    invalid:focus:ring-pink-700
                                    invalid:focus:border-pink-700
                                    peer"
                  value={firstname}
                  onChange={handleFirstName}
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Lastname"
                  className="block font-semibold mb-2 text-slate-700
                                        after:content-['*']
                                        after:ml-1
                                        after:text-pink-500"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  placeholder="nama belakang..."
                  className="py-3 px-2 border border-slate-300 rounded-xl w-full text-sm placeholder:text-slate-400
                                    focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500\
                                    invalid:text-pink-700
                                    invalid:focus:ring-pink-700
                                    invalid:focus:border-pink-700
                                    peer"
                  value={lastname}
                  onChange={handleLastName}
                  required
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="email">
                  <span
                    className="block font-semibold mb-2 text-slate-700
                                        after:content-['*']
                                        after:ml-1
                                        after:text-pink-500"
                  >
                    Email
                  </span>
                  <input
                    type="email"
                    id="email"
                    placeholder="masukkan email..."
                    className="py-3 px-2 border border-slate-300 rounded-xl w-full text-sm placeholder:text-slate-400
                                    focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500\
                                    invalid:text-pink-700
                                    invalid:focus:ring-pink-700
                                    invalid:focus:border-pink-700
                                    peer"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <p className="text-sm m-1 text-pink-700 invisible peer-invalid:visible">
                    email tidak valid
                  </p>
                </label>
              </div>

              <div className="col-span-6">
                <label htmlFor="password">
                  <span
                    className="block font-semibold mb-2 text-slate-700
                                        after:content-['*']
                                        after:ml-1
                                        after:text-pink-500"
                  >
                    Password
                  </span>
                  <input
                    type="password"
                    id="password"
                    placeholder="masukkan password..."
                    className="py-3 px-2 border border-slate-300 rounded-xl w-full text-sm placeholder:text-slate-400
                                    focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500\"
                    value={password}
                    onChange={handlePasswordMatch}
                    required
                  />
                </label>
              </div>

              <div className="col-span-6">
                <label htmlFor="confirmpassword">
                  <span
                    className="block font-semibold mb-2 text-slate-700
                                        after:content-['*']
                                        after:ml-1
                                        after:text-pink-500"
                  >
                    Confirm Password
                  </span>
                  <input
                    type="password"
                    id="confirmpassword"
                    placeholder="masukkan password kembali..."
                    className="py-3 px-2 border border-slate-300 rounded-xl w-full text-sm placeholder:text-slate-400
                                    focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500\"
                    value={confirmpassword}
                    onChange={handleConfirmPasswordMatch}
                    required
                  />
                </label>
                {passworderror && (
                  <p className=" px-2 text-sm col-span-6 text-pink-700 ">
                    {passworderror}
                  </p>
                )}
              </div>

              <div className=" col-span-6 flex flex-col items-center mt-6">
                <button
                  type="submit"
                  className="lg:w-40 text-white bg-red-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center-800"
                >
                  Create an account
                </button>
                <p className="mt-2 text-gray-500 text-sm">
                  Already have an account? &nbsp;
                  <Link to={"/login"} className="underline text-red-500">
                    Login
                  </Link>
                </p>
                <p className=" text-white my-2 font-normal text-lg">Or</p>
              </div>
            </form>
            <div className="mt-2 flex justify-center">
              <GoogleLogin buttonText={"Regis With Google"} />
            </div>
          </div>
        </div>
      </div> */}

      {/* coba 2 */}
      <div className="bg-slate-950 w-full h-screen">
        <div className="w-80 h-screen lg:w-[700px] lg:h-screen rounded-e-[60px] bg-gradient-to-r from-cyan-800 bg-opacity-50 absolute left-0 top-0">
          <div className="lg:mt-48 lg:w-96 lg:p-12 lg:rounded-2xl lg:ml-40 lg:bg-slate-900 lg:bg-opacity-50 lg:flex lg:flex-col lg:shadow-2xl">
            <div className="mt-4 mx-4 lg:mt-0 lg:mx-0">
              <h1 className="text-white text-base font-medium lg:font-medium lg:text-lg lg:mb-2">
                Welcome to 🎞️🍿
              </h1>
              <p className="text-red-600 text-4xl font-extrabold lg:text-6xl lg:font-extrabold">
                MovieList
              </p>
            </div>
            <div className="absolute top-2 -right-36 left-56 lg:relative overflow-clip lg:right-0 lg:left-0 lg:top-0">
              <Slider {...settings} className="lg:mt-6">
                <img
                  src={captenAmerica}
                  alt="icon capten america"
                  className="p-3 lg:p-4"
                />
                <img
                  src={spiderMan}
                  alt="icon spiderman"
                  className="p-3 lg:p-4"
                />
                <img
                  src={ironMan}
                  alt="icon superhero1"
                  className="p-3 lg:p-4"
                />
                <img src={hulk} alt="icon hulk" className="p-3 lg:p-4" />
                <img src={flash} alt="icon iron man" className="p-3 lg:p-4" />
                <img src={xman} alt="icon xman" className="p-3 lg:p-4" />
              </Slider>
            </div>
          </div>
        </div>

        {/* login card */}
        <div className="box mt-[94px] lg:mt-0 right-3 absolute">
          <span className="box2"></span>
          <div className=" box3 bg-slate-700 bg-opacity-10 rounded-xl px-5 pb-5 pt-4">
            <div className="text-3xl font-bold mb-2 flex flex-row items-center justify-center text-white">
              <BiSolidUserDetail className="text-5xl text-red-600" />
              <h1 className="text-cyan-400">Register</h1>
            </div>
            <form
              action="submit"
              onSubmit={regis}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3 my-4 px-4 pt-4 pb-1 shadow-lg shadow-slate-700 rounded-xl mb-9 hover:bg-cyan-500 hover:bg-opacity-20 hover:border">
                <label htmlFor="Firstname">
                  <span
                    className="text-white block font-semibold mb-2
                                        after:content-['*']
                                        after:ml-1
                                        after:text-pink-500
                                        "
                  >
                    First Name
                  </span>
                  <input
                    type="text"
                    id="Firstname"
                    placeholder="nama depan..."
                    className="py-2 lg:py-[10px] px-2 border border-slate-300 rounded-xl w-full text-sm
                                        placeholder:text-slate-400
                                        focus:outline-none 
                                        focus:ring-1 
                                        focus:ring-sky-500 focus:border-sky-500\
                                        invalid:text-pink-700
                                        invalid:focus:ring-pink-700
                                        invalid:focus:border-pink-700
                                        peer"
                    value={firstname}
                    onChange={handleFirstName}
                  />
                </label>
              </div>

              <div className=" col-span-6 sm:col-span-3 px-4 pt-4 pb-1 shadow-lg shadow-slate-700 rounded-xl mb-9 hover:bg-cyan-500 hover:bg-opacity-20 hover:border">
                <label htmlFor="Lastname">
                  <span
                    className="text-white block font-semibold mb-2
                                        after:content-['*']
                                        after:ml-1
                                        after:text-pink-500
                                        "
                  >
                    Last Name
                  </span>
                  <input
                    type="text"
                    id="Lastname"
                    placeholder="nama belakang..."
                    className="py-2 lg:py-[10px] px-2 border border-slate-300 rounded-xl w-full text-sm
                                        placeholder:text-slate-400
                                        focus:outline-none 
                                        focus:ring-1 
                                        focus:ring-sky-500 focus:border-sky-500\
                                        invalid:text-pink-700
                                        invalid:focus:ring-pink-700
                                        invalid:focus:border-pink-700
                                        peer"
                    value={lastname}
                    onChange={handleLastName}
                  />
                </label>
              </div>

              <div className="col-span-6 px-4 pt-4 pb-1 shadow-lg shadow-slate-700 rounded-xl mb-9 hover:bg-cyan-500 hover:bg-opacity-20 hover:border">
                <label htmlFor="email">
                  <span
                    className="text-white block font-semibold mb-2
                                        after:content-['*']
                                        after:ml-1
                                        after:text-pink-500
                                        "
                  >
                    Email
                  </span>
                  <input
                    type="email"
                    id="email"
                    placeholder="masukkan email..."
                    className="py-2 lg:py-[10px] px-2 border border-slate-300 rounded-xl w-full text-sm
                                        placeholder:text-slate-400
                                        focus:outline-none 
                                        focus:ring-1 
                                        focus:ring-sky-500 focus:border-sky-500\
                                        invalid:text-pink-700
                                        invalid:focus:ring-pink-700
                                        invalid:focus:border-pink-700
                                        peer"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <p className="text-sm m-1 font-medium text-pink-600 invisible peer-invalid:visible">
                    email tidak valid
                  </p>
                </label>
              </div>

              <div className="col-span-6 p-4 shadow-lg shadow-slate-700 rounded-xl mb-9 hover:bg-cyan-500 hover:bg-opacity-20 hover:border">
                <label htmlFor="password">
                  <span
                    className="text-white block font-semibold mb-2
                                        after:content-['*']
                                        after:ml-1
                                        after:text-pink-500"
                  >
                    Password
                  </span>
                  <input
                    type="password"
                    id="password"
                    placeholder="masukkan password..."
                    className="py-2 lg:py-[10px] px-2 border border-slate-300 rounded-xl w-full text-sm placeholder:text-slate-400
                                    focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500\"
                    value={password}
                    onChange={handlePasswordMatch}
                    required
                  />
                </label>
              </div>

              <div className="col-span-6 p-4 shadow-lg shadow-slate-700 rounded-xl mb-9 hover:bg-cyan-500 hover:bg-opacity-20 hover:border">
                <label htmlFor="confirmpassword">
                  <span
                    className="text-white block font-semibold mb-2
                                        after:content-['*']
                                        after:ml-1
                                        after:text-pink-500"
                  >
                    Confirm Password
                  </span>
                  <input
                    type="password"
                    id="confirmpassword"
                    placeholder="masukkan password kembali..."
                    className="py-2 lg:py-[10px] px-2 border border-slate-300 rounded-xl w-full text-sm placeholder:text-slate-400
                                    focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500\"
                    value={confirmpassword}
                    onChange={handleConfirmPasswordMatch}
                    required
                  />
                </label>
                {passworderror && (
                  <p className=" px-2 text-sm col-span-6 text-pink-700 ">
                    {passworderror}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-center mt-6">
                <button
                  type="submit"
                  className="lg:w-40 text-white bg-red-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center-800"
                >
                  Create an account
                </button>
                <p className="mt-2 text-gray-500 text-sm">
                  Already have an account &nbsp;
                  <Link to={"/login"} className="underline text-red-500">
                    Login
                  </Link>
                </p>
                <p className="text-white my-2 font-normal text-lg">Or</p>
              </div>
            </form>
            <div className="mt-2 flex justify-center">
              <GoogleLogin buttonText={"Login With Google"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
