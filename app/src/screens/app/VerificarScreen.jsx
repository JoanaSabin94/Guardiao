/**
 * VerificarScreen
 * ────────────────
 * Manual number lookup + recent searches.
 * Tap a recent → NumberDetail screen.
 * Wireframe ref: data-s="app-verificar"
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, FlatList } from 'react-native';
import { colors, spacing, typography, radius } from '../../tokens';

const RECENTS = [
  { id: '1', number: '+351 937 412 839', time: 'Hoje, 14:32' },
  { id: '2', number: '+351 308 801 234', time: 'Hoje, 11:05' },
];

export default function VerificarScreen({ navigation }) {
  const [query, setQuery] = useState('');

  function search() {
    if (query.trim()) {
      navigation.navigate('NumberDetail', { number: query.trim() });
    }
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Verificar</Text>

      {/* Search bar */}
      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar número..."
          placeholderTextColor={colors.text4}
          value={query}
          onChangeText={setQuery}
          keyboardType="phone-pad"
          returnKeyType="search"
          onSubmitEditing={search}
        />
        <Pressable style={styles.pasteBtn} onPress={search}>
          <Text style={styles.pasteBtnLabel}>Pesquisar</Text>
        </Pressable>
      </View>

      {/* Recents */}
      <Text style={styles.sectionLabel}>RECENTES</Text>
      <FlatList
        data={RECENTS}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.recentItem}
            onPress={() => navigation.navigate('NumberDetail', { number: item.number })}
          >
            <View style={styles.recentBody}>
              <Text style={styles.recentNum}>{item.number}</Text>
              <Text style={styles.recentTime}>{item.time}</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root:          { flex: 1, backgroundColor: colors.surface, paddingHorizontal: spacing.lg, paddingTop: spacing.xl },
  title:         { fontSize: typography.xxl, fontWeight: '700', color: colors.text1, letterSpacing: -0.5, marginBottom: spacing.md },
  searchRow:     { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.xl },
  input:         { flex: 1, backgroundColor: colors.surface2, borderRadius: radius.lg, paddingHorizontal: spacing.md, paddingVertical: 12, fontSize: typography.base, color: colors.text1, borderWidth: 1.5, borderColor: 'rgba(0,0,0,0.07)' },
  pasteBtn:      { backgroundColor: colors.brand, borderRadius: radius.lg, paddingHorizontal: spacing.md, justifyContent: 'center' },
  pasteBtnLabel: { fontSize: typography.sm, fontWeight: '600', color: '#FFFFFF' },
  sectionLabel:  { fontSize: typography.xs, fontWeight: '700', color: colors.text3, letterSpacing: 0.7, marginBottom: spacing.sm },
  recentItem:    { flexDirection: 'row', alignItems: 'center', paddingVertical: spacing.md, gap: spacing.sm },
  recentBody:    { flex: 1 },
  recentNum:     { fontSize: typography.base, fontWeight: '600', color: colors.text1 },
  recentTime:    { fontSize: typography.sm, color: colors.text3, marginTop: 2 },
  chevron:       { fontSize: 20, color: colors.text4 },
  separator:     { height: 1, backgroundColor: colors.border },
});
