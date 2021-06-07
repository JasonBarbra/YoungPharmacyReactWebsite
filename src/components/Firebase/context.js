import React, { createContext } from 'react';
import Firebase from '../Firebase/Firebase';
export const FirebaseContext = createContext();

const FirebaseContextProvider = (props) => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;
