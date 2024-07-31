import React from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import Section from '../component/Section'
import Slider from '../component/Slider'

const Home = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, backgroundColor: 'white', margin: 15 }}>
        <View style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <Image source={require('../assets/icons/news.png')}
            style={{ backgroundColor: 'white', height: 80, width: 100 }} />
          <Image source={require('../assets/icons/bell.png')}
            style={{ backgroundColor: 'white', height: 40, width: 60 }} />
        </View>
        <View style={{
          display: 'flex', flexDirection: 'row', width: '100',
          height: 50, backgroundColor: 'white', alignItems: 'center', borderRadius: 10, borderWidth: 1,
          borderColor: 'black', marginTop: 10, marginBottom: 15
        }}>
          <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 5 }}>
            <Image source={require('../assets/icons/search.png')}
              style={{ resizeMode: 'contain', maxWidth: '100%' }} />
          </TouchableOpacity>
          <TextInput style={{ width: '75%', fontSize: 20 ,color:'black'}} placeholder='search'placeholderTextColor={'#4E4B66'} />
          <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 7 }}>
            <Image source={require('../assets/icons/search2.png')}
              style={{ resizeMode: 'contain', maxWidth: '100%' }} />
          </TouchableOpacity>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', marginBottom: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' ,color:'black'}}>Trending</Text>
          <Text style={{ fontSize: 20,color:'black' }}>See all</Text>
        </View>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 7, marginBottom: 15 }}>
          <Image source={require('../assets/icons/news.png')}
           style={{resizeMode:'contain'}}/>
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <Text style={{ fontSize: 15 ,color:'black'}}>Europe</Text>
          <Text style={{ fontSize: 15,color:'black', fontWeight: 'bold' }}>Russian WarShip:Moskava sinks in black sea</Text>
          <View style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/icons/bbc.png')}
                style={{ resizeMode: 'contain', maxWidth: '100%' }} />
              <Text style={{ fontSize: 15, paddingRight: 50,color:'black' }}>BBC News</Text>
              <Image source={require('../assets/icons/hour.png')}
                style={{ resizeMode: 'contain', maxWidth: '100%' }} />
              <Text style={{ fontSize: 15,color:'black' }}>4h ago</Text>
            </View>
            <View style={{ backgroundColor: 'white', paddingBottom: 10 }}>
              <Text style={{ fontSize: 30,color:'black' }}>...</Text>
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', marginBottom: 15, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold',color:'black' }}>Latest</Text>
          <Text style={{ fontSize: 20,color:'black' }}>See all</Text>
        </View>
        <Slider/>
        <Section/>
        <Section/>
        <Section/>
      </View>
    </ScrollView>
  )
}

export default Home
