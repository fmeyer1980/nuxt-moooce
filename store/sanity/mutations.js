/*
export const setAuthState = (state, newState) => {
    state.authState = newState
};

*/

import { setReactiveStateValue } from "../../helperFunctions";

export const setProducts = (state, products) => {
	products.forEach(product => {
		setReactiveStateValue(state.products,product._id,product)
	});
};

export const setSiteSettings = (state, settingsObject) => {
	// console.log(settingsObject);
	Object.keys(settingsObject).forEach(key => {
		setReactiveStateValue(state.siteSettings,key,settingsObject[key])
	});
};