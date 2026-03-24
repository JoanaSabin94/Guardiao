/**
 * MessagesVPScreen (VP2)
 * ────────────────────────
 * Value prop: message fraud detection.
 * NOTE: App detects suspicious messages and sends a push notification.
 *       It does NOT block or remove messages.
 * Wireframe ref: data-s="vp2"
 */

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, spacing, typography, radius } from '../../tokens';

export default function MessagesVPScreen({ navigation }) {
  return (
    <View style={styles.root}>
      {/* Illustration placeholder */}
      <View style={styles.hero} />

      <View style={styles.copy}>
        <Text style={styles.title}>Avisamos quando receber uma mensagem suspeita</Text>
        <Text style={styles.body}>
          Quando detetamos uma mensagem fraudulenta, enviamos um aviso
          ao seu telemóvel. A mensagem fica na sua caixa — a decisão
          é sempre sua.
        </Text>
      </View>

      <View style={styles.dots}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.dotActive]} />
      </View>

      <Pressable style={styles.cta} onPress={() => navigation.navigate('Permissions')}>
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
