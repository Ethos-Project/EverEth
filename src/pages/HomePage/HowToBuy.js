/* eslint-disable */
import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Container, Typography, Paper, Box, Stack } from '@material-ui/core';

import { varFadeInUp, MotionInView, varFadeInDown, varFadeIn } from '../../components/animate';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

export default function HowToBuy() {
  return (
    <RootStyle>
      <Box sx={{ mb: { xs: 5, md: 5 } }}>
        <MotionInView variants={varFadeInUp}>
          <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}>
            EverETH
          </Typography>
        </MotionInView>
        <MotionInView variants={varFadeInDown}>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            How to buy
          </Typography>
        </MotionInView>
      </Box>
      <Container maxWidth="lg">
        <MotionInView variants={varFadeInUp}>
          <Stack spacing={4}>
            <Typography sx={{ fontSize: { xs: 14, md: 22 } }} align="center">
              Here is a quick guide on how to buy EverETH using Trustwallet:
            </Typography>
            <Typography sx={{ fontSize: { xs: 14, md: 22 } }} align="center">
              Download the Trustwallet App from your OS Store Buy BNBs on an Exchange of your choice (Ex. Binance) Go to
              the dApp section and select Pancakeswap Swap your BNBs for EverETH (EverETH) by using our contract
              address.
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, md: 16 } }} align="center">
              The Content shared on this website is for information purpose only and, thus, should not be considered as
              financial advice. Trading/Investing is risky and you should never invest more than you can afford to lose.
              Cryptocurrencies are risky. Never invest more than you can afford to lose. You alone assume the sole
              responsibility of evaluating the merits and risks associated with the use of any information or other
              Content on the Site before making any decisions based on such information or other Content.
            </Typography>
          </Stack>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
