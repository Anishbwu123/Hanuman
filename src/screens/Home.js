import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import chalisaData from '../data/chalisa.json'; // Import the JSON file directly
import { Card } from 'react-native-paper';
import Header from './Header';

const Home = () => {
  const [chalisaVerses, setChalisaVerses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to match an async load experience
    setTimeout(() => {
      // Access the verses property from the chalisaData
      setChalisaVerses(chalisaData.verses || []); // Use chalisaData.verses
      setLoading(false);
    }, 100); // Simulated loading time
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (!chalisaVerses || chalisaVerses.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No verses available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <Header title="श्री हनुमान चालीसा" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {chalisaVerses.map((item, index) => (
          <Card key={index} style={styles.card}>
            <Card.Cover source={require('../../Images/ram.png')} />
            <Card.Content>
              <Text style={styles.verseText}>{item.verse}</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingTop: 80, // Adds space to account for the header
    paddingHorizontal: 16,
    marginTop: -50
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#888',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  verseText: {
    fontSize: 16,
    color: 'black',
  },
});

export default Home;
