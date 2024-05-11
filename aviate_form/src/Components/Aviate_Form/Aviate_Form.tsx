import React from "react";
import { MdFileUpload, MdOutlineArrowForwardIos } from "react-icons/md";

const Aviate_Form = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto bg-black">
      {/* header */}
      <div className="w-full text-center py-10 ">
        <h1 className="font-bold text-3xl text-primary">Apply Now</h1>
        <p className="text-white uppercase py-4">
          Your Gateway to Global Opportunities
        </p>
      </div>

      <div className="w-[700px] mx-auto  ">
        <form action="">
          {/* Personal Information */}
          <div>
            <h2 className="text-primary uppercase justify-start">
              Personal Information
            </h2>
            <div className="  justify-start my-6 flex md:flex-row">
              <label htmlFor="" className="text-white uppercase p-2">
                First Name *
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                className="text-primary bg-transparent w-[100%] px-5 p-2 border-0 border-primary border-b-2 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />
              <label htmlFor="" className="text-white uppercase p-2">
                Last Name *
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                className="text-primary bg-transparent w-[100%] px-5 p-2 border-0 border-b-2 border-primary appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />
            </div>

            <div className="justify-start my-6 flex flex-1">
              <label htmlFor="" className="text-white uppercase">
                Email *
              </label>
              <input
                type="email"
                name=""
                id=""
                required
                className="text-primary bg-transparent w-[100%] px-5 border-primary border-0 border-b-2 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />

              <label htmlFor="" className="text-white uppercase">
                Phone No *
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                className="text-primary bg-transparent w-[100%] px-5 border-primary border-0 border-b-2 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />
            </div>

            <div className=" justify-start my-6 flex flex-1">
              <label htmlFor="" className="text-white uppercase">
                Address *
              </label>{" "}
              <input
                type="text"
                name=""
                id=""
                required
                className="text-primary bg-transparent w-[100%] px-5 border-primary border-0 border-b-2 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />
            </div>

            <div className="justify-start my-6 flex flex-1">
              <label htmlFor="" className="text-white uppercase">
                Passport No *
              </label>{" "}
              <input
                type="text"
                name=""
                id=""
                required
                className="text-primary bg-transparent w-[100%] px-5 border-primary border-0 border-b-2 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />
              <label htmlFor="" className="text-white uppercase">
                Upload passport *
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="(PNG upload, max file size 2MB)"
                className="text-primary bg-transparent  w-[100%] px-5 border-0 border-b-2 border-primary appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />
              <label className="flex bg-transparent   text-primary text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]">
                <MdFileUpload />
                <input type="file" id="uploadFile1" className="hidden" />
              </label>
            </div>

            <div className=" justify-start my-6 flex flex-1">
              <label htmlFor="" className="text-white uppercase">
                Study Level *
              </label>{" "}
              <input
                type="text"
                name=""
                id=""
                required
                className="text-primary bg-transparent w-[100%] px-5 border-primary border-0 border-b-2 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />
              <label htmlFor="" className="text-white uppercase">
                Subject Name *
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                className="text-primary bg-transparent w-[100%] px-5 border-primary border-0 border-b-2 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />
            </div>

            <div className=" justify-start my-6 flex flex-1">
              <label className="text-white uppercase">University 1*</label>
              <select
                id=""
                className="text-primary bg-transparent px-5 w-[100%] border-primary border-0 border-b-2 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              >
                <option selected>Select your top university preference</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className=" justify-start my-6 flex flex-1">
              <label className="text-white uppercase">University 2</label>
              <select
                id=""
                className="text-primary bg-transparent px-5 w-[100%] border-primary border-0 border-b-2 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              >
                <option selected>
                  Select your top university preference(optional)
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className=" justify-start my-6 flex flex-1">
              <label className="text-white uppercase">University 3</label>
              <select
                id=""
                className="text-primary bg-transparent accent-primary px-5 w-[100%] border-primary border-0 border-b-2 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              >
                <option selected>Evergreen University</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div className="justify-start my-6 flex flex-1">
              <label htmlFor="" className="text-white uppercase">
                Upload your photo *
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="(PNG upload, max file size 2MB)"
                className="text-primary bg-transparent  w-[100%] px-5 border-0 border-b-2 border-primary appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />

              <label className="flex bg-transparent   text-primary text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]">
                <MdFileUpload />
                <input type="file" id="uploadFile1" className="hidden" />
              </label>
            </div>
          </div>
          {/* Qualification */}
          <div className="py-5">
            <h2 className="text-primary uppercase justify-start">
              Qualification
            </h2>
            <div className=" justify-start  my-6 flex flex-1">
              <label htmlFor="" className="text-white uppercase p-2">
                Graduation Result *
              </label>{" "}
              <input
                type="text"
                name=""
                id=""
                required
                className="text-primary bg-transparent w-[100%] px-5 p-2 border-0 border-primary border-b-2 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />
              <label htmlFor="" className="text-white uppercase p-2">
                Higher Secondary gpa *
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                className="text-primary bg-transparent w-[100%] px-5 p-2 border-0 border-b-2 border-primary appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />
            </div>
            <div className=" justify-start my-6 flex flex-1">
              <label htmlFor="" className="text-white uppercase p-2">
                Secondary School gPA *
              </label>{" "}
              <input
                type="text"
                name=""
                id=""
                required
                className="text-primary bg-transparent w-[100%] px-5 p-2 border-0 border-primary border-b-2 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />
              <label htmlFor="" className="text-white uppercase p-2">
                IELTS Score *
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                className="text-primary bg-transparent w-[100%] px-5 p-2 border-0 border-b-2 border-primary appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />
            </div>
          </div>

          {/* Documents */}
          <div className="">
            <h2 className="text-primary uppercase justify-start">Documents</h2>
            <div className="justify-start my-6 flex flex-1">
              <label htmlFor="" className="text-white uppercase">
                Graduation Certificate & Transcript *
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="(PDF upload, max file size 2MB)"
                className="text-primary bg-transparent  w-[100%] px-5 border-0 border-b-2 border-primary appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />

              <label className="flex bg-transparent   text-primary text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]">
                <MdFileUpload />
                <input type="file" id="uploadFile1" className="hidden" />
              </label>
            </div>
            <div className="justify-start my-6 flex flex-1">
              <label htmlFor="" className="text-white uppercase">
                Higher Secondary Certificate & Transcript *
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="(PDF upload, max file size 2MB)"
                className="text-primary bg-transparent  w-[100%] px-5 border-0 border-b-2 border-primary appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />

              <label className="flex bg-transparent   text-primary text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]">
                <MdFileUpload />
                <input type="file" id="uploadFile1" className="hidden" />
              </label>
            </div>
            <div className="justify-start my-6 flex flex-1">
              <label htmlFor="" className="text-white uppercase">
                Secondary School Certificate & Transcript *
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="(PDF upload, max file size 2MB)"
                className="text-primary bg-transparent  w-[100%] px-5 border-0 border-b-2 border-primary appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />

              <label className="flex bg-transparent   text-primary text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]">
                <MdFileUpload />
                <input type="file" id="uploadFile1" className="hidden" />
              </label>
            </div>
            <div className="justify-start my-6 flex flex-1">
              <label htmlFor="" className="text-white uppercase">
                IELTS Score Certificate *
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="(PDF upload, max file size 2MB)"
                className="text-primary bg-transparent  w-[100%] px-5 border-0 border-b-2 border-primary appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />

              <label className="flex bg-transparent   text-primary text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]">
                <MdFileUpload />
                <input type="file" id="uploadFile1" className="hidden" />
              </label>
            </div>
            <div className="justify-start my-6 flex flex-1">
              <label htmlFor="" className="text-white uppercase">
                Other Documents *
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="(PDF upload, max file size 2MB)"
                className="text-primary bg-transparent  w-[100%] px-5 border-0 border-b-2 border-primary appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />

              <label className="flex bg-transparent   text-primary text-base px-5 py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]">
                <MdFileUpload />
                <input type="file" id="uploadFile1" className="hidden" />
              </label>
            </div>
          </div>

          {/* Apply */}
          <div className="flex flex-auto py-5">
            <h2 className="text-primary text-2xl ">Apply By</h2>

            <div className="flex flex-auto mb-4 px-6">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 accent-primary"
              />
              <label className="ms-2 text-2xl font-medium text-gray-900 dark:text-gray-300">
                Self Apply
              </label>
            </div>
            <div className="flex flex-auto">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 t accent-primary"
              />
              <label className="ms-2 text-2xl font-medium text-gray-900 dark:text-gray-300">
                Agent
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center my-5 ">
            <button className="font-bold text-3xl text-primary uppercase">
              Submit Form
              <span>
                <MdOutlineArrowForwardIos className="accent-primary" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Aviate_Form;
