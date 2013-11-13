"use strict";
cc.Layer.prototype.addExitAppButton = function() {
    var size = cc.Director.getInstance().getWinSize();
    var closeItem = cc.MenuItemImage.create("images/CloseNormal.png",
            "images/CloseSelected.png", function() {
                if (confirm("Exit?") && tizen && tizen.application) {
                    tizen.application.getCurrentApplication().exit();
                }
            });
    closeItem.setAnchorPoint(cc.p(0.5, 0.5));
    var menu = cc.Menu.create(closeItem);
    menu.setPosition(cc.PointZero());
    closeItem.setPosition(cc.p(size.width - 20, 20));
    this.addChild(menu, 10);
    
        
//    var close = cc.MenuItemImage.create(
//       "images/boton-start.png",
//       "images/boton-start-select.png",
//            function () {
//                history.go(-1);
//            },this);
//        close.setAnchorPoint(cc.p(0.5, 0.5));
//
//        var menu = cc.Menu.create(close);
//        menu.setPosition(cc.PointZero());
//        this.addChild(menu, 11);
//        close.setPosition(cc.p(size.width - 120, 20));
//
};

