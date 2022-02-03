import React, { Component } from 'react'
import "./aboutus.css"
import img from '../images/about1.jpg'
import img1 from '../images/about2.jpg'
export default class Aboutus extends Component {

    render() {
        return (
            <div className="aboutusx">
                <div className="image">

                    <p className="m-4">
                        kenya agro enterprise is leading company that deal with selling of agricultural products.we sells five<br /> categories of product
                        that is ,fertilizer,herbcide,pestcide,seeds.we also facilitate<br /> transportation of product to intended customer.our products are
                        certified by KEB thus guarantee<br /> customer that our product are of high quality.due to our loyalty we are recognised all over the country<br />
                        and our system are reliable for effective communication.our mission not only selling products but also cooperlating with farmer<br />
                        for maxmum yield.we have agriculture experts who facilitates farmer and also educate them on best method of farming and kind
                        of product that perform well depending on cliemate of region

                    </p>
                    <div>
                        <img src={img1} alt="farmer photo" height="300px" width="700px  " className="m-4" />
                    </div>
                </div>

                <div className="information">
                    <div>
                        <img src={img} alt="expert photo" height="300px" width="700px" className="m-4" />
                    </div>
                    <p className="m-4">
                        due to our presence and more clossly to the farmer.farmers have acknowledge and apreciate our effort toward success.<br />
                        our store are also located in every county giving a farmer assurance that whe he order he will receive his product on time<br />
                        we also call the order to confer that he have receive products.<br />
                        due to our presence and more clossly to the farmer.farmers have acknowledge and apreciate our effort toward success.<br />
                        our store are also located in every county giving a farmer assurance that whe he order he will receive his product on time<br />






                    </p>
                </div>



            </div>
        )
    }
}

