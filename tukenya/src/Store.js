
import Axios from 'axios'
import { useState } from 'react'
function Store() {



    const handData = () => {

        Axios.get("http://localhost:3001/getProduct").then((respond) => {
            console.log(respond)

        })

    }

    return (<div>{handData()}</div>)
}
export { Store }
