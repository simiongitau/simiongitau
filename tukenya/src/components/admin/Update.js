import React from 'react'
import "./update.css"
export default function Update() {

    const onSubmit = () => {
        return "product succesfull updated"
    }

    console.log(onSubmit())

    return (
        <div className='updat'>

            <div>
                <center>update product</center>
                <form className="d-flex for">

                    <span className='mt-5 cat'> select categories    <select className="search">
                        <option value="firtilizer"></option>
                        <option value="firtilizer">firtilizer</option>
                        <option value="herbcide">herbcide</option>
                        <option value="seeds">seeds</option>
                        <option value="pestcide">pestcide</option>
                    </select>
                    </span>


                    <div className="m-3">
                        <li className="mt-3">productname:</li> <br />
                        <li>product link:</li> <br />
                        <li >price:</li> <br />
                        <li> product id:</li> <br />

                    </div>

                    <div className="m-4">
                        <input className=" p-2 form-control mb-4" type="text" /><br />
                        <input className=" p-2 form-control mb-4" type="text" /><br />
                        <input className=" p-2 form-control mb-4" type="text" /><br />
                        <input className=" p-2 form-control mb-4" type="text" /><br />

                        <center><button className='btn btn bg-primary mt-2 ml-5' onChange={onSubmit}>submit</button></center>

                    </div>

                    {/* {onSubmit()} */}



                </form>


            </div>
        </div>
    )
}
