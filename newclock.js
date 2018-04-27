function NewClock(container) {
	Clock.call(this,container);
} 
$.inherits(NewClock,Clock);
$.extend(NewClock.prototype,{
	drawSecondsPoint:function(s){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.rotate(s*Math.PI/30)
		this.ctx.moveTo(0,-115);
		this.ctx.lineTo(0,20);
		this.ctx.strokeStyle="green";
		this.ctx.stroke();
		this.ctx.restore();
	}
})