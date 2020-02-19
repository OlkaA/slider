import "./carousel.scss";
import React, { Component } from "react";
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

  componentDidMount() {
    this.showSlideShow();
  }

  showSlideShow = () => {
    let self = this;
    setTimeout(() => {
      let currentIndex = self.state.currentIndex;
      if (currentIndex < self.slides.length - 1) {
        currentIndex++;
        self.setState({ currentIndex });
        self.showSlideShow();
      }
    }, 2000);
  };

  goToNextSlide = e => {
    if (e) {
      e.preventDefault();
    }

    let currentIndex = this.state.currentIndex;
    if (currentIndex !== this.slides.length - 1) {
      ++currentIndex;
    }
    this.setState({ currentIndex });
  };

  goToPrevSlide = e => {
    e.preventDefault();

    let currentIndex = this.state.currentIndex;
    if (currentIndex !== 0) {
      --currentIndex;
    }
    this.setState({ currentIndex });
  };

  goToSlide = index => {
    this.setState({ currentIndex: index });
  };

  render() {
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
                    className={
                      index === this.state.currentIndex ? " active" : ""
                    }
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
                      index === this.state.currentIndex ? " active" : ""
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
                &rsaquo;
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Carousel;
