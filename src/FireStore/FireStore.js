import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { doc, setDoc } from 'firebase/firestore';

class FireStore {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAISNgZbXSdK2uQ4feVYID3aS-mhI8Hryo',
      authDomain: 'poke-place.firebaseapp.com',
      databaseURL: 'https://poke-place-default-rtdb.firebaseio.com',
      projectId: 'poke-place',
      storageBucket: 'poke-place.appspot.com',
      messagingSenderId: '427268063876',
      appId: '1:427268063876:web:772869ef8117d119d178d1',
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore(app);
  }

  addUser(id, fName, lName, email, pass) {
    console.log(id);
    this.db
      .collection('users')
      .doc(email.toLowerCase())
      .set({
        first: fName,
        last: lName,
        email: email.toLowerCase(),
        pass: pass,
        lastOrder: { items: [], amount: 0 },
      })
      .then((docRef) => {
        // console.log('Success');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  async logInUser(email) {
    let user = this.db.collection('users').doc(email.toLowerCase());

    let name = '';

    await user
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          name = data.first;
        } else {
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });

    return name;
  }

  sendData(food, email) {
  
    this.db
      .collection('users')
      .doc(email.toLowerCase())
      .set(
        {
          lastOrder: food,
        },
        { merge: true }
      )
      .then((docRef) => {
        // console.log('Success');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  async getPrevCart(email) {
    let user = this.db.collection('users').doc(email.toLowerCase());

    let prevCart;

    await user
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          prevCart = data.lastOrder;
        } else {
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });

    return prevCart;
  }
}

export default FireStore;
