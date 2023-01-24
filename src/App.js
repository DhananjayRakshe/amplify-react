import './App.css';
import { Amplify } from 'aws-amplify';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
 

function App() {
  return (
    <div className="App">
      <h2>Medvol Admin</h2>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
