(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HTML_setup_12_atlas_1", frames: [[1160,0,638,127],[0,129,98,33],[1800,0,196,66],[1800,68,196,66],[0,0,1158,127]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(ss["HTML_setup_12_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["HTML_setup_12_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["HTML_setup_12_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["HTML_setup_12_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["HTML_setup_12_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.walk_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}
	this.frame_22 = function() {
		var _this = this;
		_this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22).call(this.frame_22).wait(8));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiGBOQgUghgBgpIAAgHQABg+AtgtQAugtA/AAQBBAAAtAtQAuAuAABAQAABBguAtQgtAuhBAAQgGAAgHAA");
	this.shape.setTransform(72.6,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATCBIg1AAQgfgBgFgPQgBgJgCgEQgDgGgIgCIgPgBQgigDgfgdQgUgSgGgTQgEgJADgFQADgEAFAAQAFgBAFADQAFADAHAMQAUAdAhAKIAVAFQAMADAHAEQAKAFAGAIQAHAJgCAKIBcgEQADABACACQABADABAEQAAAFgCAEIgEAEQgHAGgPAAIgFAAgAA+ACQgHgGgFgIQgKgQgBgVIAAgEQABgVAKgRQAFgIAHgHIAIgHQAUgPAaAAQAgAAAWAWQAXAXAAAgQAAAIgBAHQgFAWgRAQQgWAXggAAQggAAgWgXg");
	this.shape_1.setTransform(52.0308,32.1313);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("AkcEdIAAo5II5AAIAAB9IAAAIIAABhQgKAQAAAVIAAAEQAAAUAKARIAAB0QgCgDgDgBIhcAFQABgLgHgIQgGgJgJgFQgIgEgMgDIgVgEQghgLgUgcQgHgMgFgDQgFgDgEAAQgGABgDADQgDAFAEAJQAGATAUATQAgAdAhACIAQABQAHADADAFQACAFABAJQAGAOAeACIA2AAQAUAAAHgGIAEgFIAACCg");
	this.shape_2.setTransform(28.5,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AjMGLIAAsVIGZAAIAAMVg");
	this.shape_3.setTransform(28.5,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AhyLLIAA2VIDlAAIAAWVg");
	this.shape_4.setTransform(28.55,-2.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("Ag2LLIAA2VIBtAAIAAWVg");
	this.shape_5.setTransform(28.55,-29.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3}]},7).to({state:[{t:this.shape_4}]},8).to({state:[{t:this.shape_5}]},7).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-100.9,89.2,170);


(lib.Target_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
	}
	this.frame_16 = function() {
		var _this = this;
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,1,1).p("AEcAAQAAB2hTBTQhTBTh2AAQh1AAhUhTQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQBTBUAAB1g");
	this.shape.setTransform(139.05,133.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AlIFJQiIiIAAjBQAAi/CIiJQCJiIC/AAQDBAACHCIQCJCJAAC/QAADBiJCIQiHCIjBAAQi/AAiJiIgAkfgDQAAB1BSBTQBUBTB2ABQB1gBBThTQBUhTgBh1QABh2hUhUQhThSh1AAQh2AAhUBSQhSBUAAB2IAAAAgAjNDFQhShTAAh1QAAh2BShUQBUhSB2AAQB1AABTBSQBUBUgBB2QABB1hUBTQhTBTh1ABQh2gBhUhTgAEYgDIAAAAg");
	this.shape_1.setTransform(139.45,133.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(7,1,1).p("AEdAAQAAB2hUBTQhTBUh2AAQh1AAhThUQhUhTAAh2QAAh1BUhUQBThTB1AAQB2AABTBTQBUBUAAB1g");
	this.shape_2.setTransform(93.05,121.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AlIFJQiIiJAAjAQAAi/CIiIQCIiJDAAAQDBAACHCJQCJCIAAC/QAADAiJCJQiHCIjBAAQjAAAiIiIgAkfgDQAAB1BTBTQBTBUB2AAQB1AABThUQBThTABh1QgBh2hThTQhThTh1gBQh2ABhTBTQhTBTAAB2IAAAAgAjMDFQhThTAAh1QAAh2BThTQBThTB2gBQB1ABBTBTQBTBTABB2QgBB1hTBTQhTBUh1AAQh2AAhThUgAEZgDIAAAAg");
	this.shape_3.setTransform(93.45,121.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(7,1,1).p("AEdAAQAAB2hUBTQhTBUh2AAQh1AAhUhUQhShTAAh2QAAh1BShUQBUhTB1AAQB2AABTBTQBUBUAAB1g");
	this.shape_4.setTransform(66.05,101.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("AlIFJQiIiJAAjAQAAi/CIiIQCIiJDAAAQDBAACHCJQCJCIAAC/QAADAiJCJQiHCIjBAAQjAAAiIiIgAkfgDQAAB1BSBTQBUBTB2AAQB1AABThTQBThTABh1QgBh2hThUQhThTh1AAQh2AAhUBTQhSBUAAB2IAAAAgAjNDFQhShTAAh1QAAh2BShUQBUhTB2AAQB1AABTBTQBTBUABB2QgBB1hTBTQhTBTh1AAQh2AAhUhTgAEZgDIAAAAg");
	this.shape_5.setTransform(66.45,101.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(7,1,1).p("AEdAAQAAB2hUBTQhTBUh2AAQh1AAhThUQhThTAAh2QAAh1BThTQBThTB1AAQB2AABTBTQBUBTAAB1g");
	this.shape_6.setTransform(54.1,68.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066CC").s().p("AlHFJQiJiIAAjBQAAi/CJiJQCHiIDAAAQDAAACJCIQCICJAAC/QAADBiICIQiJCIjAAAQjAAAiHiIgAkggDQAAB1BTBTQBUBTB2ABQB1gBBThTQBUhTgBh1QABh2hUhTQhThTh1AAQh2AAhUBTQhTBTAAB2IAAAAgAjNDFQhThTAAh1QAAh2BThTQBUhTB2AAQB1AABTBTQBUBTgBB2QABB1hUBTQhTBTh1ABQh2gBhUhTgAEYgDIAAAAg");
	this.shape_7.setTransform(54.5,68.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("AlHFJQiJiJAAjAQAAi/CJiIQCHiJDAAAQDBAACICJQCICIAAC/QAADAiICJQiICIjBAAQjAAAiHiIgAkggDQAAB1BTBTQBUBTB2AAQB1AABThTQBThTAAh1QAAh2hThUQhThTh1AAQh2AAhUBTQhTBUAAB2IAAAAgAjNDFQhThTAAh1QAAh2BThUQBUhTB2AAQB1AABTBTQBTBUAAB2QAAB1hTBTQhTBTh1AAQh2AAhUhTgAEYgDIAAAAg");
	this.shape_8.setTransform(46.5,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape_5},{t:this.shape_4}]},4).to({state:[{t:this.shape_7},{t:this.shape_6,p:{x:54.1,y:68.1}}]},4).to({state:[{t:this.shape_8},{t:this.shape_6,p:{x:46.1,y:46.1}}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,180);


(lib.idle_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAKApQgSghgBgoIAAgI");
	this.shape.setTransform(58.025,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AkdEdIAAo5II5AAIAAB9IAAAIIAABhQgKAQgBAVIAAAEQABAUAKARIAAB0QACACAAAEQAAAGgCADIAACCgAhuBdQgJABgFAIQgGAIAGAFIALAFQASAEASATQAJAMASAYQARAUAQAGQAIADAQgBIB5ACQAMAAAFgDQAEgCADgFIAGgJIAKgJQAIgFADgEQAEgGgBgIQgCgIgHAAQgJgBgMAMQgOAOgGACQgGADgNgBIhuAAQgJABgEgCQgHgCgKgMIgfgmQgbghgWAAIgDAAgAgjhhIgIAHQgHAIgFAIQgKARgBAUIAAAEQABAVAKAQQAFAIAHAGQAWAXAfAAQAgAAAWgXQARgQAFgVQABgIAAgIQAAgggXgXQgWgWggAAQgZAAgUAPg");
	this.shape_1.setTransform(28.6042,31.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTCfQgRAAgIgCQgQgGgRgUQgSgZgJgLQgSgTgSgEIgLgFQgGgGAGgHQAFgIAJgBQAYgCAcAjIAfAmQAKAMAHACQAEABAKAAIBtAAQANAAAGgCQAGgDAOgNQAMgMAJABQAHAAACAIQABAIgEAGQgDAEgIAFIgKAJIgGAJQgDAFgEACQgFADgMAAgAhGgdQgHgHgFgIQgKgQgBgVIAAgEQABgVAKgQQAFgJAHgHIAIgHQAUgPAaAAQAfAAAWAWQAXAXAAAgQAAAIgBAHQgFAWgRARQgWAXgfAAQggAAgWgXg");
	this.shape_2.setTransform(31.3372,36.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgkBOQgNgggBgnIAAgOQACg7AdgsQAdgqApgDAAzCcQgCAAgCAA");
	this.shape_3.setTransform(55.925,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNCfQgLAAgGgCQgLgGgMgUIgTgkQgMgTgMgEIgIgFQgEgGAEgHQADgIAGgBQARgCATAjIAWAmQAHAMAFACQADABAGAAIBLAAQAKAAAEgCQAEgDAKgNQAIgMAGABQAFAAABAIQABAIgDAGIgHAJIgHAJIgFAJQgCAFgCACQgEADgIAAgAgwgdQgFgHgEgIQgHgQAAgVIAAgEQAAgVAHgQQAEgJAFgHIAGgHQANgPASAAQAVAAAQAWQAQAXAAAgIgBAPQgDAWgMARQgQAXgVAAQgWAAgPgXg");
	this.shape_4.setTransform(33.0434,36.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("AjFEdIAAo5IGJAAIAAB5IAAAPIAABeQgGAQgBAVIAAAEQABAUAGARIAAB0QACACAAAEQAAAGgCADIAACCgAhMBdQgGABgDAIQgFAIAEAFIAJAFQAMAEAMATIATAkQALAUAMAGQAFADALgBIBUACQAIAAAEgDQACgCACgFIAFgJIAHgJIAHgJQADgGgBgIQgCgIgEAAQgHgBgIAMQgJAOgEACQgFADgJgBIhMAAQgFABgDgCQgFgCgHgMIgWgmQgSghgQAAIgCAAgAgXhhIgHAHQgEAIgEAIQgHARAAAUIAAAEQAAAVAHAQQAEAIAEAGQAQAXAVAAQAWAAAQgXQALgQADgVIABgQQAAgggPgXQgQgWgWAAQgRAAgNAPg");
	this.shape_5.setTransform(31.15,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},10).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.9,62.1,60.6);


(lib.hit_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(25.95,-91.6,0.301,0.301);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgYGxIAAthIAxAA");
	this.shape.setTransform(-2.475,-72.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AzNGxIAAtgMAmbAAAIAANgg");
	this.shape_1.setTransform(122.975,-72.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hit_MC, new cjs.Rectangle(-5.9,-116.9,251.9,88.5), null);


(lib.Ball01_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
	}
	this.frame_18 = function() {
		var _this = this;
		_this.stop();
		_this.parent.climb.gotoAndPlay(43);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-12.45,83.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(18));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AjfFfQglgYghghQhXhYgYhwQgLgtAAgxQAAihBsh1IAOgPQAZgYAagTQBohPCKAAQCKAABqBPQAZATAZAYIAOAPQBrB1AAChQAAAxgJAtQgYBwhYBYQghAhglAYQhjBAh9AAQh9AAhihAg");
	this.shape.setTransform(41.55,41.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("AjUFOQgjgWggggQhThUgWhqQgLgrABgvQgBiZBnhwIANgOQAXgXAZgSQBkhLCDABQCEgBBlBLQAXASAYAXIAOAOQBlBwABCZQAAAvgJArQgYBqhTBUQggAggjAWQheA+h3AAQh2AAheg+g");
	this.shape_1.setTransform(52.6,-29.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("Ai5EkQgfgUgcgbQhIhJgUheQgIglgBgpQAAiGBahhIALgNQAVgTAWgRQBXhABygBQB0ABBXBAQAUARAWATIALANQBaBhAACGQAAApgJAlQgUBehIBJQgcAbgfAUQhRA1hpABQhogBhRg1g");
	this.shape_2.setTransform(76.6,-95.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("AieD6QgagRgYgYQg+g+gQhQQgIggAAgjQAAhyBMhTIAKgLQASgRASgOQBLg3BhgBQBjABBLA3QARAOATARIAKALQBMBTgBByQABAjgHAgQgSBQg9A+QgYAYgbARQhFAuhaAAQhYAAhGgug");
	this.shape_3.setTransform(102.6,-149.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FF").s().p("AiJDYQgWgOgUgVQg2g3gOhFQgIgbAAgeQAAhjBDhIIAJgJQAOgOARgMQBAgxBUAAQBWAABAAxIAgAaIAIAJQBBBIAABjQAAAegFAbQgPBFg1A3QgVAVgXAOQg9AnhNAAQhMAAg9gng");
	this.shape_4.setTransform(130.6,-196.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099FF").s().p("AhuCtQgSgLgRgRQgrgrgLg4QgGgWAAgYQAAhPA2g6IAGgHQANgMANgKQA0gnBDAAQBEAAA1AnIAZAWIAGAHQA1A6AABPQAAAYgEAWQgMA4grArQgRARgSALQgxAhg+AAQg9AAgxghg");
	this.shape_5.setTransform(158.65,-238.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099FF").s().p("AhYCMQgOgKgOgNQgigjgKgtQgEgSAAgTQAAg/ArgvIAFgGIAVgSQApgeA2AAQA4AAApAeIAVASIAFAGQArAvAAA/QAAATgEASQgKAtgiAjQgOANgPAKQgmAZgzAAQgxAAgngZg");
	this.shape_6.setTransform(167.65,-252.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_6}]},2).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-269,196.6,385.1);


(lib.climb_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
	}
	this.frame_17 = function() {
		/*var _this = this;
		
		
		_this.stop();
		_this.parent.targetMC.play();*/
	}
	this.frame_41 = function() {
		var _this = this;
		_this.stop();
		_this.parent.ball01.visible=true;
		_this.parent.targetMC.visible = true;
		_this.parent.targetMC.play();
	}
	this.frame_78 = function() {
		var _this = this;
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(24).call(this.frame_41).wait(37).call(this.frame_78).wait(3));

	// Layer_2
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-68.75,53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(80));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AATCBIg1AAQgfgBgFgPQgBgJgCgEQgDgGgIgCIgPgBQgigDgfgdQgUgSgGgTQgEgJADgFQADgEAFAAQAFgBAFADQAFADAHAMQAUAdAhAKIAVAFQAMADAHAEQAKAFAGAIQAHAJgCAKIBcgEQADABACADQACACAAAEQAAAFgCAEIgEAEQgHAGgPAAIgFAAgAA+ACQgHgGgFgIQgKgQgBgVIAAgEQABgVAKgQQAFgJAHgHIAIgHQAUgPAaAAQAgAAAWAWQAXAXAAAgQAAAIgBAHQgFAWgRAQQgWAXggAAQggAAgWgXg");
	this.shape.setTransform(7.9308,5.4813);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AkcEdIAAo5II5AAIAADmQgKARAAAUIAAAEQAAAUAKARIAAB0QgCgDgDgBIhdAFQACgLgHgIQgGgJgJgFQgIgDgMgEIgVgEQghgKgUgeQgHgLgFgDQgFgDgEAAQgGABgDADQgDAFAEAJQAGATAUATQAgAcAhADIAQABQAHACADAGQACAFABAJQAGAOAeABIA2AAQAUACAHgHIAEgFIAACCg");
	this.shape_1.setTransform(-15.6,1.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOChIgnAAQgXgBgEgTIgCgQQgCgIgGgCIgMgCQgZgDgYgkQgOgXgFgYQgDgLADgGQACgFAEAAQADgBAEAEQAEADAFAPQAPAlAZAMIAPAGQAJAEAGAEQAHAHAFAKQAEALgBANIBEgGQADABABAEQACADAAAFQAAAHgCAEIgCAFQgFAIgMAAIgEAAgAAuADQgFgIgEgKQgHgUgBgbIAAgFQABgZAHgVQAEgKAFgJIAGgJQAPgTAUAAQAXAAARAcQARAdAAAnIgBATQgDAcgNAUQgRAcgXAAQgYAAgRgcg");
	this.shape_2.setTransform(3.7682,-59.6393);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AjUFjIAArFIGpAAIAAEeQgHAVgBAZIAAAGQABAZAHAUIAACRQgBgDgDgBIhFAFQABgNgFgKQgEgLgIgGQgFgFgJgDIgPgHQgZgMgPgkQgFgQgFgDQgDgEgEABQgEABgBAFQgDAFADAMQAFAXAOAXQAYAkAZADIAMACQAFADADAHIACAQQAEATAXABIAoAAQAOABAHgIIACgGIAACig");
	this.shape_3.setTransform(-13.8,-64.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AmoD/IEZn9II4AAIhxDOQgSAPgLASIgCAEQgKARACAPIg5BoQAAgCgDgBIhfADQAHgIgCgIQgCgIgHgFIgRgGQgRgDgBgBQgcgIgGgbQgBgLgEgCQgDgDgFABQgGABgEADQgGAFAAAHQgEARALARQARAaAhACIAOABQAIACgBAFQAAAEgDAIQgDANAfABIA2AAQATABALgHIAFgDIhAB0g");
	this.shape_4.setTransform(-0.625,-126.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag4BzIg2AAQgfgBADgNQADgIAAgEQABgFgIgCIgOgBQghgCgRgaQgLgRAEgRQAAgHAGgFQAEgDAGgBQAFgBADADQAEADABALQAGAaAcAIQABABARAEIARAGQAHAFACAHQACAIgHAJIBfgEQADABAAADQABACgCADQgDAFgEADIgFAEQgJAGgQAAIgFgBgAAwACQgEgFgBgIQgCgOAKgTIACgEQALgSASgPQAJgHAKgHIAMgGQAcgOAaAAQAfAAAMAUQALAVgPAcIgJAOQgQAUgZAOQgiAUgfAAQggAAgLgUg");
	this.shape_5.setTransform(22.3512,-122.9433);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag4ClIg2AAQgfgBADgTQADgMAAgFQABgIgIgCIgOgCQghgDgRglQgLgYAEgYQAAgLAGgGQAEgFAGgBQAFgCADAFQAEADABAQQAGAlAcAMQABACARAFIARAIQAHAIACAKQACALgHANIBfgGQADACAAAEQABADgCAFQgDAGgEAFIgFAFQgJAJgQAAIgFgBgAAwADQgEgIgBgLQgCgUAKgcIACgFQALgaASgVQAJgLAKgJIAMgJQAcgUAaAAQAfAAAMAdQALAdgPApIgJAUQgQAcgZAVQgiAcgfAAQggAAgLgcg");
	this.shape_6.setTransform(95.3012,-146.5898);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066CC").s().p("AmoFsIEZrYII4AAIhxEnQgSAUgLAbIgCAFQgKAaACAVIg5CWQAAgEgDgCIhfAGQAHgNgCgLQgCgLgHgHIgRgJQgRgFgBgBQgcgMgGglQgBgQgEgEQgDgEgFACQgGABgEAEQgGAHAAAKQgEAZALAYQARAkAhADIAOACQAIADgBAIQAAAFgDAMQgDASAfACIA2AAQATACALgKIAFgFIhAClg");
	this.shape_7.setTransform(72.325,-151.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("AkcEdIAAo5II5AAIAADmQgKAQAAAVIAAAEQAAAUAKAQIAAB1QgCgDgDgBIhdAEQACgJgGgKQgHgIgJgFQgIgEgMgDIgVgEQghgLgTgdQgIgMgFgCQgFgEgFABQgFAAgDAFQgCAEADAJQAGATAUASQAfAeAiACIAPABQAJADACAFQACAFACAIQAFAQAeAAIA3AAQASABAJgGIADgFIAACCg");
	this.shape_8.setTransform(135.8,-145.5);

	this.idling = new lib.idle_MC();
	this.idling.name = "idling";
	this.idling.setTransform(157.25,-145.5,1,1,0,0,0,29.8,31.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAKApQgSghgBgoIAAgI");
	this.shape_9.setTransform(185.025,-157.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTCfQgRAAgIgCQgQgGgRgUQgSgZgJgLQgSgTgSgEIgLgFQgGgGAGgHQAFgIAJgBQAYgCAcAjIAfAmQAKAMAHACQAEABAKAAIBtAAQANAAAGgCQAGgDAOgNQAMgMAJABQAHAAACAIQABAIgEAGQgDAEgIAFIgKAJIgGAJQgDAFgEACQgFADgMAAgAhGgdQgHgHgFgIQgKgQgBgVIAAgEQABgVAKgQQAFgJAHgHIAIgHQAUgPAaAAQAfAAAWAWQAXAXAAAgQAAAIgBAHQgFAWgRARQgWAXgfAAQggAAgWgXg");
	this.shape_10.setTransform(158.3372,-140.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066CC").s().p("AkdEdIAAo5II5AAIAAB9IAAAIIAABhQgKAQgBAVIAAAEQABAUAKAQIAAB1QACADAAADQAAAFgCAEIAACCgAhuBdQgJABgFAIQgGAHAGAGIALAFQASAEASAUQAJAKASAZQARAVAQAFQAIACAQABIB5ABQAMAAAFgDQAEgCADgFIAGgJIAKgJQAIgFADgEQAEgGgBgIQgCgIgHAAQgJgBgMAMQgOAOgGACQgGACgNABIhuAAQgJgBgEgBQgHgCgKgMIgfgmQgbghgWAAIgDAAgAgjhhIgIAIQgHAGgFAJQgKARgBAUIAAAEQABAVAKAPQAFAIAHAIQAWAWAfAAQAgAAAWgWQARgSAFgUQABgIAAgIQAAgggXgWQgWgXggAAQgZAAgUAPg");
	this.shape_11.setTransform(155.6042,-145.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAKA/QgSgxgBg7QAAgDAAgBIAAgN");
	this.shape_12.setTransform(185.025,-108.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTDzQgRAAgIgEQgQgIgRgfQgSgmgJgRQgSgdgSgGQgKgGgBgCQgGgIAGgMQAFgMAJgCQAYgDAcA2IAfA6QAKASAHADQAEACAKAAIBtAAQANAAAGgDQAGgEAOgVQAMgRAJAAQAHAAACANQABAMgEAJQgDAGgIAIIgKANIgGAOQgDAIgEADQgFAFgMAAgAhGgsQgHgLgFgMQgKgZgBggIAAgHQABgfAKgZQAFgNAHgLIAIgLQAUgXAaAAQAfAAAWAiQAXAjAAAxQAAAMgBALQgFAigRAaQgWAigfAAQggAAgWgig");
	this.shape_13.setTransform(158.3372,-83.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066CC").s().p("AkdGzIAAtlII5AAIAAC/IAAAMIAAAEIAACQQgKAagBAeIAAAHQABAfAKAZIAACyQACADAAAHQAAAHgCAHIAADFgAhuCOQgJABgFANQgGALAGAJQABABAKAHQASAGASAdQAJARASAmQARAeAQAJQAIAEAQAAIB5ADQAMAAAFgGQAEgDADgHIAGgOIAKgOQAIgHADgGQAEgKgBgMQgCgMgHAAQgJgBgMASQgOAVgGADQgGAEgNAAIhuAAQgJAAgEgCQgHgDgKgTIgfg5QgbgzgWAAIgDAAgAgjiUIgIALQgHALgFANQgKAZgBAfIAAAHQABAfAKAYQAFANAHALQAWAiAfAAQAgAAAWgiQARgaAFghQABgLAAgNQAAgwgXgjQgWgjggAAQgZAAgUAYg");
	this.shape_14.setTransform(155.6042,-90.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAKA/QgSgxgBg7QAAgCAAgCIAAgN");
	this.shape_15.setTransform(185.025,-65.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066CC").s().p("AkdGzIAAtlII5AAIAAC/IAAAMIAAAEIAACRQgKAZgBAeIAAAHQABAfAKAZIAACyQACAEAAAGQAAAHgCAHIAADFgAhuCOQgJACgFAMQgGALAGAJQABABAKAHQASAGASAdQAJARASAmQARAfAQAIQAIAEAQAAIB5ADQAMAAAFgGQAEgCADgIIAGgOIAKgNQAIgIADgHQAEgIgBgNQgCgMgHAAQgJAAgMARQgOAVgGADQgGAEgNAAIhuAAQgJAAgEgCQgHgDgKgTIgfg5QgbgzgWAAIgDAAgAgjiUIgIALQgHALgFAMQgKAagBAfIAAAGQABAhAKAYQAFAMAHAKQAWAjAfAAQAgAAAWgjQARgZAFghQABgMAAgMQAAgwgXgjQgWgigggBQgZAAgUAYg");
	this.shape_16.setTransform(155.6042,-47.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("AARAmQgegdgDgkQAAgCAAgBIAAgH");
	this.shape_17.setTransform(202.15,-12.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfCUQgbAAgNgCQgagFgbgTIgsgiQgcgRgdgEQgRgEgBgBQgJgFAJgHQAIgIAOAAQAngCAsAgIAzAkQAQALALACIAWABICvAAQAWAAAKgCQAJgDAXgMQASgLAPABQALAAADAHQACAIgHAFQgFAEgMAFIgQAIIgKAIQgFAFgFACQgJADgTAAgAhxgbQgMgGgIgIQgQgPgBgTIAAgEQABgTAQgQQAIgHAMgHQAGgEAHgDQAggOAqAAQAxAAAlAVQAkAVAAAeQAAAHgCAHQgHAVgbAPQglAVgxAAQgzAAgkgVg");
	this.shape_18.setTransform(159.3283,2.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0066CC").s().p("AnKEJIAAoRIOSAAIAAB0IAAAIIAAACIAABYQgQAPgBATIAAAEQABATAQAPIAABsQADACAAAEQABAFgEADIAAB5gAixBXQgOAAgIAIQgJAHAJAEQABACARAEQAdADAcASIAsAiQAbASAaAFQANADAaAAIDCACQATAAAJgDQAFgDAFgEIAKgIIAQgIQAMgFAFgFQAHgEgCgIQgDgHgLAAQgPgBgSALQgXAMgJADQgKACgWAAIiwAAIgVgBQgLgCgQgMIgzgjQgqgfgkAAIgFABgAg4haQgHADgGAEQgMAGgIAIQgQAQgBASIAAAFQABATAQAOQAIAIAMAGQAkAVAyAAQAyAAAlgVQAbgPAHgUQACgHAAgHQAAgegkgVQglgVgyAAQgpAAggAOg");
	this.shape_19.setTransform(154.935,-1.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAUAfQgkgYgDgdQAAgBAAgBIAAgG");
	this.shape_20.setTransform(210.775,7.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AglB4QghAAgOgCQgfgEgggPIg1gbQgigOghgEIgWgEQgLgDALgHQAKgGAQAAQAugCA1AaIA9AeQATAIANACIAZABIDRAAQAagBAMgBQALgCAbgKQAWgJARAAQANAAAEAHQACAGgIAEQgGADgOAEIgUAHQgCAAgKAGQgFAEgGACQgLADgWAAgAiHgWQgOgFgJgGQgTgMgBgQIAAgDQABgPATgNQAJgGAOgGQAHgDAJgCQAmgMAyAAQA7AAArARQArARAAAZQAAAFgCAGQgJARggAMQgrASg7gBQg9ABgrgSg");
	this.shape_21.setTransform(159.8761,20.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066CC").s().p("AohDXIAAmtIQ+AAIAABeIAAAHIAAACIAABHQgTAMgBAQIAAACQABAPATANIAABXQAEADAAADQABADgFADIAABigAjTBGQgQABgKAGQgLAGALAEIAWADQAhAEAiAOIA1AbQAgAQAfADQAOADAgAAIDnACQAWAAALgDQAGgCAFgEQAKgGACgBIAUgGQAOgEAGgDQAIgFgCgFQgEgHgNAAQgRAAgWAJQgbAKgLABQgMACgaAAIjSAAIgYgBQgNgCgTgIIg9gdQgygZgsAAIgFAAgAhDhJQgJADgHADQgOAFgJAHQgTAMgBAPIAAADQABARATALQAJAGAOAFQArARA8AAQA8AAArgRQAggNAJgPQACgGAAgGQAAgYgrgRQgrgRg8AAQgxAAgmALg");
	this.shape_22.setTransform(154.6583,16.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAUAfQgkgXgDgdQAAgCAAAAIAAgH");
	this.shape_23.setTransform(210.775,-1.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066CC").s().p("AohDXIAAmtIQ+AAIAABeIAAAHIAAACIAABHQgTAMgBAQIAAACQABAPATANIAABYQAEACAAADQABADgFADIAABigAjTBGQgQABgKAGQgLAGALAEIAWADQAhAEAiAOIA1AbQAgAQAfADQAOADAgAAIDnACQAWAAALgDQAGgCAFgEQAKgGACgBIAUgGQAOgEAGgDQAIgFgCgFQgEgHgNAAQgRAAgWAJQgbAKgLABQgMACgaAAIjSAAIgYgBQgNgCgTgIIg9gdQgygZgsAAIgFAAgAhDhJQgJADgHADQgOAFgJAGQgTANgBAPIAAADQABARATALQAJAGAOAFQArARA8AAQA8AAArgRQAggNAJgPQACgGAAgGQAAgYgrgRQgrgRg8AAQgxAAgmALg");
	this.shape_24.setTransform(154.6583,7.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAQArQgcghgDgoQAAgCAAgBIAAgJ");
	this.shape_25.setTransform(200.25,-32.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeClQgaAAgMgDQgZgGgagVQgbgZgPgMQgbgTgbgFQgRgEgBgBQgJgFAJgIQAIgJANgBQAlgCArAkIAxAoQAPAMALADIAUAAICoAAQAVAAAKgCQAIgDAWgNQASgMAOAAQAKAAAEAJQABAIgGAGQgFAEgMAGQgLAFgEAEIgKAJQgEAFgFACQgJAEgSAAgAhtgeQgLgHgIgJQgPgQgBgWIAAgEQABgVAPgSQAIgIALgHQAGgFAHgEQAfgPAoAAQAvAAAjAYQAjAXAAAhQAAAIgCAIQgHAXgaARQgjAXgvAAQgxAAgjgXg");
	this.shape_26.setTransform(159.2576,-15.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0066CC").s().p("Am3EnIAApNINrAAIAACBIAAAJIAAADIAABiQgPARgBAUIAAAFQABAVAPARIAAB4QADADAAAEQABAFgEAEIAACGgAiqBhQgNAAgIAJQgJAIAJAFQABACARADQAbAFAbAUQAPALAbAaQAaAUAZAGQAMADAZAAIC6ACQASAAAJgDQAFgCAEgGIAKgJQAEgEALgFQAMgGAFgEQAGgFgBgJQgEgJgKAAQgOAAgSAMQgWANgIAEQgKACgVAAIipAAIgTgBQgLgDgPgMIgxgnQgogjgjAAIgFABgAg2hkQgHADgGAFQgLAHgIAJQgPARgBAVIAAAEQABAWAPAQQAIAIALAHQAjAYAwAAQAwAAAjgYQAagQAHgXQACgIAAgIQAAghgjgXQgjgYgwAAQgnAAgfAQg");
	this.shape_27.setTransform(155.0528,-20.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAKApQgSgfgBgmQAAgCAAgBIAAgJ");
	this.shape_28.setTransform(182.1,-71.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgSCfQgRAAgHgDQgQgFgQgUIgagkQgSgTgRgEIgLgFQgFgGAGgHQAEgJAIgBQAYgCAbAkIAeAmQAKALAGADIANABIBqAAQANAAAGgCQAFgDAOgNQALgMAJAAQAGAAADAJQAAAIgEAGIgKAJIgKAJIgGAIQgDAGgDACQgFADgLAAgAhEgdQgHgGgFgJQgJgQgBgVIAAgEQABgVAJgRQAFgIAHgHQAEgEAFgEQASgOAZAAQAeAAAWAWQAWAXAAAgQAAAIgCAHQgEAXgQAQQgWAWgeAAQgeAAgWgWg");
	this.shape_29.setTransform(156.3463,-54.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0066CC").s().p("AkTEdIAAo5IIlAAIAAB8IAAAJIAAAEIAABdQgKARgBAUIAAAFQABATAKARIAAB1QACABAAAGQAAAFgCADIAACBgAhrBdQgIABgEAJQgGAHAFAFIALAGQARADASAUIAaAjQAQAVAQAFQAHADAQAAIB1ACQALAAAFgEQADgCADgFIAGgJIAKgJIAKgJQAEgGAAgHQgDgJgGAAQgJAAgLALQgOAOgFACQgGACgNAAIhrAAIgMgBQgGgCgKgLIgegnQgaghgWAAIgDAAgAghhhQgFADgEAFQgHAHgFAIQgJARgBAUIAAAFQABAUAJAQQAFAIAHAHQAWAWAdAAQAfAAAWgWQAQgRAEgVQACgHAAgJQAAgggWgWQgWgXgfABQgYAAgSAOg");
	this.shape_30.setTransform(153.7042,-59.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:7.9308,y:5.4813}}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},4).to({state:[{t:this.shape_7},{t:this.shape_6}]},3).to({state:[{t:this.shape_8},{t:this.shape,p:{x:159.3308,y:-141.8687}}]},4).to({state:[{t:this.idling,p:{x:157.25,y:-145.5}}]},3).to({state:[{t:this.idling,p:{x:157.25,y:-145.5}}]},24).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_14},{t:this.shape_13,p:{y:-83.175}},{t:this.shape_12}]},3).to({state:[{t:this.shape_16},{t:this.shape_13,p:{y:-40.175}},{t:this.shape_15}]},5).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},4).to({state:[{t:this.shape_22},{t:this.shape_21,p:{y:20.1}},{t:this.shape_20}]},3).to({state:[{t:this.shape_24},{t:this.shape_21,p:{y:11.1}},{t:this.shape_23}]},4).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},10).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},3).to({state:[{t:this.idling,p:{x:153.85,y:-99.6}}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-187.7,282.5,273.79999999999995);


(lib.animations_MC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-49.95,38.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_1
	this.instance_1 = new lib.idle_MC();
	this.instance_1.setTransform(0.35,-4.95,1,1,0,0,0,29.8,31.2);

	this.instance_2 = new lib.walk_MC();
	this.instance_2.setTransform(14.35,-5.2,1,1,0,0,0,44.4,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-35.3,108.6,106.89999999999999);


// stage content:
(lib.HTML_setup_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
<script>
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		//stage.enableMouseOver();
		
		var _this = this;   
		
		
		_this.climb.visible=false;
		_this.box.visible=true;
		_this.tank.visible=true;
		_this.targetMC.visible=false;
		_this.ball01.visible=false;
		
		
		document.addEventListener('keydown', function(e) {
		    switch (e.keyCode) {
		        case 39: //right arrow
					_this.box.gotoAndStop(1);
					_this.box.x+=10;
					_this.box.scaleX = 1;
		            break;
		        case 37: //left arrow
					_this.box.gotoAndStop(1);
					_this.box.x-=10;
					_this.box.scaleX = -1;
					break;
			   
				}
		});
		
		document.addEventListener('keyup', function(e) {
		    switch (e.keyCode) {
		        case 39: //right arrow
					_this.box.gotoAndStop(0);
		            break;
		        case 37: //left arrow
					_this.box.gotoAndStop(0);
					break;
		    }
		});
		
		
		//******https://stackoverflow.com/questions/36496223/adobe-animate-cc-and-javascript-collision-detection
		
		_this.on("tick", update.bind(_this));
		function update() {
			var b1=_this.box.localToLocal(100, 0, _this.tank);
			if(_this.tank.hitTest(b1.x, b1.y)) {
				_this.box.y=700
				_this.box.visible = false;
				_this.climb.visible = true;
				_this.climb.play(0);
			}
		}
		
		
		
		
		
		//********Click on something -THIS WORKS*******************
		
		_this.ball01.addEventListener("click", clickie);
		
		function clickie () {
		 
		 _this.ball01.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Instructions
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(81.05,37.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// balls_MC
	this.ball01 = new lib.Ball01_MC();
	this.ball01.name = "ball01";
	this.ball01.setTransform(242.1,488.05,1,1,0,0,0,41.6,41.6);

	this.timeline.addTween(cjs.Tween.get(this.ball01).wait(1));

	// climb_MC
	this.climb = new lib.climb_MC();
	this.climb.name = "climb";
	this.climb.setTransform(382.25,314.85,1,1,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.climb).wait(1));

	// tank_MC
	this.tank = new lib.hit_MC();
	this.tank.name = "tank";
	this.tank.setTransform(535.7,318.9,1,1.6612,0,0,0,120.3,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.tank).wait(1));

	// Target_MC
	this.targetMC = new lib.Target_MC();
	this.targetMC.name = "targetMC";
	this.targetMC.setTransform(373.95,182,1,1,0,0,0,46.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.targetMC).wait(1));

	// Animations_MC
	this.box = new lib.animations_MC();
	this.box.name = "box";
	this.box.setTransform(131.25,331.35,1,1,0,0,0,0.3,-5);

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(481,337.9,180.39999999999998,224.70000000000005);
// library properties:
lib.properties = {
	id: '4F9D17A1FB078F418D6AF06EEB7A98AB',
	width: 800,
	height: 600,
	fps: 30,
	color: "#33FFCC",
	opacity: 1.00,
	manifest: [
		{src:"images/HTML_setup_12_atlas_1.png", id:"HTML_setup_12_atlas_1"}
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
an.compositions['4F9D17A1FB078F418D6AF06EEB7A98AB'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

