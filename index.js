import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, Platform, StyleSheet } from 'react-native'

/*
    Usage
     -Sample code for your reference-

     1) Import the package
        Import CardList from 'react-native-card-list'
      
     2) Using self closing tag pass theese props -
        * imageUri -  require('')
        * cardTitle - String
        * cardDescription - String
        * onCardPress - function
        * 
        <CardList imageUri={require('your image path')} cardTitle={'Hello'} cardDescription={'Im react native card list'} onCardPress = {()=>{alert('Clicked !')}}/>  
        
    3)  You must use CardList inside a ScrollView, otherwise it collapse. Use flex. ex  - <ScrollView style={{flex:1}}></ScrollView>  
*/

export default class CardList extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onCardPress}>
        <View style={_styles.adventureCategoriesCard}>
          <View style={_styles.adventureCategoriesCardContent}>

            <Image source={this.props.imageUri} style={_styles.cardImage}></Image>
            <View style={_styles.cardText}>
              <Text style={_styles.cardTitle}>{this.props.title}</Text>
              <Text style={_styles.cardDescription}>{this.props.description}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const _styles = StyleSheet.create({
  adventureCategoriesCard: {
    margin: 8, borderRadius: 5, flex: 1, minHeight: 90, backgroundColor: 'white',
    ...Platform.select({
      ios: { shadowColor: '#000000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65 },
      android: { borderBottomWidth: 1.1, borderTopWidth: 0.2, borderLeftWidth: 0.7, borderRightWidth: 0.7, borderColor: '#dedede' }
    })
  },
  adventureCategoriesCardContent: { padding: 5, flex: 1, flexDirection: 'row' },
  cardImage: { height: 80, width: 80, borderRadius: 40 },
  cardText: { flex: 3, paddingLeft: 20 },
  cardTitle: { fontSize: 20, paddingTop: 2 },
  cardDescription: { fontSize: 12, color: '#908f8f', paddingTop: 2 }
})
