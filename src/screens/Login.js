import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ToastAndroid,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

// Validation schema for mobile number
const LoginSchema = Yup.object().shape({
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit mobile number')
    .required('Mobile number is required'),
});

export default function Login({navigation}) {
  const [language, setLanguage] = useState('EN'); // Default to English

  // Function to handle language change
  const toggleLanguage = lang => setLanguage(lang);

  // Placeholder functions for social logins
  const handleFacebookLogin = () => {
    Alert.alert(language === 'EN' ? 'Login with Facebook' : 'फेसबुक से लॉगिन');
  };

  const handleGoogleLogin = () => {
    Alert.alert(language === 'EN' ? 'Login with Google' : 'गूगल से लॉगिन');
  };

  return (
    <View style={styles.container}>
      {/* Banner Image */}
      <Image source={require('../../Images/gg.jpg')} style={styles.banner} />

      {/* Language Toggle */}
      <View style={styles.languageToggle}>
        <TouchableOpacity onPress={() => toggleLanguage('EN')}>
          <Text
            style={[styles.langText, language === 'EN' && styles.selectedLang]}>
            EN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleLanguage('HI')}>
          <Text
            style={[styles.langText, language === 'HI' && styles.selectedLang]}>
            HI
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login Heading */}
      <Text style={styles.heading}>
        {language === 'EN' ? 'Login' : 'लॉगिन'}
      </Text>

      {/* Formik Form */}
      <Formik
        initialValues={{mobileNumber: ''}}
        validationSchema={LoginSchema}
        onSubmit={values => {
          console.log('Form submitted with values:', values);
          // Handle login logic here
          navigation.navigate('HomeScreen');
          ToastAndroid.show(
            language === 'EN'
              ? 'You have successfully logged in.'
              : 'आप सफलतापूर्वक लॉगिन कर चुके हैं।',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            35,
            50,
          );
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder={
                language === 'EN'
                  ? 'Enter Mobile Number'
                  : 'मोबाइल नंबर दर्ज करें'
              }
              keyboardType="phone-pad"
              onChangeText={handleChange('mobileNumber')}
              onBlur={handleBlur('mobileNumber')}
              value={values.mobileNumber}
            />
            {/* Show validation error message */}
            {errors.mobileNumber && touched.mobileNumber && (
              <Text style={styles.errorText}>{errors.mobileNumber}</Text>
            )}
            <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
              <Text style={styles.btnText}>
                {language === 'EN' ? 'Continue' : 'जारी रखें'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      {/* Divider */}
      <Text style={styles.orText}>{language === 'EN' ? 'OR' : 'या'}</Text>

      {/* Facebook Login Button */}
      <TouchableOpacity
        style={[styles.socialButton, {borderRadius: 20}]}
        onPress={handleFacebookLogin}>
        <Image
          source={require('../../Images/communication.png')}
          style={styles.fb}
        />
        <Text style={styles.socialButtonText}>
          {language === 'EN' ? 'Login with Facebook' : 'फेसबुक से लॉगिन'}
        </Text>
      </TouchableOpacity>

      {/* Google Login Button */}
      <TouchableOpacity
        style={[styles.socialButton, {borderRadius: 20}]}
        onPress={handleGoogleLogin}>
        <Image
          source={require('../../Images/google.png')}
          style={styles.google}
        />
        <Text style={styles.socialButtonText}>
          {language === 'EN' ? 'Login with Google' : 'गूगल से लॉगिन'}
        </Text>
      </TouchableOpacity>
      {/* LOGIN WITH MOBILE NUM */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Move content down from top
    padding: 20,
    backgroundColor: '#f2dfce',
  },
  banner: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20, // Space below the banner
    resizeMode: 'cover',
  },
  btn: {
    backgroundColor: 'orange', // Customize the button color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  languageToggle: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 0.2,
    borderRadius: 10,
    alignSelf: 'flex-end',
    // marginLeft:0
  },
  langText: {
    fontSize: 16,
    marginHorizontal: 10,
    color: 'gray',
  },
  selectedLang: {
    fontWeight: 'bold',
    color: 'black',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    alignSelf: 'center',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 16,
    color: 'gray',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 8,
    borderRadius: 20,

    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 0.5,
  },
  socialButtonText: {
    marginLeft: 10,

    color: 'black',
    fontSize: 16,
  },
  google: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
  },
  fb: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
  },
});
