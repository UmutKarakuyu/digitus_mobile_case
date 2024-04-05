import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {Video} from 'expo-av';


class CardDetail extends Component {
  
    constructor(props) {
        super(props);
    
        this.state = {
        };
    }
    

    render() {
        const { route } = this.props;
        const { cardData } = route.params;
        return(
            <View className="relative flex-1">
            
                <View className="h-[35vh]">
                    {cardData.type === 'picture' && (
                        <Image
                            className="w-full h-full"
                            source={cardData.content}
                            resizeMode="cover"
                        />
                    )}
                    {cardData.type === 'video' && (
                        <Video
                            source={cardData.content}
                            shouldPlay
                            isLooping
                            isMuted
                            useNativeControls
                            onError={(error) => console.log('Video error:', error)}
                            className="w-full h-full"
                            resizeMode="cover"
                        />
                    )}
                </View>
                <ScrollView vertical showsVerticalScrollIndicator={false}  className="absolute inset-x-0 bottom-0 h-[60vh] bg-white rounded-t-2xl px-4 pt-2 ">
                    <View className="flex px-4 py-4 ">
                        <Text className="text-3xl text-[#64B48E] font-black mb-2">{cardData.title}</Text>

                        <View className="w-2/5 rounded-full border-2 border-gray-300 flex justify-center items-center px-4 ">
                            <Text className="text-xs font-bold text-[#64B48E]">{cardData.tag}</Text>
                        </View>
                    </View>
                    <Text className="text-justify pb-24 text-sm "> {cardData.description}</Text>
                </ScrollView>
        </View>
        );
    }
    
}

export default CardDetail;