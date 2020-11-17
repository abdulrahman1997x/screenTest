import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Image,
  Dimensions,
} from 'react-native'

const height = Dimensions.get('window').height / 2.5;

const Card = ({ driver, price, carName, seats, bags }) => {
  return (

    <TouchableNativeFeedback useForeground  >
      <View style={styles.product}>
        <View style={styles.touchable}>
          <View>
            <View style={styles.rowOneContainer}>
              <View style={styles.firstSection}>
                <View>
                  <Image style={styles.img} source={require('../images/profile.jpg')} />
                </View>
                <View style={styles.texCont}>
                  <Text style={styles.txtName}>{driver}</Text>
                  <View style={styles.reviewCon}>
                    <Image style={styles.icon} source={require('../images/star.png')} />
                    <Text style={styles.review}>4.7</Text>
                  </View>
                </View>
              </View>

              <View style={styles.price}>
                <View style={styles.firstPrice}>
                  <Text style={styles.txt}> <Text style={styles.bigPrice}>{price}</Text> ريال </Text>
                  <Text style={{ ...styles.text, ...styles.priceBefore }}>500 ريال</Text>
                </View>
              </View>
            </View>

            <View style={styles.rowTowContainer}>
              <View>
                <Text style={styles.carType}>{carName}</Text>
              </View>
              <View style={styles.carSpecific}>
                <View style={styles.carSpecificTxtCon}>
                  <Text style={styles.carSpecificTxt}> <Text >{seats}</Text> مقاعد </Text>
                  <Image style={styles.iconCar} source={require('../images/man.png')} />
                </View>
                <View style={styles.carSpecificTxtCon}>
                  <Text style={styles.carSpecificTxt}> <Text >{bags}</Text> شنط </Text>
                  <Image style={styles.iconCar} source={require('../images/suitcase.png')} />
                </View>
              </View>
            </View>

            <View style={styles.rowThreeContainer}>
              <View style={styles.carNameCon}>
                <Text style={{ ...styles.txt, ...styles.txtCarName }}>سيارة كاملة</Text>
              </View>
              <View style={styles.iconList}>
                <Image style={styles.iconSpecfic} source={require('../images/no-smoking.png')} />
                <Image style={styles.iconSpecfic} source={require('../images/status.png')} />
                <Image style={styles.iconSpecfic} source={require('../images/video-camera.png')} />
                <Image style={styles.iconSpecfic} source={require('../images/wifi.png')} />

              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback >

  )
}


const styles = StyleSheet.create({
  product: {
    elevation: 5,
    borderRadius: 7,
    backgroundColor: 'white',
    height: height,
    margin: 20,
    overflow: "hidden",

  },
  touchable: {
    borderRadius: 7,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
  },

  rowOneContainer: {
    padding: 8,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: "space-between"
  },
  firstSection: {
    padding: 8,
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  texCont: {
    paddingBottom: 45,
    paddingRight: 5,

  },
  txtName: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 15,

  },
  reviewCon: {
    flexDirection: "row-reverse",
  },

  icon: {
    width: 20,
    height: 20,
    alignSelf: "flex-end",
  },
  review: {
    alignSelf: "flex-end",
    paddingRight: 3
  },
  txt: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 15,
    color: '#8fa595'
  },
  price: {
    marginRight: 20,
    paddingBottom: 20
  },
  bigPrice: {
    fontSize: 30,
    color: "#3da954"
  },
  priceBefore: {
    color: '#8fa595',
    textDecorationLine: 'line-through',
    fontSize: 17
  },
  rowTowContainer: {
    margin: 10,
    height: 60,
    backgroundColor: '#f1f4f2',
    borderRadius: 7,
    justifyContent: "space-between",
    flexDirection: "row-reverse"

  },
  carType: {
    paddingTop: 15,
    paddingRight: 10,
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
  carSpecificTxtCon: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row"
  },

  carSpecific: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row-reverse",

  },
  carSpecificTxt: {
    fontSize: 15,
    color: '#8fa595',
  },
  iconCar: {
    width: 17,
    height: 17,
    alignSelf: "flex-end",
  },
  rowThreeContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between"

  },
  carNameCon: {
    paddingTop: 10,
    paddingRight: 10
  },
  txtCarName: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
  },
  iconList: {
    flexDirection: "row-reverse",
    paddingTop: 8,
    paddingRight: 10
  },
  iconSpecfic: {
    width: 17,
    height: 17,
    margin: 5
  }

})

export default Card
