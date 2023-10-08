import { Text, SafeAreaView, StyleSheet } from 'react-native';


// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Login from './components/Login';

export default function App() {
  return (
    <SafeAreaView >
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
