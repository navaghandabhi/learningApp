import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { ColorsCode } from '../data/theme/Colors'
import { Appbar, Button, Card, IconButton, Text, } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type CustomHomeProps = NativeStackNavigationProp<RootStackParamList, "CustomHome">
const CustomHome = ({ navigation }: CustomHomeProps) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <CustomAppBar title={'Home'} navigation={navigation} />
        <Text style={styles.greetingTitle}>Hello</Text>
        <Text style={styles.greetingSubTitle}>Navaghan Dabhi</Text>
        <HomeCarousel />
        <CustomListView />
      </ScrollView>
    </View>
  )
}

export default CustomHome

const styles = StyleSheet.create({
  greetingTitle: {
    fontSize: 24,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: ColorsCode.primaryColor,
    fontWeight: 'bold'
  },
  greetingSubTitle: {
    fontSize: 18,
    paddingHorizontal: 16,
    color: ColorsCode.primaryColor,
    fontWeight: 'bold'
  },
  appBarStyle: {
    height: 56,
    width: '100%',
    color: 'white',
    backgroundColor: ColorsCode.primaryColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 16,
    color: 'white',
    textAlign: 'center'
  },
  leading: {
    paddingHorizontal: 8
  },
  treling: {
    paddingHorizontal: 8
  },
  cardStyle: {
    margin: 8,
    width: 100,
  },
  homeCarousel: {
    marginVertical: 8,
    flexDirection: 'row'
  },
  listTile: {
    margin: 8
  },
  // listtile
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  content: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
  },
  card: {
    paddingLeft: 16,
    padding: 8,
    flex: 1,
  },
  iconButton: {
    position: 'absolute',
    left: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
  customCardStyle: {
    margin: 8,
    padding: 8,
    paddingRight: 16,
  },
  cardmargin:{
    width: '80%',
  },
  iconStyle: {
    position: 'absolute',
    right: -22,
    borderRadius: 12
  },
  customCard: {
    alignItems: 'center',
    // position: 'relative',
    flexDirection: 'row',
    alignSelf: 'center'
  }
})

function CustomAppBar({ title, navigation }: { title: string, navigation: CustomHomeProps }) {
  return (
    <Appbar.Header style={styles.appBarStyle}>
      <Appbar.BackAction color={ColorsCode.foregroundColor} onPress={() => { navigation.goBack() }} />
      <Appbar.Content title={title} color={ColorsCode.foregroundColor} />
      <Appbar.Action icon="calendar" color={ColorsCode.foregroundColor} onPress={() => { }} />
      <Appbar.Action icon="magnify" color={ColorsCode.foregroundColor} onPress={() => { }} />
    </Appbar.Header>
  )
}

function HomeCarousel() {
  return (
    <View style={styles.homeCarousel}>
      <ScrollView horizontal>
        <Card style={styles.cardStyle} mode='contained'>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
        <Card style={styles.cardStyle} mode='contained'>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
        <Card style={styles.cardStyle} mode='contained'>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
        <Card style={styles.cardStyle} mode='contained'>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
        <Card style={styles.cardStyle} mode='contained'>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
      </ScrollView>
    </View>
  );
}
function CustomListView() {
  return (
    <View>
      <Text style={styles.greetingTitle}>Orders</Text>
      <View>
        <IconOnTopOfCard
          title="List Item Title"
          subtitle="List Item SubtitleList Item SubtitleListList Item SubtitleList Item SubtitleListList Item SubtitleList Item SubtitleListList Item SubtitleList Item SubtitleList Item Subtitle"
        />
        <CustomCard />
        <IconOnTopOfCard
          title="List Item Title"
          subtitle="List Item SubtitleList Item SubtitleListList Item SubtitleList Item SubtitleListList Item SubtitleList Item SubtitleListList Item SubtitleList Item SubtitleList Item Subtitle"
        />
        <CustomCard />
      </View>
    </View>
  );
}

const IconOnTopOfCard = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Title
            title={title}
            subtitle={subtitle}
            subtitleNumberOfLines={3}
          />
        </Card>
      </View>
      <View style={styles.iconButton}>
        <IconButton icon={'home'} style={{ borderRadius: 12 }} size={36} mode='contained' />
      </View>
    </View>
  );
};

const CustomCard = () => {
  return (
    <View style={styles.customCard}>
      <View style={styles.cardmargin}>
        <Card style={styles.customCardStyle}>
          <Card.Title
            title="Amazon"
            subtitle="buy laptops on amazon is not costly then flipcart"
            subtitleNumberOfLines={3}
          >
          </Card.Title>
        </Card>
      </View>
      <IconButton icon={'home'} size={36} mode='contained' style={styles.iconStyle}></IconButton>
    </View>
  )
}