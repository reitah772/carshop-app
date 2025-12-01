import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Image } from 'react-native';
import BMW from '../assets/bmw.jpg';
import Audi from '../assets/audi.jpg';
import Mercedes from '../assets/mercedes.jpg';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: -width * 3, 
        duration: 15000,     
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Animated.Image
          source={BMW}
          style={[styles.carImage, { transform: [{ translateX: scrollX }] }]}
          resizeMode="cover"
        />
        <Animated.Image
          source={Audi}
          style={[styles.carImage, { transform: [{ translateX: Animated.add(scrollX, new Animated.Value(width)) }] }]}
          resizeMode="cover"
        />
        <Animated.Image
          source={Mercedes}
          style={[styles.carImage, { transform: [{ translateX: Animated.add(scrollX, new Animated.Value(width * 2)) }] }]}
          resizeMode="cover"
        />
      </View>
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to CarShop!</Text>
        <Text style={styles.subtitle}>Find your dream car today</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.buttonText}>Explore Cars</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  carImage: { width: width, height: '100%', position: 'absolute' },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  title: { fontSize: 36, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 18, color: '#fff', textAlign: 'center', marginBottom: 40 },
  button: { backgroundColor: '#ffcc00', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30 },
  buttonText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
});

export default HomeScreen;
