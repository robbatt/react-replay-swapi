import React from 'react';
import Relay from 'react-relay';

import AddTodoMutation from '../mutations/AddTodoMutation';

import Todo from './Todo';
class TodoApp extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object.isRequired,
    children: React.PropTypes.node.isRequired,
    relay: React.PropTypes.object.isRequired,
  };

  onNewTodoSave = (text) => {
    const { relay, viewer } = this.props;


  };

  render() {
    const { viewer, children } = this.props;

    return (
      <div data-framework="relay">
        <section className="todoapp">


          {children}

        </section>

      </div>
    );
  }
}

export default Relay.createContainer(TodoApp, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        
        ${Todo.getFragment('viewer')}
      }
    `,
  },
});
