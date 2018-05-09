class GameSetting extends eui.Component implements  eui.UIComponent {
	public btn_confirm:eui.Button;
	public gp_music:eui.Group;
	public img_music:eui.Image;
	public img_music_dis:eui.Image;
	public gp_effect:eui.Group;
	public img_effect:eui.Image;
	public img_effect_dis:eui.Image;

	private static shared:GameSetting;
	public static getInstance(){
		if(!GameSetting.shared) {
			GameSetting.shared = new GameSetting();
		}
		return GameSetting.shared;
	}

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}

	private init() {
		this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP,this.confirm_tap,this)
		this.gp_music.addEventListener(egret.TouchEvent.TOUCH_TAP,this.music_tap,this)
		this.gp_effect.addEventListener(egret.TouchEvent.TOUCH_TAP,this.effect_tap,this)
	}

	private confirm_tap() {
		this.parent.removeChild(this)
	}

	private music_tap() {
		this.img_music_dis.visible = !this.img_music_dis.visible
	}

	private effect_tap() {
		this.img_effect_dis.visible = !this.img_effect_dis.visible
	}
	
}