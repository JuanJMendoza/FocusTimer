import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  if (!history || !history.length) {
    return (
      <View style={{ padding: 25 }}>
        <Text style={styles.title}>
          Haven't focused on anything yet, so nothing to show here.
        </Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 25 }}>
      <Text style={styles.title}>Completed Tasks:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.md,
  },
});
