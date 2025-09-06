import { createContext, useState } from "react";
import main from "../config/gemini";
export const Context = createContext();

const ContextProvider = (props) => {
  const [input, SetInput] = useState("");
  const [recentprompts, SetRecentPrompt] = useState("");
  const [prevPrompts, SetPrevPrompts] = useState([]);
  const [Showresult, SetShowresult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, SetResultData] = useState("");
  const [Extended, setExtended] = useState(false);
  const delayPara = (index, nextword) => {
    setTimeout(function () {
      SetResultData((prev) => prev + nextword);
    }, 75 * index);
  };
  const newChat = () => {
    setLoading(false);
    SetShowresult(false);
  };
  const onSent = async (input) => {
    SetResultData("");
    setLoading(true);
    SetRecentPrompt(input);
    SetShowresult(true);
    SetPrevPrompts((previousPrompts) => {
      // If previousPrompts is not an array (undefined, null, etc.), use empty array
      const safeArray = Array.isArray(previousPrompts) ? previousPrompts : [];
      return [...safeArray, input];
    });
    const response = await main(input);
    let responseArray = response.split("**");
    let newArray = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 === 0) {
        newArray = newArray + responseArray[i];
      } else {
        newArray += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newArray2 = newArray.split("*").join("</br>");
    let newArray3 = newArray2.split(" ");
    for (let i = 0; i < newArray3.length; i++) {
      delayPara(i, newArray3[i] + " ");
    }
    setLoading(false);
    SetInput("");
  };

  const contextValue = {
    SetInput,
    SetPrevPrompts,
    SetRecentPrompt,
    SetShowresult,
    setLoading,
    SetResultData,
    onSent,
    loading,
    input,
    resultData,
    prevPrompts,
    Showresult,
    recentprompts,
    resultData,
    newChat,
    Extended,
    setExtended,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
