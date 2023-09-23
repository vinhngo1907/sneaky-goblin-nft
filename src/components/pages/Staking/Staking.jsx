import React, { useEffect, useCallback, useContext, useState, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { nanoid } from 'nanoid';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Helmet } from 'react-helmet-async';
import { getAllLocalEnv } from '../../../helpers/dev/general-helpers';
import { EthersContext } from '../../../store/all-context-interface';

// Styles & Assets
import stakingBg from '../../../assets/imgs/staking-bg.jpg';
import stakingBgMob15 from '../../../assets/imgs/staking-bg-mob-x1.5.jpg';
import stakingBgMobPlus2 from '../../../assets/imgs/staking-bg-mob-x2.jpg';
import backArrow from '../../../assets/imgs/back-arrow-green.svg';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import './Staking.scss';

// Constant
const TOKEN_SYMOBL = '$xSERUM';

const Staking = () => {
    const magicContractType = 0; // Signifies it's the contract of the first nft collection
    const localEnv = getAllLocalEnv();
    const {
        ethers,
        address,
        provider,
        chainId,
        signer,
        ehtersProvider,
        isConnected,
        isMetamaskInstalled,
    } = useContext(EthersContext);

    // Responsive width detection >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const isTablet = useMediaQuery({ minWidth: 587, maxWidth: 991 });
    const isMobile = useMediaQuery({ query: '(max-width: 586px)' });
    const isLarge = useMediaQuery({ query: '(min-width: 992px)' });

    // Inline >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const whichBg = useCallback(() => {
        if (isTablet) return stakingBgMobPlus2;
        if (isMobile) return stakingBgMob15;

        return stakingBg;
    }, [isTablet, stakingBgMobPlus2, isMobile, stakingBgMob15, stakingBg]);
    // Main >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    return (
        <>
            <Helmet>
                <title>Sneaky Goblins | Staking</title>
            </Helmet>
            <div className="_staking-body">
                <div className="main-bg">
                    <img className={isLarge ? 'large' : ''} src={whichBg()} alt="" />
                </div>
                <div className="_rest">
                </div>
            </div>
        </>
    )
}

export default Staking;