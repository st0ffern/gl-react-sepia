import React,{ Component } from 'react';

import {Surface} from 'gl-react-dom'
import Sepia from '../src/Sepia'
const {Image: GLImage} = require('gl-react-image');

export default class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Surface width={450} height={300}>
          <Sepia sepia={5}>
            <GLImage
              source={{
                uri: "https://unsplash.it/450/350?image=300", 
                width: "450", 
                height: "300"
              }}
              resizeMode="cover"
            />
          </Sepia>
        </Surface>
      </div>
    );
  }
}
