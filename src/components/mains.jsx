import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import Searchbox from "./Searchbox";
import { Context } from "../context/context";

function Mains() {
  const {
    onSent,
    loading,
    resultData,
    recentprompts,
    Showresult,
    Extended,
    setExtended,
  } = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState("2.5 Flash");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full flex-1 flex flex-col pl-6 pt-4 pr-6 pb-7">
      <div className="mains-top w-full flex justify-between items-center">
        <div className="flex items-center  ">
          {Extended ? null : (
            <img
              className="w-6 block sm:hidden "
              onClick={() => setExtended((prev) => !prev)}
              src={assets.menu_icon}
              alt=""
            />
          )}

          <div className="flex flex-col items-center">
            <p className="text-lg text-[#585858] sm:text-3xl">Gemini</p>
            <div style={{ position: "relative", display: "inline-block" }}>
              <button
                className="bg-[#e2e6eb] hidden sm:block rounded-2xl p-2 pl-4 pr-4"
                onClick={toggleDropdown}
                style={{ cursor: "pointer" }}
              >
                {data}
              </button>
              {isOpen && (
                <ul
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    listStyle: "none",
                    padding: "10px",
                    margin: 0,
                    width: "150px",
                  }}
                >
                  <p>Choose Your Model</p>
                  <li
                    onClick={() => {
                      const content = document.querySelector("p");
                      setData(content.innerHTML);
                      toggleDropdown();
                    }}
                    style={{ padding: "5px 10px", cursor: "pointer" }}
                  >
                    <span className="block">Fast all-round help</span>
                    <p>2.5 Flash</p>
                  </li>
                  <li
                    onClick={() => {
                      const content = document.querySelector("p");
                      setData(content.innerHTML);
                      toggleDropdown();
                    }}
                    style={{ padding: "5px 10px", cursor: "pointer" }}
                  >
                    <span>Reasoning,maths and code</span>
                    <p>2.5 Pro</p>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="upgrade-mains-top sm:flex hidden gap-1 bg-[#e6eaf1] hover:bg-[#e2e6eb] pb-2 pt-2 pl-3 pr-3 rounded-2xl">
            <img className="w-[25px]" src={assets.small_icon} alt="" />
            <p>Upgrade</p>
          </div>
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={assets.user_icon}
            alt=""
          />
        </div>
      </div>

      <div className="mains-center flex justify-center flex-col flex-1 items-center gap-7 ">
        {Showresult ? (
          <div className="w-7/12 h-10/12  mt-4  max-h-[70vh] overflow-y-scroll scrollbar-hide">
            <div className="flex flex-row-reverse items-center gap-1.5 pb-2">
              <img
                className="w-[40px] rounded-full  "
                src={assets.user_icon}
                alt=""
              />
              <p>{recentprompts}</p>
            </div>
            <div className="flex  ">
              <img
                className="w-[50px] h-[50px] pr-1.5"
                src={assets.gemini_icon}
                alt=""
              />
              {loading ? (
                <div className="w-full flex flex-col gap-5 animate-pulse">
                  <div className="w-[800px] h-[20px] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] loader"></div>
                  <div className="w-[800px] h-[20px] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] loader"></div>
                  <div className="w-[800px] h-[20px] bg-gradient-to-r from-[#9ed7ff] via-white to-[#9ed7ff] loader"></div>
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        ) : (
          <h2 className="sm:text-6xl text-4xl   text-[#c4c7c5]">
            <span className="headcolour ">Hello,GladiatorXF</span>
            <br></br>
            How Can I Help You Today
          </h2>
        )}

        <Searchbox />
      </div>
    </div>
  );
}
export default Mains;
