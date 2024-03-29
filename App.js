import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, ThemeProvider, Button } from 'react-native-elements'
import * as Font from 'expo-font';
import { isHoliday, toThaiDate, countDaysUntilNextHoliday } from './src/holidays';

const Main = ({today}) => {
  var tomorrow = new Date(today.toDateString())
  tomorrow.setDate(tomorrow.getDate() + 1)
  const wanyood = isHoliday(tomorrow) ? 'เออ หยุด' : 'หยุดพ่อมึง'
  return (
    <ThemeProvider>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{
          text: 'พรุ่งนี้หยุดปะ?',
          style: {
            color: '#fff',
            fontFamily: 'kanit',
            fontSize: 19
          }
        }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        containerStyle={{
          backgroundColor: '#FFB141'
        }}
      />
      <View style={styles.container}>
        <Text style={styles.normalText}>{toThaiDate(today)}</Text>
        <Text style={styles.title}>
          พรุ่งนี้หยุดปะ?
        </Text>
        <Text style={styles.answer}>
          {wanyood}
        </Text>
        <Text style={styles.content}>หยุดอีกทีนู่นเลย..</Text>
        <Text style={styles.content}>วันปีใหม่ อีก {countDaysUntilNextHoliday(today)} วัน</Text>
        <Button
          title='+เพิ่มลงปฏิทิน'
          type='clear'
          titleStyle={styles.normalText}
          />
      </View>
    </ThemeProvider>
  );
}

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    today: new Date()
  };

  async componentDidMount() {
    await Font.loadAsync({
      'kanit-light': require('./assets/fonts/Kanit-Light.ttf'),
      'kanit-semi-bold': require('./assets/fonts/Kanit-SemiBold.ttf'),
      'kanit': require('./assets/fonts/Kanit-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
    setInterval( () => {
      this.setState({
        today : new Date()
      })
    },1000)
  }

  render() {
    if(this.state.fontLoaded)
      return (
        <Main today={this.state.today}/>
      );
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    paddingBottom: 12,
    fontFamily: 'kanit-light'
  },
  answer: {
    fontSize: 70,
    fontFamily: 'kanit',
    paddingBottom: 12,
  },
  content: {
    fontFamily: 'kanit-light',
    fontSize: 18
  },
  normalText: {
    fontFamily: 'kanit-light'
  }
});
