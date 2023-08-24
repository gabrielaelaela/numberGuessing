import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import {useState} from 'react';

let number = Math.floor(Math.random() * 100) + 1;
let counter = 0;

export default function App() {
    const [text, setText] = useState("Guess a number between 1 and 100")
    const [input, setInput] = useState("");

    const restart = () => {
        setText("Guess a number between 1 and 100");
        counter = 0
        setInput("");
        number = Math.floor(Math.random() * 100) + 1;
    }

    const compare = () => {
        ++counter;
        const inputNumber = Number(input);
        if (inputNumber === number) {
            Alert.alert("You guessed the number in " + counter + " guesses");
            restart();
            return;
        }
        if (inputNumber < number) setText("Your guess " + input + " is too low");
        else setText("Your guess " + input + " is too high");
    }

    return (
        <View style={styles.container}>
            <Text>{text}</Text>
            <TextInput style={{width: 50, borderColor: 'gray', borderWidth: 1, margin: 10}} onChangeText={input => setInput(input)} value={input} />
            <Button title='Make guess' onPress={compare}/>
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
});
