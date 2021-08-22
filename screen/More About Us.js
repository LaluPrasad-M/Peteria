import * as React from 'react';
import { Text, View } from 'react-native';

export default function MoreScreen({navigation}) {
    return (
      <View style={{ flex: 1 ,alignItems: 'center' }}>
        <View style={{marginBottom:"50px",flexDirection:"row",justifyContent: 'space-between'}}>
        <Text style={{fontWeight:600,textAlign:"center"}}>Millions of people around the world love their pets, enjoying their companionship, going for walks, playing and even talking to them. And there is evidence suggesting that attachment to pets is good for human health and even helps build community. There are many health benefits of owning a pet. They can increase opportunities to exercise, get outside, and socialize. Pets can help manage loneliness and depression by giving us companionship. Our project aims to support buying and adopting pets. By adopting our favourite animal, we will contribute towards feeding the animal for the period of adoption. Finally adopting an animal is fun not only for you, but for your friends and family too. An adoption makes a great gift for birthdays, anniversaries etc., and is always unique. 
        Our project aims to support buying and adopting pets by implementing the idea into a mobile application. Mobile applications are more common these days in the world of the internet. They reach out quickly to every person sitting in any corner of the world who is connected to the internet. Reaching out to more people is possible if the idea is converted to a mobile application so that more pets will be taken care of. </Text>
        </View>
      <View>
        <Text style={{fontSize:22,textAlign:"center",textDecorationLine:"underline"}}>Feel free to Contact Us!</Text>
        <Text style={{fontSize:30}}>Ph: 9900880225</Text>
        <Text style={{fontSize:30}}>Email: KothaKota Charitharth</Text>
        <Text style={{textAlign:"center",color:"#f00",fontSize:120}}>♥</Text>
      </View>
      </View>
    );
}