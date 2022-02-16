import React, { useState, useRef, useEffect } from "react";
import userData from "@constants/data";
import emailjs from 'emailjs-com';
export default function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    if (mail === "" && name === "" && message === "") {
      setError("error")
    }
    if (mail !== "" && name !== "" && message !== "") {

      const params = {
        name: name,
        email: mail,
        message: message
      }

      emailjs.init('user_9Yd3SCQ2Ye8Yjr0ORA4BY');

      emailjs.send('service_515yofd', 'template_k5oy958', params)
        .then((result) => {
          setSuccess(result.text);
        }, (error) => {
          setError(error.text);
        });
    };
  }
  return (
    <>
      {error && (
        <div className="animate-BounceIn">
          <div className="flex items-center text-white max-w-sm w-full bg-red-400 shadow-md rounded-lg overflow-hidden mx-auto">
            <div className="w-10 border-r px-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                ></path>
              </svg>
            </div>

            <div className="flex items-center px-2 py-3">
              <div className="mx-3">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {success && (
        <div className="animate-BounceIn">
          <div className="flex items-center text-white max-w-sm w-full bg-green-400 shadow-md rounded-lg overflow-hidden mx-auto">
            <div className="w-10 border-r px-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="flex items-center px-2 py-3">
              <div className="mx-3">
                <p>{success}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <section>
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased z-50">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Contact
          </h1>
        </div>
        <div className="rounded-md dark:bg-gray-900 p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4 bg-[#F1F1F1]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:ml-4">
              <header className="">
                <h1 className="dark:text-gray-50 font-semibold text-2xl ">
                  Get in touch, let's talk.
                </h1>
                <p className="font-light text-base dark:text-gray-200 mt-2">
                  Fill in the details and I'll get back to you as soon as I can.
                </p>
              </header>
              <div className="icons-container inline-flex flex-col my-20 space-y-2">
                <div className="flex flex-row items-center space-x-6 rounded-md border border-gray-800 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-700 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill h-4 w-4 text-gray-800"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                  <p className="dark:text-gray-50 font-light text-sm">
                    {userData.phone}
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-6 rounded-md border border-gray-800 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-700 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope-fill h-4 w-4 text-gray-800"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                  </svg>
                  <p className="dark:text-gray-50 font-light text-sm">
                    {userData.email}
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-6 rounded-md border border-gray-800 hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-700 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pin-fill h-4 w-4 text-gray-800"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                  </svg>
                  <p className="dark:text-gray-50 font-light text-sm">
                    {userData.address}
                  </p>
                </div>
              </div>
              <div className="social-icons flex flex-row space-x-8">
                <a
                  href={userData.socialLinks.facebook}
                  className="h-10 w-10 rounded-full hover:bg-gray-200 transition dark:hover:bg-gray-800 flex items-center justify-center cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    className="dark:text-gray-50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href={userData.socialLinks.linkedin}
                  className="h-10 w-10 rounded-full hover:bg-gray-200 transition dark:hover:bg-gray-800 flex items-center justify-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-linkedin h-5 w-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a
                  href={userData.socialLinks.twitter}
                  className="h-10 w-10 rounded-full hover:bg-gray-200 transition dark:hover:bg-gray-800 flex items-center justify-center cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    className="dark:text-gray-50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <form className="form rounded-lg border dark:border-gray-800 p-4 flex flex-col">
              <label htmlFor="name" className="text-sm dark:text-gray-50 mx-4">
                {" "}
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="font-light text-sm rounded-md placeholder:text-black outline-none mt-2 pl-2 mx-4 text-black"
                name="name"
                onChange={(e) => { setName(e.target.value) }}
              />
              <label htmlFor="email" className="text-sm dark:text-gray-50 mx-4 mt-4">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="font-light text-sm rounded-md placeholder:text-black outline-none mt-2 pl-2 mx-4 text-black"
                name="email"
                onChange={(e) => { setMail(e.target.value) }}
              />
              <label
                htmlFor="message"
                className="text-sm dark:text-gray-50 mx-4 mt-4"
              >
                Message
              </label>
              <textarea
                rows="4"
                type="text"
                placeholder="Message"
                className="font-light text-sm rounded-md placeholder:text-black outline-none mt-2 pl-2 mx-4 text-black"
                name="message"
                onChange={(e) => { setMessage(e.target.value) }}
              ></textarea>
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-700 transition rounded-md  mx-4 mt-8 p-4 text-gray-50 text-xs font-bold"
                onClick={(e) => { sendEmail(e) }}
              >
                Send Message!
              </button>
            </form>
          </div>
        </div>
      </section>
    </>

  );
}
