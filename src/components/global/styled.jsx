import _ from 'lodash';

export const BREAKPOINTS = {
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

const ATTRIBUTES = {
  m: 'margin',
  p: 'padding'
}

const _attrs = `(${_.keys(ATTRIBUTES).toString().replace(/,/g, '|')})`;
const _bpoints = `(${_.keys(BREAKPOINTS).toString().replace(/,/g, '|')})`;

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
    @media (min-width: ${breakpoint}) {
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
export const p2style = (props) => {
  const _units = '(\\d+)(px|em|rem)';
  const _matches = _.keys(props).toString().match(RegExp(`${_attrs}-${_bpoints}-${_units}`, 'g'));
  const _styles = _matches.toString().replace(RegExp(`${_attrs}-${_bpoints}-${_units}`, 'g'), ($1, $2, $3, $4, $5) => {
    return mQuery(BREAKPOINTS[$3], ATTRIBUTES[$2], $4 + $5);
  });
  return removeComma(_styles);
};

export const margin = (styles) => {
  const _styles = _.keys(styles).toString().replace(RegExp(_bpoints, 'g'), ($1) => {
    return mQuery(BREAKPOINTS[$1], 'margin', styles[$1]);
  });
  return removeComma(_styles);
};

export const padding = (styles) => {
  const _styles = _.keys(styles).toString().replace(RegExp(_bpoints, 'g'), ($1) => {
    return mQuery(BREAKPOINTS[$1], 'padding', styles[$1]);
  });
  return removeComma(_styles);
};

export const query = (breakpoint, styles) => {
  return `
    @media (min-width: ${breakpoint}) {
      ${styles}
    }
  `;
};

export const sm = (styles) => {
  return query(BREAKPOINTS.sm, styles);
};

export const md = (styles) => {
  return query(BREAKPOINTS.md, styles);
};

export const lg = (styles) => {
  return query(BREAKPOINTS.lg, styles);
};

export const xl = (styles) => {
  return query(BREAKPOINTS.xl, styles);
};

export const xml = (styles) => {
  return query(BREAKPOINTS.xml, styles);
};

export const xxl = (styles) => {
  return query(BREAKPOINTS.xxl, styles);
};

export const fhd = (styles) => {
  return query(BREAKPOINTS.fhd, styles);
};

export const flex = (value) => {
  return `
    flex: 0 0 ${value};
    max-width: ${value};
  `;
}