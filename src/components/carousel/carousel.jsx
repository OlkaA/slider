import "./carousel.scss";
import React, { Component } from "react";
// import Slide from '../slide/slide';
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

  // componentDidMount() {
  //   this.showSlideShow();
  // }

  // showSlideShow = () => {
  //   setInterval or SetTimeOut
  // }

  goToNextSlide = e => {
    if(e){
      e.preventDefault();
    }

    let current = this.state.currentIndex;
    if (current === this.slides.length - 1) {
      current = 0;
    } else {
      ++current;
    }
    this.setState({
      currentIndex: current
    });
  };

  goToPrevSlide = e => {
    e.preventDefault();

    let current = this.state.currentIndex;
    if (current < 1) {
      current = this.slides.length;
    }
    --current;
    this.setState({
      currentIndex: current
    });
  };

  goToSlide = (index) => {
    this.setState({ currentIndex: index });
  }

  render() {
    console.log(this.state.currentIndex)
    return (
      <div>
        <div className="wpapper">
          <div className="carousel">
            <ul className="carousel-slides">
              {this.slides.map((slide, index) => {
                return (
                  <li
                    key={index}
                    currentndex={this.state.currentIndex}
                    className={`slide-wrapper ${
                      index === this.state.currentIndex
                        ? " active"
                        : ""
                    }`}
                  >
                    {slide}
                  </li>
                );
              })}
            </ul>

            <ul className="carousel-pagination">
              {this.slides.map((slide, index) => {
                return (
                  <li
                    onClick={() => this.goToSlide(index)}
                    currentindex={this.state.currentIndex}
                    key={index}
                    index={index}
                    className={
                      index === this.state.currentIndex
                        ? " active"
                        : ""
                    }
                  ></li>
                );
              })}
            </ul>
          </div>

          <ul className="pagination">
            <li>
              <a href="" onClick={this.goToPrevSlide}>
                &lsaquo;
              </a>
            </li>
            <li>{`${this.state.currentIndex + 1} of ${this.slides.length}`}</li>
            <li>
              <a href="" onClick={this.goToNextSlide}>
                &rsaquo;{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Carousel;
