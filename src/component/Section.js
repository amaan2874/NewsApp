import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Section = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/icons/news.png')}
          style={styles.newsImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.regionText}>Europe</Text>
        <Text style={styles.headlineText}>
          Russian WarShip: Moskava sinks in black sea
        </Text>
        <View style={styles.infoContainer}>
          <View style={styles.sourceContainer}>
            <Image
              source={require('../assets/icons/bbc.png')}
              style={styles.sourceImage}
            />
            <Text style={styles.sourceText}>BBC News</Text>
            <Image
              source={require('../assets/icons/hour.png')}
              style={styles.timeImage}
            />
            <Text style={styles.timeText}>4h ago</Text>
          </View>
          <View style={styles.moreOptions}>
            <Text style={styles.moreText}>...</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  imageContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginRight: 10,
  },
  newsImage: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
  },
  textContainer: {
    width: '70%',
  },
  regionText: {
    fontSize: 15,
    color:'black',
  },
  headlineText: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'black',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  sourceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sourceImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  sourceText: {
    fontSize: 15,
    paddingRight: 10,
    color:'black',
  },
  timeImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  timeText: {
    fontSize: 15,
    color:'black',
  },
  moreOptions: {
    alignItems: 'flex-end',
  },
  moreText: {
    fontSize: 30,
    color:'black'
  },
});

export default Section;
