import React from 'react';
import ReactDOM from 'react-dom';
import FilterableColorTable from './components/FilterableColorTable';
import testData from './data/test-data';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<FilterableColorTable colors={testData.colors} />, document.getElementById('app'));
