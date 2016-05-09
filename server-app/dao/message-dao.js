"use strict";

var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    profile: { type: mongoose.Schema.Types.ObjectId, required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, required: true },
    recipient: { type: mongoose.Schema.Types.ObjectId, required: true },
    message: { type: mongoose.Schema.Types.String, required: true }
}, { timestamps: true });

var messageModel = mongoose.model('message', messageSchema);

module.exports = {
    persist: function (profile, sender, recipient, message) {
        return new messageModel({
            profile: profile,
            sender: sender,
            recipient: recipient,
            message: message
        }).save();
    },

    getFullHistory: function (sender, recipient) {
        return messageModel.find({
            sender: sender,
            recipient: recipient
        }).exec();
    }
};