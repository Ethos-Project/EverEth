/* eslint-disable */
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
// material
import { styled, useTheme } from '@material-ui/core/styles';
import { Button, Box, IconButton, Container, Typography, Stack, useMediaQuery } from '@material-ui/core';
// routes
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh'
  }
}));

// ----------------------------------------------------------------------

export default function MainHero() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} />

        <HeroImgStyle alt="hero" src="/assets/images/eth.png" variants={varFadeInUp} />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                Hold
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  &nbsp;EverETH
                </Typography>
              </Typography>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  Earn
                </Typography>
                &nbsp;Ethereum
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: 'common.white' }}>The fastest and easiest way to earn Ethereum.</Typography>
            </motion.div>

            <Stack
              component={motion.div}
              variants={varFadeInRight}
              direction="row"
              spacing={1}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <Typography sx={{ fontSize: { xs: 12, md: 18 } }}>0x74DA231eEf1Dd6e0d4437639DF85df670ce881e8</Typography>
            </Stack>

            {isDesktop ? (
              <motion.div variants={varFadeInRight}>
                <Button
                  size="large"
                  variant="contained"
                  target="_blank"
                  href="https://swap.evereth.app/"
                  sx={{ mr: 2 }}
                >
                  Buy on EverETH swap
                </Button>
                <Button size="large" variant="contained" target="_blank" href="https://evereth.app/">
                  Dashboard
                </Button>
              </motion.div>
            ) : (
              <motion.div variants={varFadeInRight}>
                <Stack spacing={2}>
                  <Stack direction="row" justifyContent="center">
                    <Button size="large" variant="contained" target="_blank" href="https://swap.evereth.app/">
                      Buy on EverETH swap
                    </Button>
                  </Stack>
                  <Stack direction="row" justifyContent="center">
                    <Button size="large" variant="contained" target="_blank" href="https://evereth.app/">
                      Dashboard
                    </Button>
                  </Stack>
                </Stack>
              </motion.div>
            )}

            <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <motion.div variants={varFadeInRight}>
                <IconButton target="_blank" href="https://t.me/EverETHOfficial">
                  <Icon icon="bx:bxl-telegram" className="font-28" />
                </IconButton>
              </motion.div>
              <motion.div variants={varFadeInRight}>
                <IconButton target="_blank" href="https://discord.gg/7fTrE99ebk">
                  <Icon icon="akar-icons:discord-fill" className="font-28" />
                </IconButton>
              </motion.div>
              <motion.div variants={varFadeInRight}>
                <IconButton target="_blank" href="https://www.facebook.com/EverETHofficial">
                  <Icon icon="gg:facebook" className="font-28" />
                </IconButton>
              </motion.div>
              <motion.div variants={varFadeInRight}>
                <IconButton target="_blank" href="https://www.twitter.com/everethofficial">
                  <Icon icon="akar-icons:twitter-fill" className="font-28" />
                </IconButton>
              </motion.div>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
