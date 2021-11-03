/* eslint-disable */
import React from 'react';
// material
import { styled } from '@material-ui/core/styles';
// components
import Page from '../../components/Page';
import { LandingAdvertisement } from '../../components/_external-pages/landing';
import MainHero from './MainHero';
import SwapLink from './SwapLinks';
import HowItWorks from './HowItWorks';
import WhyEverEth from './WhyEverEth';
import RoadMap from './RoadMap';
import Faq from './Faq';
import HowToBuy from './HowToBuy';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <RootStyle title="EverETH" id="move_top">
      <MainHero />
      <ContentStyle>
        <SwapLink />
        <HowItWorks />
        <WhyEverEth />
        <RoadMap />
        <Faq />
        <HowToBuy />
      </ContentStyle>
    </RootStyle>
  );
}
