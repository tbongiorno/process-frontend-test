import { useState } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
("😊 😐 🥱 😞 😠");

function Journal() {
  const [text, onChangeText] = useState("");

  return (
    <SafeAreaView>
      <TextInput
        editable
        multiline
        numberOfLines={10}
        placeholder="Enter Text Here: "
        onChangeText={onChangeText}
        value={text}
      ></TextInput>
      <View style={styles.container}>
        <Button onPress={() => console.log("😊")} title="😊"></Button>
        <Button onPress={() => console.log("😐")} title="😐"></Button>
        <Button onPress={() => console.log("🥱")} title="🥱"></Button>
        <Button onPress={() => console.log("😞")} title="😞"></Button>
        <Button onPress={() => console.log("😠")} title="😠"></Button>
      </View>
      <Button
        onPress={() => console.log(text)}
        title="Save Journal Entry"
        color="blue"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    gap: "10%",
    margin: "5%",
  },
});

export default Journal;
