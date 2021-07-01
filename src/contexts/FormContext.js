import React, { useContext, useState, useEffect } from 'react';
import firebase, { db } from '../config/firebase';

export const FormContext = React.createContext();

export const useForm = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [formStatus, setformStatus] = useState();
  const [header, setHeader] = useState();
  const [formNotEnded, setFormNotEnded] = useState(true);

  useEffect(() => {
    db.collection('title')
      .orderBy('send_at', 'desc')
      .get()
      .then((snapshot) => {
        setHeader(snapshot.docs[0].data().title);
      })
      .catch((err) => console.log(err));
    db.collection('activeSaving')
      .orderBy('send_at', 'desc')
      .get()
      .then((snapshot) => {
        let status = snapshot.docs[0].data().status;
        if (status === true) {
          setformStatus(false);
        } else {
          setformStatus(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const changeStatus = () => {
    setformStatus(!formStatus);
    const now = new Date();
    const active = {
      status: formStatus,
      send_at: firebase.firestore.Timestamp.fromDate(now),
    };
    db.collection('activeSaving')
      .add(active)
      .then(() => {
        console.log('zmiana stanu formularza');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const formEnded = () => {
    setFormNotEnded(false);
  };

  const value = {
    formStatus,
    header,
    changeStatus,
    formEnded,
    formNotEnded,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
