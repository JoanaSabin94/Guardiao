/**
 * CallDetailScreen
 * ─────────────────
 * Detail for a blocked call event from Home activity feed.
 * Shows: blocked number, reason, operator info, report action.
 * Wireframe ref: data-s="call-detail"
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { colors, spacing, typography, radius } from '../../tokens';

export default function CallDetailScreen({ route, navigation }) {
  // In production: fetch real data by number/event ID
  const number = route.params?.number ?? '+351 912 567 890';

  return (
    <View style={styles.root}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backChevron}>‹</Text>
          <Text style={styles.backLabel}>Voltar</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Chamada bloqueada</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Hero */}
        <View style={styles.hero}>
          <View style={styles.avatar}>
            {/* Phone × icon placeholder */}
          </View>
          <Text style={styles.number}>{number}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeLabel}>Chamada bloqueada</Text>
          </View>
        </View>

        {/* Reason */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>MOTIVO DO BLOQUEIO</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Número reportado como suspeito</Text>
            <Text style={styles.cardBody}>
              Identificado por <Text style={styles.bold}>247 utilizadores</Text> como
              número de burla. Padrão de chamadas em massa detetado a partir deste número.
            </Text>
          </View>
        </View>

        {/* Info */}
        <View style={styles.infoSection}>
          {[
            { label: 'Operadora', value: 'Desconhecida' },
            { label: 'País',      value: 'Portugal' },
            { label: 'Tipo',      value: 'Número móvel' },
          ].map((row, i, arr) => (
            <View key={row.label} style={[styles.infoRow, i < arr.length - 1 && styles.infoRowBorder]}>
              <Text style={styles.infoLabel}>{row.label}</Text>
              <Text style={styles.infoValue}>{row.value}</Text>
            </View>
          ))}
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <Pressable style={styles.primaryBtn}>
            <Text style={styles.primaryBtnLabel}>Denunciar este número</Text>
          </Pressable>
          <Pressable style={styles.ghostBtn}>
            <Text style={styles.ghostBtnLabel}>Ligar na mesma</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root:           { flex: 1, backgroundColor: colors.surface },
  header:         { flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing.md, paddingTop: spacing.lg, paddingBottom: spacing.sm },
  backBtn:        { flexDirection: 'row', alignItems: 'center', gap: 2, minWidth: 56 },
  backChevron:    { fontSize: 22, color: colors.text1, lineHeight: 26 },
  backLabel:      { fontSize: typography.base, color: colors.text1, fontWeight: '500' },
  headerTitle:    { flex: 1, textAlign: 'center', fontSize: typography.sm, fontWeight: '600', color: colors.text2 },
  headerSpacer:   { minWidth: 56 },
  content:        { padding: spacing.lg, gap: spacing.md, paddingBottom: 100 },
  hero:           { alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.lg },
  avatar:         { width: 72, height: 72, borderRadius: radius.xl, backgroundColor: colors.brand },
  number:         { fontSize: typography.xxl, fontWeight: '700', color: colors.text1, letterSpacing: -0.5 },
  badge:          { backgroundColor: colors.surface3, borderRadius: radius.full, paddingHorizontal: spacing.md, paddingVertical: 5 },
  badgeLabel:     { fontSize: typography.sm, fontWeight: '600', color: colors.text2 },
  section:        { gap: spacing.sm },
  sectionLabel:   { fontSize: typography.xs, fontWeight: '700', color: colors.text3, letterSpacing: 0.7 },
  card:           { backgroundColor: colors.surface2, borderRadius: radius.lg, padding: spacing.md, gap: spacing.xs, borderWidth: 1.5, borderColor: 'rgba(0,0,0,0.07)' },
  cardTitle:      { fontSize: typography.base, fontWeight: '600', color: colors.text1 },
  cardBody:       { fontSize: typography.sm, color: colors.text3, lineHeight: 19 },
  bold:           { fontWeight: '700', color: colors.text2 },
  infoSection:    { backgroundColor: colors.surface2, borderRadius: radius.lg, overflow: 'hidden', borderWidth: 1, borderColor: colors.border },
  infoRow:        { flexDirection: 'row', justifyContent: 'space-between', padding: spacing.md },
  infoRowBorder:  { borderBottomWidth: 1, borderBottomColor: colors.border },
  infoLabel:      { fontSize: typography.sm, color: colors.text3 },
  infoValue:      { fontSize: typography.base, fontWeight: '500', color: colors.text1 },
  actions:        { gap: spacing.sm },
  primaryBtn:     { backgroundColor: colors.brand, borderRadius: radius.xl, paddingVertical: 16, alignItems: 'center' },
  primaryBtnLabel:{ fontSize: typography.md, fontWeight: '600', color: '#FFFFFF' },
  ghostBtn:       { paddingVertical: 12, alignItems: 'center' },
  ghostBtnLabel:  { fontSize: typography.sm, color: colors.text3 },
});
