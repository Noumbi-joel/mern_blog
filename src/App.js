import React from "react";
import { CssBaseline } from "@mui/material"

//components
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {

  return (
      <>
        <CssBaseline />
        <Header />
        <main>
          <div>
            <Body />
          </div>
        </main>
        <Footer />
      </>
  );
};

export default App;
