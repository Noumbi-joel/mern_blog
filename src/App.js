import React from "react";
import { CssBaseline } from "@mui/material"

//components
import Header from "./components/Header";
import Banner from "./components/Banner";

const App = () => {

  return (
      <>
        <CssBaseline />
        <Header />
        <main>
          <div>
            <Banner />
          </div>
        </main>
      </>
  );
};

export default App;
