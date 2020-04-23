import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import NativeForms from "native-forms";

const Form = () => {
  const [hasForm, showForm] = useState(false);
  const show = () => showForm(true);
  const hide = () => showForm(false);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Fill the Form</Text>

      <Button title="CONTINUE" onPress={show} color="#20f" />

      {hasForm && (
        <NativeForms
          form="https://my.nativeforms.com/CZ0aD1jZmkGSYREO00Db"
          onClose={hide}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    color: '#212F3C',
    fontWeight: "900",
    fontSize: 30,
    marginHorizontal: 15,
    marginBottom: 10,
    textAlign: 'center'
},
});

export default Form;