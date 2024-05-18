import React from "react";
import provideimg from "../images/wave3.jpg"
import team1 from "../images/girl1.png"
import team2 from "../images/girl2.png"
import { Link } from "react-router-dom";


function Ourteam() {
    const mebmers = [
        {
            timg: `${team1}`,
            h1: "H. Merinda",
            post: "CEO & Co-Founder",
            memberf: <i class="fa-brands fa-facebook"></i>,
            membert: <i class="fa-brands fa-twitter"></i>,
            memberi: <i class="fa-brands fa-instagram"></i>,
            membery: <i class="fa-brands fa-youtube"></i>

        },
        {
            timg: `${team2}`,
            h1: "Dilan Specter",
            post: "Head Engineer",
            memberf: <i class="fa-brands fa-facebook"></i>,
            membert: <i class="fa-brands fa-twitter"></i>,
            memberi: <i class="fa-brands fa-instagram"></i>,
            membery: <i class="fa-brands fa-youtube"></i>

        },
    ]
    return (
        <>
            <div className="provide">
                <div className="provide-head">
                    <h1 id="team">Our Team</h1>
                    <img src={provideimg} alt="" />
                </div>
            </div>

            <div className="our-team">
                <div className="team-text">
                    <h5>Our Team</h5>
                    <h1>Meet Our Expert Team</h1>
                    <p>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                    <p>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                    <button>View All Members</button>
                </div>
                {
                    mebmers.map((data) => {
                        return (
                            <>
                            <div className="team-text">
                                    <div className="team-member">
                                        <img src={data.timg} alt="img" />
                                        <div className="employ-detail">
                                            <div className="employ">
                                                <h1>{data.h1}</h1>
                                                <h2>{data.post}</h2>
                                                <div className="member-id">
                                                    <Link>{data.memberf}</Link>
                                                    <Link>{data.membert}</Link>
                                                    <Link>{data.memberi}</Link>
                                                    <Link>{data.membery}</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export { Ourteam }