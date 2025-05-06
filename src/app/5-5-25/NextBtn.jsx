import React, { Children } from 'react'

function NextBtn({ onNextClick }) {
    return (
        <div>
            <button onClick={onNextClick}>
                Next
            </button>
        </div>
    )
}

export default NextBtn
