/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              GUARDIÃO — DESIGN SYSTEM TOKENS                ║
 * ║                  Single source of truth                     ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * Import anywhere:
 *   import { colors, typography, spacing, radius, shadows } from '@/design-system/tokens'
 *
 * Brand essence: Serenity · Confidence · Modernity
 * The app earns trust by being calm, competent, and invisible.
 * It never shouts.
 */

// ─────────────────────────────────────────────────────────────────
// COLORS
// ─────────────────────────────────────────────────────────────────

export const colors = {

  // ── Primary palette ──────────────────────────────────────────
  navy:      '#101B3B',   // deep navy — backgrounds, headlines, primary buttons
  blue:      '#26428B',   // royal blue — icons, links, active states
  blueMid:   '#516AC7',   // mid blue — secondary elements, rings, borders

  // ── Accent palette ────────────────────────────────────────────
  gold:      '#E3AF64',   // warm gold — badges, blocked events, highlights, CTAs
  cream:     '#FDEDD3',   // cream — warm card backgrounds, soft surfaces
  light:     '#F8F6F7',   // near-white — page / screen background

  // ── Text ──────────────────────────────────────────────────────
  textPrimary:   '#101B3B',   // navy — all main text
  textSecondary: '#516AC7',   // mid blue — subheads, captions, muted text
  textInverse:   '#FDEDD3',   // cream — text on dark / navy backgrounds

  // ── Semantic ──────────────────────────────────────────────────
  // NO red anywhere in this product.
  // Blocked events are calm receipts, not alarms.
  success:   '#516AC7',   // mid blue
  warning:   '#E3AF64',   // gold
  blocked:   '#E3AF64',   // gold — blocked events are CALM, not alarming

  // ── Utility ───────────────────────────────────────────────────
  white:     '#FFFFFF',
  border:    'rgba(38, 66, 139, 0.08)',
  borderMid: 'rgba(38, 66, 139, 0.16)',
  overlay:   'rgba(16, 27, 59, 0.48)',
};

// ─────────────────────────────────────────────────────────────────
// GRADIENTS
// ─────────────────────────────────────────────────────────────────

export const gradients = {
  hero:   'linear-gradient(160deg, #101B3B 0%, #26428B 50%, #E3AF64 100%)',
  subtle: 'linear-gradient(160deg, #dce8ff 0%, #eef3ff 60%, #FDEDD3 100%)',
  shield: 'linear-gradient(180deg, #26428B 0%, #516AC7 100%)',
};

// React Native Animated / Expo LinearGradient versions:
export const gradientProps = {
  hero:   { colors: ['#101B3B', '#26428B', '#E3AF64'], start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
  subtle: { colors: ['#dce8ff', '#eef3ff', '#FDEDD3'], start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
  shield: { colors: ['#26428B', '#516AC7'], start: { x: 0, y: 0 }, end: { x: 0, y: 1 } },
};

// ─────────────────────────────────────────────────────────────────
// TYPOGRAPHY
// ─────────────────────────────────────────────────────────────────

export const fonts = {
  display: 'NOFEX',             // brand headings, hero moments
  body:    'NeueHaasGrotesk',   // all body, UI labels
  // Fallbacks (loaded via expo-font):
  displayFallback: 'DMSerifDisplay',
  bodyFallback:    'Inter',
};

export const typography = {

  // ── Display scale (NOFEX) ─────────────────────────────────────
  displayLg: {
    fontFamily:    fonts.display,
    fontSize:      34,
    fontWeight:    '700',
    lineHeight:    39,           // ≈ 1.15×
    letterSpacing: -0.8,
    color:         colors.textPrimary,
  },
  displayMd: {
    fontFamily:    fonts.display,
    fontSize:      28,
    fontWeight:    '700',
    lineHeight:    34,           // ≈ 1.2×
    letterSpacing: -0.5,
    color:         colors.textPrimary,
  },
  displaySm: {
    fontFamily:    fonts.display,
    fontSize:      22,
    fontWeight:    '700',
    lineHeight:    28,           // ≈ 1.25×
    letterSpacing: -0.3,
    color:         colors.textPrimary,
  },

  // ── Body scale (Neue Haas Grotesk) ───────────────────────────
  bodyLg: {
    fontFamily: fonts.body,
    fontSize:   17,
    fontWeight: '400',
    lineHeight: 27,              // 1.6×
    color:      colors.textPrimary,
  },
  bodyMd: {
    fontFamily: fonts.body,
    fontSize:   15,
    fontWeight: '400',
    lineHeight: 24,              // 1.6×
    color:      colors.textPrimary,
  },
  bodySm: {
    fontFamily: fonts.body,
    fontSize:   13,
    fontWeight: '400',
    lineHeight: 20,              // 1.5×
    color:      colors.textSecondary,
  },

  // ── UI elements ───────────────────────────────────────────────
  label: {
    fontFamily:    fonts.body,
    fontSize:      14,
    fontWeight:    '500',
    lineHeight:    20,           // 1.4×
    letterSpacing: 0.1,
    color:         colors.textPrimary,
  },
  caption: {
    fontFamily:    fonts.body,
    fontSize:      11,
    fontWeight:    '400',
    lineHeight:    15,           // 1.4×
    letterSpacing: 0.2,
    color:         colors.textSecondary,
  },
  badge: {
    fontFamily:    fonts.body,
    fontSize:      10,
    fontWeight:    '600',
    lineHeight:    14,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
};

// ─────────────────────────────────────────────────────────────────
// SPACING  (base 4 px grid)
// ─────────────────────────────────────────────────────────────────

export const spacing = {
  xs:   4,
  sm:   8,
  md:   12,
  lg:   16,
  xl:   24,
  xxl:  32,
  xxxl: 48,
};

// ─────────────────────────────────────────────────────────────────
// BORDER RADIUS
// ─────────────────────────────────────────────────────────────────

export const radius = {
  sm:   8,    // badges, tags, small chips
  md:   14,   // cards, feature rows
  lg:   20,   // large cards, modals, sheets
  xl:   28,   // hero containers
  pill: 999,  // full-round buttons, pills
};

// ─────────────────────────────────────────────────────────────────
// SHADOWS  (use sparingly — cream/light surfaces only)
// ─────────────────────────────────────────────────────────────────

export const shadows = {
  // Web / CSS
  card:  '0 1px 4px rgba(16, 27, 59, 0.06)',
  float: '0 8px 24px rgba(16, 27, 59, 0.12)',
  hero:  '0 16px 40px rgba(38, 66, 139, 0.20)',

  // React Native (boxShadow not supported — use elevation + shadowColor)
  cardRN: {
    shadowColor:   colors.navy,
    shadowOffset:  { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius:  4,
    elevation:     2,
  },
  floatRN: {
    shadowColor:   colors.navy,
    shadowOffset:  { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius:  24,
    elevation:     8,
  },
  heroRN: {
    shadowColor:   colors.blue,
    shadowOffset:  { width: 0, height: 16 },
    shadowOpacity: 0.20,
    shadowRadius:  40,
    elevation:     16,
  },
};

// ─────────────────────────────────────────────────────────────────
// ANIMATION  (reference values — apply via Animated API / CSS)
// ─────────────────────────────────────────────────────────────────

export const animation = {
  // Shield float (hero screen)
  shieldFloat: {
    translateY:  [0, -6, 0],
    duration:    4000,
    easing:      'ease-in-out',
    iterations:  Infinity,
  },

  // Concentric rings pulse (staggered 500ms apart)
  ring: [
    { scale: [0.95, 1, 0.95], duration: 3000, delay:    0 },
    { scale: [0.95, 1, 0.95], duration: 3000, delay:  500 },
    { scale: [0.95, 1, 0.95], duration: 3000, delay: 1000 },
  ],

  // Feature row stagger in (on mount)
  rowStagger: {
    opacity:     [0, 1],
    translateY:  [8, 0],
    duration:    400,
    delayPerRow: 120,   // multiply by row index
  },

  // Counter tick (0 → 1, or any increment)
  // Mechanical tick — NOT bounce, NOT confetti
  counterTick: {
    scale:    [1, 1.08, 1],
    duration: 300,
    easing:   'ease-out',
    // Follow with a brief gold color flash on the number: 150ms
  },

  // Blocked event card entrance
  eventCard: {
    opacity:    [0, 1],
    translateY: [-4, 0],
    duration:   250,
  },

  // Standard transitions
  fast:     150,
  standard: 300,
  slow:     500,
};

// ─────────────────────────────────────────────────────────────────
// COMPONENT TOKENS  (pre-composed, ready to spread into StyleSheet)
// ─────────────────────────────────────────────────────────────────

export const components = {

  // Primary button
  buttonPrimary: {
    backgroundColor: colors.navy,
    borderRadius:    radius.pill,
    paddingVertical: 17,
    paddingHorizontal: 24,
    alignItems:      'center',
    justifyContent:  'center',
    ...shadows.floatRN,
  },
  buttonPrimaryLabel: {
    ...typography.label,
    fontSize:    16,
    fontWeight:  '500',
    color:       colors.cream,
  },

  // Secondary button
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderRadius:    radius.pill,
    borderWidth:     1.5,
    borderColor:     colors.navy,
    paddingVertical: 15,
    paddingHorizontal: 24,
    alignItems:      'center',
  },
  buttonSecondaryLabel: {
    ...typography.label,
    fontSize: 16,
    color:    colors.navy,
  },

  // Card
  card: {
    backgroundColor: colors.white,
    borderRadius:    radius.md,
    borderWidth:     1,
    borderColor:     colors.border,
    padding:         spacing.md,
    ...shadows.cardRN,
  },

  // Card with cream background
  cardWarm: {
    backgroundColor: colors.cream,
    borderRadius:    radius.md,
    borderWidth:     1,
    borderColor:     'rgba(227, 175, 100, 0.20)',
    padding:         spacing.md,
    ...shadows.cardRN,
  },

  // Icon container inside cards
  iconContainer: {
    width:           36,
    height:          36,
    borderRadius:    radius.sm,
    backgroundColor: 'rgba(227, 175, 100, 0.15)',  // gold tint
    alignItems:      'center',
    justifyContent:  'center',
  },

  // Active badge ("Activo")
  badgeActive: {
    backgroundColor: colors.gold,
    borderRadius:    radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeActiveLabel: {
    ...typography.badge,
    color: colors.navy,
  },

  // Blocked event notification card
  eventCard: {
    backgroundColor: colors.cream,
    borderRadius:    radius.md,
    borderLeftWidth: 3,
    borderLeftColor: colors.gold,
    padding:         spacing.md,
    ...shadows.cardRN,
  },
};
