import React from "react";
import image from "../images/Rectangle.png";
import { SiApple } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../Auth/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export function Signup() {
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const Useremail = e.target.email.value;
    const Userpassword = e.target.password.value;
    const ConfirmPass = e.target.ConPass.value;

    if (Userpassword === ConfirmPass) {
      createUserWithEmailAndPassword(database, Useremail, Userpassword)
        .then((data) => {
          console.log(data, "authData");
          history("/signin");
        })
        .catch((err) => {
          alert(err.code);
        });
    } else {
      alert("Confirm password is incorrect");
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <span className="absolute">
          <h3 className="text-2xl font-bold text-black m-4">Your Logo</h3>
        </span>
        <div className="relative flex items-start px-4 pb-10 pt-16 sm:px-6 sm:pb-16 md:justify-center lg:pt-60 lg:px-8 lg:pb-24">
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24 mb-6">
              <h3 className="text-4xl font-bold text-black mb-2">Sign Up to</h3>
              <h3 className="text-2xl font-bold text-black">
                Lorem Ipsum is simply
              </h3>
            </div>
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className=" text-black">If you already have an account</h3>
              <h3>
                You can{" "}
                <Link
                  to="/signin"
                  title=""
                  className="font-semibold text-blue-700 transition-all duration-200 hover:underline"
                >
                  Login here !
                </Link>
              </h3>
            </div>
          </div>
          <img
            className="h-80 absolute ml-96 mt-16 hidden lg:block"
            src={image}
            alt=""
          />
        </div>
        <div className="flex items-center justify-center lg:justify-center sm:justify-center px-4  sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md mt-0">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign Up
            </h2>
            <form
              className="mt-4"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="space-y-4">
                <div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-none bg-purple-100 px-3 py-4 text-sm placeholder:text-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-none bg-purple-100 px-3 py-4 text-sm placeholder:text-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Create User name"
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-none bg-purple-100 px-3 py-4 text-sm placeholder:text-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="number"
                      placeholder="Contact number"
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-none bg-purple-100 px-3 py-4 text-sm placeholder:text-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password atlest 6 characters"
                      name="password"
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-none bg-purple-100 px-3 py-4 text-sm placeholder:text-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Confrim Password"
                      name="ConPass"
                      required
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-3.5 py-2 font-semibold leading-7 text-white hover:bg-purple-900"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
            <div className="flex items-center justify-center mt-6">
              <p className="text-sm font-semibold text-gray-400">
                or continue with
              </p>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center border border-none bg-white px-3.5 py-2.5 font-semibold "
              >
                <span className="text-3xl">
                  <SiApple />
                </span>
                <span className="ml-3 text-3xl">
                  <FcGoogle />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
