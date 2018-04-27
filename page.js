function Page(){
}
$.extend(Page.prototype,{
	init:function(){
		this.createClock();
	},
	createClock:function(){
		new Clock($("#canvas"));
		new NewClock($("#canvas1"));
	}

})
var page=new Page();
page.init();
