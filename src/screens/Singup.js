import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import Input from "./Input";

const Singup = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, backgroundColor: 'white', margin: 20 }}>
        <Text style={{ fontSize: 50 ,color:'#1877F2',fontWeight:'bold'}}>Hello!</Text>
        <Text style={{ fontSize: 25,color:'#4E4B66',marginBottom:30 }}>Singup to get Started</Text>
        <Text style={{ fontSize: 17 ,color: 'black'}}>Username <Text style={{ color: 'red' }}>*</Text></Text>
        <Input keyboard="default" />
        <Text style={{ fontSize: 17 ,color: 'black'}}>Password <Text style={{ color: 'red' }}>*</Text></Text>
        <Input keyboard="default" is_password={true} />
        <View style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between' }}>
          <Text style={{ color: 'black', fontSize: 17 }}>Remember me</Text>
        </View>
        <Pressable>
          <Text style={styles.Pressable}>Login</Text>
        </Pressable>
        <Text style={{ color: 'black',textAlign:"center", fontSize: 17,marginTop:20,marginBottom:20 }}>or continue with</Text>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{backgroundColor:'#EEF1F4',height:50,width:170,borderRadius:10,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/icons/Facebook.png')}
            style={{height:27,width:27}}/>
            <Text style={{fontSize:20}}>Facebook</Text>
          </View>
          <View style={{backgroundColor:'#EEF1F4',height:50,width:170,borderRadius:10,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../assets/icons/Google.webp')}
            style={{height:35,width:35}}/>
            <Text style={{fontSize:20}}>Google</Text>
          </View>
        </View>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
            <Text style={{fontSize:17,color: 'black'}}>Already have an account ? </Text>
            <Text onPress={()=>navigation.navigate('Login')} style={{fontSize:17,color:'#1E90FF',fontWeight:'bold'}}>Login</Text>
          </View>
      </View>
      {/* <View style={{ flex: 2.7, backgroundColor: 'blue', margin: 20 }}>
  
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  Pressable: {
    backgroundColor: '#1877F2',
    color: 'white',
    height: 50,
    // margin:30,
    borderRadius: 5,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10

  }
})

export default Singup;