import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import Constants from 'expo-constants';
import { Focus } from './src/features/Focus';
import { colors } from './src/utils/colors';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([
    // 'Build FocusTime App w/ React Native',
    // 'Work on CoLab Project',
    // 'Work on Leetcode',
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(task) => setHistory([...history, task])}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.fav_blue,
  },
});
