import React, {useState, useRef} from 'react';

// import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  FlatList,
  Button,
  ScrollView,
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Carousel from 'react-native-snap-carousel';

import Header from './components/Header';
const App = () => {
  //carousel data
  const Images = [
    {image: require('./assets/card1.jpg')},
    {image: require('./assets/card2.jpg')},
    {image: require('./assets/card3.jpg')},
    {image: require('./assets/card4.jpg')},
  ];
  const {width, height} = Dimensions.get('window');
  const CarouselRef = useRef(null);

  const RenderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback>
        <Image
          source={item.image}
          style={{width: 360, height: 240, borderRadius: 10}}
        />
      </TouchableWithoutFeedback>
    );
  };

  //Sliding Panel
  const _draggedValue = new Animated.Value(height * 0.08);
  const ModalRef = useRef(null);

  const [items, setItems] = useState([
    {
      id: 1,
      name: 'DURU',
    },
    {
      id: 2,
      name: 'BURU',
    },
    {
      id: 3,
      name: 'CURU',
    },
    {
      id: 4,
      name: 'EURU',
    },
  ]);
  const Users = [
    {
      key: '1',
      userImage:
        'https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      userName: 'Rabin',
      transactionDate: '23 April 20',
      amount: '$400',
      credit: true,
    },
    {
      key: '2',
      userImage:
        'https://images.pexels.com/photos/4423850/pexels-photo-4423850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      userName: 'Arun',
      transactionDate: '23 April 20',
      amount: '$400',
      credit: true,
    },
    {
      key: '3',
      userImage:
        'https://images.pexels.com/photos/3095439/pexels-photo-3095439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      userName: 'Roshan',
      transactionDate: '23 April 20',
      amount: '$400',
      credit: true,
    },
    {
      key: '4',
      userImage:
        'https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      userName: 'Arun',
      transactionDate: '23 April 20',
      amount: '$400',
      credit: true,
    },
  ];
  return (
    <View style={styles.containers}>
      <View style={{paddingTop: 50, paddingHorizontal: 14}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{color: 'white', fontSize: 26}}> Welcome Back</Text>
            <Text style={{color: 'white', fontSize: 26}}>Roshan Don</Text>
          </View>
          <View>
            <Image
              source={{
                uri:
                  'https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
              }}
              style={styles.ProfileImage}
            />
          </View>
        </View>
        <View>
          <Carousel
            layout={'tinder'}
            ref={CarouselRef}
            data={Images}
            renderItem={RenderItem}
            sliderWidth={width}
            itemWidth={width - 10}
            swipeThreshold={10000}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.4}
            containerCustomStyle={{
              overflow: 'visible',
              marginVertical: 30,
            }}
            contentContainerCustomStyle={{
              paddingTop: 14,
            }}
          />
        </View>
        <View>
          <Text style={{color: '#fff', opacity: 0.5, marginBottom: 10}}>
            Send Money
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.AddUser}>
              <View styles={styles.AddUserIconbg}>
                <Button title="Add" color="white" />
              </View>
            </TouchableOpacity>

            <FlatList
              inverted
              horizontal
              data={Users}
              keyExtractor={(item) => item.key}
              renderItem={({item}) => {
                return (
                  <View style={styles.AddUser} key={item.id}>
                    <Image
                      style={styles.AddUserIconbg}
                      source={{
                        uri: item.userImage,
                      }}
                    />
                    <Text style={{color: '#fff'}}>{item.userName}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>

      <View style={{flex: 1}}>
        <SlidingUpPanel
          ref={ModalRef}
          draggableRange={{top: height - 120, bottom: height * 0.08}}
          // dragableRange={dragRange}
          animatedValue={_draggedValue}
          backdropOpacity={0}
          snappingPoints={[height - 120, 10, 60, 100, height * 0.08]}
          height={height + 60}
          friction={0.9}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#0c0c0c',
              borderRadius: 24,
              padding: 14,
            }}>
            <View style={styles.PanelHandle}></View>
            <View>
              <Text style={{marginVertical: 16, color: '#fff'}}>
                Recent Transactions
              </Text>
            </View>
            <View style={{height: 500, paddingBottom: 10}}>
              <FlatList
                data={Users}
                keyExtractor={(item) => item.key}
                renderItem={({item}) => {
                  return (
                    <View style={styles.PanelItemContainer}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View styles={{marginRight: 10}}>
                          <Image
                            source={{uri: item.userImage}}
                            style={styles.PanelImage}
                          />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={styles.text}>{item.userName}</Text>
                          <Text
                            style={{opacity: 0.8, color: '#fff', fontSize: 10}}>
                            {item.transactionDate}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#fff',
                            marginHorizontal: 2,
                          }}>
                          {item.amount}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </SlidingUpPanel>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containers: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 0,
  },
  ProfileImage: {
    height: 55,
    width: 55,
    borderRadius: 40,
  },
  ProfileImageNotification: {
    height: 12,
    width: 12,
    backgroundColor: '#4853ef',
    position: 'absolute',
    right: 5,
    borderWidth: 2,
    borderColor: '#000',
  },
  AddUser: {
    height: 140,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c0c0c',
    borderRadius: 10,
    marginRight: 14,
  },
  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 10,
  },
  textStyle: {
    color: '#333333',
    fontSize: 30,
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  PanelHandle: {
    height: 5,
    width: 50,
    backgroundColor: '#666',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6,
  },
  PanelItemContainer: {
    borderWidth: 0.6,
    borderColor: '#666',
    padding: 14,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  PanelImage: {
    width: 30,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 40,
  },
});

export default App;
