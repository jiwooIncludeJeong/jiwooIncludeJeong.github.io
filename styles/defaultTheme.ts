import type { DefaultTheme } from 'styled-components';
import DarkColor from '@assets/darkColor';
import LightColor from '@assets/lightColor';

export const size = {
  mobile: 762,
  tabletS: 1018,
  tabletL: 1254,
  laptop: 1594,
  desktopS: 1804,
  desktopL: 2164,
  grid1: 2164,
  grid2: 1254,
  grid3: 1018,
  grid4: 762,
  grid5: 375,
};

const defaultTheme = {
  minMobile: `(min-width: ${size.mobile}px)`,
  maxMobile: `(max-width: ${size.mobile}px)`,
  minTabletS: `(min-width: ${size.tabletS}px)`,
  maxTabletS: `(max-width: ${size.tabletS}px)`,
  minTabletL: `(min-width: ${size.tabletL}px)`,
  maxTabletL: `(max-width: ${size.tabletL}px)`,
  minLaptop: `(min-width: ${size.laptop}px)`,
  maxLaptop: `(max-width: ${size.laptop}px)`,
  minDesktopS: `(min-width: ${size.desktopS}px)`,
  maxDesktopS: `(max-width: ${size.desktopS}px)`,
  minDesktopL: `(min-width: ${size.desktopL}px)`,
  maxDesktopL: `(max-width: ${size.desktopL}px)`,
  minGrid1: `(min-width: ${size.grid1}px)`,
  maxGrid1: `(max-width: ${size.grid1 - 1}px)`,
  minGrid2: `(min-width: ${size.grid2}px)`,
  maxGrid2: `(max-width: ${size.grid2 - 1}px)`,
  minGrid3: `(min-width: ${size.grid3}px)`,
  maxGrid3: `(max-width: ${size.grid3 - 1}px)`,
  minGrid4: `(min-width: ${size.grid4}px)`,
  maxGrid4: `(max-width: ${size.grid4 - 1}px)`,
  minGrid5: `(min-width: ${size.grid5}px)`,
  maxGrid5: `(max-width: ${size.grid5 - 1}px)`,
};

export const darkTheme: DefaultTheme = {
  color: DarkColor,
  ...defaultTheme,
};

export const lightTheme: DefaultTheme = {
  color: LightColor,
  ...defaultTheme,
};

export default defaultTheme;
