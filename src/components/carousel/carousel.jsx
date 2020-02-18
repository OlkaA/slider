import "./carousel.scss";
import React, { Component } from "react";
import Slide from '../slide/slide';
import SlideOne from "../slideOne/slideOne";
import SlideTwo from "../slideTwo/slideTwo";
import SlideThree from "../slideThree/slideThree";
import SlideFour from "../slideFour/slideFour";
import SlideFive from "../slideFive/slideFive";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };

    this.slides = [
      <SlideOne />,
      <SlideTwo />,
      <SlideThree />,
      <SlideFour />,
      <SlideFive />
    ];

  }

  onRightArrowClick = (e) => {
    e.preventDefault();
    // this.setState({ currentIndex: this.state.currentIndex + 1});
  }
  
  onLeftArrowClick = (e) => {
    e.preventDefault();
    // this.setState({ currentIndex: this.state.currentIndex - 1});
  }

  componentDidMount(){
    this.changeSlide();
  }

  changeSlide = () => {


    setTimeout(this.changeSlide, 1000);
  }

  render() {
    console.log(this.state);
    
    return (
      <div>
        <div className="carousel">

          <ul className="carousel-slides">
            {this.slides.map((slide, index) => {
              console.log(index, this.state.currentIndex)
              return <Slide key={index} index={index} currentIndex={this.state.currentIndex} slide={slide}
              
              />
              // return <li key={i} currentindex={this.state.currentIndex}>{item}</li>;
            })}
          </ul>

          <ul className="pagination">
            <li>
              <a href="" onClick={this.onLeftArrowClick}>&lsaquo;</a>
            </li>
            <li>
              {`${this.state.currentIndex + 1} of ${this.slides.length}`}
            </li>
            <li>
              <a href="" onClick={this.onRightArrowClick}>&rsaquo; </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Carousel;
