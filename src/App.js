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
  display: flex;

  @media (max-width: 1000px) {
    display: none;
  }

`

const MobileDisplay = styled.div`

display: none;
@media (max-width: 1000px) {
  display: flex;
  height: 100vh;
  width: 100vw;
}


background: url(img/background.jpg);
background-size: cover;

`

const Welcome = styled.div`

  display: flex;

  .welcome-container {
    display: flex;
    background-color: white;
    // height: 300px;
    // width: 660px;
    padding: 50px;
    flex-direction: column;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.pink};
    box-shadow: 0px 0px 20px rgba(0,0,0,.4);
  }

  .welcome-logo {
    display: flex;
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
    display: flex;
    background-color: white;
    // height: 500px;
    // width: 500px;
    padding: 50px;
    flex-direction: column;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.pink};
    box-shadow: 0px 0px 20px rgba(0,0,0,.4);
  }

  .merch-thumbnails-container {
    display: flex;
    width: 700px;
    flex-wrap: wrap;
    max-height: 500px;
    overflow: scroll;
    overflow-x: hidden;
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
    // background-color: lightgray;
    background-size: contain;
    height: 200px;
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

  img {
    height: 200px;
    width: 200px;
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
  @media (max-width: 1000px) {
    display: none;
  }


`

const Modal = styled.div`

  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 300;
  background-color: rgba(0,0,0,.4);
  overflow: scroll;
  display: block;

  @media (min-width: 1000px) {
    height: 100%;
    width: 100%;
  }

  .modal-container {
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;

    @media (min-width: 1000px) {
      margin-top: 100px;
      margin-bottom: 100px;
    }
  }

  .modal-list-container {
    flex-direction: column;
    margin: 0;
    cursor: pointer;
    background-color: white;
    padding: 50px;
    border-radius: 10px;
    z-index: 50;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.pink};

    @media (max-width: 1000px) {
      padding: 0px;
      width: 100%;
      overflow: hidden;
      // display: none;
    }
    
  }

  .modal-list-item {
    justify-content: space-between;
    width: 500px;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    margin-bottom: 10px;
    @media (max-width: 1000px) {
      width: auto;
      margin: 20px;
      overflow: hidden;
      border-bottom: none;
    }
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
    border-radius: 10px;
    border: 2px solid ${props => props.theme.pink};
    @media (max-width: 1000px) {
      width: 100%;
      padding: 10px;
    }
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

  .freebirdFormviewerViewItemsItemItem {
    border-radius: 10px;
    border: 2px solid ${props => props.theme.pink};
  }

  .mobile-welcome{
    width: 100%;
    background-color: white;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.pink};
    display: flex;
    flex-direction column;
    img {
      width: 300px;
    }
    padding: 40px 0;
  }

`

const GameRender = styled.div`

  display: flex;
  flex-direction: column;

  .game-chooser {
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    box-shadow: 0px 0px 20px rgba(0,0,0,.4);
    z-index: 50;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.pink};
  }

  .game-choice {
    display: flex;
    width: 50%;
    height: 200px;
    background-color: white;
    // border-radius: 10px;


  }

  .tl {
    border-radius: 10px 0px 0px 0px;
  }
  .tr {
    border-radius: 0px 10px 0px 0px;
  }
  .br {
    border-radius: 0px 0px 10px 0px;
  }
  .bl {
    border-radius: 0px 0px 0px 10px;
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
    display: flex;
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
    flex-direction: row;
    display: block;
    width: 1000px;
    height: auto;
    div {
      display: block
    }
  }

  .game-puzzle {
    width: 700px;
    background-color: white;
    // height: 400px;
    padding: 50px;
    box-shadow: 0px 0px 20px rgba(0,0,0,.4);
    z-index: 50;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.pink};
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
    margin-bottom: 40px;
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
  @media (max-width: 1000px) {
    display: none;
  }

`

const merchArray = [
  {
    picture: "img/merch_1.png",
    link: "/"
  },
  {
    picture: "img/merch_2.png",
    link: "/"
  },
  {
    picture: "img/merch_3.png",
    link: "/"
  },
  {
    picture: "img/merch_4.png",
    link: "/"
  },
  {
    picture: "img/merch_5.png",
    link: "/"
  },
  {
    picture: "img/merch_6.png",
    link: "/"
  },
]

const crosswordData2 = {
  id: 'simple/1',
  number: 1,
  name: 'Simple Crossword 1',
  date: 1542326400000,
  entries: [
    {
      id: '1-across',
      number: 1,
      humanNumber: '1',
      clue: 'Toy on a string (2-2)',
      direction: 'across',
      length: 4,
      group: ['1-across'],
      position: { x: 0, y: 0 },
      separatorLocations: {
        '-': [2],
      },
      solution: 'YOYO',
    },
    {
      id: '2-across',
      number: 2,
      humanNumber: '2',
      clue: 'Have a rest (3,4)',
      direction: 'across',
      length: 7,
      group: ['2-across'],
      position: { x: 0, y: 2 },
      separatorLocations: {
        ',': [3],
      },
      solution: 'LIEDOWN',
    },
    {
      id: '1-down',
      number: 1,
      humanNumber: '1',
      clue: 'Colour (6)',
      direction: 'down',
      length: 6,
      group: ['1-down'],
      position: { x: 0, y: 0 },
      separatorLocations: {},
      solution: 'YELLOW',
    },
    {
      id: '3-down',
      number: 3,
      humanNumber: '3',
      clue: 'Bits and bobs (4,3,4)',
      direction: 'down',
      length: 7,
      group: ['3-down', '4-down'],
      position: { x: 3, y: 0 },
      separatorLocations: {
        ',': [4],
      },
      solution: 'ODDSAND',
    },
    {
      id: '4-down',
      number: 4,
      humanNumber: '4',
      clue: 'See 3 down',
      direction: 'down',
      length: 4,
      group: ['3-down', '4-down'],
      position: {
        x: 6,
        y: 1,
      },
      separatorLocations: {},
      solution: 'ENDS',
    },
  ],
  solutionAvailable: true,
  dateSolutionAvailable: 1542326400000,
  dimensions: {
    cols: 13,
    rows: 13,
  },
  crosswordType: 'quick',
}


class App extends Component {

  state = {

    currentWindow: 0,
    // 0 = Welcome
    // 1 = Merch
    // 2 = Main game
    // 50 = crossword test

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
          <div className="game-choice tl" onClick={() => { this.setState({ currentGame: "crossword" }) }}>Crossword</div>
          <div className="game-choice tr" onClick={() => { this.setState({ currentGame: "puzzle" }) }}>Puzzle</div>
          <div className="game-choice bl" onClick={() => { this.setState({ currentGame: "search" }) }}>Search</div>
          <div className="game-choice br" onClick={() => { this.setState({ currentGame: "draw" }) }}>Draw</div>
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
    if (this.state.currentGame !== "home") {
      return <div className="game-chooser-toolbar" onClick={() => { this.setState({ currentGame: "home" }) }}>back home</div>
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
                Hey there! This is a personal message from the band. Thanks for checking out our new game site. Here we go!
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
                <div className="merch-thumbnail" style={{}} onClick={() => { }}>
                  {/* <div className="merch-thumbnail-picture"></div> */}
                  <img src={x.picture}></img>
                  {/* <h3>{x.name}</h3> */}
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
            <div className="game-puzzle">
              <div className="game-puzzle-text">
                <h1>Solve the Puzzle!</h1>
                <p>What's going on? Click to move the tiles and solve the puzzle!</p>
              </div>
              <div className="sliderParts">
                <SlidingTilePuzzle
                  maxIterations={300}
                  image={"img/Waldo_OG.jpg"}
                  size={400}
                />
              </div>
              {this.renderToolbar()}
            </div>
          </GameRender>

        </MainGame>

      case 3:
        return <MainGame theme={this.state.theme}>
          <GameRender theme={this.state.theme}>
            <div className="game-instructions">Here we go!</div>
            {this.renderGame()}
            {this.renderToolbar()}
          </GameRender>

        </MainGame>
      case 50:
        return <MainGame theme={this.state.theme}>
          <GameRender theme={this.state.theme}>
            <Crossword style={{ display: "block" }} className="game-crossword" data={crosswordData2} />
          </GameRender>
        </MainGame>
    }
  }

  render() {
    return (
      <Router>
        <ReactTooltip data-border={false} />
        <CornerLogo data-tip="Merch Store" onClick={() => { this.setState({ currentWindow: 1 }) }}></CornerLogo>
        <ModalButton theme={this.state.theme} onClick={() => {
          this.setState({ modalShown: !this.state.modalShown })
        }}>MENU</ModalButton>
        {this.checkModal()}
        <Switch>
          <Route path="/">
            <Display theme={this.state.theme} currentWindow={this.state.currentWindow}>
              {this.readCurrentWindow(this.state.currentWindow)}
            </Display>
            <MobileDisplay>
              <Modal theme={this.state.theme}>
              <div className="modal-container">
                <div className="mobile-welcome">
                  <img src="img/logo.png"></img>
                  <p>
                    Here we go! Welcome to our site. Here is a personal message from us.
                  </p>
                </div>
                </div>
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
                  <Iframe className="iframe modal-spotify" url="https://open.spotify.com/embed/album/02TmceYFis4XKcjCZ86eBP" width="200px" height="400px" border="none"></Iframe>
                </div>
                {/* <div className="modal-container">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdczIih8EqO1aHjaMqnLk-u-tkMMg3kbrJ0Lloavz4Ae4YQFQ/viewform?embedded=true" width="640" height="1171" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                  </div> */}
              </Modal>
            </MobileDisplay>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
