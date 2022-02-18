
let theme = {
  // Color Variables
  white: '#FFFFFF',
  black: '#000000',
  grey: '#ccc',
  red: '#ED1D25',
  paleRed: '#DE5050',
  rouge: '#98252b',
  buttonDisabledBg: '#FF8E8E',
  lightGrey: '#666',
  green: '#4ed07d',
  barBG: '#424242',
  barButton: '#4DD0E1',
  starColor: '#ffbe18',
  whiteGrey: '#F0F0F0',
  radicalRed: '#FA3F70',
  // Named Color Variables
  cargBg: '#FA4560',
  contrast: '#ffffff',
  buttonTextColor: '#ffffff',
  disabledGrey: '#cac6c6',
  containerGrey: 'rgba(0,0,0, 0.09)',
  borderGrey: 'rgba(0,0,0, 0.09)',
  cardGrey: 'rgba(201, 198, 198, 0.2)',
  cardVerticalSpacing: 10,
  overlayBackground: 'rgba(37, 8, 10, 0.78)',
  primaryUnHighlighted: '#FF8E8E',
  text: '#000',
  header: '#FA3F70',
  textLightGrey: '#666',
  background: '#FFF',
  buttonBg: '#FA3F70',
  errorColor: '#F00',
  primary: '#FA3F70',
  brand: '#FA3F70',
  inputBackground: '#ededed',
  buttonPickerColor: '#007AFF',
  textGrey: '#9E9E9E',
  scrambleKeyboardBackground: '#ECEFF1',
  greyLine: '#ECECEC',
  qrCouponIcon: '#44E77B',
  darkBrand: '#C10C19',
  darkBlue: '#2F476D',
  qrPromoTurqoise: '#00C4C1',
  darkGrey: '#DBDBDB',
  opacityBlack: 'rgba(0,0,0, 0.5)',
  opacityWhite: 'rgba(255, 255, 255, 0.25)',
  opacityExtremeWhite: 'rgba(255, 255, 255, 0.05)',
  transparent: 'rgba(0,0,0,0)',
  softGrey: '#949494',
  gold: '#C4AF4C',
  couponGrey: '#F8F8F8',
  amount: '#4ed07d',
  wallet: '#c38a05',
  purchase: '#0787e3',
  brown: '#A52A2A',
  lightBlue: '#0299d1',
  opacityBrand: 'rgba(242,24,53,0.5)',
  gradientMiddle: '#FAFAFA',
  pink: '#FF9999',
  darkRed: '#E30717',
  orange: '#FF841C',
  darkGreen: '#0ba042',
  lightBlack: '#333333',
  blueAmount: '#3892FC',
  darkOrange: '#ff6300',
  emoneyGold: '#D8A101',
  dashLine: '#C7C7C7',
  pinkBrand: '#FA3F70',
  lightPink: '#FFEFF4',
  superLightpurple: '#F9F8FD',
  superlightGrey: '#F1F3F6',
  lightPurple: '#7B7F9E',
  lightPinkNew: '#fb658c',

  // fonSizes
  fontSizeXS: 10,
  fontSizeSmall: 12,
  fontSizeNormal: 14,
  fontSizeMedium: 16,
  fontSizeLarge: 18,
  fontSize20: 20,
  fontSize22: 22,
  fontSizeXL: 24,
  fontSize26: 26,
  fontSizeExtraXL: 28,
  fontSize30: 30,
  fontSizeXXL: 60,
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightBold: '700',
  placeholderTextColor: '#9B9B9B',
  bottomBorderHighlighted: 2,
  bottomBorderRegular: 1,
  padding: 20,

  roboto: 'roboto',
  robotoLight: 'Roboto-Light',

  spinnerSizeLarge: 80,
  separatorColor: '#ECECEC',
  separatorSize: 8
};

const textBasic = {
  fontFamily: 'Roboto',
  color: theme.black,
  fontWeight: theme.fontWeightRegular,
  fontSize: theme.fontSizeNormal
};
const text = {
  text: {
    ...textBasic,
    color: theme.textLightGrey,
  },
  textLight: {
    ...textBasic,
    color: theme.textLightGrey,
  },
  textSM: {
    ...textBasic,
    color: theme.textLightGrey,
    fontSize: theme.fontSizeSmall,
  },
  textXS: {
    ...textBasic,
    color: theme.textLightGrey,
    fontSize: theme.fontSizeXS,
  },
  primary: {
    ...textBasic,
    color: theme.brand,
  },
  contrast: {
    ...textBasic,
    color: theme.contrast,
  },
  h1: {
    ...textBasic,
    fontSize: theme.fontSizeXL,
    fontWeight: '500',
  },
  h2: {
    ...textBasic,
    fontSize: theme.fontSizeLarge
  },
  h3: {
    ...textBasic,
    fontSize: theme.fontSizeMedium
  },
  center: {
    textAlign: 'center'
  },
  justify: {
    textAlign: 'justify'
  }
};
const container = {
  padding: {
    padding: theme.padding
  },
  centerFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export {
  theme,
  container,
  text
};
