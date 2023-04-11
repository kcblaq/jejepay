import React, { createContext, useState } from 'react';

export const myContext = createContext({});

export default function LogerContext({ children }) {
	const [user, setUser] = useState({});
	const [showModal, setShowModal] = useState(false);
	const [loginModal, setLoginModal] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	return (
		<myContext.Provider
			value={{
				user,
				setUser,
				isLoggedIn,
				setIsLoggedIn,
				showMobileMenu,
				setShowMobileMenu,
				showModal,
				setShowModal,
				loginModal,
				setLoginModal,
			}}>
			{children}
		</myContext.Provider>
	);
}
 