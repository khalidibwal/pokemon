import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator, Animated, Dimensions} from 'react-native';
import { Card, Button } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-web';
const PokemonDetail = props => {
  const [details, setDetails] = useState([]);

  const windowWidth = Dimensions.get('window').width;
  const initPosition = {
    x: parseInt(windowWidth / 2) - 50,
    y: 0,
  };

  const position = useRef(new Animated.ValueXY(initPosition)).current;

  const animate = () => {
    Animated.spring(position, {
      toValue: {x: initPosition.x, y: -450},
      useNativeDriver:false,
      speed: 4,
     
    }).start(() => {
      position.setValue(initPosition);
    });
    alert('Better Luck Next Time')
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);



  const fetchPokemonDetails = () => {
    const pokemons = props.route.params.pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemons}`)
      .then(res => res.json())
      .then(details => setDetails(details));
  };

  return details.name ? (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image
        style={styles.image}
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
            details.name
          }.png`,
        }}
      />
      <Text style={styles.text}>Name: {details.name}</Text>
      <Text style={styles.text}>Height: {details.height}</Text>
      <Text style={styles.text}>Weight: {details.weight}</Text>
      <Text style={styles.text}>
        Ability: {details.abilities[0].ability.name}
      </Text>
      <Text style={styles.text}>
        Moves: {details.moves[0].move.name}
      </Text>
      <Text style={styles.text}>Type: {details.types[0].type.name}</Text>
      <View style={styles.container}>
      <Animated.View style={position.getLayout()}>
        <Image source={require('./../../assets/pokeball.png')} style={styles.ball}/>
      </Animated.View>
      <Button onPress={animate} title="Catch Pokemon" style={styles.btnStyle} />
    </View>
    </View>
    
  ) : (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="#E63F34" />
    </View>
  );
};

export default PokemonDetail;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  btnStyle:{
    borderRadius:20
  }
});