import React, { Component } from "react";
import * as Icon from "react-feather";

import "./App.scss";

import logo from "./assets/img/logo.svg";
import menuIcon from "./assets/img/menuIcon.svg";
import dot from "./assets/img/dot.svg";

import bg from "./assets/img/bg3.svg";

import { ProjectsData, ThoughtsData } from "./assets/data/Data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="LandingPage--header">
          <img src={bg} alt="" />
        </div>
        <div className="LandingPage">
          <div className="LandingPage--navbar">
            <img src={logo} alt="" className="logo" />
            <img src={menuIcon} alt="" className="menuIcon" />
          </div>
          <div className="LandingPage--content">
            <div className="body">
              <div className="body__titleBlack">THINK DIFFERENT</div>
              <div className="body__titleBox">
                <p className="white">AIM HIGHER</p> <img src={dot} alt="" />
              </div>
              <p className="body__text">
                It’s about more than numbers: it’s about people. Large
                followings are good. Active and engaged audiences are better.
                That’s the big picture we paint.
              </p>
              <button className="LandingPageButton">GET STARTED NOW</button>
            </div>
          </div>
          <div className="LandingPage--projects">
            <div className="title">
              Creative is a digital entertainment agency. We partner with
              high-profile talent to grow but also to entertain and engage their
              audiences.
            </div>
            <div className="separator" />
            <div className="carousel">
              <div className="carousel--button">
                <Icon.ChevronLeft />
              </div>
              <div className="carousel--body">
                {ProjectsData.map((project, i) => {
                  if (i < 2) {
                    return (
                      <div className="carousel--body__slide">
                        <img
                          src={project.image}
                          alt=""
                          className="SlideImage"
                        />
                        <div className="SlideTitle">{project.title}</div>
                        <div className="SlideDescription">
                          {project.description}
                        </div>
                      </div>
                    );
                  }
                  return <> </>;
                })}
              </div>
              <div className="carousel--button">
                <Icon.ChevronRight />
              </div>
            </div>
            <div className="LandingPageButton">SEE ALL WORK</div>
          </div>
          <div className="LandingPage--thoughts">
            <div className="ThoughtsTitle">OUR THOUGHTS</div>
            <div className="ThoughtsSeparator" />
            <div className="ThoughtsCarousel">
              <div className="ThoughtsCarousel--body">
                {ThoughtsData.map((project, i) => {
                  if (i < 3) {
                    return (
                      <div className="ThoughtsCarousel--body__slide">
                        <img
                          src={project.image}
                          alt=""
                          className="SlideImage"
                        />
                        <div className="SlideTitle">{project.title}</div>
                        <div className="SlideDescription">
                          {project.description}
                        </div>
                      </div>
                    );
                  }
                  return <> </>;
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
