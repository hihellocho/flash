import { useState } from "react";
import "./App.scss";
import mockData from "./Data/mockData";
import Category from "./Components/Category";
import FlashCard from "./Components/FlashCard";
import CardLearn from "./Components/CardLearn";
import Result from "./Components/Result";

const App = () => {
  const [category, setCategory] = useState(null);
  const [lerningMode, setLerningMode] = useState(false);
  const [exitMode, setExitMode]=useState(false);
  
  const handleCategory=(obj)=>{
    setCategory(obj);
  }
  const handleLearn = (data)=>{
    setLerningMode(data);
  }
  const handleExit=(mode)=>{
    setExitMode(mode);
  }

  return (
    <div className="app">
      { !category &&
        <Category
        cardData={mockData.categories}
        onSelected={handleCategory}/>
      }
      {
        category && !lerningMode &&
        <FlashCard
        cardData={category}
        onSelected={handleCategory}
        onLearn={handleLearn} />
      }
      {
        lerningMode && !exitMode &&
        <CardLearn
        cardData={category.flashcards} 
        onExit={handleExit}/>
      }
      {
        exitMode &&
        <Result
        onExit={()=>{
          setCategory(null);
          setLerningMode(false);
          setExitMode(false);
        }}/>
      }
    </div>
  );
};

export default App;