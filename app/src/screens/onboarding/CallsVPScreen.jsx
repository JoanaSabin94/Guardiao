/**
 * CallsVPScreen (VP1)
 * ────────────────────
 * Value prop: how call blocking works.
 * Wireframe ref: data-s="vp1"
 */

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, spacing, typography, radius } from '../../tokens';

export default function CallsVPScreen({ navigation }) {
  return (
    <View style={styles.root}>
      {/* Illustration placeholder */}
      <View style={styles.hero} />

      <View style={styles.copy}>
        <Text style={styles.title}>Chamadas suspeitas bloqueadas antes de tocar</Text>
        <Text style={styles.body}>
          O Guardião analisa quem está a ligar e recusa automaticamente
          números suspeitos — sem o incomodar.
        </Text>
      </View>

      <View style={styles.dots}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
      </View>

      <Pressable style={styles.cta} onPress={() => navigation.navigate('MessagesVP')}>
        <Text style={styles.ctaLabel}>Próximo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root:      { flex: 1, backgroundColor: colors.surface, alignItems: 'center', paddingHorizontal: spacing.lg },
  hero:      { flex: 1, justifyContent: 'center', alignItems: 'center' },
  copy:      { gap: spacing.sm, alignItems: 'center', paddingBottom: spacing.md },
  title:     { fontSize: typography.xl, fontWeight: '700', color: colors.text1, textAlign: 'center', letterSpacing: -0.5 },
  body:      { fontSize: typography.base, color: colors.text2, textAlign: 'center', lineHeight: 22 },
  dots:      { flexDirection: 'row', gap: 6, marginVertical: spacing.md },
  dot:       { width: 6, height: 6, borderRadius: radius.full, backgroundColor: colors.text4 },
  dotActive: { width: 20, backgroundColor: colors.text1 },
  cta:       { width: '100%', backgroundColor: colors.brand, borderRadius: radius.xl, paddingVertical: 16, alignItems: 'center', marginBottom: spacing.xl },
  ctaLabel:  { fontSize: typography.md, fontWeight: '600', color: '#FFFFFF' },
});
