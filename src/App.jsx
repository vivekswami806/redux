import React from "react";
import Home from "./Facebook/home";
import Eventhanderler from "./Componment/eventhanderl";
import ElentElement from "./Componment/elentElement";
//import Search from './Componment/Search';
import EventHandle from "./Componment/eventHandle";
import BackgrounColorhandel from "./Componment/BackgrounColorhandel";
// import Counter from './componment/counter';
// import CounterAdding from './Componment/Counter';
import Backghndelbtn from "./Componment/Backghndelbtn";
import C1ounter from "./Componment/C1ounter";
import ColorCounter from "./Componment/ColorCounter";
import Formhandle from "./Componment/Formhandle";
import CounterAdding from "./Componment/Counter";
import SearchHandle from "./Componment/SearchHandle";
import { Route, Routes } from "react-router-dom";
import SinglePage from "./Componment/SinglePage";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<SearchHandle/>}/>
    <Route path="/singlepage/:id" element={<SinglePage/>}/>

    </Routes>
      {/* <Eventhanderler/> */}
      {/* <Backghndelbtn/> */}
      {/* <CounterAdding/> */}
      {/* <Home id="body"/> */}
      {/* <ElentElement/> */}
      {/* <Eventhanderler/> */}
      {/* // <Search/> */}
      {/* <EventHandle/> */}
      {/* <BackgrounColorhandel/> */}
      {/* <C1ounter/> */}
      {/* <ColorCounter/> */}
      {/* <Formhandle/> */}
    </>
  );
}

export default App;
