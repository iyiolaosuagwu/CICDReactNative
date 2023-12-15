import React, {useEffect} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import Crashs from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

function App() {
  useEffect(() => {
    checkPrevCrashSession();
  }, []);

  async function checkPrevCrashSession() {
    const didCrash = await Crashs.hasCrashedInLastSession(); // returns boolean
    if (didCrash) {
      const report = await Crashs.lastSessionCrashReport(); // use or send infor to sever
      console.log(report);
      console.log('Sorry about the last crash, were working on a solution');
    }
  }
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Button title="Crash" onPress={() => Crashs.generateTestCrash()} />
      <Button
        title="Click Events"
        onPress={() =>
          Analytics.trackEvent('click press', {
            Internet: 'Wifi',
            UserID: '5678g4eu2hfrnifka',
          })
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
