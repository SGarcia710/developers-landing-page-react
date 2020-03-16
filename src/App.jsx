import React, { Component } from "react";
import * as Icon from "react-feather";
import { v4 as uuidv4 } from "uuid";
import Popup from "reactjs-popup";

import "./App.scss";

import logo from "./assets/img/logo.svg";
import menuIcon from "./assets/img/menuIcon.svg";
import dot from "./assets/img/dot.svg";

import bg from "./assets/img/bg3.svg";

import {
  ProjectsData,
  // ThoughtsData,
  TeamData,
  Partners
} from "./assets/data/Data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: ProjectsData,
      team: TeamData,
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  changeSlide(direction, slide) {
    let auxList = [];

    const quantity =
      slide === "projects"
        ? this.state.projects.length
        : this.state.team.length;

    if (direction === "next") {
      for (let i = 0; i < quantity; i++) {
        if (i < quantity - 1) {
          auxList.push(
            slide === "projects"
              ? this.state.projects[i + 1]
              : this.state.team[i + 1]
          );
        } else {
          auxList.push(
            slide === "projects" ? this.state.projects[0] : this.state.team[0]
          );
        }
      }
    } else {
      for (let i = 0; i < quantity; i++) {
        if (i === 0) {
          auxList.push(
            slide === "projects"
              ? this.state.projects[quantity - 1]
              : this.state.team[quantity - 1]
          );
        } else {
          auxList.push(
            slide === "projects"
              ? this.state.projects[i - 1]
              : this.state.team[i - 1]
          );
        }
      }
    }
    // Al final establezco el nuevo slider
    this.setState({
      [slide]: auxList
    });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }
  closeModal() {
    this.setState({ modalOpen: false });
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
                <Icon.ChevronLeft
                  onClick={() => this.changeSlide("back", "projects")}
                />
              </div>
              <div className="carousel--body">
                {this.state.projects.map((project, i) => {
                  if (i < 2) {
                    return (
                      <div key={uuidv4()} className="carousel--body__slide">
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
                <Icon.ChevronRight
                  onClick={() => this.changeSlide("next", "projects")}
                />
              </div>
            </div>
            <div className="LandingPageButton">SEE ALL WORK</div>
          </div>
          <div className="LandingPage--team">
            <Popup
              open={this.state.modalOpen}
              closeOnDocumentClick
              onClose={this.closeModal}
            >
              <div className="modal">
                <img
                  className="modal--image"
                  src={this.state.team[2].image}
                  alt={this.state.team[2].name}
                />
                <div className="modal--info">
                  <div className="modal--info__name">
                    {this.state.team[2].name}
                  </div>
                  <div className="modal--info__position">
                    {this.state.team[2].position}
                  </div>
                  <div className="modal--info__academics">
                    <div className="title">Academic History</div>
                    {this.state.team[2].academics.map(item => {
                      return (
                        <div className="academicItem">
                          {`> ${item.title}, ${item.site}, ${item.year}.`}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="modal--closeButton" onClick={this.closeModal}>
                  <Icon.X />
                </div>
              </div>
            </Popup>
            <div className="TeamTitle">OUR TEAM</div>
            <div className="TeamSeparator" />
            <div className="TeamCarousel">
              <div className="TeamCarousel--body">
                {this.state.team.map((member, i) => {
                  if (i < 5) {
                    return (
                      <div key={uuidv4()} className="TeamCarousel--body__slide">
                        {i === 1 && (
                          <img
                            src={member.image}
                            alt=""
                            onClick={() => this.changeSlide("back", "team")}
                            className="SlideImage"
                            style={{ cursor: "pointer" }}
                          />
                        )}

                        {i === 2 && (
                          <img
                            className="SlideImageBig"
                            onClick={this.openModal}
                            src={member.image}
                            alt=""
                          />
                        )}

                        {i !== 1 && i !== 3 && i !== 2 && (
                          <img
                            src={member.image}
                            alt=""
                            className="SlideImage"
                          />
                        )}
                        {i === 3 && (
                          <img
                            src={member.image}
                            alt=""
                            onClick={() => this.changeSlide("next", "team")}
                            className="SlideImage"
                            style={{ cursor: "pointer" }}
                          />
                        )}

                        <div className="SlideTitle">
                          {i === 2 ? member.name : <br />}
                        </div>
                        <div className="SlideDescription">
                          {i === 2 ? member.position : <br />}
                        </div>
                      </div>
                    );
                  }
                  return <> </>;
                })}
              </div>
            </div>
          </div>
          {/* <div className="LandingPage--thoughts">
            <div className="ThoughtsTitle">OUR THOUGHTS</div>
            <div className="ThoughtsSeparator" />
            <div className="ThoughtsCarousel">
              <div className="ThoughtsCarousel--body">
                {ThoughtsData.map((thought, i) => {
                  if (i < 3) {
                    return (
                      <div
                        key={uuidv4()}
                        className="ThoughtsCarousel--body__slide"
                      >
                        <img
                          src={thought.image}
                          alt=""
                          className="SlideImage"
                        />
                        <div className="SlideTitle">{thought.title}</div>
                        <div className="SlideDescription">
                          {thought.description}
                        </div>
                      </div>
                    );
                  }
                  return <> </>;
                })}
              </div>
            </div>
          </div> */}
          <div className="LandingPage--letsTalk">
            <div className="LandingPage--letsTalk__title">
              LET’S TALK TOGETHER
            </div>
            <div className="LandingPage--letsTalk__text">
              Speaking comes to most people as naturally as breathing. On many
              occasions our words are uttered without conscious thought; in fact
              we rarely stop
            </div>
            <div className="LandingPage--letsTalk__button">
              <button className="LandingPageButton">GET STARTED NOW</button>
            </div>
          </div>
          <div className="LandingPage--footer">
            <div className="LandingPage--footer__partners">
              {Partners.map(partner => {
                return (
                  <img
                    key={uuidv4()}
                    className="partnerLogo"
                    src={partner.logo}
                    alt={partner.name}
                  />
                );
              })}
            </div>
            <div className="LandingPage--footer__links">
              <div className="linksColumn">
                <div className="linksColumn--title">OUR THOUGHTS</div>

                <div className="linksColumn--body">
                  <div className="linksColumn--body__item">
                    <div className="link">
                      E Banks That Accept Us Casino Players
                    </div>
                    <div className="date">24 Apr 2018</div>
                  </div>
                  <div className="linksColumn--body__item">
                    <div className="link">
                      Little Things Do Make A Difference
                    </div>
                    <div className="date">19 Oct 2018</div>
                  </div>
                  <div className="linksColumn--body__item">
                    <div className="link">
                      Guidelines For Inkjet Cartridge Refill
                    </div>
                    <div className="date">20 Jul 2018</div>
                  </div>
                </div>
              </div>

              <div className="linksColumn">
                <p className="linksColumn--title">CONTACT US</p>

                <div className="linksColumn--body">
                  <div className="linksColumn--body__detail_item">
                    <div className="title">Phone number</div>
                    <div className="info">+44 123 456 789</div>
                  </div>
                  <div className="linksColumn--body__detail_item">
                    <div className="title">Email</div>
                    <div className="info">hello@your-domain.com</div>
                  </div>
                  <div className="linksColumn--body__detail_item">
                    <div className="title">Business hours</div>
                    <div className="info">Monday - Friday 10 AM - 9 PM</div>
                  </div>
                </div>
              </div>

              <div className="linksColumn">
                <div className="linksColumn--title">USEFUL LINKS</div>

                <div className="linksColumn--body">
                  <div className="linksColumn--body__item">
                    <div className="link">About Us</div>
                  </div>
                  <div className="linksColumn--body__item">
                    <div className="link">Our Work</div>
                  </div>
                  <div className="linksColumn--body__item">
                    <div className="link">Contact Us</div>
                  </div>
                  <div className="linksColumn--body__item">
                    <div className="link">Video Tutorial</div>
                  </div>
                  <div className="linksColumn--body__item">
                    <div className="link">Licenses</div>
                  </div>
                </div>
              </div>

              <div className="linksColumn">
                <div className="linksColumn--title">USEFUL LINKS</div>

                <div className="linksColumn--body">
                  <div className="linksColumn--body__item">
                    <div className="link">Help Center</div>
                  </div>
                  <div className="linksColumn--body__item">
                    <div className="link">Support Forum</div>
                  </div>
                  <div className="linksColumn--body__item">
                    <div className="link">Online Documentation</div>
                  </div>
                  <div className="linksColumn--body__item">
                    <div className="link">Video Tutorial</div>
                  </div>
                  <div className="linksColumn--body__item">
                    <div className="link">Licenses</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="LandingPage--footer__foot">
              <div className="signature">
                © 2020 - Develop with{" "}
                <span role="img" aria-label="heart">
                  ♥️
                </span>
                by @SGarcia710 | Designed by Tran Mau Tri Tam
              </div>
              <div className="socialIcons">
                <Icon.Twitter />
                <Icon.GitHub />
                <Icon.Linkedin />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
