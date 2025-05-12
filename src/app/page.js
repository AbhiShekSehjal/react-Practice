'use client';


// import CheckUser from "./1-5-25/components/CheckUser";
// import UseState from "./2-5-25/UseState";
// import Game from "./2-5-25/tic-toc-toe game/Game";
// import AllProducts from "./4-5-25/AllProducts";
// import Carousel from "./5-5-25/Carousel ";
// import ChangeBg from "./6-5-25/ChangeBg";
// import TodoApp from "./from ChatGPT/day - 1/TodoApp";
// import Reacting from "./7-5-25/Reacting";
// import OnPointerMove from "./7-5-25/OnPointerMove";
// import Counter from "./10-5-25/Counter";

// import Navbar from "./11-5-25/components/Navbar";
// import { userContext } from "./11-5-25/context/userContext";

// import Counter from "./10-5-25/another one/Counter";

import Card from "./11-5-25/another one/components/Card";
import ContextProvider from "./11-5-25/another one/context/ContextProvider";

export default function Home() {

  // let user = {
  //   name: "Abhishek sehjal",
  //   age: 21,
  //   profession: "full stack developer",
  //   salery: 60000
  // };

  return (
    // <CheckUser/>
    // <UseState />
    // <Game />
    // <AllProducts />
    // <Carousel />
    // <ChangeBg />
    // <TodoApp />
    // <Reacting />
    // <OnPointerMove />
    // <Counter />
    // <userContext.Provider value={user}>
    //   <Navbar />
    // </userContext.Provider>
    // <Counter />

    <ContextProvider>
      <Card />
    </ContextProvider>
    
  );
}
