import firebase from '../config/firebase';

const socialMediaAuth = (provider) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((er) => {
      return null;
    });
};

export default socialMediaAuth;
