import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { split } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import loginReducer from '../reducers/login'
import registerReducer from '../reducers/register'
import userReducer from '../reducers/user'

import Home from './Home'

const serviceId = 'cj9ofx6pp04w40118pm5rri53'

const httpLink = createHttpLink({ uri: `https://api.graph.cool/simple/v1/${serviceId}` })

const wsLink = new WebSocketLink({
  uri: `wss://subscriptions.graph.cool/v1/${serviceId}`,
  options: {
    reconnect: true,
  },
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__), // eslint-disable-line
})

const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  user: userReducer,
})

const store = createStore(
  reducers, {},
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f),
)

class App extends React.Component { // eslint-disable-line
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </Provider>
      </ApolloProvider>
    )
  }
}

export default App
