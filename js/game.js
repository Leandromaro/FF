"use strict";
var game = (function() {
    var application;
    var initialTimeout;
    var intPtr;
    var audio = cc.AudioEngine.getInstance();
    /**
     * All scenes for the application
     */
    var scenes = {};

    return {

        /**
         * The following config variable is the global game configuration. You
         * can set all the game related values, like sensors or game timeout.
         */
        config : {
            width : 1024,
            height : 768,
            useSensor : true,
            debug : false,
            timeout : 30,
            /**
             * All game multimedia resources
             */
            resources : [ {
                type : "image",
                src : "images/HelloWorld.png"
            }, {
                type : "image",
                src : "images/CloseNormal.png"
            }, {
                type : "image",
                src : "images/CloseSelected.png"
            }, {
                type : "image",
                src : "images/forward.png"
            }, {
                type : "image",
                src : "images/hedgehog.png"
            }, {
                type : "image",
                src : "images/snail.png"
            }, {
                type : "image",
                src : "images/lettuce.png"
            }, {
                type : "image",
                src : "images/ground.png"
            }, {
                type : "effect",
                src : "sounds/splat.mp3"
            }, {
                type : "tmx",
                src : "images/Air.tmx"
            }, {
                type : "image",
                src : "images/splash/bg.png"
            }, {
                type : "image",
                src : "images/splash/hedgehog.png"
            }, {
                type : "image",
                src : "images/splash/logo.png"
            }, {
                type : "image",
                src : "images/splash/snail.png"
            },
                {
                type : "image",
                src : "images/boton-start.png"   
            },{
                type : "image",
                src : "images/boton-start-select.png"   
            },{
                type : "image",
                src : "images/3b2d0c866bce5a332dee9501f2cb33c1.png"   
            },{
                type : "image",
                src : "images/4711_1179164600400_2959082_n.jpg"   
            },{
                type : "image",
                src : "images/1420445_10151797375423613_708900089_n.jpg"   
            },{
                type : "image",
                src : "images/basura.png"   
            },{
                type : "image",
                src : "images/door.png"   
            },{
                type : "image",
                src : "images/escalera.png"   
            },{
                type : "image",
                src : "images/images.jpg"   
            },{
                type : "image",
                src : "images/images1.jpg"   
            },{
                type: "image",
                src: "images/images2.jpg"
            },{
                type: "image",
                src: "images/matafuego.png"
            },{
                type: "image",
                src: "images/plata.jpg"
            },{
                type: "image",
                src: "images/rpg_maker_vx___tilea3_by_ayene_chan-d5lgb3n.png"
            },{
                type: "image",
                src: "images/screenhdul.png"
            },{
                type: "image",
                src: "images/sillas.jpg"
            },{
                type: "image",
                src: "images/sillas2.png"
            },{
                type: "image",
                src: "images/tilea5.png"
            },{
                type: "image",
                src: "images/Walk_left00.png"
            },{
                type: "image",
                src: "images/Walk_right00.png"
            }
            ]
        },

        getScene : function(scene) {
            return scenes[scene];
        },

        setScene : function(name, scene) {
            scenes[name] = scene;
        },

        initialize : function() {
            tizen.logger = tizen.logger({
                logLevel : 3
            });
            tizen.logger.info("game.initialize()");
            tizen.view.getScreenWidth();
            tizen.view.getScreenHeight();
            audio.init("mp3,ogg");
            power.setScreen(power.getPowerState().SCREEN_BRIGHT);
        },
        getRandomXPosition : function() {
            return Math.floor((Math.random() * this.config.width));
        },
        getRandomYPosition : function() {
            return Math.floor((Math.random() * this.config.height));
        },
        changeScene : function(scene) {
            cc.Director.getInstance().replaceScene(
                    cc.TransitionFade.create(1.2, scene));
        },
        getWindowSize : function() {
            return cc.Director.getInstance().getWinSize();
        },
        getAudio : function() {
            return audio;
        },
        start : function() {
            tizen.logger.info("game.start()");
            application = new classes.Application(classes.scenes.Intro);
        },
        stopCountdown : function() {
            clearInterval(intPtr);
            this.getScene('level').levelLayer.removeAllSnails();
            this.config.timeout = initialTimeout;
        },
        startCountdown : function(callback) {
            var that = this;
            initialTimeout = that.config.timeout;
            intPtr = setInterval(function() {
                callback(--that.config.timeout);
                if (that.config.timeout === 0) {
                    that.stopCountdown();
                    alert("Game over... Please try again...");
                    that.getScene('level').levelLayer.removeCounter();
                    that.changeScene(that.getScene('intro'));
                }
            }, 1000);
        }
    };
}());
