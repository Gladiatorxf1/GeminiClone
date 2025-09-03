import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/context";

function SideBar() {
  const {
    onSent,
    prevPrompts,
    SetPrevPrompts,
    newChat,
    Extended,
    setExtended,
  } = useContext(Context);

  return (
    <div
      // bg-[#f0f4f9] default colour
      className={` bg-amber-200 h-full  flex-col justify-between pb-6 pl-6 pr-6 pt-6 ${
        Extended ? "inline-flex  sm:w-auto w-full  " : "sm:inline-flex hidden"
      }`}
    >
      <div className="flex flex-col gap-14">
        <div className="Sidebar-top flex flex-col gap-6">
          <div className="sm:flex gap-30 ">
            <img
              onClick={() => setExtended((prev) => !prev)}
              className="sm:w-[30px] sm:h-[30px] w-6"
              src={assets.menu_icon}
              alt=""
            />
            {Extended ? (
              <img
                className="w-[30px] h-[30px] ml-2.5 hidden sm:inline"
                src={assets.search_icon}
                alt=""
              />
            ) : null}
          </div>
          <div className="sidebar-newchat">
            {Extended ? (
              <div
                onClick={() => {
                  newChat();
                }}
                className="bg-[#e6eaf1] flex gap-3 items-center rounded-2xl justify-center pt-3 pb-3 hover:bg-[#e2e6eb]"
              >
                <img className="w-[18px]" src={assets.plus_icon} alt="" />
                <p className="text-gray-500 ">New Chat</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className=" ">
          {Extended ? (
            <div>
              <h3>Recents</h3>
              <br></br>
              <div>
                {prevPrompts.map((items, index) => {
                  return (
                    <div
                      key={index}
                      onClick={(e) => {
                        const pdata = e.currentTarget.querySelector("p");
                        SetPrevPrompts(() => {
                          prevPrompts.filter((pre) => pre !== pdata.innerHTML);
                        });
                        onSent(pdata.innerHTML);
                      }}
                      className="flex gap-3 items-center cursor-pointer hover:bg-[#e2e6eb] p-2 rounded-2xl sidebar-recent "
                    >
                      <img
                        className="w-[25px] h-[25px]"
                        src={assets.message_icon}
                      ></img>
                      <p className="text-[#282828]">{items.slice(0, 18)}...</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="">
        {Extended ? (
          <div className="gap-3 flex hover:bg-[#e2e6eb] p-3 rounded-2xl">
            <img className="w-[20px]" src={assets.setting_icon} alt="" />
            <p>Settings and help</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default SideBar;
