import './App.css';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          {
            console.log({user: user})
          }
          <h1>Medvol Admin</h1>
          <h3>Username: {user.username}</h3>
          <h3>JWT token: <i>{user.signInUserSession.accessToken.jwtToken}</i></h3>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
