/* eslint-disable */

import React from 'react';
import { Container, Typography, Paper, Box, Stack } from '@material-ui/core';
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector
} from '@material-ui/lab';
import { styled } from '@material-ui/core/styles';
import { varFadeInUp, MotionInView, varFadeInDown } from '../../components/animate';

const TIMELINES = [
  {
    title: 'Phase 01',
    descriptions: [
      { content: 'Design and structure', done: true },
      { content: 'Website launch', done: true },
      { content: 'Public presale', done: true },
      { content: 'Marketing campaign', done: true },
      { content: 'CoinGecko Listing', done: true },
      { content: 'CoinMarketCap Listing', done: true },
      { content: 'Smart Contract Audit', done: true }
    ],
    color: 'primary'
  },
  {
    title: 'Phase 02',
    descriptions: [
      { content: 'Dividend tracker dashboard', done: true },
      { content: 'EverETH Swap', done: true },
      { content: 'Partnerships', done: false },
      { content: 'Buy EverETH via credit card', done: false },
      { content: 'Merchandising', done: false }
    ],
    color: 'primary'
  },
  {
    title: 'Phase 03',
    descriptions: [
      { content: 'CEX Listing', done: false },
      { content: 'NFT Collection', done: false },
      { content: 'Expanding community', done: false },
      { content: 'Charity events', done: false },
      { content: 'EverETH Wallet', done: false },
      { content: 'Ecosystem development', done: false }
    ],
    color: 'primary'
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

export default function RoadMap() {
  return (
    <RootStyle id="roadmap">
      <Box sx={{ mb: { xs: 5, md: 5 } }}>
        <MotionInView variants={varFadeInUp}>
          <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}>
            EverETH
          </Typography>
        </MotionInView>
        <MotionInView variants={varFadeInDown}>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Roadmap
          </Typography>
        </MotionInView>
      </Box>
      <Container maxWidth="lg">
        <MotionInView variants={varFadeInUp}>
          <Timeline position="alternate">
            {TIMELINES.map((item, key) => (
              <TimelineItem key={key}>
                <TimelineSeparator>
                  <TimelineDot color={item.color} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    sx={{
                      p: 3,
                      bgcolor: 'grey.50012'
                    }}
                  >
                    <Typography variant="h4" mb={2}>
                      {item.title}
                    </Typography>
                    <Stack spacing={2}>
                      {item.descriptions.map((desc, key2) => (
                        <Typography
                          variant="body1"
                          key={key2}
                          sx={{ textDecoration: desc.done ? 'line-through' : 'none' }}
                        >
                          {desc.content}
                        </Typography>
                      ))}
                    </Stack>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
