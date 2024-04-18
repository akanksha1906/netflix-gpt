import React, { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGE,
  USER_PHOTO_URL,
} from "../utils/constant";
import { toggleGPTSearchView } from "../utils/gptslice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className=" flex w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 justify-between ">
      <img className="w-44" src={NETFLIX_LOGO} />
      {user && (
        <div className="flex p-2">
         { showGptSearch && <select
            className="p-2 m-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option  key={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            className="py-2 px-4 mx-4 bg-purple-800 my-2 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {!showGptSearch ?"GPT Search": "Home Page"}
          </button>
          <img
            className="w-10 h-12 m-2 p2"
            src={USER_PHOTO_URL}
            alt="userIcon"
          />
          Hello {user.displayName}
          <button onClick={handleSignOut} className="font-bold">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
