import "../star-rating/style.css"
import { FaStar } from "react-icons/fa"
import { useState } from "react"


export default function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currIndex) {
        setRating(currIndex);
    }
    function handleMouseEnter(currIndex) {
        setHover(currIndex);
    }
    function handleMouseLeave() {
        setHover(rating);
    }

    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((items, index) => {
                index += 1
                return <FaStar
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={40}

                />
            })
        }
    </div>

}   