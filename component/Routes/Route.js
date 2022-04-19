
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonList from '../List/PokemonList';
import PokemonDetail from '../Details/PokemonDetail';

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={PokemonList} />
        <Stack.Screen name="Details" component={PokemonDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;