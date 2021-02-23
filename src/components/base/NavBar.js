import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
    LangOptLg = (choice_lang_id) => {
        console.log(choice_lang_id)
        var choice_lang = document.getElementById(choice_lang_id).innerHTML;
        var selected_lang = document.getElementById("navbarDropdown");
        selected_lang.innerHTML = choice_lang;
    }
    LangOptSm = (choice_lang_id) => {
        console.log(choice_lang_id)
        var choice_lang = document.getElementById(choice_lang_id).innerHTML;
        var selected_lang = document.getElementById("selected_lang");
        selected_lang.innerHTML = choice_lang;
    }
    showMobileMenu = (e) => {
        e.preventDefault();

        let navshow = document.getElementById("mobile_nav")

        if (navshow.style.display == "none") {
            navshow.style.display = "block";
            navshow.style.transition = 'all .7s ease-out';


        } else {
            navshow.style.display = "none";
            navshow.style.transform = 'translateY(0px)';
        }

    }
    render() {
        return (
            <div>
                <nav className="d-none d-sm-none d-md-block col-md-11 mx-auto  fixed-top navbar navbar-expand-lg navbar-light bg-light" style={{
                    borderBottomRightRadius: "1em",
                    borderBottomLeftRadius: "1em"
                }}>
                    <div className="container-fluid">

                        <a className="navbar-brand" href="#">
                            <img
                                src="static/img/logo.svg"
                                width="100"
                                height="35"
                                alt=""
                                loading="lazy"
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="las la-bars"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link fw-bold small active" aria-current="page" href="#">BLOG</a>
                                </li>
                             &ensp;
                            <li className="nav-item">
                                    <a className="nav-link fw-bold small" href="#">CARGO</a>
                                </li>
                             &ensp;
                            <li className="nav-item">
                                    <a className="nav-link fw-bold small" aria-current="page" href="#">TRAVELLERS</a>
                                </li>
                             &ensp;
                            <li className="nav-item my-auto">
                                    <a className="btn btn-danger btn-sm rounded-pill" href="#">GET STARTED <i className="la la-angle-right"></i></a>
                                </li>
                            &ensp;
                            <li className="nav-item dropdown my-auto" style={{ width: "9em" }}>
                                    <a
                                        className="nav-link dropdown-toggle btn btn-outline-danger btn-sm rounded-pill"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        SELECT LANGUAGE
                                </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a id="lang_choice_1" onClick={() => { this.LangOptLg("lang_choice_1") }} className="dropdown-item" href="#">English</a></li>
                                        <li><a id="lang_choice_2" onClick={() => { this.LangOptLg("lang_choice_2") }} className="dropdown-item" href="#">Russian</a></li>
                                        <li><a id="lang_choice_3" onClick={() => { this.LangOptLg("lang_choice_3") }} className="dropdown-item" href="#">Spanish</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <nav className="d-lg-none d-md-none d-sm-block navbar  fixed-top navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <span className="" href="#">
                            <span>
                                <img
                                    className="rounded-circle border"
                                    src="static/img/logo.svg"
                                    width="50"
                                    height="45"
                                    alt=""
                                    loading="lazy"
                                />
                            </span>
                            &ensp;


                                <span className="nav-item dropdown my-auto">
                                <a
                                    className="text-dark"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <small id="selected_lang">
                                        <i className="flag flag-united-kingdom fs-3"></i>English
                                        </small>
                                    <i className="la la-angle-down"></i>

                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" id="lang_choice_1" href="#" onClick={(e) => { this.LangOptSm("lang_choice_1") }}>
                                            <i className="flag flag-united-kingdom"></i>English</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" id="lang_choice_2" href="#" onClick={(e) => { this.LangOptSm("lang_choice_2") }}>
                                            <i className="flag flag-russia"></i> Russian</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" id="lang_choice_3" href="#" onClick={(e) => { this.LangOptSm("lang_choice_3") }}>
                                            <i className="flag flag-spain"></i>Spanish</a>
                                    </li>
                                </ul>
                            </span>


                        </span>

                        <a className="text-danger small fw-bold" aria-current="page" href="#">GET STARTED</a>

                        <a href="" onClick={this.showMobileMenu} className="navbar-toggler"><i className="las la-bars"></i></a>
                    </div>
                </nav>


                <nav className="d-lg-none d-md-none d-sm-block navbar fixed-bottom navbar-expand" id="mobile_nav" style={{ display: "none" }}>
                    <div className="container-fluid p-0 m-0">

                        <div className="collapse navbar-collapse p-0 m-0" id="navbarTogglerDemo01">

                            <ul className="navbar-nav mx-auto w-100">
                                <li className="nav-item text-center mx-auto">
                                    <img src="static/img/fix_mobile_footer/Frame 2.png" alt="" height="20" width="20" />
                                    <figcaption>
                                        <sup>
                                            Travellers
                                        </sup>
                                    </figcaption>
                                </li>
                                <li className="nav-item text-center mx-auto">
                                    <img src="static/img/fix_mobile_footer/Subtract.png" alt="" height="20" width="20" />
                                    <figcaption>
                                        <sup>
                                            Air Cargo
                                        </sup>
                                    </figcaption>

                                </li>
                                <li className="nav-item text-center mx-auto">
                                    <img src="static/img/fix_mobile_footer/Subtract_1.png" alt="" height="20" width="20" />
                                    <figcaption>
                                        <sup>
                                            Container
                                        </sup>
                                    </figcaption>

                                </li>
                                <li className="nav-item text-center mx-auto">
                                    <img src="static/img/fix_mobile_footer/Rectangle_609.png" alt="" height="20" width="20" className="border" />
                                    <figcaption>
                                        <sup>
                                            News
                                        </sup>
                                    </figcaption>

                                </li>
                                <li className="nav-item text-center">
                                    <img src="static/img/fix_mobile_footer/Frame 627.png" alt="" />
                                    <figcaption>
                                        <sup>
                                            Region
                                        </sup>
                                    </figcaption>

                                </li>
                                <li className="nav-item text-center mx-auto">
                                    <img src="static/img/fix_mobile_footer/Frame 628.jpg" alt="" />
                                    <figcaption>
                                        <sup>
                                            Resources
                                        </sup>
                                    </figcaption>

                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}

export default NavBar;
