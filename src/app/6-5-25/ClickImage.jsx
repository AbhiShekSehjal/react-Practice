import React from 'react'

function ClickImage({ clickImage, setClickImage }) {
    const styles = {
        radius: {
            borderRadius: "50%",
            objectFit: "cover"
        }
    }

    const handleChange = () => {
        setClickImage((prev) => !prev);

    }

    return (
        <div >
            <img
                style={clickImage ? styles.radius : null}
                onClick={handleChange}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUw2Hi7dZe3C8dp1Vq6VCWZ_orvTN1emkdA&s"
                alt=""
                height={200} />
        </div >
    )
}

export default ClickImage
