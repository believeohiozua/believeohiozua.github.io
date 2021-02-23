import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import SelectCountry from "./SelectCountry"
import NavBar from "../base/NavBar";

import Footer from "../base/Footer";
import { Helmet } from "react-helmet";
export class Home extends Component {

    componentWillMount() {
        var loadjs = require('loadjs');
        loadjs('static/js/custom.js', function () {
            $(document).ready(function () {

            });
        })

    }
    render() {
        var title_tag = document.getElementById('title_tag');
        if (title_tag) {
            title_tag.innerHTML = "Afribaggage: HOME"
        }
        return (
            <section id="section_sec">
                <NavBar />
                <main id="main_sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="main_video_sec">
                                    <iframe
                                        title="about-video"
                                        id="main_video"
                                        src="https://www.youtube.com/embed/GWGbOjlJDkU"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen={true}
                                        height="300"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="px-lg-3">
                                    <h1 className="fs-1 fw-bold" style={{ fontFamily: "unset", color: "#0a143a" }}>
                                        3 Shipping options that gets you cheap rates
                                  </h1>
                                    <p className="fs-4 text-dark">
                                        Afribaggage is a solution provider helping improve international shipping
                                        and providing earning opportunities for <Link to="#" className="page_flag">travelers</Link>
                                        and <Link to="#" className="page_flag">Carriers</Link>
                                    </p>
                                    <p className="py-2 fs-4 text-dark fw-bold">
                                        All-in-one shipping tool set:
                                    </p>
                                    <ul style={{ listStyle: "none" }} className="p-0 m-0">
                                        <li className="py-1">
                                            <img src="static/img/home_list/1.svg" alt="" />
                                            &ensp;
                                            <Link className="text-dark" to="#" >Share a container</Link>
                                        </li>
                                        <li className="py-1">
                                            <img src="static/img/home_list/2.svg" alt="" />
                                            &ensp;
                                            <Link className="text-dark" to="#" >Share a unit load device</Link>
                                        </li>
                                        <li className="py-1">
                                            <img src="static/img/home_list/3.svg" alt="" />
                                            &ensp;
                                            <Link className="text-dark" to="#" >&ensp; Share a travellers luggage space</Link>
                                        </li>
                                        <li className="py-1">
                                            <img src="static/img/home_list/4.svg" alt="" />
                                            &ensp;
                                            <Link className="text-dark" to="#" >Make money as a carrier or Traveller</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="row pb-4" id="lg_to_top">
                            <div className="col-lg-4 order-2 order-lg-1">
                                <div className="row border bg-white py-3 shadow" style={{ borderRadius: "1em" }}>
                                    <div className="col-5 card">
                                        <div className="row">
                                            <div className="col-3">
                                                <img src="static/img/home_list/reviewers.png" alt="" height="60" width="60" className="" />
                                            </div>
                                            <div className="col-3">
                                                <img src="static/img/home_list/reviewers.png" alt="" height="60" width="60" className="" />
                                            </div>
                                            <div className="col-3">
                                                <img src="static/img/home_list/reviewers.png" alt="" height="60" width="60" className="" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div>
                                            <i className="la la-star page_flag fs-4"></i>
                                            <i className="la la-star page_flag fs-4"></i>
                                            <i className="la la-star page_flag fs-4"></i>
                                            <i className="la la-star page_flag fs-4"></i>
                                            <i className="la la-star page_flag fs-4"></i>
                                        </div>
                                        <div className="text-dark">
                                            <p className="fs-5">254+ users already
                                            <br />
                                                <small> use <span className="page_flag">Afribaggage</span></small>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10 order-1 order-lg-2 mx-auto bg-white border my-5 p-4" style={{ borderRadius: "1em" }}>
                                <div className="row pb-4">
                                    <div className="col-md-6">
                                        <span className="text-start text-dark fs-6">
                                            Sign up for Afribaggage
                                        </span>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="text-start fs-6 text-muted">Connect with</span> <Link to="">Google</Link>
                                    </div>
                                </div>
                                <div className="row mx-auto">
                                    <div className="col-md-5">
                                        <p>
                                            <sub className="">Email address</sub>
                                        </p>
                                        <div className="form-outline col-10">
                                            <input
                                                type="email"
                                                id="form7Example1"
                                                className="w-100"

                                                placeholder=" your@email.com"
                                                style={{
                                                    borderRadius: "7px",
                                                    height: "45px",
                                                    outline: "none",
                                                    border: "solid 1px #b5c1ce"
                                                }} />
                                        </div>

                                    </div>
                                    <div className="col-md-5">
                                        <div className="text-dark fs-6">

                                            <p>
                                                <sub className="">What is your phone number?</sub>
                                            </p>

                                            <div className="form-outline" style={{
                                                borderRadius: "7px",
                                                height: "45px",
                                                outline: "none",
                                                border: "solid 1px #b5c1ce",
                                                width: "83%"
                                            }} >
                                                <div className="input-group row">
                                                    <div className="col-4">
                                                        <SelectCountry />
                                                    </div>
                                                    <div className="col-8">
                                                        <input
                                                            className="form-control"
                                                            name=""
                                                            value={false}
                                                            type="number"
                                                            placeholder=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="text-center pt-lg-5 pt-3">
                                            <button className="btn btn-lg text-white disabled" style={{ background: 'rgb(128, 128, 128)' }}>SIGN UP</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
                <footer className="footer">
                    <Footer />
                </footer>
            </section >
        )
    }
}

export default Home;
