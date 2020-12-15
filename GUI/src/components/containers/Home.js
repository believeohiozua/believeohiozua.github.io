import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../base/NavBar'


export class Home extends Component {
    bgSwitch = () => {

        var switchchecker = document.getElementById("bg_switch_btn");
        if (switchchecker.checked) {
            document.getElementById("bg_switch_text").innerHTML = "Switch Dark Mode";
            document.getElementById("major").style.background = "#ffff";
            document.getElementById("textcolor").style.color = "black";
            document.getElementsByClassName("textcolor1")[0].style.color = "black";
            document.getElementsByClassName("textcolor2")[0].style.color = "black";
            document.getElementsByClassName("textcolor3")[0].style.color = "black";
            document.getElementsByClassName("textcolor4")[0].style.color = "black";
            document.getElementsByClassName("textcolor5")[0].style.color = "black";
            document.getElementById("stars").style.display = "none";

        } else {
            document.getElementById("bg_switch_text").innerHTML = "Switch Light Mode ";
            document.getElementById("major").style.background = "black";
            document.getElementById("textcolor").style.color = "#ffff";
            document.getElementsByClassName("textcolor1")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor2")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor3")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor4")[0].style.color = "#ffff";
            document.getElementsByClassName("textcolor5")[0].style.color = "#ffff";
            document.getElementById("stars").style.display = "block";
        }

    }
    render() {
        return (

            <div id="major">
                <canvas id="stars" style={{ position: "absolute" }}></canvas>
                <div className="" style={{ position: "relative", top: "55px" }}>

                    <div className="px-3 text-white row" style={{ width: "100%", overflowX: "hidden" }}>

                        <div className="col-10">
                            <p className="h3 textcolor" data-aos="fade-down" data-aos-delay="50" id="textcolor">The Big Dev. Zone</p>
                            <em style={{ fontSize: "10px" }} className="animated textcolor1" id="writer" data-aos="zoom-in" data-aos-delay="150"></em>
                        </div>

                        <div className="col-2">
                            <div>
                                <sup id="bg_switch_text" className="textcolor2">Switch Light Mode</sup>
                                <label className="switch flat">
                                    <input
                                        id="bg_switch_btn"
                                        type="checkbox"
                                        onChange={this.bgSwitch}
                                    />
                                    <span className="slider border"></span>
                                </label>
                            </div>
                        </div>
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

                <section className="section-content py-5">
                    {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Open modal for @fat</button>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button> */}

                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label for="recipient-name" className="col-form-label">Recipient:</label>
                                            <input type="text" className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="form-group">
                                            <label for="message-text" className="col-form-label">Message:</label>
                                            <textarea className="form-control" id="message-text" />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Send message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8  order-2 order-lg-1">
                                <div className="col-12 text-left section-title py-5 " data-aos="fade-up">
                                    <h2 className="">Get Started</h2>
                                </div>
                                <div>
                                    <div id="" className="faq section-bg " id="homecolaps">
                                        <div className="faq-list p-2">
                                            <ul>
                                                <li data-aos="fade-up border shadow" id="homecolaps_sub_sec">
                                                    <a data-toggle="collapse" className="collapse" href="#faq-list-1">
                                                        <p className="h4 border-bottom">
                                                            <h4><i className="la la-cog text-success"></i> Who We Are</h4>
                                                        </p>
                                                        <i className="bx bx-chevron-down icon-show"></i>
                                                        <i className="bx bx-chevron-up icon-close"></i>
                                                    </a>
                                                    <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
                                                        <div className="d-block p-lg-4 textcolor3">
                                                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                                            </div>
                                                    </div>
                                                </li>

                                                <li data-aos="fade-up" data-aos-delay="100" id="homecolaps_sub_sec">
                                                    <a data-toggle="collapse" href="#faq-list-2" className="collapsed">
                                                        <p className="h4 border-bottom">
                                                            <h4><i className="la la-cog text-success"></i> What We Do</h4>
                                                        </p>
                                                        <i className="bx bx-chevron-down icon-show"></i>
                                                        <i className="bx bx-chevron-up icon-close"></i></a>
                                                    <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                                                        <div className="d-block p-lg-4 textcolor4">
                                                            <p> Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida</p>
                                                            <div className="row">
                                                                <div className="pb-3 col-lg-3 col-md-4">
                                                                    <div className="text-center">
                                                                        <img src="static/img/webdev.jpg" alt="" className="img-fluid rounded-pill" />
                                                                        <figcaption id="resquest">
                                                                            <Link to="" className="text-center position-absolute">
                                                                                <span className="text-center btn btn-outline-success rounded-pill btn-sm">Resquest</span>
                                                                            </Link>
                                                                        </figcaption>
                                                                    </div>
                                                                </div>
                                                                <div className="pb-3 col-lg-3 col-md-4">
                                                                    <div className="">
                                                                        <img src="static/img/webdev.jpg" alt="" className="img-fluid rounded-pill" />
                                                                    </div>
                                                                </div>
                                                                <div className="pb-3 col-lg-3 col-md-4">
                                                                    <div className="">
                                                                        <img src="static/img/webdev.jpg" alt="" className="img-fluid rounded-pill" />
                                                                    </div>
                                                                </div>
                                                                <div className="pb-3 col-lg-3 col-md-4">
                                                                    <div className="">
                                                                        <img src="static/img/webdev.jpg" alt="" className="img-fluid rounded-pill" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </li>


                                                <li data-aos="fade-up" data-aos-delay="400" id="homecolaps_sub_sec">
                                                    <a data-toggle="collapse" href="#faq-list-5" className="collapsed">
                                                        <p className="h4 border-bottom">
                                                            <h4><i className="la la-cog"></i> Lets Get You Started</h4>
                                                        </p>

                                                        <i className="bx bx-chevron-down icon-show"></i>
                                                        <i className="bx bx-chevron-up icon-close"></i>
                                                    </a>
                                                    <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                                                        <div className="text-left">
                                                            {/* <div className="col-md-5 mx-auto">
                                                                <Link className="text-white btn btn-warning btn-sm rounded-pill">
                                                                    Get Started <i className="la la-angle-right"></i>
                                                                </Link>
                                                            </div> */}
                                                        </div>
                                                        <p className="d-block p-lg-4 textcolor5">
                                                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                                            </p>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="text-center pb-3">
                                            <Link to="" data-toggle="modal" data-target="#exampleModal" className="text-white btn btn-primary btn-sm rounded-pill">
                                                Get Started <i className="la la-angle-right"></i>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
                                <img src="static/img/bizcert.jpg" className="img-fluid animated" alt="" />
                            </div> */}
                            <div className="pt-2 col-md-4  order-1 order-lg-2 mx-auto text-center">
                                <div className="pt-lg-5 mt-lg-5 hero-img">
                                    <img src="static/img/bizcert.jpg" className="img-fluid" alt="" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-content py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-left section-title" data-aos="fade-up">
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

                <section className="section-content border">
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
