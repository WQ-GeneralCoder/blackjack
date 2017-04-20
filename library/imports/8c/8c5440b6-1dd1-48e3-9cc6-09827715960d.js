'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        mask: cc.Node
    },

    // use this for initialization
    onLoad: function onLoad() {},

    onEnable: function onEnable() {
        this.mask.on('touchstart', function (event) {
            event.stopPropagation(); //停止传递当前事件
        });
        this.mask.on('touchend', function (event) {
            event.stopPropagation();
        });
    },

    onDisable: function onDisable() {
        this.mask.off('touchstart', function (event) {
            event.stopPropagation(); //停止传递当前事件
        });
        this.mask.off('touchend', function (event) {
            event.stopPropagation();
        });
    }
});