import React, {Component} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Header2 from "./Components/Header/header2";
import Header3 from "./Components/Header/header3";
import Header4 from "./Components/Header/header4";
import Footer from "./Components/Footer/Footer";

export default class App extends Component{
  state={
    
  };
render(){
  return(
    <div>
      <Navbar/>
      <Header/>
      <Header2/>
      <Header3/>
      <Header4/>
      <Footer/>
    </div>
  )
}

}