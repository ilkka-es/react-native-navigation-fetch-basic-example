import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ajax from './FetchData';


class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'List of users',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    users: []
  }

  async componentDidMount() {
    const users = await ajax.fetchUsers();
    this.setState({users});
  }


  render() {
    return (
      <View style={ styles.container } >
        
        

        <FlatList
            data={this.state.users.results}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) =>
            <View style={styles.flatview}>
              <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
              <Text style={styles.email}>{item.email}</Text>
              <Button
                title="See user details"
                color="gray"
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('Details', {
                    email: (item.email),
                    otherParam: (item.name.first),
                  });
                }}
              />
            </View>
            }
            keyExtractor={item => item.email}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    //justifyContent: 'center',
    //alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    backgroundColor: '#d1d1d1',
    borderRadius: 2,
    marginBottom:10
  },
  name: {
    fontSize: 18
  },
  email: {
    color: 'red'
  }
  
});


export default HomeScreen;