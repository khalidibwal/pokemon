
import * as React from 'react';
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PokeIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PokemonList from '../List/PokemonList';
import PokemonDetail from '../Details/PokemonDetail';
import PokeDex from '../Details/PokeDex';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="list" component={PokemonList}
      options={{
        tabBarIcon: () => {
          return (
            <Ionicons name="home" size={20} />
          );
        },
        tabBarLabel:() => {
          return (<Text>HOME</Text>)
        },
        title:'Home'
      }}/>
      <Tab.Screen name="poke" component={PokeDex}
      options={{
        tabBarIcon: () => {
          return (
            <PokeIcons name="pokeball" size={25} />
          );
        },
        tabBarLabel:() => {
          return (<Text style={{color:'black'}}>POKEBAG</Text>)
        },
        title:'Pokebag'
      }}/>
    </Tab.Navigator>
  );
}
function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={PokemonDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;