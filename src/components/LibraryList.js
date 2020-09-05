import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class LibraryList extends React.Component{
  renderLibraries(library){
      return <ListItem library={library} />
  }


  render(){
    return <View style={{ marginBottom: 110 }}>
             <FlatList
               data={this.props.libraries}
               renderItem={ ({item})=> this.renderLibraries(item)}
               keyExctractor={library => library.id}
             />
           </View>
  }
};


const mapStateToProps = state => {
  return { libraries : state.libraries }
}

export default connect(mapStateToProps)(LibraryList);
