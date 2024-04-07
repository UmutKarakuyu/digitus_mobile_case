// apiService.js
import axios from 'axios';

const API_URL = 'baseURL';

const getHomeData = async () => {
  /*
     try {
      const response = await axios.get(`${API_URL}/home`);
      return response.data;
      } catch (error) {
        console.error('API_URL does not exist', error);
        return getDefaultData();
      }
    */
    return getDefaultData();
};

const getDefaultData = () => {
  const storiesData = [
    { image: require('../assets/images/stories1.png'), title: 'Günün Menüsü' },
    { image: require('../assets/images/stories2.png'), title: 'Bayram Kutlaması' },
    { image: require('../assets/images/stories3.png'), title: 'Digitus Anket' },
    { image: require('../assets/images/stories4.png'), title: 'Duyuru ve Genelgeler' },
    { image: require('../assets/images/stories5.png'), title: 'Bugün Doğanlar' },
    { image: require('../assets/images/stories6.png'), title: 'Aramıza Katılanlar' },
  ];
  const cardsData = [
    { type: 'video', content: require('../assets/videoexample.mp4'), title: 'Emin ad Minim', date: '2020-05-22', likes: 502, tag: 'Duis Aute', isLiked: true, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { type: 'picture', content: require('../assets/images/cardimage1.png'), title: 'Emin ad Minim', date: '2020-05-21', likes: 1058, tag: 'Duis Aute', isLiked: false, description:   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  ];

  return { stories: storiesData, cards: cardsData };
};

export { getHomeData };
