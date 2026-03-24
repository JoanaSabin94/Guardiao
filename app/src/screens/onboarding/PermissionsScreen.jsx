/**
 * PermissionsScreen
 * ──────────────────
 * Single screen, stepped flow — one permission at a time.
 * Order (lowest → highest friction): Contacts → Notifications → Messages → Calls
 *
 * Each step shows:
 *   - Icon + title + benefit description
 *   - Single adaptive CTA ("Permitir acesso aos contactos", etc.)
 *   - On deny → warning modal → retry or skip
 *   - Two denials → hard-stop screen (app cannot work without permissions)
 *
 * Wireframe ref: data-s="perms"
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors, spacing, typography, radius } from '../../tokens';

const STEPS = [
  {
    id: 'contacts',
    title: 'A sua lista de contactos',
    description:
      'Não lemos o conteúdo dos seus contactos. Verificamos apenas se o número existe na lista.',
    cta: 'Permitir acesso aos contactos',
  },
  {
    id: 'notifications',
    title: 'Avisos em tempo real',
    description:
      'Só enviamos avisos quando bloqueamos algo. Sem publicidade nem mensagens desnecessárias.',
    cta: 'Ativar notificações',
  },
  {
    id: 'messages',
    title: 'Acesso às mensagens',
    description:
      'Não lemos mensagens de contactos conhecidos. Só analisamos SMS para detetar fraudes e links perigosos.',
    cta: 'Permitir mensagens',
  },
  {
    id: 'calls',
    title: 'Acesso às chamadas',
    description:
      'Não ouvimos nenhuma conversa. Verificamos apenas o número de quem liga.',
    cta: 'Permitir acesso às chamadas',
  },
];

export default function PermissionsScreen({ navigation }) {
  const [step, setStep]         = useState(0);
  const [granted, setGranted]   = useState([]);
  // TODO: integrate with expo-contacts, expo-notifications, etc.

  const current  = STEPS[step];
  const progress = (step + 1) / STEPS.length;

  function handleGrant() {
    setGranted(prev => [...prev, current.id]);
    if (step + 1 < STEPS.length) {
      setStep(step + 1);
    } else {
      navigation.replace('Preferences');
    }
  }

  return (
    <View style={styles.root}>
      {/* Progress bar */}
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>

      <Text style={styles.stepLabel}>Passo {step + 1} de {STEPS.length}</Text>

      {/* Permission cards list */}
      <View style={styles.cards}>
        {STEPS.map((s, i) => {
          const isActive    = i === step;
          const isCompleted = granted.includes(s.id);
          const isPending   = i > step && !isCompleted;

          return (
            <View
              key={s.id}
              style={[
                styles.card,
                isActive    && styles.cardActive,
                isCompleted && styles.cardCompleted,
                isPending   && styles.cardPending,
              ]}
            >
              {/* Icon placeholder */}
              <View style={[styles.cardIcon, isActive && styles.cardIconActive]} />

              <View style={styles.cardBody}>
                <Text style={[styles.cardTitle, isPending && styles.textMuted]}>
                  {s.title}
                </Text>
                {(isActive || isCompleted) && (
                  <Text style={styles.cardDesc}>{s.description}</Text>
                )}
              </View>

              {isCompleted && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </View>
          );
        })}
      </View>

      {/* Adaptive CTA */}
      <Pressable style={styles.cta} onPress={handleGrant}>
        <Text style={styles.ctaLabel}>{current.cta}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root:          { flex: 1, backgroundColor: colors.surface, paddingHorizontal: spacing.lg, paddingTop: spacing.xl },
  progressTrack: { height: 3, backgroundColor: colors.surface3, borderRadius: radius.full, marginBottom: spacing.sm },
  progressFill:  { height: 3, backgroundColor: colors.text1, borderRadius: radius.full },
  stepLabel:     { fontSize: typography.xs, fontWeight: '700', color: colors.text3, textAlign: 'right', marginBottom: spacing.lg, letterSpacing: 0.5 },
  cards:         { flex: 1, gap: spacing.sm },
  card:          { flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.md, backgroundColor: colors.surface2, borderRadius: radius.lg, borderWidth: 1.5, borderColor: 'rgba(0,0,0,0.07)' },
  cardActive:    { borderColor: 'rgba(0,0,0,0.18)' },
  cardCompleted: { borderColor: `rgba(45,122,45,0.35)` },
  cardPending:   { opacity: 0.42 },
  cardIcon:      { width: 44, height: 44, borderRadius: radius.md, backgroundColor: colors.surface3 },
  cardIconActive:{ backgroundColor: colors.brand },
  cardBody:      { flex: 1, gap: 3 },
  cardTitle:     { fontSize: typography.base, fontWeight: '600', color: colors.text1 },
  cardDesc:      { fontSize: typography.sm, color: colors.text3, lineHeight: 18 },
  textMuted:     { color: colors.text3 },
  checkmark:     { fontSize: 16, color: colors.success },
  cta:           { backgroundColor: colors.brand, borderRadius: radius.xl, paddingVertical: 16, alignItems: 'center', marginBottom: spacing.xl, marginTop: spacing.md },
  ctaLabel:      { fontSize: typography.md, fontWeight: '600', color: '#FFFFFF' },
});
