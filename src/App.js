import React from "react";
import { CssBaseline } from "@mui/material"

//components
import Header from "./components/Header";
import Banner from "./components/Body";
import Body from "./components/Body";

const App = () => {

  return (
      <>
        <CssBaseline />
        <Header />
        <main>
            <Body />
        </main>
      </>
  );
};

export default App;
