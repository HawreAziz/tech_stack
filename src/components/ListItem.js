import React from 'react';
import { CardSection } from './common';
import { View,
         Text,
         TouchableWithoutFeedback,
         LayoutAnimation,
         UIManager
} from 'react-native';
import * as actions from './actions';
import { connect } from 'react-redux';


class ListItem extends React.Component{

  componentDidUpdate(){
    LayoutAnimation.spring();
    UIManager.setLayoutAnimationEnabledExperimental
    && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  renderSelectedLibraryId(){
    const{ library, expanded } = this.props;
    if(expanded){
      return <Text style={styles.descriptionStyle}>{library.description}</Text>
    }
  }

  render(){
    const { library: { title, id }, selectLibrary } = this.props;
    return(
      <TouchableWithoutFeedback onPress={() => {
        selectLibrary(id);
      }} >
        <View>
          <CardSection>
            <Text style={styles.textStyle}>{title}</Text>
          </CardSection>
          { this.renderSelectedLibraryId() }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  textStyle:{
    padding: 10,
    fontSize: 18
  },
  descriptionStyle: {
    padding: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
}
export default connect(mapStateToProps, actions)(ListItem);
