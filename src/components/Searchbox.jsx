import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/context";

function Searchbox() {
  const [empty, SetEmpty] = useState(true);
  const { input, onSent, loading, recentPrompt, SetInput } =
    useContext(Context);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      input ? onSent(input) : null;
    }
  };
  return (
    <div
      onKeyDown={handleKeyDown}
      className=" sm:w-7/12 rounded-3xl p-3 border-gray-400 border-2 flex flex-col gap-4 w-full"
    >
      <div className="border-none ">
        <input
          onChange={(e) => {
            SetInput(e.target.value);
          }}
          value={input}
          placeholder="Ask Gemini"
          type="text"
          className="w-full focus:border-transparent outline-none"
        />
      </div>
      <div>
        <div className="flex  items-center justify-between">
          <div className="flex gap-4">
            <button>
              <img className="w-[20px]" src={assets.plus_icon} alt="" />
            </button>
            <button className="flex items-center gap-1">
              <img
                className="w-[20px] h-[20px]"
                src={assets.bulb_icon}
                alt=""
              />
              <p>Tools</p>
            </button>
          </div>
          <img
            className="w-[20px] h-[20px]"
            onClick={input ? () => onSent(input) : null}
            src={input ? assets.send_icon : assets.mic_icon}
          ></img>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default Searchbox;
