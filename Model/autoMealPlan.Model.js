const mongoose = require('mongoose');

const accountSchema = mongoose.Schema(
    {
        Username: {
            type: String,
            required: true,
            unidque: true
        },

        Email: {
            type: String,
            required: true,
            unique: true
        },

        Password: {
            type: String,
            required: true,
        },

        // Preferences: {
        //     type: [],
        //     required: true
        // }
    }
)

const account = mongoose.model("Account",  accountSchema);

module.exports = account;