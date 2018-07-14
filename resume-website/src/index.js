import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import FeedPage from './components/FeedPage'
import DraftsPage from './components/DraftsPage'
import CreatePage from './components/CreatePage'
import DetailPage from './components/DetailPage'
import Home from './components/realComponents/pages/home'
import OtherNav from './components/realComponents/pages/otherNav'
import Footy from './components/realComponents/pages/footy'

import 'tachyons'
import './index.css'




const client = new ApolloClient({ uri: 'http://localhost:4000' })

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Fragment>
        <OtherNav/>
        
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/feed" component={FeedPage} />
            <Route path="/drafts" component={DraftsPage} />
            <Route path="/create" component={CreatePage} />
            <Route path="/post/:id" component={DetailPage} />
          </Switch>
        </div>

        <Footy />
      </Fragment>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
