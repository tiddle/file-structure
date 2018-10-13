import React, { Component } from 'react';
import FileStructure from './file-structure/file-structure';
import './App.css';

const folderStructure = [
  { type: 'folder',
    name: 'Folder 1',
    content: [{
      type: 'folder',
      name: 'Folder 2',
      content: [{
        type: 'file',
        name: 'Chapstick.doc',
        size: 1024
      }, {
        type: 'file',
        name: 'Hello.jpg',
        size: 2024
      }]
    }]
    }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <FileStructure folderStructure={folderStructure}/>

      </div>
    );
  }
}

export default App;
