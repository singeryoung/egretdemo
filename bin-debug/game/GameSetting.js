var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameSetting = (function (_super) {
    __extends(GameSetting, _super);
    function GameSetting() {
        return _super.call(this) || this;
    }
    GameSetting.getInstance = function () {
        if (!GameSetting.shared) {
            GameSetting.shared = new GameSetting();
        }
        return GameSetting.shared;
    };
    GameSetting.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameSetting.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    GameSetting.prototype.init = function () {
        this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.confirm_tap, this);
        this.gp_music.addEventListener(egret.TouchEvent.TOUCH_TAP, this.music_tap, this);
        this.gp_effect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.effect_tap, this);
    };
    GameSetting.prototype.confirm_tap = function () {
        this.parent.removeChild(this);
    };
    GameSetting.prototype.music_tap = function () {
        this.img_music_dis.visible = !this.img_music_dis.visible;
    };
    GameSetting.prototype.effect_tap = function () {
        this.img_effect_dis.visible = !this.img_effect_dis.visible;
    };
    return GameSetting;
}(eui.Component));
__reflect(GameSetting.prototype, "GameSetting", ["eui.UIComponent", "egret.DisplayObject"]);
