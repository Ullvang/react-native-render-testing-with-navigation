import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from "./store/reducers"
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import MainScreen from './screens/ScreenMain';
import ScreenC from './screens/ScreenC';

const Stack = createStackNavigator();
const store = createStore(reducers);


export default function App() {
  console.log("App rendered")
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="ScreenA" component={ScreenA} />
          <Stack.Screen name="ScreenB" component={ScreenB} />
          <Stack.Screen name="ScreenC" component={ScreenC} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
