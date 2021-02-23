import React, { Component } from 'react'
import NavBar from "../base/NavBar";
export class SideBar extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div data-component="sidebar" id="mysidebar"> 
                    <div className="sidebar card">
                        <ul className="list-group flex-column d-inline-block first-menu">
                            <li className="list-group-item pl-3 py-2">
                                <a href="#"><i className="la la-user-o la-lg" aria-hidden="true"><span className="ml-2 align-middle">Reporting</span></i></a>

                                <ul className="list-group flex-column d-inline-block submenu">
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Dashboard</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow"></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Home</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">My Sites</a>
                                            </li>
                                        </ul>

                                    </li>

                                    <li className="list-group-item pl-4">
                                        <a href="">SEO</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '113px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Dashboard</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Titles & Metas</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Social</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">XML Sitemaps</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Advanced</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Tools</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Search Console</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Go Premium</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Manual</a>
                                            </li>
                                        </ul>

                                    </li>
                                </ul>
                            </li>

                            <li className="list-group-item pl-3 py-2">
                                <a href="#"><i className="la la-user-o la-lg" aria-hidden="true"><span className="ml-2 align-middle">Content</span></i></a>
                                <ul className="list-group flex-column d-inline-block submenu">
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Posts</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow"></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">All Posts</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Add New</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Categories</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Tags</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Blog Assist</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '114px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Add New Blog Post</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Feed Sources</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Add New Feed Source</a>
                                            </li>
                                        </ul>
                                    </li>


                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Pages</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '166px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">All Pages</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Add New</a>
                                            </li>
                                        </ul>
                                    </li>


                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Area Content</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '220px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">All Cities</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Add New City</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">All Neighborhoods</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Add New Neighborhood</a>
                                            </li>
                                        </ul>
                                    </li>


                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Manual Listings</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '272px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">View All Listings</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Add New Listing</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Status</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Locations</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Property Types</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Import Listing</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Testimonials</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '323px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">View All</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Add New</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Categories</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Team Members</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '377px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">All Members</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Add New Member</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Designations</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Specialties</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Areas</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">All Locations</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Add New Location</a>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </li>

                            <li className="list-group-item pl-3 py-2">
                                <a href="#">
                                    <i className="la la-user-o la-lg" aria-hidden="true"><span className="ml-2 align-middle">Engagement</span></i>
                                </a>
                                <ul className="list-group flex-column d-inline-block submenu">

                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Comments</a>
                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow"></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Comments</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Forms</a>
                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '114px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">All Forms</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">New Form</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">All Entries</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Gravity Forms</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Import/Export</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Gravity Forms Tutorials</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Home Valuation</a>
                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '166px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">View All Leads</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>


                            <li className="list-group-item pl-3 py-2">
                                <a href="#"><i className="la la-user-o la-lg" aria-hidden="true"><span className="ml-2 align-middle">Image Center</span></i></a>

                                <ul className="list-group flex-column d-inline-block submenu">
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Media Library</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow"></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Media Library</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Add New</a>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Soliloquy Slider</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '114px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">All Sliders</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Add New</a>
                                            </li>
                                        </ul>

                                    </li>
                                </ul>
                            </li>

                            <li className="list-group-item pl-3 py-2">
                                <a href="#"><i className="la la-user-o la-lg" aria-hidden="true"><span className="ml-2 align-middle">Settings</span></i></a>
                                <ul className="list-group flex-column d-inline-block submenu">
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Users</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow"></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">All Users</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Add New</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Your Profile</a>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">AgentFire Settings</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '114px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Home Valuation</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Testimonials</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Team Members</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Area Content</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Manual Listings</a>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Grids Settings</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '166px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Ess. Grid Search Settings</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Ess. Grid Global Settings</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Plugin Settings</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '220px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Soliloquy</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Flickr - Pick a Picture</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Google Analytics</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Google Maps</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">JackBox</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Media</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">No Page Comment</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Post Types Order</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Shortcode any widget</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">WP RSS Images</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">SNAP</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">WP Sitemap Page</a>
                                            </li>
                                        </ul>


                                    </li>
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">WordPress Settings</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '272px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">General</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Discussion</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Reading</a>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Re-Order</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '323px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Posts</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Pages</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Media Library</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Blog Assist</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Area Content</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Manual Listings</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Testimonials</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Team Members</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Flyouts</a>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Site Appearance</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '377px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Widgets</a>
                                            </li>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Menus</a>
                                            </li>
                                        </ul>

                                    </li>
                                </ul>

                            </li>

                            <li className="list-group-item pl-3 py-2">
                                <a href="#"><i className="la la-user-o la-lg" aria-hidden="true"><span className="ml-2 align-middle">Support</span></i></a>
                                <ul className="list-group flex-column d-inline-block submenu">
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Training</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow"></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Video Tutorials</a>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Tutorials</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '114px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Help Desk</a>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="list-group-item pl-4">
                                        <a href="#" className="">Ask a Question</a>

                                        <ul className="list-group flex-column d-inline-block sub-submenu">
                                            <span className="arrow" style={{ top: '166px' }}></span>
                                            <li className="list-group-item pl-4">
                                                <a href="#">Send Support Request</a>
                                            </li>
                                        </ul>

                                    </li>
                                </ul>

                            </li>


                        </ul>
                    </div>
                </div>


            </div>
        )
    }
}

export default SideBar;
