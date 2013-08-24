//need a boolean for every button, if you have button ideas enter here
var autowoot=true;
var autoqueue;
var hideVideo=true;
var userList;

$('#plugnet_ui').remove();

    var colourWoot = autowoot ? '#3FFF00' : '#ED1C24';
	var colourQueue = autoqueue ? '#3FFF00' : '#ED1C24';
	var colourHideVideo = hideVideo ? '#3FFF00' : '#ED1C24';
	var colourUserList = userList ? '#3FFF00' : '#ED1C24';

$('#audience').append('<div id="plugnet_ui" style="width:850px;height:306px;position:absolute;top:0;left:0;background-color:#FF00FF;"></div>');

$('#plugnet_ui').append('<div id="plugnet_ui_col1" style="background-color:#000000;float:left;height:306px;width:162px;position:relative;z-index: 10000;border:4px outset green"></div><div id="plugnet_ui_col2" style="background-color:#000000;float:left;height:306px;width:162px;position:relative;z-index: 10000;border:4px outset green"></div><div id="plugnet_ui_col3" style="background-color:#000000;float:left;height:306px;width:162px;position:relative;z-index: 10000;border:4px outset green"></div><div id="plugnet_ui_col4" style="background-color:#000000;float:left;height:306px;width:162px;position:relative;z-index: 10000;border:4px outset green"></div><div id="plugnet_ui_col5" style="background-color:#000000;float:left;height:306px;width:162px;position:relative;z-index: 10000;border:4px outset green"></div>');

$('#plugnet_ui_col1').append(
		'<p id="plugnet_btn_woot" style="color:'+colourWoot+'">auto_woot</p><p id="plugnet_btn_queue" style="color:'+colourQueue+'">auto_queue</p><p id="plugnet_btn_hidevideo" style="color:'+colourHideVideo+'">hide video</p><p id="plugnet_btn_skipvideo" style="color:'+colourUserList+'">skip video</p>');
$('#plugnet_ui_col2').append(
		'<p id="plugnet_btn_woot" style="color:'+colourWoot+'">auto_woot</p><p id="plugnet_btn_queue" style="color:'+colourQueue+'">auto_queue</p><p id="plugnet_btn_hidevideo" style="color:'+colourHideVideo+'">hide video</p><p id="plugnet_btn_skipvideo" style="color:'+colourUserList+'">skip video</p>');
