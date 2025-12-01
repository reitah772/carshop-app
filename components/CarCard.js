import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CarCard = ({ car, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={car.image} style={styles.image} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.name}>{car.name}</Text>
        <Text style={styles.price}>{car.price}</Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width - 30, 
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignSelf: 'center', 
  },
  image: { width: '100%', height: 200 },
  info: { padding: 15 },
  name: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  price: { fontSize: 18, color: '#ff6600', marginBottom: 10 },
  button: {
    backgroundColor: '#ffcc00',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: '#000' },
});

export default CarCard;
