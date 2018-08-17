# React Dialpad: IN DEVELOPMENT #

React Dialpad provides you a simple UI independent of communication platform to create calls and handle incoming calls.

<!-- [Live Demo](https://mhmtztmr.github.io/react-font-size-changer/demo/) -->

## Install ##

`npm install --save react-dialpad`

## Props ##

### onActionInvoked(action, data) ###

Callback function to be called when any action/button press is invoked by the user.

Params:
  - action: Actions
    - CALL_STARTED: 
      - Invoked when Call button is pressed.
    - CALL_ENDED:
      - Invoked when the Call End button pressed
    - CALL_REPLIED
    - CALL_REJECTED
    - CALL_IGNORED

### onStateChanged(state) ###

Callback function to be called when any state change has occured.

States:
- DEFAULT:
- CALLLING:
- RINGING:
- REPLYING:
- REJECTING:
- ON_CALL:
- ENDING
- INCOMING_CALL:

## Methods ##

### setRinging ###

- Can be called on CALLLING state.
- Navigates to RINGING state.

### setOnCall ###

- Can be called on CALLLING, RINGING or REPLYING state.
- Navigates to RINGING state.

### endCall ###

- Can be called on CALLLING, RINGING, ON_CALL or REJECTING state.
- Navigates to DEFAULT state.

### setIncomingCall ###

- Can be called on DEFAULT state.
- Navigates to INCOMING_CALL state.

## Inspired by ##

https://dribbble.com/shots/2280148-Day-003-Animated-Dial-Pad

https://codepen.io/anon/pen/mWvymM

<!-- ### options ###

| property      | detail                                                 | default |
| ------------- |:------------------------------------------------------:| ------- |
| stepSize      | Number of px to change for each action (up/down)       | 2       |
| range         | Max number of changes for both increment and decrement | 3       |

### customButtons ###

| property      | detail                                                 | default |
| ------------- |:------------------------------------------------------:| ------- |
| up            | Font size increaser element                            |         |
| down          | Font size decreaser element                            |         |
| style         | Custom style for each button                           |         |
| buttonsMargin | Margin between buttons                                 | 4px     |


## Example Usage ##

```JavaScript
import React, { Component } from 'react';
import { FontSizeChanger } from 'react-font-size-changer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <FontSizeChanger
          targets={['#target .content']}
          options={{
            stepSize: 2,
            range: 3
          }}
          customButtons={{
            up: <span style={{'fontSize': '36px'}}>A</span>,
            down: <span style={{'fontSize': '20px'}}>A</span>,
            style: {
              backgroundColor: 'red',
              color: 'white',
              WebkitBoxSizing: 'border-box',
              WebkitBorderRadius: '5px',
              width: '60px'
            },
            buttonsMargin: 10
          }}          
        />
        <div id="target">
          <p className="title">This is the title of my target text</p>
          <p className="content">This is the content of my target text</p>
        </div>
      </div>
    );
  }
}
``` -->
