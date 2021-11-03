/* eslint-disable */
import React from 'react';
import { styled } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Paper,
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';
import { Icon } from '@iconify/react';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';

import { varFadeInUp, MotionInView, varFadeInDown, varFadeIn } from '../../components/animate';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const MOCK_FAQS = [
  {
    question: 'Is EverETH on Binance Smart Chain or Ethereum network?',
    answer: 'The smaller fees always win. EverETH is on Binance Smart Chain.'
  },
  {
    question: 'When I will recieve my Ethereum dividends?',
    answer:
      'Our unique reward system is triggered by volume (buy + sell activity to cover gas fees).Payouts to holders may not occur every 30 minutes if the trading volume is low. When this is the case, the amount of rewarded Ethereum each holder will receive does not decrease. However, will accrue over a longer period of time until it is suitable for a payout to trigger (usually between 1-2 hours).'
  },
  {
    question: 'Where to check how much I earned?',
    answer:
      'Our developers created the EverETH dashboard where you can check your earnings live. Go to : https://EverETH.app Connect your wallet, or paste your wallet address. However there is another way to check your Ethereum balance: You simply need to add the custom token Binance-Peg Ethereum BEP20 to your wallet.'
  },
  {
    question: 'How do I get touch with the team?',
    answer: 'The best way to contact the team is through our Telegram. We are always available to help you!'
  }
];
export default function Faq() {
  return (
    <RootStyle id="faq">
      <Box sx={{ mb: { xs: 5, md: 5 } }}>
        <MotionInView variants={varFadeInUp}>
          <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}>
            EverETH
          </Typography>
        </MotionInView>
        <MotionInView variants={varFadeInDown}>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            FAQ
          </Typography>
        </MotionInView>
      </Box>
      <Container maxWidth="lg">
        <MotionInView variants={varFadeInUp}>
          {MOCK_FAQS.map((faq, key) => (
            <Accordion key={key}>
              <AccordionSummary expandIcon={<Icon icon={arrowIosDownwardFill} width={20} height={20} />}>
                <Typography variant="subtitle1">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
