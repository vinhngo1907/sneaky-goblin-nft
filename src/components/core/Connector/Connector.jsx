import React, { useContext, useState, useEffect, useRef } from 'react';

import { EthersContext } from '../../../store/all-context-interface';

// Style
import './Connector.scss';

const Connector = ({
    forceSwitch = false,
    connText = 'CONNECT',
    disconnText = 'DISCONNECT',
    bgColor = '#5e356c',
    hoverBgColor = '#2d996c',
    lineColor = '#b3bdb3',
    hoverLineColor = '#dae7da',
    lineSize = 1,
    curve = 23,
    textSpace = 0,
    textSize = 1.3,
    font = 'Outfit',
    textColor = 'white',
    textWeight = 600,
    padd = '17px 34px 17px 34px',
    height = 70,
    width = 210,
}) => {
    const { ethersProvider, isConnected: _isConnected } = useContext(EthersContext);
    const isMounted = useRef(true);

    // state
    const [isConnected, setIsConnected] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [defBtnStyle, setDefBtnStyle] = useState({});

    // Effects
    useEffect(() => {
        if (!isMounted.current) return;
        setDefBtnStyle({
            borderRadius: `${curve}px`,
            letterSpacing: `${textSpace}px`,
            fontSize: `${textSize}em`,
            fontFamily: `${font}`,
            fontWeight: textWeight,
            padding: `${padd}`,
            height: `${height}px`,
            color: textColor,
        });
    }, []);

    useEffect(() => {
        setIsConnected(_isConnected);
    }, [_isConnected])

    // On component unmount
    useEffect(() => () => (isMounted.current == false), [])
    
    // handlers
    const onConnectHandler = async () => {
        const data = ethersProvider.connect();
        if (data) await setIsConnected(true);
        if (!data) await setIsConnected(false);
        if(data && forceSwitch){
            try {
                await ethersProvider.switchNetwork();
            } catch (error) {
                
            }
        }
    }

    const onDisconnectHandler = async () => {
        await ethersProvider.disconnect();
        await setIsConnected(false);
    }
    return (
        <div className="_connector-wrap" style={{ width: `${width}px` }}>
            {
                isConnected ? (
                    <button
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        style={{
                            ...defBtnStyle,
                            border: `${lineSize}px solid ${isHover ? hoverLineColor : lineColor}`,
                            background: isHover ? hoverBgColor : bgColor,
                        }}
                        className="connector"
                        onClick={onDisconnectHandler}
                    >
                        {disconnText}
                    </button>
                ) : (
                    <button
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        style={{
                            ...defBtnStyle,
                            border: `${lineSize}px solid ${isHover ? hoverLineColor : lineColor}`,
                            background: isHover ? hoverBgColor : bgColor,
                        }}
                        className="connector"
                        onClick={onConnectHandler}
                    >
                        {connText}
                    </button>
                )
            }
        </div>
    );
};

export default Connector;