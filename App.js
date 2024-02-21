import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login.jsx';
import { ClerkProvider,  SignedIn, SignedOut} from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation.jsx';
import * as SecureStore from 'expo-secure-store';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {

  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit/static/Outfit-Regular.ttf'),
    'outfit-med': require('./assets/fonts/Outfit/static/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit/static/Outfit-Bold.ttf'),
  });

  return (
    <ClerkProvider
    tokenCache={tokenCache}
    publishableKey='pk_test_aW50aW1hdGUtZHJhZ29uLTEuY2xlcmsuYWNjb3VudHMuZGV2JA'>
    <View style={styles.container}>
     
     {/* Sign In  */}

      <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>

        <SignedOut>
        
          <Login/>
        </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20,
  },
});
