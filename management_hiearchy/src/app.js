import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-tree-graph/dist/style.css'
import ManagementTree from './components/ManagementTree';

ReactDOM.render(<ManagementTree />, document.getElementById('app'));
