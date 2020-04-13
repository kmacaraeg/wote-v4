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

// import tourStops from './components/data/tourStops.jsx';
// import mapVector from './components/mapVector';

import Iframe from 'react-iframe';
import anime from 'animejs/lib/anime.es.js';
import ReactTooltip from 'react-tooltip'
// import SlidingTilePuzzle from 'react-sliding-tile-puzzle';

// import Display from "./components/Display"
import mapVector from './components/mapVector';
import tourStops from './components/data/tourStops';


const Display = styled.div`

  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.green};

`

const Welcome = styled.div`

  .welcome-container {
    background-color: white;
    // height: 500px;
    // width: 500px;
    padding: 50px;
    flex-direction: column;
  }

  .welcome-logo {
    background-color: lightgray;
    height: 200px;
    width: 200px;
  }

  .welcome-copy {
    margin-top: 30px;
    max-width: 400px;

    p {
      margin: 0;
    }
  }

  .welcome-enterbutton {
    margin: 10px;
    background-color: ${props => props.theme.green};
    padding: 10px;
    cursor: pointer;
  }

`

const Merch = styled.div`

  .merch-container {
    background-color: white;
    height: 500px;
    // width: 500px;
    padding: 50px;
    flex-direction: column;
  }

  .merch-thumbnails-container {
    width: 660px;
    flex-wrap: wrap;
    max-height: 500px;
    overflow: scroll;
  }

  .merch-thumbnail {
    background-color: pink;
    width: 200px;
    flex-direction: column;
    margin: 10px;
    outline: 1px solid red;
    padding-bottom: 20px;
    cursor: pointer;
  }
  
  .merch-thumbnail-picture {
    background-color: gray;
    height: 200px;
    width: 200px;
    margin-bottom: 10px;
  }

  h3, h4 {
    margin: 0;
  }

  .merch-enter-button {
    margin: 10px;
    background-color: ${props => props.theme.green};
    padding: 10px;
    cursor: pointer;
    padding: 10px;
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

`

const Modal = styled.div`

  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 300;
  background-color: rgba(0,0,0,.4);
  overflow: scroll;

  .modal-container {
    flex-direction: column;
    margin-top: 100px;

  }

  .modal-list-container {
    flex-direction: column;
    margin: 50px 0;
    cursor: pointer;
  }

  .modal-list-item {
    justify-content: space-between;
    width: 500px;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .modal-list-item:hover {
    color: white;
  }


`

const GameRender = styled.div`

  // height: 500px;
  // width: 500px;
  // background-color: red;
  flex-direction: column;

  #states {
    fill: blue;
  }

  .state {
    stroke: 4px solid white;
  }

  #usamap {
    width: 800px;
  }


  .game-chooser {
    flex-wrap: wrap;
    width: 500px;
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
    background-color: red;
    width: 100%;
    cursor: pointer;
  }

  .game-chooser-toolbar:hover {
    opacity: .9
  }

  .game-crossword {
    width: 700px;
    background-color: white;
    height: 400px;
  }

  .game-puzzle {
    width: 700px;
    background-color: white;
    height: 400px;
  }

  .game-search {
    width: 700px;
    background-color: white;
    height: 400px;
  }

  .game-draw {
    width: 700px;
    background-color: white;
    height: 400px;
  }
`

const merchArray = [
  {
    name: "jacket",
    picture: "red",
    description: "cool",
    link: "/"
  },
  {
    name: "shirt",
    picture: "blue",
    description: "sick",
    link: "/"
  },
  {
    name: "jacket",
    picture: "red",
    description: "cool",
    link: "/"
  },
  {
    name: "shirt",
    picture: "blue",
    description: "sick",
    link: "/"
  },
  {
    name: "jacket",
    picture: "red",
    description: "cool",
    link: "/"
  },
  {
    name: "shirt",
    picture: "blue",
    description: "sick",
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
      return <Modal>
        <div className="modal-container">
          <h1>Tour Dates</h1>
          <div className="modal-list-container" onClick={() => {
          }}>
            {tourStops.map((x, i) => (
              <div className="modal-list-item">
                <h3>{x.date}</h3>
                <h3>{x.city}, {x.state}</h3>
              </div>
            ))}
          </div>
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
        return <div className="game-crossword">crossword</div>
        case "puzzle":
            return <div className="game-puzzle">puzzle</div>
      case "search":
        return <div className="game-search">search</div>

      case "draw":
        return <div className="game-draw">draw</div>
    }

  }

  readCurrentWindow = (x) => {

    switch (x) {
      case 0:
        return <Welcome>
          <div className="welcome-container">
            <div className="welcome-logo"></div>
            <div className="welcome-copy">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis laoreet metus, ut tristique dolor. Vivamus eu ante ut velit lacinia molestie. Fusce nisl dolor, mattis a pretium et, aliquet sit amet leo.
                </p>
            </div>
            <div className="welcome-enterbutton" onClick={() => { this.setState({ currentWindow: 1 }) }}>
              enter
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
              enter
            </div>

          </div>
        </Merch>
      case 2:
        return <MainGame theme={this.state.theme}>
          <GameRender>
            <div className="game-chooser-toolbar" onClick={() => { this.setState({ currentGame: "home" })}}>
            back home</div>
            {this.renderGame()}
          </GameRender>

        </MainGame>
    }
  }

  render() {
    return (
      <Router>
        <ReactTooltip data-border={false} />
        <ModalButton onClick={() => {
          this.setState({ modalShown: !this.state.modalShown })
        }}>menu</ModalButton>
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
