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