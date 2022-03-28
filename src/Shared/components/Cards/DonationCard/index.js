import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import colorValue from '../../../commoStyle/ColorValue'
import { commonJustify, commonStyle } from '../../../commoStyle/CommonStyle'
import fontValue from '../../../commoStyle/FontValue'



const DonationCard = ({item}) => {
    <Image style={{width:100,height:100 }}  source={require("../../../../../assets/image/soal.png")}/>
    
    return (
        <View style={[styles.main, commonJustify.rowSpaceBetween]}>
           
            
           <View>
           <View style={[styles.margin]}>
            <Text style={commonStyle({fontSize:13, fontFamily:fontValue.PoppinsRegular}).text}>Name</Text>
            <Text style={commonStyle({fontSize:18, fontFamily:fontValue.PoppinsExtraBold,color:colorValue.black}).text}>{item.name}</Text>
            
            </View>

            <View style={[styles.margin]}>
            <Text style={commonStyle({fontSize:13, fontFamily:fontValue.PoppinsRegular}).text}>Location</Text>
            <Text style={commonStyle({fontSize:18, fontFamily:fontValue.PoppinsExtraBold,color:colorValue.black}).text}>{item.location}</Text>
            </View>
            
            
            <View style={[styles.margin]}>
            <Text style={commonStyle({fontSize:13, fontFamily:fontValue.PoppinsRegular}).text} >{item.time}</Text>
            </View>
           </View>

           <View  style={{paddingTop:20}} >
           <Image style={{width:100, }} resizeMode="contain" source={require("../../../../../assets/image/BloodGroup.png")}/>
               <Button   titleStyle={{color:colorValue.primary}} type="clear" title="Donate" />
           </View>


        </View>
    )
}

export default DonationCard

const styles = StyleSheet.create({
    main:{
        backgroundColor:'white',
        marginTop:10
    },
    margin:{
        marginLeft:10, 
        padding:5
    }
})
