
import React from 'react';

import firebase from 'firebase';

import Navigator from "./routes/RootNav";
import { firebaseConfig } from './components/config';

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
        <Navigator />
  );
}
