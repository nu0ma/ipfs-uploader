import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import TextPage from './pages/TextPage';
import FilePage from './pages/FilePage';

const Root = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/text" component={TextPage} />
        <Route path="/file" component={FilePage} />
      </Router>
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
