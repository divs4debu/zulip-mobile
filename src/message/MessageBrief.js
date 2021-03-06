import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import ReactionList from '../reactions/ReactionList';

const styles = StyleSheet.create({
  message: {
    paddingTop: 0,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 48,
    overflow: 'hidden',
    flex: 1,
  },
});

export default class MessageBrief extends React.PureComponent {

  props: {
    message: {},
    selfEmail: string,
    reactions: [],
  };

  render() {
    const { message, children, selfEmail, onLongPress } = this.props;

    return (
      <View style={styles.message}>
        <TouchableWithoutFeedback onLongPress={onLongPress}>
          <View>
            {children}
          </View>
        </TouchableWithoutFeedback>
        <ReactionList
          messageId={message.id}
          reactions={message.reactions}
          selfEmail={selfEmail}
        />
      </View>
    );
  }
}
