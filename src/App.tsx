import React, { FC, createContext } from "react";
import { Person, Comment } from "./components/Person";
//fc -->functional component

//useContext
interface AppContextInterface {
  author: string;
  ages: number;
 
}

 export const AppContext = createContext<AppContextInterface |
 null>(null);

const App: FC = () => {

  const contextValue: AppContextInterface = {
    author: "Daniel",
    ages: 28,
    
  };

  return (
    <AppContext.Provider value={contextValue}>
    <div>
      <Person name="Rajal" age={29} email="banana" comment={Comment.second} />
    </div>
    </AppContext.Provider>
  );
};

export default App;
