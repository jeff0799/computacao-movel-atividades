import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.column}>
        <View style={[styles.box, { flex:1, backgroundColor: '#8876E0' }]} />
        <View style={[styles.box, { flex:1, backgroundColor: '#00BCFA' }]} />
        <View style={[styles.box, { flex:2, backgroundColor: '#007EF8' }]} />
      </View>

      <View style={styles.column}>
        <View style={[styles.box, { flex:2, backgroundColor: '#79CCFB' }]} />
        <View style={[styles.box, {
          flex:5, backgroundColor: '#00BCFA',
          alignItems: 'center', justifyContent: 'center',
        }]}>
          <View>
            <Text style={styles.text}>
              FLEXBOX
            </Text>
          </View>
        </View>
        <View style={[styles.box, { flex:1, backgroundColor: '#573FC0' }]} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%'
  },
  column: {
    flexDirection: 'column',
    height: '100%',
    width: '50%'
  },
  box: {
    borderColor: '#453F3F',
    borderWidth: 5,
  },
  text: {
    color: 'black',
    fontSize: 60,
    fontWeight: 'bold',
    letterSpacing: 10,
    transform: [{ rotate: '270deg' }],
    width: "500%"
  }

})