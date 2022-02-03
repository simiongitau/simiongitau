import React from 'react'

export default function Chat() {

    const [conversation, setConversation] = React.useState([
        {
            sender: "other",
            message: "How are you?"
        },
        {
            sender: "other",
            message: "good",
        },
        {
            sender: "me",
            message: "I am fine",
        },


    ])
    const [message, setMessage] = React.useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        //  
        setConversation([...conversation, message])
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="input message" className="py-2"  onChange={(e) => setMessage(e.target.value)} />
                <button type='submit' className="btn btn-danger" >send message</button>
            </form>

            <div className="bg-light col-6 my-3 rounded" style={{ height: "450px", overflowY: "scroll" }}>
                {
                    conversation.map(m => (
                        <div>
                            {
                                m.sender === "me" ?
                                    <div className=" bg-warning m-2 p-1 d-flex">
                                        <div className="m-3 bg-secondary p-3 rounded " style={{ width: "40%", justifyContent: "center" }}> {m.message}</div>
                                    </div> :
                                    <div className=" bg-warning m-2 p-1 d-flex">
                                        <div className="m-3 bg-secondary p-3 rounded" style={{ width: "40%", justifyContent: "end" }}> {m.message}</div>
                                    </div>


                            }
                        </div>
                    ))
                }
            </div>
        </div >
    )
}
