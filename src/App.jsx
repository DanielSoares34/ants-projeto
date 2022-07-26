import {React} from 'react';
import Layout1 from './Components/Layout/Layout';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'



function App() {

 
  return (
    <><AmplifySignOut /><Layout1 /></>
    )
}

export default withAuthenticator (App);
