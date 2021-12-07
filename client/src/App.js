import './app.css'
import { BrowserRouter as Routes, Route } from "react-router-dom";
import RenderHeader from './components/Header/index'
import RenderHome from './components/Home/index'
import RenderJoin from './components/Join/index'
import RenderSignIn from './components/SignIn/index'
import RenderProfile from './components/ProfilePage'
import RenderListRestaurants from './components/ListRestaurants'
import RenderFooter from './components/Footer/index'
import Auth from './utils/auth';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
          <Routes>
            {/* Renders the header at top of page */}
            <RenderHeader/>
            <div className="flex-column justify-flex-start min-100-vh">
                <div className="container-custom">
                  {/* Renders the Home component onto page */}
                  <Route exact path="/">
                    <RenderHome />
                  </Route>
                  {/* Renders the Join/Sign Up component onto the page */}
                  <Route exact path="/join">
                    <RenderJoin />
                  </Route>
                  {/* Renders the Join/Sign Up component onto the page */}
                  <Route exact path="/signin">
                    <RenderSignIn />
                  </Route>
                <div>
                  {Auth.loggedIn() ? (
                    <>
                    {/* If logged in, this renders the user's profile */}
                    <Route exact path="/user">
                    <RenderProfile />
                  </Route>
                  </>
                  ) : (
                  <>
                  {/* If not logged in, this renders the Join/SignUp component */}
                  <Route exact path="/user">
                    <RenderJoin />
                  </Route>
                  </>
                  )}
                </div>
                  {/* Renders the list of restaurants onto the screen */}
                  <Route exact path="/restaurants">
                    <RenderListRestaurants />
                  </Route>
                </div>
                {/* Renders the footer onto the page */}
              <RenderFooter />
            </div>
          </Routes>
        </ApolloProvider>
      );
    }

export default App;
