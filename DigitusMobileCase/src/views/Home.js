import React, {Component} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Text,
  StatusBar,
  RefreshControl
} from 'react-native';
import {Video} from 'expo-av';
import Search from '../assets/icons/search.svg';
import Person from '../assets/icons/person.svg';
import Like from '../assets/icons/like.svg';
import Calendar from '../assets/icons/calendar.svg';


class Home extends Component {
  state = {
    refreshing: false,
    data: {
      stories: [
        { image: require('../assets/images/stories1.png'), title: 'Günün Menüsü' },
        { image: require('../assets/images/stories2.png'), title: 'Bayram Kutlaması' },
        { image: require('../assets/images/stories3.png'), title: 'Digitus Anket' },
        { image: require('../assets/images/stories4.png'), title: 'Duyuru ve Genelgeler' },
        { image: require('../assets/images/stories5.png'), title: 'Bugün Doğanlar' },
        { image: require('../assets/images/stories6.png'), title: 'Aramıza Katılanlar' },
      ],
      cards: [
        { type: 'video', content: require('../assets/videoexample.mp4'), title: 'Emin ad Minim', date: '2020-05-22', likes: 502, tag: 'Duis Aute', isLiked: true, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { type: 'picture', content: require('../assets/images/cardimage1.png'), title: 'Emin ad Minim', date: '2020-05-21', likes: 1058, tag: 'Duis Aute', isLiked: false, description:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      ],
    },
  };
  handleRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 1000);
  };
  
  handleLikePress = (index) => {
    const newData = [...this.state.data.cards];
    newData[index].isLiked = !newData[index].isLiked;
    newData[index].likes += newData[index].isLiked ? 1 : -1;

    this.setState({
      data: {
        ...this.state.data,
        cards: newData,
      },
    });
  };
  handleAlert = () => {
    Alert.alert('Not Implemented', 'This feature is not yet implemented.');
  };
  customStatusBar = () => {
    return (
        <View className="flex flex-row justify-between items-center bg-white h-fill pt-8 px-4 border-b border-gray-300 border-opacity-0 ">
          <StatusBar backgroundColor="#fff" />
        <TouchableOpacity onPress={this.handleAlert}>
          <Search width={32} height={32} />
        </TouchableOpacity>
        <Image source={require('../assets/images/logo.png')} />
        <TouchableOpacity onPress={this.handleAlert}>
          <Person width={32} height={32} />
        </TouchableOpacity>
        </View>
    );
  };

  
  
  stories = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {this.state.data.stories.map((item, index) => (
          <View className=" items-center">
              <TouchableOpacity key={index} onPress={this.handleAlert}>
              <View key={index} className="rounded-full border-2 border-[#64B48E] overflow-hidden mx-2">
                <Image source={item.image} className="w-16 h-16 rounded-full" />
              </View>
            </TouchableOpacity>
            <Text className="text-sm font-slim whitespace-break-spaces w-20 text-center bg--400 pt-1 text-[#999EB9]">{item.title}</Text>
          </View>
      ))}
      </ScrollView>
    );
  };

  cards = () => {
    const { navigation } = this.props;

    return this.state.data.cards.map((item, index) => (   
          
            <View className="w-full flex justify-center items-center p-4">
              <View className="bg-white mb-4 w-full rounded-lg shadow-md flex justify-center items-center">
                
                {item.type === 'video' && (
                  <Video source={item.content}  resizeMode="cover"  shouldPlay isLooping isMuted={true} useNativeControls onError={(error) => console.log('Video error:', error)} className="w-full h-64"/>
                )}
                <TouchableOpacity key={index} onPress={() => navigation.navigate('CardDetail', { cardData: item })}>
                  
                  <View className="bg-white mb-4">
                    {item.type === 'picture' && (
                      <Image source={item.content} className="w-full min-h-fit rounded-md " />
                    )}
                  
                    <View className="flex pt-2 px-4">
                      <Text className="text-xl text-[#64B48E] font-bold mb-2">{item.title}</Text>
                    </View>
                    <View  className=" flex flex-row justify-around  w-full p-2">
                        <View className="rounded-full border-2 border-gray-300 flex justify-center items-center px-8">
                          <Text className="text-sm font-bold text-[#64B48E]">{item.tag}</Text>
                        </View>
                        <View className="flex flex-row justify-center items-center space-x-1">
                          <Calendar width={24} height={24} />
                          <Text className="text-sm text-gray-500 ">{item.date}</Text>
                        </View>
                        <View className="flex flex-row justify-center items-center">
                          <Text className="text-xs text-red-500 ">{item.likes}</Text>
                            <TouchableOpacity onPress={() => this.handleLikePress(index)}>
                            <Like width={24} height={24} fill={item.isLiked ? "#fb3c3c" : "#0000" } stroke={item.isLiked ? "none" : "#fb3c3c"} />
                          </TouchableOpacity>
                        </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              </View>
        ));
  }
  
  render() {
    return (
      <View className="bg-white h-full pb-16">
        {this.customStatusBar()}
        <ScrollView vertical showsVerticalScrollIndicator={false} 
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
              colors={['#64B48E']} // Customize the refresh indicator color if needed
            />
          }
        >
          <View className="py-4 border-b border-gray-300 shadow-2xl">
            {this.stories()}
          </View>
          <View className="py-2">
            {this.cards()}
          </View>
        </ScrollView>
      </View>
    );
  
  }
};

export default Home;