import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CarCard from '../components/CarCard';

import AudiRS7 from '../assets/audirs7.jpg';
import BMWi8 from '../assets/bmw i8.jpg';
import MercedesAMGGT from '../assets/mercedes AMG GT.jpg';
import MercedesC63 from '../assets/mercedes c63.jpg';
import BMWM3 from '../assets/bmw.jpg';
import AudiA4 from '../assets/audi.jpg';
import MercedesE200 from '../assets/mercedes.jpg';

const cars = [
  { id: '1', name: 'Audi RS7', price: '90 000 €', image: AudiRS7, description: 'Lyxig Audi med hög prestanda.', km: '30 000 km', hp: '600 HP' },
  { id: '2', name: 'BMW i8', price: '120 000 €', image: BMWi8, description: 'Futuristisk BMW i8 med hybridmotor.', km: '10 000 km', hp: '500 HP' },
  { id: '3', name: 'Mercedes AMG GT', price: '110 000 €', image: MercedesAMGGT, description: 'Exklusiv Mercedes med sportpaket.', km: '20 000 km', hp: '550 HP' },
  { id: '4', name: 'Mercedes C63', price: '80 000 €', image: MercedesC63, description: 'Klassisk Mercedes med kraftfull V8.', km: '50 000 km', hp: '510 HP' },
  { id: '5', name: 'BMW M3', price: '75 000 €', image: BMWM3, description: 'Sportig BMW M3 i bra skick.', km: '40 000 km', hp: '480 HP' },
  { id: '6', name: 'Audi A4', price: '50 000 €', image: AudiA4, description: 'Stabil och pålitlig Audi A4.', km: '60 000 km', hp: '200 HP' },
  { id: '7', name: 'Mercedes E200', price: '60 000 €', image: MercedesE200, description: 'Elegant Mercedes E200, perfekt skick.', km: '55 000 km', hp: '220 HP' },
];

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Cars</Text>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarCard 
            car={item} 
            onPress={() => navigation.navigate('CarDetails', { car: item })}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginLeft: 15, marginBottom: 15 },
});

export default DetailsScreen;
