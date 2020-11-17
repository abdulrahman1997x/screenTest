import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';



const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <View style={styles.Item}>
          <View>
            <Text style={styles.txt}>كود الخصم</Text>
          </View>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{
                uri:
                  'https://cdn1.iconfinder.com/data/icons/chirstmas/24/gift-512.png',
              }}
            />
          </View>
        </View>

        <View style={styles.itemm}>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/600px-Ski_trail_rating_symbol-green_circle.svg.png',
              }}
            />
          </View>

          <View style={styles.Item2}>
            <View >
              <Text style={{
                    fontFamily: 'OpenSans-Regular',
                fontSize: 15,
              }} >رحلات مجدولة</Text>
            </View>
            <View>
              <Text>رياض - جدة</Text>
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
    // shadowColor: 'black',
    // shadowRadius: 10,
    // shadowOpacity: 1,
    elevation: 18

  },
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: 'space-around',
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
    alignItems: 'center',
    borderRadius: 5,
    height: 50,
    backgroundColor: "#edf8ef",
    width: Dimensions.get('window').width / 3 * 1.7,

  },
  Item2: {
    flexDirection: 'column',
    borderRadius: 5,
    width: Dimensions.get('window').width / 3 * 1.7,
    height: 50,
    alignItems: 'flex-end',
    paddingTop: 5
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

export default Footer;
