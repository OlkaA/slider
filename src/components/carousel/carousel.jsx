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

  goToNextSlide = e => {
    e.preventDefault();

    let current = this.state.currentIndex;
    if (current === this.slides.length - 1) {
      current = 0;
    } else {
      ++current;
      this.setState({
        currentIndex: current
      });
    }
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

  componentDidMount() {
    this.changeSlide();
  }

  changeSlide = () => {
    setTimeout(this.changeSlide, 1000);
  };

  render() {
    return (
      <div>
        <div className="carousel">
          <ul className="carousel-slides">
            {this.slides.map((slide, index) => {
              // console.log(index, this.state.currentIndex);
              // return <Slide key={index} index={index} currentIndex={this.state.currentIndex} slide={slide}/>
              return (
                <li
                  key={index}
                  currentndex={this.state.currentIndex}
                  className={`slide-wrapper ${
                    index === this.state.currentIndex
                      ? " active"
                      : " not-active"
                  }`}
                >
                  {slide}
                </li>
              );
            })}
          </ul>

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
