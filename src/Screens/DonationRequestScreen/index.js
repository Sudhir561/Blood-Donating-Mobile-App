import React from 'react';

import { View, Text, StyleSheet,FlatList } from 'react-native';
import DonationCard from '../../Shared/components/Cards/DonationCard';
import { donationRequest } from '../../Shared/components/Cards/DonationCard/Data';

// create a component
const DonationRequestScreen = () => {
    return (
        <FlatList
      data={donationRequest}
      
      renderItem={({item}) => <DonationCard item={item} />}
    />
    );
};



//make this component available to the app
export default DonationRequestScreen;