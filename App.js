import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Linking,
  Image,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const telegramLink = "https://t.me/ibn_salamat";

export default function App() {
  const [textTodo, setTextTodo] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Алмат тормоздан озып кету",
      done: true,
    },
    {
      id: 2,
      title: "something",
      done: false,
    },
    {
      id: 3,
      title: "react native",
      done: true,
    },
  ]);

  function changeTask({ id, done }) {
    if (id === 1) {
      Alert.alert("Don't touch it 🤬");
      return;
    }

    const newTasks = tasks.map((task) => {
      return {
        ...task,
        done: id === task.id ? !task.done : task.done,
      };
    });

    setTasks(newTasks);
  }

  console.log(tasks);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.saveAreaView}>
        <Text style={styles.sectionTitle}>Todolist "Алмат Тормоз"</Text>
      </SafeAreaView>

      <Image
        style={{ width: "100%", height: 200 }}
        source={{
          uri: require("./assets/cat-programming.gif"),
        }}
      />

      <Button
        title="Write me"
        onPress={async () => {
          const supportedLink = Linking.canOpenURL(telegramLink);

          if (supportedLink) {
            await Linking.openURL(telegramLink);
          } else {
            Alert.alert("Can not open url 🥺");
          }
        }}
      />

      <ScrollView style={{ marginTop: 30 }}>
        {tasks.map((task) => {
          const { id, title, done } = task;
          let taskStyle = done ? styles.doneTask : styles.task;
          let taskTextStyle = done ? styles.doneTaskText : styles.taskText;

          if (id === 1) {
            taskStyle = styles.extraTask;
          }

          return (
            <TouchableOpacity
              style={taskStyle}
              onPress={() => changeTask(task)}
            >
              <Text style={taskTextStyle}>{title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputWrapper}
      >
        <TextInput
          value={textTodo}
          onChangeText={(value) => {
            setTextTodo(value);
          }}
          placeholder="Go America"
          style={styles.input}
        />

        <Button
          disabled={textTodo.length < 2}
          title="Add"
          onPress={() => {
            setTasks([
              ...tasks,
              {
                id: Number(new Date()) + Math.random(),
                title: textTodo,
                done: false,
              },
            ]);

            setTextTodo("");
          }}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const stylesShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,
  elevation: 1,
};

const stylesTask = {
  height: 50,
  marginVertical: 3,
  marginHorizontal: 20,
  borderRadius: 5,
  backgroundColor: "#5B616A",
  ...stylesShadow,
};

const stylesTaskText = {
  color: "white",
  paddingHorizontal: 20,
  fontWeight: "bold",
  lineHeight: 50,
  textDecorationLine: "none",
};

const styles = StyleSheet.create({
  saveAreaView: {
    backgroundColor: "#f24236",
  },
  sectionTitle: {
    fontSize: 25,
    padding: 20,
    color: "white",
  },
  inputWrapper: {
    // backgroundColor: "#f24236",
    height: 100,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderRadius: 20,
    borderColor: "#FCF7F8",
    borderWidth: 2,
    padding: 15,
    ...stylesShadow,
    // ,
  },
  task: {
    ...stylesTask,
  },
  doneTask: {
    ...stylesTask,
    backgroundColor: "#7DAF9C",
  },
  extraTask: {
    ...stylesTask,
    backgroundColor: "violet",
  },
  taskText: {
    ...stylesTaskText,
  },
  doneTaskText: {
    ...stylesTaskText,
    textDecorationLine: "line-through",
  },
});
