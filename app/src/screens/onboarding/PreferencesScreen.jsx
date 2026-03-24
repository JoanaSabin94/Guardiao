/**
 * PreferencesScreen
 * ──────────────────
 * Initial protection preferences before entering the app.
 * Three toggles — user can change anytime in Proteção tab.
 * Wireframe ref: data-s="8"
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Pressable } from 'react-native';
import { colors, spacing, typography, radius } from '../../tokens';

const PREFS = [
  {
    id: 'anonymous',
    title: 'Recusar números anónimos',
    description: 'Chamadas de número oculto são recusadas antes de o telefone tocar.',
    defaultOn: true,
  },
  {
    id: 'international',
    title: 'Recusar chamadas do estrangeiro',
    description: 'Filtra chamadas de números internacionais.',
    defaultOn: false,
  },
  {
    id: 'unknown',
    title: 'Recusar números desconhecidos',
    description: 'Avisa quando alguém fora dos seus contactos ligar.',
    defaultOn: true,
  },
];

export default function PreferencesScreen({ navigation }) {
  const [values, setValues] = useState(
    Object.fromEntries(PREFS.map(p => [p.id, p.defaultOn]))
  );

  function toggle(id) {
    setValues(prev => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Como quer ser protegido?</Text>
      <Text style={styles.sub}>Pode alterar isto a qualquer momento.</Text>

      <View style={styles.list}>
        {PREFS.map(pref => (
          <View key={pref.id} style={styles.row}>
            <View style={styles.rowBody}>
              <Text style={styles.rowTitle}>{pref.title}</Text>
              <Text style={styles.rowDesc}>{pref.description}</Text>
            </View>
            <Switch
              value={values[pref.id]}
              onValueChange={() => toggle(pref.id)}
              trackColor={{ false: colors.surface3, true: colors.brand }}
              thumbColor="#FFFFFF"
            />
          </View>
        ))}
      </View>

      <Pressable style={styles.cta} onPress={() => navigation.replace('App')}>
        <Text style={styles.ctaLabel}>Confirmar preferências</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root:     { flex: 1, backgroundColor: colors.surface, paddingHorizontal: spacing.lg, paddingTop: spacing.xxl },
  title:    { fontSize: typography.xxl, fontWeight: '700', color: colors.text1, letterSpacing: -0.5, marginBottom: spacing.xs },
  sub:      { fontSize: typography.base, color: colors.text3, marginBottom: spacing.xl },
  list:     { gap: 1, backgroundColor: colors.border, borderRadius: radius.lg, overflow: 'hidden', borderWidth: 1, borderColor: colors.border },
  row:      { flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.md, backgroundColor: colors.surface },
  rowBody:  { flex: 1, gap: 3 },
  rowTitle: { fontSize: typography.base, fontWeight: '600', color: colors.text1 },
  rowDesc:  { fontSize: typography.sm, color: colors.text3, lineHeight: 18 },
  cta:      { marginTop: 'auto', backgroundColor: colors.brand, borderRadius: radius.xl, paddingVertical: 16, alignItems: 'center', marginBottom: spacing.xl },
  ctaLabel: { fontSize: typography.md, fontWeight: '600', color: '#FFFFFF' },
});
