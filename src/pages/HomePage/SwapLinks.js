/* eslint-disable */

// material
import { useTheme, styled } from '@material-ui/core/styles';
import { Container, ButtonGroup, Button, Stack, useMediaQuery } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

// ----------------------------------------------------------------------

export default function SwapLinks() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <MotionInView variants={varFadeInUp}>
          <Stack direction="row" justifyContent="center">
            <ButtonGroup variant="contained" size="large" orientation={isDesktop ? 'horizontal' : 'vertical'}>
              <Button target="_blank" href="https://bscscan.com/token/0x16dcc0ec78e91e868dca64be86aec62bf7c61037">
                BscScan
              </Button>
              <Button target="_blank" href="https://www.certik.org/projects/ever-eth">
                Certik
              </Button>
              <Button target="_blank" href="https://www.coingecko.com/en/coins/evereth">
                CoinGecko
              </Button>
              <Button target="_blank" href="https://coinmarketcap.com/currencies/evereth/">
                CoinMarketCap
              </Button>
              <Button target="_blank" href="https://github.com/EverETHcode">
                Github
              </Button>
            </ButtonGroup>
          </Stack>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
