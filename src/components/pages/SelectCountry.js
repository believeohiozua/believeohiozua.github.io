import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class SelectCountry extends Component {
    render() {
        return (

            <div className="wrapper">
                <dl id="country-select" className="dropdown">
                    <dt><Link to="#" onClick={(e) => { e.preventDefault() }} ><span><span style={{ backgroundPosition: "0px -1694px" }}></span><span>India</span><span>+91</span></span></Link></dt>
                    <dd>
                        <ul style={{ display: 'none' }}>
                            <li><Link to="#" cunt_code="+91" onClick={this.selecteCountry}><span style={{ backgroundPosition: "0px -1694px" }}></span><span>India</span><span>+91</span></Link></li>
                            <li><Link to="#" cunt_code="" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1694px" }}></span><span>India-Tollfree</span><span></span></Link></li>
                            <li><Link to="#" cunt_code="+1" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -44px" }}></span><span>United States</span><span>+1</span></Link></li>
                            <li><Link to="#" cunt_code="+93" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2311px" }}></span><span>Afghanistan</span><span>+93</span></Link></li>
                            <li><Link to="#" cunt_code="+355" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1034px" }}></span><span>Albania</span><span>+355</span></Link></li>
                            <li><Link to="#" cunt_code="+213" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -528px" }}></span><span>Algeria</span><span>+213</span></Link></li>
                            <li><Link to="#" cunt_code="+1684" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1562px" }}></span><span>American Samoa</span><span>+1684</span></Link></li>
                            <li><Link to="#" cunt_code="+376" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -594px" }}></span><span>Andorra</span><span>+376</span></Link></li>
                            <li><Link to="#" cunt_code="+244" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1947px" }}></span><span>Angola</span><span>+244</span></Link></li>
                            <li><Link to="#" cunt_code="+1264" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1980px" }}></span><span>Anguilla</span><span>+1264</span></Link></li>
                            <li><Link to="#" cunt_code="+1268" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -869px" }}></span><span>Antigua and Barbuda</span><span>+1268</span></Link></li>
                            <li><Link to="#" cunt_code="+54" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2377px" }}></span><span>Argentina</span><span>+54</span></Link></li>
                            <li><Link to="#" cunt_code="+374" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -176px" }}></span><span>Armenia</span><span>+374</span></Link></li>
                            <li><Link to="#" cunt_code="+297" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -792px" }}></span><span>Aruba</span><span>+297</span></Link></li>
                            <li><Link to="#" cunt_code="+247" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -55px" }}></span><span>Ascension Island</span><span>+247</span></Link></li>
                            <li><Link to="#" cunt_code="+61" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1716px" }}></span><span>Australia</span><span>+61</span></Link></li>
                            <li><Link to="#" cunt_code="+43" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1331px" }}></span><span>Austria</span><span>+43</span></Link></li>
                            <li><Link to="#" cunt_code="+973" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1496px" }}></span><span>Bahrain</span><span>+973</span></Link></li>
                            <li><Link to="#" cunt_code="+880" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1771px" }}></span><span>Bangladesh</span><span>+880</span></Link></li>
                            <li><Link to="#" cunt_code="+1246" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1573px" }}></span><span>Barbados</span><span>+1246</span></Link></li>
                            <li><Link to="#" cunt_code="+375" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1100px" }}></span><span>Belarus</span><span>+375</span></Link></li>
                            <li><Link to="#" cunt_code="+32" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px 0px" }}></span><span>Belgium</span><span>+32</span></Link></li>
                            <li><Link to="#" cunt_code="+501" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -484px" }}></span><span>Belize</span><span>+501</span></Link></li>
                            <li><Link to="#" cunt_code="+229" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1298px" }}></span><span>Benin</span><span>+229</span></Link></li>
                            <li><Link to="#" cunt_code="+1441" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1914px" }}></span><span>Bermuda</span><span>+1441</span></Link></li>
                            <li><Link to="#" cunt_code="+975" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1848px" }}></span><span>Bhutan</span><span>+975</span></Link></li>
                            <li><Link to="#" cunt_code="+591" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1650px" }}></span><span>Bolivia</span><span>+591</span></Link></li>
                            <li><Link to="#" cunt_code="+599" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2719px" }}></span><span>Bonaire, Sint Eustatius</span><span>+599</span></Link></li>
                            <li><Link to="#" cunt_code="+387" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1584px" }}></span><span>Bosnia and Herzegovina</span><span>+387</span></Link></li>
                            <li><Link to="#" cunt_code="+267" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2707px" }}></span><span>Botswana</span><span>+267</span></Link></li>
                            <li><Link to="#" cunt_code="+55" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -770px" }}></span><span>Brazil</span><span>+55</span></Link></li>
                            <li><Link to="#" cunt_code="+673" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1683px" }}></span><span>Brunei</span><span>+673</span></Link></li>
                            <li><Link to="#" cunt_code="+359" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2586px" }}></span><span>Bulgaria</span><span>+359</span></Link></li>
                            <li><Link to="#" cunt_code="+226" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -726px" }}></span><span>Burkina Faso</span><span>+226</span></Link></li>
                            <li><Link to="#" cunt_code="+257" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1892px" }}></span><span>Burundi</span><span>+257</span></Link></li>
                            <li><Link to="#" cunt_code="+855" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -242px" }}></span><span>Cambodia</span><span>+855</span></Link></li>
                            <li><Link to="#" cunt_code="+237" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2057px" }}></span><span>Cameroon</span><span>+237</span></Link></li>
                            <li><Link to="#" cunt_code="+1" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1375px" }}></span><span>Canada</span><span>+1</span></Link></li>
                            <li><Link to="#" cunt_code="+238" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2652px" }}></span><span>Cape Verde</span><span>+238</span></Link></li>
                            <li><Link to="#" cunt_code="+1345" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -308px" }}></span><span>Cayman Islands</span><span>+1345</span></Link></li>
                            <li><Link to="#" cunt_code="+236" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1837px" }}></span><span>Central African Republic</span><span>+236</span></Link></li>
                            <li><Link to="#" cunt_code="+235" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -814px" }}></span><span>Chad</span><span>+235</span></Link></li>
                            <li><Link to="#" cunt_code="+56" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1342px" }}></span><span>Chile</span><span>+56</span></Link></li>
                            <li><Link to="#" cunt_code="+86" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -825px" }}></span><span>China</span><span>+86</span></Link></li>
                            <li><Link to="#" cunt_code="+57" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -330px" }}></span><span>Colombia</span><span>+57</span></Link></li>
                            <li><Link to="#" cunt_code="+269" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1430px" }}></span><span>Comoros and Mayotte</span><span>+269</span></Link></li>
                            <li><Link to="#" cunt_code="+242" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1793px" }}></span><span>Congo</span><span>+242</span></Link></li>
                            <li><Link to="#" cunt_code="+243" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1518px" }}></span><span>Congo Dem Rep</span><span>+243</span></Link></li>
                            <li><Link to="#" cunt_code="+682" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2267px" }}></span><span>Cook Islands</span><span>+682</span></Link></li>
                            <li><Link to="#" cunt_code="+506" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2090px" }}></span><span>Costa Rica</span><span>+506</span></Link></li>
                            <li><Link to="#" cunt_code="+225" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1661px" }}></span><span>Cote d'Ivoire</span><span>+225</span></Link></li>
                            <li><Link to="#" cunt_code="+385" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -902px" }}></span><span>Croatia</span><span>+385</span></Link></li>
                            <li><Link to="#" cunt_code="+53" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -748px" }}></span><span>Cuba</span><span>+53</span></Link></li>
                            <li><Link to="#" cunt_code="+599" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2729px" }}></span><span>Curaçao</span><span>+599</span></Link></li>
                            <li><Link to="#" cunt_code="+357" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -561px" }}></span><span>Cyprus</span><span>+357</span></Link></li>
                            <li><Link to="#" cunt_code="+420" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2256px" }}></span><span>Czech Republic</span><span>+420</span></Link></li>
                            <li><Link to="#" cunt_code="+45" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1386px" }}></span><span>Denmark</span><span>+45</span></Link></li>
                            <li><Link to="#" cunt_code="+246" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -55px" }}></span><span>Diego Garcia</span><span>+246</span></Link></li>
                            <li><Link to="#" cunt_code="+253" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2101px" }}></span><span>Djibouti</span><span>+253</span></Link></li>
                            <li><Link to="#" cunt_code="+1767" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2432px" }}></span><span>Dominica</span><span>+1767</span></Link></li>
                            <li><Link to="#" cunt_code="+1809" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1529px" }}></span><span>Dominican Republic</span><span>+1809</span></Link></li>
                            <li><Link to="#" cunt_code="+593" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1188px" }}></span><span>Ecuador</span><span>+593</span></Link></li>
                            <li><Link to="#" cunt_code="+20" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2201px" }}></span><span>Egypt</span><span>+20</span></Link></li>
                            <li><Link to="#" cunt_code="+503" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1639px" }}></span><span>El Salvador</span><span>+503</span></Link></li>
                            <li><Link to="#" cunt_code="+240" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1507px" }}></span><span>Equatorial Guinea</span><span>+240</span></Link></li>
                            <li><Link to="#" cunt_code="+291" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -715px" }}></span><span>Eritrea</span><span>+291</span></Link></li>
                            <li><Link to="#" cunt_code="+372" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2410px" }}></span><span>Estonia</span><span>+372</span></Link></li>
                            <li><Link to="#" cunt_code="+251" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2443px" }}></span><span>Ethiopia</span><span>+251</span></Link></li>
                            <li><Link to="#" cunt_code="+500" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2762px" }}></span><span>Falkland Islands</span><span>+500</span></Link></li>
                            <li><Link to="#" cunt_code="+298" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1111px" }}></span><span>Faroe Islands</span><span>+298</span></Link></li>
                            <li><Link to="#" cunt_code="+679" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1859px" }}></span><span>Fiji</span><span>+679</span></Link></li>
                            <li><Link to="#" cunt_code="+358" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1903px" }}></span><span>Finland</span><span>+358</span></Link></li>
                            <li><Link to="#" cunt_code="+33" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1012px" }}></span><span>France</span><span>+33</span></Link></li>
                            <li><Link to="#" cunt_code="+594" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2234px" }}></span><span>French Guiana</span><span>+594</span></Link></li>
                            <li><Link to="#" cunt_code="+689" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1705px" }}></span><span>French Polynesia</span><span>+689</span></Link></li>
                            <li><Link to="#" cunt_code="+241" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -880px" }}></span><span>Gabon</span><span>+241</span></Link></li>
                            <li><Link to="#" cunt_code="+220" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -627px" }}></span><span>Gambia</span><span>+220</span></Link></li>
                            <li><Link to="#" cunt_code="+995" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -858px" }}></span><span>Georgia</span><span>+995</span></Link></li>
                            <li><Link to="#" cunt_code="+49" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2509px" }}></span><span>Germany</span><span>+49</span></Link></li>
                            <li><Link to="#" cunt_code="+233" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2112px" }}></span><span>Ghana</span><span>+233</span></Link></li>
                            <li><Link to="#" cunt_code="+350" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -275px" }}></span><span>Gibraltar</span><span>+350</span></Link></li>
                            <li><Link to="#" cunt_code="+30" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -165px" }}></span><span>Greece</span><span>+30</span></Link></li>
                            <li><Link to="#" cunt_code="+299" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1760px" }}></span><span>Greenland</span><span>+299</span></Link></li>
                            <li><Link to="#" cunt_code="+1473" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2399px" }}></span><span>Grenada</span><span>+1473</span></Link></li>
                            <li><Link to="#" cunt_code="+590" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -407px" }}></span><span>Guadeloupe</span><span>+590</span></Link></li>
                            <li><Link to="#" cunt_code="+1671" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2366px" }}></span><span>Guam</span><span>+1671</span></Link></li>
                            <li><Link to="#" cunt_code="+502" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -935px" }}></span><span>Guatemala</span><span>+502</span></Link></li>
                            <li><Link to="#" cunt_code="+224" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2575px" }}></span><span>Guinea</span><span>+224</span></Link></li>
                            <li><Link to="#" cunt_code="+245" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1925px" }}></span><span>Guinea Bissau</span><span>+245</span></Link></li>
                            <li><Link to="#" cunt_code="+592" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -803px" }}></span><span>Guyana</span><span>+592</span></Link></li>
                            <li><Link to="#" cunt_code="+509" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -319px" }}></span><span>Haiti</span><span>+509</span></Link></li>
                            <li><Link to="#" cunt_code="+504" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2156px" }}></span><span>Honduras</span><span>+504</span></Link></li>
                            <li><Link to="#" cunt_code="+852" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2696px" }}></span><span>Hong Kong</span><span>+852</span></Link></li>
                            <li><Link to="#" cunt_code="+36" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -682px" }}></span><span>Hungary</span><span>+36</span></Link></li>
                            <li><Link to="#" cunt_code="+354" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1991px" }}></span><span>Iceland</span><span>+354</span></Link></li>
                            <li><Link to="#" cunt_code="+91" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1694px" }}></span><span>India</span><span>+91</span></Link></li>
                            <li><Link to="#" cunt_code="+62" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1958px" }}></span><span>Indonesia</span><span>+62</span></Link></li>
                            <li><Link to="#" cunt_code="+98" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2013px" }}></span><span>Iran</span><span>+98</span></Link></li>
                            <li><Link to="#" cunt_code="+964" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -649px" }}></span><span>Iraq</span><span>+964</span></Link></li>
                            <li><Link to="#" cunt_code="+353" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1969px" }}></span><span>Ireland</span><span>+353</span></Link></li>
                            <li><Link to="#" cunt_code="+972" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -341px" }}></span><span>Israel</span><span>+972</span></Link></li>
                            <li><Link to="#" cunt_code="+39" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -143px" }}></span><span>Italy</span><span>+39</span></Link></li>
                            <li><Link to="#" cunt_code="+1876" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1727px" }}></span><span>Jamaica</span><span>+1876</span></Link></li>
                            <li><Link to="#" cunt_code="+81" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -429px" }}></span><span>Japan</span><span>+81</span></Link></li>
                            <li><Link to="#" cunt_code="+962" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1463px" }}></span><span>Jordan</span><span>+962</span></Link></li>
                            <li><Link to="#" cunt_code="+7" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1210px" }}></span><span>Kazakhstan</span><span>+7</span></Link></li>
                            <li><Link to="#" cunt_code="+254" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2630px" }}></span><span>Kenya</span><span>+254</span></Link></li>
                            <li><Link to="#" cunt_code="+686" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -374px" }}></span><span>Kiribati</span><span>+686</span></Link></li>
                            <li><Link to="#" cunt_code="+850" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1804px" }}></span><span>Korea, North</span><span>+850</span></Link></li>
                            <li><Link to="#" cunt_code="+82" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2245px" }}></span><span>Korea, South</span><span>+82</span></Link></li>
                            <li><Link to="#" cunt_code="+965" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2487px" }}></span><span>Kuwait</span><span>+965</span></Link></li>
                            <li><Link to="#" cunt_code="+996" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1617px" }}></span><span>Kyrgyzstan</span><span>+996</span></Link></li>
                            <li><Link to="#" cunt_code="+856" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -451px" }}></span><span>Laos</span><span>+856</span></Link></li>
                            <li><Link to="#" cunt_code="+371" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1936px" }}></span><span>Latvia</span><span>+371</span></Link></li>
                            <li><Link to="#" cunt_code="+961" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1254px" }}></span><span>Lebanon</span><span>+961</span></Link></li>
                            <li><Link to="#" cunt_code="+266" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2190px" }}></span><span>Lesotho</span><span>+266</span></Link></li>
                            <li><Link to="#" cunt_code="+231" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2068px" }}></span><span>Liberia</span><span>+231</span></Link></li>
                            <li><Link to="#" cunt_code="+218" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -132px" }}></span><span>Libya</span><span>+218</span></Link></li>
                            <li><Link to="#" cunt_code="+423" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -979px" }}></span><span>Liechtenstein</span><span>+423</span></Link></li>
                            <li><Link to="#" cunt_code="+370" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1122px" }}></span><span>Lithuania</span><span>+370</span></Link></li>
                            <li><Link to="#" cunt_code="+352" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1474px" }}></span><span>Luxembourg</span><span>+352</span></Link></li>
                            <li><Link to="#" cunt_code="+853" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2597px" }}></span><span>Macao</span><span>+853</span></Link></li>
                            <li><Link to="#" cunt_code="+389" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1353px" }}></span><span>Macedonia</span><span>+389</span></Link></li>
                            <li><Link to="#" cunt_code="+261" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1287px" }}></span><span>Madagascar</span><span>+261</span></Link></li>
                            <li><Link to="#" cunt_code="+265" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2145px" }}></span><span>Malawi</span><span>+265</span></Link></li>
                            <li><Link to="#" cunt_code="+60" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1870px" }}></span><span>Malaysia</span><span>+60</span></Link></li>
                            <li><Link to="#" cunt_code="+960" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -616px" }}></span><span>Maldives</span><span>+960</span></Link></li>
                            <li><Link to="#" cunt_code="+223" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2520px" }}></span><span>Mali</span><span>+223</span></Link></li>
                            <li><Link to="#" cunt_code="+356" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1551px" }}></span><span>Malta</span><span>+356</span></Link></li>
                            <li><Link to="#" cunt_code="+692" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1144px" }}></span><span>Marshall Islands</span><span>+692</span></Link></li>
                            <li><Link to="#" cunt_code="+596" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -198px" }}></span><span>Martinique</span><span>+596</span></Link></li>
                            <li><Link to="#" cunt_code="+222" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -253px" }}></span><span>Mauritania</span><span>+222</span></Link></li>
                            <li><Link to="#" cunt_code="+230" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2179px" }}></span><span>Mauritius</span><span>+230</span></Link></li>
                            <li><Link to="#" cunt_code="+52" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2024px" }}></span><span>Mexico</span><span>+52</span></Link></li>
                            <li><Link to="#" cunt_code="+691" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1738px" }}></span><span>Micronesia</span><span>+691</span></Link></li>
                            <li><Link to="#" cunt_code="+373" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2685px" }}></span><span>Moldova</span><span>+373</span></Link></li>
                            <li><Link to="#" cunt_code="+377" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -913px" }}></span><span>Monaco</span><span>+377</span></Link></li>
                            <li><Link to="#" cunt_code="+976" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2553px" }}></span><span>Mongolia</span><span>+976</span></Link></li>
                            <li><Link to="#" cunt_code="+382" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2167px" }}></span><span>Montenegro</span><span>+382</span></Link></li>
                            <li><Link to="#" cunt_code="+1664" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -583px" }}></span><span>Montserrat</span><span>+1664</span></Link></li>
                            <li><Link to="#" cunt_code="+212" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2333px" }}></span><span>Morocco</span><span>+212</span></Link></li>
                            <li><Link to="#" cunt_code="+258" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -638px" }}></span><span>Mozambique</span><span>+258</span></Link></li>
                            <li><Link to="#" cunt_code="+95" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -11px" }}></span><span>Myanmar</span><span>+95</span></Link></li>
                            <li><Link to="#" cunt_code="+264" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1881px" }}></span><span>Namibia</span><span>+264</span></Link></li>
                            <li><Link to="#" cunt_code="+674" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1749px" }}></span><span>Nauru</span><span>+674</span></Link></li>
                            <li><Link to="#" cunt_code="+977" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -110px" }}></span><span>Nepal</span><span>+977</span></Link></li>
                            <li><Link to="#" cunt_code="+31" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1441px" }}></span><span>Netherlands</span><span>+31</span></Link></li>
                            <li><Link to="#" cunt_code="+687" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1276px" }}></span><span>New Caledonia</span><span>+687</span></Link></li>
                            <li><Link to="#" cunt_code="+64" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1540px" }}></span><span>New Zealand</span><span>+64</span></Link></li>
                            <li><Link to="#" cunt_code="+505" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -154px" }}></span><span>Nicaragua</span><span>+505</span></Link></li>
                            <li><Link to="#" cunt_code="+227" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -550px" }}></span><span>Niger</span><span>+227</span></Link></li>
                            <li><Link to="#" cunt_code="+234" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2476px" }}></span><span>Nigeria</span><span>+234</span></Link></li>
                            <li><Link to="#" cunt_code="+683" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2079px" }}></span><span>Niue</span><span>+683</span></Link></li>
                            <li><Link to="#" cunt_code="+6723" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -209px" }}></span><span>Norfolk Island</span><span>+6723</span></Link></li>
                            <li><Link to="#" cunt_code="+1" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -704px" }}></span><span>Northern Mariana Islands</span><span>+1</span></Link></li>
                            <li><Link to="#" cunt_code="+47" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -836px" }}></span><span>Norway</span><span>+47</span></Link></li>
                            <li><Link to="#" cunt_code="+968" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2454px" }}></span><span>Oman</span><span>+968</span></Link></li>
                            <li><Link to="#" cunt_code="+92" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2035px" }}></span><span>Pakistan</span><span>+92</span></Link></li>
                            <li><Link to="#" cunt_code="+680" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -231px" }}></span><span>Palau</span><span>+680</span></Link></li>
                            <li><Link to="#" cunt_code="+970" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1199px" }}></span><span>Palestinian Territories</span><span>+970</span></Link></li>
                            <li><Link to="#" cunt_code="+507" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -847px" }}></span><span>Panama</span><span>+507</span></Link></li>
                            <li><Link to="#" cunt_code="+63" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1485px" }}></span><span>Papua New Guinea</span><span>+63</span></Link></li>
                            <li><Link to="#" cunt_code="+595" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2344px" }}></span><span>Paraguay</span><span>+595</span></Link></li>
                            <li><Link to="#" cunt_code="+51" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -946px" }}></span><span>Peru</span><span>+51</span></Link></li>
                            <li><Link to="#" cunt_code="+63" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1815px" }}></span><span>Philippines</span><span>+63</span></Link></li>
                            <li><Link to="#" cunt_code="+48" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1177px" }}></span><span>Poland</span><span>+48</span></Link></li>
                            <li><Link to="#" cunt_code="+351" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -517px" }}></span><span>Portugal</span><span>+351</span></Link></li>
                            <li><Link to="#" cunt_code="+1787" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -473px" }}></span><span>Puerto Rico</span><span>+1787</span></Link></li>
                            <li><Link to="#" cunt_code="+974" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -462px" }}></span><span>Qatar</span><span>+974</span></Link></li>
                            <li><Link to="#" cunt_code="+262" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -264px" }}></span><span>Reunion</span><span>+262</span></Link></li>
                            <li><Link to="#" cunt_code="+40" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -671px" }}></span><span>Romania</span><span>+40</span></Link></li>
                            <li><Link to="#" cunt_code="+7" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -660px" }}></span><span>Russia</span><span>+7</span></Link></li>
                            <li><Link to="#" cunt_code="+250" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2674px" }}></span><span>Rwanda</span><span>+250</span></Link></li>
                            <li><Link to="#" cunt_code="+599" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2719px" }}></span><span>Saba</span><span>+599</span></Link></li>
                            <li><Link to="#" cunt_code="+590" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1012px" }}></span><span>Saint Barthélemy</span><span>+590</span></Link></li>
                            <li><Link to="#" cunt_code="+290" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -495px" }}></span><span>Saint Helena</span><span>+290</span></Link></li>
                            <li><Link to="#" cunt_code="+1869" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -99px" }}></span><span>Saint Kitts and Nevis</span><span>+1869</span></Link></li>
                            <li><Link to="#" cunt_code="+1758" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1397px" }}></span><span>Saint Lucia</span><span>+1758</span></Link></li>
                            <li><Link to="#" cunt_code="+590" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -55px" }}></span><span>Saint Martin</span><span>+590</span></Link></li>
                            <li><Link to="#" cunt_code="+508" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1078px" }}></span><span>Saint Pierre and Miquelon</span><span>+508</span></Link></li>
                            <li><Link to="#" cunt_code="+1784" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2619px" }}></span><span>Saint Vincent Grenadines</span><span>+1784</span></Link></li>
                            <li><Link to="#" cunt_code="+685" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2300px" }}></span><span>Samoa</span><span>+685</span></Link></li>
                            <li><Link to="#" cunt_code="+378" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2123px" }}></span><span>San Marino</span><span>+378</span></Link></li>
                            <li><Link to="#" cunt_code="+239" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2388px" }}></span><span>Sao Tome and Principe</span><span>+239</span></Link></li>
                            <li><Link to="#" cunt_code="+966" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -33px" }}></span><span>Saudi Arabia</span><span>+966</span></Link></li>
                            <li><Link to="#" cunt_code="+221" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2134px" }}></span><span>Senegal</span><span>+221</span></Link></li>
                            <li><Link to="#" cunt_code="+381" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2465px" }}></span><span>Serbia</span><span>+381</span></Link></li>
                            <li><Link to="#" cunt_code="+248" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1045px" }}></span><span>Seychelles</span><span>+248</span></Link></li>
                            <li><Link to="#" cunt_code="+232" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -737px" }}></span><span>Sierra Leone</span><span>+232</span></Link></li>
                            <li><Link to="#" cunt_code="+65" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -22px" }}></span><span>Singapore</span><span>+65</span></Link></li>
                            <li><Link to="#" cunt_code="+1721" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2773px" }}></span><span>Sint Maarten</span><span>+1721</span></Link></li>
                            <li><Link to="#" cunt_code="+421" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2212px" }}></span><span>Slovakia</span><span>+421</span></Link></li>
                            <li><Link to="#" cunt_code="+386" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1221px" }}></span><span>Slovenia</span><span>+386</span></Link></li>
                            <li><Link to="#" cunt_code="+677" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1067px" }}></span><span>Solomon Islands</span><span>+677</span></Link></li>
                            <li><Link to="#" cunt_code="+252" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1364px" }}></span><span>Somalia</span><span>+252</span></Link></li>
                            <li><Link to="#" cunt_code="+27" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2355px" }}></span><span>South Africa</span><span>+27</span></Link></li>
                            <li><Link to="#" cunt_code="+211" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2741px" }}></span><span>South Sudan</span><span>+211</span></Link></li>
                            <li><Link to="#" cunt_code="+34" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1155px" }}></span><span>Spain</span><span>+34</span></Link></li>
                            <li><Link to="#" cunt_code="+94" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2641px" }}></span><span>Sri Lanka</span><span>+94</span></Link></li>
                            <li><Link to="#" cunt_code="+249" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -352px" }}></span><span>Sudan</span><span>+249</span></Link></li>
                            <li><Link to="#" cunt_code="+597" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2663px" }}></span><span>Suriname</span><span>+597</span></Link></li>
                            <li><Link to="#" cunt_code="+268" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2278px" }}></span><span>Swaziland</span><span>+268</span></Link></li>
                            <li><Link to="#" cunt_code="+46" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -385px" }}></span><span>Sweden</span><span>+46</span></Link></li>
                            <li><Link to="#" cunt_code="+41" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1320px" }}></span><span>Switzerland</span><span>+41</span></Link></li>
                            <li><Link to="#" cunt_code="+963" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1826px" }}></span><span>Syria</span><span>+963</span></Link></li>
                            <li><Link to="#" cunt_code="+886" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -506px" }}></span><span>Taiwan</span><span>+886</span></Link></li>
                            <li><Link to="#" cunt_code="+992" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -187px" }}></span><span>Tajikistan</span><span>+992</span></Link></li>
                            <li><Link to="#" cunt_code="+255" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2289px" }}></span><span>Tanzania</span><span>+255</span></Link></li>
                            <li><Link to="#" cunt_code="+66" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -957px" }}></span><span>Thailand</span><span>+66</span></Link></li>
                            <li><Link to="#" cunt_code="+670" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2784px" }}></span><span>Timor-Leste</span><span>+670</span></Link></li>
                            <li><Link to="#" cunt_code="+228" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -605px" }}></span><span>Togo</span><span>+228</span></Link></li>
                            <li><Link to="#" cunt_code="+690" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2751px" }}></span><span>Tokelau</span><span>+690</span></Link></li>
                            <li><Link to="#" cunt_code="+676" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1089px" }}></span><span>Tonga</span><span>+676</span></Link></li>
                            <li><Link to="#" cunt_code="+1868" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -440px" }}></span><span>Trinidad and Tobago</span><span>+1868</span></Link></li>
                            <li><Link to="#" cunt_code="+216" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -539px" }}></span><span>Tunisia</span><span>+216</span></Link></li>
                            <li><Link to="#" cunt_code="+90" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1606px" }}></span><span>Turkey</span><span>+90</span></Link></li>
                            <li><Link to="#" cunt_code="+993" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2542px" }}></span><span>Turkmenistan</span><span>+993</span></Link></li>
                            <li><Link to="#" cunt_code="+1649" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1309px" }}></span><span>Turks and Caicos</span><span>+1649</span></Link></li>
                            <li><Link to="#" cunt_code="+688" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -286px" }}></span><span>Tuvalu</span><span>+688</span></Link></li>
                            <li><Link to="#" cunt_code="+256" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1166px" }}></span><span>Uganda</span><span>+256</span></Link></li>
                            <li><Link to="#" cunt_code="+380" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2002px" }}></span><span>Ukraine</span><span>+380</span></Link></li>
                            <li><Link to="#" cunt_code="+971" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2223px" }}></span><span>United Arab Emirates</span><span>+971</span></Link></li>
                            <li><Link to="#" cunt_code="+44" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -55px" }}></span><span>United Kingdom</span><span>+44</span></Link></li>
                            <li><Link to="#" cunt_code="+1" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -44px" }}></span><span>United States</span><span>+1</span></Link></li>
                            <li><Link to="#" cunt_code="+598" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2608px" }}></span><span>Uruguay</span><span>+598</span></Link></li>
                            <li><Link to="#" cunt_code="+998" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1001px" }}></span><span>Uzbekistan</span><span>+998</span></Link></li>
                            <li><Link to="#" cunt_code="+678" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1265px" }}></span><span>Vanuatu</span><span>+678</span></Link></li>
                            <li><Link to="#" cunt_code="+379" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2322px" }}></span><span>Vatican City</span><span>+379</span></Link></li>
                            <li><Link to="#" cunt_code="+58" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1056px" }}></span><span>Venezuela</span><span>+58</span></Link></li>
                            <li><Link to="#" cunt_code="+84" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -968px" }}></span><span>Vietnam</span><span>+84</span></Link></li>
                            <li><Link to="#" cunt_code="+1284" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1408px" }}></span><span>Virgin Islands, British</span><span>+1284</span></Link></li>
                            <li><Link to="#" cunt_code="+1340" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1782px" }}></span><span>Virgin Islands, US</span><span>+1340</span></Link></li>
                            <li><Link to="#" cunt_code="+681" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1012px" }}></span><span>Wallis and Futuna</span><span>+681</span></Link></li>
                            <li><Link to="#" cunt_code="+967" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1672px" }}></span><span>Yemen</span><span>+967</span></Link></li>
                            <li><Link to="#" cunt_code="+260" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -1595px" }}></span><span>Zambia</span><span>+260</span></Link></li>
                            <li><Link to="#" cunt_code="+263" onClick={(e) => { e.preventDefault() }}><span style={{ backgroundPosition: "0px -2046px" }}></span><span>Zimbabwe</span><span>+263</span></Link></li>
                        </ul>
                    </dd>
                </dl>
            </div>

        )
    }
}

export default SelectCountry
