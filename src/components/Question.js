import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Question = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={styles.container} key={toggle}>
      <TouchableOpacity onPress={() => setToggle((prev) => !prev)}>
        <Text style={styles.question}>{question}</Text>
      </TouchableOpacity>
      <View style={{ height: toggle ? 0 : "fitContent", overflow: "hidden" }}>
        <Text style={styles.answer}>{answer}</Text>
      </View>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    textAlign: "center",
    borderWidth: 3,
    marginTop: 20
  },
  question: {
    fontWeight: "bold",
    fontSize: 20
  },
  answer: {
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center"
  }
});
