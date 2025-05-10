import React from 'react'
import { useState } from 'react'

function Reacting() {

    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("typing");
    const [sending, setSending] = useState(false)

    if (status === "success") {
        return (
            <>
                <h1>That's right</h1>
                <p>Tip : Refresh the page to go back!</p>
            </>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");
        setSending(true)
        try {
            await formSubmit(answer);
            setStatus("success");
        } catch (err) {
            setStatus("typing");
            setSending(false)
            setError(err);
        }
    }

    return (
        <div>
            <h1>2 + 2 = ?</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    disabled={status === "submitting"}
                />
                <br />
                <br />
                <button
                    type='submit'
                    disabled={status === "submitting" || answer.length === 0}
                >
                    Submit
                </button>

                {sending &&
                    <p>Sending ......</p>
                }

                {error !== null &&
                    <p style={{ color: "red" }}>{error.message}</p>
                }
            </form>
        </div>
    )
}

const formSubmit = async (answer) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Number(answer) !== 4) {
                reject(new Error("Wrong answer, please try again!"))
            } else {
                resolve();
            }
        }, 2000);
    })
}

export default Reacting
