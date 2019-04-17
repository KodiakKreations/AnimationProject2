(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Animation_HTML5 Canvas_atlas_", frames: [[0,802,1108,400],[0,1204,1108,287],[1110,802,841,285],[0,0,800,800],[802,0,800,800]]}
];


// symbols:



(lib.background = function() {
	this.spriteSheet = ss["Animation_HTML5 Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.foreground = function() {
	this.spriteSheet = ss["Animation_HTML5 Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.midground = function() {
	this.spriteSheet = ss["Animation_HTML5 Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Sky = function() {
	this.spriteSheet = ss["Animation_HTML5 Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Underwater = function() {
	this.spriteSheet = ss["Animation_HTML5 Canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(-554,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-554,-200,1108,400);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(-554,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-554,-200,1108,400);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.midground();
	this.instance.parent = this;
	this.instance.setTransform(-420.5,-142.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-420.5,-142.5,841,285);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.midground();
	this.instance.parent = this;
	this.instance.setTransform(-420.5,-142.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-420.5,-142.5,841,285);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.foreground();
	this.instance.parent = this;
	this.instance.setTransform(-554,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-554,-143.5,1108,287);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.foreground();
	this.instance.parent = this;
	this.instance.setTransform(-554,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-554,-143.5,1108,287);


(lib.SEA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABbLuIg1hGIAABGIn6AAIiLi3IAAikIA0gRQAlgKAfg6QAeg5Ajh9IDut1IDjAAIDgDrIDVM1QAKAiARAlQASAmAZAiQAZAhAhAVIAAD2gAAOCKIAPA8QAXBvgOAzQgNAxgoAJIg0AOIAAByIHrAAIAAhyIg3gVQgZgIgbgzQgZgwgchoIjruRIi6AAIjmNRQgcBmgWA7QgXA8gVAbQgWAbgYAHIgsAOIAAByIGoAAIAAhyIgzgOQgjgOgQg5QgPg7AWhaIAPg8gAB2C3QgWg4gWgtQgUgtgbgsQAPgXANgcQAOgbACgVQgWgLgTAAQgTAAgLALIhXmNIgDAAIhsGNQgTgLgUAAQgVAAgWALICao9IB+AAICVI9QgkgXglAXQALAVAVAbQAVAcAaAXQgIA6AABLQABBMAQB3QgZhQgVg6gAgIlXQAAA+gIAiQAWAVAVAhQAWAiAWA0IAFAAQABg0AGgiQAEghAKgVQgagigbg+Qgcg/gmhvQANBvABA/gAi0gnIBUkxIAIAAIBCExg");
	this.shape.setTransform(279.8,121);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al2LuIiAioIAAi5IBOgLQAdgHALglQAMgkAAg2IAAqpQAAhEgTgaQgSgbgcgDIhBgMIAAi4INSAAICbDMIAAHYIjSAAIiHiwIAAhGQAAgfgJgRQgJgSgYAAQgZABgMAUQgNATACAeIACAxICxDrIAABYIBlAAICbDQIAAHlgAnSpXIBAAKQAeAHASApQAQApAABHIAAKzQAABFgOAqQgOAqgkAHIhAAKIAAByIMRAAIAAnEIh/AAIAABhQABBAgOAzQgPAygmAfQgmAehFABQhLgBgdgmQgcgmABg+IAAlFIDEAAIAAiPIjEAAIAAkEQgBhFAcgkQAdgiBLgBQBIAAAyA6QAxA6ACBwIAABUIB/AAIAAm0IsRAAgABEEkQAAAYAHATQAGARAQABQATABAVgnQATgoAChXIAAghIhaAAgAj7B2QgRhOgWgvQAWgXAQgcQARgbAHgVQgVgLgUAAQgTAAgPALIAAlDQAAhLgLgqQgMgqgSgRQgRgTgTgDIg0gIIAAgsILMAAIAAFwIg3AAIAAgyQgBhmgig6Qghg6gwgXQgxgWgtABQhCABglAaQgkAYgPAoQgOAnABAsIAAEoIDHAAIAAAvQgjgLgkABQgkABgeALQgggLgigBQgjgBgjALQAJAVAQAbQAQAcAXAXQgXAvgQBOQgRBMgKB9QgKh9gRhMgAj8lXQgRA+gWAiQAXAVAQAhQAQAiAIA0IAFAAQAJg0ARgiQAPghAWgVQgWgigQg+QgQg/gLhvQgKBvgRA/g");
	this.shape_1.setTransform(167.5,121);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARLsQg2gNgfgVQgYgRgYgMQgYgLgUAAQgNABgLANQgLAOgJATIgNAdIiuAAIiHiuIAAnuICxAAQAaA4AiA2QAiA4AZAeQAdAlAtAdQAtAdA6ABQAhAAAfgTQAhgSABgnQgBgkgsgbQgrgag5gWQg6gVgqgWQhHgnhHhGQhIhFgwhnQgwhmgCiIQACh7A3hWQA3hWBcgtQBcguBwAAQAsAAAoAFQAnAFAeAIIAzANQAWAGAPAAQAQgBAMgJQAKgIAIgLICVAAICTDHIAAGlIiEAAIi0ioQgIgtgPgoQgQgogagZQgagagogBQg2ABgZAcQgbAcAAAuQgBAZALAWQALAVAgAVQAgAUBDAXQDUBIB0CRQBzCOACDiQgCB/g4BdQg2BehZA1QhZA0hmABQhAAAg2gOgAkIHhQAcAMAiARQAiARAwAPQAwAOA6ABQBmgBBRguQBSgvAuhUQAvhVABhyQAAh4gohPQgohRhUg1QhTg2iCgmQhMgWgxgWQgxgYgZgjQgXgjABg5QAAgoARglQASglAkgYQAkgZA5gBQArABAsASQAqASAjAaQAjAZASAZQAYAcARAoQARAoALAuIBiAAIAAl4IhiAAQgKALgOAJQgMAJgSAAQgWAAgXgGQgXgFgYgIQgdgJgsgHQgsgIgwAAQhjAAhSAqQhRApgwBNQgxBNgBBrQgBCVA8BbQA7BcCHA3ICbBAQAiAOAnAWQAnAXAdAlQAdAlABA5QgBA+goAsQgoAsg/ACQhngChIgpQhKgpgmg+QgXglgQgkQgOgjgIgoIhlAAIAAGuIBlAAQAOgdAQgXQASgWAYgCQAYABAbAKgACZCBQgqhMg4gRQgIghgggjQgfglhRglQgfgLghAAQggAAgfALQgfgLgYAAQgXAAgUALQhCg1gahEQgZhCABhaQABhgAshFQAthFBIglQBIgmBWgBQAnAAAiADQAhAEAbAHIBDAUQAjAJAeAAQAWAAAQgIQAQgKAJgLIAzAAIAAE0IgmAAQgNhGgtg8Qgsg8hDgmQhBglhOgBQhJABgrAdQgrAdgUAsQgUAsAAAtQgBBPAmAxQAlAzBcAfQBhAgBPAdQBQAdAxAnQgwgLgfAAQggAAgbALQgfgLghAAQghAAglALQBWASBAAPQBCANArARQAzBIAJBYQAJBXgoB0QgFh0gphLgAhZhtQhggvgsgvQgtgvACg7QgmgagTgyQgSgyAChTQgWA6gOA/QgOBAABA5QAoA4BFAoQBHAnB1AgIAIAAIAAAAg");
	this.shape_2.setTransform(63.3,121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SEA, new cjs.Rectangle(0,0,335,238), null);


(lib.LAND = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnYLuIiAioIAAi5IBPgLQAcgHALglQAMgkAAg2IAAqpQAAhDgTgbQgSgbgcgDIhBgMIAAi4IJqAAQCjACCEBuQCCBvBPC+QBMC9ADDxQgCCQgtB4QgrB3hKBZQhJBXhXAxQhXAvhXABgAo0pXIBAAKQAeAHASApQAQApAABHIAAKzQAABFgNApQgPAqgkAIIhAAKIAAByIHuAAQCNgCBuhSQBvhSA+iKQBAiMABirQgBjng1iPQg1iOhfhAQhehBh7ABIo0AAgAiVGTQgfgBgPgjQgPgkAAhFIAAqpQgChGALgoQAMgpAvgBICIAAQAqgCAjAmQAkAlAVBpQAUBpABDHQAABLgMBUQgLBVgZBKQgZBMgnAvQgnAxg3ACgAgNlVQgOAYgBArIAAI+QAAAOAGALQAIALAOAAQANgBAbg4QAbg5AYhhQAXhfABh3QAAiXgLhBQgKhAgXACIguAAQgXAAgPAagADiCQQAKhRgZhGQAYgSATgaQATgZAGgdQgbgMgYAAQgXAAgRAMQAEjEgahuQgYhugxgrQgugqg/ACIiFAAQg6ACgVA2QgUA0ACBNIAAE6QgRgLgVAAQgSAAgUALQAHAVARAaQARAcAVAXQgVAvgRBOQgRBNgIB8QgNh8gPhNQgRhOgUgvQAUgXAQgcQAPgbAKgVQgtgXgdAXIAAlDQAAhLgLgqQgMgqgSgRQgSgTgSgDIg0gIIAAgsIITAAQB8ADBLA3QBMA3AnBZQAmBYAOBjQAOBiABBXQgUgLgWAAQgYAAgdALQARAWAPAZQAQAbAIAYQgLBVgrBPQgrBQhGBSQArhfAHhQgADwlaQgCA/gbAkQAbAcASAnQATAlAEAkIAIAAQAQgfAOglQAOgkAMgkQgMgqgbg+Qgbg/gzhoQAQBugCA+gAlglXQgRA+gTAiQAUAVAQAhQAOAiAKA0IAGAAQALg0APgiQAPghAVgVQgVgigPg+QgQg/gMhvQgMBvgQA/g");
	this.shape.setTransform(414.3,121);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACXLuIiKi3IiDlxIAADeIBuCTIAAC3InKAAIiAioIAAi5IBOgLQAdgHALglQAMgkAAg2IAAqpQAAhDgTgbQgSgbgcgDIhBgMIAAi4IIAAAIBKBjIAAhjIHHAAICUDEIAACeIg+AKQgcADgTAjQgSAkgBBPIAAPWgAkqmtIFePPIDnAAIAAvPQAAhHASgpQAQgpAfgHIA/gKIAAhyImAAAIAAByIBAAKQAeAHAQApQASApAABHIAAGxIgCAAIkIrNIm/AAIAAByIBAAKQAeAHASApQAQApAABHIAAKzQAABFgOApQgOAqgkAIIhAAKIAAByIFtAAIAAhyIgsgKQgkgKgOgoQgQgpABhFIAAqzgAAJB4QgphNgjgyQANgbAHgaQAHgZAAgVQgfgLgZAAQgYAAgSALIh4lIQgJgcgLgPQgLgPgTgBQgRABgGASQgGASABAYIAAFGQgOgLgPAAQgQAAgNALIAAlDQAAhLgMgqQgMgqgSgRQgRgTgTgDIg0gIIAAgsIF/AAIDSI9QgcgLgbAAQgYAAgYALQAOAVAXAYQAWAZAfAdQADAxAMBMQALBMAZB9Qg4h5gqhOgAijluQAJBEgIAzQAhAVAcAhQAdAiAgA0IAGAAIAAhWIAChCQgogugohBQgphCgxhhQAcBjALBEgADch1QgRAAgMALIAAlDQAAhLgMgqQgMgqgSgRQgRgTgTgDIg0gIIAAgsIE8AAIAAAsIg0AIQgTADgRATQgSARgMAqQgMAqAABLIAAFDQgKgLgRAAg");
	this.shape_1.setTransform(295.5,121);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABbLuIg0hGIAABGIn7AAIiLi3IAAikIA0gRQAlgKAfg6QAfg5Ahh9IDvt1IDiAAIDhDrIDVM1QAKAiASAlQARAmAaAiQAZAhAgAVIAAD2gAAOCKIAPA8QAYBvgOAzQgOAxgoAJIg0AOIAAByIHsAAIAAhyIg5gVQgYgIgbgzQgagwgbhoIjruRIi6AAIjmNRQgbBmgXA7QgWA8gWAbQgVAbgZAHIgsAOIAAByIGoAAIAAhyIg0gOQgigOgPg5QgQg7AVhaIAQg8gAB2C3QgWg4gVgtQgWgtgagsQAPgXANgcQAOgbACgVQgWgLgTAAQgTAAgMALIhVmNIgFAAIhsGNQgSgLgUAAQgVAAgXALICao9IB+AAICWI9QgkgXglAXQAKAVAWAbQAVAcAaAXQgIA6AABLQABBMARB3QgahQgVg6gAgIlXQAAA+gIAiQAVAVAWAhQAWAiAWA0IAFAAQAAg0AHgiQAEghAKgVQgagigcg+Qgbg/gmhvQANBvABA/gAi0gnIBUkxIAIAAIBCExg");
	this.shape_2.setTransform(176,121);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmSLuIiAioIAAi5IBOgLQAdgHALglQAMgkAAg2IAAqpQAAhEgTgaQgSgbgcgDIhBgMIAAi4IIpAAICTDEIAACeIg9AKQgdADgTAjQgUAkgBBPIAAH0QABAoAYAPQAWAOAagBQAdgBAWggQAWghABg4IAAhxIDCAAICWDLIAAG+gAnupXIBAAKQAeAHASApQAQApAABHIAAKzQAABFgOApQgOAqgkAIIhAAKIAAByINLAAIAAmaIh+AAIAABuQABBIgsAiQgsAkhnAAQhIAAgmgUQglgVgOgpQgNgoABg4IAAp/QAAhHAQgpQASgpAdgHIBBgKIAAhyIniAAgAkXB2QgRhOgWgvQAWgXAQgcQARgbAHgVQgVgLgUAAQgSAAgQALIAAlDQAAhLgLgqQgMgqgSgRQgRgTgTgDIg0gIIAAgsIGdAAIAAAsIgzAIQgTADgRATQgSARgNAqQgLAqAABLIAAFDQgQgLgUAAQgTAAgUALQAJAVARAbQAQAcAXAXQgXAvgQBOQgRBMgKB/QgKh/gRhMgAkYlXQgRA+gWAiQAXAVAQAhQAQAiAIA0IAFAAQAJg0ARgiQAQghAXgVQgXgigQg+QgRg/gLhvQgKBvgRA/g");
	this.shape_3.setTransform(62.1,121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LAND, new cjs.Rectangle(0,0,470.2,238), null);


(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABoQgCgEAAgIQAAgKAEgJQAFgKAIgJQAJgJAMgKIAfgXQgCgMgEgCQgEgEgKgDQgJgDAAgGQAAgHBBgtIgZAEIgaAEIgRAZQgIALgGAFIAAgNQAKgKAKgSQgKgCAAgGQAAgFAHgJQAGgJAJgHQAJgGAEAAQAGAAAAAEIgBADQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQABAAAAAAQAJAAANgEQANgEAFAAQAEAAACAIIAEAXQAAACgDACIgMAJIgTANIgWAQQAKAFAEAFQAEAGADALIAsgiIAAALIgsAjQgCARgKARQgKASgMAOQgNANgNAJQgNAJgGAAQgGAAgCgDgAgWAwQgMALgJAKQgIAKAAACQAAAEADAAQAHAAAKgHQAKgHAJgNQAKgNADgQQgMAIgLALg");
	this.shape.setTransform(699.2,363.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAxQAAgHAEgLIANggQgYAhgNAOQgOAOgIAAQgHAAgFgFQgGgGgDgJQgDgKAAgKQAAgHACgGQABgGADgFQAEgHAGgIIAPgSIAJgKQAEgFADgBQAEgCAHAAIALACQAEABAAACQAAADgEAIQgGAJgLAMQgLALgQALQgDAKAAAGQAAAHAGAAQACAAAFgDIAQgOIAVgSQAHgGAIgLIAPgSIASgSQAEgEAFAAQAEAAACACIABALIAAAGIgEAGIgJANIgPAXQgFAGgDAJQgFAIAAAEQAAAJAIAAQAFAAAJgFIAYgRIAAALIgfAcQgJAJgIAEQgHAEgGAAQgOAAAAgRg");
	this.shape_1.setTransform(688.1,358.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNA7QgFgHAAgNQAAgHADgKQAEgKAIgLQAGgKAKgMIgLADIgNACIgKACQgLAVgVARIAAgLQAKgLAFgHQgGgCgCgDQgDgDAAgFQAAgHAFgJQAGgKAHgIQAIgJAGgCIAFgCQABAAABAAQAAABABAAQAAABABAAQAAABAAABQAAADgGAJQAjgGAKAAIAFABQADACACAFQACAGAAAGQAAAEgDAEIgMANQgJAKgGAKQgHAMAAAGQAAAIALAAQAKAAAbgVIAAALIgYAYQgKAJgIAFQgIAGgFAAQgIAAgEgHg");
	this.shape_2.setTransform(675.8,358.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABBBQgCgEAAgJQAAgOAJgaQgYAcgNAMQgMAMgIAAQgEAAgGgGQgGgHgEgLQgFgKAAgMQAAgIACgFQABgFAFgGQAFgGAKgJQAagYAZgMQAZgMANAAQAEAAADADIAFAHIACAGQAAADgCACIgJAEIADAHIADAHIABAFQAAAEgIAMIgMAPQgEAGAAAIQAAANAMAAQANAAAagXIAAAKQgtAygTAAQgHAAgDgFgAgggFQgUAOAAAPQAAAGACADQACAEADAAIAHgCQATgLAPgSQAOgQAWgeQgtAUgTAPg");
	this.shape_3.setTransform(663.3,358.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBeQgIgNAAgXQABgRAIgZQAIgYAOgZQAOgaAPgSQAPgUANgHQAFgDADAAQAEAAABADQABAEAAAHQABAYgVAlQgTAigjAlIgBAOQAAAMAEAGQAFAIAJgBQAEABAEgEIALgIIAWgVIAAANQgkAxgXAAQgMAAgHgOgAAahGQgLAIgNAaQgNAagFAYQAIgJAIgKQAIgMAIgNIAMgWQAEgLAAgFQAAgCAAAAQAAgBgBgBQAAAAAAAAQgBgBgBAAIgDADg");
	this.shape_4.setTransform(652.7,354.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsBeQgGgNgBgXQAAgRAJgZQAIgYAPgZQANgaAPgSQAPgUANgHQAFgDADAAQAEAAABADQABAEABAHQgBAYgTAlQgUAigjAlIgCAOQAAAMAGAGQAEAIAIgBQAFABAEgEIALgIIAWgVIAAANQgkAxgXAAQgMAAgIgOgAAahGQgMAIgNAaQgMAagGAYQAKgJAHgKQAIgMAIgNIAMgWQAEgLAAgFQAAgCAAAAQAAgBgBgBQAAAAAAAAQgBgBgBAAIgDADg");
	this.shape_5.setTransform(644.5,354.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoBIQgHgPAAgSQAAgHABgGIAEgLIAHgMQAZgmAUAAQAKAAABAIQAAAGgIAMQgGALgGAFIgTAUQgEAGgBAIQABAGAEAEQAFAEAIAAQAGAAALgGQAKgGAQgNIAAANQgSAWgPALQgNALgLAAQgOAAgHgPgAARgzQgEgDAAgFQAAgIAIgKQAHgJAIAAQAFAAAEADQADADAAAGQAAAIgHAJQgIAJgIAAQgEAAgEgDg");
	this.shape_6.setTransform(636,356.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkB1QgIgGgGgMQgFgLAAgNQAAgIADgMQAEgMAGgRQAHgRAJgQIARgdIAOgZQAJgOAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBQgBAAgBAAQgKAAgQALQgQAKgcAVIgNALQgBAAAAABQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABQABAAABAAIAJgBIANgCQAIAAAAADQAAADgDABIgJADIgQAEIgWAIIgOAEQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgBgHQAAgZAIgOQAJgOAVgOQAYgRAWgLQAXgMAOgFQARgFAHAAQAHAAAIAKQAHAJAAALIgEAIIgMATIgTAfQgLATgLAXQgOAbgGAPQgGAPAAALQAAAJAJAHQALgJAKgMQALgMALgPIAYgmIAZgpIgBgDIAAgDQAAgIADgHIAIgOIAPgUQADgDAEAAQAGAAAAAIQAAAIgGASQgHARgNAXQgNAXgTAdQgTAcgYAgQgXAggLAAQgGAAgHgHg");
	this.shape_7.setTransform(623.2,354.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvBWQgFgGAAgKQAAgGADgJIAJgbIgEAEIgEAEIgEADIgFAEIAAgMQATgQAagmIgEAAIgGAAQgLAAgEACIgFABIgCAAIgBgBQAAgGAIgLQAFgKAGgFQAEgFAIgBQAHgCANAAIAHAAQAKgRAHgGQAIgHAJAAQALAAgBAEQAAACgHAJQgIAKgEAGIALABIAHABQgKATgPATIgIAAIgHgBIgIAAIgPAaQgGAMgEAKQgEAKAAAJQAAAMALAAQAGAAAKgHIAdgWIAAAMQgvAzgWAAQgJAAgEgGg");
	this.shape_8.setTransform(602.9,356.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNA7QgFgHAAgNQAAgHADgKQAEgKAIgLQAGgKAKgMIgLADIgNACIgKACQgLAVgVARIAAgLQAKgLAFgHQgGgCgCgDQgDgDAAgFQAAgHAFgJQAGgKAHgIQAIgJAGgCIAFgCQABAAABAAQAAABABAAQAAABABAAQAAABAAABQAAADgGAJQAjgGAKAAIAFABQADACACAFQACAGAAAGQAAAEgDAEIgMANQgJAKgGAKQgHAMAAAGQAAAIALAAQAKAAAbgVIAAALIgYAYQgKAJgIAFQgIAGgFAAQgIAAgEgHg");
	this.shape_9.setTransform(592,358.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrA3QgJgMAAgVQAAgTAIgOQAJgPATgRQAOgLAMgGQANgGAKAAQAJAAAFAEQAEAEAAAIQAAALgIALQgIALgRAKQgRAKgYAKIAAAFQAAAKAFAGQAFAGAJAAQAHAAAKgEQAJgFAJgGIAWgSIAAALQgUAYgRAMQgQANgSAAQgQAAgJgMgAANgqQgHAEgGAGQgIAHgFAJQgGAIgCAKQAQgFAKgKQALgJAGgIQAFgIAAgEQAAgEgEAAQgDAAgHAEg");
	this.shape_10.setTransform(581.5,358.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag+BpQgIgOAAgUQAAgdARggQARghAYgcQAXgdAWgSQAWgUAIABQAIAAAAAKQAAAuh1ByIgBAMQAAAYANAAQAGAAAFgEIAQgPQgFgKAAgEQAAgLAIgKQAHgMAKgIQAKgIAFAAQAHAAAAAKQAAAIgEALQgEALgIAPIAFADIAFABQAIAAALgHIAAAMQgSALgLAAQgGAAgGgCQgPAUgLAKQgMAJgLgBQgNAAgHgNgAAhhQQgMAMgQAWQgVAegJAQQgKAOgFASIASgSIAaggQARgVAKgPQAKgPAEgJQAFgKAAgDQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQgEAAgMAOg");
	this.shape_11.setTransform(571.5,353.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsBeQgGgNgBgXQAAgRAJgZQAIgYAPgZQAOgaAOgSQAPgUANgHQAFgDADAAQAEAAABADQABAEABAHQgBAYgTAlQgUAigjAlIgCAOQABAMAFAGQAEAIAIgBQAFABAEgEIALgIIAWgVIAAANQgkAxgXAAQgMAAgIgOgAAZhGQgLAIgNAaQgMAagGAYQAJgJAIgKQAIgMAIgNIAMgWQAEgLAAgFQAAgCAAAAQAAgBgBgBQAAAAAAAAQgBgBgBAAIgEADg");
	this.shape_12.setTransform(561.3,354.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiNB3QAAgGAJgNQAIgNALgKQAMgJAHAAIAFABIAhgjIgQgBQgKgBgEgBQgDgBAAgFQAAgIAQgQQAJgIAHgCQAIgDAWAAQgNACgFACQgGADAAAEIAJAAIAMAAIAKAAQAcgcAXgVQAYgVAagSQAagTAdgQQAGAIAAAIQAAAHgEAJIgTAiIgeA0IAJAAIAGAAIANABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABIgDAEIgJAMIgOARIgaACQgUAnAAAFQAAAHAHAAQAEAAAbgPIgCAJIgWARIgOALIgKAGQgFACgFAAQgGAAgGgGQgFgFAAgKQAAgEADgHIAGgPIARghIgfABIgogBIgOAPIgPAPIgNANIgIAIIgaAZIgMAKQgHAFgFAAQgGAAAAgGgABZhPIgeAXIgdAaIgbAZIA5gBIAQgbIAOgXIANgVIAMgUIgaASg");
	this.shape_13.setTransform(545.3,354.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpBhQgDgIAAgFQAAgFACgEQANgdAshFIgfAZQgWAUgIAAQgHAAgHgQQgIgPAAgLQAAgKAEgHQADgHAHgLQAKgPAKgLQAKgKAIgGQAHgGADAAQAFAAADAFQAFAFAAAGQAAADgFAHQgDAIgLALQgLALgSAQIgDAKIgCAFQAAAFAFAAQAFAAASgNQASgMAUgWQAJgIAFgGIAKgMIAIgIQACgDACAAQAFgBACAEQADAFAAAIQAAAFgEAHIgQAYQgMARgLATQgMARgLAXIAKgLIAWgVIATgQIASgPIAAALIgrAwIgcAkIgNAQIgJAMIgFAIIgFADQgEAAgDgHg");
	this.shape_14.setTransform(517.6,362.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag+BpQgIgOAAgUQAAgdARggQARghAYgcQAXgdAWgSQAWgUAIABQAIAAAAAKQAAAuh1ByIgBAMQAAAYANAAQAGAAAFgEIAQgPQgFgKAAgEQAAgLAIgKQAHgMAKgIQAKgIAFAAQAHAAAAAKQAAAIgEALQgEALgIAPIAFADIAFABQAIAAALgHIAAAMQgSALgLAAQgGAAgGgCQgPAUgLAKQgMAJgLgBQgNAAgHgNgAAhhQQgMAMgQAWQgVAegJAQQgKAOgFASIASgSIAaggQARgVAKgPQAKgPAEgJQAFgKAAgDQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQgEAAgMAOg");
	this.shape_15.setTransform(506.5,353.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAsIABgMIAFgLIAJgRIAOgXQgKAFgOAOQgKAJgHAJIgOATIgMANQgDAEgEAAQgGAAgEgLQgFgMAAgQQAAgJACgGQACgEAHgLQAMgSAJgJQAIgJAIAAQAGAAAEACQADACAAAFIgBADIgCAEIgGAFQgcAfAAAJQAAAEAEAAQACABAGgHIAPgRQAKgLAMgMQANgMARgLQAJgGAGAAQADgBADAJQADAHAAAIQAAAEgIAIQgfAiAAANQAAAHAGAAQAFAAAJgFIAZgTIAAAMQgZAZgNALQgOAKgIABQgNgBAAgSg");
	this.shape_16.setTransform(483,359);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmA5QgJgHgFgLQgEgLAAgOQgBgLAIgNQAIgOAMgMQALgMAOgHQAMgHAMAAQAIAAAFADQAFACgBAFQAAADgDAFQAGABADADQACAEAAAIQAAAJgDAMQgFAMgHALIAEAEIACAAIAGgCIAFgDIAKgHIAAALQgLALgIADQgGAEgOgBQgWAbgRAAQgKAAgHgGgAgDgWQgKAHgHAIQgIAHgCAGIgFAWQABALAQAAQAHAAARgNQgDgIAAgIQAAgKAFgLQAEgMAJgPIgYAQg");
	this.shape_17.setTransform(470.8,358.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgoBIQgHgPAAgSQAAgHABgGIAEgLIAHgMQAZgmATAAQAMAAAAAIQgBAGgGAMQgIALgFAFIgTAUQgFAGABAIQgBAGAFAEQAFAEAIAAQAGAAALgGQAJgGARgNIAAANQgSAWgPALQgNALgLAAQgOAAgHgPgAARgzQgEgDAAgFQAAgIAIgKQAHgJAIAAQAFAAADADQAEADAAAGQAAAIgHAJQgHAJgJAAQgEAAgEgDg");
	this.shape_18.setTransform(461.6,356.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgvBWQgFgGAAgKQAAgGADgJIAKgbIgFAEIgEAEIgEADIgFAEIAAgMQATgQAagmIgFAAIgFAAQgKAAgGACIgDABIgDAAIgBgBQAAgGAHgLQAGgKAFgFQAGgFAHgBQAIgCAMAAIAIAAQAJgRAIgGQAHgHAKAAQAJAAABAEQAAACgIAJQgIAKgDAGIAKABIAIABQgLATgPATIgIAAIgHgBIgIAAIgPAaQgGAMgEAKQgDAKAAAJQgBAMAKAAQAHAAAKgHIAcgWIAAAMQguAzgXAAQgHAAgFgGg");
	this.shape_19.setTransform(453.5,356.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AABBBQgCgEAAgJQAAgOAJgaQgYAcgNAMQgMAMgIAAQgEAAgGgGQgGgHgEgLQgFgKAAgMQAAgIACgFQABgFAFgGQAFgGAKgJQAagYAZgMQAZgMANAAQAEAAADADIAFAHIACAGQAAADgCACIgJAEIADAHIADAHIABAFQAAAEgIAMIgMAPQgEAGAAAIQAAANAMAAQANAAAagXIAAAKQgtAygTAAQgHAAgDgFgAgggFQgUAOAAAPQAAAGACADQACAEADAAIAHgCQATgLAPgSQAOgQAWgeQgtAUgTAPg");
	this.shape_20.setTransform(440.6,358.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAbA5QgDgEAAgHQAAgFACgGIAGgPIAMgUIANgVQgSAOgOANQgOANgIALIgNAQQgKALgJgBQgJABAAgNQAAgGAHgNIAUgiIABgFQAAAAAAgBQgBgBAAAAQgBgBAAAAQgBAAgBAAQgEAAgHAIIgcAdIgNARIgLAOQgDADgDABQgGAAgGgMQgFgLAAgPQAAgLADgHQAEgIAIgLQALgSAIgHQAHgHAIgBQAGABADACQAEACAAADQAAAEgHAIQgGAJgKAJQgFAFgFAIQgFAGAAADQAAAFAEAAQADAAAMgMIAbgaQAOgPANgJQALgKAJAAQAFAAADAEQAEAEAAAGQAAADgGALQgFAKgKAPIgZAiIApgjIAbgaIARgPQAIgHACABQAEgBAEAJQADAJAAAEQAAAEgLANIgQASQgGAHAAAJQAAAEADADQADADAFAAQAFAAAHgGIAWgSIAAANIgbAYQgNAKgJAGQgJAFgGAAQgGAAgEgEg");
	this.shape_21.setTransform(423.4,359.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoBIQgHgPAAgSQAAgHABgGIAEgLIAHgMQAZgmAUAAQAKAAABAIQAAAGgIAMQgHALgFAFIgTAUQgEAGAAAIQAAAGAEAEQAFAEAIAAQAGAAALgGQAJgGARgNIAAANQgSAWgPALQgNALgLAAQgOAAgHgPgAARgzQgEgDAAgFQAAgIAIgKQAHgJAIAAQAFAAADADQAEADAAAGQAAAIgHAJQgHAJgJAAQgEAAgEgDg");
	this.shape_22.setTransform(410,356.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGAsIABgMIAFgLIAJgRIAOgXQgKAFgOAOQgKAJgHAJIgOATIgMANQgDAEgEAAQgGAAgEgLQgFgMAAgQQAAgJACgGQACgEAHgLQAMgSAJgJQAIgJAIAAQAGAAAEACQADACAAAFIgBADIgCAEIgGAFQgcAfAAAJQAAAEAEAAQACABAGgHIAPgRQAKgLAMgMQANgMARgLQAJgGAGAAQADgBADAJQADAHAAAIQAAAEgIAIQgfAiAAANQAAAHAGAAQAFAAAJgFIAZgTIAAAMQgZAZgNALQgOAKgIABQgNgBAAgSg");
	this.shape_23.setTransform(398.7,359);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AiNB3QAAgGAJgNQAIgNALgKQAMgJAHAAIAFABIAhgjIgQgBQgKgBgEgBQgDgBAAgFQAAgIAQgQQAJgIAHgCQAIgDAWAAQgNACgFACQgGADAAAEIAJAAIAMAAIAKAAQAcgcAXgVQAYgVAagSQAagTAdgQQAGAIAAAIQAAAHgEAJIgTAiIgeA0IAJAAIAGAAIANABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABIgDAEIgJAMIgOARIgaACQgUAnAAAFQAAAHAHAAQAEAAAbgPIgCAJIgWARIgOALIgKAGQgFACgFAAQgGAAgGgGQgFgFAAgKQAAgEADgHIAGgPIARghIgfABIgogBIgOAPIgPAPIgNANIgIAIIgaAZIgMAKQgHAFgFAAQgGAAAAgGgABZhPIgeAXIgdAaIgbAZIA5gBIAQgbIAOgXIANgVIAMgUIgaASg");
	this.shape_24.setTransform(381,354.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Animation, new cjs.Rectangle(367,331,359,48.2), null);


(lib.AIR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGQLuQhWAAhSg5QhSg3g5h1QgdhAgPhIQgOhJgIg5QgHg6gHgVIhdAAIAADqICKCqIAACqIpFAAIiAioIAAi5IBOgLQAdgHALglQAMgkAAg2IAAqpQAAhDgTgcQgSgbgcgCIhBgMIAAi4IJqAAQCHACBmA1QBmA0BCBVQBEBUAiBhQAhBhAABYQgBBigpBFQgpBGhAAkICJAAICbDCIAAB1QgBDChBBSQg/BRh2AAIgFAAgAhKgBQAuABAbAjQAcAjAOA4QAPA3AGA7QAOB5AaBGQAaBHAuAdQAuAdBHAAQA8ABAsgeQArgeAXhMQAZhNAAiKIAAhcIh0AAIAABcQAAAWgDAaQgEAZgIASQgJASgPAAQgXABgKgqQgKgpgGhVQgHhSgYg6QgXg6gyglIAAgEQA7gfAqhHQArhHACh3QABichdhYQhdhYi+gCIo0AAIAAByIBAAKQAeAHASApQAQApAABHIAAKzQAABFgOApQgOAqgkAIIhAAJIAABzIHtAAIAAhzIgugFQg0gHgWgsQgUgrABhGIAAkHgACFBwQgshOgzgpQAOgYAFgZQAGgYgFgaQgUgLgXAAQgVAAgdALQgbgLgcAAQgcAAgbALQgcgLgeAAQgdAAgdALQgdgLgbAAQgbAAgdALQAIAVASAbQAQAcAWAXQgXAvgQBNQgRBNgMB9QgKh9gRhNQgPhNgUgvQAUgXAPgcQAQgbAHgVQgYgLgQAAQgRAAgOALIAAlDQAAhLgLgqQgMgqgTgSQgRgSgTgDIg0gIIAAgsIIRAAQCdgCBcBEQBcBDABCnQgBBrgnBDQgoBDg/AgQgNgLgTAAQgVAAgbALQAhAYAXAWQAXAWAWAfQATAvAHBNQAIBNgDB9QgViBgshOgADAmMQgEA0gRAjQgQAjgTATQgGAogVAoQgWAogdAbIAIAAQAxggAsggQAsggArgrQABgtgQhEQgQhFgqhYQAWBHgDAygAmRlYQgQA/gXAiQAVAVAOAhQAQAiAIAzIAHAAQAIgzARgiQAQghAYgVQgYgigQg/QgSg+gKhvQgIBvgQA+gAkToXQgXAlABBPIAAEIID0AAQAmAAAngWQAogWAbgtQAcguABhGQgBhmgwg3Qgvg2hRgBIiHAAQg8AAgXAlgAkFjAIAAjjQAAhGASgaQASgZAgABICOAAQAzgBAoArQApAqACBeQgCBRgpAsQgoArgzABgAhFk/QgLAPAAAeIAAAyIAjAAQAbgBAZgWQAbgXACgdQAAgQgKgJQgKgLgNAAIgtAAQgQAAgLAQg");
	this.shape.setTransform(263,121);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjeLuIiAioIAAi5IBOgLQAdgHAMglQALgkAAg2IAAqpQAAhDgSgbQgTgbgcgDIhBgMIAAi4IIpAAICTDEIAACeIg9AKQgdADgTAjQgUAkAABPIAAKUICBCqIAACYgAk6pXIBAAKQAeAHASApQARApAABHIAAKzQAABFgPApQgOAqgkAIIhAAKIAAByIHjAAIAAhyIhAgKQglgIgPgqQgOgpAAhFIAAqzQAAhHARgpQARgpAfgHIA/gKIAAhyInhAAgAhjB2QgQhOgXgvQAXgXAPgcQARgbAHgVQgVgLgUAAQgSAAgPALIAAlDQAAhLgMgqQgMgqgSgRQgRgTgTgDIg0gIIAAgsIGcAAIAAAsIgzAIQgSADgSATQgSARgNAqQgLAqAABLIAAFDQgPgLgTAAQgUAAgUALQAKAVAQAbQAQAcAXAXQgXAvgQBOQgQBNgLB8QgKh8gRhNgAhklXQgQA+gWAiQAXAVAPAhQAQAiAIA0IAFAAQAKg0AQgiQAQghAXgVQgXgigQg+QgQg/gMhvQgKBvgRA/g");
	this.shape_1.setTransform(163.7,121);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABaLuIg0hGIAABGIn6AAIiLi3IAAikIA0gRQAlgKAfg6QAfg5Ahh9IDvt1IDjAAIDgDrIDVM1QAKAiASAlQARAmAZAiQAaAhAgAVIAAD2gAAOCKIAPA8QAYBvgPAzQgNAxgoAJIg0AOIAAByIHrAAIAAhyIg4gVQgZgIgagzQgagwgbhoIjruRIi5AAIjnNRQgbBmgXA7QgWA8gWAbQgVAbgZAHIgrAOIAAByIGnAAIAAhyIg0gOQgigOgQg5QgPg7AVhaIAQg8gAB1C3QgVg4gWgtQgUgtgbgsQAQgXAMgcQAOgbACgVQgXgLgSAAQgSAAgMALIhXmNIgEAAIhsGNQgRgLgVAAQgVAAgWALICZo9IB/AAICVI9QgkgXgkAXQAJAVAWAbQAUAcAbAXQgIA6AABLQABBMAQB3QgZhQgWg6gAgIlXQAAA+gIAiQAVAVAWAhQAVAiAXA0IAGAAQAAg0AFgiQAGghAJgVQgagigbg+Qgcg/gmhvQANBvABA/gAi0gnIBUkxIAHAAIBDExg");
	this.shape_2.setTransform(68.6,121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AIR, new cjs.Rectangle(0,0,325.2,238), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(554,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,1108,400), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(554,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,1108,400), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(554,143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1108,287), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(554,143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1108,287), null);


// stage content:
(lib.Animation_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Animation
	this.MovieClip29 = new lib.Animation();
	this.MovieClip29.name = "MovieClip29";
	this.MovieClip29.parent = this;
	this.MovieClip29.setTransform(170.8,38,1,1,0,0,0,89.3,20);

	this.timeline.addTween(cjs.Tween.get(this.MovieClip29).wait(170));

	// AIR
	this.instance = new lib.AIR();
	this.instance.parent = this;
	this.instance.setTransform(567,489,1,1,180,0,0,162.7,131);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({_off:false},0).wait(1).to({regX:168,regY:121,rotation:181.3,x:582.7,y:487.9},0).wait(1).to({rotation:182.6,x:602.8,y:475.2},0).wait(1).to({rotation:183.9,x:621.7,y:460.6},0).wait(1).to({rotation:185.2,x:638.7,y:443.7},0).wait(1).to({rotation:186.5,x:652.4,y:424.1},0).wait(1).to({rotation:187.8,x:661.2,y:401.9},0).wait(1).to({rotation:189.1,x:663.9,y:378},0).wait(1).to({rotation:190.4,x:660.5,y:354.1},0).wait(1).to({rotation:191.7,x:652.2,y:331.5},0).wait(1).to({rotation:159.8,x:646.5,y:313},0).wait(1).to({rotation:127.8,x:638.9,y:292.5},0).wait(1).to({rotation:95.9,x:628.3,y:270},0).wait(1).to({rotation:63.9,x:613.8,y:246.8},0).wait(1).to({rotation:32,x:594.9,y:224.2},0).wait(1).to({rotation:0,x:572.4,y:204.1},0).wait(1).to({rotation:3.6,x:556.1,y:183.3},0).wait(1).to({rotation:7.1,x:529.8,y:167.4},0).wait(1).to({rotation:10.7,x:492.2,y:152.4},0).wait(1).to({rotation:14.2,x:465.8,y:141.5},0).wait(1).to({rotation:17.8,x:434.6,y:118.5},0).wait(1).to({rotation:21.3,x:417.6,y:90.3},0).wait(1).to({rotation:20.4,x:434.1,y:64.8},0).wait(1).to({rotation:19.6,x:466.3,y:43.9},0).wait(1).to({rotation:18.7,x:496.3,y:24.6},0).wait(1).to({rotation:17.9,x:526.1,y:5.8},0).wait(1).to({rotation:17,x:556.5,y:-13.1},0).wait(1).to({rotation:16.2,x:585.1,y:-36.6},0).wait(1).to({rotation:15.3,x:596.3,y:-70.9},0).wait(1).to({rotation:14.5,x:586.7,y:-100.3},0).wait(26));

	// Sky
	this.instance_1 = new lib.Sky();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-277);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115).to({_off:false},0).wait(55));

	// SEA
	this.instance_2 = new lib.SEA();
	this.instance_2.parent = this;
	this.instance_2.setTransform(452.8,197.6,1,1,0,0,0,176.8,142);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({_off:true},30).wait(55));

	// Shapewater (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_85 = new cjs.Graphics().p("Am4G4Qi1i2gBkCQABkBC1i2QC3i3EBAAQECAAC2C3QC2C2AAEBQAAECi2C2Qi2C2kCABQkBgBi3i2g");
	var mask_graphics_86 = new cjs.Graphics().p("AnYIFIgZgPQk6iFAIkDQAIkDETkBIAEgEQERj7D7AUIAFACQCzAZDbAsQBYAXA9AuQAJAEAGAGQBJAmAvAyQAjAWAQAhQASAngIA0QAEAfANAvQANA8AMBPIACAXQALBqgRBbQgNBhgsBRQgkBFg8A2IgUASQgvAmg3AaQhDAkhMASQg+APg9AFQhTAHhqAAQkWAAkCh/g");
	var mask_graphics_87 = new cjs.Graphics().p("AFdKaQhegDiEAAQk3AAlUhaIgfgMQm+hSAQkGQARkFFwlLIAEgEQFslFD4AqIAFACQC0AyEoABQBzAHBDAmQALACAIAEQBgAXA6ApQA0APARAiQATAogcBBQAAAgAUA9IApCjIAFAbQAXB/gJBqQgGB3guBgQgoBWhJA7IgbATQg5AphFAXQhTAghcAKQg3AGg0AAIgngBg");
	var mask_graphics_88 = new cjs.Graphics().p("AG7KxQhpgNieAAQlYAAmlg2IgmgIQpDggAZkHQAZkJHNmUIAFgFQHImND0A+IAFAEQC2BJF0gpQCOgJBJAdQAOAAAJAEQB2AIBGAgQBFAHASAjQAUApgwBOQgEAgAcBLIA3C8IAIAfQAlCUgDB5QADCMgxBvQgrBmhYBBQgPALgRAKQhDArhVAUQhhAdhtACIgQAAQhRAAhIgKg");
	var mask_graphics_89 = new cjs.Graphics().p("ALWLdQhpgGhWgSQh0gXi5AAQl5AAn3gRIgsgFQrHARAhkIQAikLIpneIAGgFQIjnXDxBUIAGAEQC3BhHBhTQCogZBPAUQARgCAKADQCNgHBSAXQBVgBATAkQAVAqhDBcQgIAgAjBaQAXBLAwCJIAKAjQAxCpAFCHQALCjgzB9QgvB3hnBGQgRAMgUALQhOAthjASQhYAThgAAQgbAAgbgBg");
	var mask_graphics_90 = new cjs.Graphics().p("ANIMLQh3gMhfgbQh/ghjTAAQmaAApIAUIg0gCQtKBEAqkLQApkNKHooIAGgGQJ+ogDuBpIAGAGQC4B5IPh+QDCgpBVALQAVgDAKABQCkgWBdAOQBmgIAUAlQAWArhXBpQgMAgAqBpQAbBQA7CdIAOAnQA+C9ALCWQAUC5g2CMQgyCHh1BMQgUANgXAMQhYAuhzAPQhLANhQAAQg3AAg7gGg");
	var mask_graphics_91 = new cjs.Graphics().p("AO5NKQiEgThogiQiKgrjtAAQm8AAqaA4Ig5ACQvOB1AxkMQAykPLkpyIAHgGQLappDqB+IAHAGQC4CSJcipQDdg5BcACQAWgFALABQC7glBpAFQB3gQAUAmQAYAshrB1QgQAhAxB3QAfBVBHCxIAQArQBLDSASClQAcDOg4CbQg2CYiDBSQgXAOgZAMQhjAwiCANQg9AHhAAAQhVAAhbgNg");
	var mask_graphics_92 = new cjs.Graphics().p("A+WMEQA7kSNAq8IAJgHQM1qxDmCSIAHAIQC6CqKpjUQD3hJBigHQAZgGAMgBQDSgzB0gEQCIgYAVAnQAZAth+CCQgUAhA4CGQAiBaBTDEIATAvQBYDpAZCyQAkDkg7CqQg5CoiSBXQgZAPgcANQhuAyiQAKQicAOixgfQiSgahxgpQiUg2kIAAQndAArrBdIg/AFQmoBAj9AAQmYAAAjimg");
	var mask_graphics_93 = new cjs.Graphics().p("EghWANxQBDkUOesGIAJgIQOQr6DiCnIAIAJQC7DCL2j/QEShYBogQQAcgIAMgCQDqhCB/gNQCZggAWAoQAaAviSCPQgYAhA/CVQAmBeBfDYIAVAzQBmD+AfDAQAtD6g+C5Qg8C5igBdQgcAQgfANQh4A0igAHQiqALjCgnQihghh5gxQifhAkiAAQn+gBs9CCIhGAJQomBhklAAQluAAAkiXg");
	var mask_graphics_94 = new cjs.Graphics().p("EgkWAPdQBLkWP7tQIAKgIQPrtEDfC9IAJAJQC8DbNDkqQEshoBugZQAfgKANgDQEAhRCLgWQCqgnAXApQAbAvimCdQgcAhBHCjQApBkBrDrIAYA3QByETAmDPQA2EQhBDHQg/DKivBiQgfARghAOQiDA2ivAFQi5AHjSgwQivgniCg5QiqhKk8AAQofgBuPCnIhMAMQqmCElEAAQlMAAAliKg");
	var mask_graphics_95 = new cjs.Graphics().p("EgnWARIQBTkYRYuaIAKgJQRHuNDcDSIAJALQC9DyOQlUQFHh5B0ghQAigMAOgDQEXhhCWgfQC6gvAZAqQAcAxi6CpQggAiBOCyQAtBoB2D/IAbA7QB/EnAtDeQA+EmhDDWQhDDai9BoQghASgkAPQiOA4i+ACQjHADjkg4Qi9guiKhBQi1hUlWAAQpBAAvgDLIhSAQQsmCqleAAQkvAAAmiAg");
	var mask_graphics_96 = new cjs.Graphics().p("EgqWASyQBckaS0vlIALgJQSivWDZDnIAJAMQC+EKPdl/QFiiIB6gqIAzgSQEuhwCigoQDLg2AaArQAcAyjNC2QgkAiBVDAQAwBtCDETIAeA/QCME8A0DtQBGE8hGDlQhGDqjMBtQgjATgoAQQiXA6jNgBQjXAAj0hAQjLg1iThJQi/helxAAQpiAAwyDwIhZATQukDRlzAAQkYAAAnh3g");
	var mask_graphics_97 = new cjs.Graphics().p("EgtXAUcQBlkeUdw3QUdw4C/EiQDAEiQpmqQHxjGBDgaQFFh+CtgxQDcg+AaAsQAeAzjhDDQgoAjBdDOQA5B/CpFdQCZFRA7D7QBOFShIDzQhKD7jaBzQi5BikVgFQjlgEkFhIQjZg8ichQQoVkT9HG/QxxEQmWAAQkEAAAnhvg");
	var mask_graphics_98 = new cjs.Graphics().p("AfrT4Qj1gEkThBQjkg3irhJQoZjQ1eD2Qj6AGkdAYQ6fECBcmYQDqkEU0vVQUzvWE7EIQD9D6PFlOQAygKA0gMQHDiFA9AZQEnhKCegDQDHglAYA8QAcBGjNDJQglAyBVDOQAuCJCCErIASA/QBcExAFDlQAbEzhvDeQhnDkjrBpQjCBUkOAAIgcAAg");
	var mask_graphics_99 = new cjs.Graphics().p("AdxT5QkGgDkgg7Qjugxi8hCQp3i71nDeQjhgskAgbQ32BEBToSQFvjqVMtzQVIt0G3DuQFFDhPGksIBbgBQGWhCA3BLQEKgWCOApQCzgKAWBMQAZBZi5DOQghBCBMDOQAqCfB1EyIAEA4QAeETgwDOQgaEViUDHQiGDNj7BeQjUBMkZAAIgcAAg");
	var mask_graphics_100 = new cjs.Graphics().p("AbKVJQkWgDkug0Qj5gsjMg6QrTin1yDFQjIhdjkhOQ1Mh4BKqNQH0jQVjsRQVfsRIzDTQGNDIPGkLQAnALAqAKQFogBAxB+QDtAeB+BXQCfAPAUBcQAVBsijDUQgeBRBEDOQAlC2BoE3IgKAyQggD1hmC4QhND1i6CyQikC2kMBUQjkBDkhAAIghAAg");
	var mask_graphics_101 = new cjs.Graphics().p("AYcWpQkngDk8gtQkEgmjcg0QswiR17CsQiwiOjHiCQyik1BAsGQJ6i2V6qwQV1qvKvC5QHUCvPHjqQAiAWAlAUQE7BCArCwQDPBSBuCEQCMApARBtQATB+iPDaQgaBhA7DNQAhDMBaE/QgMAVgMAWQheDXiaCgQiBDXjhCbQjBCgkdBJQj2A7krAAIgiAAg");
	var mask_graphics_102 = new cjs.Graphics().p("AVtYJQk3gClKgoQkOggjsgsQuOh92FCUQiWjAiri0Qv5nzA3uAQL/icWSpOQWLpNMrCfQIcCWPHjJQAeAhAfAfQEOCEAlDiQCxCHBfCxQB3BCAPB9QAQCSh6DfQgXBwAzDMQAcDkBOFFIgnAlQibC4jQCKQi1C4kHCFQjfCJkuA+QkIAzk1AAIgjAAg");
	var mask_graphics_103 = new cjs.Graphics().p("AS+ZoQlIgClXggQkZgbj9glQvqho2PB7Qh9jxiOjoQtQqvAuv7QOEiCWpnrQWinrOmCEQJkB9PIinQAYArAaAqQDiDGAeEUQCUC7BPDeQBkBdAMCNQANCkhmDmQgSB+AqDNQAXD6BBFMIg1AfQjaCZkEByQjpCakuBvQj8Byk+A0QkdArlDAAIgegBg");
	var mask_graphics_104 = new cjs.Graphics().p("AQQbIQlZgBllgbQkjgVkMgdQxJhU2YBjQhkkihykbQqmttAkx1QQKhoXAmJQW4mJQiBqQKrBkPJiGIAoBrQC1EIAYFGQB2DwA/ELQBQB2AKCeQALC3hSDqQgPCOAiDNQASERA0FSIhDAZQkXB6k6BcQkdB7lUBYQkaBclPApQkvAjlPAAIgcgBg");
	var mask_graphics_105 = new cjs.Graphics().p("ANhcoQlpgBlygUQktgQkegWQymg+2iBKQhLlUhVlOQn9wpAczwQSOhOXYknQXOknSeBQQLzBLPJhkIAeB/QCIFKASF5QBYEkAwE4QA8CRAHCtQAIDJg9DxQgLCeAZDMQAOEoAnFYIhRATQlWBclvBEQlRBdl6BCQk4BElfAgQlDAZlbAAIgaAAg");
	var mask_graphics_106 = new cjs.Graphics().p("AKyeIQl6gBl+gNQk5gLkugOQ0Dgq2sAxQgymFg5mBQlTzlAT1rQUUg0XvjFQXjjEUaA1QM7AyPJhDIAVCVQBaGMAMGrQA7FYAgFmQAoCqAEC8QAGDdgpD3QgHCtARDMQAJE/AaFeIhgANQmTA9mkAuQmFA9mgAtQlWAtlwAVQlOARleAAIgpAAg");
	var mask_graphics_107 = new cjs.Graphics().p("AIEfoQmLgBmMgGQlDgFk+gIQ1hgV21AZQgZm2gdm1Qip2iAJ3mQWZgaYHhiQX6hiWVAaQODAZPKghIAKCrQAtHOAGHdQAdGMAQGTQAUDDADDOQACDvgUD9QgEC8AJDNQAEFUANFmIhtAGQnRAenaAXQm5AfnGAWQl0AXmAAKQlhAJlpAAIgoAAg");
	var mask_graphics_108 = new cjs.Graphics().p("Eg/5AhIMAAAhCPMB/zAAAMAAABCPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(85).to({graphics:mask_graphics_85,x:423.3,y:191.3}).wait(1).to({graphics:mask_graphics_86,x:418.6,y:190.6}).wait(1).to({graphics:mask_graphics_87,x:414.4,y:190.2}).wait(1).to({graphics:mask_graphics_88,x:410.4,y:190.5}).wait(1).to({graphics:mask_graphics_89,x:406.6,y:191}).wait(1).to({graphics:mask_graphics_90,x:402.9,y:190.4}).wait(1).to({graphics:mask_graphics_91,x:399.2,y:188.1}).wait(1).to({graphics:mask_graphics_92,x:395.6,y:186.6}).wait(1).to({graphics:mask_graphics_93,x:392,y:186}).wait(1).to({graphics:mask_graphics_94,x:388.4,y:185.6}).wait(1).to({graphics:mask_graphics_95,x:384.8,y:185.2}).wait(1).to({graphics:mask_graphics_96,x:381.2,y:185}).wait(1).to({graphics:mask_graphics_97,x:377.6,y:184.8}).wait(1).to({graphics:mask_graphics_98,x:372.4,y:186.4}).wait(1).to({graphics:mask_graphics_99,x:370.2,y:196}).wait(1).to({graphics:mask_graphics_100,x:372.5,y:197.8}).wait(1).to({graphics:mask_graphics_101,x:375.6,y:197.9}).wait(1).to({graphics:mask_graphics_102,x:378.6,y:198.1}).wait(1).to({graphics:mask_graphics_103,x:381.7,y:198.3}).wait(1).to({graphics:mask_graphics_104,x:384.8,y:198.4}).wait(1).to({graphics:mask_graphics_105,x:387.8,y:198.6}).wait(1).to({graphics:mask_graphics_106,x:390.9,y:198.7}).wait(1).to({graphics:mask_graphics_107,x:394,y:198.9}).wait(1).to({graphics:mask_graphics_108,x:397,y:199}).wait(62));

	// Underwater
	this.instance_3 = new lib.Underwater();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(85).to({_off:false},0).wait(85));

	// foreground
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(555,256.5,1,1,0,0,0,554,143.5);
	this.instance_4.filters = [new cjs.BlurFilter(10, 10, 3)];
	this.instance_4.cache(-2,-2,1112,291);

	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(248,256.5,1,1,0,0,0,554,143.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:554.9},0).wait(1).to({x:554.8},0).wait(1).to({x:554.5},0).wait(1).to({x:554.1},0).wait(1).to({x:553.6},0).wait(1).to({x:552.9},0).wait(1).to({x:552.1},0).wait(1).to({x:551.2},0).wait(1).to({x:550.2},0).wait(1).to({x:549},0).wait(1).to({x:547.7},0).wait(1).to({x:546.3},0).wait(1).to({x:544.7},0).wait(1).to({x:543},0).wait(1).to({x:541.1},0).wait(1).to({x:539.1},0).wait(1).to({x:537},0).wait(1).to({x:534.7},0).wait(1).to({x:532.3},0).wait(1).to({x:529.7},0).wait(1).to({x:526.9},0).wait(1).to({x:524},0).wait(1).to({x:521},0).wait(1).to({x:517.8},0).wait(1).to({x:514.4},0).wait(1).to({x:510.9},0).wait(1).to({x:507.3},0).wait(1).to({x:503.4},0).wait(1).to({x:499.5},0).wait(1).to({x:495.3},0).wait(1).to({x:491},0).wait(1).to({x:486.6},0).wait(1).to({x:482},0).wait(1).to({x:477.3},0).wait(1).to({x:472.4},0).wait(1).to({x:467.3},0).wait(1).to({x:462.2},0).wait(1).to({x:456.8},0).wait(1).to({x:451.4},0).wait(1).to({x:445.8},0).wait(1).to({x:440.1},0).wait(1).to({x:434.3},0).wait(1).to({x:428.4},0).wait(1).to({x:422.4},0).wait(1).to({x:416.3},0).wait(1).to({x:410.2},0).wait(1).to({x:403.9},0).wait(1).to({x:397.6},0).wait(1).to({x:391.3},0).wait(1).to({x:384.9},0).wait(1).to({x:378.5},0).wait(1).to({x:372.2},0).wait(1).to({x:365.8},0).wait(1).to({x:359.5},0).wait(1).to({x:353.2},0).wait(1).to({x:346.9},0).wait(1).to({x:340.8},0).wait(1).to({x:334.7},0).wait(1).to({x:328.7},0).wait(1).to({x:322.9},0).wait(1).to({x:317.2},0).wait(1).to({x:311.7},0).wait(1).to({x:306.3},0).wait(1).to({x:301.1},0).wait(1).to({x:296.1},0).wait(1).to({x:291.3},0).wait(1).to({x:286.7},0).wait(1).to({x:282.4},0).wait(1).to({x:278.3},0).wait(1).to({x:274.4},0).wait(1).to({x:270.8},0).wait(1).to({x:267.4},0).wait(1).to({x:264.3},0).wait(1).to({x:261.5},0).wait(1).to({x:258.9},0).wait(1).to({x:256.6},0).wait(1).to({x:254.6},0).wait(1).to({x:252.8},0).wait(1).to({x:251.4},0).wait(1).to({x:250.2},0).wait(1).to({x:249.2},0).wait(1).to({x:248.6},0).wait(1).to({x:248.2},0).to({_off:true},1).wait(86));

	// LAND
	this.instance_6 = new lib.LAND();
	this.instance_6.parent = this;
	this.instance_6.setTransform(589.4,217.5,1,1,0,0,0,246,142);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:241.7,regY:121,x:585,y:196.5},0).wait(1).to({x:584.9,alpha:0.001},0).wait(1).to({x:584.8,alpha:0.002},0).wait(1).to({x:584.5,alpha:0.003},0).wait(1).to({x:584.2,alpha:0.005},0).wait(1).to({x:583.9,alpha:0.007},0).wait(1).to({x:583.5,alpha:0.009},0).wait(1).to({x:582.9,alpha:0.012},0).wait(1).to({x:582.4,alpha:0.016},0).wait(1).to({x:581.7,alpha:0.02},0).wait(1).to({x:581,alpha:0.024},0).wait(1).to({x:580.2,alpha:0.029},0).wait(1).to({x:579.4,alpha:0.034},0).wait(1).to({x:578.4,alpha:0.039},0).wait(1).to({x:577.4,alpha:0.045},0).wait(1).to({x:576.3,alpha:0.052},0).wait(1).to({x:575.1,alpha:0.059},0).wait(1).to({x:573.8,alpha:0.066},0).wait(1).to({x:572.5,alpha:0.074},0).wait(1).to({x:571.1,alpha:0.083},0).wait(1).to({x:569.6,alpha:0.092},0).wait(1).to({x:568,alpha:0.101},0).wait(1).to({x:566.3,alpha:0.111},0).wait(1).to({x:564.5,alpha:0.121},0).wait(1).to({x:562.7,alpha:0.132},0).wait(1).to({x:560.8,alpha:0.144},0).wait(1).to({x:558.7,alpha:0.156},0).wait(1).to({x:556.6,alpha:0.168},0).wait(1).to({x:554.4,alpha:0.181},0).wait(1).to({x:552.2,alpha:0.195},0).wait(1).to({x:549.8,alpha:0.208},0).wait(1).to({x:547.4,alpha:0.223},0).wait(1).to({x:544.8,alpha:0.238},0).wait(1).to({x:542.2,alpha:0.253},0).wait(1).to({x:539.5,alpha:0.269},0).wait(1).to({x:536.8,alpha:0.286},0).wait(1).to({x:533.9,alpha:0.303},0).wait(1).to({x:531,alpha:0.32},0).wait(1).to({x:528,alpha:0.338},0).wait(1).to({x:524.9,alpha:0.356},0).wait(1).to({x:521.8,alpha:0.374},0).wait(1).to({x:518.6,alpha:0.393},0).wait(1).to({x:515.3,alpha:0.412},0).wait(1).to({x:512,alpha:0.432},0).wait(1).to({x:508.7,alpha:0.452},0).wait(1).to({x:505.3,alpha:0.472},0).wait(1).to({x:501.9,alpha:0.492},0).wait(1).to({x:498.4,alpha:0.513},0).wait(1).to({x:494.9,alpha:0.533},0).wait(1).to({x:491.4,alpha:0.554},0).wait(1).to({x:487.9,alpha:0.575},0).wait(1).to({x:484.4,alpha:0.596},0).wait(1).to({x:480.9,alpha:0.616},0).wait(1).to({x:477.4,alpha:0.637},0).wait(1).to({x:473.9,alpha:0.658},0).wait(1).to({x:470.5,alpha:0.678},0).wait(1).to({x:467.1,alpha:0.698},0).wait(1).to({x:463.8,alpha:0.718},0).wait(1).to({x:460.5,alpha:0.737},0).wait(1).to({x:457.3,alpha:0.756},0).wait(1).to({x:454.1,alpha:0.775},0).wait(1).to({x:451.1,alpha:0.793},0).wait(1).to({x:448.1,alpha:0.81},0).wait(1).to({x:445.3,alpha:0.827},0).wait(1).to({x:442.5,alpha:0.843},0).wait(1).to({x:439.9,alpha:0.859},0).wait(1).to({x:437.3,alpha:0.874},0).wait(1).to({x:434.9,alpha:0.888},0).wait(1).to({x:432.7,alpha:0.902},0).wait(1).to({x:430.6,alpha:0.914},0).wait(1).to({x:428.6,alpha:0.926},0).wait(1).to({x:426.7,alpha:0.937},0).wait(1).to({x:425,alpha:0.947},0).wait(1).to({x:423.4,alpha:0.956},0).wait(1).to({x:422,alpha:0.965},0).wait(1).to({x:420.8,alpha:0.972},0).wait(1).to({x:419.7,alpha:0.979},0).wait(1).to({x:418.7,alpha:0.984},0).wait(1).to({x:417.9,alpha:0.989},0).wait(1).to({x:417.2,alpha:0.993},0).wait(1).to({x:416.7,alpha:0.996},0).wait(1).to({x:416.3,alpha:0.998},0).wait(1).to({x:416.1,alpha:1},0).wait(1).to({regX:246,regY:142,x:420.4,y:217.5},0).to({_off:true},1).wait(85));

	// midground
	this.instance_7 = new lib.Tween3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(684.5,257.5);

	this.instance_8 = new lib.Tween4("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(640.5,257.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},56).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:684.4},0).wait(1).to({startPosition:0},0).wait(1).to({x:684.3},0).wait(1).to({x:684.2},0).wait(1).to({x:684.1},0).wait(1).to({x:684},0).wait(1).to({x:683.8},0).wait(1).to({x:683.6},0).wait(1).to({x:683.4},0).wait(1).to({x:683.2},0).wait(1).to({x:683},0).wait(1).to({x:682.8},0).wait(1).to({x:682.5},0).wait(1).to({x:682.2},0).wait(1).to({x:681.9},0).wait(1).to({x:681.6},0).wait(1).to({x:681.2},0).wait(1).to({x:680.9},0).wait(1).to({x:680.5},0).wait(1).to({x:680.1},0).wait(1).to({x:679.6},0).wait(1).to({x:679.2},0).wait(1).to({x:678.7},0).wait(1).to({x:678.2},0).wait(1).to({x:677.7},0).wait(1).to({x:677.1},0).wait(1).to({x:676.5},0).wait(1).to({x:675.9},0).wait(1).to({x:675.3},0).wait(1).to({x:674.7},0).wait(1).to({x:674},0).wait(1).to({x:673.4},0).wait(1).to({x:672.7},0).wait(1).to({x:671.9},0).wait(1).to({x:671.2},0).wait(1).to({x:670.4},0).wait(1).to({x:669.6},0).wait(1).to({x:668.8},0).wait(1).to({x:668},0).wait(1).to({x:667.2},0).wait(1).to({x:666.4},0).wait(1).to({x:665.5},0).wait(1).to({x:664.6},0).wait(1).to({x:663.7},0).wait(1).to({x:662.8},0).wait(1).to({x:661.9},0).wait(1).to({x:661},0).wait(1).to({x:660.1},0).wait(1).to({x:659.2},0).wait(1).to({x:658.3},0).wait(1).to({x:657.4},0).wait(1).to({x:656.5},0).wait(1).to({x:655.6},0).wait(1).to({x:654.7},0).wait(1).to({x:653.8},0).wait(1).to({x:652.9},0).wait(1).to({x:652.1},0).wait(1).to({x:651.2},0).wait(1).to({x:650.4},0).wait(1).to({x:649.6},0).wait(1).to({x:648.8},0).wait(1).to({x:648.1},0).wait(1).to({x:647.4},0).wait(1).to({x:646.7},0).wait(1).to({x:646},0).wait(1).to({x:645.4},0).wait(1).to({x:644.8},0).wait(1).to({x:644.3},0).wait(1).to({x:643.8},0).wait(1).to({x:643.3},0).wait(1).to({x:642.8},0).wait(1).to({x:642.4},0).wait(1).to({x:642.1},0).wait(1).to({x:641.7},0).wait(1).to({x:641.4},0).wait(1).to({x:641.2},0).wait(1).to({x:641},0).wait(1).to({x:640.8},0).wait(1).to({x:640.7},0).wait(1).to({x:640.6},0).wait(1).to({x:640.5},0).to({_off:true},1).wait(86));

	// background
	this.instance_9 = new lib.Symbol4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(555,200,1,1,0,0,0,554,200);

	this.instance_10 = new lib.Symbol3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(544,200,1,1,0,0,0,554,200);
	this.instance_10.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_10.cache(-2,-2,1112,404);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},56).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({x:554.9},0).wait(4).to({x:554.8},0).wait(2).to({x:554.7},0).wait(2).to({x:554.6},0).wait(2).to({x:554.5},0).wait(1).to({x:554.4},0).wait(2).to({x:554.3},0).wait(1).to({x:554.2},0).wait(1).to({x:554.1},0).wait(1).to({x:554},0).wait(1).to({x:553.9},0).wait(1).to({x:553.8},0).wait(1).to({x:553.7},0).wait(1).to({x:553.6},0).wait(1).to({x:553.5},0).wait(1).to({x:553.3},0).wait(1).to({x:553.2},0).wait(1).to({x:553.1},0).wait(1).to({x:552.9},0).wait(1).to({x:552.8},0).wait(1).to({x:552.6},0).wait(1).to({x:552.4},0).wait(1).to({x:552.3},0).wait(1).to({x:552.1},0).wait(1).to({x:551.9},0).wait(1).to({x:551.7},0).wait(1).to({x:551.5},0).wait(1).to({x:551.3},0).wait(1).to({x:551.1},0).wait(1).to({x:550.9},0).wait(1).to({x:550.7},0).wait(1).to({x:550.5},0).wait(1).to({x:550.3},0).wait(1).to({x:550.1},0).wait(1).to({x:549.9},0).wait(1).to({x:549.6},0).wait(1).to({x:549.4},0).wait(1).to({x:549.2},0).wait(1).to({x:549},0).wait(1).to({x:548.7},0).wait(1).to({x:548.5},0).wait(1).to({x:548.3},0).wait(1).to({x:548},0).wait(1).to({x:547.8},0).wait(1).to({x:547.6},0).wait(1).to({x:547.4},0).wait(1).to({x:547.2},0).wait(1).to({x:546.9},0).wait(1).to({x:546.7},0).wait(1).to({x:546.5},0).wait(1).to({x:546.3},0).wait(1).to({x:546.1},0).wait(1).to({x:546},0).wait(1).to({x:545.8},0).wait(1).to({x:545.6},0).wait(1).to({x:545.4},0).wait(1).to({x:545.3},0).wait(1).to({x:545.1},0).wait(1).to({x:545},0).wait(1).to({x:544.9},0).wait(1).to({x:544.7},0).wait(1).to({x:544.6},0).wait(1).to({x:544.5},0).wait(1).to({x:544.4},0).wait(2).to({x:544.3},0).wait(1).to({x:544.2},0).wait(2).to({x:544.1},0).wait(3).to({_off:true},1).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(371,198,1176,440);
// library properties:
lib.properties = {
	id: 'B271B3C9EC6B7A448A2657E6395F59D8',
	width: 800,
	height: 400,
	fps: 24,
	color: "#009966",
	opacity: 1.00,
	manifest: [
		{src:"images/Animation_HTML5 Canvas_atlas_.png?1553174848358", id:"Animation_HTML5 Canvas_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B271B3C9EC6B7A448A2657E6395F59D8'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;