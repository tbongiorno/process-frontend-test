import { useState } from "react";
import { Text, TextInput, Button, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
("😊 😐 🥱 😞 😠");

type EmojiProps = {
  name: string;
};

const Emoji = (prop: EmojiProps) => {
  return (
    <Button onPress={() => console.log(prop.name)} title={prop.name}></Button>
  );
};

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
        <Emoji name="😊" />
        <Emoji name="😐" />
        <Emoji name="🥱" />
        <Emoji name="😞" />
        <Emoji name="😠" />
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
