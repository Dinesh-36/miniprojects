import { useEffect, useState } from "react"
import "../color-generator/style.css"

export default function RandomColor() {
    const [randomColor, setRandomColor] = useState("hex")
    const [color, setColor] = useState("#fff");


    function colorPicker(length) {
        return Math.floor(Math.random() * length)
    }

    function randomHexColorGenerator() {
        const color = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
        let Hex = "#"

        for (let i = 0; i < 6; i++) {
            Hex += color[colorPicker(color.length)]
        }
        setColor(Hex);
    }

    function randomRgbColorGenerator() {
        const r = colorPicker(256)
        const g = colorPicker(256)
        const b = colorPicker(256)
        setColor(`rgb(${r},${g},${b})`);

    };
    useEffect(() => {
        if (randomColor === "rgb") {
            randomRgbColorGenerator()
        } else {
            randomHexColorGenerator()
        }
    }, [randomColor]);

    return <div className="container" style={{
        background: color
    }}>
        <div className="btnn">
            <button onClick={() => setRandomColor("rgb")}>Generate RGB Color</button>
            <button onClick={() => { setRandomColor("hex") }}>Generate HEX Color</button>
            <button onClick={randomColor === "hex" ? randomHexColorGenerator : randomRgbColorGenerator}>Generate Random color</button>
        </div>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "95%",
            color: "#fff"


        }}>
            <h3>{randomColor === "rgb" ? 'RGB Color' : "HEX Color"}</h3>
            <h1 style={{
                marginTop: "0px"
            }}>{color}</h1>
        </div>

    </div>
}