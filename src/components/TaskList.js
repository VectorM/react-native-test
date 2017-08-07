import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, ListView, StyleSheet  } from 'react-native';

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
      <Text>{ todo.task } </Text>
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
    margin: 10
  }
})


export default connect(mapStateToProps)(TaskList)
