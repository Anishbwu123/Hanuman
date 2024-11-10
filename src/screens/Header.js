import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, showOmIcon = true}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backbtn}
        onPress={() => navigation.navigate('Login')}>
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>

      <View style={styles.centerContent}>
        {showOmIcon && (
          <Image source={require('../../Images/om.png')} style={styles.img} />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  backbtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  centerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  img: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
