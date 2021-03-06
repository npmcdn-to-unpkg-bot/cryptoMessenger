"use strict";

module.exports = {
    // Client side facade messages
    NAVBAR_ITEM_CLICKED: 'NAVBAR_ITEM_CLICKED',
    SELECT_CONTACT: 'SELECT_CONTACT',
    CONTACT_LIST_RECEIVED: 'CONTACT_LIST_RECEIVED',
    CHAT_HISTORY_UPDATED: 'CHAT_HISTORY_UPDATED',

    REGISTER_TAB: 'REGISTER_TAB',
    LOG_IN_TAB: 'LOG_IN_TAB',
    CHAT_TAB: 'CHAT_TAB',
    EDIT_PROFILE_TAB: 'EDIT_PROFILE_TAB',

    // C2S: Client to server socket messages
    C2S_REGISTER_USER: 'C2S_REGISTER_USER',
    C2S_LOG_IN_USER: 'C2S_LOG_IN_USER',
    C2S_LOG_OUT_USER: 'C2S_LOG_OUT_USER',
    C2S_GET_CONTACT_LIST: 'C2S_GET_CONTACT_LIST',
    C2S_GET_CHAT_HISTORY: 'C2S_GET_CHAT_HISTORY',
    C2S_CHAT_MESSAGE: 'C2S_CHAT_MESSAGE',
    C2S_SENDING_KEY: 'C2S_SENDING_KEY',
    C2S_UPDATE_USER: 'C2S_UPDATE_USER',

    // S2C: Server to client socket messages
    S2C_DATABASE_ERROR: 'S2C_DATABASE_ERROR',
    S2C_USER_REGISTERED: 'S2C_USER_REGISTERED',
    S2C_USERNAME_EXISTS: 'S2C_USERNAME_EXISTS',
    S2C_USER_LOGGED_IN: 'S2C_USER_LOGGED_IN',
    S2C_INVALID_CREDENTIALS: 'S2C_INVALID_CREDENTIALS',
    S2C_SEND_CONTACT_LIST: 'S2C_SEND_CONTACT_LIST',
    S2C_SEND_CHAT_HISTORY: 'S2C_SEND_CHAT_HISTORY',
    S2C_CHAT_MESSAGE: 'S2C_CHAT_MESSAGE',
    S2C_KEY_RECEIVED: 'S2C_KEY_RECEIVED',
    S2C_AVATAR_UPLOADED: 'S2C_AVATAR_UPLOADED',
    S2C_AVATAR_UPDATED: 'S2C_AVATAR_UPDATED',
    S2C_USER_UPDATED: 'S2C_USER_UPDATED',

};