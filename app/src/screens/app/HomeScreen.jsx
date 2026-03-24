/**
 * HomeScreen
 * ───────────
 * Main app screen.
 * - Protection status card
 * - Stats: calls blocked / messages filtered
 * - Recent activity list (tap → detail)
 * Wireframe ref: data-s="app-home"
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { colors, spacing, typography, radius } from '../../tokens';

// Placeholder activity data — replace with real store/API
const ACTIVITY = [
  {
    id: '1',
    type: 'call',
    number: '+351 912 567 890',
    label: 'Chamada bloqueada',
    time: 'Agora',
    badge: 'SUSPEITO',
    screen: 'CallDetail',
  },
  {
    id: '2',
    type: 'message',
    number: '+351 960 123 456',
    label: 'Mensagem suspeita detetada',
    time: 'Há 5 min',
    badge: 'FRAUDE',
    screen: 'MessageDetail',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá, Joana</Text>
          <Text style={styles.sub}>Tudo em ordem.</Text>
        </View>
      </View>

      {/* Protection card */}
      <View style={styles.protCard}>
        <Text style={styles.protTitle}>Proteção ativa</Text>
        <Text style={styles.protBody}>
          Pode usar o telemóvel com tranquilidade.{'\n'}Tratamos nós do resto.
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.stats}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Chamadas bloqueadas</Text>
          <Text style={styles.statNum}>1</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Mensagens filtradas</Text>
          <Text style={styles.statNum}>1</Text>
        </View>
      </View>

      {/* Recent activity */}
      <Text style={styles.sectionLabel}>ATIVIDADE RECENTE</Text>
      <View style={styles.activityList}>
        {ACTIVITY.map(item => (
          <Pressable
            key={item.id}
            style={styles.activityItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={styles.activityIcon} />
            <View style={styles.activityBody}>
              <Text style={styles.activityNum}>{item.number}</Text>
              <Text style={styles.activitySub}>{item.label} · {item.time}</Text>
            </View>
            <Text style={styles.activityBadge}>{item.badge}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root:          { flex: 1, backgroundColor: colors.bgPage },
  content:       { padding: spacing.md, gap: spacing.md, paddingBottom: spacing.xxl },
  header:        { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: spacing.sm },
  greeting:      { fontSize: typography.xxl, fontWeight: '700', color: colors.text1, letterSpacing: -0.5 },
  sub:           { fontSize: typography.base, color: colors.text3 },
  protCard:      { backgroundColor: '#3A3A3A', borderRadius: radius.xl, padding: spacing.xl, alignItems: 'center', gap: spacing.sm },
  protTitle:     { fontSize: typography.lg, fontWeight: '700', color: '#FFFFFF' },
  protBody:      { fontSize: typography.sm, color: 'rgba(255,255,255,0.7)', textAlign: 'center', lineHeight: 20 },
  stats:         { flexDirection: 'row', gap: spacing.sm },
  statCard:      { flex: 1, backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.md, gap: spacing.xs },
  statLabel:     { fontSize: typography.sm, color: colors.text3 },
  statNum:       { fontSize: typography.hero, fontWeight: '700', color: colors.text1, letterSpacing: -1 },
  sectionLabel:  { fontSize: typography.xs, fontWeight: '700', color: colors.text3, letterSpacing: 0.7 },
  activityList:  { gap: spacing.sm },
  activityItem:  { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, backgroundColor: colors.surface2, borderRadius: radius.md, padding: spacing.md, borderWidth: 1.5, borderColor: 'rgba(0,0,0,0.07)' },
  activityIcon:  { width: 40, height: 40, borderRadius: radius.md, backgroundColor: colors.brand },
  activityBody:  { flex: 1, gap: 3 },
  activityNum:   { fontSize: typography.base, fontWeight: '600', color: colors.text1 },
  activitySub:   { fontSize: typography.sm, color: colors.text3 },
  activityBadge: { fontSize: 10, fontWeight: '700', color: '#FFFFFF', backgroundColor: colors.brand, borderRadius: radius.sm, paddingHorizontal: 8, paddingVertical: 3, overflow: 'hidden' },
});
