import React from 'react'
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator
} from 'react-native'
import Card from './components/Card'

import Header from './components/Header';
import Footer from './components/Footer'
import Top from './components/top'
import Data from "./data/dummy-data";





const App = () => {
  const [lodded, setLoded] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setLoded(false)
    }, 100)
  }, []);

  //  testing for api use case 
  
  // if (lodded){
  //   return (
  //     <View style={[styles.container, styles.horizontal]}>
  //     <ActivityIndicator size="large" color="#0000ff" />
  //   </View>
  //   )
  // } 
  return (
    <View style={{ flex: 1 }}>
      <Top />

      <View style={{ flex: 0.2 }}>
        <Header number={Data.length} />
      </View>


      <View style={{ flex: 0.9 }}>

        <FlatList
          data={Data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Card
            driver={item.driver}
            price={item.price}
            carName={item.carName}
            seats={item.seats}
            bags={item.bags}
          />}
        />

      </View>
      <Footer />

    </View>
  )


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },



})
export default App
