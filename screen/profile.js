import * as React from 'react';
import { Text, View } from 'react-native';

export default function ProfileScreen({route,navigation}) {
  if(route.params?.openDrawer){
    navigation.openDrawer();
  }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>My Profile!</Text>
      </View>
    );
}