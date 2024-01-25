// CustomDrawer.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerHeaderProps, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
// type Props = DrawerHeaderProps;
type Props = DrawerContentComponentProps;
const Drawer = createDrawerNavigator();
const CustomDrawer = ({ props }: Props) => {
    const imageSource = require('../../assets/images/shri_ram.jpg');

    return (
        <View style={styles.drawerStyle}>
            <DrawerContentScrollView>
            <ImageBackground style={[{ padding: 20 }, styles.drawerHeader]} source={require('../../assets/images/bgimage.jpg')}>
                        <Image style={styles.userImage} source={imageSource} />
                        <Text style={styles.drawerHeaderText}>Jay Shree Ram</Text>
                    </ImageBackground>
                    <View style={styles.drawerItemStyle}>
                      <DrawerItemList {...props}></DrawerItemList>  
                    </View>
                

                {/* <View>
                    <ImageBackground style={[{ padding: 20 }, styles.drawerHeader]} source={require('../../assets/images/bgimage.jpg')}>
                        <Image style={styles.userImage} source={imageSource} />
                        <Text style={styles.drawerHeaderText}>Jay Shree Ram</Text>
                    </ImageBackground>
                    <DrawerItem icon='home' page='Home' props={props}>
                        <Icon name="home" size={30} color="#900" />
                    </DrawerItem>
                    <DrawerItem icon='setting' page='Setting' props={props} >
                        <FIcon name="settings" size={30} color="#900" />

                    </DrawerItem>
                    <DrawerItem icon='message' page='Messages' props={props} >
                        <FIcon name="message-square" size={30} color="#900" />
                    </DrawerItem>
                    <DrawerItem icon='user' page='Profile' props={props} />
                </View> */}


            </DrawerContentScrollView>
            <View >
                <TouchableOpacity
                    style={styles.drawerItem}
                    onPress={() => { props.navigation.navigate('Home'); }}>
                    <View style={styles.drawerButton}>
                        <MIcon name={'logout'} size={30} color="#900" />
                        <Text style={styles.drawerItemText}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    drawerItemStyle: {
        marginTop:10,
    },
    drawerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    drawerHeader: {
        // backgroundColor: '#D04848',
        padding: 20,
        margin: 0,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    drawerButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        borderRadius: 12,
        height: 50,
        width: 50,
    },
    drawerHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    drawerItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    drawerItemText: {
        color:'#2B2A4C',
        marginLeft: 16,
        fontSize: 16,
    },
});

export default CustomDrawer;

function DrawerItem({ props, icon, page, children }: { icon: string, page: string, props: Props, children: JSX.Element }) {
    return (
        <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => { props.navigation.navigate(page); }}>
            <View style={styles.drawerButton}>
                {children != null ? children :
                    <FIcon name={icon} size={30} color="#900" />}
                <Text style={styles.drawerItemText}>{page}</Text>
            </View>
        </TouchableOpacity>
    );
}