import React, { useState } from 'react'
import { data } from './data'
import NextBtn from './NextBtn';

function Card() {

    const [index, setIndex] = useState(0);

    const hasNext = index < data.length - 1;

    const handleNextClick = () => {
        if (hasNext) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }

    let DATA = data[index];

    return (
        <div>
            <NextBtn onNextClick={handleNextClick} />

            <h3>({index + 1} / 5)</h3>
            <h1><b>Auther : </b>{DATA.author}</h1>
            <p><b>Description : </b>{DATA.description}</p>
            <img src={DATA.image} alt="auther image" width={500} />
            <h2><b>Book name : </b>{DATA.book_name}</h2>
            <b>Summery : <i>{DATA.summary}</i></b>
            <br />
            <br />
            <small><b>Publication Date : </b>{DATA.publication_date}</small>
        </div>
    )
}

export default Card
