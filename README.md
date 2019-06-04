Usage

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