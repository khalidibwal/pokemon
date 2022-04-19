import React, {useEffect, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput,
  } from 'react-native';
import { Card, Button } from '@rneui/themed';
import {useQuery} from 'react-query'
import axios from 'axios'



export default function PokemonList(props) {
    const [pokemons, setPokemons] = useState([]);
    const [searchfeild, setSearchfeild] = useState('');
       
    useEffect(() => {
        FetchPokemon();
}, []);

const FetchPokemon = () =>{
   axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
  .then(data => setPokemons(data.data.results))
}


return (
    <View>
      <View style={styles.searchCont}>
        <TextInput
          style={styles.searchfeild}
          placeholder="Search Pokemons"
          onChangeText={value => setSearchfeild(value)}
          value={searchfeild}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          {pokemons? pokemons
            .filter(pokemon =>
              pokemon.name.toLowerCase().includes(searchfeild.toLowerCase())
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.container}
                  onPress={() =>
                    props.navigation.navigate('Details', {
                      pokemon: pokemon.name,
                    })
                  }>
                <Card containerStyle={styles.card}>
                  <Image
                    style={{width: 150, height: 150}}
                    source={{
                      uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                        pokemon.name
                      }.png`,
                    }}
                  />
                  <Card.Divider />
                  <Card.Title>{pokemon.name}</Card.Title>
                  </Card>
                </TouchableOpacity>
              );
            }) : <Card><Card.Title>No More Pokemons in here!</Card.Title></Card>}
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 30,
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      marginHorizontal: 5,
      marginVertical: 5,
      borderRadius:20
    },
    searchCont: {
      position: 'absolute',
      marginBottom: 70,
      left: '20%',
      zIndex: 1,
      marginTop: 10,
    },
    searchfeild: {
      height: 40,
      borderWidth: 1,
      borderColor: '#000',
      textAlign: 'center',
      width: 250,
      borderRadius: 50,
    },
  });
