/* eslint-disable */

// material
import { alpha, styled, useTheme } from '@material-ui/core/styles';
import { Box, Card, Container, Typography, Grid } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/assets/svg/dollar-svgrepo-com.svg',
    title: '8% Dividends',
    description:
      '8% of every buy/sell is taken and redistributed to all holders. Hold EverETH tokens and earn Ethereum. A Minimum of 200,000 tokens is required in order to receive rewards.'
  },
  {
    icon: '/assets/svg/finances-stats-bars-graphic-with-up-arrow-svgrepo-com.svg',
    title: 'Buy Back / Marketing Wallet',
    description:
      'Every time the price drops our team will use the buyback wallet to raise and maintain the currency on an upward trend. When is no need for buyback, the funds are being used for marketing.'
  },
  {
    icon: '/assets/svg/dollar-symbol-svgrepo-com.svg',
    title: 'Auto Pay',
    description:
      'You don’t need to claim your earned Ethereum. It’s automatically sent to your wallet. Note: in periods of lower volume this may take longer, but you always receive your Ethereum.'
  },
  {
    icon: '/assets/svg/security-svgrepo-com.svg',
    title: 'Secured',
    description:
      'The automatic liquidity system helps create a price floor (stability). Initial Liquidity Provided is locked with DXLock. The smart contract was being audited by TechRate, and currently onboarding for Certik Audit with 12 months of SkyNet. Our expereinced marketing team will ensure the continuous growth of the project.'
  }
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 430,
    minHeight: 540,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 0),
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: -40 }
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: theme.shape.borderRadiusMd,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 40,
  height: 40,
  margin: 'auto',
  marginBottom: theme.spacing(5),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function WhyEverEth() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  return (
    <RootStyle id="features">
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 5, md: 5 } }}>
          <MotionInView variants={varFadeInUp}>
            <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}>
              EverETH
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              Why choose EverETH?
            </Typography>
          </MotionInView>
        </Box>
        {/* <MotionInView variants={varFadeInUp}> */}
        <Grid container>
          {CARDS.map((card, key) => (
            <Grid item xs={12} md={6} key={key} mb={5}>
              <MotionInView variants={key < 2 ? varFadeInUp : varFadeInDown}>
                <CardStyle>
                  <CardIconStyle src={card.icon} alt={card.title} />
                  <Typography variant="h5" paragraph>
                    {card.title}
                  </Typography>
                  <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>
                    {card.description}
                  </Typography>
                </CardStyle>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
        {/* </MotionInView> */}
      </Container>
    </RootStyle>
  );
}
