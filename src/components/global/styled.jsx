import _ from 'lodash';

const breakPoints = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xml: '1400px',
  xxl: '1600px',
  fhd: '1920px',
  rt: '2560px',
  rt15: '2880px',
  uhd: '3840px',
  s4k: '4096px'
};

const attributes = {
  m: 'margin',
  p: 'padding'
}

const _attrs = `(${_.keys(attributes).toString().replace(/,/g, '|')})`;
const _bpoints = `(${_.keys(breakPoints).toString().replace(/,/g, '|')})`;

/**
 * Remove comma and parse all line to one
 * @param {string} src The data source to parse
 * @returns 
 */
const removeComma = (src) => {
  return src.replace(/(\s+){2,}/g, '')
            .replace(/,/g, ' ');
}

export const mQuery = (breakpoint, attribute, value) => {
  return `
    @media only screen and (min-width: ${breakpoint}) {
      ${attribute}: ${value};
    }
  `;
}

/**
 * Parse props to style
 * _matches is the props match the pattern, those isn't match will be remove from match like onClick, onChange,...
 * _styles will get the match props, transform them into media query css with input attribute short-hand
 * @param {any} props Props
 * @returns Css styled string
 */
export const propStyle = (props) => {
  const _units = '(\\d+)(px|em|rem)';
  const _matches = _.keys(props).toString().match(RegExp(`${_attrs}-${_bpoints}-${_units}`, 'g'));
  const _styles = _matches.toString().replace(RegExp(`${_attrs}-${_bpoints}-${_units}`, 'g'), ($1, $2, $3, $4, $5) => {
    return mQuery(breakPoints[$3], attributes[$2], $4 + $5);
  });
  return removeComma(_styles);
};

export const margin = (styles) => {
  const _styles = _.keys(styles).toString().replace(RegExp(_bpoints, 'g'), ($1) => {
    return mQuery(breakPoints[$1], 'margin', styles[$1]);
  });
  return removeComma(_styles);
};

export const padding = () => {

};