import React, { Component } from "react";

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";

import Navbar from "./components/Navbar";
import "./App.css";

import data from "./data";

class App extends Component {
  state = {
    colorNo: 0,
    color: "black",
    bgColor: "#ffffff"
  };
  changeColor = () => {
    let i = this.state.colorNo;
    i = i === data.colors.length - 1 ? 0 : i + 1;
    this.setState({
      colorNo: i,
      color: data.colors[i],
      bgColor: data.bgColors[i]
    });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          color: this.state.color
        }}
      >
        <img
          className="artist"
          src="./img/artist.png"
          alt="Artist"
          title="Change Colors"
          onClick={() => this.changeColor()}
        />

        <Navbar />
        <TitleSection bgColor={this.state.bgColor} />
        <AboutSection bgColor={this.state.bgColor} />
        <SkillSection bgColor={this.state.bgColor} />
      </div>
    );
  }
}

export default App;
