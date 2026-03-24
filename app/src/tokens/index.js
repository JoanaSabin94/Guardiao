/**
 * Guardião — Design Tokens
 * Single source of truth for colours, spacing, typography and radii.
 * Mirror of the lo-fi wireframe variables (see /wireframes/index.html).
 */

export const colors = {
  // Backgrounds
  bgPage:   '#E0E0E0',
  surface:  '#FFFFFF',
  surface2: '#F5F5F5',
  surface3: '#EEEEEE',

  // Text
  text1: '#0A0A0A',
  text2: '#444444',
  text3: '#888888',
  text4: '#BBBBBB',

  // Borders
  border:  'rgba(0,0,0,0.09)',
  border2: 'rgba(0,0,0,0.16)',

  // Brand
  brand:       '#0A0A0A',
  brandLight:  '#2A2A2A',

  // Semantic
  success: '#2D7A2D',
  danger:  '#C0392B',
  warning: '#8B6914',
};

export const spacing = {
  xs:  4,
  sm:  8,
  md:  16,
  lg:  24,
  xl:  32,
  xxl: 48,
};

export const radius = {
  sm:  8,
  md:  12,
  lg:  16,
  xl:  20,
  full: 999,
};

export const typography = {
  // Font families (update once custom font is loaded)
  fontRegular:  'System',
  fontMedium:   'System',
  fontSemiBold: 'System',
  fontBold:     'System',

  // Sizes
  xs:   11,
  sm:   12,
  base: 14,
  md:   16,
  lg:   18,
  xl:   22,
  xxl:  28,
  hero: 36,
};
