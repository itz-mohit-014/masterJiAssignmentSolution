import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header.jsx";
import BrandingLogo from "../utils/BrandingLogo.jsx";

const OtpForm = ({ theme }) => {
  const { bg, text } = theme;
  const [userInput, setUserInput] = useState(["", "", "", ""]);
  const validOTP = [1, 2, 3, 4];
  const currentInputTarget = useRef(0);
  const [color, setColor] = useState("#112D4E");

  const inputHanddler = (e, index) => {
    const newArr = [...userInput];
    newArr[currentInputTarget.current] = e.target.value;
    setUserInput(newArr);

    if (e.key == "Backspace" && e.target.value == "") {
      setColor("#112D4E");
      currentInputTarget.current <= 0
        ? (currentInputTarget.current = 0)
        : (currentInputTarget.current -= 1);
      e.target.previousElementSibling?.focus();
    } else {
      currentInputTarget.current > 2
        ? (currentInputTarget.current = 3)
        : (currentInputTarget.current += 1);
      e.target.nextElementSibling?.focus();
    }
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    const isMatched = userInput.every(
      (value, index) => value != "" && value == validOTP[index]
    );
    if (!isMatched) {
      setColor("#EB2D5B");
      return;
    }
    console.log("verified");
    setColor("#23CF9B");
  };

  return (
    <section
      className={`min-h-screen w-full pt-4 px-9 pb-9 flex flex-col`}
      style={{
        backgroundColor: bg,
      }}
    >
      <Header text={text} />
      <div className="flex justify-center items-center flex-col flex-grow mb-40 md:mb-0 mt-4 md:mr-40">
        <div className="min-h-[514px] sm:min-w-[756px]   rounded-m bg-white text-center rounded-[18px] drop-shadow-[2px 2px 3px 0px #000000] dm-sand-font-family">
          <h1 className="text-center text-[32px] sm:text-[40px] font-bold mt-8 pt-4">
            Mobile Phone Verification
          </h1>
          <p className="text-center p-4 text-[#BFBFBF] font-normal text-lg sm:text-2xl mx-auto  sm:max-w-[585px]">
            Enter the 4-digit Verification code that was sent to your
            phone number
          </p>
          <form action="" onSubmit={verifyOTP}>
            <div className="flex items-center justify-center">
              {userInput.map((value, index) => {
                if (index === 0) {
                  return (
                    <input
                      key={index}
                      onKeyUp={(e, index) => inputHanddler(e, index)}
                      className="bg-[#DCE2EF] m-2 sm:h-[100px] sm:w-[90px] h-[75px] w-[60px] rounded-[12px] p-4 text-5xl text-center border-[1px] focus:border-2 caret-transparent"
                      style={{
                        borderColor: `${color == "#112D4E" ? "" : color}`,
                      }}
                      type="text"
                      maxLength={1}
                      placeholder=""
                      autoFocus
                    />
                  );
                }
                return (
                  <input
                    key={index}
                    onKeyUp={(e, index) => inputHanddler(e, index)}
                    className="bg-[#DCE2EF] m-2 sm:h-[100px] sm:w-[90px] h-[75px] w-[60px] rounded-[12px] p-4 text-5xl text-center border-[1px] focus:border-2 caret-transparent"
                    style={{
                      borderColor: `${color == "#112D4E" ? "" : color}`,
                    }}
                    type="text"
                    maxLength={1}
                    placeholder=""
                  />
                );
              })}
            </div>
            <button
              className={`text-white sm:w-[417px] sm:h-[64px] h-[50px] px-6 rounded-[8px] mt-[10px] font-normal text-2xl `}
              style={{ backgroundColor: `${color}` }}
            >
              Verify Account
            </button>
          </form>
          <p className="p-4 text-[#BFBFBF] font-normal text-2xl">
            Didnt recieve code?
            <a className="text-[#112D4E]" href="">
              Resend
            </a>
          </p>
        </div>
      </div>
      <BrandingLogo />
    </section>
  );
};

export default OtpForm;
