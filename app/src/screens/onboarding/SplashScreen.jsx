/**
 * SplashScreen
 * ─────────────
 * Auto-advances to Welcome after 2.8 s.
 * Wireframe ref: data-s="0"
 */

import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../tokens';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const t = setTimeout(() => navigation.replace('Welcome'), 2800);
    return () => clearTimeout(t);
  }, [navigation]);

  return <View style={styles.root} />;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
