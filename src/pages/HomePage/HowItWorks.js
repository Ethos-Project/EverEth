/* eslint-disable */

// material
import { styled, useTheme } from '@material-ui/core/styles';
import { Box, Stack, Button, Container, Typography, useMediaQuery } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

// ----------------------------------------------------------------------

export default function HowItWorks() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <RootStyle id="about">
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 5, md: 5 } }}>
          <MotionInView variants={varFadeInUp}>
            <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}>
              EverETH
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              How it works?
            </Typography>
          </MotionInView>
        </Box>
        <MotionInView variants={varFadeInUp}>
          <Stack spacing={3}>
            <Typography sx={{ fontSize: { xs: 14, md: 22 } }} align="center">
              EverETH is the first Ethereum reflection token running on Binance Smart Chain. Simply hold tokens and get
              rewarded in Ethereum on every transaction. With the auto-claim feature, you will receive ETH automatically
              in your wallet.
            </Typography>
            <Typography sx={{ fontSize: { xs: 14, md: 22 } }} align="center">
              Tax distribution: 8% Holders, 5% BuyBack, 2% Liquidity
            </Typography>
            <Stack direction="row" justifyContent="center" spacing={3}>
              <Button
                size={isDesktop ? 'large' : 'small'}
                variant="contained"
                target="_blank"
                href="https://f612e4ec-9b3a-4d4c-b2db-71b4d2c6f9c9.filesusr.com/ugd/f76a41_fc036c810eb5406ab9aab7031aec34fc.pdf"
                sx={{
                  whiteSpace: 'nowrap',
                  boxShadow: (theme) => theme.customShadows.z8,
                  color: (theme) => theme.palette.getContrastText(theme.palette.common.white),
                  bgcolor: 'common.white',
                  '&:hover': { bgcolor: 'grey.300' }
                }}
              >
                Whitepaper
              </Button>
              <Button
                size={isDesktop ? 'large' : 'small'}
                variant="contained"
                target="_blank"
                href="https://bscscan.com/address/0x16dcc0ec78e91e868dca64be86aec62bf7c61037#code"
              >
                Source Code
              </Button>
            </Stack>
          </Stack>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
