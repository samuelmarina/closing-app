import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [lmao, setLmao] = useState("");
  const closeThisShit = () => {
    setTimeout(() => {
      setLmao("You are ugly");
      lmaothisisnevergoingtorun
    }, 2000);
  }

  useEffect(() => {
    closeThisShit();
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{lmao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50
  }
});
