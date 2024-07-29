import React from 'react'
import { Text, View, Image,StyleSheet,Pressable } from 'react-native'
import Input from '../screens/Input'

const Profile = () => {
  return (
    <View style={{ backgroundColor: 'green', flex: 1 }}>
      <View style={{ backgroundColor: 'white', flex: 1, margin: 10 }}>
        <View style={{ backgroundColor: 'red', flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <Image source={require('../assets/icons/arrow.png')}
            style={{ height: 30, width: 30 }} />
          <Text style={{fontSize:17,fontWeight:'bold'}}>Fill your Profile</Text>
          <View style={{ paddingLeft:30}} ></View>
        </View>
        <View style={{ backgroundColor: 'yellow', flex: 8 }}>
          <View style={{ backgroundColor: 'red',borderWidth:2,borderRadius:75,borderColor:'black',height:135,width:135,alignSelf:'center' }}>
          <Image source={require('../assets/icons/Frame.png')}
                        style={{ height: 30, width: 30,position:'absolute',top:100,right:10 }} />
          </View>
          <Text style={{ fontSize: 17 ,color: 'black'}}>Username</Text>
        <Input keyboard="default" />
        <Text style={{ fontSize: 17 ,color: 'black'}}>Full Name </Text>
        <Input keyboard="default" />
        <Text style={{ fontSize: 17 ,color: 'black'}}>Email Address <Text style={{ color: 'red' }}>*</Text></Text>
        <Input keyboard="default" />
        <Text style={{ fontSize: 17 ,color: 'black'}}>Phone Number <Text style={{ color: 'red' }}>*</Text></Text>
        <Input keyboard="default" />
        </View>
        <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
        <Pressable>
          <Text onPress={()=>navigation.navigate('Dashboard')}  style={styles.Pressable}>Next</Text>
        </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Pressable: {
    backgroundColor: '#1877F2',
    color: 'white',
    height: 50,
    marginTop:10,
    borderRadius: 5,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10

  }
})

export default Profile