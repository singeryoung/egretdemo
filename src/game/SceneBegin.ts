class SceneBegin extends eui.Component implements  eui.UIComponent {
	public btn_begin:eui.Button;
	public btn_setting:eui.Button;

	//单例
	private static shared:SceneBegin;
	public static getInstance(){
		if( !SceneBegin.shared){
			SceneBegin.shared =  new SceneBegin();
		}
		return SceneBegin.shared;
	}

	public constructor() {
		super();
	}

	//添加皮肤自动调用该方法
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	//组件加载完毕后调用该方法
	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}

	private init() {
		// SoundManager.getInstance();

		this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.begin_tap,this)
		this.btn_setting.addEventListener(egret.TouchEvent.TOUCH_TAP,this.setting_tap,this)
	}

	private begin_tap(){
		console.log('单例模式')
		console.log('begin_tap')
		// SoundManager.getInstance().playClick();
		// let parent:egret.DisplayObjectContainer = this.parent;
		// parent.removeChild(this);
		// parent.addChild(SceneLevel.getInstance() );
	}

	private setting_tap(){
		console.log('单例模式')
		console.log('setting_tap')
		// SoundManager.getInstance().playClick();
		// this.addChild(GameSetting.getInstance());

		this.addChild(GameSetting.getInstance());
	}
	
}