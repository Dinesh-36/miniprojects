import Accordian from "./components/accordian"
import RandomColor from "./components/color-generator"
import ImageSlider from "./components/image-slider/ImageSlider"
import StarRating from "./components/star-rating"
function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={8} /> */}
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={'1'}
        limit={'10'}
      />
    </>
  )
}

export default App
