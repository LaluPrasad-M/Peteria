import React from 'react';
import {View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';

import{
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import {
    AuthContext
} from './Context';

export default function DrawerContent(props){

const formatData = data => {
    let formatted = [];
  
    for (const [key, labels] of Object.entries(data)) {
      let tmpObj = {};
      const desc = labels.map(l => {
        return l.description.toLowerCase();
      });
  
      tmpObj = {
        id: key,
        content: desc.join(" ")
      };
  
      formatted.push(tmpObj);
    }
  
    return formatted;
  };

  var idf = Math.log((this.documents.length) / docsWithTerm );
    
  const createVectorsFromDocs = processedDocs => {
    const tfidf = new TfIdf();
  
    processedDocs.forEach(processedDocument => {
      tfidf.addDocument(processedDocument.content);
    });
  
    const documentVectors = [];
  
    for (let i = 0; i < processedDocs.length; i += 1) {
      const processedDocument = processedDocs[i];
      const obj = {};
  
      const items = tfidf.listTerms(i);
  
      for (let j = 0; j < items.length; j += 1) {
        const item = items[j];
        obj[item.term] = item.tfidf;
      }
  
      const documentVector = {
        id: processedDocument.id,
        vector: new Vector(obj)
      };
  
      documentVectors.push(documentVector);
    }
}

const calcSimilarities = docVectors => {
    // number of results that you want to return.
    const MAX_SIMILAR = 20; 
    // min cosine similarity score that should be returned.
    const MIN_SCORE = 0.2;
    const data = {};
  
    for (let i = 0; i < docVectors.length; i += 1) {
      const documentVector = docVectors[i];
      const { id } = documentVector;
  
      data[id] = [];
    }
  
    for (let i = 0; i < docVectors.length; i += 1) {
      for (let j = 0; j < i; j += 1) {
        const idi = docVectors[i].id;
        const vi = docVectors[i].vector;
        const idj = docVectors[j].id;
        const vj = docVectors[j].vector;
        const similarity = vi.getCosineSimilarity(vj);
  
        if (similarity > MIN_SCORE) {
          data[idi].push({ id: idj, score: similarity });
          data[idj].push({ id: idi, score: similarity });
        }
      }
    }
}
  
        const getLength = () => {
    let l = 0;

    this.getComponents().forEach(k => {
        l += this.vector[k] * this.vector[k];
    });

    return Math.sqrt(l);
    }
    const getCosineSimilarity = (vector) => {
        return this.getDotProduct(vector) / (this.getLength() * vector.getLength());
      }


    // finally sort the similar documents by descending order
    Object.keys(data).forEach(id => {
      data[id].sort((a, b) => b.score - a.score);
  
      if (data[id].length > MAX_SIMILAR) {
        data[id] = data[id].slice(0, MAX_SIMILAR);
      }
    });
  

    const getSimilarDocuments = (id, trainedData) => {
        let similarDocuments = trainedData[id];
      
        if (similarDocuments === undefined) {
          return [];
        }
      
        return similarDocuments;
      };
    return data;
    const { signOut } = React.useContext( AuthContext );

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source = {{
                                    uri:"https://avatars3.githubusercontent.com/u/33774869?s=460&u=242f8e0baabc815a910372bfb5ffe49ed37bb8d1&v=4"
                                }}
                                size={50}
                            />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>LaluPrasad M</Title>
                                <Caption style={styles.caption}>@Peteria</Caption>
                        </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                      <DrawerItem 
                          icon={({color, size}) => (
                              <Icon 
                              name="home-outline"  
                              color={color}
                              size={size}
                              />
                          )}
                          label="Home"
                          onPress={() => {props.navigation.navigate('Home')}}
                      /> 
                      <DrawerItem 
                          icon={({color, size}) => (
                              <Icon 
                              name="account-outline"  
                              color={color}
                              size={size}
                              />
                          )}
                          label="My Profile"
                          onPress={() => {props.navigation.navigate('Profile')}}
                      />
                      <DrawerItem 
                          icon={({color, size}) => (
                              <Icon 
                              name="cart-outline"  
                              color={color}
                              size={size}
                              />
                          )}
                          label="My Cart"
                          onPress={() => {props.navigation.navigate('Cart')}}
                      />
                      <DrawerItem 
                          icon={({color, size}) => (
                              <Icon 
                              name="heart-outline"  
                              color={color}
                              size={size}
                              />
                          )}
                          label="My Orders"
                          onPress={() => {props.navigation.navigate('Orders')}}
                      />
                      <DrawerItem 
                          icon={({color, size}) => (
                              <Icon 
                              name="plus"  
                              color={color}
                              size={size}
                              />
                          )}
                          label="More About Us!"
                          onPress={() => {props.navigation.navigate('More')}}
                      />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>

                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
  });