import React, { useEffect, useState } from 'react';
import './index.css';
import './app.css';
import Price from './Price';
import PriceTable from './PriceTable';
const Navbar = () => {
    // let themeName="light theme"
    const [themeName, setThemeName] = useState("light theme");
    const [theme, setTheme] = useState(true);
    const setThemeLogic = () => {
        if (theme) {
            setTheme(false);
            setThemeName("Light Theme");
        }
        else {
            setTheme(true);
            setThemeName("Dark Theme");

        }
    }
    return (
        <div className={theme ? "darkTheme" : "lightTheme"}>
            <div style={{ paddingTop: '47px' }}>
                <nav>
                    <div>
                        <div>
                            <h1 style={{ color: 'darkcyan', fontSize: '35px' }}>HODLINFO</h1>
                            <p>Powerded by <span style={{ color: 'darkcyan' }}>Finstreet</span> </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div className="gap">
                            <select name="inr" id="inr">
                                <option value="INR">INR</option>
                            </select>
                        </div>
                        <div className="gap">

                            <select name="BTC" id="btc">
                                <option value="btc">BTC</option>
                                <option value="rth">RTH</option>
                                <option value="usdt">USDT</option>
                                <option value="xrp">XRP</option>
                                <option value="trx">TRX</option>
                                <option value="xem">XEM</option>
                                <option value="win">WIN</option>
                            </select>
                        </div>
                        <div className="gap">
                            <button>BUY BTC</button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div className="gap">
                            <h1 id="round">12</h1>
                        </div>
                        <div className="gap" ><h1><button>Telegram</button></h1></div>

                        <button onClick={() => { setThemeLogic() }}>{themeName}</button>

                    </div>
                </nav>
            </div>


            <div>
                <Price></Price>
            </div>
            <div>
                <PriceTable></PriceTable>
            </div>
            <footer style={{display:'flex' ,justifyContent:'space-between'}}>
                <div>
                    <p>Copyright © 2019
                        HodlInfo.com
                        Developed By QuadBTech
                    </p>
                </div>
                <div>
                    <p>Support</p>
                </div>
            </footer>
        </div>
    );
}

export default Navbar;