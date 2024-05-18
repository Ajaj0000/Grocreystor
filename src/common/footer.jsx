import React from "react";
import footlogo from "../images/logo - Copy.svg"
import google from "../images/app-store - Copy.jpg";
import media from "../images/google-play - Copy.jpg";
import payment from "../images/payment-method - Copy.png";
import { Link } from "react-router-dom";


function Footer() {
    const foot = [
        {
            hfoot: "Company",
            li1: "About us",
            li2: "Delivery Information",
            li3: "Privacy policy",
            li4: "Terms & condition",
            li5: "Contect us",
            li6: "Help center",
            li7: "Carrers",
        },
        {
            hfoot: "Account",
            li1: "Sing in",
            li2: "View cart",
            li3: "My Whislist",
            li4: "Track my order",
            li5: "Help ticket",
            li6: "Shipping detail",
            li7: "Product detail",
        },
        {
            hfoot: "Corporate",
            li1: 'Become a vendor',
            li2: "Farmhouse",
            li3: "Farmer",
            li4: "Farm condition",
            li5: "Farm conditions",
            li6: "Our supliers",
            li7: "Our promotion",
        },
        {
            hfoot: "Popular",
            li1: "Milkshake",
            li2: "Butter & marginixder",
            li3: "Eggs subtricter",
            li4: "Mrmalades",
            li5: "Chees",
            li6: "Butterscotch", 
            li7: "Tea 7 coffee",
        },
    ]
    return (
        <>
            <div className="main-footer">
                <div className="footer-center">
                    <div className="footer">
                        <img src={footlogo} alt="" />
                        <li>
                            <h1 id="webh1">Awesome grocery store</h1>
                            <h1 id="webh2">website template</h1></li>
                        <li>
                            <Link><i class="fa-solid fa-location-dot ficon"></i> <span>Address:</span></Link>
                            <p>5171 W Campbell Ave undefined Kent, United States</p>
                        </li>
                        <li>
                            <Link><i class="fa-solid fa-headphones ficon"></i> <span>Call us:</span></Link>
                            <p>(+91) - 540-025-124553</p>
                        </li>
                        <li>
                            <Link><i class="fa-solid fa-paper-plane ficon"></i> <span>Email:</span></Link>
                            <p>dummysale@Nest.com</p>
                        </li>
                        <li>
                            <Link><i class="fa-solid fa-clock ficon"></i> <span>Hours:</span></Link>
                            <p>10:00 - 18:00, Mon - Sat</p>
                        </li>
                    </div>
                    {
                        foot.map((items) => {
                            return (
                                <>
                                    <div className="footer">
                                        <h1 id="com-hfoot">{items.hfoot}</h1>
                                        <ul>
                                            <Link><li>{items.li1}</li></Link>
                                            <Link><li>{items.li2}</li></Link>
                                            <Link><li>{items.li3}</li></Link>
                                            <Link> <li>{items.li4}</li></Link>
                                            <Link><li>{items.li5}</li></Link>
                                            <Link><li>{items.li6}</li></Link>
                                            <Link><li>{items.li7}</li></Link>
                                        </ul>
                                    </div>
                                </>
                            )
                        })
                    }
                    <div className="footer-lite">
                        <h2>Install App</h2>
                        <h3>From app store $ google Play</h3>
                        <div className="media">
                            <img src={google} alt="media" />
                            <img src={media} alt="media" />
                        </div>
                        <h1>Secured payment</h1>
                        <h1>gateway</h1>
                        <div className="pay">
                            <img src={payment} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="foot-bottom-center">
                    <div className="b1">
                        <h4>© 2022, <span>Nest</span> - HTML Ecommerce Template</h4>
                        <h4>Copyright All right reserved By <span>Farman khan</span></h4>
                        <h4>Designed and Developed By <span>Farman khan</span></h4>
                    </div>
                    <div className="b2">
                        <div className="b2-lite">
                            <div className="call">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div className="call-text">
                                <h1>1800-888</h1>
                                <p>working 8:00-22:00</p>
                            </div>
                        </div>
                        <div className="b2-lite">
                            <div className="call">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div className="call-text">
                                <h1>1800-888</h1>
                                <p>Customer support 24/7</p>
                            </div>
                        </div>
                    </div>
                    <div className="b3">
                        <div className="b3-in">
                            <h1>Follow us</h1>
                            <div className="foll-icon">
                                <Link><i class="fa-brands fa-facebook f-icon" id="a"></i></Link>
                                <Link><i class="fa-brands fa-twitter f-icon" id="b"></i></Link>
                               <Link> <i class="fa-brands fa-instagram f-icon" id="c"></i></Link>
                                <Link><i class="fa-brands fa-youtube f-icon" id="d"></i></Link>
                            </div>
                        </div>
                        <h5>Upto 15% discount on your first subscription</h5>
                    </div>
                </div>
            </div>

        </>
    )
}
export { Footer }