import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';


class Onboarding extends Component {
  
    constructor(props) {
        super(props);
    
        this.state = {
          currentScreen: 'onboarding1',
        };
    }
    
    screenContent = {
        onboarding1: {
          onboarding: require('../assets/images/onboarding1.png'),
          heading: 'Enim ad minim',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
        },
        onboarding2: {
          onboarding: require('../assets/images/onboarding2.png'),
          heading: 'Enim ad minim',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis', 
        },
        onboarding3: {
          onboarding: require('../assets/images/onboarding3.png'),
          heading: 'Enim ad minim',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
        },
    };
    nextScreen = () => {
        const {currentScreen} = this.state;
        switch (currentScreen) {
          case 'onboarding1':
            this.setState({currentScreen: 'onboarding2'});
            break;
          case 'onboarding2':
            this.setState({currentScreen: 'onboarding3'});
            break;
          case 'onboarding3':
            this.props.navigation.navigate('Main');
            break;
          default:
            break;
        }
    };
    
      prevScreen = () => {
        const {currentScreen} = this.state;
        switch (currentScreen) {
          case 'onboarding2':
            this.setState({currentScreen: 'onboarding1'});
            break;
          case 'onboarding3':
            this.setState({currentScreen: 'onboarding2'});
            break;
          default:
            break;
        }
    };

    renderPaginationDots = () => {
      const { currentScreen } = this.state;
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          {[1, 2, 3].map((index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: currentScreen === `onboarding${index}` ? 'black' : 'gray',
                marginHorizontal: 5,
              }}
              onPress={() => this.setState({ currentScreen: `onboarding${index}` })}
            />
          ))}
        </View>
      );
    };


    render() {
        const {currentScreen} = this.state;
        const { onboarding, heading, text} = this.screenContent[currentScreen];

        return(
            <View className=" bg-white items-center py-12 justify-between h-full">
              <Image source={require('../assets/images/logo.png')} />
              <Image className="" source={onboarding} style={{ width: 400, height: 400 }} />
              <Text className="text-2xl text-green-600 font-bold">{heading}</Text>
              <Text className="text-base text-justify px-16">{text}</Text>
              {this.renderPaginationDots()}
              <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'green', paddingVertical: 20, paddingHorizontal: 100, borderRadius: 50 }} onPress={this.nextScreen}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Next</Text>
              </TouchableOpacity>
          </View>
        );
    }
    
}

export default Onboarding;