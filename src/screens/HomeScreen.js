import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import logo from '../assets/logo.png';

const HomeScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        'Inter-Black': require('../assets/fonts/FFF_Tusj.ttf'),
    });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    else {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.header}>
                    LET'S FIGHT CORONA TOGETHER!
                </Text>
                <Text style={styles.content}>
                    We are collectively facing a Pandemic threat that is 
                    sweeping across the humanity beyond oceans and borders. 
                    Considering the seriousness of COVID-19, it's about time we 
                    step up against this deadly disease. For the sake of lives 
                    lost and the rest of humanity, let us all pledge to beat Corona 
                    back.
                    {"\n"}{"\n"}
                    We thus request your participation in this survey, where we try to 
                    keep a record of the health status of you and your family members. This will 
                    help us not only in keeping a track of infections, but also, help you 
                    in getting proper assistance in case of any need.
                    {"\n"}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Form')} style={styles.button}>
                    <Text style={styles.buttonText}>Take a Survey!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
},
header: {
    color: '#8E4EE4',
    fontSize: 24,
    fontWeight: "900",
    marginHorizontal: 15,
    marginBottom: 20,
    fontFamily: 'Inter-Black',
},
content: {
    color: '#68A4C9',
    fontWeight: "600",
    fontSize: 20,
    marginHorizontal: 15,
    marginBottom: 10,
    textAlign: 'center'
},
button: {
    backgroundColor: "#8E44AD",
    padding: 15,
    borderRadius: 5,
  },
buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default HomeScreen;
