import styles from './ProfilePage.module.css';
import LogIn from './LogIn';
import LoggedIn from './LoggedIn';
import { useState } from 'react';
import CreateAccount from './CreateAccount';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import FireStore from '../../FireStore/FireStore';

const ProfilePage = () => {
  const Ctx = useContext(CartContext);
  const [phrase, setPhrase] = useState('');
  const FS = new FireStore();

  const [LoggingIn, setLoggingIn] = useState(true);

  const isLoggedIn = Ctx.loggedIn;

  async function changeNameFunc(email) {
    console.log('Called changeNameFunc() in profile');
    const name = await FS.logInUser(email);
    console.log('NAME IS' + name);
    Ctx.changeName(name);
    //Get Cart
    const prevCart = await FS.getPrevCart(email);
    Ctx.changePrevCart(prevCart);
  }

  const logInHandler = (email, pass) => {
    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAISNgZbXSdK2uQ4feVYID3aS-mhI8Hryo',
      {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: pass,
          returnSecureToken: true,
        }),
        //Making sure API know we sending application/json
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => {
      if (res.ok) {
        Ctx.logOutOrIn();
        changeNameFunc(email);
        Ctx.setEmail(email);
      } else {
        //get data that come back w response
        //.then gives a promise of data which we can use
        return res.json().then((data) => {
          //show an error modal
          let errorMsg = '';
          if (data && data.error && data.error.message) {
            errorMsg = data.error.message;
            switch (errorMsg) {
              case 'INVALID_PASSWORD':
                setPhrase('This password is invalid');
                setTimeout(clearPhrase, 3000);
                return;
              case 'EMAIL_NOT_FOUND':
                setPhrase(
                  'There is currently no account associated with this email'
                );
                setTimeout(clearPhrase, 3000);
                return;
              default:
                setPhrase('Log in failed!');
                setTimeout(clearPhrase, 3000);
            }
          }
        });
      }
    });
  };

  const createAccountHandler = (fName, lName, email, pass) => {
    if (LoggingIn) {
      setLoggingIn(false);
    } else {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAISNgZbXSdK2uQ4feVYID3aS-mhI8Hryo',
        {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: pass,
            returnSecureToken: true,
          }),
          //Making sure API know we sending application/json
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => {
        if (res.ok) {
          return res.json().then((data) => {
            //IN DATA IS TOKEN ID
            setPhrase(
              'Congrats ' +
                fName +
                ' ' +
                lName +
                ', you have created a Poke Place account!'
            );
            setTimeout(clearPhrase, 2400);
            setTimeout(() => {
              setLoggingIn(true);
            }, 2400);

            //DOOO SOMETHING TO ADD USER
            FS.addUser(data.idToken, fName, lName, email, pass);
          });

          //succeeded
        } else {
          //get data that come back w response
          //.then gives a promise of data which we can use
          return res.json().then((data) => {
            //show an error modal

            let errorMsg = '';
            if (data && data.error && data.error.message) {
              errorMsg = data.error.message;
              switch (errorMsg) {
                case 'EMAIL_EXISTS':
                  setPhrase(
                    'There is already an account associated with that email!'
                  );
                  setTimeout(clearPhrase, 3000);
                  return;
                case 'WEAK_PASSWORD : Password should be at least 6 characters':
                  setPhrase('Password must be at least 6 characters!');
                  setTimeout(clearPhrase, 3000);
                  return;
                case 'INVALID_EMAIL':
                  setPhrase('The email address you have put in is invalid');
                  setTimeout(clearPhrase, 3000);
                  return;
                default:
                  setPhrase('Authentication failed!');
                  setTimeout(clearPhrase, 3000);
              }
            }
          });
          //fails
        }
      });
    }
  };

  const clearPhrase = () => {
    setPhrase('');
  };

  const cancelHandler = () => {
    setLoggingIn(true);
  };

  const logOut = () => {
    if (Ctx.loggedIn) {
      Ctx.clearCart();
    }
    Ctx.logOutOrIn();
    Ctx.changePrevCart({ items: [], amount: 0 });
    Ctx.setEmail('');
  };

  let content = (
    <LogIn logInFunc={logInHandler} createAccountFunc={createAccountHandler} />
  );

  if (!LoggingIn) {
    content = (
      <div>
        <CreateAccount
          cancelFunc={cancelHandler}
          createAccountFunc={createAccountHandler}
        />
      </div>
    );
  }

  if (isLoggedIn) {
    content = (
      <div>
        <LoggedIn logOut={logOut} items={Ctx.prevCart} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {content}
      <h3 className={styles.phrase}>{phrase}</h3>
    </div>
  );
};

export default ProfilePage;
