
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const width = Dimensions.get('window').width / 3;
const height = Dimensions.get('window').height / 15;


const Header = ({ number }) => {

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row-reverse', flex: 1, height: height, justifyContent: 'space-around', alignItems: 'center', borderColor: 'gray', borderStyle: 'solid', borderBottomWidth: 0.6 }}>
          <Text style={styles.text}>في انتظار العروض </Text>
          <TouchableOpacity>
            <View>
              <Text style={styles.text}>الغاء الطلب</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: 'row-reverse', borderStyle: 'solid', borderRightWidth: 0.6, borderBottomWidth: 3, borderBottomColor: '#3da954' }}>
        <TouchableOpacity style={{ width: width, height: height, borderColor: 'gray', borderStyle: 'solid', borderRightWidth: 0.6 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
            <View >
              <Image
                style={styles.icon}
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Arrow-down.svg/800px-Arrow-down.svg.png',
                }}
              />
            </View>
            <View >
              <Text style={styles.text}>فئة السيارة</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: width, height: height, borderColor: 'gray', borderStyle: 'solid', borderRightWidth: 0.6 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
            <View >
            <Image style={styles.icon} source={require('../images/up-and-down.png')} />

            </View>
            <View >
              <Text style={styles.text}>الأقل سعرا</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: width, height: height, borderColor: 'gray', borderStyle: 'solid', borderRightWidth: 0.6 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
            <View >
              <Image
                style={styles.icon}
                source={{
                  uri:
                    'https://e7.pngegg.com/pngimages/366/232/png-clipart-computer-icons-icon-design-filter-miscellaneous-angle.png',
                }}
              />
            </View>
            <View >
              <Text style={styles.text}>التصفية({number})</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  txt: {
    fontFamily: 'OpenSans-Regular'
  },
  text: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'OpenSans-Regular',

  }
});

export default Header;
