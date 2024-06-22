//single selection
//multi selecton
import { useState } from "react"
import data from "./data"
import "../accordian/style.css"

export default function Accordian() {
    const [selected, setselected] = useState(null)
    const [multiSelection, setMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId) {
        setselected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId)
        console.log(findIndexofCurrentId);
        if (findIndexofCurrentId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexofCurrentId, 1);
        setMultiple(cpyMultiple);

    }
    console.log(selected, multiple);
    return <div className="wrapper">
        <button onClick={() => setMultiSelection(!multiSelection)} >Enable Multi Selection</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            <div onClick={
                                multiSelection ?
                                    () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                multiSelection ?
                                    multiple.indexOf(dataItem.id) !== -1 &&
                                    <div className="content">
                                        {dataItem.answer}
                                    </div> :
                                    selected === dataItem.id && <div className="content">
                                        {dataItem.answer}
                                    </div>
                            }
                            {/* {
                                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className="content">
                                    {dataItem.answer}
                                </div> : null
                            } */}
                        </div>


                    )) : <div>No data Found</div>
            }
        </div>
    </div>

}


// export default function Accordian() {
//     const [click, setClick] = useState(null);
//     const [multiSelection, setMultiSelection] = useState(false)
//     const [multi, setMulti] = useState([])

//     function handleClick(currId) {
//         setClick(currId === click ? null : currId);
//     }
//     function handleMultiSelection() {
//         setMultiSelection(!multiSelection);
//     }

//     function handleMulti(currId) {
//         let cpyMulti = [...multi]
//         const findIndexofCurrentId = cpyMulti.indexOf(currId)
//         console.log(findIndexofCurrentId);
//         if (findIndexofCurrentId === -1) cpyMulti.push(currId)
//         else cpyMulti.splice(findIndexofCurrentId, 1);
//         setMulti(cpyMulti);
//     }
//     console.log(multi, click)

//     return <div className="wrapper">
//         <button className="btn" onClick={handleMultiSelection}>Enable Multi Selection</button>
//         {
//             data.map((dataItem) => {
//                 return <div key={dataItem.id} >
//                     <div className="content" onClick={multiSelection ? () => handleMulti(dataItem.id) : () => handleClick(dataItem.id)}>
//                         <div className="question">
//                             <div>
//                                 {dataItem.question}
//                             </div>
//                             <span>+</span>
//                         </div>
//                         {
//                             multiSelection ? multi.indexOf(dataItem.id) !== -1 && <div className="answer">{dataItem.answer}</div> : click === dataItem.id && <div className="answer">{dataItem.answer}</div>
//                         }
//                     </div>
//                 </div>
//             })
//         }
//     </div>
//}