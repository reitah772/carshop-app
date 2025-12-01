import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const CarDetailsScreen = ({ route }) => {
  const { car } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={car.image} style={styles.image} resizeMode="cover" />

      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{car.name}</Text>
        <Text style={styles.price}>{car.price}</Text>
        <Text style={styles.sectionTitle}>Description:</Text>
        <Text style={styles.text}>{car.description}</Text>

        <Text style={styles.sectionTitle}>Technical Details:</Text>
        <Text style={styles.text}>Kilometers: {car.km}</Text>
        <Text style={styles.text}>Horsepower: {car.hp}</Text>

        {car.problems && (
          <>
            <Text style={styles.sectionTitle}>Known Issues:</Text>
            <Text style={styles.text}>{car.problems}</Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  image: { width: '100%', height: 250 },
  detailsContainer: { padding: 20 },
  name: { fontSize: 28, fontWeight: 'bold', marginBottom: 5 },
  price: { fontSize: 22, fontWeight: '600', marginBottom: 15, color: '#ff6600' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10, marginBottom: 5 },
  text: { fontSize: 16, marginBottom: 5 },
});

export default CarDetailsScreen;
