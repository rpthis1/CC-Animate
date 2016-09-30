(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1600,
	height: 904,
	fps: 1,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/back301.png", id:"back301"},
		{src:"images/bottom_frame.png", id:"bottom_frame"},
		{src:"images/buildings_power_slider_back.png", id:"buildings_power_slider_back"},
		{src:"images/energystar.png", id:"energystar"},
		{src:"images/foot3.png", id:"foot3"},
		{src:"images/footer_back.png", id:"footer_back"},
		{src:"images/iconfire.png", id:"iconfire"},
		{src:"images/iconwater.png", id:"iconwater"},
		{src:"images/left.png", id:"left"},
		{src:"images/left_original.png", id:"left_original"},
		{src:"images/map_original.png", id:"map_original"},
		{src:"images/metericondropshadow.png", id:"metericondropshadow"},
		{src:"images/building.png", id:"building"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/oracle_map3_small.png", id:"oracle_map3_small"},
		{src:"images/right_back.png", id:"right_back"},
		{src:"images/textbuilding301address.png", id:"textbuilding301address"},
		{src:"images/textbuilding301power.png", id:"textbuilding301power"},
		{src:"images/textbuildingpower.png", id:"textbuildingpower"},
		{src:"images/textbuildingtotalpower.png", id:"textbuildingtotalpower"},
		{src:"images/textbuildingsgassummary.png", id:"textbuildingsgassummary"},
		{src:"images/textbuildingsgasusage.png", id:"textbuildingsgasusage"},
		{src:"images/textbuildingspowersummary.png", id:"textbuildingspowersummary"},
		{src:"images/textbuildingswatersummary.png", id:"textbuildingswatersummary"},
		{src:"images/textbuildingswaterusage.png", id:"textbuildingswaterusage"},
		{src:"images/textcampussubmeteredloads.png", id:"textcampussubmeteredloads"},
		{src:"images/textcampusutilitysummary.png", id:"textcampusutilitysummary"},
		{src:"images/textdemand.png", id:"textdemand"},
		{src:"images/texteui12months.png", id:"texteui12months"},
		{src:"images/texthvac.png", id:"texthvac"},
		{src:"images/textkitchen.png", id:"textkitchen"},
		{src:"images/textlabs.png", id:"textlabs"},
		{src:"images/textmtd.png", id:"textmtd"},
		{src:"images/textother.png", id:"textother"},
		{src:"images/textpersqft.png", id:"textpersqft"},
		{src:"images/textperson.png", id:"textperson"},
		{src:"images/textsite.png", id:"textsite"},
		{src:"images/textsorce.png", id:"textsorce"},
		{src:"images/textsubmeteredgasusage.png", id:"textsubmeteredgasusage"},
		{src:"images/textsubmeteredtotals.png", id:"textsubmeteredtotals"},
		{src:"images/textsubmeteredwaterusage.png", id:"textsubmeteredwaterusage"},
		{src:"images/texttoday.png", id:"texttoday"},
		{src:"images/texttotalcampusgasusage.png", id:"texttotalcampusgasusage"},
		{src:"images/texttotalcampuspower.png", id:"texttotalcampuspower"},
		{src:"images/texttotalcampuswaterusage.png", id:"texttotalcampuswaterusage"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.back301 = function() {
	this.initialize(img.back301);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,700);


(lib.bottom_frame = function() {
	this.initialize(img.bottom_frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1675,80);


(lib.buildings_power_slider_back = function() {
	this.initialize(img.buildings_power_slider_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1021,460);


(lib.energystar = function() {
	this.initialize(img.energystar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.foot3 = function() {
	this.initialize(img.foot3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,141);


(lib.footer_back = function() {
	this.initialize(img.footer_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1612,412);


(lib.iconfire = function() {
	this.initialize(img.iconfire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.iconwater = function() {
	this.initialize(img.iconwater);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.left = function() {
	this.initialize(img.left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.left_original = function() {
	this.initialize(img.left_original);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,940,560);


(lib.map_original = function() {
	this.initialize(img.map_original);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,190);


(lib.metericondropshadow = function() {
	this.initialize(img.metericondropshadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,89);


(lib.building = function() {
	this.initialize(img.building);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1700,678);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,284);


(lib.oracle_map3_small = function() {
	this.initialize(img.oracle_map3_small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,132);


(lib.right_back = function() {
	this.initialize(img.right_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,540);


(lib.textbuilding301address = function() {
	this.initialize(img.textbuilding301address);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,371,43);


(lib.textbuilding301power = function() {
	this.initialize(img.textbuilding301power);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,371,43);


(lib.textbuildingpower = function() {
	this.initialize(img.textbuildingpower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,421,33);


(lib.textbuildingtotalpower = function() {
	this.initialize(img.textbuildingtotalpower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,42);


(lib.textbuildingsgassummary = function() {
	this.initialize(img.textbuildingsgassummary);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,41);


(lib.textbuildingsgasusage = function() {
	this.initialize(img.textbuildingsgasusage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,33);


(lib.textbuildingspowersummary = function() {
	this.initialize(img.textbuildingspowersummary);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,42);


(lib.textbuildingswatersummary = function() {
	this.initialize(img.textbuildingswatersummary);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,42);


(lib.textbuildingswaterusage = function() {
	this.initialize(img.textbuildingswaterusage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,33);


(lib.textcampussubmeteredloads = function() {
	this.initialize(img.textcampussubmeteredloads);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,33);


(lib.textcampusutilitysummary = function() {
	this.initialize(img.textcampusutilitysummary);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,311,42);


(lib.textdemand = function() {
	this.initialize(img.textdemand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,38);


(lib.texteui12months = function() {
	this.initialize(img.texteui12months);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,33);


(lib.texthvac = function() {
	this.initialize(img.texthvac);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,73);


(lib.textkitchen = function() {
	this.initialize(img.textkitchen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,37);


(lib.textlabs = function() {
	this.initialize(img.textlabs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,38);


(lib.textmtd = function() {
	this.initialize(img.textmtd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,38);


(lib.textother = function() {
	this.initialize(img.textother);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,38);


(lib.textpersqft = function() {
	this.initialize(img.textpersqft);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,54);


(lib.textperson = function() {
	this.initialize(img.textperson);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,54);


(lib.textsite = function() {
	this.initialize(img.textsite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,38);


(lib.textsorce = function() {
	this.initialize(img.textsorce);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,54);


(lib.textsubmeteredgasusage = function() {
	this.initialize(img.textsubmeteredgasusage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,33);


(lib.textsubmeteredtotals = function() {
	this.initialize(img.textsubmeteredtotals);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,33);


(lib.textsubmeteredwaterusage = function() {
	this.initialize(img.textsubmeteredwaterusage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,33);


(lib.texttoday = function() {
	this.initialize(img.texttoday);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,38);


(lib.texttotalcampusgasusage = function() {
	this.initialize(img.texttotalcampusgasusage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,33);


(lib.texttotalcampuspower = function() {
	this.initialize(img.texttotalcampuspower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,33);


(lib.texttotalcampuswaterusage = function() {
	this.initialize(img.texttotalcampuswaterusage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,33);


(lib.VG_MC_campus_summary_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("Egr6gAPMAjUAAAEhCegE+MCE9AAAEhCdAE/MCE6AAAAjAgiMA9SAAA");
	this.shape.setTransform(464.5,33.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(191,192,225,0.098)").s().p("EhFgAE7IgBp1MCLDAAAIAAALMiE9AAAMCE9AAAIAAJqgAljAAMgjUAAAgEA9VgASMg9TAAAgEBFigEvg");
	this.shape_1.setTransform(445,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,891,66.1);


(lib.VG_MC_buildings_power_summ_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("ECB0AE6MicDAAAIgUAAAx4gdMBGvAAAEhNUgAkMAukAAAEh+egE5IaoAAMDlqAAAA6oE6IkFAAMhFJAAAI99AAEA+LgARMA3eAAA");
	this.shape.setTransform(830.9,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(191,192,225,0.098)").s().p("EgtsAE/IAAgJIEFAAIkFAAMhFIAAAIAApzIAAgCMDlqAAAIAAACMjlqAAAMDlqAAAIAAJzMicEAAAIgUAAIAUAAIAAAJgEBmqgAVMg3eAAAgEAl4gAhMhGvAAAgEgtvgAoMgukAAAgEBy2gE9g");
	this.shape_1.setTransform(926.8,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.8,1663.8,64.9);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgxBIIAAiNIAZAAIAAAPQAFgHAJgFQAIgFAJAAQASAAAMAOQANAOAAAZQAAAYgNAPQgMAOgSAAQgHAAgHgDQgHgEgIgIIAAA0gAgPgqQgHAIAAAPQAAASAHAGQAHAIAIAAQAJAAAHgHQAGgGAAgRQAAgRgGgIQgHgIgJAAQgJAAgGAIg");
	this.shape.setTransform(120.6,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgmAtQgJgJAAgNQAAgJAEgHQAEgHAIgBQAHgEAPgDQARgDAHgDIAAgDQAAgIgEgDQgDgEgJAAQgIAAgEADQgEADgCAHIgZgEQAEgPAKgHQAKgIAUAAQARAAAJAFQAJAEAEAHQADAGAAASIAAAeIABAUQACAHADAHIgbAAIgCgIIgBgDQgIAHgIADQgGAEgJAAQgQAAgJgJgAAAAGQgLACgDACQgGAEAAAGQAAAGAFAEQAEAEAHAAQAFAAAHgFQAFgDABgGIABgNIAAgGIgPAFg");
	this.shape_1.setTransform(108.7,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AAqBHIAAhuIgdBuIgZAAIgdhuIAABuIgbAAIAAiNIAsAAIAYBfIAZhfIAsAAIAACNg");
	this.shape_2.setTransform(94.8,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgeAtQgNgJgEgOIAbgFQACAIAGAFQAFAEAIAAQAKAAAGgEQADgDABgEQAAgEgCgCQgDgCgGgBQgggIgIgGQgNgGAAgPQAAgNALgKQAKgJAWAAQAUAAALAHQAKAHADAOIgZAEQgCgGgEgDQgFgDgIAAQgKAAgEADQgEACAAAEQAAADADACQAEACAUAFQAWAFAJAHQAIAGAAANQAAAOgMAKQgLALgYAAQgTAAgMgJg");
	this.shape_3.setTransform(75.1,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgeAwQgIgFgEgIQgDgJAAgOIAAg/IAbAAIAAAvQAAAUACAFQABAFAEADQAEACAGAAQAFAAAGgDQAFgEACgGQACgFAAgVIAAgrIAcAAIAABlIgaAAIAAgPQgGAIgIAEQgIAFgKABQgLAAgIgFg");
	this.shape_4.setTransform(63.7,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgxBIIAAiNIAZAAIAAAPQAFgHAJgFQAIgFAJAAQASAAAMAOQANAOAAAZQAAAYgNAPQgMAOgSAAQgHAAgHgDQgHgEgIgIIAAA0gAgPgqQgHAIAAAPQAAASAHAGQAHAIAIAAQAJAAAHgHQAGgGAAgRQAAgRgGgIQgHgIgJAAQgJAAgGAIg");
	this.shape_5.setTransform(51.8,16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AAwA1IAAg6QAAgPgDgFQgDgFgIgBQgGAAgFAEQgFADgCAIQgDAGAAAMIAAAzIgZAAIAAg4QAAgPgCgEQgBgEgDgCQgDgDgGAAQgGAAgFAEQgFADgCAHQgCAGAAANIAAAzIgcAAIAAhmIAZAAIAAAOQAOgRATAAQAKAAAHAEQAFAFAFAIQAHgIAIgFQAIgEAJAAQALABAIAEQAIAFAEAJQADAGAAAPIAABBg");
	this.shape_6.setTransform(36.4,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgmAtQgJgJAAgNQAAgJAEgHQAEgHAIgBQAHgEAPgDQARgDAHgDIAAgDQAAgIgEgDQgDgEgJAAQgIAAgEADQgEADgCAHIgZgEQAEgPAKgHQAKgIAUAAQARAAAJAFQAJAEAEAHQADAGAAASIAAAeIABAUQACAHADAHIgbAAIgCgIIgBgDQgIAHgIADQgGAEgJAAQgQAAgJgJgAAAAGQgLACgDACQgGAEAAAGQAAAGAFAEQAEAEAHAAQAFAAAHgFQAFgDABgGIABgNIAAgGIgPAFg");
	this.shape_7.setTransform(22,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AgrA2QgSgUAAgiQAAghASgUQATgTAcgBQAaAAAQAQQALAJAEASIgcAGQgDgLgIgGQgIgHgLAAQgPAAgJALQgKAMAAAZQAAAZAKAMQAJAMAOAAQAMAAAIgHQAIgIADgQIAdAJQgHAYgOALQgQAMgWAAQgcgBgSgTg");
	this.shape_8.setTransform(9.2,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.7,26.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsBAIAAh+IAaAAIAABoIA/AAIAAAWg");
	this.shape.setTransform(33.9,339.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAqAAQAWAAAHACQALADAIAKQAHAJAAAQQAAALgFAJQgEAGgHAEQgGAFgHACQgKACgPgBIgRAAIAAAxgAgWgEIAOAAQAOgBAFgCQAFgCADgEQADgEAAgGQAAgHgEgFQgFgEgGgBIgRgBIgMAAg");
	this.shape_1.setTransform(22.3,339.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsAxQgRgSAAgfQAAgRAFgNQAFgLAIgHQAIgIAIgEQAMgFAPAAQAcAAARASQARARAAAeQAAAfgRASQgRARgcAAQgcAAgQgRgAgYgfQgKAKAAAVQAAAWAKALQAKALAOAAQAPAAAKgLQAKgLAAgWQAAgVgKgLQgKgLgPAAQgPAAgJAMg");
	this.shape_2.setTransform(9.1,339.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAqAAQAVAAAIACQALADAHAKQAIAJAAAQQAAAMgEAIQgFAGgHAFQgGAEgHACQgJACgQAAIgRAAIAAAwgAgWgFIAPAAQANAAAFgCQAFgCADgEQADgEAAgGQAAgHgEgFQgEgEgHgBIgRgBIgMAAg");
	this.shape_3.setTransform(52.3,312);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsAxQgRgSAAgfQAAgRAGgNQAEgLAIgHQAHgIAKgEQAMgFAOAAQAbAAASASQARARAAAeQAAAfgRASQgRARgcAAQgbAAgRgRgAgYggQgLALABAVQgBAWALALQAKALAOAAQAPAAAKgLQAKgMAAgVQAAgVgKgLQgJgLgQAAQgOAAgKALg");
	this.shape_4.setTransform(39.1,312);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_5.setTransform(26.9,312);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_6.setTransform(16.9,312);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAyQgMgPAAgiQAAgiAMgPQAOgQATAAQAOAAAKAIQAKAIADAQIgZADQgBgIgDgDQgEgEgFAAQgHAAgFAHQgGAHgBAWQAKgKALAAQAQAAALALQALAKgBATQAAAUgLALQgMAMgRAAQgSAAgNgPgAgJADQgEAGAAALQgBAMAGAGQAFAHAGAAQAGAAAFgFQAFgGgBgMQAAgNgEgFQgFgEgHAAQgGAAgFADg");
	this.shape_7.setTransform(7.1,312);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAqAAQAVAAAIACQALADAHAJQAIALAAAPQAAAMgEAHQgFAHgHAFQgGAEgHACQgJACgQAAIgRAAIAAAwgAgWgFIAPAAQANAAAFgCQAFgCADgEQADgEAAgGQAAgHgEgFQgEgEgHgBIgRgBIgMAAg");
	this.shape_8.setTransform(43.3,284.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMBAIAAh/IAYAAIAAB/g");
	this.shape_9.setTransform(34.6,284.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AADBAIAAhbQgMANgSAGIAAgXQAKgDALgIQAKgJAEgMIAUAAIAAB/g");
	this.shape_10.setTransform(26.3,284.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_11.setTransform(16.9,284.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcA2QgMgJgCgQIAZgDQABAIAFAGQAFAEAGAAQAHAAAFgGQAGgGAAgNQAAgLgGgHQgFgDgHAAQgKAAgJAHIgUgDIANhBIA/AAIAAAXIgsAAIgEAWQAIgEAHAAQAQAAALAMQAMAKAAATQAAAPgJANQgNARgVAAQgRAAgLgKg");
	this.shape_12.setTransform(7.1,285.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAqAAQAVAAAIACQALADAHAJQAIALAAAPQAAAMgEAHQgFAHgHAFQgGAEgHABQgJADgQAAIgRAAIAAAwgAgWgFIAPAAQANAAAFgCQAFgCADgEQADgEAAgGQAAgHgEgEQgEgFgHgBIgRgBIgMAAg");
	this.shape_13.setTransform(52.3,257.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsAwQgRgRAAgeQAAgSAGgOQAEgJAIgJQAHgHAKgEQAMgFAOAAQAbAAASARQARATAAAdQAAAfgRARQgRASgcAAQgbAAgRgSgAgYggQgLALABAVQgBAWALALQAKALAOAAQAPAAAKgLQAKgMAAgVQAAgVgKgLQgJgLgQAAQgOAAgKALg");
	this.shape_14.setTransform(39.1,257.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_15.setTransform(26.9,257.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_16.setTransform(16.9,257.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcA2QgMgJgCgQIAZgDQABAIAFAGQAFAEAGAAQAHAAAFgGQAGgGAAgNQAAgLgGgHQgFgDgHAAQgKAAgJAHIgUgDIANhBIA/AAIAAAXIgsAAIgEAWQAIgEAHAAQAQAAALAMQAMAKAAATQAAAPgJANQgNARgVAAQgRAAgLgKg");
	this.shape_17.setTransform(7.1,258);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAqAAQAVAAAIACQALADAHAJQAIAKAAAQQAAALgEAIQgFAHgHAFQgGAEgHABQgJACgQABIgRAAIAAAwgAgWgFIAPAAQANAAAFgBQAFgCADgFQADgEAAgGQAAgHgEgEQgEgFgHgBIgRgBIgMAAg");
	this.shape_18.setTransform(43.3,230.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgMBAIAAh/IAYAAIAAB/g");
	this.shape_19.setTransform(34.6,230.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AADBAIAAhbQgMANgSAGIAAgXQAKgDALgIQAKgJAEgMIAUAAIAAB/g");
	this.shape_20.setTransform(26.3,230.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_21.setTransform(16.9,230.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAGBAIAAgaIgzAAIAAgVIA2hQIAVAAIAABQIAQAAIAAAVIgQAAIAAAagAgWARIAcAAIAAgqg");
	this.shape_22.setTransform(7,230.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAqAAQAVAAAIACQALADAHAJQAIALAAAPQAAAMgEAHQgFAHgHAFQgGAEgHABQgJACgQAAIgRAAIAAAxgAgWgFIAPAAQANAAAFgBQAFgCADgFQADgEAAgGQAAgHgEgEQgEgFgHgBIgRgBIgMAAg");
	this.shape_23.setTransform(52.3,203.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgsAwQgRgRAAgeQAAgTAGgNQAEgJAIgJQAHgHAKgEQAMgFAOAAQAbAAASARQARATAAAdQAAAfgRARQgRASgcAAQgbAAgRgSgAgYggQgLAMABAUQgBAWALAKQAKAMAOAAQAPAAAKgLQAKgLAAgWQAAgVgKgLQgJgLgQAAQgOAAgKALg");
	this.shape_24.setTransform(39.1,203.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_25.setTransform(26.9,203.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_26.setTransform(16.9,203.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAGBAIAAgaIgzAAIAAgVIA2hQIAVAAIAABQIAQAAIAAAVIgQAAIAAAagAgWARIAcAAIAAgqg");
	this.shape_27.setTransform(7,203.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAqAAQAVAAAIACQALADAHAJQAIALAAAPQAAALgEAIQgFAHgHAEQgGAFgHABQgJACgQAAIgRAAIAAAxgAgWgEIAPAAQANAAAFgCQAFgCADgFQADgEAAgGQAAgHgEgEQgEgFgHgBIgRgBIgMAAg");
	this.shape_28.setTransform(52.3,176.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgsAwQgRgRAAgeQAAgTAGgMQAEgKAIgJQAHgHAKgEQAMgFAOAAQAbAAASARQARASAAAeQAAAfgRARQgRASgcAAQgbAAgRgSgAgYgfQgLALABAUQgBAVALALQAKAMAOAAQAPAAAKgLQAKgLAAgWQAAgVgKgLQgJgLgQAAQgOAAgKAMg");
	this.shape_29.setTransform(39.1,176.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_30.setTransform(26.9,176.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgcA3QgMgKgCgQIAZgCQABAHAFAFQAFAGAGAAQAHgBAFgGQAGgGAAgNQAAgLgGgHQgFgDgHgBQgKAAgJAIIgUgDIANhBIA/AAIAAAXIgsAAIgEAWQAIgEAHAAQAQAAALALQAMALAAATQAAAQgJAMQgNARgVAAQgRAAgLgJg");
	this.shape_31.setTransform(17.1,176.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgcA3QgMgKgBgQIAXgDQACAJAFAFQAFAFAGAAQAGAAAGgGQAFgGAAgJQAAgKgFgFQgFgGgHAAQgDAAgHACIADgSQAIAAAFgEQAGgFAAgIQAAgGgEgEQgEgEgFAAQgGAAgEAFQgFAEgBAIIgXgDQADgMAFgHQAEgHAJgEQAIgEALAAQAQAAALALQAJAKAAAMQAAARgSAKQALACAHAHQAGAIAAAMQAAARgMALQgNAMgRAAQgRAAgLgKg");
	this.shape_32.setTransform(7,176.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAqAAQAVAAAIACQALADAHAKQAIAKAAAPQAAALgEAJQgFAGgHAEQgGAFgHABQgJACgQAAIgRAAIAAAxgAgWgEIAPAAQANAAAFgCQAFgDADgEQADgEAAgGQAAgHgEgFQgEgEgHgBIgRgBIgMAAg");
	this.shape_33.setTransform(43.3,149.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgMBAIAAh/IAYAAIAAB/g");
	this.shape_34.setTransform(34.6,149.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AADBAIAAhbQgMANgSAGIAAgXQAKgDALgIQAKgJAEgMIAUAAIAAB/g");
	this.shape_35.setTransform(26.3,149.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_36.setTransform(16.9,149.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgcA3QgMgKgBgQIAXgDQACAJAFAFQAFAFAGAAQAGAAAGgGQAFgGAAgJQAAgKgFgFQgFgGgHAAQgDAAgHACIADgSQAIAAAFgEQAGgFAAgIQAAgGgEgEQgEgEgFAAQgGAAgEAFQgFAEgBAIIgXgDQADgMAFgHQAEgHAJgEQAIgEALAAQAQAAALALQAJAKAAAMQAAARgSAKQALACAHAHQAGAIAAAMQAAARgMALQgNAMgRAAQgRAAgLgKg");
	this.shape_37.setTransform(7,149.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAqAAQAVAAAIACQALADAHAKQAIAKAAAPQAAALgEAJQgFAGgHAEQgGAFgHACQgJABgQAAIgRAAIAAAxgAgWgEIAPAAQANAAAFgDQAFgBADgFQADgEAAgGQAAgHgEgFQgEgEgHgBIgRgBIgMAAg");
	this.shape_38.setTransform(52.3,122.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgsAxQgRgSAAgfQAAgRAGgNQAEgLAIgHQAHgIAKgEQAMgFAOAAQAbAAASASQARASAAAdQAAAfgRASQgRARgcAAQgbAAgRgRgAgYgfQgLAKABAVQgBAVALAMQAKALAOAAQAPAAAKgLQAKgMAAgVQAAgVgKgLQgJgLgQAAQgOAAgKAMg");
	this.shape_39.setTransform(39.1,122.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_40.setTransform(26.9,122.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_41.setTransform(16.9,122.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgcA3QgMgKgBgQIAXgDQACAJAFAFQAFAFAGAAQAGAAAGgGQAFgGAAgJQAAgKgFgFQgFgGgHAAQgDAAgHACIADgSQAIAAAFgEQAGgFAAgIQAAgGgEgEQgEgEgFAAQgGAAgEAFQgFAEgBAIIgXgDQADgMAFgHQAEgHAJgEQAIgEALAAQAQAAALALQAJAKAAAMQAAARgSAKQALACAHAHQAGAIAAAMQAAARgMALQgNAMgRAAQgRAAgLgKg");
	this.shape_42.setTransform(7,122.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAqAAQAVAAAIACQALADAHAKQAIAJAAAQQAAALgEAJQgFAGgHAEQgGAFgHACQgJABgQAAIgRAAIAAAxgAgWgEIAPAAQANgBAFgCQAFgCADgEQADgEAAgGQAAgHgEgFQgEgEgHgBIgRgBIgMAAg");
	this.shape_43.setTransform(52.3,95.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgsAxQgRgSAAgfQAAgRAGgNQAEgLAIgHQAHgIAKgEQAMgFAOAAQAbAAASASQARARAAAeQAAAfgRASQgRARgcAAQgbAAgRgRgAgYgfQgLAKABAVQgBAWALALQAKALAOAAQAPAAAKgLQAKgLAAgWQAAgVgKgLQgJgLgQAAQgOAAgKAMg");
	this.shape_44.setTransform(39.1,95.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_45.setTransform(26.9,95.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgcA3QgMgKgCgQIAZgDQABAJAFAFQAFAEAGAAQAHABAFgHQAGgGAAgNQAAgMgGgFQgFgFgHAAQgKAAgJAIIgUgDIANhBIA/AAIAAAXIgsAAIgEAWQAIgEAHAAQAQAAALALQAMALAAATQAAAPgJANQgNARgVAAQgRAAgLgJg");
	this.shape_46.setTransform(17.1,95.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgqBAQACgNAHgLQAHgMAUgTQAPgOAEgFQAFgIAAgIQAAgIgEgEQgFgFgIAAQgFAAgFAFQgFAFAAAKIgZgCQACgUAMgJQAMgJAPAAQATAAALAKQALAKAAAQQAAAIgDAIQgDAIgHAHIgQAQIgOAOIgEAHIAvAAIAAAXg");
	this.shape_47.setTransform(6.8,95.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAqAAQAVAAAIACQALADAHAKQAIAJAAAQQAAAMgEAIQgFAGgHAEQgGAFgHACQgJACgQAAIgRAAIAAAwgAgWgFIAPAAQANAAAFgCQAFgCADgEQADgEAAgGQAAgHgEgFQgEgEgHgBIgRgBIgMAAg");
	this.shape_48.setTransform(52.3,68.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgsAxQgRgSAAgfQAAgRAGgNQAEgLAIgHQAHgIAKgEQAMgFAOAAQAbAAASASQARARAAAeQAAAfgRASQgRARgcAAQgbAAgRgRgAgYggQgLALABAVQgBAWALALQAKALAOAAQAPAAAKgLQAKgMAAgVQAAgVgKgLQgJgLgQAAQgOAAgKALg");
	this.shape_49.setTransform(39.1,68.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_50.setTransform(26.9,68.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_51.setTransform(16.9,68.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgqBAQACgNAHgLQAHgMAUgTQAPgOAEgFQAFgIAAgIQAAgIgEgEQgFgFgIAAQgFAAgFAFQgFAFAAAKIgZgCQACgUAMgJQAMgJAPAAQATAAALAKQALAKAAAQQAAAIgDAIQgDAIgHAHIgQAQIgOAOIgEAHIAvAAIAAAXg");
	this.shape_52.setTransform(6.8,68);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAqAAQAVAAAIACQALADAHAJQAIALAAAPQAAAMgEAHQgFAHgHAFQgGAEgHACQgJACgQAAIgRAAIAAAwgAgWgFIAPAAQANAAAFgCQAFgCADgEQADgEAAgGQAAgHgEgFQgEgEgHgBIgRgBIgMAAg");
	this.shape_53.setTransform(52.3,41);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgsAwQgRgRAAgfQAAgRAGgOQAEgJAIgJQAHgHAKgEQAMgFAOAAQAbAAASASQARARAAAeQAAAfgRARQgRASgcAAQgbAAgRgSgAgYggQgLALABAVQgBAWALALQAKALAOAAQAPAAAKgLQAKgMAAgVQAAgVgKgLQgJgLgQAAQgOAAgKALg");
	this.shape_54.setTransform(39.1,41);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_55.setTransform(26.9,41);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_56.setTransform(16.9,41);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AADBAIAAhbQgMANgSAGIAAgXQAKgDALgIQAKgJAEgMIAUAAIAAB/g");
	this.shape_57.setTransform(6.3,40.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgkA3QgNgMgCgVIAZgDQADANAGAGQAIAGAKAAQAMAAAHgFQAGgGAAgHQAAgEgDgDQgDgEgHgCIgSgGQgVgFgJgFQgLgLgBgPQAAgKAHgJQAFgIALgFQAKgEAOAAQAXAAAMAKQAMALABASIgaABQgCgKgFgEQgGgFgJAAQgLAAgHAFQgDADAAAFQAAAEADAEQAGAEARAEQASAFAJAFQAJAEAGAHQAFAIAAAMQAAALgGAKQgHAKgLAEQgLAFgRAAQgXAAgNgLg");
	this.shape_58.setTransform(94.9,11.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgcA6QgQgJgHgQQgIgQAAgRQAAgTAJgPQAIgRAQgIQANgGAQAAQAYAAAOAKQANAKAEASIgaAEQgCgJgIgGQgHgFgMAAQgPAAgKALQgKALAAAVQAAAVAKALQALAMAOAAQAIAAAJgDQAIgDAGgFIAAgQIgeAAIAAgUIA4AAIAAAxQgIAIgQAGQgPAGgQAAQgSAAgPgIg");
	this.shape_59.setTransform(81.9,11.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAYBAIgxhSIAABSIgYAAIAAh/IAZAAIAzBUIAAhUIAXAAIAAB/g");
	this.shape_60.setTransform(68.5,11.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgMBAIAAh/IAYAAIAAB/g");
	this.shape_61.setTransform(59.6,11.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Ag1BAIAAh/IAwAAQAOAAAIADQAMADAIAIQAIAJAFAMQADAMAAARQAAAPgDAMQgFAOgJAJQgHAGgMAFQgIACgMAAgAgbAqIAUAAQAJAAAEgBQAHgBAEgEQAEgEADgJQACgIAAgPQAAgNgCgJQgDgHgFgFQgEgEgHgCQgFgBgPAAIgMAAg");
	this.shape_62.setTransform(50.7,11.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgsA/IAAh+IAaAAIAABpIA/AAIAAAVg");
	this.shape_63.setTransform(38.9,11.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_64.setTransform(30.6,11.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgZA9QgJgFgGgGQgGgHgBgHQgDgMAAgVIAAhDIAaAAIAABEQAAAQABAGQACAHAGAFQAGAFAJAAQALAAAGgFQAGgEABgGIABgXIAAhFIAaAAIAABCQAAAXgCAKQgCAJgGAHQgGAGgJAFQgKADgPAAQgQAAgKgEg");
	this.shape_65.setTransform(21.4,12);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("Ag0BAIAAh/IAzAAQAOAAAHACQAIABAFADQAGAFAFAGQAEAHAAAIQAAAKgGAHQgEAIgJADQAMADAHAHQAFAJABALQAAAIgFAJQgDAIgIAFQgHAFgKABQgHABgWAAgAgaAqIAYAAQAMAAADgBQAHgBADgDQAEgFAAgGQAAgGgDgFQgDgEgFgBQgFgCgQAAIgVAAgAgagMIARAAIARAAQAGgBAEgDQAEgFAAgFQAAgGgDgFQgDgDgHgBIgVAAIgOAAg");
	this.shape_66.setTransform(8.7,11.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#CCCCCC").ss(1,1,1).p("A2NAAMAsbAAA");
	this.shape_67.setTransform(146.3,26.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289.5,351.3);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.foot3();
	this.instance.setTransform(0,0,0.577,0.577);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AAYBZIAAhFQAAgUgCgEQgCgFgFgDQgFgDgHAAQgGAAgIAEQgGAEgDAHQgDAIAAAQIAABBIgjAAIAAixIAjAAIAABCQARgUAUABQAMAAAKAEQAJAFAFAGQAFAHABAIQACAIAAAQIAABMg");
	this.shape.setTransform(238.7,67.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgEBWQgIgEgDgEQgEgFgBgJIgBgYIAAg2IgQAAIAAgcIAQAAIAAgaIAggUIAAAuIAYAAIAAAcIgYAAIAAAyIABASIADAFQACABAEAAQAFAAAJgDIADAbQgMAFgQAAQgJAAgFgDg");
	this.shape_1.setTransform(226.8,68);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AAYBCIAAhCQAAgTgCgGQgCgHgFgDQgFgDgHAAQgHAAgHAEQgHAFgDAIQgCAIAAAUIAAA7IgjAAIAAiAIAgAAIAAATQARgWAYAAQALAAAKAEQAJAEAFAHQAFAGACAIQACAIAAAPIAABPg");
	this.shape_2.setTransform(215,70);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AghA7QgPgIgJgPQgJgQABgUQgBgRAJgQQAJgQAPgJQAQgIARAAQAdAAASATQAUATgBAcQABAdgUATQgSATgdAAQgRAAgQgIgAgVgcQgKAKAAASQAAATAKAKQAJAKAMAAQANAAAJgKQAJgKAAgTQAAgSgJgKQgJgKgNAAQgMAAgJAKg");
	this.shape_3.setTransform(199.8,70.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AA1BZIAAiLIgkCLIghAAIgjiLIAACLIgiAAIAAixIA2AAIAfB4IAgh4IA2AAIAACxg");
	this.shape_4.setTransform(181.6,67.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgnA4QgPgKgFgTIAjgFQACAKAGAFQAHAFAKAAQAOAAAGgEQAFgEgBgGQAAgEgCgCQgDgDgIgCQgogJgLgHQgQgJAAgSQAAgRAOgMQAOgLAbAAQAZAAANAIQAMAJAGARIghAGQgCgIgGgEQgFgEgKAAQgMAAgHAEQgDADAAAEQgBAEAEACQAEAEAaAGQAbAGAMAJQAKAHAAARQAAASgPAMQgPANgdAAQgYAAgQgLg");
	this.shape_5.setTransform(157,70.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgmA8QgKgGgEgKQgGgLABgSIAAhQIAiAAIAAA8QAAAZACAGQACAGAFAEQAFAEAHAAQAHAAAIgFQAGgFADgHQACgHAAgaIAAg3IAiAAIAACAIgfAAIAAgUQgHALgLAGQgKAGgNAAQgNAAgLgGg");
	this.shape_6.setTransform(142.7,70.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AghA7QgPgIgJgPQgIgQAAgUQAAgRAIgQQAJgQAPgJQAQgIARAAQAdAAATATQATATAAAcQAAAdgTATQgUATgcAAQgQAAgRgIgAgVgcQgJAKAAASQAAATAJAKQAJAKAMAAQANAAAJgKQAJgKAAgTQAAgSgJgKQgJgKgNAAQgMAAgJAKg");
	this.shape_7.setTransform(127.6,70.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AgQBZIAAiAIAhAAIAACAgAgQg4IAAggIAhAAIAAAgg");
	this.shape_8.setTransform(116.4,67.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AgOBAIg0h/IAkAAIAZBAIAFAWIADgLIAEgLIAZhAIAjAAIg0B/g");
	this.shape_9.setTransform(105.9,70.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AguAtQgNgSAAgbQAAgeARgSQAQgSAaAAQAbAAARATQARATgBAlIhUAAQAAAQAIAIQAIAJAKAAQAIAAAGgFQAFgEADgKIAiAGQgHATgOAJQgOAKgVAAQggAAgQgWgAgQggQgIAIAAAOIAyAAQgBgOgHgIQgHgIgLAAQgJAAgHAIg");
	this.shape_10.setTransform(91.9,70.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AgpBCIAAiAIAhAAIAAATQAHgNAFgFQAHgEAIAAQAMAAAKAHIgKAeQgJgGgHAAQgIAAgFAEQgCAEgEAKQgCALAAAfIAAAog");
	this.shape_11.setTransform(81.2,70);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("AhDBZIAAixIA6AAQAfAAAKADQAPAEALANQAKAOAAAVQAAARgGALQgGAJgJAHQgJAGgKACQgNADgWgBIgYAAIAABEgAgfgHIAUAAQATAAAHgDQAIgCAEgHQAEgGAAgHQAAgKgGgHQgGgFgIgDIgYgBIgSAAg");
	this.shape_12.setTransform(67.3,67.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AguAtQgNgSAAgbQAAgeARgSQAQgSAaAAQAbAAARATQARATgBAlIhUAAQAAAQAIAIQAIAJAKAAQAIAAAGgFQAFgEADgKIAiAGQgHATgOAJQgOAKgVAAQggAAgQgWgAgQggQgIAIAAAOIAyAAQgBgOgHgIQgHgIgLAAQgJAAgHAIg");
	this.shape_13.setTransform(139.4,34.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9900").s().p("AguBHQABgOAIgNQAHgNAXgVQASgQAEgGQAFgIAAgJQAAgJgEgFQgGgFgJAAQgGAAgFAGQgFAFgBAMIgcgDQADgXANgKQANgJARAAQAWAAALALQAMALAAARQAAAKgCAJQgEAJgHAHIgSASIgQAQIgFAIIA0AAIAAAZg");
	this.shape_14.setTransform(125.6,37.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("Ag+BEQgXgZAAgqQAAgZAIgTQAGgOALgLQAKgLANgFQAQgHAVAAQAnAAAYAYQAXAZAAAqQAAArgXAYQgYAZgnAAQgmAAgYgYgAgigsQgOAOAAAeQAAAeAOAQQAOAPAUAAQAVAAAOgPQAOgQAAgeQAAgegNgPQgOgPgWAAQgVAAgNAQg");
	this.shape_15.setTransform(111.2,31.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("Ag1BEQgYgYAAgrQAAgqAYgZQAWgZAkAAQAhAAAUAUQAMALAHAVIgkAJQgDgOgKgIQgKgIgPAAQgRAAgNAPQgNANAAAgQAAAgANAPQAMAOARAAQAPAAALgJQAKgJAFgUIAiAMQgHAdgUAOQgSAOgdAAQgiAAgWgYg");
	this.shape_16.setTransform(93.4,31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.4,83.9);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgcA2QgMgJgCgQIAZgDQABAIAFAGQAFAEAGAAQAHABAFgHQAGgGAAgNQAAgMgGgFQgFgFgHABQgKAAgJAHIgUgDIANhBIA/AAIAAAXIgsAAIgEAWQAIgEAHAAQAQAAALAMQAMAKAAATQAAAPgJANQgNARgVAAQgRAAgLgKg");
	this.shape.setTransform(208.1,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgdAyQgMgPAAgiQgBgiANgPQAOgQATAAQAPAAAJAIQAKAIACAQIgYADQAAgIgEgDQgEgEgFAAQgHAAgFAHQgGAHgBAWQAKgKALAAQAPAAALALQALAKAAATQAAAUgLALQgMAMgRAAQgSAAgNgPgAgJADQgEAGAAALQAAAMAFAGQAFAHAGAAQAGAAAFgFQAFgGAAgMQgBgNgFgFQgFgEgGAAQgGAAgFADg");
	this.shape_1.setTransform(198.1,33);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_2.setTransform(187.9,33);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AAGBAIAAgaIgzAAIAAgVIA2hQIAVAAIAABQIAQAAIAAAVIgQAAIAAAagAgWARIAcAAIAAgqg");
	this.shape_3.setTransform(178,32.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgbA6QgJgJgDgQIAYgCQABAHADAEQAEADAGAAQAGAAAFgHQAGgHABgXQgJALgMAAQgPABgLgMQgMgKAAgTQAAgTAMgNQAMgMASABQARAAANAPQANAPAAAiQAAAigOAQQgNAQgTAAQgPgBgJgHgAgNgmQgEAFAAAMQAAAMAFAHQAFADAHAAQAFABAFgEQAFgGAAgLQAAgLgGgHQgFgHgFAAQgHAAgFAGg");
	this.shape_4.setTransform(167.9,33.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AAkBAIgMgdIgxAAIgLAdIgbAAIAyh/IAZAAIA0B/gAgRANIAhAAIgQgug");
	this.shape_5.setTransform(151.5,33);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgmAxQgRgSAAgfQAAgdARgSQAQgSAaAAQAXAAAPAOQAJAIAEAQIgaAGQgCgKgHgGQgHgGgLAAQgMAAgJAKQgJALAAAWQAAAXAJALQAJAKAMAAQAKAAAIgHQAHgGADgPIAaAJQgGAUgOALQgNAKgVAAQgYAAgQgRg");
	this.shape_6.setTransform(138.5,33);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AgMAQQAIgDADgEQABgEAAgFIgKAAIAAgZIAXAAIAAASQAAAIgCAHQgCAFgFAFQgEAFgHADg");
	this.shape_7.setTransform(124.4,39.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgmBAIgDgUIALABQAJAAAEgFQAEgFACgHIgjhcIAaAAIAUBAIAWhAIAZAAIggBYIgGAQQgEAIgDAEIgEAIQgEACgGACQgFABgHAAIgOgBg");
	this.shape_8.setTransform(116.9,36.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgCA+QgFgDgDgDQgCgEgCgGIgBgRIAAgnIgLAAIAAgUIALAAIAAgSIAXgPIAAAhIARAAIAAAUIgRAAIAAAkIABANIACADIAEABIAKgCIACATQgIAEgMAAQgGAAgDgCg");
	this.shape_9.setTransform(109,33.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AgLBAIAAhbIAXAAIAABbgAgLgoIAAgXIAXAAIAAAXg");
	this.shape_10.setTransform(103.5,33);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AgmAxQgRgSAAgfQAAgdARgSQAQgSAaAAQAXAAAPAOQAJAIAEAQIgaAGQgCgKgHgGQgHgGgLAAQgMAAgJAKQgJALAAAWQAAAXAJALQAJAKAMAAQAKAAAIgHQAHgGADgPIAaAJQgGAUgOALQgNAKgVAAQgYAAgQgRg");
	this.shape_11.setTransform(94.5,33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AghA0QgLgNAAgXQAAgWALgMQALgMARAAQAOAAALAMIAAguIAZAAIAAB/IgXAAIAAgNQgGAHgHAEQgIAEgGAAQgQAAgMgNgAgNgEQgGAEAAAPQAAAOAEAHQAGAJAJAAQAIAAAHgGQAFgIAAgPQAAgQgFgEQgGgIgJABQgHgBgGAIg");
	this.shape_12.setTransform(77.3,33.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AgXArQgLgGgGgLQgHgMAAgOQAAgMAHgMQAGgLALgGQALgGAMAAQAVAAANAOQAOANAAAUQAAAUgOAOQgOAOgUAAQgLAAgMgFgAgPgUQgGAIAAAMQAAANAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgJAAQgIAAgHAHg");
	this.shape_13.setTransform(66.5,34.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgXArQgLgGgGgLQgHgMAAgOQAAgMAHgMQAGgLALgGQALgGAMAAQAVAAANAOQAOANAAAUQAAAUgOAOQgOAOgUAAQgLAAgMgFgAgPgUQgGAIAAAMQAAANAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgNQAAgMgGgIQgHgHgJAAQgIAAgHAHg");
	this.shape_14.setTransform(55.5,34.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AAPAuIgPg6IgOA6IgYAAIgehbIAYAAIARA7IAQg7IAWAAIAPA7IASg7IAZAAIgeBbg");
	this.shape_15.setTransform(43.1,34.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AggA0QgMgNAAgXQAAgWALgMQALgMARAAQAOAAALAMIAAguIAZAAIAAB/IgXAAIAAgNQgGAHgHAEQgIAEgGAAQgQAAgLgNgAgNgEQgGAEAAAPQAAAOAEAHQAGAJAJAAQAJAAAFgGQAHgIgBgPQABgQgHgEQgFgIgJABQgHgBgGAIg");
	this.shape_16.setTransform(30.3,33.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AghAgQgJgMAAgUQAAgVAMgNQAMgNASAAQAUAAAMAOQAMANgBAbIg8AAQABALAFAGQAGAGAGAAQAGAAAEgDQAEgDACgHIAZAEQgFANgKAHQgKAHgQAAQgWAAgMgQgAgLgWQgFAFAAALIAjAAQgBgLgFgGQgFgFgIAAQgGAAgFAGg");
	this.shape_17.setTransform(19.9,34.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AAaBAIgTgcIgLgTQgEgEgEgCQgEgBgJAAIgFAAIAAA2IgaAAIAAh/IA3AAQASAAAJADQAKAEAGAJQAFAJAAALQAAAPgJAKQgIAGgRADQAIAFAGAGQAGAGAJAPIAQAZgAgegIIATAAQARgBAEgBQAFgBACgFQADgEAAgFQAAgHgDgEQgEgDgGgCIgRAAIgUAAg");
	this.shape_18.setTransform(9.1,33);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AgmBAIgCgUIAKABQAJAAAEgFQAEgFACgHIgkhcIAbAAIAVBAIAVhAIAaAAIgiBYIgFAQQgDAIgDAEIgFAIQgEACgGACQgFABgHAAIgOgBg");
	this.shape_19.setTransform(130.9,15.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AgiApQgIgIAAgMQAAgIADgGQAEgHAHgBQAHgDANgDQAPgDAHgDIAAgCQAAgHgEgDQgDgDgIAAQgHAAgDACQgEADgCAGIgXgEQAEgNAJgHQAJgGASAAQAPAAAIAEQAIAEAEAGQADAGAAAQIAAAbIABASIAEAMIgYAAIgDgHIAAgDQgHAGgHADQgFADgIAAQgPAAgIgHgAAAAFQgKACgDADQgFADAAAFQAAAFAEAEQAEAEAGAAQAFAAAGgEQAEgEACgFQABgDAAgJIAAgFIgOAEg");
	this.shape_20.setTransform(121,13.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AAPAuIgPg6IgOA6IgZAAIgdhbIAYAAIASA7IAPg7IAWAAIAQA7IASg7IAYAAIgeBbg");
	this.shape_21.setTransform(109.1,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AAQBAIgVgqIgMAMIAAAeIgZAAIAAh/IAZAAIAABCIAbgfIAeAAIggAhIAjA7g");
	this.shape_22.setTransform(97.5,11.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AgdAvIAAhbIAXAAIAAANQAGgJADgDQAEgDAGAAQAJAAAIAEIgIAWQgGgEgGAAQgFAAgDADQgCADgCAHQgCAIAAAVIAAAdg");
	this.shape_23.setTransform(89.2,13.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AgiApQgIgIAAgMQAAgIADgGQAEgHAHgBQAHgDANgDQAPgDAHgDIAAgCQAAgHgEgDQgDgDgIAAQgHAAgDACQgEADgCAGIgXgEQAEgNAJgHQAJgGASAAQAPAAAIAEQAIAEAEAGQADAGAAAQIAAAbIABASIAEAMIgYAAIgDgHIAAgDQgHAGgHADQgFADgIAAQgPAAgIgHgAAAAFQgKACgDADQgFADAAAFQAAAFAEAEQAEAEAGAAQAFAAAGgEQAEgEACgFIABgMIAAgFIgOAEg");
	this.shape_24.setTransform(80,13.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AgwBAIAAh/IAqAAQAWAAAHACQALADAHAJQAIALAAAPQAAAMgFAHQgEAHgHAFQgGAEgHABQgJACgQAAIgRAAIAAAxgAgWgFIAOAAQAOABAFgCQAFgCADgFQADgEAAgGQAAgHgEgEQgEgFgHgBIgRgBIgMAAg");
	this.shape_25.setTransform(69.3,11.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AghAgQgJgMAAgUQAAgVAMgNQAMgNASAAQAUAAAMAOQAMANgBAbIg8AAQABALAFAGQAGAGAGAAQAGAAAEgDQAEgDACgHIAZAEQgFANgKAHQgKAHgQAAQgWAAgMgQgAgLgWQgFAFAAALIAjAAQgBgLgFgGQgFgFgIAAQgGAAgFAGg");
	this.shape_26.setTransform(52.9,13.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AgLBAIAAh/IAXAAIAAB/g");
	this.shape_27.setTransform(45.5,11.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("AgfAjQgMgMABgXQgBgVAMgNQANgNATAAQARAAAKAHQAKAHAFAQIgZAEQgBgHgFgEQgEgEgHAAQgHAAgGAHQgFAGAAAPQAAAPAFAGQAGAHAHAAQAIAAAEgEQAEgEACgKIAZAFQgEAQgLAJQgLAIgRAAQgTAAgNgNg");
	this.shape_28.setTransform(38.2,13.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AgiApQgIgIAAgMQAAgIADgGQAEgHAHgBQAHgDANgDQAPgDAHgDIAAgCQAAgHgEgDQgDgDgIAAQgHAAgDACQgEADgCAGIgXgEQAEgNAJgHQAJgGASAAQAPAAAIAEQAIAEAEAGQADAGAAAQIAAAbIABASIAEAMIgYAAIgDgHIAAgDQgHAGgHADQgFADgIAAQgPAAgIgHgAAAAFQgKACgDADQgFADAAAFQAAAFAEAEQAEAEAGAAQAFAAAGgEQAEgEACgFIABgMIAAgFIgOAEg");
	this.shape_29.setTransform(28,13.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCCCCC").s().p("AgdAvIAAhbIAXAAIAAANQAGgJADgDQAEgDAGAAQAJAAAIAEIgIAWQgGgEgGAAQgFAAgDADQgCADgCAHQgCAIAAAVIAAAdg");
	this.shape_30.setTransform(20.2,13.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCCCC").s().p("AgsAwQgRgRAAgeQAAgTAFgNQAFgKAIgIQAIgHAIgEQAMgFAPAAQAcAAARARQARATAAAdQAAAfgRARQgRASgcAAQgcAAgQgSgAgYgfQgKALAAAUQAAAWAKAKQAKAMAOAAQAPAAAKgLQAKgLAAgWQAAgVgKgLQgKgLgPAAQgPAAgJAMg");
	this.shape_31.setTransform(9.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256.8,45.2);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhgnTIDBAAIAADDIjBAAgABhoFIjBAAIAAjDIDBAAgABhjcIAADCIjBAAIAAjCgABhDbIjBAAIAAjCIDBAAgABhEQIAADBIjBAAIAAjBgAhgIGIDBAAIAADDIjBAAg");
	this.shape.setTransform(9.7,71.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhgBhIAAjBIDBAAIAADBg");
	this.shape_1.setTransform(9.7,132.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F1F1F").s().p("AhgBgIAAi/IDBAAIAAC/g");
	this.shape_2.setTransform(9.7,108.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhgBgIAAi/IDBAAIAAC/g");
	this.shape_3.setTransform(9.7,83.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#474747").s().p("AhgBgIAAi/IDBAAIAAC/g");
	this.shape_4.setTransform(9.7,58.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#707070").s().p("AhgBhIAAjBIDBAAIAADBg");
	this.shape_5.setTransform(9.7,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5C5C5C").s().p("AhgBhIAAjBIDBAAIAADBg");
	this.shape_6.setTransform(9.7,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,21.4,144.7);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ag0BGIAAiLIAtAAQAYAAAIACQAMADAIALQAIALAAAQQAAANgEAJQgFAHgHAFQgIAFgHACQgKACgSAAIgSAAIAAA1gAgYgFIAQAAQAOAAAGgCQAGgDADgEQADgFAAgGQAAgIgEgFQgFgFgHgBQgFgBgNAAIgOAAg");
	this.shape.setTransform(50,167.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgwA1QgTgTAAgiQAAgTAHgPQAFgLAIgIQAIgJAKgEQANgFAQAAQAeAAATATQATATAAAhQAAAigTATQgSATgfAAQgeAAgSgTgAgbgjQgKAMAAAXQAAAXALANQALAMAPAAQARAAALgMQAKgNAAgXQAAgXgKgMQgLgMgRAAQgQAAgLAMg");
	this.shape_1.setTransform(34.7,167.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AggA3QgMgPAAgoQAAgnANgRQAMgOATAAQAUgBAMAQQANARAAAmQAAAngNASQgMAPgUAAQgTgBgNgQgAgIgsQgDACgCAIQgDALAAAXQAAAZACAJQADAJAEADQAEADADAAQAEAAAEgDQAEgDACgIQADgKAAgZQAAgXgCgKQgDgJgEgCQgEgEgEAAQgDAAgFAEg");
	this.shape_2.setTransform(20.7,167.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgfA8QgMgLgDgRIAbgDQACAJAFAFQAGAGAGAAQAHAAAHgHQAFgHAAgOQAAgNgFgGQgHgFgHAAQgMAAgIAIIgXgDIAPhHIBFAAIAAAZIgxAAIgEAYQAJgEAHAAQASAAAMANQANALAAAVQAAARgKAOQgOASgXAAQgTAAgMgKg");
	this.shape_3.setTransform(9.2,167.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgfA9QgMgLgCgTIAagDQABALAFAFQAGAFAHAAQAHAAAGgGQAFgHAAgKQAAgLgFgFQgFgGgIgBQgEAAgHADIADgVQAJABAGgFQAGgFAAgJQAAgGgFgFQgEgEgFAAQgHAAgFAFQgEAFgBAIIgZgEQACgMAGgIQAFgHAJgFQAJgEAMAAQASgBAMANQAKALAAANQAAASgUALQAMADAHAHQAHAJAAANQAAASgNANQgOANgTABQgSgBgNgKg");
	this.shape_4.setTransform(-2.7,167.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("Ag0BGIAAiLIAtAAQAYAAAIACQAMADAIALQAIALAAAQQAAANgEAJQgFAHgHAFQgIAFgHACQgKACgSAAIgSAAIAAA1gAgYgFIAQAAQAOAAAGgCQAGgDADgEQADgFAAgGQAAgIgEgFQgFgFgHgBQgFgBgNAAIgOAAg");
	this.shape_5.setTransform(40.2,132.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgNBGIAAiLIAbAAIAACLg");
	this.shape_6.setTransform(29.8,132.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AADBGIAAhjQgMANgVAHIAAgYQALgEANgJQAKgKAFgNIAVAAIAACLg");
	this.shape_7.setTransform(20,132.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AggA3QgMgPAAgoQAAgnANgRQAMgOATAAQAUgBAMAQQANARAAAmQAAAngNASQgMAPgUAAQgTgBgNgQgAgIgsQgDACgCAIQgDALAAAXQAAAZACAJQADAJAEADQAEADADAAQAEAAAEgDQAEgDACgIQADgKAAgZQAAgXgCgKQgDgJgEgCQgEgEgEAAQgDAAgFAEg");
	this.shape_8.setTransform(9,132.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgfA9QgMgLgCgTIAagDQABALAFAFQAGAFAHAAQAHAAAGgGQAFgHAAgKQAAgLgFgGQgFgFgIgBQgEAAgHADIADgVQAJABAGgFQAGgFAAgJQAAgGgFgFQgEgEgFAAQgHAAgFAFQgEAFgBAIIgZgEQACgMAGgIQAFgHAJgFQAJgEAMAAQASgBAMANQAKALAAANQAAATgUAKQAMADAHAHQAHAJAAANQAAASgNANQgOANgTABQgSgBgNgKg");
	this.shape_9.setTransform(-2.7,132.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("Ag0BGIAAiLIAtAAQAYAAAIACQAMADAIALQAIALAAAQQAAANgEAJQgFAHgHAFQgIAFgHACQgKACgSAAIgSAAIAAA1gAgYgFIAQAAQAOAAAGgCQAGgDADgEQADgFAAgGQAAgIgEgFQgFgFgHgBQgFgBgNAAIgOAAg");
	this.shape_10.setTransform(50,96.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AgwA1QgTgTAAgiQAAgTAHgPQAFgLAIgIQAIgJAKgEQANgFAQAAQAeAAATATQATATAAAhQAAAigTATQgSATgfAAQgeAAgSgTgAgbgjQgKAMAAAXQAAAXALANQALAMAPAAQARAAALgMQAKgNAAgXQAAgXgKgMQgLgMgRAAQgQAAgLAMg");
	this.shape_11.setTransform(34.7,96.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AggA3QgMgPAAgoQAAgnANgRQAMgOATAAQAUgBAMAQQANARAAAmQAAAngNASQgMAPgUAAQgTgBgNgQgAgIgsQgDACgCAJQgDAKAAAXQAAAZACAJQADAJAEADQAEADADAAQAEAAAEgDQAEgDACgIQADgKAAgZQAAgXgCgKQgDgJgEgCQgEgEgEAAQgDAAgFAEg");
	this.shape_12.setTransform(20.7,96.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AggA3QgMgPAAgoQAAgnANgRQAMgOATAAQAUgBAMAQQANARAAAmQAAAngNASQgMAPgUAAQgTgBgNgQgAgIgsQgDACgCAJQgDAKAAAXQAAAZACAJQADAJAEADQAEADADAAQAEAAAEgDQAEgDACgIQADgKAAgZQAAgXgCgKQgDgJgEgCQgEgEgEAAQgDAAgFAEg");
	this.shape_13.setTransform(9,96.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgfA9QgMgLgCgTIAagDQABALAFAFQAGAFAHAAQAHAAAGgGQAFgHAAgKQAAgLgFgFQgFgGgIgBQgEAAgHADIADgVQAJABAGgFQAGgFAAgJQAAgGgFgFQgEgEgFAAQgHAAgFAFQgEAFgBAIIgZgDQACgNAGgIQAFgHAJgFQAJgEAMAAQASgBAMANQAKALAAANQAAASgUALQAMADAHAHQAHAJAAANQAAASgNANQgOANgTABQgSgBgNgKg");
	this.shape_14.setTransform(-2.7,96.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("Ag0BGIAAiLIAtAAQAYAAAIACQAMADAIALQAIALAAAQQAAANgEAJQgFAHgHAFQgIAFgHACQgKACgSAAIgSAAIAAA1gAgYgFIAQAAQAOAAAGgCQAGgDADgEQADgFAAgGQAAgIgEgFQgFgFgHgBQgFgBgNAAIgOAAg");
	this.shape_15.setTransform(50,61);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AgwA1QgTgTAAgiQAAgTAHgPQAFgLAIgIQAIgJAKgEQANgFAQAAQAeAAATATQATATAAAhQAAAigTATQgSATgfAAQgeAAgSgTgAgbgjQgKAMAAAXQAAAXALANQALAMAPAAQARAAALgMQAKgNAAgXQAAgXgKgMQgLgMgRAAQgQAAgLAMg");
	this.shape_16.setTransform(34.7,61);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AggA3QgMgPAAgoQAAgnANgRQAMgOATAAQAUgBAMAQQANARAAAmQAAAngNASQgMAPgUAAQgTgBgNgQgAgIgsQgDACgCAIQgDALAAAXQAAAZACAJQADAJAEADQAEADADAAQAEAAAEgDQAEgDACgIQADgKAAgZQAAgXgCgKQgDgJgEgCQgEgEgEAAQgDAAgFAEg");
	this.shape_17.setTransform(20.7,61.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AgfA8QgMgLgDgRIAbgDQACAJAFAFQAGAGAGAAQAHAAAHgHQAFgHAAgOQAAgNgFgGQgHgFgHAAQgMAAgIAIIgXgDIAPhHIBFAAIAAAZIgxAAIgEAYQAJgEAHAAQASAAAMANQANALAAAVQAAARgKAOQgOASgXAAQgTAAgMgKg");
	this.shape_18.setTransform(9.2,61.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AguBGQACgOAHgNQAIgMAXgVQAQgPAEgGQAGgJAAgIQAAgJgFgFQgFgFgJAAQgGAAgFAFQgFAGgBALIgbgCQADgXAMgJQANgKARAAQAVAAAMALQAMALAAARQAAAKgEAIQgDAJgIAHQgEAGgNAMIgPAQIgFAHIA0AAIAAAZg");
	this.shape_19.setTransform(-2.9,61);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("Ag0BGIAAiLIAtAAQAYAAAIACQAMADAIALQAIALAAAQQAAANgEAJQgFAHgHAFQgIAFgHACQgKACgSAAIgSAAIAAA1gAgYgFIAQAAQAOAAAGgCQAGgDADgEQADgFAAgGQAAgIgEgFQgFgFgHgBQgFgBgNAAIgOAAg");
	this.shape_20.setTransform(50,25.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AgwA1QgTgTAAgiQAAgTAHgPQAFgLAIgIQAIgJAKgEQANgFAQAAQAeAAATATQATATAAAhQAAAigTATQgSATgfAAQgeAAgSgTgAgbgjQgKAMAAAXQAAAXALANQALAMAPAAQARAAALgMQAKgNAAgXQAAgXgKgMQgLgMgRAAQgQAAgLAMg");
	this.shape_21.setTransform(34.7,25.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AggA3QgMgPAAgoQAAgnANgRQAMgOATAAQAUgBAMAQQANARAAAmQAAAngNASQgMAPgUAAQgTgBgNgQgAgIgsQgDACgCAIQgDALAAAXQAAAZACAJQADAJAEADQAEADADAAQAEAAAEgDQAEgDACgIQADgKAAgZQAAgXgCgKQgDgJgEgCQgEgEgEAAQgDAAgFAEg");
	this.shape_22.setTransform(20.7,25.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AggA3QgMgPAAgoQAAgnANgRQAMgOATAAQAUgBAMAQQANARAAAmQAAAngNASQgMAPgUAAQgTgBgNgQgAgIgsQgDACgCAIQgDALAAAXQAAAZACAJQADAJAEADQAEADADAAQAEAAAEgDQAEgDACgIQADgKAAgZQAAgXgCgKQgDgJgEgCQgEgEgEAAQgDAAgFAEg");
	this.shape_23.setTransform(9,25.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AguBGQACgOAHgNQAIgMAXgVQAQgPAEgGQAGgJAAgIQAAgJgFgFQgFgFgJAAQgGAAgFAFQgFAGgBALIgbgCQADgXAMgJQANgKARAAQAVAAAMALQAMALAAARQAAAKgEAIQgDAJgIAHQgEAGgNAMIgPAQIgFAHIA0AAIAAAZg");
	this.shape_24.setTransform(-2.9,25.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("Ag0BGIAAiLIAtAAQAYAAAIACQAMADAIALQAIALAAAQQAAANgEAJQgFAHgHAFQgIAFgHACQgKACgSAAIgSAAIAAA1gAgYgFIAQAAQAOAAAGgCQAGgDADgEQADgFAAgGQAAgIgEgFQgFgFgHgBQgFgBgNAAIgOAAg");
	this.shape_25.setTransform(50,-10);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AgwA1QgTgTAAgiQAAgTAHgPQAFgLAIgIQAIgJAKgEQANgFAQAAQAeAAATATQATATAAAhQAAAigTATQgSATgfAAQgeAAgSgTgAgbgjQgKAMAAAXQAAAXALANQALAMAPAAQARAAALgMQAKgNAAgXQAAgXgKgMQgLgMgRAAQgQAAgLAMg");
	this.shape_26.setTransform(34.7,-10);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AggA4QgMgQAAgoQAAgnANgRQAMgPATAAQAUAAAMAPQANARAAAnQAAAngNASQgMAOgUAAQgTAAgNgPgAgIgtQgDAEgCAIQgDAKAAAXQAAAZACAIQADAKAEADQAEADADAAQAEAAAEgDQAEgDACgJQADgJAAgZQAAgXgCgJQgDgJgEgEQgEgDgEAAQgDAAgFADg");
	this.shape_27.setTransform(20.7,-9.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("AggA4QgMgQAAgoQAAgnANgRQAMgPATAAQAUAAAMAPQANARAAAnQAAAngNASQgMAOgUAAQgTAAgNgPgAgIgtQgDAEgCAIQgDAKAAAXQAAAZACAIQADAKAEADQAEADADAAQAEAAAEgDQAEgDACgJQADgJAAgZQAAgXgCgJQgDgJgEgEQgEgDgEAAQgDAAgFADg");
	this.shape_28.setTransform(9,-9.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AADBGIAAhjQgMANgVAHIAAgYQALgEANgJQAKgKAFgNIAVAAIAACLg");
	this.shape_29.setTransform(-3.4,-10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-24.6,95,206.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABmkdIjLAAIAAjOIDLAAgABmogIjLAAIAAjNIDLAAgAhlAbIDLAAIAADMIjLAAgAhlgaIAAjNIDLAAIAADNgABmLuIjLAAIAAjNIDLAAgABmEoIAADOIjLAAIAAjOg");
	this.shape.setTransform(10.2,75.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7B7B7B").s().p("AhlBmIAAjLIDLAAIAADLg");
	this.shape_1.setTransform(10.2,139.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#858585").s().p("AhlBmIAAjLIDLAAIAADLg");
	this.shape_2.setTransform(10.2,115);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2C2C2").s().p("AhlBmIAAjLIDLAAIAADLg");
	this.shape_3.setTransform(10.2,62.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ADADAD").s().p("AhlBmIAAjLIDLAAIAADLg");
	this.shape_4.setTransform(10.2,88);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBEBEB").s().p("AhlBmIAAjLIDLAAIAADLg");
	this.shape_5.setTransform(10.2,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D6D6D6").s().p("AhlBmIAAjMIDLAAIAADMg");
	this.shape_6.setTransform(10.2,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,22.5,152.2);


(lib.point_hit_short_units_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointHit
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(1,1,1,3,true).p("ApnhqITPAAIAADVIzPAAg");
	this.shape.setTransform(61.4,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,153,51,0.2)").s().p("ApnBrIAAjVITPAAIAADVg");
	this.shape_1.setTransform(61.4,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-1,125.4,23.5);


(lib.point_hit_large_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointHit
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(1,1,1,3,true).p("AyPimMAkfAAAIAAFNMgkfAAAg");
	this.shape.setTransform(107.1,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,153,51,0.2)").s().p("AyPCmIAAlMMAkfAAAIAAFMg");
	this.shape_1.setTransform(107.1,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-4.6,235.8,35.4);


(lib.MAP_TEXT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AglAxIAAhiIAhAAQAQABAFABQAJACAGAHQAGAIAAAMQAAAKgEAFQgDAFgFADQgFAEgGACIgSAAIgOAAIAAAmgAgRgEIAMAAQAKABADgCQAEgCADgDQACgDAAgEQAAgGgDgDQgEgEgEgBIgNgBIgKAAg");
	this.shape.setTransform(102.6,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAcAxIgJgWIgmAAIgIAWIgWAAIAnhiIAUAAIAoBigAgNAKIAaAAIgNgjg");
	this.shape_1.setTransform(92.6,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AAdAxIAAhMIgUBMIgRAAIgUhMIAABMIgTAAIAAhiIAeAAIARBDIAShDIAeAAIAABig");
	this.shape_2.setTransform(81.8,27.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AglAxIAAhiIBJAAIAAARIg0AAIAAAXIAwAAIAAAOIgwAAIAAAbIA2AAIAAARg");
	this.shape_3.setTransform(67.5,27.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgoAxIAAhiIAlAAQAKABAHABQAIADAHAGQAGAHAEAJQADALAAAMQAAAMgDAIQgEAMgHAGQgGAGgIACQgHACgJAAgAgUAgIAPAAIAKgBQAFgBAEgCQACgDACgHQACgHABgLQgBgKgCgGQgCgHgDgDQgEgDgFgCQgEgBgLAAIgJAAg");
	this.shape_4.setTransform(57.8,27.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgJAxIAAhiIATAAIAABig");
	this.shape_5.setTransform(50.7,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AATAxIAAgsIglAAIAAAsIgUAAIAAhiIAUAAIAAAoIAlAAIAAgoIAUAAIAABig");
	this.shape_6.setTransform(43.7,27.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AAUAxIgOgVIgJgPQgDgDgDgBQgEgBgGAAIgFAAIAAApIgUAAIAAhiIArAAQAOABAHACQAHACAFAIQAEAHAAAIQAAALgHAIQgGAFgNACQAGAEAEAEQAFAGAHALIAMATgAgYgGIAQAAQAMAAAEgBQADgCADgDQACgDAAgFQAAgEgEgDQgCgEgFgBIgMAAIgRAAg");
	this.shape_7.setTransform(30.2,27.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AgiAmQgNgOAAgYQAAgNAEgKQAEgIAGgGQAGgGAHgDQAJgEALAAQAVAAAOAOQANANAAAXQAAAYgNAOQgNANgWAAQgVAAgNgNgAgTgYQgHAIAAAQQAAARAIAIQAHAJALAAQAMAAAHgJQAIgIAAgRQAAgQgHgIQgIgJgMAAQgLAAgIAJg");
	this.shape_8.setTransform(19.2,27.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AATAyIgThKIgSBKIgWAAIgYhiIAUAAIAQBCIAShCIAWAAIASBDIAPhDIAUAAIgYBig");
	this.shape_9.setTransform(108.9,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AgiAmQgNgOAAgYQAAgNAEgKQAEgIAGgGQAGgGAHgDQAJgEALAAQAVAAAOAOQANANAAAXQAAAYgNAOQgNANgWAAQgVAAgNgNgAgTgYQgHAIAAAQQAAARAIAIQAHAJALAAQAMAAAHgJQAIgIAAgRQAAgQgHgIQgIgJgMAAQgLAAgIAJg");
	this.shape_10.setTransform(96.8,9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AATAyIAAgsIglAAIAAAsIgVAAIAAhiIAVAAIAAAnIAlAAIAAgnIAUAAIAABig");
	this.shape_11.setTransform(86.3,9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("AgbAqQgKgJgCgQIATgCQACAKAGAFQAFAEAHAAQAKAAAFgEQAFgEAAgFQAAgEgCgCQgCgDgFgCIgPgEQgQgEgGgEQgKgJAAgLQAAgIAFgHQAEgGAIgEQAIgEALAAQASAAAJAJQAKAIAAAOIgUABQgBgIgEgDQgFgEgHAAQgIAAgFAEQgDACAAAEQAAADADADQAEADAMAEQAPAEAHADQAHAEAEAFQAEAGAAAKQAAAIgEAHQgFAIgJAEQgJADgNAAQgRABgKgKg");
	this.shape_12.setTransform(76.5,9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AgiAmQgNgOAAgYQAAgNAEgKQAEgIAGgGQAGgGAHgDQAJgEALAAQAVAAAOAOQANANAAAXQAAAYgNAOQgNANgWAAQgVAAgNgNgAgTgYQgHAIAAAQQAAARAIAIQAHAJALAAQAMAAAHgJQAIgIAAgRQAAgQgHgIQgIgJgMAAQgLAAgIAJg");
	this.shape_13.setTransform(62.6,9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9900").s().p("AgJAyIAAhSIgdAAIAAgQIBNAAIAAAQIgdAAIAABSg");
	this.shape_14.setTransform(52.9,9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("AASAyIgZgvIgRAQIAAAfIgUAAIAAhiIAUAAIAAAsIAngsIAcAAIgmAnIAoA7g");
	this.shape_15.setTransform(40.2,9.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("AgdAmQgNgOAAgXQAAgXANgOQANgOATAAQASAAAMALQAGAGAEAMIgUAFQgCgIgGgEQgFgFgIAAQgJAAgHAIQgHAIAAARQAAASAHAIQAGAIAJAAQAIAAAGgFQAGgFADgLIATAGQgEARgLAIQgKAHgQAAQgSAAgNgNg");
	this.shape_16.setTransform(29.5,9.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("AgJAyIAAhiIATAAIAABig");
	this.shape_17.setTransform(22.6,9.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9900").s().p("AgiAxIAAhhIAVAAIAABQIAwAAIAAARg");
	this.shape_18.setTransform(16.7,9.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF9900").s().p("AgdAmQgNgOAAgXQAAgXANgOQANgOATAAQASAAAMALQAGAGAEAMIgUAFQgCgIgGgEQgFgFgIAAQgJAAgHAIQgHAIAAARQAAASAHAIQAGAIAJAAQAIAAAGgFQAGgFADgLIATAGQgEARgLAIQgKAHgQAAQgSAAgNgNg");
	this.shape_19.setTransform(7,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.4,37.2);


(lib.linkt_hit_dynamic_area_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AoJBzIAAjlIQTAAIAADlg");
	this.shape.setTransform(52.3,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.6,23);


(lib.linkt_hit_area = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AwCBzIAAjlMAgFAAAIAADlg");
	this.shape.setTransform(102.7,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.5,23);


(lib.building_labels_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgqAzIAAhlIAzAAQARAAAJAIQAIAIAAAQQAAAPgJAHQgJAJgUAAIgPAAIAAAmgAgKgGIAIAAQAHAAAEgDQADgEAAgFQAAgEgDgEQgDgDgHAAIgJAAg");
	this.shape.setTransform(48,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgaAvQgMgFgHgMQgHgMAAgSQAAgYAOgOQAPgOAXAAQAZAAAPAOQANAOAAAYQAAARgGAMQgGALgLAHQgMAGgRAAQgQAAgLgGgAgOgVQgGAHAAAOQAAAPAGAHQAGAHAIAAQAKAAAFgHQAHgGAAgQQAAgOgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_1.setTransform(36.5,9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEQAEAEADAFQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_2.setTransform(25.7,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEQAEAEADAFQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_3.setTransform(16.1,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AAAA0IAAhDQgFAGgHADIgQAGIAAgXQAPgFAHgHQAHgGAFgKIAXAAIAABng");
	this.shape_4.setTransform(5.8,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgnAzIAAhlIAfAAIAABMIAwAAIAAAZg");
	this.shape_5.setTransform(29.2,258.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgqAzIAAhlIAzAAQARAAAJAIQAIAIAAAQQAAAPgJAHQgJAJgUAAIgPAAIAAAmgAgKgGIAIAAQAHAAAEgDQADgEAAgFQAAgEgDgEQgDgDgHAAIgJAAg");
	this.shape_6.setTransform(19.1,258.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AgaAvQgMgFgHgMQgHgMAAgSQAAgYAOgOQAPgOAXAAQAZAAAPAOQANAOAAAYQAAARgGAMQgGALgLAHQgMAGgRAAQgQAAgLgGgAgOgVQgGAHAAAOQAAAPAGAHQAGAHAIAAQAKAAAFgHQAHgGAAgQQAAgOgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_7.setTransform(7.6,258.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgqAzIAAhlIAzAAQARAAAJAIQAIAIAAAQQAAAPgJAHQgJAJgUAAIgPAAIAAAmgAgKgGIAIAAQAHAAAEgDQADgEAAgFQAAgEgDgEQgDgDgHAAIgJAAg");
	this.shape_8.setTransform(48,235.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgaAvQgMgFgHgMQgHgMAAgSQAAgYAOgOQAPgOAXAAQAZAAAPAOQANAOAAAYQAAARgGAMQgGALgLAHQgMAGgRAAQgQAAgLgGgAgOgVQgGAHAAAOQAAAPAGAHQAGAHAIAAQAKAAAFgHQAHgGAAgQQAAgOgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_9.setTransform(36.5,235.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEQAEAEADAFQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_10.setTransform(25.7,235.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEQAEAEADAFQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_11.setTransform(16.1,235.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AgVAwQgJgGgGgLQgFgMAAgTQAAgaAMgNQALgNATAAQANAAAHADQAHADAFAFQAEAGADAIIgdAEQgBgGgCgDQgDgCgEAAQgFAAgEAHQgDAFgBAQQAFgFAGgCQADgDAHAAQAOAAAKAKQAJAIAAAPQAAAKgFAJQgFAIgIAFQgJAEgNAAQgNAAgKgFgAgHAEQgEAFAAAIQAAAJAEAEQAEAFAFAAQAFAAAEgEQAEgFAAgIQAAgJgEgEQgEgFgGAAQgEAAgEAEg");
	this.shape_12.setTransform(6.5,235.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AgqAzIAAhlIAzAAQARAAAJAIQAIAIAAAQQAAAPgJAHQgJAJgUAAIgPAAIAAAmgAgKgGIAIAAQAHAAAEgDQADgEAAgFQAAgEgDgEQgDgDgHAAIgJAAg");
	this.shape_13.setTransform(41.5,213.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgPAzIAAhlIAfAAIAABlg");
	this.shape_14.setTransform(33.3,213.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AAAA0IAAhDQgFAGgHADIgQAGIAAgXQAOgFAIgHQAHgGAEgKIAYAAIAABng");
	this.shape_15.setTransform(25,213.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEQAEAEADAFQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_16.setTransform(16.1,213.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AgPAyQgHgCgGgEQgFgEgDgEIgFgNIAdgDQABAHAEAEQAEAEADAAQAGAAAEgFQAEgFAAgJQAAgJgEgEQgEgDgGAAQgDAAgDABIgHAFIgZgEIAJg1IBDAAIAAAXIgsAAIgDAPIAJgDIAIgBQAPAAAKAJQAJAIAAAOQABAKgFAJQgFAJgKAFQgIAFgOAAQgJAAgHgCg");
	this.shape_17.setTransform(6.4,213.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AgqAzIAAhlIAzAAQARAAAJAIQAIAIAAAQQAAAPgJAHQgJAJgUAAIgPAAIAAAmgAgKgGIAIAAQAHAAAEgDQADgEAAgFQAAgEgDgEQgDgDgHAAIgJAAg");
	this.shape_18.setTransform(48,190.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AgaAvQgMgFgHgMQgHgMAAgSQAAgYAOgOQAPgOAXAAQAZAAAPAOQANAOAAAYQAAARgGAMQgGALgLAHQgMAGgRAAQgQAAgLgGgAgOgVQgGAHAAAOQAAAPAGAHQAGAHAIAAQAKAAAFgHQAHgGAAgQQAAgOgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_19.setTransform(36.5,190.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEQAEAEADAFQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_20.setTransform(25.7,190.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEIAHAJQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_21.setTransform(16.1,190.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AgPAyQgHgCgGgEQgFgEgDgEIgFgNIAdgDQABAHAEAEQAEAEADAAQAGAAAEgFQAEgFAAgJQAAgJgEgEQgEgDgGAAQgDAAgDABIgHAFIgZgEIAJg1IBDAAIAAAXIgsAAIgDAPIAJgDIAIgBQAPAAAKAJQAJAIAAAOQABAKgFAJQgFAJgKAFQgIAFgOAAQgJAAgHgCg");
	this.shape_22.setTransform(6.4,190.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AgqAzIAAhlIAzAAQARAAAJAIQAIAIAAAQQAAAPgJAHQgJAJgUAAIgPAAIAAAmgAgKgGIAIAAQAHAAAEgDQADgEAAgFQAAgEgDgEQgDgDgHAAIgJAAg");
	this.shape_23.setTransform(41.5,168.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AgPAzIAAhlIAfAAIAABlg");
	this.shape_24.setTransform(33.3,168.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AAAA0IAAhDQgFAGgHADIgQAGIAAgXQAOgFAIgHQAHgGAEgKIAYAAIAABng");
	this.shape_25.setTransform(25,168);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEIAHAJQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_26.setTransform(16.1,168.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AAHA0IAAgTIgzAAIAAgYIAzg8IAZAAIAAA+IANAAIAAAWIgNAAIAAATgAgTALIAaAAIAAgfg");
	this.shape_27.setTransform(6.4,168);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("AgqAzIAAhlIAzAAQARAAAJAIQAIAIAAAQQAAAPgJAHQgJAJgUAAIgPAAIAAAmgAgKgGIAIAAQAHAAAEgDQADgEAAgFQAAgEgDgEQgDgDgHAAIgJAAg");
	this.shape_28.setTransform(48,145.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AgaAvQgMgFgHgMQgHgMAAgSQAAgYAOgOQAPgOAXAAQAZAAAPAOQANAOAAAYQAAARgGAMQgGALgLAHQgMAGgRAAQgQAAgLgGgAgOgVQgGAHAAAOQAAAPAGAHQAGAHAIAAQAKAAAFgHQAHgGAAgQQAAgOgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_29.setTransform(36.5,145.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEQAEAEADAFQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_30.setTransform(25.7,145.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEIAHAJQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_31.setTransform(16.1,145.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCCCCC").s().p("AAHA0IAAgTIgzAAIAAgYIAzg8IAZAAIAAA+IANAAIAAAWIgNAAIAAATgAgTALIAaAAIAAgfg");
	this.shape_32.setTransform(6.4,145.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CCCCCC").s().p("AgqAzIAAhlIAzAAQARAAAJAIQAIAIAAAQQAAAPgJAHQgJAJgUAAIgPAAIAAAmgAgKgGIAIAAQAHAAAEgDQADgEAAgFQAAgEgDgEQgDgDgHAAIgJAAg");
	this.shape_33.setTransform(48,122.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CCCCCC").s().p("AgaAvQgMgFgHgMQgHgMAAgSQAAgYAOgOQAPgOAXAAQAZAAAPAOQANAOAAAYQAAARgGAMQgGALgLAHQgMAGgRAAQgQAAgLgGgAgOgVQgGAHAAAOQAAAPAGAHQAGAHAIAAQAKAAAFgHQAHgGAAgQQAAgOgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_34.setTransform(36.5,122.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEQAEAEADAFQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_35.setTransform(25.7,122.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCCCCC").s().p("AgPAyQgHgCgFgEQgGgEgDgEIgGgNIAegDQABAHAEAEQAEAEADAAQAGAAAEgFQAEgFAAgJQAAgJgEgEQgEgDgGAAQgDAAgDABIgHAFIgZgEIAJg1IBDAAIAAAXIgsAAIgDAPIAJgDIAIgBQAPAAAKAJQAKAIAAAOQAAAKgFAJQgFAJgKAFQgIAFgOAAQgJAAgHgCg");
	this.shape_36.setTransform(16,123);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CCCCCC").s().p("AgUAyQgIgEgFgGQgFgGgDgKIAdgEQABAJAEADQADAEAEAAQAGAAAEgFQADgEAAgHQAAgHgDgEQgEgEgGAAIgIACIACgTIADAAQAEAAAEgDQAEgEAAgFQAAgFgDgCQgDgDgDAAQgFAAgDADQgDADgBAIIgcgFQAEgNAJgHQAKgHARAAQATAAAJAIQAJAHAAAMQAAAGgEAGQgDAFgIAEQAGACADACQAGABACAFQADAFAAAHQAAAJgEAJQgFAIgJAFQgJAEgOAAQgNAAgIgDg");
	this.shape_37.setTransform(6.4,122.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CCCCCC").s().p("AgqAzIAAhlIAzAAQARAAAJAIQAIAIAAAQQAAAPgJAHQgJAJgUAAIgPAAIAAAmgAgKgGIAIAAQAHAAAEgDQADgEAAgFQAAgEgDgEQgDgDgHAAIgJAAg");
	this.shape_38.setTransform(41.5,100.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CCCCCC").s().p("AgPAzIAAhlIAfAAIAABlg");
	this.shape_39.setTransform(33.3,100.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CCCCCC").s().p("AAAA0IAAhDQgFAGgHADIgQAGIAAgXQAOgFAIgHQAHgGAEgKIAYAAIAABng");
	this.shape_40.setTransform(25,100.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEIAHAJQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_41.setTransform(16.1,100.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CCCCCC").s().p("AgUAyQgIgEgFgGQgFgGgDgKIAdgEQABAJAEADQADAEAEAAQAGAAAEgFQADgEAAgHQAAgHgDgEQgEgEgGAAIgIACIACgTIADAAQAEAAAEgDQAEgEAAgFQAAgFgDgCQgDgDgDAAQgFAAgDADQgDADgBAIIgcgFQAEgNAJgHQAKgHARAAQATAAAJAIQAJAHAAAMQAAAGgEAGQgDAFgIAEQAGACADACQAGABACAFQADAFAAAHQAAAJgEAJQgFAIgJAFQgJAEgOAAQgNAAgIgDg");
	this.shape_42.setTransform(6.4,100.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CCCCCC").s().p("AgqAzIAAhlIAzAAQARAAAJAIQAIAIAAAQQAAAPgJAHQgJAJgUAAIgPAAIAAAmgAgKgGIAIAAQAHAAAEgDQADgEAAgFQAAgEgDgEQgDgDgHAAIgJAAg");
	this.shape_43.setTransform(48,77.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CCCCCC").s().p("AgaAvQgMgFgHgMQgHgMAAgSQAAgYAOgOQAPgOAXAAQAZAAAPAOQANAOAAAYQAAARgGAMQgGALgLAHQgMAGgRAAQgQAAgLgGgAgOgVQgGAHAAAOQAAAPAGAHQAGAHAIAAQAKAAAFgHQAHgGAAgQQAAgOgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_44.setTransform(36.5,77.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEQAEAEADAFQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_45.setTransform(25.7,77.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEIAHAJQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_46.setTransform(16.1,77.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CCCCCC").s().p("AgUAyQgIgEgFgGQgFgGgDgKIAdgEQABAJAEADQADAEAEAAQAGAAAEgFQADgEAAgHQAAgHgDgEQgEgEgGAAIgIACIACgTIADAAQAEAAAEgDQAEgEAAgFQAAgFgDgCQgDgDgDAAQgFAAgDADQgDADgBAIIgcgFQAEgNAJgHQAKgHARAAQATAAAJAIQAJAHAAAMQAAAGgEAGQgDAFgIAEQAGACADACQAGABACAFQADAFAAAHQAAAJgEAJQgFAIgJAFQgJAEgOAAQgNAAgIgDg");
	this.shape_47.setTransform(6.4,77.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CCCCCC").s().p("AgqAzIAAhlIAzAAQARAAAJAIQAIAIAAAQQAAAPgJAHQgJAJgUAAIgPAAIAAAmgAgKgGIAIAAQAHAAAEgDQADgEAAgFQAAgEgDgEQgDgDgHAAIgJAAg");
	this.shape_48.setTransform(48,55.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CCCCCC").s().p("AgaAvQgMgFgHgMQgHgMAAgSQAAgYAOgOQAPgOAXAAQAZAAAPAOQANAOAAAYQAAARgGAMQgGALgLAHQgMAGgRAAQgQAAgLgGgAgOgVQgGAHAAAOQAAAPAGAHQAGAHAIAAQAKAAAFgHQAHgGAAgQQAAgOgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_49.setTransform(36.5,55.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEQAEAEADAFQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_50.setTransform(25.7,55.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CCCCCC").s().p("AgPAyQgHgCgFgEQgGgEgDgEIgGgNIAegDQABAHAEAEQAEAEADAAQAGAAAEgFQAEgFAAgJQAAgJgEgEQgEgDgGAAQgDAAgDABIgHAFIgZgEIAJg1IBDAAIAAAXIgsAAIgDAPIAJgDIAIgBQAPAAAKAJQAKAIAAAOQAAAKgFAJQgFAJgKAFQgIAFgOAAQgJAAgHgCg");
	this.shape_51.setTransform(16,55.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CCCCCC").s().p("AgqA0QACgNAHgLQAIgLAUgPQALgIADgFQAEgFAAgEQAAgFgEgDQgDgDgFAAQgEAAgDADQgEAEgBAIIgdgCQACgMAEgHQAFgHAJgDQAHgEANAAQAQAAAIADQAIAEAFAHQAFAHAAAJQAAAKgGAIQgFAHgPAKIgLAJIgFAGIArAAIAAAXg");
	this.shape_52.setTransform(6.3,55);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CCCCCC").s().p("AgqAzIAAhlIAzAAQARAAAJAIQAIAIAAAQQAAAPgJAHQgJAJgUAAIgPAAIAAAmgAgKgGIAIAAQAHAAAEgDQADgEAAgFQAAgEgDgEQgDgDgHAAIgJAAg");
	this.shape_53.setTransform(48,32.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CCCCCC").s().p("AgaAvQgMgFgHgMQgHgMAAgSQAAgYAOgOQAPgOAXAAQAZAAAPAOQANAOAAAYQAAARgGAMQgGALgLAHQgMAGgRAAQgQAAgLgGgAgOgVQgGAHAAAOQAAAPAGAHQAGAHAIAAQAKAAAFgHQAHgGAAgQQAAgOgHgHQgGgHgJAAQgIAAgGAHg");
	this.shape_54.setTransform(36.5,32.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEQAEAEADAFQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_55.setTransform(25.7,32.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CCCCCC").s().p("AgUAxQgIgEgFgIQgEgGgCgKQgCgKAAgLQAAgcALgMQAKgMAUAAQALAAAGADQAHACAEAEQAEAEADAFQACAEACAHQADALAAAMQAAAbgKANQgJANgXAAQgMAAgIgEgAgJgaQgDAIAAASQAAATADAHQAEAHAFAAQAEAAADgDQADgDACgGQABgHAAgOQAAgTgDgHQgEgHgGAAQgGAAgDAHg");
	this.shape_56.setTransform(16.1,32.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CCCCCC").s().p("AgqA0QACgNAHgLQAIgLAUgPQALgIADgFQAEgFAAgEQAAgFgEgDQgDgDgFAAQgEAAgDADQgEAEgBAIIgdgCQACgMAEgHQAFgHAJgDQAHgEANAAQAQAAAIADQAIAEAFAHQAFAHAAAJQAAAKgGAIQgFAHgPAKIgLAJIgFAGIArAAIAAAXg");
	this.shape_57.setTransform(6.3,32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.4,71,272.3);


(lib.oracle_map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.map_text = new lib.MAP_TEXT();
	this.map_text.setTransform(74.6,33,1,1,0,0,0,62.7,18.6);

	this.timeline.addTween(cjs.Tween.get(this.map_text).wait(1));

	// map
	this.instance = new lib.oracle_map3_small();
	this.instance.setTransform(0,0,0.669,0.669);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167.3,88.3);


(lib.map_background_right = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.map.addEventListener("mouseover", onMouseOverHandler.bind(this));
		this.map.addEventListener("mouseout", onMouseOutHandler.bind(this));
		function onMouseOverHandler() {
		
			this.map.alpha = .3;
			stage.update();
		
		}
		
		
		function onMouseOutHandler() {
		
			this.map.alpha = 1;
			stage.update();
		
		}
		
		
		
		this.map.addEventListener("click", onMapClick.bind(this));
		
		function onMapClick() {
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// labels
	this.instance = new lib.Symbol9();
	this.instance.setTransform(208.3,83.4,1,1,0,0,0,64.3,13.2);
	this.instance.cache(-2,-2,133,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// icons
	this.map = new lib.oracle_map();
	this.map.setTransform(227.6,145.1,1,1,0,0,0,83.6,44.1);

	this.timeline.addTween(cjs.Tween.get(this.map).wait(1));

	// back
	this.instance_1 = new lib.map_original();
	this.instance_1.setTransform(94,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94,41,300,190);


(lib.ibis_text_short_units_param_1_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var me = this;
		
		
		IBISDataPointHit.createPointHit(me, me.hitArea_mc)
		
		function ibisSetText(dp) {
		
			me.value_txt.text = dp.getCurrentValueFormatted();
			me.units_txt.text = dp.getUnits();
		
			me.ibisDataPoint = dp;
		
		
			IBISDataPointHit.updateCache(me, me.hitArea_mc, dp);
			IBISDataPointHit.updatePointHit(me, me.hitArea_mc, dp);
		
		}
		
		
		function ibisSetDataPoint(dp) {
		
		
		}
		
		
		
		var dataModel = [{
			funcName: "ibisSetText(1)",
			func: ibisSetText
		}, {
			funcName: "ibisSetDataPoint",
			func: ibisSetDataPoint
		}]
		
		return dataModel;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.units_txt = new cjs.Text("units", "14px 'Arial'", "#FFFFFF");
	this.units_txt.name = "units_txt";
	this.units_txt.lineHeight = 36;
	this.units_txt.lineWidth = 34;
	this.units_txt.setTransform(87.5,2.3);

	this.value_txt = new cjs.Text("Loading... ", "17px 'Arial'", "#FFFFFF");
	this.value_txt.name = "value_txt";
	this.value_txt.textAlign = "right";
	this.value_txt.lineHeight = 39;
	this.value_txt.lineWidth = 78;
	this.value_txt.setTransform(80.6,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.value_txt},{t:this.units_txt}]}).wait(1));

	// pointHit
	this.hitArea_mc = new lib.point_hit_short_units_mc();
	this.hitArea_mc.setTransform(85.5,12.9,1,1,0,0,0,85.9,10.8);

	this.timeline.addTween(cjs.Tween.get(this.hitArea_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.2,124.2,23.8);


(lib.ibis_text_short_units_param_0_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var me = this;
		
		
		IBISDataPointHit.createPointHit(me, me.hitArea_mc)
		
		function ibisSetText(dp) {
		
			me.value_txt.text = dp.getCurrentValueFormatted();
			me.units_txt.text = dp.getUnits();
		
			me.ibisDataPoint = dp;
		
		
			IBISDataPointHit.updateCache(me, me.hitArea_mc, dp);
			IBISDataPointHit.updatePointHit(me, me.hitArea_mc, dp);
		
		}
		
		
		function ibisSetDataPoint(dp) {
		
		
		}
		
		
		
		var dataModel = [{
			funcName: "ibisSetText",
			func: ibisSetText
		}, {
			funcName: "ibisSetDataPoint",
			func: ibisSetDataPoint
		}]
		
		return dataModel;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.units_txt = new cjs.Text("units", "14px 'Arial'", "#FFFFFF");
	this.units_txt.name = "units_txt";
	this.units_txt.lineHeight = 36;
	this.units_txt.lineWidth = 34;
	this.units_txt.setTransform(87.5,2.3);

	this.value_txt = new cjs.Text("Loading... ", "17px 'Arial'", "#FFFFFF");
	this.value_txt.name = "value_txt";
	this.value_txt.textAlign = "right";
	this.value_txt.lineHeight = 39;
	this.value_txt.lineWidth = 78;
	this.value_txt.setTransform(80.6,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.value_txt},{t:this.units_txt}]}).wait(1));

	// pointHit
	this.hitArea_mc = new lib.point_hit_short_units_mc();
	this.hitArea_mc.setTransform(85.5,12.9,1,1,0,0,0,85.9,10.8);

	this.timeline.addTween(cjs.Tween.get(this.hitArea_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.2,124.2,23.8);


(lib.ibis_text_short_units_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var me = this;
		
		IBISDataPointHit.createPointHit(me, me.hitArea_mc)
		
		function ibisSetText(dp) {
		
			me.value_txt.text = dp.getCurrentValueFormatted();
			me.units_txt.text = dp.getUnits();
		
			me.ibisDataPoint = dp;
			IBISDataPointHit.updateCache(me, me.hitArea_mc, dp);
			IBISDataPointHit.updatePointHit(me, me.hitArea_mc,dp);
		
		}
		
		
		function ibisSetDataPoint(dp) {
		
		
		}
		
		
		
		var dataModel = [{
			funcName: "ibisSetText",
			func: ibisSetText
		}, {
			funcName: "ibisSetDataPoint",
			func: ibisSetDataPoint
		}]
		
		return dataModel;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.units_txt = new cjs.Text("units", "15px 'Arial'", "#FFFFFF");
	this.units_txt.name = "units_txt";
	this.units_txt.lineHeight = 37;
	this.units_txt.lineWidth = 33;
	this.units_txt.setTransform(87.5,2.3);

	this.value_txt = new cjs.Text("Loading... ", "17px 'Arial'", "#FFFFFF");
	this.value_txt.name = "value_txt";
	this.value_txt.textAlign = "right";
	this.value_txt.lineHeight = 39;
	this.value_txt.lineWidth = 78;
	this.value_txt.setTransform(80.6,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.value_txt},{t:this.units_txt}]}).wait(1));

	// pointHit
	this.hitArea_mc = new lib.point_hit_short_units_mc();
	this.hitArea_mc.setTransform(65.5,10.8,1,1,0,0,0,65.5,10.8);

	this.timeline.addTween(cjs.Tween.get(this.hitArea_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.2,123.4,23.6);


(lib.ibis_text_long_units_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var me = this;
		
		
		IBISDataPointHit.createPointHit(me, me.hitArea_mc)
		
		function ibisSetText(dp) {
		
			me.value_txt.text = dp.getCurrentValueFormatted();
			me.units_txt.text = dp.getUnits();
		
			me.ibisDataPoint = dp;
			IBISDataPointHit.updateCache(me, me.hitArea_mc, dp);
			IBISDataPointHit.updatePointHit(me, me.hitArea_mc,dp);
		
		}
		
		
		function ibisSetDataPoint(dp) {
		
		
		}
		
		
		
		var dataModel = [{
			funcName: "ibisSetText",
			func: ibisSetText
		}, {
			funcName: "ibisSetDataPoint",
			func: ibisSetDataPoint
		}]
		
		return dataModel;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.units_txt = new cjs.Text("units", "18px 'Arial'", "#FFFFFF");
	this.units_txt.name = "units_txt";
	this.units_txt.lineHeight = 40;
	this.units_txt.lineWidth = 89;
	this.units_txt.setTransform(87.5,0.7);

	this.value_txt = new cjs.Text("Loading... ", "23px 'Arial'", "#FFFFFF");
	this.value_txt.name = "value_txt";
	this.value_txt.textAlign = "right";
	this.value_txt.lineHeight = 46;
	this.value_txt.lineWidth = 142;
	this.value_txt.setTransform(83.5,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.value_txt},{t:this.units_txt}]}).wait(1));

	// pointHit
	this.hitArea_mc = new lib.point_hit_large_mc();
	this.hitArea_mc.setTransform(22.1,8.8,1,1,0,0,0,65.5,10.8);

	this.timeline.addTween(cjs.Tween.get(this.hitArea_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-6.1,240.8,37.5);


(lib.GAS_MTD_ALL_BUILDINGS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bldgOPL_gas_MTD = new lib.ibis_text_long_units_mc();
	this.bldgOPL_gas_MTD.setTransform(80.2,255.7,0.709,0.709,0,0,0,52.8,15.9);

	this.bldg600_gas_MTD = new lib.ibis_text_long_units_mc();
	this.bldg600_gas_MTD.setTransform(80.2,233.4,0.709,0.709,0,0,0,52.8,15.5);

	this.bldg501_gas_MTD = new lib.ibis_text_long_units_mc();
	this.bldg501_gas_MTD.setTransform(80.2,211.8,0.709,0.709,0,0,0,52.8,15.9);

	this.bldg500_gas_MTD = new lib.ibis_text_long_units_mc();
	this.bldg500_gas_MTD.setTransform(80.2,189.8,0.709,0.709,0,0,0,52.8,15.6);

	this.bldg401_gas_MTD = new lib.ibis_text_long_units_mc();
	this.bldg401_gas_MTD.setTransform(80.2,168.1,0.709,0.709,0,0,0,52.8,15.7);

	this.bldg400_gas_MTD = new lib.ibis_text_long_units_mc();
	this.bldg400_gas_MTD.setTransform(80.2,146.3,0.709,0.709,0,0,0,52.8,15.7);

	this.bldg350_gas_MTD = new lib.ibis_text_long_units_mc();
	this.bldg350_gas_MTD.setTransform(80.2,124.5,0.709,0.709,0,0,0,52.8,15.7);

	this.bldg301_gas_MTD = new lib.ibis_text_long_units_mc();
	this.bldg301_gas_MTD.setTransform(80.2,102.9,0.709,0.709,0,0,0,52.8,16);

	this.bldg300_gas_MTD = new lib.ibis_text_long_units_mc();
	this.bldg300_gas_MTD.setTransform(80.2,81,0.709,0.709,0,0,0,52.8,15.8);

	this.bldg250_gas_MTD = new lib.ibis_text_long_units_mc();
	this.bldg250_gas_MTD.setTransform(80.2,59.2,0.709,0.709,0,0,0,52.8,15.9);

	this.bldg200_gas_MTD = new lib.ibis_text_long_units_mc();
	this.bldg200_gas_MTD.setTransform(80.2,37.3,0.709,0.709,0,0,0,52.8,15.7);

	this.bldg100_gas_MTD = new lib.ibis_text_long_units_mc();
	this.bldg100_gas_MTD.setTransform(80,15.5,0.706,0.693,0,0,0,52.8,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg100_gas_MTD},{t:this.bldg200_gas_MTD},{t:this.bldg250_gas_MTD},{t:this.bldg300_gas_MTD},{t:this.bldg301_gas_MTD},{t:this.bldg350_gas_MTD},{t:this.bldg400_gas_MTD},{t:this.bldg401_gas_MTD},{t:this.bldg500_gas_MTD},{t:this.bldg501_gas_MTD},{t:this.bldg600_gas_MTD},{t:this.bldgOPL_gas_MTD}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,170.8,266.5);


(lib.GAS_DTD_ALL_BUILDINGS = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bldgOPL_gas_DTD = new lib.ibis_text_long_units_mc();
	this.bldgOPL_gas_DTD.setTransform(45.2,244.6,0.748,0.748,0,0,0,0.3,0.3);

	this.bldg600_gas_DTD = new lib.ibis_text_long_units_mc();
	this.bldg600_gas_DTD.setTransform(45.2,222.6,0.748,0.748,0,0,0,0.3,0.3);

	this.bldg501_gas_DTD = new lib.ibis_text_long_units_mc();
	this.bldg501_gas_DTD.setTransform(45.2,200.9,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg500_gas_DTD = new lib.ibis_text_long_units_mc();
	this.bldg500_gas_DTD.setTransform(45.2,179.1,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg401_gas_DTD = new lib.ibis_text_long_units_mc();
	this.bldg401_gas_DTD.setTransform(45.2,157.4,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg400_gas_DTD = new lib.ibis_text_long_units_mc();
	this.bldg400_gas_DTD.setTransform(45.2,135.5,0.748,0.748,0,0,0,0.3,0.3);

	this.bldg350_gas_DTD = new lib.ibis_text_long_units_mc();
	this.bldg350_gas_DTD.setTransform(45.2,113.7,0.748,0.748,0,0,0,0.3,0.3);

	this.bldg301_gas_DTD = new lib.ibis_text_long_units_mc();
	this.bldg301_gas_DTD.setTransform(45.2,92,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg300_gas_DTD = new lib.ibis_text_long_units_mc();
	this.bldg300_gas_DTD.setTransform(45.2,70.2,0.748,0.748,0,0,0,0.3,0.5);

	this.bldg250_gas_DTD = new lib.ibis_text_long_units_mc();
	this.bldg250_gas_DTD.setTransform(45.2,48.4,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg200_gas_DTD = new lib.ibis_text_long_units_mc();
	this.bldg200_gas_DTD.setTransform(45.2,26.7,0.748,0.748,0,0,0,0.3,0.5);

	this.bldg100_gas_DTD = new lib.ibis_text_long_units_mc();
	this.bldg100_gas_DTD.setTransform(45.2,5,0.748,0.748,0,0,0,0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg100_gas_DTD},{t:this.bldg200_gas_DTD},{t:this.bldg250_gas_DTD},{t:this.bldg300_gas_DTD},{t:this.bldg301_gas_DTD},{t:this.bldg350_gas_DTD},{t:this.bldg400_gas_DTD},{t:this.bldg401_gas_DTD},{t:this.bldg500_gas_DTD},{t:this.bldg501_gas_DTD},{t:this.bldg600_gas_DTD},{t:this.bldgOPL_gas_DTD}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,267.9);


(lib.GAS_MTD_ALL_BUILDINGS_KITCHE_OTHER = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bldgOPL_gas_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldgOPL_gas_MTD.setTransform(53.8,256.5,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg600_gas_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg600_gas_MTD.setTransform(53.8,233.8,1.01,1.01,0,0,0,52.6,15.4);

	this.bldg500_gas_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg500_gas_MTD.setTransform(53.8,190.3,1.01,1.01,0,0,0,52.6,15.5);

	this.bldg401_gas_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg401_gas_MTD.setTransform(53.8,168.6,1.01,1.01,0,0,0,52.6,15.6);

	this.bldg400_gas_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg400_gas_MTD.setTransform(53.8,146.9,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg350_gas_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg350_gas_MTD.setTransform(53.8,125.1,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg300_gas_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg300_gas_MTD.setTransform(53.8,81.5,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg200_gas_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg200_gas_MTD.setTransform(53.8,37.9,1.01,1.01,0,0,0,52.6,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg200_gas_MTD},{t:this.bldg300_gas_MTD},{t:this.bldg350_gas_MTD},{t:this.bldg400_gas_MTD},{t:this.bldg401_gas_MTD},{t:this.bldg500_gas_MTD},{t:this.bldg600_gas_MTD},{t:this.bldgOPL_gas_MTD}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,21.8,125.5,242.5);


(lib.GAS_DTD_ALL_BUILDINGS_KITCHE_OTHER = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bldgOPL_gas_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldgOPL_gas_DTD.setTransform(53.8,256.5,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg600_gas_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg600_gas_DTD.setTransform(53.8,233.8,1.01,1.01,0,0,0,52.6,15.4);

	this.bldg500_gas_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg500_gas_DTD.setTransform(53.8,190.3,1.01,1.01,0,0,0,52.6,15.5);

	this.bldg401_gas_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg401_gas_DTD.setTransform(53.8,168.6,1.01,1.01,0,0,0,52.6,15.6);

	this.bldg400_gas_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg400_gas_DTD.setTransform(53.8,146.9,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg350_gas_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg350_gas_DTD.setTransform(53.8,125.1,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg300_gas_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg300_gas_DTD.setTransform(53.8,81.5,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg200_gas_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg200_gas_DTD.setTransform(53.8,37.9,1.01,1.01,0,0,0,52.6,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg200_gas_DTD},{t:this.bldg300_gas_DTD},{t:this.bldg350_gas_DTD},{t:this.bldg400_gas_DTD},{t:this.bldg401_gas_DTD},{t:this.bldg500_gas_DTD},{t:this.bldg600_gas_DTD},{t:this.bldgOPL_gas_DTD}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,21.8,125.5,242.5);


(lib.charts = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// labels
	this.instance = new lib.Symbol4();
	this.instance.setTransform(357.9,12.6,1.41,1.41);
	this.instance.cache(-3,-3,25,149);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(35.3,114,1,1,0,0,0,43.7,76.8);
	this.instance_1.cache(-13,-27,99,211);

	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(-53.2,18.5,1.294,1.294);
	this.instance_2.cache(-3,-3,27,156);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgxBHIAAiNIAcAAIAAB1IBHAAIAAAYg");
	this.shape.setTransform(437.9,204.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ag2BIIAAiPIAvAAQAYAAAJACQAMADAJALQAIALAAASQAAANgFAJQgFAHgHAFQgHAFgIACQgLACgRAAIgTAAIAAA3gAgYgFIAPAAQAQAAAGgDQAFgCADgFQAEgFAAgGQAAgIgEgFQgFgFgHgBQgGgBgOAAIgNAAg");
	this.shape_1.setTransform(424,204.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgyA3QgTgUAAgjQAAgUAHgPQAFgLAJgJQAIgIAKgFQAOgFAQAAQAfAAAUATQASAUABAiQgBAjgSATQgUAUgfAAQgeAAgUgTgAgbgkQgLAMAAAYQAAAYALANQALAMAQAAQARAAALgMQAMgNAAgYQAAgYgMgMQgLgMgRAAQgQAAgLAMg");
	this.shape_2.setTransform(408.3,204.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ag2BIIAAiPIAvAAQAZAAAIACQANADAHALQAJALAAASQAAANgFAJQgEAHgIAFQgIAFgHACQgKACgTAAIgTAAIAAA3gAgZgFIAQAAQAPAAAHgDQAFgCAEgFQADgFAAgGQAAgIgEgFQgGgFgHgBQgEgBgOAAIgPAAg");
	this.shape_3.setTransform(460.1,167.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgyA3QgSgUgBgjQABgUAGgPQAFgLAIgJQAJgIAKgFQANgFARAAQAfAAATATQAUAUAAAiQAAAjgUATQgTAUgfAAQgeAAgUgTgAgbgkQgMAMAAAYQAAAYAMANQALAMAQAAQARAAALgMQAMgNgBgYQABgYgMgMQgLgMgRAAQgRAAgKAMg");
	this.shape_4.setTransform(444.4,167.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AggA5QgNgQAAgpQAAgnANgTQAMgPAUABQAVgBALAPQAOATAAAnQAAAogOATQgMAPgUgBQgUABgMgRgAgHguQgFADgCAJQgCAKAAAYQgBAZADAKQACAJAFADQADAEAEAAQAEAAAFgEQADgDACgIQAEgLAAgZQgBgYgCgKQgCgJgEgDQgFgEgEAAQgEAAgDAEg");
	this.shape_5.setTransform(430,167.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AghA5QgMgQAAgpQAAgnANgTQAMgPAUABQAUgBANAPQAOATgBAnQAAAogOATQgMAPgUgBQgUABgNgRgAgHguQgEADgDAJQgCAKAAAYQgBAZADAKQADAJAEADQAEAEADAAQAFAAAEgEQADgDADgIQADgLAAgZQgBgYgCgKQgDgJgDgDQgEgEgFAAQgDAAgEAEg");
	this.shape_6.setTransform(418,167.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AghA4QgOgQAAgoQAAglAPgRQAPgTAVABQARAAALAJQAKAJADASIgbACQgBgHgEgEQgEgFgGAAQgHABgGAHQgGAJgCAZQAKgNAOAAQARAAANANQAMALAAAWQAAAVgNAOQgNANgVAAQgTABgPgSgAgKAEQgGAGAAAMQAAAOAHAHQAGAIAGAAQAIgBAFgGQAFgFAAgOQAAgPgGgGQgFgEgJAAQgGAAgFAEg");
	this.shape_7.setTransform(406,167.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("Ag2BIIAAiPIAvAAQAYAAAJACQAMADAJALQAIALAAASQAAANgFAJQgFAHgHAFQgHAFgIACQgLACgRAAIgTAAIAAA3gAgYgFIAPAAQAQAAAGgDQAFgCAEgFQADgFAAgGQAAgIgEgFQgGgFgHgBQgFgBgOAAIgNAAg");
	this.shape_8.setTransform(450,131.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgNBIIAAiPIAbAAIAACPg");
	this.shape_9.setTransform(439.4,131.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AAEBIIAAhmQgOAOgUAHIAAgZQALgEAMgKQALgKAFgNIAWAAIAACPg");
	this.shape_10.setTransform(429.2,131.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AghA5QgMgQAAgpQAAgnANgTQAMgOAUAAQAUAAANAOQAOATgBAnQAAApgOARQgMAQgUgBQgUABgNgRgAgHguQgEADgDAJQgCAKAAAYQgBAZADAKQADAJAEADQAEADADABQAFgBAEgDQADgDADgIQADgLAAgZQgBgYgCgJQgDgKgDgDQgEgDgFgBQgDABgEADg");
	this.shape_11.setTransform(418,131.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AggA9QgNgKgCgTIAbgCQACAJAFAGQAGAFAHAAQAHAAAHgIQAGgGAAgPQAAgNgGgGQgGgFgIAAQgMAAgJAIIgXgDIAOhJIBIAAIAAAZIgzAAIgEAZQAJgEAIAAQASAAANANQANAMAAAVQAAASgKAOQgOATgYAAQgUAAgMgLg");
	this.shape_12.setTransform(406.1,131.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("Ag2BIIAAiPIAvAAQAZAAAIACQANADAHALQAJALAAASQAAANgFAJQgEAHgIAFQgIAFgHACQgKACgTAAIgTAAIAAA3gAgZgFIAQAAQAPAAAHgDQAFgCAEgFQADgFAAgGQAAgIgEgFQgGgFgHgBQgEgBgOAAIgPAAg");
	this.shape_13.setTransform(460.1,94.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgyA3QgSgUgBgjQABgUAGgPQAFgLAIgJQAJgIAKgFQANgFARAAQAfAAATATQAUAUAAAiQAAAjgUATQgTAUgfAAQgeAAgUgTgAgbgkQgMAMAAAYQAAAYAMANQALAMAQAAQARAAALgMQAMgNgBgYQABgYgMgMQgLgMgRAAQgRAAgKAMg");
	this.shape_14.setTransform(444.4,94.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AggA5QgNgQAAgpQAAgnANgTQAMgOAUAAQAVAAALAOQAOATAAAnQAAApgOARQgMAPgUABQgUgBgMgQgAgHguQgFADgCAJQgCAKAAAYQgBAZADAKQACAJAFADQADADAEAAQAEAAAFgDQADgDACgIQAEgLAAgZQgBgYgCgJQgCgKgEgDQgFgDgEgBQgEABgDADg");
	this.shape_15.setTransform(430,94.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AghA5QgMgQAAgpQAAgnANgTQAMgOAUAAQAUAAANAOQAOATgBAnQAAApgOARQgMAPgUABQgUgBgNgQgAgHguQgEADgDAJQgCAKAAAYQgBAZADAKQADAJAEADQAEADADAAQAFAAAEgDQADgDADgIQADgLAAgZQgBgYgCgJQgDgKgDgDQgEgDgFgBQgDABgEADg");
	this.shape_16.setTransform(418,94.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AggA9QgNgLgCgSIAbgCQACAJAFAFQAGAGAHAAQAHAAAHgIQAGgGAAgOQAAgOgGgGQgGgFgIAAQgMAAgJAIIgXgDIAOhJIBIAAIAAAZIgzAAIgEAZQAJgEAIgBQASAAANAOQANAMAAAVQAAASgKAOQgOATgYAAQgUAAgMgLg");
	this.shape_17.setTransform(406.1,94.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("Ag2BIIAAiPIAvAAQAYAAAJACQAMADAJALQAIALAAASQAAANgFAJQgFAHgHAFQgHAFgIACQgLACgRAAIgTAAIAAA3gAgYgFIAPAAQAQAAAGgDQAFgCAEgFQADgFAAgGQAAgIgEgFQgGgFgHgBQgFgBgOAAIgNAAg");
	this.shape_18.setTransform(450,58.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AgNBIIAAiPIAbAAIAACPg");
	this.shape_19.setTransform(439.4,58.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AAEBIIAAhmQgOAOgUAHIAAgZQALgEAMgKQALgKAFgNIAWAAIAACPg");
	this.shape_20.setTransform(429.2,58.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AghA5QgMgQAAgpQAAgoANgSQAMgPAUAAQAUAAANAPQAOASgBAoQAAApgOARQgMAPgUABQgUgBgNgQgAgHguQgEADgDAJQgCAKAAAYQgBAZADAKQADAJAEAEQAEACADAAQAFAAAEgCQADgEADgIQADgLAAgZQgBgYgCgJQgDgKgDgDQgEgDgFgBQgDABgEADg");
	this.shape_21.setTransform(418,58.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AAGBIIAAgdIg4AAIAAgYIA8haIAXAAIAABaIASAAIAAAYIgSAAIAAAdgAgZATIAfAAIAAgwg");
	this.shape_22.setTransform(406,58.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("Ag2BIIAAiPIAvAAQAZAAAIACQANADAHALQAJALAAASQAAANgFAJQgEAHgIAFQgIAFgHACQgKACgTAAIgTAAIAAA3gAgZgFIAQAAQAPAAAHgDQAFgCAEgFQADgFAAgGQAAgIgEgFQgGgFgHgBQgEgBgOAAIgPAAg");
	this.shape_23.setTransform(460.1,21.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AgyA3QgSgUgBgjQABgUAGgPQAFgLAIgJQAJgIAKgFQANgFARAAQAfAAATATQAUAUAAAiQAAAjgUATQgTAUgfAAQgeAAgUgTgAgbgkQgMAMAAAYQAAAYAMANQALAMAQAAQARAAALgMQAMgNgBgYQABgYgMgMQgLgMgRAAQgRAAgKAMg");
	this.shape_24.setTransform(444.4,21.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AggA5QgNgQAAgpQAAgoANgRQAMgQAUAAQAVAAALAQQAOARAAAoQAAApgOARQgMAPgUABQgUgBgMgQgAgHguQgFADgCAJQgCAKAAAYQgBAZADAJQACAKAFAEQADACAEAAQAEAAAFgCQADgEACgIQAEgLAAgZQgBgYgCgJQgCgKgEgDQgFgDgEAAQgEAAgDADg");
	this.shape_25.setTransform(430,21.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AghA5QgMgQAAgpQAAgoANgRQAMgQAUAAQAUAAANAQQAOARgBAoQAAApgOARQgMAPgUABQgUgBgNgQgAgHguQgEADgDAJQgCAKAAAYQgBAZADAJQADAKAEAEQAEACADAAQAFAAAEgCQADgEADgIQADgLAAgZQgBgYgCgJQgDgKgDgDQgEgDgFAAQgDAAgEADg");
	this.shape_26.setTransform(418,21.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AAGBIIAAgdIg4AAIAAgYIA8haIAXAAIAABaIASAAIAAAYIgSAAIAAAdgAgZATIAfAAIAAgwg");
	this.shape_27.setTransform(406,21.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgcApQgMgHgDgOIAZgEQACAHAFAFQAFADAHAAQAJAAAFgDQAEgDAAgEQAAgDgCgCIgJgDQgcgHgJgFQgLgHAAgNQAAgMAKgJQAKgIAUgBQASABAKAGQAJAHAEAMIgYAEQgCgFgEgEQgEgDgHAAQgJAAgEADQgDACAAAEQAAACACACQAEADASAEQAUAFAIAGQAIAGAAAMQAAANgLAJQgLAJgVAAQgSABgLgJg");
	this.shape_28.setTransform(90.6,-8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AggA8QgKgJAAgNIAAgDIAdAEQABAFACACQAEADAGAAQAKgBAFgDQADgCACgEIABgMIAAgNQgLAPgQAAQgTAAgLgQQgJgNAAgSQAAgYALgMQAMgNARAAQAQAAAMAPIAAgNIAXAAIAABUQAAARgCAIQgDAJgFAFQgFAFgJACQgIADgNAAQgXAAgKgIgAgNgpQgGAIAAAOQAAAPAGAFQAGAIAHgBQAJABAGgIQAGgFAAgOQAAgPgGgIQgGgGgJAAQgHAAgGAGg");
	this.shape_29.setTransform(79.2,-6.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AASAxIAAgxQAAgOgCgFQgBgEgEgDQgEgCgFAAQgEAAgGAEQgFADgCAGQgCAGAAAOIAAAsIgZAAIAAhfIAXAAIAAAPQANgQARgBQAIAAAHADQAHAEAEAEQADAFACAGQABAGAAALIAAA6g");
	this.shape_30.setTransform(67.6,-8.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgLBCIAAheIAXAAIAABegAgLgpIAAgYIAXAAIAAAYg");
	this.shape_31.setTransform(58.8,-9.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AghA2QgMgOAAgYQAAgWALgNQAMgMARAAQAOAAAMANIAAgwIAZAAIAACDIgXAAIAAgOQgGAIgIAEQgIAEgGAAQgRAAgLgNgAgNgFQgGAGAAAOQAAAPAEAHQAGAKAJAAQAJAAAGgIQAGgHAAgPQAAgQgGgGQgGgHgJAAQgHAAgGAHg");
	this.shape_32.setTransform(49.7,-9.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLBCIAAiDIAXAAIAACDg");
	this.shape_33.setTransform(41.2,-9.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgLBCIAAheIAXAAIAABegAgLgpIAAgYIAXAAIAAAYg");
	this.shape_34.setTransform(35.4,-9.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgbAtQgIgFgEgIQgDgHAAgOIAAg7IAZAAIAAAsQAAATACAFQABAEAEADQAEACAFAAQAFAAAFgDQAFgEACgFQACgFAAgTIAAgpIAZAAIAABfIgXAAIAAgPQgGAIgIAEQgHAEgJAAQgKAAgHgDg");
	this.shape_35.setTransform(26.6,-7.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag2BCIAAiDIA1AAQAOAAAHACQAIABAGAEQAGAEAFAHQADAHAAAJQAAAJgEAIQgGAIgIADQAMADAGAHQAHAJAAALQAAAJgEAJQgFAIgHAGQgHAFgLABQgGABgYAAgAgbArIAYAAIARAAQAFgBAFgFQADgEAAgHQAAgGgCgEQgEgEgFgCQgGgCgQAAIgVAAgAgbgMIARAAIASAAQAGgBAFgEQADgEAAgGQAAgHgDgDQgEgEgGgBIgVgBIgPAAg");
	this.shape_36.setTransform(13.9,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// ibis
	this.bldgOPL_last_month_kWh = new lib.ibis_text_long_units_mc();
	this.bldgOPL_last_month_kWh.setTransform(587.9,201.6,0.965,0.966,0,0,0,43.4,11.1);

	this.bldg600_last_month_kWh = new lib.ibis_text_long_units_mc();
	this.bldg600_last_month_kWh.setTransform(587.9,165.4,0.965,0.966,0,0,0,43.4,11.2);

	this.bldg501_last_month_kWh = new lib.ibis_text_long_units_mc();
	this.bldg501_last_month_kWh.setTransform(587.9,129.5,0.965,0.966,0,0,0,43.4,11.4);

	this.bldg500_last_month_kWh = new lib.ibis_text_long_units_mc();
	this.bldg500_last_month_kWh.setTransform(587.9,93.3,0.965,0.966,0,0,0,43.4,11.2);

	this.bldg401_last_month_kWh = new lib.ibis_text_long_units_mc();
	this.bldg401_last_month_kWh.setTransform(587.9,57,0.965,0.966,0,0,0,43.4,11.1);

	this.bldg400_last_month_kWh = new lib.ibis_text_long_units_mc();
	this.bldg400_last_month_kWh.setTransform(587.9,23.7,0.965,0.966,0,0,0,43.4,11.3);

	this.bldg350_last_month_kWh = new lib.ibis_text_long_units_mc();
	this.bldg350_last_month_kWh.setTransform(158.8,203.4,1,1,0,0,0,43,10.5);

	this.bldg301_last_month_kWh = new lib.ibis_text_long_units_mc();
	this.bldg301_last_month_kWh.setTransform(158.8,167.5,1,1,0,0,0,43,10.5);

	this.bldg300_last_month_kWh = new lib.ibis_text_long_units_mc();
	this.bldg300_last_month_kWh.setTransform(158.8,132.8,1,1,0,0,0,43,10.5);

	this.bldg250_last_month_kWh = new lib.ibis_text_long_units_mc();
	this.bldg250_last_month_kWh.setTransform(158.8,100.6,1,1,0,0,0,43,10.5);

	this.bldg200_last_month_kWh = new lib.ibis_text_long_units_mc();
	this.bldg200_last_month_kWh.setTransform(158.8,65.9,1,1,0,0,0,43,10.5);

	this.bldg100_last_month_kWh = new lib.ibis_text_long_units_mc();
	this.bldg100_last_month_kWh.setTransform(158.8,28.7,1,1,0,0,0,43,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg100_last_month_kWh},{t:this.bldg200_last_month_kWh},{t:this.bldg250_last_month_kWh},{t:this.bldg300_last_month_kWh},{t:this.bldg301_last_month_kWh},{t:this.bldg350_last_month_kWh},{t:this.bldg400_last_month_kWh},{t:this.bldg401_last_month_kWh},{t:this.bldg500_last_month_kWh},{t:this.bldg501_last_month_kWh},{t:this.bldg600_last_month_kWh},{t:this.bldgOPL_last_month_kWh}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.8,-22.5,774,246.8);


(lib.building_details_link_dynamic_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.visible = false /* Hide untill initial tweens finis */
		var me = this;
		me.cursor = "pointer";
		me.mouseChildren=false;
		me.hitArea = this.building_links_hit_area_mc
		me.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		me.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		function fl_MouseOverHandler() {
			me.alpha = .3;
			console.log('over');
			stage.update();
		}
		
		function fl_MouseOutHandler() {
			console.log('out');
			me.alpha = 1;
			stage.update();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.link_label_txt = new cjs.Text("label", "17px 'Arial'", "#FFFFFF");
	this.link_label_txt.name = "link_label_txt";
	this.link_label_txt.textAlign = "right";
	this.link_label_txt.lineHeight = 39;
	this.link_label_txt.lineWidth = 62;
	this.link_label_txt.setTransform(63.6,2);

	this.timeline.addTween(cjs.Tween.get(this.link_label_txt).wait(1));

	// hitArea
	this.building_links_hit_area_mc = new lib.linkt_hit_dynamic_area_mc();
	this.building_links_hit_area_mc.setTransform(102.7,11.5,1,1,0,0,0,102.7,11.5);
	this.building_links_hit_area_mc.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.building_links_hit_area_mc).wait(1));

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2B679").s().p("Agjg1IBHA1IhHA2g");
	this.shape.setTransform(80.6,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.6,23);


(lib.building_details_link_dynamic_chart_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.visible = false /* Hide untill initial tweens finis */
		var me = this;
		me.cursor = "pointer";
		me.mouseChildren=false;
		me.hitArea = this.building_links_hit_area_mc
		me.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		me.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		function fl_MouseOverHandler() {
			me.alpha = .3;
			stage.update();
		}
		
		function fl_MouseOutHandler() {
			me.alpha = 1;
			stage.update();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.link_label_txt = new cjs.Text("charts", "italic 17px 'Arial'", "#FFFFFF");
	this.link_label_txt.name = "link_label_txt";
	this.link_label_txt.lineHeight = 39;
	this.link_label_txt.lineWidth = 47;
	this.link_label_txt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.link_label_txt).wait(1));

	// hitArea
	this.building_links_hit_area_mc = new lib.linkt_hit_dynamic_area_mc();
	this.building_links_hit_area_mc.setTransform(-0.1,11.5,0.501,1,0,0,0,-0.1,11.5);
	this.building_links_hit_area_mc.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.building_links_hit_area_mc).wait(1));

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2B679").s().p("Agjg2IBHA2IhHA2g");
	this.shape.setTransform(64.8,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.5,23);


(lib.building_details_link = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var me = this;
		me.mouseEnabled = false;
		me.summaryView = true;
		me.mouseChildren = false;
		me.cursor = "pointer";
		me.alpha = 0;
		me.hitArea = this.building_links_hit_area_mc
		me.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		me.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler() {
			me.alpha = .3;
			stage.update();
		}
		
		function fl_MouseOutHandler() {
			me.alpha = 1;
			stage.update();
		}
		
		
		me.disable = function(){
			me.visible = false;
		}
		
		me.enable = function (){
			me.visible = true;
			me.alpha = 1;
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.label_text = new cjs.Text("Show Building Details", "italic 25px 'Arial'", "#FFFFFF");
	this.label_text.name = "label_text";
	this.label_text.lineHeight = 48;
	this.label_text.lineWidth = 244;
	this.label_text.setTransform(-36.5,-1.3,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.label_text).wait(1));

	// hitArea
	this.building_links_hit_area_mc = new lib.linkt_hit_area();
	this.building_links_hit_area_mc.setTransform(-39.7,-4.4,1.082,1.44,0,0,0,-0.1,0);
	this.building_links_hit_area_mc.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.building_links_hit_area_mc).wait(1));

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2B679").s().p("Agjg1IBHA1IhHA2g");
	this.shape.setTransform(179,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-4.4,222.3,33.1);


(lib.buidling_301_power_details = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// labels
	this.instance = new lib.textdemand();
	this.instance.setTransform(315,-55);

	this.instance_1 = new lib.textmtd();
	this.instance_1.setTransform(204,-55);

	this.instance_2 = new lib.textbuildingtotalpower();
	this.instance_2.setTransform(-9,-26,0.867,0.867);

	this.instance_3 = new lib.textbuilding301address();
	this.instance_3.setTransform(188,-98,0.801,0.802);

	this.instance_4 = new lib.textbuilding301power();
	this.instance_4.setTransform(186,-130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// ibis
	this.building_total_kW = new lib.ibis_text_short_units_mc();
	this.building_total_kW.setTransform(362.5,-10.4,1,1,0,0,0,43,10.5);

	this.building_total_kWh = new lib.ibis_text_short_units_param_1_mc();
	this.building_total_kWh.setTransform(229.7,-11.2,1,1,0,0,0,43,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.building_total_kWh},{t:this.building_total_kW}]}).wait(1));

	// back
	this.instance_5 = new lib.back301();
	this.instance_5.setTransform(-67,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-177,624,700);


(lib.WATER_MTD_ALL_BUILDINGS = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bldgOPL_water_MTD = new lib.ibis_text_long_units_mc();
	this.bldgOPL_water_MTD.setTransform(80.2,255.7,0.709,0.709,0,0,0,52.8,15.9);

	this.bldg600_water_MTD = new lib.ibis_text_long_units_mc();
	this.bldg600_water_MTD.setTransform(80.2,233.4,0.709,0.709,0,0,0,52.8,15.5);

	this.bldg501_water_MTD = new lib.ibis_text_long_units_mc();
	this.bldg501_water_MTD.setTransform(80.2,211.8,0.709,0.709,0,0,0,52.8,15.9);

	this.bldg500_water_MTD = new lib.ibis_text_long_units_mc();
	this.bldg500_water_MTD.setTransform(80.2,189.8,0.709,0.709,0,0,0,52.8,15.6);

	this.bldg401_water_MTD = new lib.ibis_text_long_units_mc();
	this.bldg401_water_MTD.setTransform(80.2,168.1,0.709,0.709,0,0,0,52.8,15.7);

	this.bldg400_water_MTD = new lib.ibis_text_long_units_mc();
	this.bldg400_water_MTD.setTransform(80.2,146.3,0.709,0.709,0,0,0,52.8,15.7);

	this.bldg350_water_MTD = new lib.ibis_text_long_units_mc();
	this.bldg350_water_MTD.setTransform(80.2,124.5,0.709,0.709,0,0,0,52.8,15.7);

	this.bldg301_water_MTD = new lib.ibis_text_long_units_mc();
	this.bldg301_water_MTD.setTransform(80.2,102.9,0.709,0.709,0,0,0,52.8,16);

	this.bldg300_water_MTD = new lib.ibis_text_long_units_mc();
	this.bldg300_water_MTD.setTransform(80.2,81,0.709,0.709,0,0,0,52.8,15.8);

	this.bldg250_water_MTD = new lib.ibis_text_long_units_mc();
	this.bldg250_water_MTD.setTransform(80.2,59.2,0.709,0.709,0,0,0,52.8,15.9);

	this.bldg200_water_MTD = new lib.ibis_text_long_units_mc();
	this.bldg200_water_MTD.setTransform(80.2,37.3,0.709,0.709,0,0,0,52.8,15.7);

	this.bldg100_water_MTD = new lib.ibis_text_long_units_mc();
	this.bldg100_water_MTD.setTransform(80,15.5,0.706,0.693,0,0,0,52.8,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg100_water_MTD},{t:this.bldg200_water_MTD},{t:this.bldg250_water_MTD},{t:this.bldg300_water_MTD},{t:this.bldg301_water_MTD},{t:this.bldg350_water_MTD},{t:this.bldg400_water_MTD},{t:this.bldg401_water_MTD},{t:this.bldg500_water_MTD},{t:this.bldg501_water_MTD},{t:this.bldg600_water_MTD},{t:this.bldgOPL_water_MTD}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,170.8,266.5);


(lib.WATER_DTD_ALL_BUILDINGS = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bldgOPL_water_DTD = new lib.ibis_text_long_units_mc();
	this.bldgOPL_water_DTD.setTransform(45.2,244.6,0.748,0.748,0,0,0,0.3,0.3);

	this.bldg600_water_DTD = new lib.ibis_text_long_units_mc();
	this.bldg600_water_DTD.setTransform(45.2,222.6,0.748,0.748,0,0,0,0.3,0.3);

	this.bldg501_water_DTD = new lib.ibis_text_long_units_mc();
	this.bldg501_water_DTD.setTransform(45.2,200.9,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg500_water_DTD = new lib.ibis_text_long_units_mc();
	this.bldg500_water_DTD.setTransform(45.2,179.1,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg401_water_DTD = new lib.ibis_text_long_units_mc();
	this.bldg401_water_DTD.setTransform(45.2,157.4,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg400_water_DTD = new lib.ibis_text_long_units_mc();
	this.bldg400_water_DTD.setTransform(45.2,135.5,0.748,0.748,0,0,0,0.3,0.3);

	this.bldg350_water_DTD = new lib.ibis_text_long_units_mc();
	this.bldg350_water_DTD.setTransform(45.2,113.7,0.748,0.748,0,0,0,0.3,0.3);

	this.bldg301_water_DTD = new lib.ibis_text_long_units_mc();
	this.bldg301_water_DTD.setTransform(45.2,92,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg300_water_DTD = new lib.ibis_text_long_units_mc();
	this.bldg300_water_DTD.setTransform(45.2,70.2,0.748,0.748,0,0,0,0.3,0.5);

	this.bldg250_water_DTD = new lib.ibis_text_long_units_mc();
	this.bldg250_water_DTD.setTransform(45.2,48.4,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg200_water_DTD = new lib.ibis_text_long_units_mc();
	this.bldg200_water_DTD.setTransform(45.2,26.7,0.748,0.748,0,0,0,0.3,0.5);

	this.bldg100_water_DTD = new lib.ibis_text_long_units_mc();
	this.bldg100_water_DTD.setTransform(45.2,5,0.748,0.748,0,0,0,0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg100_water_DTD},{t:this.bldg200_water_DTD},{t:this.bldg250_water_DTD},{t:this.bldg300_water_DTD},{t:this.bldg301_water_DTD},{t:this.bldg350_water_DTD},{t:this.bldg400_water_DTD},{t:this.bldg401_water_DTD},{t:this.bldg500_water_DTD},{t:this.bldg501_water_DTD},{t:this.bldg600_water_DTD},{t:this.bldgOPL_water_DTD}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,267.9);


(lib.WATER_MTD_ALL_BUILDINGS_KITCHE_OTHER = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bldgOPL_water_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldgOPL_water_MTD.setTransform(53.8,256.5,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg600_water_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg600_water_MTD.setTransform(53.8,233.8,1.01,1.01,0,0,0,52.6,15.4);

	this.bldg500_water_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg500_water_MTD.setTransform(53.8,190.3,1.01,1.01,0,0,0,52.6,15.5);

	this.bldg401_water_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg401_water_MTD.setTransform(53.8,168.6,1.01,1.01,0,0,0,52.6,15.6);

	this.bldg400_water_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg400_water_MTD.setTransform(53.8,146.9,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg350_water_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg350_water_MTD.setTransform(53.8,125.1,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg300_water_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg300_water_MTD.setTransform(53.8,81.5,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg200_water_MTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg200_water_MTD.setTransform(53.8,37.9,1.01,1.01,0,0,0,52.6,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg200_water_MTD},{t:this.bldg300_water_MTD},{t:this.bldg350_water_MTD},{t:this.bldg400_water_MTD},{t:this.bldg401_water_MTD},{t:this.bldg500_water_MTD},{t:this.bldg600_water_MTD},{t:this.bldgOPL_water_MTD}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,21.8,125.5,242.5);


(lib.WATER_DTD_ALL_BUILDINGS_KITCHE_OTHER = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bldgOPL_water_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldgOPL_water_DTD.setTransform(53.8,256.5,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg600_water_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg600_water_DTD.setTransform(53.8,233.8,1.01,1.01,0,0,0,52.6,15.4);

	this.bldg500_water_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg500_water_DTD.setTransform(53.8,190.3,1.01,1.01,0,0,0,52.6,15.5);

	this.bldg401_water_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg401_water_DTD.setTransform(53.8,168.6,1.01,1.01,0,0,0,52.6,15.6);

	this.bldg400_water_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg400_water_DTD.setTransform(53.8,146.9,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg350_water_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg350_water_DTD.setTransform(53.8,125.1,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg300_water_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg300_water_DTD.setTransform(53.8,81.5,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg200_water_DTD = new lib.ibis_text_short_units_param_0_mc();
	this.bldg200_water_DTD.setTransform(53.8,37.9,1.01,1.01,0,0,0,52.6,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg200_water_DTD},{t:this.bldg300_water_DTD},{t:this.bldg350_water_DTD},{t:this.bldg400_water_DTD},{t:this.bldg401_water_DTD},{t:this.bldg500_water_DTD},{t:this.bldg600_water_DTD},{t:this.bldgOPL_water_DTD}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,21.8,125.5,242.5);


(lib.submetered_loads_kW_total = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.total_kW = new lib.ibis_text_short_units_mc();
	this.total_kW.setTransform(43.2,10.8,1,1,0,0,0,43,10.5);

	this.timeline.addTween(cjs.Tween.get(this.total_kW).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.4,23.6);


(lib.submetered_loads_kw_other_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bldg_600_kW = new lib.ibis_text_short_units_mc();
	this.bldg_600_kW.setTransform(48.6,234.3,1.01,1.01,0,0,0,52.6,15.4);

	this.bldg_501_kW = new lib.ibis_text_short_units_mc();
	this.bldg_501_kW.setTransform(48.6,212.7,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg_500_kW = new lib.ibis_text_short_units_mc();
	this.bldg_500_kW.setTransform(48.6,190.7,1.01,1.01,0,0,0,52.6,15.5);

	this.bldg_401_kW = new lib.ibis_text_short_units_mc();
	this.bldg_401_kW.setTransform(48.6,169,1.01,1.01,0,0,0,52.6,15.6);

	this.bldg_100_kW = new lib.ibis_text_short_units_mc();
	this.bldg_100_kW.setTransform(48.6,16.2,1.01,1.01,0,0,0,52.6,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg_100_kW},{t:this.bldg_401_kW},{t:this.bldg_500_kW},{t:this.bldg_501_kW},{t:this.bldg_600_kW}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,0,124.6,242.3);


(lib.submetered_loads_kw_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bldg_400_kW = new lib.ibis_text_short_units_mc();
	this.bldg_400_kW.setTransform(48.6,144.1,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg_600_kW = new lib.ibis_text_short_units_mc();
	this.bldg_600_kW.setTransform(48.6,234.3,1.01,1.01,0,0,0,52.6,15.4);

	this.bldg_501_kW = new lib.ibis_text_short_units_mc();
	this.bldg_501_kW.setTransform(48.6,212.7,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg_500_kW = new lib.ibis_text_short_units_mc();
	this.bldg_500_kW.setTransform(48.6,190.7,1.01,1.01,0,0,0,52.6,15.5);

	this.bldg_401_kW = new lib.ibis_text_short_units_mc();
	this.bldg_401_kW.setTransform(48.6,169,1.01,1.01,0,0,0,52.6,15.6);

	this.bldg_100_kW = new lib.ibis_text_short_units_mc();
	this.bldg_100_kW.setTransform(48.6,16.2,1.01,1.01,0,0,0,52.6,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg_100_kW},{t:this.bldg_401_kW},{t:this.bldg_500_kW},{t:this.bldg_501_kW},{t:this.bldg_600_kW},{t:this.bldg_400_kW}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,0,124.6,242.3);


(lib.submetered_loads_kw_HVAC = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bldg_600_kW = new lib.ibis_text_short_units_mc();
	this.bldg_600_kW.setTransform(48.6,234.3,1.01,1.01,0,0,0,52.6,15.4);

	this.bldg_501_kW = new lib.ibis_text_short_units_mc();
	this.bldg_501_kW.setTransform(48.6,212.7,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg_401_kW = new lib.ibis_text_short_units_mc();
	this.bldg_401_kW.setTransform(48.6,169,1.01,1.01,0,0,0,52.6,15.6);

	this.bldg_100_kW = new lib.ibis_text_short_units_mc();
	this.bldg_100_kW.setTransform(48.6,16.2,1.01,1.01,0,0,0,52.6,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg_100_kW},{t:this.bldg_401_kW},{t:this.bldg_501_kW},{t:this.bldg_600_kW}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,0,124.6,242.3);


(lib.right_bar = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// ibis
	this.bldgOPL_last_month_co2 = new lib.ibis_text_long_units_mc();
	this.bldgOPL_last_month_co2.setTransform(221.8,712.2,0.775,0.775,0,0,0,43.3,10.7);

	this.bldg600_last_month_co2 = new lib.ibis_text_long_units_mc();
	this.bldg600_last_month_co2.setTransform(221.8,685.1,0.775,0.775,0,0,0,43.3,10.7);

	this.bldg501_last_month_co2 = new lib.ibis_text_long_units_mc();
	this.bldg501_last_month_co2.setTransform(221.8,658.6,0.775,0.775,0,0,0,43.3,10.8);

	this.bldg500_last_month_co2 = new lib.ibis_text_long_units_mc();
	this.bldg500_last_month_co2.setTransform(221.8,632,0.775,0.775,0,0,0,43.3,10.8);

	this.bldg401_last_month_co2 = new lib.ibis_text_long_units_mc();
	this.bldg401_last_month_co2.setTransform(221.8,605.3,0.775,0.775,0,0,0,43.3,10.8);

	this.bldg400_last_month_co2 = new lib.ibis_text_long_units_mc();
	this.bldg400_last_month_co2.setTransform(221.8,578.7,0.775,0.775,0,0,0,43.3,10.7);

	this.bldg350_last_month_co2 = new lib.ibis_text_long_units_mc();
	this.bldg350_last_month_co2.setTransform(221.8,552,0.775,0.775,0,0,0,43.3,10.7);

	this.bldg301_last_month_co2 = new lib.ibis_text_long_units_mc();
	this.bldg301_last_month_co2.setTransform(221.8,525.5,0.775,0.775,0,0,0,43.3,10.7);

	this.bldg300_last_month_co2 = new lib.ibis_text_long_units_mc();
	this.bldg300_last_month_co2.setTransform(221.8,498.9,0.775,0.775,0,0,0,43.3,10.7);

	this.bldg250_last_month_co2 = new lib.ibis_text_long_units_mc();
	this.bldg250_last_month_co2.setTransform(221.8,472.2,0.775,0.775,0,0,0,43.3,10.7);

	this.bldg200_last_month_co2 = new lib.ibis_text_long_units_mc();
	this.bldg200_last_month_co2.setTransform(221.8,445.5,0.775,0.775,0,0,0,43.3,10.6);

	this.bldg100_last_month_co2 = new lib.ibis_text_long_units_mc();
	this.bldg100_last_month_co2.setTransform(221.8,419,0.775,0.775,0,0,0,43.3,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg100_last_month_co2},{t:this.bldg200_last_month_co2},{t:this.bldg250_last_month_co2},{t:this.bldg300_last_month_co2},{t:this.bldg301_last_month_co2},{t:this.bldg350_last_month_co2},{t:this.bldg400_last_month_co2},{t:this.bldg401_last_month_co2},{t:this.bldg500_last_month_co2},{t:this.bldg501_last_month_co2},{t:this.bldg600_last_month_co2},{t:this.bldgOPL_last_month_co2}]}).wait(1));

	// images
	this.instance = new lib.Symbol7();
	this.instance.setTransform(196.2,312,1,1,0,0,0,124.2,42);
	this.instance.cache(-2,-2,252,88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lines
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(232.4,553.3,1,1,0,0,0,144.5,175.7);
	this.instance_1.cache(-2,-2,294,355);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// back
	this.instance_2 = new lib.right_back();
	this.instance_2.setTransform(23,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23,240,353.9,540);


(lib.kw_per_squared_feet_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.bldg_OPL_kW = new lib.ibis_text_short_units_mc();
	this.bldg_OPL_kW.setTransform(48.6,256.5,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg_600_kW = new lib.ibis_text_short_units_mc();
	this.bldg_600_kW.setTransform(48.6,234.3,1.01,1.01,0,0,0,52.6,15.4);

	this.bldg_501_kW = new lib.ibis_text_short_units_mc();
	this.bldg_501_kW.setTransform(48.6,212.7,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg_500_kW = new lib.ibis_text_short_units_mc();
	this.bldg_500_kW.setTransform(48.6,190.7,1.01,1.01,0,0,0,52.6,15.5);

	this.bldg_401_kW = new lib.ibis_text_short_units_mc();
	this.bldg_401_kW.setTransform(48.6,169,1.01,1.01,0,0,0,52.6,15.6);

	this.bldg_400_kW = new lib.ibis_text_short_units_mc();
	this.bldg_400_kW.setTransform(48.6,147,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg_350_kW = new lib.ibis_text_short_units_mc();
	this.bldg_350_kW.setTransform(48.6,125.3,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg_301_kW = new lib.ibis_text_short_units_mc();
	this.bldg_301_kW.setTransform(48.6,103.6,1.01,1.01,0,0,0,52.6,15.9);

	this.bldg_300_kW = new lib.ibis_text_short_units_mc();
	this.bldg_300_kW.setTransform(48.6,81.7,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg_250_kW = new lib.ibis_text_short_units_mc();
	this.bldg_250_kW.setTransform(48.6,59.9,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg_200_kW = new lib.ibis_text_short_units_mc();
	this.bldg_200_kW.setTransform(48.6,38.2,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg_100_kW = new lib.ibis_text_short_units_mc();
	this.bldg_100_kW.setTransform(48.6,16.2,1.01,1.01,0,0,0,52.6,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg_100_kW},{t:this.bldg_200_kW},{t:this.bldg_250_kW},{t:this.bldg_300_kW},{t:this.bldg_301_kW},{t:this.bldg_350_kW},{t:this.bldg_400_kW},{t:this.bldg_401_kW},{t:this.bldg_500_kW},{t:this.bldg_501_kW},{t:this.bldg_600_kW},{t:this.bldg_OPL_kW}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,0,124.6,264.1);


(lib.footer = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// labels
	this.instance = new lib.Symbol5();
	this.instance.setTransform(2219.7,238.1,1,1,0,0,0,128.3,22.6);
	this.instance.cache(-2,-2,261,49);

	this.kWh_chart = new lib.charts();
	this.kWh_chart.setTransform(1365,49.2,1,1,0,0,0,51.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kWh_chart},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1259.4,13.9,1088.8,246.8);


(lib.campus_summary_total_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var me = this;
		me.waterSummaryView = true;
		
		
		
		me.Bldg_water_summaries_details_link.addEventListener("click", showWaterHideClick.bind(this));
		function showWaterHideClick() {
		
			if (me.waterSummaryView) {
				showWaterDetails();
			} else {
				hideWaterDetails();
			}
		
		
		
		}
		
		function showWaterDetails() {
		
			IBISLibrary.increaseFrameRate();
		
			me.Bldg_water_summaries_details_link.disable();
			
			me.Bldg_power_summaries_details_link.disable();
			me.Bldg_gas_summaries_details_link.disable();
		
		
			me.tl = new TimelineLite();
			me.tl.to(IBISLibrary.root.total_power_slider_left_mc, 1, {
				useFrames: true,
				y: 435,
				ease: Strong.easeOut
			})
				.to(IBISLibrary.root.buildings_water_slider_left_mc, 1, {
					useFrames: true,
					x: 380,
					ease: Strong.easeOut,
					onComplete: showWaterDetailsComplete
				})
		
		
		}
		
		function hideWaterDetails() {
		
		
			IBISLibrary.increaseFrameRate();
			me.Bldg_water_summaries_details_link.disable();
		
			var tl = new TimelineLite();
			tl.to(IBISLibrary.root.buildings_water_slider_left_mc, 1.5, {
				useFrames: true,
				x: -750,
				ease: Strong.easeOut
		
			})
				.to(IBISLibrary.root.total_power_slider_left_mc, 1, {
					useFrames: true,
					y: 120,
					ease: Strong.easeOut,
					onComplete: showWaterSummaryComplete
				})
		
		
		}
		
		function showWaterDetailsComplete() {
		
			me.Bldg_water_summaries_details_link.label_text.text = "Hide Water Details";
			me.Bldg_water_summaries_details_link.enable();
			me.Bldg_water_summaries_details_link.updateCache();
		
			me.waterSummaryView = !me.waterSummaryView;
			IBISLibrary.lowerFrameRate();
			stage.update();
		
		}
		
		function showWaterSummaryComplete() {
		
			me.Bldg_water_summaries_details_link.label_text.text = "Show Water Details";
			me.Bldg_water_summaries_details_link.enable();
			me.Bldg_water_summaries_details_link.updateCache();
			
			me.Bldg_power_summaries_details_link.enable();
			me.Bldg_gas_summaries_details_link.enable();
		
			me.waterSummaryView = !me.waterSummaryView;
			IBISLibrary.lowerFrameRate();
			stage.update();
		
		}
		var me = this;
		me.gasSummaryView = true;
		
		
		
		me.Bldg_gas_summaries_details_link.addEventListener("click", showGasHideClick.bind(this));
		function showGasHideClick() {
		
			if (me.gasSummaryView) {
				showGasDetails();
			} else {
				hideGasDetails();
			}
		
		
		
		}
		
		function showGasDetails() {
		
			IBISLibrary.increaseFrameRate();
		
			me.Bldg_gas_summaries_details_link.disable();
		
			me.Bldg_power_summaries_details_link.disable();
			me.Bldg_water_summaries_details_link.disable();
			
			me.tl = new TimelineLite();
			me.tl.to(IBISLibrary.root.total_power_slider_left_mc, 1, {
				useFrames: true,
				y: 435,
				ease: Strong.easeOut
			})
				.to(IBISLibrary.root.buildings_gas_slider_left_mc, 1, {
					useFrames: true,
					x: 380,
					ease: Strong.easeOut,
					onComplete: showGasDetailsComplete
				})
		
		
		}
		
		function hideGasDetails() {
		
		
			IBISLibrary.increaseFrameRate();
			me.Bldg_gas_summaries_details_link.disable();
		
			var tl = new TimelineLite();
			tl.to(IBISLibrary.root.buildings_gas_slider_left_mc, 1.5, {
				useFrames: true,
				x: -750,
				ease: Strong.easeOut
		
			})
				.to(IBISLibrary.root.total_power_slider_left_mc, 1, {
					useFrames: true,
					y: 120,
					ease: Strong.easeOut,
					onComplete: showGasSummaryComplete
				})
		
		
		}
		
		function showGasDetailsComplete() {
		
			me.Bldg_gas_summaries_details_link.label_text.text = "Hide Gas Details";
			me.Bldg_gas_summaries_details_link.enable();
			me.Bldg_gas_summaries_details_link.updateCache();
		
			me.gasSummaryView = !me.gasSummaryView;
			IBISLibrary.lowerFrameRate();
			stage.update();
		
		}
		
		function showGasSummaryComplete() {
		
			me.Bldg_gas_summaries_details_link.label_text.text = "Show Gas Details";
			me.Bldg_gas_summaries_details_link.enable();
			me.Bldg_gas_summaries_details_link.updateCache();
		
			me.Bldg_power_summaries_details_link.enable();
			me.Bldg_water_summaries_details_link.enable();
			
			me.gasSummaryView = !me.gasSummaryView;
			IBISLibrary.lowerFrameRate();
			stage.update();
		
		}
		var me = this;
		me.summaryView = true;
		
		
		
		me.Bldg_power_summaries_details_link.addEventListener("click", showHideClick.bind(this));
		function showHideClick() {
		
			if (me.summaryView) {
				showDetails();
			} else {
				hideDetails();
			}
		
		
		
		}
		
		function showDetails() {
		
			IBISLibrary.increaseFrameRate();
		
			me.Bldg_power_summaries_details_link.disable();
			
			me.Bldg_gas_summaries_details_link.disable();
			me.Bldg_water_summaries_details_link.disable();
		
			me.tl = new TimelineLite();
			me.tl.to(IBISLibrary.root.total_power_slider_left_mc, 1, {
				useFrames: true,
				y: 435,
				ease: Strong.easeOut
			})
				.to(IBISLibrary.root.buildings_power_slider_left_mc, 1, {
					useFrames: true,
					x: 380,
					ease: Strong.easeOut,
					onComplete: showDetailsComplete
				})
		
		
		}
		
		function hideDetails() {
		
		
			IBISLibrary.increaseFrameRate();
			me.Bldg_power_summaries_details_link.disable();
		
			var tl = new TimelineLite();
			tl.to(IBISLibrary.root.buildings_power_slider_left_mc, 1.5, {
				useFrames: true,
				x: -750,
				ease: Strong.easeOut
		
			})
				.to(IBISLibrary.root.total_power_slider_left_mc, 1, {
					useFrames: true,
					y: 120,
					ease: Strong.easeOut,
					onComplete: showSummaryComplete
				})
		
		
		}
		
		function showDetailsComplete() {
		
			me.Bldg_power_summaries_details_link.label_text.text = "Hide Power Details";
			me.Bldg_power_summaries_details_link.enable();
			me.Bldg_power_summaries_details_link.updateCache();
		
			me.summaryView = !me.summaryView;
			IBISLibrary.lowerFrameRate();
			stage.update();
		
		}
		
		function showSummaryComplete() {
		
			me.Bldg_power_summaries_details_link.label_text.text = "Show Power Details";
			me.Bldg_power_summaries_details_link.enable();
			me.Bldg_power_summaries_details_link.updateCache();
			
			me.Bldg_gas_summaries_details_link.enable();
			me.Bldg_water_summaries_details_link.enable();
		
			me.summaryView = !me.summaryView;
			IBISLibrary.lowerFrameRate();
			stage.update();
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// icons
	this.instance = new lib.iconwater();
	this.instance.setTransform(-26,301);

	this.instance_1 = new lib.iconfire();
	this.instance_1.setTransform(-26,178);

	this.instance_2 = new lib.metericondropshadow();
	this.instance_2.setTransform(-26,37,0.98,0.98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// ibis values
	this.Total_MTD_water = new lib.ibis_text_short_units_mc();
	this.Total_MTD_water.setTransform(261.9,403.7,1,1,0,0,0,43,10.5);

	this.Total_DTD_water = new lib.ibis_text_short_units_mc();
	this.Total_DTD_water.setTransform(105.5,401,1,1,0,0,0,43,10.5);

	this.Total_MTD_gas = new lib.ibis_text_short_units_mc();
	this.Total_MTD_gas.setTransform(261.9,272.7,1,1,0,0,0,43,10.5);

	this.Total_DTD_gas = new lib.ibis_text_short_units_mc();
	this.Total_DTD_gas.setTransform(105.5,270,1,1,0,0,0,43,10.5);

	this.other_kW = new lib.submetered_loads_kW_total();
	this.other_kW.setTransform(730.5,127.2,1,1,0,0,0,86.1,11.8);

	this.HVAC_kW = new lib.submetered_loads_kW_total();
	this.HVAC_kW.setTransform(557.6,127.2,1,1,0,0,0,86.1,11.8);

	this.labs_kW = new lib.submetered_loads_kW_total();
	this.labs_kW.setTransform(418.5,127.2,1,1,0,0,0,86.1,11.8);

	this.total_kW = new lib.ibis_text_short_units_mc();
	this.total_kW.setTransform(239.2,126.2,1,1,0,0,0,43,10.5);

	this.Total_MTD_power = new lib.ibis_text_short_units_param_1_mc();
	this.Total_MTD_power.setTransform(101.3,126.2,1,1,0,0,0,43,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Total_MTD_power},{t:this.total_kW},{t:this.labs_kW},{t:this.HVAC_kW},{t:this.other_kW},{t:this.Total_DTD_gas},{t:this.Total_MTD_gas},{t:this.Total_DTD_water},{t:this.Total_MTD_water}]}).wait(1));

	// labels
	this.instance_3 = new lib.texttoday();
	this.instance_3.setTransform(113,350);

	this.instance_4 = new lib.textmtd();
	this.instance_4.setTransform(235,350);

	this.instance_5 = new lib.texttotalcampuswaterusage();
	this.instance_5.setTransform(101,317);

	this.instance_6 = new lib.texttoday();
	this.instance_6.setTransform(113,219);

	this.instance_7 = new lib.textmtd();
	this.instance_7.setTransform(235,219);

	this.instance_8 = new lib.texttotalcampusgasusage();
	this.instance_8.setTransform(94,189);

	this.instance_9 = new lib.textcampusutilitysummary();
	this.instance_9.setTransform(-7,-15);

	this.instance_10 = new lib.textother();
	this.instance_10.setTransform(669,67);

	this.instance_11 = new lib.texthvac();
	this.instance_11.setTransform(471,44);

	this.instance_12 = new lib.textlabs();
	this.instance_12.setTransform(363,69);

	this.instance_13 = new lib.textdemand();
	this.instance_13.setTransform(212,68);

	this.instance_14 = new lib.textmtd();
	this.instance_14.setTransform(111,68);

	this.instance_15 = new lib.textcampussubmeteredloads();
	this.instance_15.setTransform(373,38);

	this.instance_16 = new lib.texttotalcampuspower();
	this.instance_16.setTransform(85,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// lines and bar
	this.instance_17 = new lib.VG_MC_campus_summary_back();
	this.instance_17.setTransform(354.6,350.2,1,1,0,0,0,445.2,32.8);
	this.instance_17.cache(-2,-2,895,70);

	this.instance_18 = new lib.VG_MC_campus_summary_back();
	this.instance_18.setTransform(354.2,224.8,1,1,0,0,0,445.2,32.8);
	this.instance_18.cache(-2,-2,895,70);

	this.instance_19 = new lib.VG_MC_campus_summary_back();
	this.instance_19.setTransform(354.2,70.3,1,1,0,0,0,445.2,32.8);
	this.instance_19.cache(-2,-2,895,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(1));

	// links
	this.Bldg_gas_summaries_details_link = new lib.building_details_link();
	this.Bldg_gas_summaries_details_link.setTransform(28.3,285.2,0.936,0.936);
	this.Bldg_gas_summaries_details_link.cache(-42,-6,226,37);

	this.Bldg_water_summaries_details_link = new lib.building_details_link();
	this.Bldg_water_summaries_details_link.setTransform(31.3,417.7,0.936,0.936);
	this.Bldg_water_summaries_details_link.cache(-42,-6,226,37);

	this.Bldg_power_summaries_details_link = new lib.building_details_link();
	this.Bldg_power_summaries_details_link.setTransform(21.3,150.1,0.936,0.936);
	this.Bldg_power_summaries_details_link.cache(-42,-6,226,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Bldg_power_summaries_details_link},{t:this.Bldg_water_summaries_details_link},{t:this.Bldg_gas_summaries_details_link}]}).wait(1));

	// gradient
	this.instance_20 = new lib.left_original();
	this.instance_20.setTransform(-67,-52);

	this.instance_21 = new lib.left();
	this.instance_21.setTransform(508,268);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-52,964.1,560);


(lib.buildings_water_slider_left_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*var me = this;
		
		
		me.Bldg_100_link.link_label_txt.text="100OP";
		me.Bldg_200_link.link_label_txt.text="200OP";
		me.Bldg_250_link.link_label_txt.text="250OP";
		me.Bldg_300_link.link_label_txt.text="300OP";
		me.Bldg_301_link.link_label_txt.text="301IP";
		me.Bldg_350_link.link_label_txt.text="350OP";
		me.Bldg_400_link.link_label_txt.text="400OP";
		me.Bldg_401_link.link_label_txt.text="401IP";
		me.Bldg_500_link.link_label_txt.text="500OP";
		me.Bldg_501_link.link_label_txt.text="501IP";
		me.Bldg_600_link.link_label_txt.text="600OP";
		me.Bldg_OPL_link.link_label_txt.text="OPL";*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// icons
	this.instance = new lib.iconwater();
	this.instance.setTransform(29,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// chart-links
	this.Bldg_100_charts_link = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link.setTransform(1525.1,386,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_1 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_1.setTransform(1525.1,365.9,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_1.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_2 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_2.setTransform(1525.1,345.8,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_2.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_3 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_3.setTransform(1525.1,325.8,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_3.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_4 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_4.setTransform(1525.1,305.7,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_4.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_5 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_5.setTransform(1525.1,285.7,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_5.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_6 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_6.setTransform(1525.1,265.6,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_6.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_7 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_7.setTransform(1525.1,245.6,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_7.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_8 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_8.setTransform(1525.1,225.5,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_8.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_9 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_9.setTransform(1525.1,205.5,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_9.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_10 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_10.setTransform(1525.1,185.4,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_10.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_11 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_11.setTransform(1525.1,165.4,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_11.cache(-2,-2,73,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Bldg_100_charts_link_11},{t:this.Bldg_100_charts_link_10},{t:this.Bldg_100_charts_link_9},{t:this.Bldg_100_charts_link_8},{t:this.Bldg_100_charts_link_7},{t:this.Bldg_100_charts_link_6},{t:this.Bldg_100_charts_link_5},{t:this.Bldg_100_charts_link_4},{t:this.Bldg_100_charts_link_3},{t:this.Bldg_100_charts_link_2},{t:this.Bldg_100_charts_link_1},{t:this.Bldg_100_charts_link}]}).wait(1));

	// buidling-labels
	this.instance_1 = new lib.building_labels_mc();
	this.instance_1.setTransform(138,261.3,1,1,0,0,0,35.5,132.9);
	this.instance_1.cache(-2,-4,75,276);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ibis-values
	this.OTHER_WATER_MTD = new lib.WATER_MTD_ALL_BUILDINGS_KITCHE_OTHER();
	this.OTHER_WATER_MTD.setTransform(1343.3,265.4,1,1,0,0,0,62.7,132.2);

	this.OTHER_WATER_DTD = new lib.WATER_DTD_ALL_BUILDINGS_KITCHE_OTHER();
	this.OTHER_WATER_DTD.setTransform(1172.7,265.4,1,1,0,0,0,62.7,132.2);

	this.KITCHEN_WATER_MTD = new lib.WATER_MTD_ALL_BUILDINGS_KITCHE_OTHER();
	this.KITCHEN_WATER_MTD.setTransform(826.9,262.3,1,1,0,0,0,62.7,132.2);

	this.KITCHEN_WATER_DTD = new lib.WATER_DTD_ALL_BUILDINGS_KITCHE_OTHER();
	this.KITCHEN_WATER_DTD.setTransform(656.3,262.3,1,1,0,0,0,62.7,132.2);

	this.TOTAL_WATER_MTD = new lib.WATER_MTD_ALL_BUILDINGS();
	this.TOTAL_WATER_MTD.setTransform(435.6,262.9,0.996,0.994,0,0,0,85.4,133.3);

	this.TOTAL_WATER_DTD = new lib.WATER_DTD_ALL_BUILDINGS();
	this.TOTAL_WATER_DTD.setTransform(256.2,265.3,1,1,0,0,0,90,133.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.TOTAL_WATER_DTD},{t:this.TOTAL_WATER_MTD},{t:this.KITCHEN_WATER_DTD},{t:this.KITCHEN_WATER_MTD},{t:this.OTHER_WATER_DTD},{t:this.OTHER_WATER_MTD}]}).wait(1));

	// stars
	this.instance_2 = new lib.energystar();
	this.instance_2.setTransform(52,364,0.969,0.966);

	this.instance_3 = new lib.energystar();
	this.instance_3.setTransform(52,342,0.969,0.966);

	this.instance_4 = new lib.energystar();
	this.instance_4.setTransform(52,320,0.969,0.966);

	this.instance_5 = new lib.energystar();
	this.instance_5.setTransform(52,299,0.969,0.966);

	this.instance_6 = new lib.energystar();
	this.instance_6.setTransform(52,277,0.969,0.966);

	this.instance_7 = new lib.energystar();
	this.instance_7.setTransform(52,256,0.969,0.966);

	this.instance_8 = new lib.energystar();
	this.instance_8.setTransform(52,213,0.969,0.966);

	this.instance_9 = new lib.energystar();
	this.instance_9.setTransform(52,191,0.969,0.966);

	this.instance_10 = new lib.energystar();
	this.instance_10.setTransform(52,149,0.969,0.966);

	this.instance_11 = new lib.energystar();
	this.instance_11.setTransform(52,127,0.969,0.966);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// labels
	this.instance_12 = new lib.textbuildingswaterusage();
	this.instance_12.setTransform(191,39);

	this.text = new cjs.Text("", "17px 'Arial-BoldMT'", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.setTransform(364.8,45.4);

	this.instance_13 = new lib.textsubmeteredwaterusage();
	this.instance_13.setTransform(922,44);

	this.instance_14 = new lib.textbuildingswatersummary();
	this.instance_14.setTransform(95,2);

	this.instance_15 = new lib.texttoday();
	this.instance_15.setTransform(1140,73);

	this.instance_16 = new lib.textmtd();
	this.instance_16.setTransform(1302,75);

	this.instance_17 = new lib.textother();
	this.instance_17.setTransform(1241,39);

	this.instance_18 = new lib.textkitchen();
	this.instance_18.setTransform(707,40);

	this.instance_19 = new lib.texttoday();
	this.instance_19.setTransform(630,66);

	this.instance_20 = new lib.textmtd();
	this.instance_20.setTransform(796,68);

	this.instance_21 = new lib.texttoday();
	this.instance_21.setTransform(232,68);

	this.instance_22 = new lib.textmtd();
	this.instance_22.setTransform(398,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.text},{t:this.instance_12}]}).wait(1));

	// lines
	this.instance_23 = new lib.VG_MC_buildings_power_summ_back();
	this.instance_23.setTransform(671.1,75.7,1,1,0,0,0,830.9,31.9);
	this.instance_23.cache(-3,-3,1668,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1));

	// gradient
	this.instance_24 = new lib.buildings_power_slider_back();
	this.instance_24.setTransform(-24,-34,1.584,1.147);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.3,-34,1753.8,527.5);


(lib.buildings_power_details = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var me = this;
		
		
		me.Bldg_100_link.link_label_txt.text="100OP";
		me.Bldg_200_link.link_label_txt.text="200OP";
		me.Bldg_250_link.link_label_txt.text="250OP";
		me.Bldg_300_link.link_label_txt.text="300OP";
		me.Bldg_301_link.link_label_txt.text="301IP";
		me.Bldg_350_link.link_label_txt.text="350OP";
		me.Bldg_400_link.link_label_txt.text="400OP";
		me.Bldg_401_link.link_label_txt.text="401IP";
		me.Bldg_500_link.link_label_txt.text="500OP";
		me.Bldg_501_link.link_label_txt.text="501IP";
		me.Bldg_600_link.link_label_txt.text="600OP";
		me.Bldg_OPL_link.link_label_txt.text="OPL";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// icons
	this.instance = new lib.metericondropshadow();
	this.instance.setTransform(44,43,0.947,0.948);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// chart-links
	this.Bldg_100_charts_link = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link.setTransform(1529.3,137.5,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link.cache(-2,-2,73,27);

	this.timeline.addTween(cjs.Tween.get(this.Bldg_100_charts_link).wait(1));

	// links
	this.Bldg_OPL_link = new lib.building_details_link_dynamic_mc();
	this.Bldg_OPL_link.setTransform(182.8,380.6,1,1,0,0,0,102.7,11.5);
	this.Bldg_OPL_link.cache(-2,-2,109,27);

	this.Bldg_600_link = new lib.building_details_link_dynamic_mc();
	this.Bldg_600_link.setTransform(182.8,358.3,1,1,0,0,0,102.7,11.5);
	this.Bldg_600_link.cache(-2,-2,109,27);

	this.Bldg_501_link = new lib.building_details_link_dynamic_mc();
	this.Bldg_501_link.setTransform(182.8,336.3,1,1,0,0,0,102.7,11.5);
	this.Bldg_501_link.cache(-2,-2,109,27);

	this.Bldg_500_link = new lib.building_details_link_dynamic_mc();
	this.Bldg_500_link.setTransform(182.8,314.4,1,1,0,0,0,102.7,11.5);
	this.Bldg_500_link.cache(-2,-2,109,27);

	this.Bldg_401_link = new lib.building_details_link_dynamic_mc();
	this.Bldg_401_link.setTransform(182.8,292.4,1,1,0,0,0,102.7,11.5);
	this.Bldg_401_link.cache(-2,-2,109,27);

	this.Bldg_400_link = new lib.building_details_link_dynamic_mc();
	this.Bldg_400_link.setTransform(182.8,270.5,1,1,0,0,0,102.7,11.5);
	this.Bldg_400_link.cache(-2,-2,109,27);

	this.Bldg_350_link = new lib.building_details_link_dynamic_mc();
	this.Bldg_350_link.setTransform(182.8,248.5,1,1,0,0,0,102.7,11.5);
	this.Bldg_350_link.cache(-2,-2,109,27);

	this.Bldg_301_link = new lib.building_details_link_dynamic_mc();
	this.Bldg_301_link.setTransform(182.8,226.6,1,1,0,0,0,102.7,11.5);
	this.Bldg_301_link.cache(-2,-2,109,27);

	this.Bldg_300_link = new lib.building_details_link_dynamic_mc();
	this.Bldg_300_link.setTransform(182.8,204.6,1,1,0,0,0,102.7,11.5);
	this.Bldg_300_link.cache(-2,-2,109,27);

	this.Bldg_250_link = new lib.building_details_link_dynamic_mc();
	this.Bldg_250_link.setTransform(182.8,182.7,1,1,0,0,0,102.7,11.5);
	this.Bldg_250_link.cache(-2,-2,109,27);

	this.Bldg_200_link = new lib.building_details_link_dynamic_mc();
	this.Bldg_200_link.setTransform(182.8,160.7,1,1,0,0,0,102.7,11.5);
	this.Bldg_200_link.cache(-2,-2,109,27);

	this.Bldg_100_link = new lib.building_details_link_dynamic_mc();
	this.Bldg_100_link.setTransform(182.8,138.8,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_link.cache(-2,-2,109,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Bldg_100_link},{t:this.Bldg_200_link},{t:this.Bldg_250_link},{t:this.Bldg_300_link},{t:this.Bldg_301_link},{t:this.Bldg_350_link},{t:this.Bldg_400_link},{t:this.Bldg_401_link},{t:this.Bldg_500_link},{t:this.Bldg_501_link},{t:this.Bldg_600_link},{t:this.Bldg_OPL_link}]}).wait(1));

	// ibis-values
	this.other_kW = new lib.submetered_loads_kw_other_mc();
	this.other_kW.setTransform(1302.5,126.8);

	this.HVAC_kW = new lib.submetered_loads_kw_HVAC();
	this.HVAC_kW.setTransform(1174.5,126.8);

	this.labs_kW = new lib.submetered_loads_kw_mc();
	this.labs_kW.setTransform(1047,127);

	this.kW_per_person = new lib.kw_per_squared_feet_mc();
	this.kW_per_person.setTransform(917.2,128.2);

	this.kW_per_sq_ft = new lib.kw_per_squared_feet_mc();
	this.kW_per_sq_ft.setTransform(789.9,129.2);

	this.bldgOPL_total_kW = new lib.ibis_text_short_units_mc();
	this.bldgOPL_total_kW.setTransform(711.3,386.4,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg600_total_kW = new lib.ibis_text_short_units_mc();
	this.bldg600_total_kW.setTransform(711.3,364.2,1.01,1.01,0,0,0,52.6,15.4);

	this.bldg501_total_kW = new lib.ibis_text_short_units_mc();
	this.bldg501_total_kW.setTransform(711.3,342.6,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg500_total_kW = new lib.ibis_text_short_units_mc();
	this.bldg500_total_kW.setTransform(711.3,320.6,1.01,1.01,0,0,0,52.6,15.5);

	this.bldg401_total_kW = new lib.ibis_text_short_units_mc();
	this.bldg401_total_kW.setTransform(711.3,298.9,1.01,1.01,0,0,0,52.6,15.6);

	this.bldg400_total_kW = new lib.ibis_text_short_units_mc();
	this.bldg400_total_kW.setTransform(711.3,276.9,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg350_total_kW = new lib.ibis_text_short_units_mc();
	this.bldg350_total_kW.setTransform(711.3,255.2,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg301_total_kW = new lib.ibis_text_short_units_mc();
	this.bldg301_total_kW.setTransform(711.3,233.5,1.01,1.01,0,0,0,52.6,15.9);

	this.bldg300_total_kW = new lib.ibis_text_short_units_mc();
	this.bldg300_total_kW.setTransform(711.3,211.6,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg250_total_kW = new lib.ibis_text_short_units_mc();
	this.bldg250_total_kW.setTransform(711.3,189.8,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg200_total_kW = new lib.ibis_text_short_units_mc();
	this.bldg200_total_kW.setTransform(711.3,168.1,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg100_total_kW = new lib.ibis_text_short_units_mc();
	this.bldg100_total_kW.setTransform(711.3,146.1,1.01,1.01,0,0,0,52.6,15.8);

	this.bldgOPL_total_kWh = new lib.ibis_text_short_units_param_1_mc();
	this.bldgOPL_total_kWh.setTransform(583.4,385.8,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg600_total_kWh = new lib.ibis_text_short_units_param_1_mc();
	this.bldg600_total_kWh.setTransform(583.4,363.1,1.01,1.01,0,0,0,52.6,15.4);

	this.bldg501_total_kWh = new lib.ibis_text_short_units_param_1_mc();
	this.bldg501_total_kWh.setTransform(583.4,341.7,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg500_total_kWh = new lib.ibis_text_short_units_param_1_mc();
	this.bldg500_total_kWh.setTransform(583.4,319.6,1.01,1.01,0,0,0,52.6,15.5);

	this.bldg401_total_kWh = new lib.ibis_text_short_units_param_1_mc();
	this.bldg401_total_kWh.setTransform(583.4,297.9,1.01,1.01,0,0,0,52.6,15.6);

	this.bldg400_total_kWh = new lib.ibis_text_short_units_param_1_mc();
	this.bldg400_total_kWh.setTransform(583.4,276.2,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg350_total_kWh = new lib.ibis_text_short_units_param_1_mc();
	this.bldg350_total_kWh.setTransform(583.4,254.4,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg301_total_kWh = new lib.ibis_text_short_units_param_1_mc();
	this.bldg301_total_kWh.setTransform(583.4,232.8,1.01,1.01,0,0,0,52.6,15.9);

	this.bldg300_total_kWh = new lib.ibis_text_short_units_param_1_mc();
	this.bldg300_total_kWh.setTransform(583.4,210.8,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg250_total_kWh = new lib.ibis_text_short_units_param_1_mc();
	this.bldg250_total_kWh.setTransform(583.4,189.1,1.01,1.01,0,0,0,52.6,15.8);

	this.bldg200_total_kWh = new lib.ibis_text_short_units_param_1_mc();
	this.bldg200_total_kWh.setTransform(583.4,167.2,1.01,1.01,0,0,0,52.6,15.7);

	this.bldg100_total_kWh = new lib.ibis_text_short_units_param_1_mc();
	this.bldg100_total_kWh.setTransform(583.4,145.5,1.01,1.01,0,0,0,52.6,15.8);

	this.bldgOPL_site_EUI = new lib.ibis_text_long_units_mc();
	this.bldgOPL_site_EUI.setTransform(430.8,386.2,0.709,0.709,0,0,0,52.8,15.9);

	this.bldg600_site_EUI = new lib.ibis_text_long_units_mc();
	this.bldg600_site_EUI.setTransform(430.8,363.9,0.709,0.709,0,0,0,52.8,15.5);

	this.bldg501_site_EUI = new lib.ibis_text_long_units_mc();
	this.bldg501_site_EUI.setTransform(430.8,342.3,0.709,0.709,0,0,0,52.8,15.9);

	this.bldg500_site_EUI = new lib.ibis_text_long_units_mc();
	this.bldg500_site_EUI.setTransform(430.8,320.3,0.709,0.709,0,0,0,52.8,15.6);

	this.bldg401_site_EUI = new lib.ibis_text_long_units_mc();
	this.bldg401_site_EUI.setTransform(430.8,298.6,0.709,0.709,0,0,0,52.8,15.7);

	this.bldg400_site_EUI = new lib.ibis_text_long_units_mc();
	this.bldg400_site_EUI.setTransform(430.8,276.8,0.709,0.709,0,0,0,52.8,15.7);

	this.bldg350_site_EUI = new lib.ibis_text_long_units_mc();
	this.bldg350_site_EUI.setTransform(430.8,255,0.709,0.709,0,0,0,52.8,15.7);

	this.bldg301_site_EUI = new lib.ibis_text_long_units_mc();
	this.bldg301_site_EUI.setTransform(430.8,233.4,0.709,0.709,0,0,0,52.8,16);

	this.bldg300_site_EUI = new lib.ibis_text_long_units_mc();
	this.bldg300_site_EUI.setTransform(430.8,211.5,0.709,0.709,0,0,0,52.8,15.8);

	this.bldg250_site_EUI = new lib.ibis_text_long_units_mc();
	this.bldg250_site_EUI.setTransform(430.8,189.7,0.709,0.709,0,0,0,52.8,15.9);

	this.bldg200_site_EUI = new lib.ibis_text_long_units_mc();
	this.bldg200_site_EUI.setTransform(430.8,167.8,0.709,0.709,0,0,0,52.8,15.7);

	this.bldg100_site_EUI = new lib.ibis_text_long_units_mc();
	this.bldg100_site_EUI.setTransform(430.8,146.2,0.709,0.709,0,0,0,52.8,16);

	this.bldgOPL_source_EUI = new lib.ibis_text_long_units_mc();
	this.bldgOPL_source_EUI.setTransform(211.4,376,0.748,0.748,0,0,0,0.3,0.3);

	this.bldg600_source_EUI = new lib.ibis_text_long_units_mc();
	this.bldg600_source_EUI.setTransform(211.4,353.9,0.748,0.748,0,0,0,0.3,0.3);

	this.bldg501_source_EUI = new lib.ibis_text_long_units_mc();
	this.bldg501_source_EUI.setTransform(211.4,332.2,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg500_source_EUI = new lib.ibis_text_long_units_mc();
	this.bldg500_source_EUI.setTransform(211.4,310.5,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg401_source_EUI = new lib.ibis_text_long_units_mc();
	this.bldg401_source_EUI.setTransform(211.4,288.7,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg400_source_EUI = new lib.ibis_text_long_units_mc();
	this.bldg400_source_EUI.setTransform(211.4,266.8,0.748,0.748,0,0,0,0.3,0.3);

	this.bldg350_source_EUI = new lib.ibis_text_long_units_mc();
	this.bldg350_source_EUI.setTransform(211.4,245.1,0.748,0.748,0,0,0,0.3,0.3);

	this.bldg301_source_EUI = new lib.ibis_text_long_units_mc();
	this.bldg301_source_EUI.setTransform(211.4,223.3,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg300_source_EUI = new lib.ibis_text_long_units_mc();
	this.bldg300_source_EUI.setTransform(211.4,201.6,0.748,0.748,0,0,0,0.3,0.5);

	this.bldg250_source_EUI = new lib.ibis_text_long_units_mc();
	this.bldg250_source_EUI.setTransform(211.4,179.8,0.748,0.748,0,0,0,0.3,0.4);

	this.bldg200_source_EUI = new lib.ibis_text_long_units_mc();
	this.bldg200_source_EUI.setTransform(211.4,158,0.748,0.748,0,0,0,0.3,0.5);

	this.bldg100_source_EUI = new lib.ibis_text_long_units_mc();
	this.bldg100_source_EUI.setTransform(211.4,136.4,0.748,0.748,0,0,0,0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bldg100_source_EUI},{t:this.bldg200_source_EUI},{t:this.bldg250_source_EUI},{t:this.bldg300_source_EUI},{t:this.bldg301_source_EUI},{t:this.bldg350_source_EUI},{t:this.bldg400_source_EUI},{t:this.bldg401_source_EUI},{t:this.bldg500_source_EUI},{t:this.bldg501_source_EUI},{t:this.bldg600_source_EUI},{t:this.bldgOPL_source_EUI},{t:this.bldg100_site_EUI},{t:this.bldg200_site_EUI},{t:this.bldg250_site_EUI},{t:this.bldg300_site_EUI},{t:this.bldg301_site_EUI},{t:this.bldg350_site_EUI},{t:this.bldg400_site_EUI},{t:this.bldg401_site_EUI},{t:this.bldg500_site_EUI},{t:this.bldg501_site_EUI},{t:this.bldg600_site_EUI},{t:this.bldgOPL_site_EUI},{t:this.bldg100_total_kWh},{t:this.bldg200_total_kWh},{t:this.bldg250_total_kWh},{t:this.bldg300_total_kWh},{t:this.bldg301_total_kWh},{t:this.bldg350_total_kWh},{t:this.bldg400_total_kWh},{t:this.bldg401_total_kWh},{t:this.bldg500_total_kWh},{t:this.bldg501_total_kWh},{t:this.bldg600_total_kWh},{t:this.bldgOPL_total_kWh},{t:this.bldg100_total_kW},{t:this.bldg200_total_kW},{t:this.bldg250_total_kW},{t:this.bldg300_total_kW},{t:this.bldg301_total_kW},{t:this.bldg350_total_kW},{t:this.bldg400_total_kW},{t:this.bldg401_total_kW},{t:this.bldg500_total_kW},{t:this.bldg501_total_kW},{t:this.bldg600_total_kW},{t:this.bldgOPL_total_kW},{t:this.kW_per_sq_ft},{t:this.kW_per_person},{t:this.labs_kW},{t:this.HVAC_kW},{t:this.other_kW}]}).wait(1));

	// stars
	this.instance_1 = new lib.energystar();
	this.instance_1.setTransform(52,364,0.969,0.966);

	this.instance_2 = new lib.energystar();
	this.instance_2.setTransform(52,342,0.969,0.966);

	this.instance_3 = new lib.energystar();
	this.instance_3.setTransform(52,320,0.969,0.966);

	this.instance_4 = new lib.energystar();
	this.instance_4.setTransform(52,299,0.969,0.966);

	this.instance_5 = new lib.energystar();
	this.instance_5.setTransform(52,277,0.969,0.966);

	this.instance_6 = new lib.energystar();
	this.instance_6.setTransform(52,256,0.969,0.966);

	this.instance_7 = new lib.energystar();
	this.instance_7.setTransform(52,213,0.969,0.966);

	this.instance_8 = new lib.energystar();
	this.instance_8.setTransform(52,191,0.969,0.966);

	this.instance_9 = new lib.energystar();
	this.instance_9.setTransform(52,149,0.969,0.966);

	this.instance_10 = new lib.energystar();
	this.instance_10.setTransform(52,127,0.969,0.966);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// labels
	this.instance_11 = new lib.textsite();
	this.instance_11.setTransform(418,70);

	this.instance_12 = new lib.textsorce();
	this.instance_12.setTransform(221,54);

	this.instance_13 = new lib.textbuildingspowersummary();
	this.instance_13.setTransform(44,0);

	this.instance_14 = new lib.texteui12months();
	this.instance_14.setTransform(120,47);

	this.instance_15 = new lib.textbuildingpower();
	this.instance_15.setTransform(592,44);

	this.instance_16 = new lib.textsubmeteredtotals();
	this.instance_16.setTransform(1102,43);

	this.instance_17 = new lib.textother();
	this.instance_17.setTransform(1334,72);

	this.instance_18 = new lib.texthvac();
	this.instance_18.setTransform(1170,48);

	this.instance_19 = new lib.textlabs();
	this.instance_19.setTransform(1077,70);

	this.instance_20 = new lib.textperson();
	this.instance_20.setTransform(940,61);

	this.instance_21 = new lib.textpersqft();
	this.instance_21.setTransform(809,62);

	this.instance_22 = new lib.textdemand();
	this.instance_22.setTransform(658,68);

	this.instance_23 = new lib.textmtd();
	this.instance_23.setTransform(562,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	// lines
	this.instance_24 = new lib.VG_MC_buildings_power_summ_back();
	this.instance_24.setTransform(671.1,75.7,1,1,0,0,0,830.9,31.9);
	this.instance_24.cache(-3,-3,1668,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1));

	// gradient
	this.instance_25 = new lib.buildings_power_slider_back();
	this.instance_25.setTransform(-24,-34,1.584,1.147);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.3,-34,1753.8,527.5);


(lib.buildings_gas_details = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*var me = this;
		
		
		me.Bldg_100_link.link_label_txt.text="100OP";
		me.Bldg_200_link.link_label_txt.text="200OP";
		me.Bldg_250_link.link_label_txt.text="250OP";
		me.Bldg_300_link.link_label_txt.text="300OP";
		me.Bldg_301_link.link_label_txt.text="301IP";
		me.Bldg_350_link.link_label_txt.text="350OP";
		me.Bldg_400_link.link_label_txt.text="400OP";
		me.Bldg_401_link.link_label_txt.text="401IP";
		me.Bldg_500_link.link_label_txt.text="500OP";
		me.Bldg_501_link.link_label_txt.text="501IP";
		me.Bldg_600_link.link_label_txt.text="600OP";
		me.Bldg_OPL_link.link_label_txt.text="OPL";*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// icons
	this.instance = new lib.iconfire();
	this.instance.setTransform(26,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// chart-links
	this.Bldg_100_charts_link = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link.setTransform(1529.3,382.9,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_1 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_1.setTransform(1529.3,362.7,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_1.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_2 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_2.setTransform(1529.3,342.7,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_2.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_3 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_3.setTransform(1529.3,322.6,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_3.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_4 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_4.setTransform(1529.3,302.6,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_4.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_5 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_5.setTransform(1529.3,282.5,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_5.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_6 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_6.setTransform(1529.3,262.5,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_6.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_7 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_7.setTransform(1529.3,242.4,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_7.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_8 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_8.setTransform(1529.3,222.4,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_8.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_9 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_9.setTransform(1529.3,202.3,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_9.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_10 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_10.setTransform(1529.3,182.3,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_10.cache(-2,-2,73,27);

	this.Bldg_100_charts_link_11 = new lib.building_details_link_dynamic_chart_mc();
	this.Bldg_100_charts_link_11.setTransform(1529.3,162.2,1,1,0,0,0,102.7,11.5);
	this.Bldg_100_charts_link_11.cache(-2,-2,73,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Bldg_100_charts_link_11},{t:this.Bldg_100_charts_link_10},{t:this.Bldg_100_charts_link_9},{t:this.Bldg_100_charts_link_8},{t:this.Bldg_100_charts_link_7},{t:this.Bldg_100_charts_link_6},{t:this.Bldg_100_charts_link_5},{t:this.Bldg_100_charts_link_4},{t:this.Bldg_100_charts_link_3},{t:this.Bldg_100_charts_link_2},{t:this.Bldg_100_charts_link_1},{t:this.Bldg_100_charts_link}]}).wait(1));

	// ibis-values
	this.OTHER_GAS_MTD = new lib.GAS_MTD_ALL_BUILDINGS_KITCHE_OTHER();
	this.OTHER_GAS_MTD.setTransform(1329,259.4,1,1,0,0,0,62.7,132.2);

	this.OTHER_GAS_DTD = new lib.GAS_DTD_ALL_BUILDINGS_KITCHE_OTHER();
	this.OTHER_GAS_DTD.setTransform(1172.7,259.4,1,1,0,0,0,62.7,132.2);

	this.KITCHEN_GAS_MTD = new lib.GAS_MTD_ALL_BUILDINGS_KITCHE_OTHER();
	this.KITCHEN_GAS_MTD.setTransform(826.9,262.3,1,1,0,0,0,62.7,132.2);

	this.KITCHEN_GAS_DTD = new lib.GAS_DTD_ALL_BUILDINGS_KITCHE_OTHER();
	this.KITCHEN_GAS_DTD.setTransform(656.3,262.3,1,1,0,0,0,62.7,132.2);

	this.TOTAL_GAS_MTD = new lib.GAS_MTD_ALL_BUILDINGS();
	this.TOTAL_GAS_MTD.setTransform(435.6,262.9,0.996,0.994,0,0,0,85.4,133.3);

	this.TOTAL_GAS_DTD = new lib.GAS_DTD_ALL_BUILDINGS();
	this.TOTAL_GAS_DTD.setTransform(256.2,265.3,1,1,0,0,0,90,133.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.TOTAL_GAS_DTD},{t:this.TOTAL_GAS_MTD},{t:this.KITCHEN_GAS_DTD},{t:this.KITCHEN_GAS_MTD},{t:this.OTHER_GAS_DTD},{t:this.OTHER_GAS_MTD}]}).wait(1));

	// stars
	this.instance_1 = new lib.energystar();
	this.instance_1.setTransform(52,364,0.969,0.966);

	this.instance_2 = new lib.energystar();
	this.instance_2.setTransform(52,342,0.969,0.966);

	this.instance_3 = new lib.energystar();
	this.instance_3.setTransform(52,320,0.969,0.966);

	this.instance_4 = new lib.energystar();
	this.instance_4.setTransform(52,299,0.969,0.966);

	this.instance_5 = new lib.energystar();
	this.instance_5.setTransform(52,277,0.969,0.966);

	this.instance_6 = new lib.energystar();
	this.instance_6.setTransform(52,256,0.969,0.966);

	this.instance_7 = new lib.energystar();
	this.instance_7.setTransform(52,213,0.969,0.966);

	this.instance_8 = new lib.energystar();
	this.instance_8.setTransform(52,191,0.969,0.966);

	this.instance_9 = new lib.energystar();
	this.instance_9.setTransform(52,149,0.969,0.966);

	this.instance_10 = new lib.energystar();
	this.instance_10.setTransform(52,127,0.969,0.966);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// building-labels
	this.instance_11 = new lib.building_labels_mc();
	this.instance_11.setTransform(138.1,262.5,1,1,0,0,0,35.5,132.9);
	this.instance_11.cache(-2,-4,75,276);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// labels
	this.instance_12 = new lib.texttoday();
	this.instance_12.setTransform(1140,73);

	this.instance_13 = new lib.textmtd();
	this.instance_13.setTransform(1302,75);

	this.instance_14 = new lib.textother();
	this.instance_14.setTransform(1241,39);

	this.instance_15 = new lib.textkitchen();
	this.instance_15.setTransform(707,40);

	this.instance_16 = new lib.texttoday();
	this.instance_16.setTransform(630,66);

	this.instance_17 = new lib.textmtd();
	this.instance_17.setTransform(796,68);

	this.instance_18 = new lib.textsubmeteredgasusage();
	this.instance_18.setTransform(924,40);

	this.instance_19 = new lib.textbuildingsgasusage();
	this.instance_19.setTransform(202,43);

	this.instance_20 = new lib.texttoday();
	this.instance_20.setTransform(232,68);

	this.instance_21 = new lib.textbuildingsgassummary();
	this.instance_21.setTransform(95,-1);

	this.instance_22 = new lib.textmtd();
	this.instance_22.setTransform(398,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(1));

	// lines
	this.instance_23 = new lib.VG_MC_buildings_power_summ_back();
	this.instance_23.setTransform(671.1,75.7,1,1,0,0,0,830.9,31.9);
	this.instance_23.cache(-3,-3,1668,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(1));

	// gradient
	this.instance_24 = new lib.buildings_power_slider_back();
	this.instance_24.setTransform(-24,-34,1.584,1.147);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.3,-34,1753.8,527.5);


// stage content:
(lib.home = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var me = this;
		
		IBISLibrary.root = me;
		overrideSettings();
		IBISPoller.initializeEnvironment(ready);
		
		
		function ready() {
		
			IBISLibrary.increaseFrameRate();
		
			var tl = new TimelineMax();
			tl.to(me.total_power_slider_left_mc, 1, {
				useFrames: true,
				delay: 1,
				x: 280,
				ease: Strong.easeOut
			})
				.to(me.map_mc, 1, {
					useFrames: true,
					x: 1410,
					ease: Strong.easeOut
				})
				.to(me.CO2_mc, 1, {
					useFrames: true,
					x: 1410,
					ease: Strong.easeOut,
					onComplete: initialTweensLoaded
				})
		}
		
		
		function initialTweensLoaded() {
		
			IBISLibrary.lowerFrameRate();
		
			me.total_power_slider_left_mc.Bldg_power_summaries_details_link.alpha = 1;
			me.total_power_slider_left_mc.Bldg_power_summaries_details_link.mouseEnabled = true;
			me.total_power_slider_left_mc.Bldg_power_summaries_details_link.label_text.text = "Show Power Details";
			me.total_power_slider_left_mc.Bldg_power_summaries_details_link.updateCache();
		
		
			me.total_power_slider_left_mc.Bldg_gas_summaries_details_link.alpha = 1;
			me.total_power_slider_left_mc.Bldg_gas_summaries_details_link.mouseEnabled = true;
			me.total_power_slider_left_mc.Bldg_gas_summaries_details_link.label_text.text = "Show Gas Details";
			me.total_power_slider_left_mc.Bldg_gas_summaries_details_link.updateCache();
			
			me.total_power_slider_left_mc.Bldg_water_summaries_details_link.alpha = 1;
			me.total_power_slider_left_mc.Bldg_water_summaries_details_link.mouseEnabled = true;
			me.total_power_slider_left_mc.Bldg_water_summaries_details_link.label_text.text = "Show Water Details";
			me.total_power_slider_left_mc.Bldg_water_summaries_details_link.updateCache();
			
		
		
			stage.update();
		
		}
		
		function overrideSettings() {
			//IBISLibrary.baseApi = 'http://localhost:4356';
			IBISLibrary.baseApi = 'https://ibisenergy.us.oracle.com/realtimeui';
			IBISLibrary.rp = '6 111 112 664';
			//IBISLibrary.rp = '6 380 8184 12558';
		
		}
		setInterval(function (){
				
				//me.fps_txt.text = createjs.Ticker.getMeasuredFPS();
				me.fps_txt.text = IBISLibrary.mode;
				
			}, 1000);
		setTimeout(startPolling.bind(this), 500);
		
		function startPolling() {
		
			IBISPoller.startPolling(this);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// FPS
	this.fps_txt = new cjs.Text("FPS", "bold 11px 'Arial'", "#FF9900");
	this.fps_txt.name = "fps_txt";
	this.fps_txt.lineHeight = 15;
	this.fps_txt.lineWidth = 139;
	this.fps_txt.setTransform(26.1,852.9);

	this.timeline.addTween(cjs.Tween.get(this.fps_txt).wait(1));

	// frames
	this.instance = new lib.bottom_frame();
	this.instance.setTransform(-14,854,0.977,0.842);

	this.instance_1 = new lib.bottom_frame();
	this.instance_1.setTransform(35.4,24,0.511,0.842,90);

	this.instance_2 = new lib.bottom_frame();
	this.instance_2.setTransform(1629.4,24,0.511,0.842,90);

	this.instance_3 = new lib.bottom_frame();
	this.instance_3.setTransform(-24,-24,0.987,0.842);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// buildings-water-slider
	this.buildings_water_slider_left_mc = new lib.buildings_water_slider_left_mc();
	this.buildings_water_slider_left_mc.setTransform(-786.6,195.1,0.755,0.755,0,0,0,510.2,225.2);

	this.timeline.addTween(cjs.Tween.get(this.buildings_water_slider_left_mc).wait(1));

	// buildings-gas-slider
	this.buildings_gas_slider_left_mc = new lib.buildings_gas_details();
	this.buildings_gas_slider_left_mc.setTransform(-786.6,195.1,0.755,0.755,0,0,0,510.2,225.2);

	this.timeline.addTween(cjs.Tween.get(this.buildings_gas_slider_left_mc).wait(1));

	// buidlings-power-slider
	this.buildings_power_slider_left_mc = new lib.buildings_power_details();
	this.buildings_power_slider_left_mc.setTransform(-786.8,195,0.755,0.755,0,0,0,509.9,225);

	this.timeline.addTween(cjs.Tween.get(this.buildings_power_slider_left_mc).wait(1));

	// campus-power-slider
	this.text = new cjs.Text("", "30px 'Arial-Black'", "#CCCCCC");
	this.text.lineHeight = 44;
	this.text.lineWidth = 100;
	this.text.setTransform(78.8,59);

	this.map_mc = new lib.map_background_right();
	this.map_mc.setTransform(1639.6,48.9,1,1,0,0,0,125.1,70.1);

	this.text_1 = new cjs.Text("", "12px 'Arial-BoldMT'", "#CCCCCC");
	this.text_1.lineHeight = 19;
	this.text_1.setTransform(676.5,-209.9,0.533,0.533);

	this.redwood_data = new lib.footer();
	this.redwood_data.setTransform(800.6,610.6,0.71,0.71,0,0,0,1227.2,-87.8);

	this.CO2_mc = new lib.right_bar();
	this.CO2_mc.setTransform(1625.8,205.2,0.64,0.64,0,0,0,59.8,222.2);

	this.total_power_slider_left_mc = new lib.campus_summary_total_mc();
	this.total_power_slider_left_mc.setTransform(-562.8,115.1,0.698,0.698,0,0,0,325.2,90.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.total_power_slider_left_mc},{t:this.CO2_mc},{t:this.redwood_data},{t:this.text_1},{t:this.map_mc},{t:this.text}]}).wait(1));

	// details-301
	this.building_301_power_right = new lib.buidling_301_power_details();
	this.building_301_power_right.setTransform(1119.1,672.1,1,1,0,0,0,300,350);

	this.timeline.addTween(cjs.Tween.get(this.building_301_power_right).wait(1));

	// footer
	this.instance_4 = new lib.footer_back();
	this.instance_4.setTransform(-14,705);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// buildings
	this.instance_5 = new lib.building();
	this.instance_5.setTransform(-57,24,1.013,1.013);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-493.2,241.1,3201.6,1328);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;