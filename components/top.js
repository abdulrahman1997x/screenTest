import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';



const Top = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <View  style={{marginRight:20}}>
          <View>
            <Text style={styles.txt}> الرياض-جدة</Text>
          </View>
          <View>
      
          </View>
        </View>

        <View style={styles.itemm}>
    

          <View>
            <View >
              <Text style={{
                fontFamily: 'OpenSans-Regular',
                fontSize: 15,
              }} >تفاصيل الطلب</Text>
            </View>
          </View>


        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flex: 0.16,
    backgroundColor: 'white',
    borderBottomWidth:0.6 ,
    borderBottomColor:'gray',
    backgroundColor: "#edf8ef",


  },
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  Item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 5,
    width: Dimensions.get('window').width / 3,
    justifyContent: 'flex-end',
    height: 50
  },
  itemm: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    marginRight:20,
    alignItems:'center',
    borderRadius: 5,
    height: 50,
    backgroundColor: "#edf8ef",
    width: Dimensions.get('window').width / 3 * 1.7,

  },
  

  tinyLogo: {
    width: 30,
    height: 30,
    marginLeft: 6,
    marginRight: 3
  },
  txt: {
    color: "#3da954",
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',

  }
});

export default Top;
