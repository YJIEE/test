function Clock(container){
	this.canvas=container [0];
	this.ctx=this.canvas.getContext('2d');
	this.init();
	
}
$.extend(Clock.prototype,{
	init:function(){
		var that=this;
		setInterval(function(){
			that.ctx.clearRect(0,0,500,500);
			that.drawClock();
		},1000);
		
	},
	drawClock:function(){
		this.drawDail();
		this.drawCenterPoint();
		this.drawScale();
		this.drawHourNumber();
		this.drawTimes();
	},
	drawDail:function(){
		this.ctx.beginPath();
		this.ctx.arc(250,250,150,0,Math.PI*2);
		this.ctx.stroke();
	},
	drawCenterPoint:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.arc(250,250,5,0,Math.PI*2);
		this.ctx.fillStyle="red";
		this.ctx.fill();
		this.ctx.restore();
	},
	drawScale:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.beginPath();
		for(var i=0; i<60;i++){
			this.ctx.moveTo(0,145);
			this.ctx.lineTo(0,148);
			this.ctx.rotate(Math.PI/30);
		}
		this.ctx.lineWidth=2;
		this.ctx.stroke();
		this.ctx.restore();

		this.ctx.save();
		this.ctx.translate(250,250);
		this.ctx.beginPath();
		for(var i=0; i<12;i++){
			this.ctx.moveTo(0,142);
			this.ctx.lineTo(0,148);
			this.ctx.rotate(Math.PI/6);
		}
		this.ctx.lineWidth=3;
		this.ctx.stroke();
		this.ctx.restore();
	},
	drawHourNumber:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.beginPath();
		for(var i=1;i<=12;i++){
			this.ctx.font="20px Arial";
			this.ctx.fillStyle="black";
			this.ctx.fill();
			this.ctx.textAlign="center";
			this.ctx.textBaseline="middle";
			this.ctx.fillText(i,Math.sin(Math.PI*i/6)*130,-Math.cos(Math.PI*i/6)*130);
		}
		this.ctx.restore();
	},
	drawTimes:function(){
		var date=new Date(),
		seconds=date.getSeconds(),
		minutes=date.getMinutes(),
		hours=date.getHours()%12+date.getMinutes()/60;
		this.drawSecondsPoint(seconds);
		this.drawMinutesPoint(minutes);
		this.drawHoursPoint(hours);
	},
	drawSecondsPoint:function(s){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.rotate(s*Math.PI/30)
		this.ctx.moveTo(0,-115);
		this.ctx.lineTo(0,20);
		this.ctx.strokeStyle="red";
		this.ctx.stroke();
		this.ctx.restore();
	},
	drawMinutesPoint:function(m){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.rotate(m*Math.PI/30);
		this.ctx.moveTo(0,-90);
		this.ctx.lineTo(0,10);
		this.ctx.stroke();
		this.ctx.restore();
	},
	drawHoursPoint:function(h){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.rotate(Math.PI*h/6);
		this.ctx.moveTo(0,-70);
		this.ctx.lineTo(0,10);
		this.ctx.stroke();
		this.ctx.restore();
	}
})
