module.exports = {
  pwa: {
    manifestOptions: {
      gcm_sender_id: require("./tokens.json").gcm_sender_id,
      background_color: "#ff9e1b"
    },
    themeColor: "#000000"
  }
};
