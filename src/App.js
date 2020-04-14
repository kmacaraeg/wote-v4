import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import styled from 'styled-components';
import Crossword from "react-crossword";
// import Slider from "react-slider-game";
import HamburgerMenu from "react-hamburger-menu";
import crosswordData from "./components/data/crosswordLA"

// import tourStops from './components/data/tourStops.jsx';
// import mapVector from './components/mapVector';

import Iframe from 'react-iframe';
import anime from 'animejs/lib/anime.es.js';
import ReactTooltip from 'react-tooltip'
import SlidingTilePuzzle from 'react-sliding-tile-puzzle';

// import Display from "./components/Display"
import mapVector from './components/mapVector';
import tourStops from './components/data/tourStops';


const Display = styled.div`

  height: 100vh;
  width: 100vw;
  background: url(img/background.jpg);
  background-size: cover;

`

const Welcome = styled.div`

  .welcome-container {
    background-color: white;
    height: 300px;
    // width: 660px;
    padding: 50px;
    flex-direction: column;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.pink};
    box-shadow: 0px 0px 20px rgba(0,0,0,.4);
  }

  .welcome-logo {
    background: url(img/logo.png);
    height: 100px;
    width: 300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .welcome-copy {
    margin-top: 30px;
    max-width: 400px;
    margin-bottom: 10px;

    p {
      margin: 0;
    }
  }

  .welcome-enterbutton {
    margin: 20px 20px 0 20px;
    background-color: ${props => props.theme.pink};
    border: 2px solid ${props => props.theme.pink};
    color: white;
    border-radius: 10px;
    padding: 10px 14px;
    cursor: pointer;
    transition: .2s ease;
  }

  .welcome-enterbutton:hover {
    background-color: white;
    color: ${props => props.theme.pink};
    margin-top: 15px;
    margin-bottom: 5px;
  }


`

const Merch = styled.div`

  .merch-container {
    background-color: white;
    height: 500px;
    // width: 500px;
    padding: 50px;
    flex-direction: column;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.pink};
    box-shadow: 0px 0px 20px rgba(0,0,0,.4);
  }

  .merch-thumbnails-container {
    width: 660px;
    flex-wrap: wrap;
    max-height: 500px;
    overflow: scroll;
  }

  .merch-thumbnail {
    // background-color: pink;
    width: 200px;
    flex-direction: column;
    margin: 10px;
    padding-bottom: 20px;
    cursor: pointer;
  }
  
  .merch-thumbnail-picture {
    background-color: lightgray;
    height: 300px;
    width: 200px;
    margin-bottom: 10px;
  }

  h3, h4 {
    margin: 0;
  }

  .merch-enter-button {
    margin: 20px 20px 0 20px;
    background-color: ${props => props.theme.pink};
    border: 2px solid ${props => props.theme.pink};
    color: white;
    border-radius: 10px;
    padding: 10px 14px;
    cursor: pointer;
    transition: .2s ease;
  }

  .merch-enter-button:hover {
    background-color: white;
    color: ${props => props.theme.pink};
    margin-top: 15px;
    margin-bottom: 5px;
  }
`

const MainGame = styled.div`



`

const ModalButton = styled.div`

  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  cursor: pointer;
  z-index: 400;
  // color: ${props => props.theme.pink};
  color: white;
  font-weight: bold;

`

const Modal = styled.div`

  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 300;
  background-color: rgba(0,0,0,.4);
  overflow: scroll;
  display: block;

  .modal-container {
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  .modal-list-container {
    flex-direction: column;
    margin: 0;
    cursor: pointer;
    background-color: white;
    padding: 50px;
    border-radius: 10px;
    z-index: 50;
  }

  .modal-list-item {
    justify-content: space-between;
    width: 500px;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .modal-list-item:hover {
    color: pink;
  }

  .modal-spotify {
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    border: none;
    z-index: 50;
  }

  h1 {
    background-color:${props => props.theme.pink};
    color: white;
    padding: 10px 60px;
    cursor: pointer;
    border-radius: 10px 10px 0 0;
      box-shadow: 0px 0px 20px rgba(0,0,0,.4);
      z-index: 10;
      margin-bottom: 0;
  }

`

const GameRender = styled.div`

  flex-direction: column;

  .game-chooser {
    flex-wrap: wrap;
    width: 500px;
    box-shadow: 0px 0px 20px rgba(0,0,0,.4);
    z-index: 50;
  }

  .game-choice {
    width: 50%;
    height: 200px;
    background-color: white;
  }

  .game-choice:hover {
    opacity: .9;
    cursor: pointer;
  }

  .game-chooser-toolbar {
    height: 40px;
    background-color:${props => props.theme.pink};
    color: white;
    width: 90%;
    cursor: pointer;
    border-radius: 0 0 10px 10px;
        box-shadow: 0px 0px 20px rgba(0,0,0,.4);
        z-index: 10;
  }

  .game-instructions {
    height: 40px;
    background-color:${props => props.theme.pink};
    color: white;
    width: 90%;
    border-radius: 10px 10px 0 0;
      box-shadow: 0px 0px 20px rgba(0,0,0,.4);
      z-index: 10;
      font-weight: bold;
      font-style: italic;
      font-size: 20px;
  }

  .game-chooser-toolbar:hover {
    opacity: .9
  }

  .game-crossword {
    width: 1000px;
    background-color: white;
    height: 500px;
    box-shadow: 0px 0px 20px rgba(0,0,0,.4);
    z-index: 50;
    color: black;
    font-style: italic;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .game-puzzle {
    width: 700px;
    background-color: white;
    height: 400px;
    box-shadow: 0px 0px 20px rgba(0,0,0,.4);
    z-index: 50;
  }

  .game-search {
    width: 700px;
    background-color: white;
    height: 400px;
    box-shadow: 0px 0px 20px rgba(0,0,0,.4);
    z-index: 50;
  }

  .game-draw {
    width: 700px;
    background-color: white;
    height: 400px;
    box-shadow: 0px 0px 20px rgba(0,0,0,.4);
    z-index: 50;
  }

  .game-puzzle-text {
    display: flex;
    flex-direction: column;
    padding: 40px;
  }
`

const CornerLogo = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 300px;
  background: url(img/logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }

`

const merchArray = [
  {
    name: "jacket",
    picture: "red",
    description: "info",
    link: "/"
  },
  {
    name: "shirt",
    picture: "blue",
    description: "info",
    link: "/"
  },
  {
    name: "hat",
    picture: "red",
    description: "info",
    link: "/"
  },
  {
    name: "cd",
    picture: "blue",
    description: "info",
    link: "/"
  },
  {
    name: "socks",
    picture: "red",
    description: "info",
    link: "/"
  },
  {
    name: "watch",
    picture: "blue",
    description: "info",
    link: "/"
  }
]


class App extends Component {

  state = {

    currentWindow: 0,
    // 0 = Welcome
    // 1 = Merch
    // 2 = Main game

    theme: {
      brown: "#583539",
      purple: "#B486BC",
      yellow: "#FDB714",
      green: "#88CCA4",
      pink: "#E25085"
    },

    gameData: "",

    modalShown: false,
    currentGame: "home"
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  changeGame = (game, city, state, date, data, data2) => {
    const newGame = game;
    const newCity = city;
    const newState = state;
    const newDate = date;
    const newData = data;
    const newData2 = data2;
    let playedCrossword = false;
    let playedColoring = false;
    let playedPuzzle = false;
    let playedWaldo = false;
    let count = 0;

    this.setState({ currentGame: "none" });
    this.setState({ currentGame: newGame });
    this.setState({ currentCity: newCity });
    this.setState({ currentAction: newState });
    this.setState({ currentDate: newDate });
    this.setState({ currentData: newData });
    this.setState({ currentData2: newData2 });

    console.log("previous game " + this.state.currentGame);
    console.log(typeof (this.state.completedGames))
    console.log(this.state.completedGames)

    if (playedColoring === true && playedPuzzle === true && playedWaldo === true && playedCrossword === true && count === 24) {
      this.setState({ gameState: 1 });
    }

  }

  showModal() {
    if (this.state.modalShown == false) {
    }
  }

  checkModal() {
    if (this.state.modalShown == true) {
      return <Modal theme={this.state.theme}>
        <div className="modal-container">
          <h1>Tour Dates</h1>
          <div className="modal-list-container" onClick={() => {
          }}>
            {tourStops.map((x, i) => (
              <div className="modal-list-item">
                                  <h3>{x.date}</h3>
                <a href="https://www.bandsintown.com/a/158776-walk-off-the-earth?came_from=242" >

                  <h3>{x.city}, {x.state}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="modal-container">
        <h1>Music</h1>
        <Iframe className="iframe modal-spotify" url="https://open.spotify.com/embed/album/02TmceYFis4XKcjCZ86eBP" width="500px" height="400px" border="none"></Iframe>
        </div>
        <div className="modal-container">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdczIih8EqO1aHjaMqnLk-u-tkMMg3kbrJ0Lloavz4Ae4YQFQ/viewform?embedded=true" width="640" height="1171" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </Modal>
    }
  }

  renderGame = () => {

    switch (this.state.currentGame) {
      case "home":
        return <div className="game-chooser">
          <div className="game-choice" onClick={() => { this.setState({ currentGame: "crossword" }) }}>Crossword</div>
          <div className="game-choice" onClick={() => { this.setState({ currentGame: "puzzle" }) }}>Puzzle</div>
          <div className="game-choice" onClick={() => { this.setState({ currentGame: "search" }) }}>Search</div>
          <div className="game-choice" onClick={() => { this.setState({ currentGame: "draw" }) }}>Draw</div>
        </div>
      case "crossword":
        return <div className="game-crossword"><Crossword data={crosswordData}></Crossword></div>
        case "puzzle":
            return <div className="game-puzzle">
            <div className="game-puzzle-text">
              <h1>Solve the Puzzle!</h1>
              <p>What is going on? Click to move the tiles and solve the puzzle!</p>
            </div>
            <div className="sliderParts">
            <SlidingTilePuzzle
          maxIterations={300}
          image={"img/Waldo_OG.jpg"}
          size={400}
        />
            </div>
        </div>
      // case "search":
      //   return  <CompareImgInput className="compareImageInput" data={"test"} rightImage={"img/waldo_1"} />

      case "draw":
        return <div className="game-draw">draw</div>
    }

  }

  renderToolbar() {
    if(this.state.currentGame!=="home"){
      return <div className="game-chooser-toolbar" onClick={() => { this.setState({ currentGame: "home" })}}>back home</div>
    }
  }

  readCurrentWindow = (x) => {

    switch (x) {
      case 0:
        return <Welcome theme={this.state.theme}>
          <div className="welcome-container">
            <div className="welcome-logo"></div>
            <div className="welcome-copy">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis laoreet metus, ut tristique dolor. Vivamus eu ante ut velit lacinia molestie. Fusce nisl dolor, mattis a pretium et, aliquet sit amet leo.
                </p>
            </div>
            <div className="welcome-enterbutton" onClick={() => { this.setState({ currentWindow: 1 }) }}>
              Here we go!
              </div>
          </div>
        </Welcome>
      case 1:
        return <Merch theme={this.state.theme}>
          <div className="merch-container">
            <h1>Merch</h1>
            <div className="merch-thumbnails-container">
              {/* map function for merch items */}
              {merchArray && merchArray.map((x, i) => (
                <div className="merch-thumbnail" onClick={() => { }}>
                  <div className="merch-thumbnail-picture"></div>
                  <h3>{x.name}</h3>
                  <h4>{x.description}</h4>
                </div>
              ))
              }
            </div>
            <div className="merch-enter-button" onClick={() => { this.setState({ currentWindow: 2 }) }}>
              Go to the games!
            </div>

          </div>
        </Merch>
      case 2:
        return <MainGame theme={this.state.theme}>
          <GameRender theme={this.state.theme}>
            <div className="game-instructions">Here we go!</div>
            {this.renderGame()}
            {this.renderToolbar()}
          </GameRender>

        </MainGame>
    }
  }

  render() {
    return (
      <Router>
        <ReactTooltip data-border={false} />
        <CornerLogo onClick={()=>{this.setState({currentWindow: 1})}}></CornerLogo>
        <ModalButton  theme={this.state.theme} onClick={() => {
          this.setState({ modalShown: !this.state.modalShown })
        }}>MENU</ModalButton>
        {this.checkModal()}
        <Switch>
          <Route path="/">
            <Display theme={this.state.theme} currentWindow={this.state.currentWindow}>
              {this.readCurrentWindow(this.state.currentWindow)}
            </Display>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
