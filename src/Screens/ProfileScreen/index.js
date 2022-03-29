

import React from 'react';
import { Button } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon from "react-native-vector-icons/Ionicons";


import colorValue from '../../Shared/commoStyle/ColorValue';
import { commonJustify, commonStyle } from '../../Shared/commoStyle/CommonStyle';
import fontValue from '../../Shared/commoStyle/FontValue';

// create a component
const ProfileScreen = () => {
    return (
        <View style={{backgroundColor:"purple"}}>

            <View style={[commonJustify.rowCenter, { marginVertical: 15 }]}>
                <Avatar
                    size={100}
                    rounded
                    icon={{ name: 'user', type: 'font-awesome' }}
                    containerStyle={{ backgroundColor: colorValue.primary }}
                    onPress={() => console.warn("please select image for upload")}
                />
            </View>
            <View >
                <Text style={[
                    commonStyle({
                        fontSize: 25,
                        fontFamily: fontValue.PoppinsExtraBold,
                        color: colorValue.liteDark3,
                    }).text, commonJustify.textCenter]
                }>Sudhir </Text>
            </View>
            <View style={[commonJustify.rowCenter, { marginVertical: 18 }]} >

                {/* <Icon name="location" size={25} color="black" /> */}
                <Text style={[
                    commonStyle({
                        fontSize: 18,
                        fontFamily: fontValue.PoppinsExtraBold,
                        color: colorValue.liteDark3,
                    }).text, commonJustify.textCenter]
                }>
                    Sector-9,Ranchi
                </Text>
            </View>
            <View style={commonJustify.rowSpaceEvenly}>
                <Button title="Call Now" color={colorValue.info} />
                <Button title="Request" color={colorValue.primary} />
            </View>
            <View style={[commonJustify.rowSpaceEvenly, { marginVertical: 29 }]}>
                <View style={styles.card}>
                    <Text style={[commonStyle({ fontSize: 24, fontFamily: fontValue.PoppinsExtraBold, color: colorValue.liteDark3 }).text, { textAlign: "center" }]}>A+</Text>
                    <Text style={[commonStyle({ fontSize: 18, fontFamily: fontValue.PoppinsRegular, color: colorValue.liteDark }).text, { textAlign: "center" }]}>Blood-Type</Text>
                </View>
                <View style={styles.card}>
                    <Text style={[commonStyle({ fontSize: 24, fontFamily: fontValue.PoppinsExtraBold, color: colorValue.liteDark3 }).text, { textAlign: "center" }]}>05</Text>
                    <Text style={[commonStyle({ fontSize: 18, fontFamily: fontValue.PoppinsRegular, color: colorValue.liteDark }).text, { textAlign: "center" }]}>Donated</Text>
                </View>
                <View style={styles.card}>
                    <Text style={[commonStyle({ fontSize: 24, fontFamily: fontValue.PoppinsExtraBold, color: colorValue.liteDark3 }).text, { textAlign: "center" }]}>02</Text>
                    <Text style={[commonStyle({ fontSize: 18, fontFamily: fontValue.PoppinsRegular, color: colorValue.liteDark }).text, { textAlign: "center" }]}>Requested</Text>
                </View>


            </View>
            <View style={{marginVertical:10}}>
  {
    list.map((item, i) => (
      <ListItem containerStyle={[{marginTop:10},{backgroundColor:"white"}]} key={i} bottomDivider>
        <Icon name={item.icon}  type={item.iconName} size={22} color="red"/>
        <ListItem.Content >
          <ListItem.Title >{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
</View>


        </View>


    );
};

// define your styles


//make this component available to the app
export default ProfileScreen;


const list = [
    {
        title: 'Available for Donate',
        icon: 'calendar',
        iconName: "AntDesign"
    },
    {
        title: 'Invite  Friend',
        icon: 'mail',
        iconName: "AntDesign"
    },
    {
        title: 'Get Help',
        icon: 'wechat',
         iconName: "AntDesign"
    },
    {
        title: 'Signout',
        icon: 'logout',
        iconName:"AntDesign"
    },
    // more items
]




const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        paddingLeft: 10
    },
});


