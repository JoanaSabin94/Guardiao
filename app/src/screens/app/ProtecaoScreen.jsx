/**
 * ProtecaoScreen
 * ───────────────
 * Protection settings.
 * Three toggles + block by prefix + blocked list.
 * Wireframe ref: data-s="app-protect"
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Pressable, ScrollView } from 'react-native';
import { colors, spacing, typography, radius } from '../../tokens';

const TOGGLES = [
  {
    id: 'anonymous',
    title: 'Recusar números anónimos',
    description: 'Chamadas de número oculto são recusadas antes de o telefone tocar.',
    defaultOn: true,
  },
  {
    id: 'international',
    title: 'Recusar chamadas do estrangeiro',
    description: 'Filtra chamadas de números de outros países.',
    defaultOn: false,
  },
  {
    id: 'unknown',
    title: 'Recusar números desconhecidos',
    description: 'Avisa quando alguém fora dos seus contactos ligar.',
    defaultOn: true,
  },
];

export default function ProtecaoScreen({ navigation }) {
  const [values, setValues] = useState(
    Object.fromEntries(TOGGLES.map(t => [t.id, t.defaultOn]))
  );

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Proteção</Text>

      {/* Toggles */}
      <View style={styles.section}>
        {TOGGLES.map((toggle, i) => (
          <View
            key={toggle.id}
            style={[styles.row, i < TOGGLES.length - 1 && styles.rowBorder]}
          >
            <View style={styles.rowBody}>
              <Text style={styles.rowTitle}>{toggle.title}</Text>
              <Text style={styles.rowDesc}>{toggle.description}</Text>
            </View>
            <Switch
              value={values[toggle.id]}
              onValueChange={() => setValues(p => ({ ...p, [toggle.id]: !p[toggle.id] }))}
              trackColor={{ false: colors.surface3, true: colors.brand }}
              thumbColor="#FFFFFF"
            />
          </View>
        ))}
      </View>

      {/* Navigation rows */}
      <View style={styles.section}>
        {[
          { label: 'Bloquear por prefixo', desc: 'Bloqueia todos os números com um determinado início' },
          { label: 'Lista de bloqueados',  desc: 'Números que bloqueou manualmente' },
        ].map((item, i) => (
          <Pressable
            key={item.label}
            style={[styles.row, i === 0 && styles.rowBorder]}
          >
            <View style={styles.rowBody}>
              <Text style={styles.rowTitle}>{item.label}</Text>
              <Text style={styles.rowDesc}>{item.desc}</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root:      { flex: 1, backgroundColor: colors.surface },
  content:   { padding: spacing.lg, gap: spacing.md, paddingBottom: spacing.xxl },
  title:     { fontSize: typography.xxl, fontWeight: '700', color: colors.text1, letterSpacing: -0.5 },
  section:   { backgroundColor: colors.surface, borderRadius: radius.lg, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  row:       { flexDirection: 'row', alignItems: 'center', padding: spacing.md, gap: spacing.md, backgroundColor: colors.surface },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: colors.border },
  rowBody:   { flex: 1, gap: 3 },
  rowTitle:  { fontSize: typography.base, fontWeight: '600', color: colors.text1 },
  rowDesc:   { fontSize: typography.sm, color: colors.text3, lineHeight: 18 },
  chevron:   { fontSize: 20, color: colors.text4 },
});
