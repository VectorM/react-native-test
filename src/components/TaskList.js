import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, ListView, StyleSheet  } from 'react-native';

import TaskRow from './TaskRow';

function mapStateToProps(state) {
  return {
    todos: state.main.list
  }
}

class TaskList extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      dataSource: ds.cloneWithRows(props.todos)
    }
  }

  static propTypes = {
    todos: PropTypes.array
  }

  static navigationOptions = {
    title: "Welcome to the Task Lisst"
  }

  renderRow = (todo) => {
    return (
      <TaskRow todo={ todo } />
    )
  }

  render() {
    return (
      <View style={ styles.container }>
        <ListView
          dataSource={ this.state.dataSource }
          key={ this.props.todos }
          renderRow={ todo => this.renderRow(todo) }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  }
})


export default connect(mapStateToProps)(TaskList)
