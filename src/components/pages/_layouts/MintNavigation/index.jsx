import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

// Components
import Connector from '../../../core/Connector/Connector';
import Floater from '../../../ui/Floater/Floater';

// Helpers
import { getAllLocalEnv } from '../../../../helpers/dev/general-helpers';

// Assets & Style
import sgLogo from '../../../../assets/imgs/sg-logo.png';
import discordLogo from '../../../../assets/imgs/discord.svg';
import instaLogo from '../../../../assets/imgs/insta.svg';
import openseaLogo from '../../../../assets/imgs/opensea.svg';
import twitterLogo from '../../../../assets/imgs/twitter.svg';
import menu from '../../../../assets/imgs/menu.svg';
import closeMenu from '../../../../assets/imgs/close-menu.svg';
import visionRing from '../../../../assets/imgs/vision-ring.svg';
import goblinKey from '../../../../assets/imgs/goblin-key.svg';
import sneakyClub from '../../../../assets/imgs/sneaky-club.png';
import sneakyStudio from '../../../../assets/imgs/sneaky-studio.svg';
import gamingStaking from '../../../../assets/imgs/gaming-staking.svg';
import metaverse from '../../../../assets/imgs/metaverse.svg';
import artistConfeti from '../../../../assets/imgs/artist-confeti.svg';
import artistRod from '../../../../assets/imgs/artist-rod.svg';
import artistProfile from '../../../../assets/imgs/artist-profile.png';
import './MintNavigation.scss';

const MintNavigation = () => {
    // States
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showMobileFooter, setShowMobileFooter] = useState(true);
    const [pageContentType, setPageContentType] = useState('');

    // Social Medias
    const [socials] = useState({
        discord: 'https://discord.gg/v-koo-kuu',
        opensea: 'https://opensea.io/collection/v-koo-kuu',
        insta: 'https://instagram.com/v-koo-kuu',
        twitter: 'https://twitter.com/v-koo-kuu',
    });

    // Handers
    const onClickModalPageHandler = () => setShowMenu(!showMenu);
    const onHideModalHandler = () => {
        setShowMobileFooter(true);
        setShowModal(false);
    };

    return (
        <div className="_minting-nav-wrap">
            {/* Desktop Nav */}
            <div className="_minting-nav container d-none d-lg-block">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggle"
                        aria-controls="navbarToggle"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <div className="mobile-menu-btn-wrapper">
                            <img src={menu} alt="" />
                        </div>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-between"
                        id="navbarToggle"
                    >
                        <ul className="navbar-nav custom-nav left">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    onClick={() => onClickModalPageHandler('roadmap')}
                                >
                                    Roadmap
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    onClick={() => onClickModalPageHandler('mission')}
                                >
                                    Mission
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    onClick={() => onClickModalPageHandler('artist')}
                                >
                                    Artist
                                </a>
                            </li>
                        </ul>

                        <a href="https://sneakygoblins.co/" className="navbar-brand d-none d-lg-block">
                            <div className="logo-wrapper">
                                <img src={sgLogo} alt="SneakyGoblins" />
                            </div>
                            {/* This is hidden visually, for SEO*/}
                            <h1 id="MainTextBrand">SneakyGoblins</h1>
                        </a>

                        <ul className="navbar-nav custom-nav right">
                            <div className="spacer-last" />
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" href={socials.discord}>
                                    <img src={discordLogo} alt="" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" href={socials.opensea}>
                                    <img src={openseaLogo} alt="" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" href={socials.insta}>
                                    <img src={instaLogo} alt="" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" href={socials.twitter}>
                                    <img src={twitterLogo} alt="" />
                                </a>
                            </li>
                            <div className="spacer-last" />
                            <li>
                                <Connector
                                    connText="Connect Wallet"
                                    disconnText="Disconnect"
                                    curve={3}
                                    bgColor="linear-gradient(84.07deg, #00C555 16.64%, #00E75E 93.78%)"
                                    hoverBgColor="#15ad57"
                                    lineColor="#FFC748"
                                    hoverLineColor="#FFC748"
                                    textSize={1.25}
                                    textColor="black"
                                />
                            </li>
                        </ul>
                    </div>
                </nav>
                {showModal && (
                    <Floater show={showModal} onHide={() => onHideModalHandler()} width={80}>
                        {onClickModalPageContentSelector(pageContentType)}
                    </Floater>
                )}
            </div>
            {/* Custom Mobile Nav */}
            <div className="_minting-nav container-fluid d-block d-lg-none">
                <div className="row">
                    <div className="col-4">
                        <div className="menu-wrap-mobile">
                            <div onClick={onClickMenuHandler} className="menu-inner-wrap">
                                <img src={showMenu ? closeMenu : menu} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <Link to="/" className="">
                            <div className="logo-wrapper">
                                <img src={sgLogo} alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-4">
                        <div className="connector-wrap-mobile">
                            <Connector
                                connText="Connect Wallet"
                                disconnText="Disconnect"
                                curve={3}
                                bgColor="linear-gradient(84.07deg, #00C555 16.64%, #00E75E 93.78%)"
                                hoverBgColor="#15ad57"
                                lineColor="#FFC748"
                                hoverLineColor="#FFC748"
                                lineSize={1}
                                textSize={1.15}
                                textColor="black"
                                height={60}
                                width={180}
                                padd="10px 10px"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Full Overlay - Mobile Menu */}
            <div id="MobileMenu" className={showMenu ? 'show d-block d-lg-none' : 'hide'}>
                <div className="mobile-menu-link-wrap"></div>
            </div>
        </div>
    )
}