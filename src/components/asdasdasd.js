import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../Style/Style.css";

class ProductSlider extends Component {
  render() {
    let { productSlider } = this.props;
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
    return (
      <div>
        {productSlider.map(productDetails => {
          console.log("Product ID--->>", productDetails.id);
          return (
            <div className="productDetailsContainer">
              <h2 className="productDetailsHeading">
                {productDetails.category.heading}
              </h2>
              <h2 className="productDetailsHeadingLastWord">
                &nbsp;
                {productDetails.category.headingLastWord}
              </h2>
              <p className="productDetailsDescription">
                {productDetails.category.description}
              </p>
              <span className="productDetailsSubDescription">
                {productDetails.category.subDescription}
              </span>
              <span className="productDetailsSubDescriptionLastSentence">
                &nbsp;
                {productDetails.category.subDescriptionLastSenetence}
              </span>
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={3000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {productDetails.category.images.map(productDetailsImg => {
                  return (
                    <div>
                      <img src={productDetailsImg.imgsrc} alt="First slide" />
                    </div>
                  );
                })}
              </Carousel>
              <div className="productSliderButtonContainer">
                <button className="btn viewRange">
                  {productDetails.category.buttonText1}
                </button>
                <button className="btn view3D">
                  {productDetails.category.buttonText2}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("Store ---->", state.Reducer.productSlider);
  return {
    productSlider: state.Reducer.productSlider
  };
};

export default connect(mapStateToProps)(ProductSlider);
