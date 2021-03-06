import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import combineReducers from './reducers';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)} >
      <View>
        <Header headerText='Teach Stack' />
        <LibraryList />
      </View>
    </Provider>
  );
}

export default App;
