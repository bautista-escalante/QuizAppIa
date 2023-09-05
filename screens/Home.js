
import * as React from 'react';
import { View, Text,SafeAreaView,Image,StyleSheet} from 'react-native';
import { BlackButton, WhiteButton } from '../components/Buttons';



function HomeScreen() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
        source={require("../assets/logito.png")}
        style={styles.logo}
        resizeMode="contain" // Ajusta la imagen al espacio
      />

        <BlackButton onPress={()=> alert("Jugar")} text ="Jugar"></BlackButton>
        <WhiteButton onPress={()=> alert("Puntajes")} text ="Puntajes"></WhiteButton>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5', // Color de Fondo
        borderRadius:50,
      },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius:100,
      },
  })


export default HomeScreen

