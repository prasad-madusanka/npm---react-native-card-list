# React native card list

[![N|Solid](http://prasadmadusanka.me/npm/rn-card-list/ios.png)](https://nodesource.com/products/nsolid)

[![N|Solid](http://prasadmadusanka.me/npm/rn-card-list/android.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://bitbucket.org/prasadMadusanka/npm-react-native-card-list/src/master/)

Easy to use, follow below steps.

  - Install package 
  - Import to your RN project
  - Provide necessary props
  -Then Magic happen-

### Installation
```sh
$ npm install --save rn-card-list
```

# Code Sample

```javascript
import {ScrollView, SafeAreaView} from 'react-native'
import CardList from 'rn-card-list'
//Use a flex value
<SafeAreaView style={{flex:1}}>
    <ScrollView>
        <CardList imageUri={require('your image path')} 
        cardTitle={'Hello'} 
        cardDescription={'Im react native card list'} 
        onCardPress = {()=>{alert('Clicked !')}}
        />
    </ScrollView>
</SafeAreaView>
```

### Props

| Property | Type |
| ------ | ------ |
| imageUri | require() |
| cardTitle | String |
| cardDescription | String |
| onCardPress | Function |


License
----

ISC

