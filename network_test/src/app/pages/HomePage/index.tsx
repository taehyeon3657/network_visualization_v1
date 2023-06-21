import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { ResponsiveNetworkCanvas } from '@nivo/network';

let data_test = {
  nodes: [
    {
      id: 'Node 1',
      height: 1,
      size: 24,
      color: 'rgb(97, 205, 187)',
    },
    {
      id: 'Node 2',
      height: 1,
      size: 24,
      color: 'rgb(97, 205, 187)',
    },
    {
      id: 'Node 3',
      height: 1,
      size: 24,
      color: 'rgb(97, 205, 187)',
    },
    {
      id: 'Node 4',
      height: 1,
      size: 24,
      color: 'rgb(97, 205, 187)',
    },
    {
      id: 'Node 5',
      height: 1,
      size: 24,
      color: 'rgb(97, 205, 187)',
    },
    {
      id: 'Node 6',
      height: 1,
      size: 24,
      color: 'rgb(97, 205, 187)',
    },
    {
      id: 'Node 7',
      height: 1,
      size: 24,
      color: 'rgb(97, 205, 187)',
    },
    {
      id: 'Node 8',
      height: 1,
      size: 24,
      color: 'rgb(97, 205, 187)',
    },
    {
      id: 'Node 9',
      height: 1,
      size: 24,
      color: 'rgb(97, 205, 187)',
    },
    {
      id: 'Node 10',
      height: 1,
      size: 24,
      color: 'rgb(97, 205, 187)',
    },
    {
      id: 'Node 11',
      height: 1,
      size: 24,
      color: 'rgb(97, 205, 187)',
    },
    {
      id: 'Node 12',
      height: 1,
      size: 24,
      color: 'rgb(97, 205, 187)',
    },
    {
      id: 'Node 13',
      height: 1,
      size: 24,
      color: 'rgb(97, 205, 187)',
    },
    {
      id: 'Node 14',
      height: 1,
      size: 24,
      color: 'rgb(97, 205, 187)',
    },
    {
      id: 'Node 0',
      height: 2,
      size: 32,
      color: 'rgb(244, 117, 96)',
    },
    {
      id: 'Node 1.0',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 1.1',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 1.2',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 1.3',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 1.4',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 1.5',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 1.6',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 1.7',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 2.0',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 2.1',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 2.2',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 2.3',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 2.4',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 2.5',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 2.6',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 2.7',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 2.8',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 2.9',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 2.10',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 2.11',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 3.0',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 3.1',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 3.2',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 3.3',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 3.4',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 3.5',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 3.6',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 3.7',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 3.8',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 4.0',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 4.1',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 4.2',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 4.3',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 4.4',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 4.5',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 4.6',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 4.7',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 4.8',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 5.0',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 5.1',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 5.2',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 5.3',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 5.4',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 5.5',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 5.6',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 5.7',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 5.8',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 5.9',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 5.10',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 5.11',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 6.0',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 6.1',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 6.2',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 6.3',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 6.4',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 6.5',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 6.6',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 6.7',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 6.8',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 6.9',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 7.0',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 7.1',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 7.2',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 7.3',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 7.4',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 7.5',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 7.6',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 7.7',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 7.8',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 7.9',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 8.0',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 8.1',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 8.2',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 8.3',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 8.4',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 8.5',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 8.6',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 9.0',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 9.1',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 9.2',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 9.3',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 9.4',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 9.5',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 9.6',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 10.0',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 10.1',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 10.2',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 10.3',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 10.4',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 10.5',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 10.6',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 10.7',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 10.8',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 10.9',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 11.0',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 11.1',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 11.2',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 11.3',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 11.4',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 11.5',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 11.6',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 11.7',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 12.0',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 12.1',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 12.2',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 12.3',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 12.4',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 12.5',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 12.6',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 12.7',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 12.8',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 12.9',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 13.0',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 13.1',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 13.2',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 13.3',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 13.4',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 13.5',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 13.6',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 14.0',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 14.1',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 14.2',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 14.3',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 14.4',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 14.5',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 14.6',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 14.7',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 14.8',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
    {
      id: 'Node 14.9',
      height: 0,
      size: 12,
      color: 'rgb(232, 193, 160)',
    },
  ],
  links: [
    {
      source: 'Node 0',
      target: 'Node 1',
      distance: 80,
    },
    {
      source: 'Node 1',
      target: 'Node 1',
      distance: 80,
    },
    {
      source: 'Node 1',
      target: 'Node 1.0',
      distance: 50,
    },
    {
      source: 'Node 1',
      target: 'Node 1.1',
      distance: 50,
    },
    {
      source: 'Node 1',
      target: 'Node 1.2',
      distance: 50,
    },
    {
      source: 'Node 1',
      target: 'Node 1.3',
      distance: 50,
    },
    {
      source: 'Node 1',
      target: 'Node 1.4',
      distance: 50,
    },
    {
      source: 'Node 1',
      target: 'Node 1.5',
      distance: 50,
    },
    {
      source: 'Node 1',
      target: 'Node 1.6',
      distance: 50,
    },
    {
      source: 'Node 1',
      target: 'Node 1.7',
      distance: 50,
    },
    {
      source: 'Node 0',
      target: 'Node 2',
      distance: 80,
    },
    {
      source: 'Node 2',
      target: 'Node 2.0',
      distance: 50,
    },
    {
      source: 'Node 2',
      target: 'Node 2.1',
      distance: 50,
    },
    {
      source: 'Node 2',
      target: 'Node 2.2',
      distance: 50,
    },
    {
      source: 'Node 2',
      target: 'Node 2.3',
      distance: 50,
    },
    {
      source: 'Node 2',
      target: 'Node 2.4',
      distance: 50,
    },
    {
      source: 'Node 2',
      target: 'Node 2.5',
      distance: 50,
    },
    {
      source: 'Node 2',
      target: 'Node 2.6',
      distance: 50,
    },
    {
      source: 'Node 2',
      target: 'Node 2.7',
      distance: 50,
    },
    {
      source: 'Node 2',
      target: 'Node 2.8',
      distance: 50,
    },
    {
      source: 'Node 2',
      target: 'Node 2.9',
      distance: 50,
    },
    {
      source: 'Node 2',
      target: 'Node 2.10',
      distance: 50,
    },
    {
      source: 'Node 2',
      target: 'Node 2.11',
      distance: 50,
    },
    {
      source: 'Node 0',
      target: 'Node 3',
      distance: 80,
    },
    {
      source: 'Node 3',
      target: 'Node 3.0',
      distance: 50,
    },
    {
      source: 'Node 3',
      target: 'Node 3.1',
      distance: 50,
    },
    {
      source: 'Node 3',
      target: 'Node 3.2',
      distance: 50,
    },
    {
      source: 'Node 3',
      target: 'Node 3.3',
      distance: 50,
    },
    {
      source: 'Node 3',
      target: 'Node 3.4',
      distance: 50,
    },
    {
      source: 'Node 3',
      target: 'Node 3.5',
      distance: 50,
    },
    {
      source: 'Node 3',
      target: 'Node 3.6',
      distance: 50,
    },
    {
      source: 'Node 3',
      target: 'Node 3.7',
      distance: 50,
    },
    {
      source: 'Node 3',
      target: 'Node 3.8',
      distance: 50,
    },
    {
      source: 'Node 0',
      target: 'Node 4',
      distance: 80,
    },
    {
      source: 'Node 4',
      target: 'Node 5',
      distance: 80,
    },
    {
      source: 'Node 4',
      target: 'Node 13',
      distance: 80,
    },
    {
      source: 'Node 4',
      target: 'Node 4.0',
      distance: 50,
    },
    {
      source: 'Node 4',
      target: 'Node 4.1',
      distance: 50,
    },
    {
      source: 'Node 4',
      target: 'Node 4.2',
      distance: 50,
    },
    {
      source: 'Node 4',
      target: 'Node 4.3',
      distance: 50,
    },
    {
      source: 'Node 4',
      target: 'Node 4.4',
      distance: 50,
    },
    {
      source: 'Node 4',
      target: 'Node 4.5',
      distance: 50,
    },
    {
      source: 'Node 4',
      target: 'Node 4.6',
      distance: 50,
    },
    {
      source: 'Node 4',
      target: 'Node 4.7',
      distance: 50,
    },
    {
      source: 'Node 4',
      target: 'Node 4.8',
      distance: 50,
    },
    {
      source: 'Node 0',
      target: 'Node 5',
      distance: 80,
    },
    {
      source: 'Node 5',
      target: 'Node 6',
      distance: 80,
    },
    {
      source: 'Node 5',
      target: 'Node 5.0',
      distance: 50,
    },
    {
      source: 'Node 5',
      target: 'Node 5.1',
      distance: 50,
    },
    {
      source: 'Node 5',
      target: 'Node 5.2',
      distance: 50,
    },
    {
      source: 'Node 5',
      target: 'Node 5.3',
      distance: 50,
    },
    {
      source: 'Node 5',
      target: 'Node 5.4',
      distance: 50,
    },
    {
      source: 'Node 5',
      target: 'Node 5.5',
      distance: 50,
    },
    {
      source: 'Node 5',
      target: 'Node 5.6',
      distance: 50,
    },
    {
      source: 'Node 5',
      target: 'Node 5.7',
      distance: 50,
    },
    {
      source: 'Node 5',
      target: 'Node 5.8',
      distance: 50,
    },
    {
      source: 'Node 5',
      target: 'Node 5.9',
      distance: 50,
    },
    {
      source: 'Node 5',
      target: 'Node 5.10',
      distance: 50,
    },
    {
      source: 'Node 5',
      target: 'Node 5.11',
      distance: 50,
    },
    {
      source: 'Node 0',
      target: 'Node 6',
      distance: 80,
    },
    {
      source: 'Node 6',
      target: 'Node 9',
      distance: 80,
    },
    {
      source: 'Node 6',
      target: 'Node 6.0',
      distance: 50,
    },
    {
      source: 'Node 6',
      target: 'Node 6.1',
      distance: 50,
    },
    {
      source: 'Node 6',
      target: 'Node 6.2',
      distance: 50,
    },
    {
      source: 'Node 6',
      target: 'Node 6.3',
      distance: 50,
    },
    {
      source: 'Node 6',
      target: 'Node 6.4',
      distance: 50,
    },
    {
      source: 'Node 6',
      target: 'Node 6.5',
      distance: 50,
    },
    {
      source: 'Node 6',
      target: 'Node 6.6',
      distance: 50,
    },
    {
      source: 'Node 6',
      target: 'Node 6.7',
      distance: 50,
    },
    {
      source: 'Node 6',
      target: 'Node 6.8',
      distance: 50,
    },
    {
      source: 'Node 6',
      target: 'Node 6.9',
      distance: 50,
    },
    {
      source: 'Node 0',
      target: 'Node 7',
      distance: 80,
    },
    {
      source: 'Node 7',
      target: 'Node 14',
      distance: 80,
    },
    {
      source: 'Node 7',
      target: 'Node 7.0',
      distance: 50,
    },
    {
      source: 'Node 7',
      target: 'Node 7.1',
      distance: 50,
    },
    {
      source: 'Node 7',
      target: 'Node 7.2',
      distance: 50,
    },
    {
      source: 'Node 7',
      target: 'Node 7.3',
      distance: 50,
    },
    {
      source: 'Node 7',
      target: 'Node 7.4',
      distance: 50,
    },
    {
      source: 'Node 7',
      target: 'Node 7.5',
      distance: 50,
    },
    {
      source: 'Node 7',
      target: 'Node 7.6',
      distance: 50,
    },
    {
      source: 'Node 7',
      target: 'Node 7.7',
      distance: 50,
    },
    {
      source: 'Node 7',
      target: 'Node 7.8',
      distance: 50,
    },
    {
      source: 'Node 7',
      target: 'Node 7.9',
      distance: 50,
    },
    {
      source: 'Node 0',
      target: 'Node 8',
      distance: 80,
    },
    {
      source: 'Node 8',
      target: 'Node 5',
      distance: 80,
    },
    {
      source: 'Node 8',
      target: 'Node 8.0',
      distance: 50,
    },
    {
      source: 'Node 8',
      target: 'Node 8.1',
      distance: 50,
    },
    {
      source: 'Node 8',
      target: 'Node 8.2',
      distance: 50,
    },
    {
      source: 'Node 8',
      target: 'Node 8.3',
      distance: 50,
    },
    {
      source: 'Node 8',
      target: 'Node 8.4',
      distance: 50,
    },
    {
      source: 'Node 8',
      target: 'Node 8.5',
      distance: 50,
    },
    {
      source: 'Node 8',
      target: 'Node 8.6',
      distance: 50,
    },
    {
      source: 'Node 0',
      target: 'Node 9',
      distance: 80,
    },
    {
      source: 'Node 9',
      target: 'Node 3',
      distance: 80,
    },
    {
      source: 'Node 9',
      target: 'Node 13',
      distance: 80,
    },
    {
      source: 'Node 9',
      target: 'Node 9.0',
      distance: 50,
    },
    {
      source: 'Node 9',
      target: 'Node 9.1',
      distance: 50,
    },
    {
      source: 'Node 9',
      target: 'Node 9.2',
      distance: 50,
    },
    {
      source: 'Node 9',
      target: 'Node 9.3',
      distance: 50,
    },
    {
      source: 'Node 9',
      target: 'Node 9.4',
      distance: 50,
    },
    {
      source: 'Node 9',
      target: 'Node 9.5',
      distance: 50,
    },
    {
      source: 'Node 9',
      target: 'Node 9.6',
      distance: 50,
    },
    {
      source: 'Node 0',
      target: 'Node 10',
      distance: 80,
    },
    {
      source: 'Node 10',
      target: 'Node 6',
      distance: 80,
    },
    {
      source: 'Node 10',
      target: 'Node 10.0',
      distance: 50,
    },
    {
      source: 'Node 10',
      target: 'Node 10.1',
      distance: 50,
    },
    {
      source: 'Node 10',
      target: 'Node 10.2',
      distance: 50,
    },
    {
      source: 'Node 10',
      target: 'Node 10.3',
      distance: 50,
    },
    {
      source: 'Node 10',
      target: 'Node 10.4',
      distance: 50,
    },
    {
      source: 'Node 10',
      target: 'Node 10.5',
      distance: 50,
    },
    {
      source: 'Node 10',
      target: 'Node 10.6',
      distance: 50,
    },
    {
      source: 'Node 10',
      target: 'Node 10.7',
      distance: 50,
    },
    {
      source: 'Node 10',
      target: 'Node 10.8',
      distance: 50,
    },
    {
      source: 'Node 10',
      target: 'Node 10.9',
      distance: 50,
    },
    {
      source: 'Node 0',
      target: 'Node 11',
      distance: 80,
    },
    {
      source: 'Node 11',
      target: 'Node 11.0',
      distance: 50,
    },
    {
      source: 'Node 11',
      target: 'Node 11.1',
      distance: 50,
    },
    {
      source: 'Node 11',
      target: 'Node 11.2',
      distance: 50,
    },
    {
      source: 'Node 11',
      target: 'Node 11.3',
      distance: 50,
    },
    {
      source: 'Node 11',
      target: 'Node 11.4',
      distance: 50,
    },
    {
      source: 'Node 11',
      target: 'Node 11.5',
      distance: 50,
    },
    {
      source: 'Node 11',
      target: 'Node 11.6',
      distance: 50,
    },
    {
      source: 'Node 11',
      target: 'Node 11.7',
      distance: 50,
    },
    {
      source: 'Node 0',
      target: 'Node 12',
      distance: 80,
    },
    {
      source: 'Node 12',
      target: 'Node 12.0',
      distance: 50,
    },
    {
      source: 'Node 12',
      target: 'Node 12.1',
      distance: 50,
    },
    {
      source: 'Node 12',
      target: 'Node 12.2',
      distance: 50,
    },
    {
      source: 'Node 12',
      target: 'Node 12.3',
      distance: 50,
    },
    {
      source: 'Node 12',
      target: 'Node 12.4',
      distance: 50,
    },
    {
      source: 'Node 12',
      target: 'Node 12.5',
      distance: 50,
    },
    {
      source: 'Node 12',
      target: 'Node 12.6',
      distance: 50,
    },
    {
      source: 'Node 12',
      target: 'Node 12.7',
      distance: 50,
    },
    {
      source: 'Node 12',
      target: 'Node 12.8',
      distance: 50,
    },
    {
      source: 'Node 12',
      target: 'Node 12.9',
      distance: 50,
    },
    {
      source: 'Node 0',
      target: 'Node 13',
      distance: 80,
    },
    {
      source: 'Node 13',
      target: 'Node 13.0',
      distance: 50,
    },
    {
      source: 'Node 13',
      target: 'Node 13.1',
      distance: 50,
    },
    {
      source: 'Node 13',
      target: 'Node 13.2',
      distance: 50,
    },
    {
      source: 'Node 13',
      target: 'Node 13.3',
      distance: 50,
    },
    {
      source: 'Node 13',
      target: 'Node 13.4',
      distance: 50,
    },
    {
      source: 'Node 13',
      target: 'Node 13.5',
      distance: 50,
    },
    {
      source: 'Node 13',
      target: 'Node 13.6',
      distance: 50,
    },
    {
      source: 'Node 0',
      target: 'Node 14',
      distance: 80,
    },
    {
      source: 'Node 14',
      target: 'Node 14.0',
      distance: 50,
    },
    {
      source: 'Node 14',
      target: 'Node 14.1',
      distance: 50,
    },
    {
      source: 'Node 14',
      target: 'Node 14.2',
      distance: 50,
    },
    {
      source: 'Node 14',
      target: 'Node 14.3',
      distance: 50,
    },
    {
      source: 'Node 14',
      target: 'Node 14.4',
      distance: 50,
    },
    {
      source: 'Node 14',
      target: 'Node 14.5',
      distance: 50,
    },
    {
      source: 'Node 14',
      target: 'Node 14.6',
      distance: 50,
    },
    {
      source: 'Node 14',
      target: 'Node 14.7',
      distance: 50,
    },
    {
      source: 'Node 14',
      target: 'Node 14.8',
      distance: 50,
    },
    {
      source: 'Node 14',
      target: 'Node 14.9',
      distance: 50,
    },
  ],
};


const MyResponsiveNetworkCanvas = ({ data_test /* see data tab */ }) => (
  <ResponsiveNetworkCanvas
    data={data_test}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    linkDistance={e => e.distance}
    centeringStrength={0.3}
    repulsivity={6}
    nodeColor={e => e.color}
    nodeBorderWidth={1}
    nodeBorderColor={{
      from: 'color',
      modifiers: [['darker', 0.8]],
    }}
    linkThickness={n => 2 + 2 * n.target.data.height}
  />
);

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>My HomePage</span>
    </>
  );
}
