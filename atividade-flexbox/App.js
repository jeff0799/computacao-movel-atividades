import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flexDirection: 'row', height: '100%' }}>

      <View style={columnStyle.container}>
        <View style={{ height: '27%', backgroundColor: '#8876E0', ...rectangleStyle.container }}>

        </View>
        <View style={{ height: '27%', backgroundColor: '#00BCFA', ...rectangleStyle.container }}>

        </View>
        <View style={{ height: '46%', backgroundColor: '#007EF8', ...rectangleStyle.container }}>

        </View>
      </View>

      <View style={columnStyle.container}>
        <View style={{ height: '27%', backgroundColor: '#79CCFB', ...rectangleStyle.container }}>

        </View>
        <View style={{
          height: '66%', backgroundColor: '#00BCFA',
          alignItems: 'center', justifyContent: 'center',
          ...rectangleStyle.container
        }}>
          <Text style={textStyle.container}>
            FLEXBOX
          </Text>
        </View>
        <View style={{ height: '7%', backgroundColor: '#573FC0', ...rectangleStyle.container }}>

        </View>
      </View>

    </View>
  );
}

const columnStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    width: '50%'
  }

})
const rectangleStyle = StyleSheet.create({
  container: {
    borderColor: '#453F3F',
    borderWidth: 5
  },
});
const textStyle = StyleSheet.create({
  container: {
    color: 'black',
    fontSize: 60,
    fontWeight: 'bold',
    letterSpacing: 10,
    transform: [{ rotate: '270deg' }],
    width: '200%'
  }
})
