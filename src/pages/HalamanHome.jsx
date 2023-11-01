import { useEffect, useRef, useState } from "react";
import MainSection from "../components/MainSection";

import PopularMovie from "../components/PopularMovie";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getPopularMovies } from "../redux/actions/movieActions";
import { useSelector, useDispatch } from "react-redux";

function HalamanHome() {
  const dispatch = useDispatch();

  const { popular } = useSelector((state) => state.movie);

  const linkRef = useRef(null);
  const [errors, setErrors] = useState({
    isError: false,
    message: null,
  });

  useEffect(() => {
    dispatch(getPopularMovies(setErrors, errors));
  }, []);

  if (errors.isError) {
    return <h1>{errors.message}</h1>;
  }

  if (popular.length === 0) {
    return <h1>Loading...</h1>;
  }

  // back to MainSection when on click text MovieList in Footer from homepage
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  //Carousel by react-slick
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    speed: 800,

    appendDots: (dots) => (
      <div className="relative">
        <ul className="flex items-center justify-center absolute bottom-10 lg:bottom-52 lg:mx-[550px] right-0 left-0">
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <div>
      <div className="w-full bg-black">
        <Slider {...settings}>
          {popular.map((movie) => (
            <div key={movie.id} ref={linkRef}>
              <MainSection
                trailer={movie.id}
                imageURL={
                  import.meta.env.VITE_BACKDROP_PATH + movie.backdrop_path
                }
                title={movie.title}
                overview={movie.overview}
              />
            </div>
          ))}
        </Slider>
      </div>
      <PopularMovie />
      <Footer linkRef={linkRef} goto={goto} />
    </div>
  );
}

export default HalamanHome;
