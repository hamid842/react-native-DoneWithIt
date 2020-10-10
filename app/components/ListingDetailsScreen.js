import React from 'react';
import { View , StyleSheet ,Image} from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

const ListingDetailsScreen = (props) => {
    return (
        <View>
            <Image source={require('../assets/jacket.jpg')} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                    image={require('../assets/mosh.jpg')} 
                    title="Hamid Mohamadi" 
                    subTitle='5 Listings'
                    />
                </View>
            </View>
         </View>
    );
}
const styles = StyleSheet.create({
    detailsContainer:{
        padding:20
    },
    image:{
        width:'100%',
        height:300
    },
    title:{
        fontSize:24,
        fontWeight:'500'
    },
    price:{
        color:colors.secondary,
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10
    },
    userContainer:{
        marginVertical:40
    }
})
export default ListingDetailsScreen;