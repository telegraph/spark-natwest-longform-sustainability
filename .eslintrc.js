module.exports = {
    "extends": "airbnb",
    "plugins" : [
        "react-hooks"
    ],
    "rules": {
        "react/jsx-filename-extension": false,
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
    }
};