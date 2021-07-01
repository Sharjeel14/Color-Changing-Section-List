import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  Image,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    key: 0,
    title: "Title 1",
    colorCode: "#1ABC9C",
    data: ["TURQUOIS"]
  },
  {
    key: 1,
    title: "Title 2",
    colorCode: "#FF1493",
    data: ["Wet Asphalt"]
  },
  {
    key: 2,
    title: "Title 3",
    colorCode: "#34495E",
    data: ["Peter River"],
  },

];

const COLORS = [
  '#BC6ECA',
  '#E87A79',
  '#47B6AC',
  '#FFCC78',
  '#1CA7C4',
  '#FF1493',
  '#C0C0C0',
  '#1ABC9C',
  '#34495E',
  '#F1C40F',

];

const onPress = (value) => {
  alert(value);
};

const App = () => {
  return (
    <View style={styles.container}>

      <SectionList

        sections={DATA}
        renderItem={({ item, section }) =>
          <TouchableOpacity activeOpacity={1} onPress={() => onPress(item)}>
            <View style={styles.item1}>
              <View style={styles.Box, styles.Box1}>
                <Text style={styles.heading}>{item}</Text>
                <Text style={styles.heading}>{section.colorCode}</Text>
              </View>
              <View style={styles.Box, styles.Box2}>
                <Text style={styles.heading}>{item}</Text>
                <Text style={styles.heading}>{section.colorCode}</Text>
              </View>
              <View style={styles.Box, styles.Box3}>
                <Text style={styles.heading}>{item}</Text>
                <Text style={styles.heading}>{section.colorCode}</Text>
              </View>
            </View>
            <View style={styles.item2}>
              <View style={styles.Box, styles.Box4}>
                <Text style={styles.heading}>{item}</Text>
                <Text style={styles.heading}>{section.colorCode}</Text>
              </View>
              <View style={styles.Box, styles.Box5}>
                <Text style={styles.heading}>{item}</Text>
                <Text style={styles.heading}>{section.colorCode}</Text>
              </View>
              <View style={styles.Box, styles.Box6}>
                <Text style={styles.heading}>{item}</Text>
                <Text style={styles.heading}>{section.colorCode}</Text>
              </View>
            </View>
          </TouchableOpacity>
        }

        renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  item2: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  image: {
    fontSize: 13,
    backgroundColor: "#F5DEB3",
    padding: 15,
    borderRadius: 100,
    color: "#fff",
    fontWeight: "bold",
  },
  heading: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "bold",
    color: '#fff',
  },

  header: {
    color: "#fff",
    backgroundColor: '#1194F6',
    padding: 20,
    fontSize: 25,
  },
  section: {
    padding: 10,
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 1,
    backgroundColor: '#636E72',
    color: '#fff',
  },
  Box: {
    height: 150,
    width: 110,
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)]
  },
  Box1: {
    backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
    height: 150,
    width: 110,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  Box2: {
    backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
    height: 150,
    width: 110,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  Box3: {
    backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
    height: 150,
    width: 110,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  Box4: {
    backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
    height: 150,
    width: 110,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  Box5: {
    backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
    height: 150,
    width: 110,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  Box6: {
    backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)],
    height: 150,
    width: 110,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'flex-end',
  }
});

export default App;