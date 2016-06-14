/**
 *  Action related to Chat
 */
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const MESSAGE_SENT = 'MESSAGE_SENT';

/**
 *  Action related to Auth
 */
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const VERIFY_USER = 'VERIFY_USER';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';
export const VERIFY_FAILURE = 'VERIFY_FAILURE';
export const SOCIAL_LOGIN = 'SOCIAL_LOGIN';
export const LOGOUT = 'LOGOUT';
export const ATTEMPT_PASSWORD_RESET = 'ATTEMPT_PASSWORD_RESET';

/**
 *  Action related to Products
 */
export const UPDATE_PRODUCTS_STATE = 'UPDATE_PRODUCTS_STATE';
export const UPDATE_PRODUCT_DETAIL = 'UPDATE_PRODUCT_DETAIL';
export const REMOVELISTING_REQUEST = 'REMOVELISTING_REQUEST';
export const REMOVELISTING_SUCCESS = 'REMOVELISTING_SUCCESS';
export const REMOVELISTING_FAILURE = 'REMOVELISTING_FAILURE';
export const REMOVE_RENTED_ITEM = 'REMOVE_RENTED_ITEM';
export const ADDLISTING_REQUEST = 'ADDLISTING_REQUEST';
export const ADDLISTING_SUCCESS = 'ADDLISTING_SUCCESS';
export const ADDLISTING_FAILURE = 'ADDLISTING_FAILURE';
export const RENT_SUCCESS = 'RENT_SUCCESS';
export const RENT_FAILURE = 'RENT_FAILURE';
export const CANCEL_SUCCESS = 'CANCEL_SUCCESS';
export const CANCEL_FAILURE = 'CANCEL_FAILURE';
//Tyrus- added following two lines for stripe payment
export const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS';
export const PAYMENT_FAILURE = 'PAYMENT_FAILURE';


/**
 *  Action related to UI and others...
 */
export const POPUP_CLOSE = 'POPUP_CLOSE';
export const POPUP_OPEN = 'POPUP_OPEN';
export const PROFILE_CARD_POPUP_CLOSE = 'PROFILE_CARD_POPUP_CLOSE';
export const PROFILE_CARD_POPUP_OPEN = 'PROFILE_CARD_POPUP_OPEN';

export const UI_TOGGLE_VIEW_MANAGEDLISTING = 'UI_TOGGLE_VIEW_MANAGEDLISTING';
export const UI_TOGGLE_VIEW_ADDNEWLISTINGFORM = 'UI_TOGGLE_VIEW_ADDNEWLISTINGFORM';
export const UI_UPDATE_FORMFIELD = 'UI_UPDATE_FORMFIELD';

export const SEARCH = 'SEARCH';

export const SETLOCATION = 'SETLOCATION';
export const MAPUPDATE = 'MAPUPDATE';
export const SETMAPCENTER = 'SETMAPCENTER';
export const SETMARKERCENTER = 'SETMARKERCENTER';
