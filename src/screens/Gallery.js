import { ScrollView, StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import ramayandata from '../data/ramayan.json';
import { Card, Button } from 'react-native-paper';

const Gallery = () => {
  const [ram, setRam] = useState([]);
  const [selectedScene, setSelectedScene] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setRam(ramayandata.RamayanaScenes || []);
  }, []);

  const openModal = (scene) => {
    setSelectedScene(scene);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedScene(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header showOmIcon={false} title={'Gallery'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={styles.gridContainer}>
          {ram.map((item, index) => (
            <TouchableOpacity key={index} style={styles.gridItem} onPress={() => openModal(item)}>
              <Card style={styles.card}>
                {item.image && (
                  <Card.Cover source={{ uri: item.image }} style={styles.cardImage} />
                )}
                <Card.Content>
                  <Text style={styles.verseText}>{item.scene}</Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Modal to display scene details */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedScene && (
              <>
                <Text style={styles.modalTitle}>{selectedScene.scene}</Text>
                <Text style={styles.modalDescription}>{selectedScene.description}</Text>
                <Text style={styles.modalCharacters}>
                  <Text style={{ fontWeight: 'bold' }}>Characters:</Text> {selectedScene.characters.join(', ')}
                </Text>
                <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 8,
    marginTop: -50,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    height: 220, // Fixed height to ensure all cards are the same size
    marginBottom: 12,
  },
  card: {
    flex: 1, // Ensure the card fills the entire grid item
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    height: 120, // Set a fixed height for the image
    resizeMode: 'cover',
  },
  verseText: {
    fontSize: 16,
    color: 'black',
    marginTop: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalCharacters: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
