const global = require('./global');
cc.Class({
    extends: cc.Component,

    properties: {
        edit_box: {
            default: null,
            type: cc.EditBox
        }
    },
    buttonClick: function (event, cunstomData){
        console.log('1111' + cunstomData);
        console.log('edit_box content: ' + this.edit_box.string);
        global.eventlistener.fire("login", this.edit_box.string);
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
});
