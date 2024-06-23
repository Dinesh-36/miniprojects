import React, { useEffect, useState } from 'react'
import "../image-slider/style.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
const ImageSlider = ({ url, page = 1, limit = 5 }) => {

    const [image, setImage] = useState([]);
    const [currentSlide, setCurrenSlide] = useState(0);
    const [errorMsg, SetErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchUrl(url) {
        try {
            setLoading(true);
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImage(data);
                setLoading(false);
            }
        } catch (e) {
            SetErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== '') fetchUrl(url)
    }, [url])

    if (loading) {
        return <div>Loading Data...Please Wait...</div>
    }
    if (errorMsg !== null) {
        return <div>Error Occured {errorMsg} </div>

    }
    function handlePrevious() {
        return setCurrenSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1)
    }

    function handleNext() {
        return setCurrenSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1)
    }

    return (
        <div className='container'>
            <BsArrowLeftCircleFill
                onClick={handlePrevious}
                className='arrow left-arrow'
            />
            {image && image.length ?
                image.map((items, index) => (
                    <img
                        key={items.id}
                        src={items.download_url}
                        alt="images"
                        className={currentSlide === index ? "current-image" : "current-image hide-image"}
                    />
                ))
                : null}
            <BsArrowRightCircleFill
                className='arrow right-arrow'
                onClick={handleNext} />
            <span className='circle-indicatos'>
                {
                    image && image.length ? image.map((_, index) => <button
                        key={index}
                        className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                        onClick={() => setCurrenSlide(index)}
                    ></button>
                    ) : null
                }
            </span>
        </div>
    )
}

export default ImageSlider