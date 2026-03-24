/**
 * PerfilScreen
 * ─────────────
 * User profile + temporary protection pause.
 * Pause durations: 15 min, 30 min, 1h, 2h.
 * App auto-reactivates when timer expires.
 * Wireframe ref: data-s="app-perfil"
 */

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { colors, spacing, typography, radius } from '../../tokens';

const PAUSE_OPTIONS = [
  { label: '15 min', seconds: 15 * 60 },
  { label: '30 min', seconds: 30 * 60 },
  { label: '1 hora', seconds: 60 * 60 },
  { label: '2 horas', seconds: 120 * 60 },
];

function fmt(secs) {
  const m = String(Math.floor(secs / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return `${m}:${s}`;
}

export default function PerfilScreen() {
  const [pausedUntil, setPausedUntil] = useState(null); // seconds remaining
  const intervalRef = useRef(null);

  useEffect(() => {
    if (pausedUntil > 0) {
      intervalRef.current = setInterval(() => {
        setPausedUntil(prev => {
          if (prev <= 1) { clearInterval(intervalRef.current); return null; }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [pausedUntil]);

  function pause(seconds) {
    clearInterval(intervalRef.current);
    setPausedUntil(seconds);
  }

  function reactivate() {
    clearInterval(intervalRef.current);
    setPausedUntil(null);
  }

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Perfil</Text>

      {/* User card */}
      <View style={styles.userCard}>
        <View style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Joana Sabino</Text>
          <Text style={styles.userPlan}>Plano gratuito</Text>
        </View>
      </View>

      {/* Pause card */}
      <View style={styles.pauseCard}>
        {pausedUntil ? (
          <>
            <Text style={styles.pauseTitle}>Proteção pausada</Text>
            <Text style={styles.pauseTimer}>Reativa em {fmt(pausedUntil)}</Text>
            <Pressable style={styles.reactivateBtn} onPress={reactivate}>
              <Text style={styles.reactivateBtnLabel}>Reativar agora</Text>
            </Pressable>
          </>
        ) : (
          <>
            <Text style={styles.pauseTitle}>Pausar proteção</Text>
            <Text style={styles.pauseSub}>
              Precisa de receber uma chamada de um número desconhecido?
              Pause temporariamente a proteção.
            </Text>
            <View style={styles.pauseOptions}>
              {PAUSE_OPTIONS.map(opt => (
                <Pressable
                  key={opt.label}
                  style={styles.pauseOption}
                  onPress={() => pause(opt.seconds)}
                >
                  <Text style={styles.pauseOptionLabel}>{opt.label}</Text>
                </Pressable>
              ))}
            </View>
          </>
        )}
      </View>

      {/* Settings rows */}
      <View style={styles.section}>
        {['Preferências', 'Notificações', 'Sobre o Guardião'].map((item, i, arr) => (
          <Pressable
            key={item}
            style={[styles.row, i < arr.length - 1 && styles.rowBorder]}
          >
            <Text style={styles.rowLabel}>{item}</Text>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root:               { flex: 1, backgroundColor: colors.surface },
  content:            { padding: spacing.lg, gap: spacing.md, paddingBottom: spacing.xxl },
  title:              { fontSize: typography.xxl, fontWeight: '700', color: colors.text1, letterSpacing: -0.5 },
  userCard:           { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: colors.surface2, borderRadius: radius.lg, padding: spacing.md, borderWidth: 1, borderColor: colors.border },
  avatar:             { width: 48, height: 48, borderRadius: radius.full, backgroundColor: colors.surface3 },
  userInfo:           { gap: 3 },
  userName:           { fontSize: typography.md, fontWeight: '700', color: colors.text1 },
  userPlan:           { fontSize: typography.sm, color: colors.text3 },
  pauseCard:          { backgroundColor: colors.surface2, borderRadius: radius.lg, padding: spacing.md, borderWidth: 1, borderColor: colors.border, gap: spacing.sm },
  pauseTitle:         { fontSize: typography.md, fontWeight: '700', color: colors.text1 },
  pauseSub:           { fontSize: typography.sm, color: colors.text3, lineHeight: 18 },
  pauseOptions:       { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginTop: spacing.xs },
  pauseOption:        { paddingHorizontal: spacing.md, paddingVertical: spacing.sm, borderRadius: radius.full, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border2 },
  pauseOptionLabel:   { fontSize: typography.sm, fontWeight: '600', color: colors.text1 },
  pauseTimer:         { fontSize: typography.hero, fontWeight: '700', color: colors.text1, letterSpacing: -1 },
  reactivateBtn:      { backgroundColor: colors.brand, borderRadius: radius.xl, paddingVertical: 12, alignItems: 'center', marginTop: spacing.xs },
  reactivateBtnLabel: { fontSize: typography.base, fontWeight: '600', color: '#FFFFFF' },
  section:            { backgroundColor: colors.surface, borderRadius: radius.lg, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  row:                { flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing.md, paddingVertical: 16 },
  rowBorder:          { borderBottomWidth: 1, borderBottomColor: colors.border },
  rowLabel:           { flex: 1, fontSize: typography.base, color: colors.text1 },
  chevron:            { fontSize: 20, color: colors.text4 },
});
