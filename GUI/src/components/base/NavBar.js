import React, { Component } from 'react';

export class NavBar extends Component {

    handleScroll = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("myNav").style.background = "#2c71fc";
            document.getElementById("myNav").classList.remove("border");
        } else {
            document.getElementById("myNav").style.background = "";
            document.getElementById("myNav").classList.add("border");

        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    render() {
        // window.addEventListener('scroll', this.handleScroll, true);
        return (


            <nav className="navbar navbar-expand-lg navbar-dark sticky-top border" id="myNav">
                <div className="container">
                    <a className="navbar-brand" href="#">Ease4Life</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse onmob" id="main_nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link navactive" href="#"> Home </a></li>
                            <li className="nav-item"><a className="nav-link navactive" href="#"> About US </a></li>
                            <li className="nav-item"><a className="nav-link navactive" href="#"> Products </a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link navactive  dropdown-toggle" href="#" data-toggle="dropdown" style={{ outline: "green", border: "0px" }}> Business </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="dropdown-item rounded-pill" href="#"> Client</a></li>
                                    <li><a className="dropdown-item rounded-pill" href="#"> Developer </a></li>
                                    <li><a className="dropdown-item rounded-pill" href="#"> Staff </a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link navactive" href="#"> contact </a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

export default NavBar;
