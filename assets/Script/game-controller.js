var EventListener = require("./event-listener");
var global = require("./global");
cc.Class({
    extends: cc.Component,

    properties: {

    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        global.socket = io("localhost:3000");
        global.eventlistener = EventListener({});
        global.eventlistener.on("login", function(uid){
            console.log('button onclick  uid: ' + uid );
            global.socket.emit("login", uid);
        });
    },

    start () {

    },

    // update (dt) {},
});
