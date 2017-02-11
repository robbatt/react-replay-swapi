import classNames from 'classnames';
import React from 'react';
import Relay from 'react-relay';

import ChangeTodoStatusMutation from '../mutations/ChangeTodoStatusMutation';
//import RemoveTodoMutation from '../mutations/RemoveTodoMutation';
import RenameTodoMutation from '../mutations/RenameTodoMutation';

class Todo extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object.isRequired,
    todo: React.PropTypes.object.isRequired,
    relay: React.PropTypes.object.isRequired,
  };

  render() {
    const { text } = this.props.todo;

    return (
      <li>{text}</li>
    );
  }
}

export default Relay.createContainer(Todo, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        ${ChangeTodoStatusMutation.getFragment('viewer')}
      }
    `,
    todo: () => Relay.QL`
      fragment on Todo {
        complete
        id
        text
      }
    `,
  },
});
