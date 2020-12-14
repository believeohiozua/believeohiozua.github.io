import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../base/NavBar'


export class Home extends Component {
    render() {
        return (

            <div>
                <canvas id="stars" style={{ position: "absolute" }}></canvas>
                <div className="" style={{ position: "relative", top: "55px" }}>
                    <div className="px-3 text-white">
                        <p className="h3" data-aos="fade-down" data-aos-delay="50">The Big Dev. Zone</p>
                        <em className="h6" id="writer" data-aos="zoom-in" data-aos-delay="150"></em>
                    </div>
                    <svg className="hero-waves"
                        xmlns=""
                        xmlnsXlink=""
                        viewBox="0 24 200 28 "
                        preserveAspectRatio="none">
                        <defs>
                            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="wave1">
                            <use xlinkHref="#wave-path" x="50" y="3" fill="#b57afc" />
                        </g>
                        <g className="wave2">
                            <use xlinkHref="#wave-path" x="50" y="0" fill="#2c71fc" />
                        </g>
                        <g className="wave3">
                            <use xlinkHref="#wave-path" x="50" y="9" fill="#62c8f8" />
                        </g>
                    </svg>
                </div>

                <NavBar />

                <section className="section-content py-5 hero">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-8  order-2 order-lg-1">
                                <div className="col-12 text-left section-title py-5" data-aos="fade-up">
                                    <h2>Get Started</h2>
                                </div>
                                <div>
                                    <div id="" className="faq section-bg">
                                        <div className="faq-list p-2" style={{ borderRadius: "1em" }}>
                                            <ul>
                                                <li data-aos="fade-up">
                                                    <i className="la la-cog text-success"></i> <a data-toggle="collapse" className="collapse" href="#faq-list-1">
                                                        Who We Are
                                                        <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                                    <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
                                                        <p>
                                                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                                            </p>
                                                    </div>
                                                </li>

                                                <li data-aos="fade-up" data-aos-delay="100">
                                                    <i className="la la-cog text-success"></i> <a data-toggle="collapse" href="#faq-list-2" className="collapsed">
                                                        What We Do
                                                            <i className="bx bx-chevron-down icon-show"></i>
                                                        <i className="bx bx-chevron-up icon-close"></i></a>
                                                    <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                                                        <p>
                                                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                                            </p>
                                                    </div>
                                                </li>


                                                <li data-aos="fade-up" data-aos-delay="400">
                                                    <i className="la la-cog text-success"></i> <a data-toggle="collapse" href="#faq-list-5" className="collapsed">
                                                        Lets Get You Started
                                                            <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                                    <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                                                        <div className="text-left">
                                                            {/* <div className="col-md-5 mx-auto">
                                                                <Link className="text-white btn btn-warning btn-sm rounded-pill">
                                                                    Get Started <i className="la la-angle-right"></i>
                                                                </Link>
                                                            </div> */}
                                                        </div>
                                                        <p>

                                                            Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                                                        </p>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="text-center pb-3">
                                            <Link to="" className="text-white btn btn-primary btn-sm rounded-pill">
                                                Get Started <i className="la la-angle-right"></i>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <div class="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
                                <img src="static/img/bizcert.jpg" class="img-fluid animated" alt="" />
                            </div> */}
                            <div className="col-md-4  order-1 order-lg-2 mx-auto text-center">
                                <div className="pt-lg-5 mt-lg-5 hero-img">
                                    <img src="static/img/bizcert.jpg" className="img-fluid animated" alt="" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-content py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-left section-title py-5" data-aos="fade-up">
                                <h2>Business</h2>
                            </div>

                            <div className="col-md-4">
                                <div className="card border border-warning text-center p-2">
                                    <Link to="" className="text-dark">Track Project </Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border border-info text-center p-2">
                                    <Link to="" className="text-dark"> Join Our Team</Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border border-success text-center p-2">
                                    <Link to="" className="text-dark"> Invest In Us</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section-content py-5 border">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-left section-title py-5" data-aos="fade-up">
                                <h2>Follow Us</h2>
                            </div>

                            <div className="col-md-4 border-right">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="">
                                            <Link to="" className="text-white"><i className="bg-primary border rounded-circle p-4 la la-facebook text-prmary"></i></Link>
                                        </div>
                                        <p>@ease4life</p>
                                    </div>
                                    <div className="col-3">
                                        <div className="">
                                            <Link to="" className="text-white"><i className="bg-info border rounded-circle p-4 la la-twitter text-prmary"></i></Link>
                                        </div>
                                        <p>#ease4life</p>
                                    </div>
                                    <div className="col-3">
                                        <div className="">
                                            <Link to="" className="text-primary"><i className="border rounded-circle p-4 la la-linkedin text-prmary"></i></Link>
                                        </div>
                                        <p>#ease4life</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>


        )
    }
}

export default Home;
