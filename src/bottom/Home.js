import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import Input from '../screens/Input'

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <View style={{ flex: 1, backgroundColor: 'green', margin: 10 }}>
        <View style={{ backgroundColor: 'pink', display: 'flex', justifyContent: 'space-between', alignItems: 'center',flexDirection:'row' }}>
          <Image source={require('../assets/icons/news.png')}
            style={{ backgroundColor: 'red', height: 70, width: 100 }} />
            <Image source={require('../assets/icons/bell.png')}
            style={{ backgroundColor: 'red', height: 50, width: 70 }} />
        </View>
        <Input placeholder={"search"} />
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'orange' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Trending</Text>
          <Text style={{ fontSize: 20 }}>See all</Text>
        </View>
        <View style={{ backgroundColor: 'pink', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/icons/news.png')}
          />
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <Text style={{ fontSize: 15 }}>Europe</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Russian WarShip:Moskava sinks in black sea</Text>
          <View style={{ backgroundColor: 'orange', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ backgroundColor: 'blue', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 15, paddingRight: 50 }}>BBC News</Text>
              <Text style={{ fontSize: 15 }}>4h ago</Text>
            </View>
            <View style={{ backgroundColor: 'yellow', paddingBottom: 10 }}>
              <Text style={{ fontSize: 30 }}>...</Text>
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'orange' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Latest</Text>
          <Text style={{ fontSize: 20 }}>See all</Text>
        </View>
        <View>
          <ScrollView horizontal={true} style={{ backgroundColor: 'white' }}>
            <Text style={{ fontSize: 15, color: 'black', paddingRight: 30 }}>All</Text>
            <Text style={{ fontSize: 15, color: 'black', paddingRight: 30 }}>Sports</Text>
            <Text style={{ fontSize: 15, color: 'black', paddingRight: 30 }}>Politics</Text>
            <Text style={{ fontSize: 15, color: 'black', paddingRight: 30 }}>Bussiness</Text>
            <Text style={{ fontSize: 15, color: 'black', paddingRight: 30 }}>Health</Text>
            <Text style={{ fontSize: 15, color: 'black', paddingRight: 30 }}>Travel</Text>
            <Text style={{ fontSize: 15, color: 'black', paddingRight: 30 }}>Science</Text>
          </ScrollView>
        </View>
        
      </View>
    </View>
  )
}

export default Home
