import React from "react";

const Form2 = ({ handleSubmitForm2 }) => {
  return (
    <div className="min-w-[40%]">
      <form onSubmit={handleSubmitForm2} className="flex flex-col">
        <div className="flex justify-between">
          <div className=" min-w-[70%]  ">
            <input
              placeholder="github username"
              className="w-full bg-gray-100 p-2"
            />
          </div>
          <div className="min-w-[20%] bg-gray-100 flex justify-center ">
            <button type="submit" className="cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form2;
