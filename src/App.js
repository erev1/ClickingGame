import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Header from "./components/header";
import Tile from "./components/tile"
import Container from "./components/container"


class App extends Component {

  state = {
    images: 
      [{
        id:0,
        url:'assets/vg1.jpg'
      },
      {
        id:1,
        url:'assets/vg2.png'
      },
      {
        id:2,
        url:'assets/vg3.jpg'
      },
      {
        id:3,
        url:'assets/vg4.jpg'
      },
      {
        id:4,
        url:'assets/vg5.jpg'
      },
      {
        id:5,
        url:'assets/vg6.jpg'
      },
      {
        id:6,
        url:'assets/monet1.jpg'
      },
      {
        id:7,
        url:'assets/monet2.jpg'
      },
      {
        id:8,
        url:'assets/monet3.jpg'
      },
      {
        id:9,
        url:'assets/monet4.jpg'
      },
      {
        id:10,
        url:'assets/monet5.jpg'
      },
      {
        id:11,
        url:'assets/monet6.jpg'
      }

      ],
      score: 0,
      highscore: 0,
      imagesAlreadyClicked: []};

  componentDidMount() {
    this.shuffleImages()
    console.log("state: ", this.state)
  }


  shuffleImages = () => {

    let shuffled = this.state.images.slice()

    //from stackoverflow...

    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    //

    this.setState({images: shuffled})
  }

  handleClick = (event) => {
    let clickedDupe = this.state.imagesAlreadyClicked.slice()
    
    if (clickedDupe.indexOf(event.target.id) > -1){

      if (this.state.highscore < this.state.score){
        this.setState({score: 0, highscore: this.state.score, imagesAlreadyClicked: []})
        this.shuffleImages()
      }
      else {
         this.setState({score: 0, imagesAlreadyClicked: []})
        this.shuffleImages()
      }
    }
    else {
      clickedDupe.push(event.target.id)
      this.setState({score: this.state.score + 1, 
                     imagesAlreadyClicked: clickedDupe})
      this.shuffleImages()

    }
    
    console.log(clickedDupe)
  }

  render() {
    return (
      <div>
        <Navbar 
          score = {this.state.score}
          topScore = {this.state.highscore}/>
        <Header 
          />
        <Container>
        {this.state.images.map((image) => (

          <Tile 
          imgUrl={image.url}
          handleClick = {this.handleClick}
          id = {image.id}>
          </Tile>

          ))
        }
        </Container>
      </div>
    );
  }
}

export default App;
