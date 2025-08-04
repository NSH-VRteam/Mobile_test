// Garden Gnome Software - Skin
// Pano2VR 7.1.8/20986
// Filename: 
// Generated 2025-08-04T19:50:37

function pano2vrSkin(player,base) {
	player.addVariable('Room_visibility_1F', 2, false, { ignoreInState: 0  });
	player.addVariable('Room_visibility_2F', 2, false, { ignoreInState: 0  });
	player.addVariable('Room_visibility_3F', 2, false, { ignoreInState: 0  });
	player.addVariable('map_T_Active', 2, false, { ignoreInState: 0  });
	player.addVariable('Map_Pin_Normal_E', 2, false, { ignoreInState: 0  });
	player.addVariable('Map_Pin_active_E', 2, false, { ignoreInState: 0  });
	player.addVariable('View_option', 2, true, { ignoreInState: 0  });
	player.addVariable('Floor_Visibility', 2, false, { ignoreInState: 0  });
	player.addVariable('SlideShow_QG', 1, 0, { ignoreInState: 1  });
	player.addVariable('Hotspot_Visibility', 2, false, { ignoreInState: 0  });
	player.addVariable('contactpanel', 2, false, { ignoreInState: 0  });
	player.addVariable('floor_indication', 0, "", { ignoreInState: 0 , customProperty: { variableType: 0, propertyType: 0, defaultValue: "" } });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_SlideShow_QG = {};
		me._variable_SlideShow_QG.ggCurrentLogicState = -1;
		me._variable_SlideShow_QG.logicBlock = function() {
			var newLogicState_SlideShow_QG;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicState_SlideShow_QG = 0;
			}
			else if (
				((player.getIsMobile() == false))
			)
			{
				newLogicState_SlideShow_QG = 1;
			}
			else {
				newLogicState_SlideShow_QG = -1;
			}
			if (me._variable_SlideShow_QG.ggCurrentLogicState != newLogicState_SlideShow_QG) {
				me._variable_SlideShow_QG.ggCurrentLogicState = newLogicState_SlideShow_QG;
				if (me._variable_SlideShow_QG.ggCurrentLogicState == 0) {
					player.setVariableValue('SlideShow_QG', 2);
				}
				else if (me._variable_SlideShow_QG.ggCurrentLogicState == 1) {
					player.setVariableValue('SlideShow_QG', 0);
				}
				else {
					player.setVariableValue('SlideShow_QG', 0);
				}
			}
		}
		el=me._right_top_corner_panel=document.createElement('div');
		el.ggId="Right top corner panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right_top_corner_panel.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._right_top_corner_panel.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('View_option') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('View_option') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._right_top_corner_panel.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._right_top_corner_panel.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._right_top_corner_panel.style.transition='opacity 500ms ease 0ms';
				if (me._right_top_corner_panel.ggCurrentLogicStateVisible == 0) {
					me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
					me._right_top_corner_panel.ggVisible=true;
				}
				else if (me._right_top_corner_panel.ggCurrentLogicStateVisible == 1) {
					me._right_top_corner_panel.style.visibility="hidden";
					me._right_top_corner_panel.ggVisible=false;
				}
				else {
					me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
					me._right_top_corner_panel.ggVisible=true;
				}
			}
		}
		me._right_top_corner_panel.logicBlock_visible();
		me._right_top_corner_panel.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1)) || 
				((me.ggUserdata.tags.indexOf("2F") != -1)) || 
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("Exterior") != -1))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._right_top_corner_panel.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._right_top_corner_panel.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._right_top_corner_panel.style.transition='opacity 500ms ease 0ms';
				if (me._right_top_corner_panel.ggCurrentLogicStateAlpha == 0) {
					me._right_top_corner_panel.style.visibility=me._right_top_corner_panel.ggVisible?'inherit':'hidden';
					me._right_top_corner_panel.style.opacity=1;
				}
				else if (me._right_top_corner_panel.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._right_top_corner_panel.style.opacity == 0.0) { me._right_top_corner_panel.style.visibility="hidden"; } }, 505);
					me._right_top_corner_panel.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._right_top_corner_panel.style.opacity == 0.0) { me._right_top_corner_panel.style.visibility="hidden"; } }, 505);
					me._right_top_corner_panel.style.opacity=0;
				}
			}
		}
		me._right_top_corner_panel.logicBlock_alpha();
		me._right_top_corner_panel.ggUpdatePosition=function (useTransition) {
		}
		el=me._minimap_bg=document.createElement('div');
		els=me._minimap_bg__img=document.createElement('img');
		els.className='ggskin ggskin_minimap_bg';
		hs=basePath + 'images/minimap_bg.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Minimap_BG";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 220px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 260px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._minimap_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._mini_map=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FirstFloor';
		el.ggId="Mini Map";
		el.ggDx=15;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 230px;';
		hs+='left : calc(50% - ((250px + 0px) / 2) + 15px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((230px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mini_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mini_map.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._mini_map.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._mini_map.ggCalculateFloorplanSize(mapDetails);
				me._mini_map.ggShowSimpleFloorplan(mapDetails);
				me._mini_map.ggPlaceMarkersOnSimpleFloorplan();
			}
		}
		me._mini_map.ggUpdatePosition=function (useTransition) {
			me._mini_map.ggUpdateConditionResize();
		}
		me._minimap_bg.appendChild(me._mini_map);
		el=me._minimap_cb=document.createElement('div');
		els=me._minimap_cb__img=document.createElement('img');
		els.className='ggskin ggskin_minimap_cb';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADzSURBVHgB7dtLEcJAEEXRBgWRggQkxAE4AAeJMyQgAQnBQTMpesEns5t+UHBf1Wy5c0i2MXfvy5nijJa80jhG61LOztSL8ONGS1r57c7fp0XHv+0KdAWsRccr5kL08A3oATRoaQ906kCDBq3ogU4daNCgFT3QqQMNGrSiBzp1oEGDVvRApw708zpLWKU3rU23lWm31LuaYvOrW3m6gyVM3ftoHKwQuwcLtkkPLNiEOFiwbXpgwSbEwYJt0wMLNiEOFmybHliwCXGwv4rt/wYbFzgr47782ZAGGxc4KeMLYB02LrDx+9dp80UOlrzS2Cp7r7sBSG0ElqnPeA'+
			'IAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Minimap_CB";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 234px;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._minimap_cb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap_cb.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._minimap_bg.style.transition='none';
			} else {
				me._minimap_bg.style.transition='all 500ms ease-out 0ms';
			}
			me._minimap_bg.ggParameter.rx=500;me._minimap_bg.ggParameter.ry=0;
			me._minimap_bg.style.transform=parameterToTransform(me._minimap_bg.ggParameter);
			me._minimap_b.style.transition='none';
			me._minimap_b.style.visibility=(Number(me._minimap_b.style.opacity)>0||!me._minimap_b.style.opacity)?'inherit':'hidden';
			me._minimap_b.ggVisible=true;
			if (player.transitionsDisabled) {
				me._room_name_p.style.transition='none';
			} else {
				me._room_name_p.style.transition='all 100ms ease-out 0ms';
			}
			me._room_name_p.ggParameter.rx=-5;me._room_name_p.ggParameter.ry=-225;
			me._room_name_p.style.transform=parameterToTransform(me._room_name_p.ggParameter);
			if (player.transitionsDisabled) {
				me._floors_b.style.transition='none';
			} else {
				me._floors_b.style.transition='all 100ms ease-out 0ms';
			}
			me._floors_b.ggParameter.rx=-10;me._floors_b.ggParameter.ry=-225;
			me._floors_b.style.transform=parameterToTransform(me._floors_b.ggParameter);
			if (player.transitionsDisabled) {
				me._floor_indication_b.style.transition='none';
			} else {
				me._floor_indication_b.style.transition='all 100ms ease-out 0ms';
			}
			me._floor_indication_b.ggParameter.rx=-10;me._floor_indication_b.ggParameter.ry=-225;
			me._floor_indication_b.style.transform=parameterToTransform(me._floor_indication_b.ggParameter);
			me._floorplan_b.style.transition='none';
			me._floorplan_b.style.visibility='hidden';
			me._floorplan_b.ggVisible=false;
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			if (player.transitionsDisabled) {
				me._rooms_blur_bg.style.transition='none';
			} else {
				me._rooms_blur_bg.style.transition='all 100ms ease-out 0ms';
			}
			me._rooms_blur_bg.ggParameter.rx=-5;me._rooms_blur_bg.ggParameter.ry=-225;
			me._rooms_blur_bg.style.transform=parameterToTransform(me._rooms_blur_bg.ggParameter);
			if (player.transitionsDisabled) {
				me._floors_blur_bg.style.transition='none';
			} else {
				me._floors_blur_bg.style.transition='all 100ms ease-out 0ms';
			}
			me._floors_blur_bg.ggParameter.rx=-10;me._floors_blur_bg.ggParameter.ry=-225;
			me._floors_blur_bg.style.transform=parameterToTransform(me._floors_blur_bg.ggParameter);
		}
		me._minimap_cb.onmouseenter=function (e) {
			me.elementMouseOver['minimap_cb']=true;
			me._minimap_ch.logicBlock_alpha();
			me._minimap_ch.logicBlock_visible();
			me._minimap_ch.logicBlock_alpha();
			me._minimap_ch.logicBlock_visible();
		}
		me._minimap_cb.onmousedown=function (e) {
			me.elementMouseDown['minimap_cb']=true;
			me._minimap_ch.logicBlock_visible();
			me._minimap_ch.logicBlock_visible();
		}
		me._minimap_cb.onmouseup=function (e) {
			me.elementMouseDown['minimap_cb']=false;
			me._minimap_ch.logicBlock_visible();
			me._minimap_ch.logicBlock_visible();
		}
		me._minimap_cb.onmouseleave=function (e) {
			me.elementMouseDown['minimap_cb']=false;
			me._minimap_ch.logicBlock_visible();
			me._minimap_ch.logicBlock_visible();
			me.elementMouseOver['minimap_cb']=false;
			me._minimap_ch.logicBlock_alpha();
			me._minimap_ch.logicBlock_visible();
			me._minimap_ch.logicBlock_alpha();
			me._minimap_ch.logicBlock_visible();
		}
		me._minimap_cb.ggUpdatePosition=function (useTransition) {
		}
		el=me._minimap_ch=document.createElement('div');
		els=me._minimap_ch__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Minimap_CH";
		el.ggDx=-50;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) - 50px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 0px 5px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._minimap_ch.ggUpdateText=function() {
			var params = [];
			var hs = player._("Close\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._minimap_ch.ggUpdateText();
		el.appendChild(els);
		me._minimap_ch.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap_ch.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['minimap_cb'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseDown['minimap_cb'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minimap_ch.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minimap_ch.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minimap_ch.style.transition='opacity 500ms ease 0ms';
				if (me._minimap_ch.ggCurrentLogicStateVisible == 0) {
					me._minimap_ch.style.visibility=(Number(me._minimap_ch.style.opacity)>0||!me._minimap_ch.style.opacity)?'inherit':'hidden';
					me._minimap_ch.ggVisible=true;
				}
				else if (me._minimap_ch.ggCurrentLogicStateVisible == 1) {
					me._minimap_ch.style.visibility="hidden";
					me._minimap_ch.ggVisible=false;
				}
				else {
					me._minimap_ch.style.visibility=(Number(me._minimap_ch.style.opacity)>0||!me._minimap_ch.style.opacity)?'inherit':'hidden';
					me._minimap_ch.ggVisible=true;
				}
			}
		}
		me._minimap_ch.logicBlock_visible();
		me._minimap_ch.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['minimap_cb'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._minimap_ch.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._minimap_ch.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._minimap_ch.style.transition='opacity 500ms ease 0ms';
				if (me._minimap_ch.ggCurrentLogicStateAlpha == 0) {
					me._minimap_ch.style.visibility=me._minimap_ch.ggVisible?'inherit':'hidden';
					me._minimap_ch.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._minimap_ch.style.opacity == 0.0) { me._minimap_ch.style.visibility="hidden"; } }, 505);
					me._minimap_ch.style.opacity=0;
				}
			}
		}
		me._minimap_ch.logicBlock_alpha();
		me._minimap_ch.ggUpdatePosition=function (useTransition) {
		}
		me._minimap_cb.appendChild(me._minimap_ch);
		me._minimap_bg.appendChild(me._minimap_cb);
		el=me._minimap_blur_02=document.createElement('div');
		el.ggId="MiniMap Blur 02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='border : 0px solid #000000;';
		hs+='height : 220px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._minimap_blur_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap_blur_02.ggUpdatePosition=function (useTransition) {
		}
		me._minimap_bg.appendChild(me._minimap_blur_02);
		el=me._minimap_blur=document.createElement('div');
		el.ggId="MiniMap Blur";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='border : 0px solid #000000;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 225px;';
		hs+='top : 85px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._minimap_blur.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap_blur.onclick=function (e) {
			me._minimap_cb.onclick.call(me._minimap_cb);
		}
		me._minimap_blur.onmouseenter=function (e) {
			me.elementMouseOver['minimap_blur']=true;
		}
		me._minimap_blur.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._minimap_ch.style.transition='none';
			} else {
				me._minimap_ch.style.transition='all 500ms ease-out 0ms';
			}
			me._minimap_ch.style.opacity='0';
			me._minimap_ch.style.visibility='hidden';
			me.elementMouseOver['minimap_blur']=false;
		}
		me._minimap_blur.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['minimap_blur']) {
				me._minimap_ch.style.transition='none';
				me._minimap_ch.style.visibility=(Number(me._minimap_ch.style.opacity)>0||!me._minimap_ch.style.opacity)?'inherit':'hidden';
				me._minimap_ch.ggVisible=true;
				if (player.transitionsDisabled) {
					me._minimap_ch.style.transition='none';
				} else {
					me._minimap_ch.style.transition='all 500ms ease-out 0ms';
				}
				me._minimap_ch.style.opacity='1';
				me._minimap_ch.style.visibility=me._minimap_ch.ggVisible?'inherit':'hidden';
				me._minimap_ch.style.transition='none';
				me._minimap_ch.style.visibility='hidden';
				me._minimap_ch.ggVisible=false;
			}
		}
		me._minimap_blur.ggUpdatePosition=function (useTransition) {
		}
		me._minimap_bg.appendChild(me._minimap_blur);
		me._right_top_corner_panel.appendChild(me._minimap_bg);
		el=me._room_name_p=document.createElement('div');
		els=me._room_name_p__img=document.createElement('img');
		els.className='ggskin ggskin_room_name_p';
		hs=basePath + 'images/room_name_p.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._room_name_p__img.ggOverSrc=hs;
		el.ggId="Room_name_P";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : 235px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_name_p.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_name_p.onclick=function (e) {
			player.setVariableValue('Room_visibility_1F', !player.getVariableValue('Room_visibility_1F'));
			player.setVariableValue('Room_visibility_2F', !player.getVariableValue('Room_visibility_2F'));
			player.setVariableValue('Room_visibility_3F', !player.getVariableValue('Room_visibility_3F'));
			player.setVariableValue('Floor_Visibility', false);
			player.setVariableValue('contactpanel', false);
		}
		me._room_name_p.onmouseenter=function (e) {
			me._room_name_p__img.src=me._room_name_p__img.ggOverSrc;
			me.elementMouseOver['room_name_p']=true;
			me._rooms_h.logicBlock_alpha();
			me._rooms_h.logicBlock_alpha();
		}
		me._room_name_p.onmousedown=function (e) {
			me.elementMouseDown['room_name_p']=true;
			me._rooms_h.logicBlock_alpha();
			me._rooms_h.logicBlock_alpha();
		}
		me._room_name_p.onmouseup=function (e) {
			me.elementMouseDown['room_name_p']=false;
			me._rooms_h.logicBlock_alpha();
			me._rooms_h.logicBlock_alpha();
		}
		me._room_name_p.onmouseleave=function (e) {
			me._room_name_p__img.src=me._room_name_p__img.ggNormalSrc;
			me.elementMouseDown['room_name_p']=false;
			me._rooms_h.logicBlock_alpha();
			me._rooms_h.logicBlock_alpha();
			me.elementMouseOver['room_name_p']=false;
			me._rooms_h.logicBlock_alpha();
			me._rooms_h.logicBlock_alpha();
		}
		me._room_name_p.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1f_rooms=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="1F_Rooms";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1f_rooms.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1f_rooms.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_1f=document.createElement('div');
		els=me._scrollarea_1f__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 349px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 147px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1f.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1f.ggHorScrollVisible || diffX == 0 || me._scrollarea_1f.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1f.ggScrollPosX = (me._scrollarea_1f__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1f.ggScrollPosX = Math.max(me._scrollarea_1f.ggScrollPosX, 0);
			me._scrollarea_1f.ggScrollPosX = Math.min(me._scrollarea_1f.ggScrollPosX, me._scrollarea_1f__horScrollBg.offsetWidth - me._scrollarea_1f__horScrollFg.offsetWidth);
			me._scrollarea_1f__horScrollFg.style.left = me._scrollarea_1f.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1f.ggScrollPosX / (me._scrollarea_1f__horScrollBg.offsetWidth - me._scrollarea_1f__horScrollFg.offsetWidth);
			me._scrollarea_1f__content.style.left = -(Math.round((me._scrollarea_1f.ggContentWidth * (1.0 - me._scrollarea_1f.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1f.ggContentLeftOffset + 'px';
			me._scrollarea_1f.ggScrollPosXPercent = (me._scrollarea_1f__horScrollFg.offsetLeft / me._scrollarea_1f__horScrollBg.offsetWidth);
		}
		me._scrollarea_1f.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1f.ggHorScrollVisible || diffX == 0 || me._scrollarea_1f.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1f.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1f.ggScrollPosX >= me._scrollarea_1f__horScrollBg.offsetWidth - me._scrollarea_1f__horScrollFg.offsetWidth)) {
					me._scrollarea_1f.ggScrollPosX = Math.min(me._scrollarea_1f.ggScrollPosX, me._scrollarea_1f__horScrollBg.offsetWidth - me._scrollarea_1f__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1f.ggScrollPosX <= 0)) {
					me._scrollarea_1f.ggScrollPosX = Math.max(me._scrollarea_1f.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1f__horScrollFg.style.left = me._scrollarea_1f.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1f.ggScrollPosX / (me._scrollarea_1f__horScrollBg.offsetWidth - me._scrollarea_1f__horScrollFg.offsetWidth);
			me._scrollarea_1f__content.style.left = -(Math.round((me._scrollarea_1f.ggContentWidth * (1.0 - me._scrollarea_1f.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1f.ggContentLeftOffset + 'px';
			me._scrollarea_1f.ggScrollPosXPercent = (me._scrollarea_1f__horScrollFg.offsetLeft / me._scrollarea_1f__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1f.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1f.ggVertScrollVisible || diffY == 0 || me._scrollarea_1f.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1f.ggScrollPosY = (me._scrollarea_1f__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1f.ggScrollPosY = Math.max(me._scrollarea_1f.ggScrollPosY, 0);
			me._scrollarea_1f.ggScrollPosY = Math.min(me._scrollarea_1f.ggScrollPosY, me._scrollarea_1f__vertScrollBg.offsetHeight - me._scrollarea_1f__vertScrollFg.offsetHeight);
			me._scrollarea_1f__vertScrollFg.style.top = me._scrollarea_1f.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1f.ggScrollPosY / (me._scrollarea_1f__vertScrollBg.offsetHeight - me._scrollarea_1f__vertScrollFg.offsetHeight);
			me._scrollarea_1f__content.style.top = -(Math.round((me._scrollarea_1f.ggContentHeight * (1.0 - me._scrollarea_1f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1f.ggContentTopOffset + 'px';
			me._scrollarea_1f.ggScrollPosYPercent = (me._scrollarea_1f__vertScrollFg.offsetTop / me._scrollarea_1f__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1f.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1f.ggVertScrollVisible || diffY == 0 || me._scrollarea_1f.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1f.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1f.ggScrollPosY >= me._scrollarea_1f__vertScrollBg.offsetHeight - me._scrollarea_1f__vertScrollFg.offsetHeight)) {
					me._scrollarea_1f.ggScrollPosY = Math.min(me._scrollarea_1f.ggScrollPosY, me._scrollarea_1f__vertScrollBg.offsetHeight - me._scrollarea_1f__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1f.ggScrollPosY <= 0)) {
					me._scrollarea_1f.ggScrollPosY = Math.max(me._scrollarea_1f.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1f__vertScrollFg.style.top = me._scrollarea_1f.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1f.ggScrollPosY / (me._scrollarea_1f__vertScrollBg.offsetHeight - me._scrollarea_1f__vertScrollFg.offsetHeight);
			me._scrollarea_1f__content.style.top = -(Math.round((me._scrollarea_1f.ggContentHeight * (1.0 - me._scrollarea_1f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1f.ggContentTopOffset + 'px';
			me._scrollarea_1f.ggScrollPosYPercent = (me._scrollarea_1f__vertScrollFg.offsetTop / me._scrollarea_1f__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1f.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1f.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1f.ggHPercentVisible);
					me._scrollarea_1f.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1f.clientWidth - (me._scrollarea_1f.ggVertScrollVisible ? 3 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1f.clientWidth - (me._scrollarea_1f.ggVertScrollVisible ? 3 : 0))) * me._scrollarea_1f.ggHPercentVisible);
					me._scrollarea_1f.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1f.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1f.ggVPercentVisible);
					me._scrollarea_1f.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1f.clientHeight - (me._scrollarea_1f.ggHorScrollVisible ? 3 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1f.clientHeight - (me._scrollarea_1f.ggHorScrollVisible ? 3 : 0))) * me._scrollarea_1f.ggVPercentVisible);
					me._scrollarea_1f.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1f__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1f.ggDragInertiaX *= 0.96;
				me._scrollarea_1f.ggDragInertiaY *= 0.96;
				me._scrollarea_1f.ggScrollByX(me._scrollarea_1f.ggDragInertiaX);
				me._scrollarea_1f.ggScrollByY(me._scrollarea_1f.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1f.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1f.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._scrollarea_1f__content.onmouseup = null;
			me._scrollarea_1f__content.onmousemove = null;
			me._scrollarea_1f__content.ontouchend = null;
			me._scrollarea_1f__content.ontouchmove = null;
			me._scrollarea_1f__content.onpointerup = null;
			me._scrollarea_1f__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1f.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1f__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1f.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1f.ggDragStartY) > 10) me._scrollarea_1f.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1f.ggDragLastX) * me._scrollarea_1f.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1f.ggDragLastY) * me._scrollarea_1f.ggVPercentVisible;
			me._scrollarea_1f.ggDragInertiaX = -diffX;
			me._scrollarea_1f.ggDragInertiaY = -diffY;
			me._scrollarea_1f.ggDragLastX = eventX;
			me._scrollarea_1f.ggDragLastY = eventY;
			me._scrollarea_1f.ggScrollByX(-diffX);
			me._scrollarea_1f.ggScrollByY(-diffY);
		}
		me._scrollarea_1f__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1f.ggDragLastX = me._scrollarea_1f.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1f.ggDragLastY = me._scrollarea_1f.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1f__content.onmouseup = me._scrollarea_1f__content.mousetouchend;
			me._scrollarea_1f__content.ontouchend = me._scrollarea_1f__content.mousetouchend;
			me._scrollarea_1f__content.onmousemove = me._scrollarea_1f__content.mousetouchmove;
			me._scrollarea_1f__content.ontouchmove = me._scrollarea_1f__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1f__content.onpointerup = me._scrollarea_1f__content.ontouchend;
				me._scrollarea_1f__content.onpointermove = me._scrollarea_1f__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1f__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1f__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1f__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_1f__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 3px; height: 175px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1f__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 3px; height: 175px; background-color: rgba(255,255,255,0.588235); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1f.ggScrollPosY = 0;
		me._scrollarea_1f.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1f.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1f.ggDragInertiaY *= 0.96;
					me._scrollarea_1f.ggScrollByY(me._scrollarea_1f.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1f.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1f.ggDragLastY;
				me._scrollarea_1f.ggDragInertiaY = diffY;
				me._scrollarea_1f.ggDragLastY = e.clientY;
				me._scrollarea_1f.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1f.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1f.ggDragInertiaY *= 0.96;
					me._scrollarea_1f.ggScrollByY(me._scrollarea_1f.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1f.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1f.ggDragLastY;
				me._scrollarea_1f.ggDragInertiaY = diffY;
				me._scrollarea_1f.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1f.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1f.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1f.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1f.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1f__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1f.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1f.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1f.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1f.ggScrollByYSmooth(30 * me._scrollarea_1f.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1f__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 3px; height: 3px; background-color: rgba(255,255,255,0);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='z-index: -5;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='height : 175px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1f.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Room_visibility_1F') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_1F') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._scrollarea_1f.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._scrollarea_1f.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._scrollarea_1f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_1f.ggCurrentLogicStatePosition == 0) {
					me._scrollarea_1f.style.left = 'calc(50% - (148px / 2))';
					me._scrollarea_1f.style.top='0px';
				}
				else if (me._scrollarea_1f.ggCurrentLogicStatePosition == 1) {
					me._scrollarea_1f.style.left = 'calc(50% - (148px / 2))';
					me._scrollarea_1f.style.top='40px';
				}
				else {
					me._scrollarea_1f.style.left='calc(50% - ((148px + 0px) / 2) + 0px)';
					me._scrollarea_1f.style.top='0px';
				}
			}
		}
		me._scrollarea_1f.logicBlock_position();
		me._scrollarea_1f.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1)) || 
				((me.ggUserdata.tags.indexOf("Exterior") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._scrollarea_1f.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._scrollarea_1f.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._scrollarea_1f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_1f.ggCurrentLogicStateVisible == 0) {
					me._scrollarea_1f.style.visibility=(Number(me._scrollarea_1f.style.opacity)>0||!me._scrollarea_1f.style.opacity)?'inherit':'hidden';
					me._scrollarea_1f.ggVisible=true;
				}
				else if (me._scrollarea_1f.ggCurrentLogicStateVisible == 1) {
					me._scrollarea_1f.style.visibility="hidden";
					me._scrollarea_1f.ggVisible=false;
				}
				else {
					me._scrollarea_1f.style.visibility="hidden";
					me._scrollarea_1f.ggVisible=false;
				}
			}
		}
		me._scrollarea_1f.logicBlock_visible();
		me._scrollarea_1f.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Room_visibility_1F') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_1F') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._scrollarea_1f.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._scrollarea_1f.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._scrollarea_1f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_1f.ggCurrentLogicStateAlpha == 0) {
					me._scrollarea_1f.style.visibility=me._scrollarea_1f.ggVisible?'inherit':'hidden';
					me._scrollarea_1f.style.opacity=1;
				}
				else if (me._scrollarea_1f.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._scrollarea_1f.style.opacity == 0.0) { me._scrollarea_1f.style.visibility="hidden"; } }, 505);
					me._scrollarea_1f.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._scrollarea_1f.style.opacity == 0.0) { me._scrollarea_1f.style.visibility="hidden"; } }, 505);
					me._scrollarea_1f.style.opacity=0;
				}
			}
		}
		me._scrollarea_1f.logicBlock_alpha();
		me._scrollarea_1f.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1f.ggScrollPosY / me._scrollarea_1f.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_1f.ggHorScrollVisible && contentHeight > this.clientHeight - 3) || (!me._scrollarea_1f.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_1f__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_1f__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_1f.ggVertScrollVisible = true;
				} else {
					me._scrollarea_1f__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_1f__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_1f.ggVertScrollVisible = false;
				}
				if(me._scrollarea_1f.ggVertScrollVisible) {
					me._scrollarea_1f.ggAvailableWidth = me._scrollarea_1f.clientWidth - 3;
					if (me._scrollarea_1f.ggHorScrollVisible) {
						me._scrollarea_1f.ggAvailableHeight = me._scrollarea_1f.clientHeight - 3;
						me._scrollarea_1f.ggAvailableHeightWithScale = me._scrollarea_1f.getBoundingClientRect().height - me._scrollarea_1f__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1f__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1f.ggAvailableHeight = me._scrollarea_1f.clientHeight;
						me._scrollarea_1f.ggAvailableHeightWithScale = me._scrollarea_1f.getBoundingClientRect().height;
						me._scrollarea_1f__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1f__vertScrollBg.style.height = me._scrollarea_1f.ggAvailableHeight + 'px';
					me._scrollarea_1f.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1f.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1f.ggVPercentVisible > 1.0) me._scrollarea_1f.ggVPercentVisible = 1.0;
					me._scrollarea_1f.ggScrollHeight =  Math.round(me._scrollarea_1f__vertScrollBg.offsetHeight * me._scrollarea_1f.ggVPercentVisible);
					me._scrollarea_1f__vertScrollFg.style.height = me._scrollarea_1f.ggScrollHeight + 'px';
					me._scrollarea_1f.ggScrollPosY = me._scrollarea_1f.ggScrollPosYPercent * me._scrollarea_1f.ggAvailableHeight;
					me._scrollarea_1f.ggScrollPosY = Math.min(me._scrollarea_1f.ggScrollPosY, me._scrollarea_1f__vertScrollBg.offsetHeight - me._scrollarea_1f__vertScrollFg.offsetHeight);
					me._scrollarea_1f__vertScrollFg.style.top = me._scrollarea_1f.ggScrollPosY + 'px';
					if (me._scrollarea_1f.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1f.ggScrollPosY / (me._scrollarea_1f__vertScrollBg.offsetHeight - me._scrollarea_1f__vertScrollFg.offsetHeight);
						me._scrollarea_1f__content.style.top = -(Math.round((me._scrollarea_1f.ggContentHeight * (1.0 - me._scrollarea_1f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1f.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1f.ggAvailableWidth = me._scrollarea_1f.clientWidth;
					me._scrollarea_1f.ggScrollPosY = 0;
					me._scrollarea_1f.ggScrollPosYPercent = 0.0;
					me._scrollarea_1f__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1f__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1f.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1f.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1f);
					me._scrollarea_1f.ggUpdatePosition();
				}
			}
		}
		el=me._container_1f=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._container_1f;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Container 1F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -5;';
		hs+='border : 0px solid #000000;';
		hs+='height : 350px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1f.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_1f=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_1f;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 148;
		el.ggHeight = 35;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggGoUp = function() {
			if (me._cloner_1f.ggCloneOffset + me._cloner_1f.ggNumRows <= me._cloner_1f.ggNumFilterPassed) {
				me._cloner_1f.ggCloneOffset += me._cloner_1f.ggNumRows;
				me._cloner_1f.ggCloneOffsetChanged = true;
				me._cloner_1f.ggUpdate();
			}
		}
		el.ggGoDown = function() {
			if (me._cloner_1f.ggCloneOffset > 0) {
				me._cloner_1f.ggCloneOffset -= me._cloner_1f.ggNumRows;
				me._cloner_1f.ggCloneOffset = Math.max(me._cloner_1f.ggCloneOffset, 0);
				me._cloner_1f.ggCloneOffsetChanged = true;
				me._cloner_1f.ggUpdate();
			}
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_1f.ggUpdating == true) return;
			me._cloner_1f.ggUpdating = true;
			var el=me._cloner_1f;
			var curNumRows = 0;
			var parentHeight = me._cloner_1f.parentNode.classList.contains('ggskin_subelement') ? (me._cloner_1f.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._cloner_1f.parentNode.parentNode.ggAvailableHeight : me._cloner_1f.parentNode.parentNode.clientHeight) : me._cloner_1f.parentNode.clientHeight;
			if (parentHeight == 0) parentHeight = me._cloner_1f.parentNode.parentNode.clientHeight;
			curNumRows = Math.floor(((parentHeight - me._cloner_1f.offsetTop) * me._cloner_1f.ggNumRepeat / 100.0) / me._cloner_1f.offsetHeight);
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) ) && (!me._cloner_1f.ggCloneOffsetChanged)) {
				me._cloner_1f.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_1f.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._cloner_1f.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_1f.getFilteredNodes(tourNodes, filter);
			me._cloner_1f.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_1f.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_1f.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_1f.ggWidth) + 'px';
				parameter.width=me._cloner_1f.ggWidth + 'px';
				parameter.height=me._cloner_1f.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_1f_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					keepCloning = false;
				}
			}
			player.setVariableValue('cloner_1f_hasDown', me._cloner_1f.ggCloneOffset > 0);
			player.setVariableValue('cloner_1f_hasUp', me._cloner_1f.ggCloneOffset + me._cloner_1f.ggNumCols < me._cloner_1f.ggNumFilterPassed);
			me._cloner_1f.ggNodeCount = me._cloner_1f.ggNumFilterPassed;
			me._cloner_1f.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_1f.parentNode && me._cloner_1f.parentNode.classList.contains('ggskin_subelement') && me._cloner_1f.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_1f.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "1F_Rooms";
		el.ggId="Cloner 1F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_1f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_1f.ggUpdatePosition=function (useTransition) {
			me._cloner_1f.ggUpdate();
		}
		me._container_1f.appendChild(me._cloner_1f);
		me._scrollarea_1f__content.appendChild(me._container_1f);
		me.__1f_rooms.appendChild(me._scrollarea_1f);
		el=me._room_panel_1f=document.createElement('div');
		els=me._room_panel_1f__img=document.createElement('img');
		els.className='ggskin ggskin_room_panel_1f';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlAAAAK8CAYAAAAgZIG8AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB/ySURBVHgB7d1Pz1xXmSDw8vWNnSiJsNTAQCYSdiLSbNJKS4BG6lGYblasmt6B2DSfoGdWLNPeIFhN+hPADg2bHjYgNs0fkVUidcSKICCWAG9CByMLGUhc7joVn+vz795z6nW61eDfT3Kq6t63bt2qt67z+DnPec653aCvfOUrlx5++OFPnz9//hN37tx57ty5c5cPmy8d7i8/E+4ftu9OlR4jiMeI20ePufXz5b70XFv71o4zqvws1h73PrO1/fG5W89fe89n/T21zmvks2r9TOsc1s6r97vrHbc837O+963XHdk/euz4OBj9jHrPW/u59GdPPf/09z/6nN'+
			'65xOOm213/rv/0+a5/1//WcU79Dh3cODy+drh9dZ7n7968efMbn//852/sBnTP7Gtf+9rlwwv9w+HP3x9e5FI8idabbv2ldBat45/63LXbd0s85tpxy79c1j6v8nij1p7fer9nee/lc87yOfY+o7XXjc/tndPo65/ymvf7PRn5Xfee03v8n2n0/bj+2+dR3m/tT483yvU//vqnvKbrP/cAX/9fPfz81c9+9rPXNl9vbUfIOD3yyCP/GIKn/X4/9EXsfWFHv9Cjx2l9KGt/ecSfL9/L1r9Y4vN753GKOyf+i+mUY6Xbg/TLPE1T9t7LL3vrAhg5z96+nvS56e+t/Atk63mlkYuld/xTnPX9tz7vtf8xnuV8W7/X8nV7z21dM73nnHX/qcdx/bv+W1z/9XNd/2e+/l/8zGc+83/WzqV5lnezTt85HORy62RWD3au/6+u'+
			'1om2viC9C6A8Zu91147filC3/jJZ+yJvHa93zq3to5/71vttfTatx1s/s6Z8n6PfjbXPduTzG3mNeMzy53vn2fsce5/P1vf91O9mvMi3vnO966X3u137PFp/ubj+Xf9rr+v6337+2vmsPc/1/1/y+r92uPnrVjaqekdf//rXn7t9+/Y/H+5eLve9/fbbv//JT37yw5///OfX33zzzZtvvPHGzR0AwB+hRx999OKTTz75Z08//fSVJ5544srFixcfD9vTgO9w/9ohLvq7z33uc6+mz80CqJB5Otx85xBxXU4PcOvWrZs/+MEP/uW11167vgMA+BP08Y9//M+fffbZjz3yyCOPF5mra7siE7UEUHdn2f1rDJ6i119//Yff+973Xvntb3/7+x0AwJ+wkJV6/vnnP/rUU0/9Rbo9BFG/+93v/jLO0pvijgsXLvxjCJ5CxB'+
			'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'+
			'DbQjAlAwUA0FEVkVsLDwBg21I8fhixU0QOADAo7VowC5wAALalJU/BJIACABiTrYUniAIAWBeH7+J9GSgAgAGhgFwGCgBgULqUSzClGwRSAAC1su2TDBQAwIA0XhJAAQB0VGvhGboDANi2uphwaycAAO9Ik05TmJIXNwIAUFNEDgBwBulyLgIoAIAB6WLCoYj8RtgY25M/+uijj+8AADi6cOHCxdiF/G7S6Uaogbp2jKTu1kIJoAAA7rl06dKfhdtkLbxr0+HBq/EHQiB1+KEndgAAHL33ve+9ErNPd/+8GtJO3ws7Yx3U+973vr/YAQBw9J73vOdKuE0CqO9OFy9e/P/nz5+/EXcc7l/8wAc+IAsFADzwPvShD/35Qw89lJU33bp16xvT1atXQ/D01XRR4aeeeupvQsHUDgDgARVioSeffPJjxfDdV1988cUbx8rx'+
			't99++5/SQvIQaX34wx/+6A4A4AH1zDPPfGye5yz7dPv27avh9nz4z0svvXTj+eefv3S4+z9ihPXoo4/+t4cffvjcr371q+s7AIAHyEc+8pGPvf/97//LNPt0586dF7/0pS/9v7B/WQvvEGGFiOpafBx+8IMf/OBHn3322b8ynAcAPAhCzHOIff5niIHC4yR4unbr1q2r8eeyFuRf+MIXLp8/f/47h6G8y+n2t9566+b169df/tnPfvbaDgDgT9AhaHri6aef/puyaDz0ffrDH/7w11/+8pevLdvKJ7/wwgvP7ff7fz7cvXz3SbvD4+O+EEj95je/ef2NN954/c033/y3w8F+vwMA+CP0+MFjjz32+KVLl/77Ybju2UMC6WK6vN3dZVuu3b59+++++MUvvpo+t7kIXshEHVJY39ndDaLWhAPHwvP4eDnw3fVishdrbB'+
			'uVLuBXnsPoWn7v9jltvfb9vtezPHftMxp5rfs53+iU38Xaz/5H/T7id7X1+4/7t86jd17p/vR+PKe1717rte/XKb+H+30d17/rP3L9u/6jP7Hrv8o8Lc/fetYhG/V/Dwf/3+mJpifc+8KO7msds/fBpF/W5c00PozRD7j1cyPPbX345S977f3E7N7I+x09163PdvRYp24f/Z21jjHyOqPnsvacd/N7GrTef3TK9zrd1jruqef7bj537bN1/dfPK7n+x8/f9e/6/698/R+8ePPmzauhZUHred0jH4Koy4eL/IXDwf9+N2DtC9f6kq3tbx1vbf+7ZevLsfaX5FnPqffc+zl27zj387vovUb6GY5se7de4yzH3DpW63hr/3M6i61jr51P3L72+iOfx+h3e+tcR95beX6u/9Oe6/o/7TXOcsytY7WO5/off2/l+f0RXv83'+
			'DjHPVw/ZtX+6evXqtc3n7QYdAqlLh4N++nD3E4cDP3e4vXx4wUvpBxa1vgznzo3/q+g/wlkusK2/UHvnf5b3GJ7TSjOvHfvOne1/Na+dw6nvZesc1o7xbv2Oz3rs8jNqXYitz3vrs117jbVtrb801o6zdh498VzPcr7pX2BneZ3e98v17/q/X67/ba7/MZ3rP2SXrh1+5tXDn+8e4pxv3G0w3vXvDLox5WmXfjEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Room_panel 1f";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -10;';
		hs+='height : 175px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_panel_1f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_panel_1f.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Room_visibility_1F') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_1F') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._room_panel_1f.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._room_panel_1f.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._room_panel_1f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._room_panel_1f.ggCurrentLogicStatePosition == 0) {
					me._room_panel_1f.style.left = 'calc(50% - (148px / 2))';
					me._room_panel_1f.style.top='0px';
				}
				else if (me._room_panel_1f.ggCurrentLogicStatePosition == 1) {
					me._room_panel_1f.style.left = 'calc(50% - (148px / 2))';
					me._room_panel_1f.style.top='40px';
				}
				else {
					me._room_panel_1f.style.left='calc(50% - ((148px + 0px) / 2) + 0px)';
					me._room_panel_1f.style.top='0px';
				}
			}
		}
		me._room_panel_1f.logicBlock_position();
		me._room_panel_1f.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1)) || 
				((me.ggUserdata.tags.indexOf("Exterior") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._room_panel_1f.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._room_panel_1f.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._room_panel_1f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._room_panel_1f.ggCurrentLogicStateVisible == 0) {
					me._room_panel_1f.style.visibility=(Number(me._room_panel_1f.style.opacity)>0||!me._room_panel_1f.style.opacity)?'inherit':'hidden';
					me._room_panel_1f.ggVisible=true;
				}
				else if (me._room_panel_1f.ggCurrentLogicStateVisible == 1) {
					me._room_panel_1f.style.visibility="hidden";
					me._room_panel_1f.ggVisible=false;
				}
				else {
					me._room_panel_1f.style.visibility="hidden";
					me._room_panel_1f.ggVisible=false;
				}
			}
		}
		me._room_panel_1f.logicBlock_visible();
		me._room_panel_1f.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Room_visibility_1F') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_1F') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._room_panel_1f.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._room_panel_1f.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._room_panel_1f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._room_panel_1f.ggCurrentLogicStateAlpha == 0) {
					me._room_panel_1f.style.visibility=me._room_panel_1f.ggVisible?'inherit':'hidden';
					me._room_panel_1f.style.opacity=1;
				}
				else if (me._room_panel_1f.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._room_panel_1f.style.opacity == 0.0) { me._room_panel_1f.style.visibility="hidden"; } }, 505);
					me._room_panel_1f.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._room_panel_1f.style.opacity == 0.0) { me._room_panel_1f.style.visibility="hidden"; } }, 505);
					me._room_panel_1f.style.opacity=0;
				}
			}
		}
		me._room_panel_1f.logicBlock_alpha();
		me._room_panel_1f.ggUpdatePosition=function (useTransition) {
		}
		me.__1f_rooms.appendChild(me._room_panel_1f);
		me._room_name_p.appendChild(me.__1f_rooms);
		el=me.__2f_rooms=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="2F_Rooms";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2f_rooms.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2f_rooms.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_2f=document.createElement('div');
		els=me._scrollarea_2f__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 244px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 147px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_2f.ggScrollByX = function(diffX) {
			if(!me._scrollarea_2f.ggHorScrollVisible || diffX == 0 || me._scrollarea_2f.ggHPercentVisible >= 1.0) return;
			me._scrollarea_2f.ggScrollPosX = (me._scrollarea_2f__horScrollFg.offsetLeft + diffX);
			me._scrollarea_2f.ggScrollPosX = Math.max(me._scrollarea_2f.ggScrollPosX, 0);
			me._scrollarea_2f.ggScrollPosX = Math.min(me._scrollarea_2f.ggScrollPosX, me._scrollarea_2f__horScrollBg.offsetWidth - me._scrollarea_2f__horScrollFg.offsetWidth);
			me._scrollarea_2f__horScrollFg.style.left = me._scrollarea_2f.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_2f.ggScrollPosX / (me._scrollarea_2f__horScrollBg.offsetWidth - me._scrollarea_2f__horScrollFg.offsetWidth);
			me._scrollarea_2f__content.style.left = -(Math.round((me._scrollarea_2f.ggContentWidth * (1.0 - me._scrollarea_2f.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_2f.ggContentLeftOffset + 'px';
			me._scrollarea_2f.ggScrollPosXPercent = (me._scrollarea_2f__horScrollFg.offsetLeft / me._scrollarea_2f__horScrollBg.offsetWidth);
		}
		me._scrollarea_2f.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_2f.ggHorScrollVisible || diffX == 0 || me._scrollarea_2f.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_2f.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_2f.ggScrollPosX >= me._scrollarea_2f__horScrollBg.offsetWidth - me._scrollarea_2f__horScrollFg.offsetWidth)) {
					me._scrollarea_2f.ggScrollPosX = Math.min(me._scrollarea_2f.ggScrollPosX, me._scrollarea_2f__horScrollBg.offsetWidth - me._scrollarea_2f__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_2f.ggScrollPosX <= 0)) {
					me._scrollarea_2f.ggScrollPosX = Math.max(me._scrollarea_2f.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_2f__horScrollFg.style.left = me._scrollarea_2f.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_2f.ggScrollPosX / (me._scrollarea_2f__horScrollBg.offsetWidth - me._scrollarea_2f__horScrollFg.offsetWidth);
			me._scrollarea_2f__content.style.left = -(Math.round((me._scrollarea_2f.ggContentWidth * (1.0 - me._scrollarea_2f.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_2f.ggContentLeftOffset + 'px';
			me._scrollarea_2f.ggScrollPosXPercent = (me._scrollarea_2f__horScrollFg.offsetLeft / me._scrollarea_2f__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_2f.ggScrollByY = function(diffY) {
			if(!me._scrollarea_2f.ggVertScrollVisible || diffY == 0 || me._scrollarea_2f.ggVPercentVisible >= 1.0) return;
			me._scrollarea_2f.ggScrollPosY = (me._scrollarea_2f__vertScrollFg.offsetTop + diffY);
			me._scrollarea_2f.ggScrollPosY = Math.max(me._scrollarea_2f.ggScrollPosY, 0);
			me._scrollarea_2f.ggScrollPosY = Math.min(me._scrollarea_2f.ggScrollPosY, me._scrollarea_2f__vertScrollBg.offsetHeight - me._scrollarea_2f__vertScrollFg.offsetHeight);
			me._scrollarea_2f__vertScrollFg.style.top = me._scrollarea_2f.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_2f.ggScrollPosY / (me._scrollarea_2f__vertScrollBg.offsetHeight - me._scrollarea_2f__vertScrollFg.offsetHeight);
			me._scrollarea_2f__content.style.top = -(Math.round((me._scrollarea_2f.ggContentHeight * (1.0 - me._scrollarea_2f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_2f.ggContentTopOffset + 'px';
			me._scrollarea_2f.ggScrollPosYPercent = (me._scrollarea_2f__vertScrollFg.offsetTop / me._scrollarea_2f__vertScrollBg.offsetHeight);
		}
		me._scrollarea_2f.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_2f.ggVertScrollVisible || diffY == 0 || me._scrollarea_2f.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_2f.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_2f.ggScrollPosY >= me._scrollarea_2f__vertScrollBg.offsetHeight - me._scrollarea_2f__vertScrollFg.offsetHeight)) {
					me._scrollarea_2f.ggScrollPosY = Math.min(me._scrollarea_2f.ggScrollPosY, me._scrollarea_2f__vertScrollBg.offsetHeight - me._scrollarea_2f__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_2f.ggScrollPosY <= 0)) {
					me._scrollarea_2f.ggScrollPosY = Math.max(me._scrollarea_2f.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_2f__vertScrollFg.style.top = me._scrollarea_2f.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_2f.ggScrollPosY / (me._scrollarea_2f__vertScrollBg.offsetHeight - me._scrollarea_2f__vertScrollFg.offsetHeight);
			me._scrollarea_2f__content.style.top = -(Math.round((me._scrollarea_2f.ggContentHeight * (1.0 - me._scrollarea_2f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_2f.ggContentTopOffset + 'px';
			me._scrollarea_2f.ggScrollPosYPercent = (me._scrollarea_2f__vertScrollFg.offsetTop / me._scrollarea_2f__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_2f.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_2f.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_2f.ggHPercentVisible);
					me._scrollarea_2f.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_2f.clientWidth - (me._scrollarea_2f.ggVertScrollVisible ? 3 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_2f.clientWidth - (me._scrollarea_2f.ggVertScrollVisible ? 3 : 0))) * me._scrollarea_2f.ggHPercentVisible);
					me._scrollarea_2f.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_2f.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_2f.ggVPercentVisible);
					me._scrollarea_2f.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_2f.clientHeight - (me._scrollarea_2f.ggHorScrollVisible ? 3 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_2f.clientHeight - (me._scrollarea_2f.ggHorScrollVisible ? 3 : 0))) * me._scrollarea_2f.ggVPercentVisible);
					me._scrollarea_2f.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_2f__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_2f.ggDragInertiaX *= 0.96;
				me._scrollarea_2f.ggDragInertiaY *= 0.96;
				me._scrollarea_2f.ggScrollByX(me._scrollarea_2f.ggDragInertiaX);
				me._scrollarea_2f.ggScrollByY(me._scrollarea_2f.ggDragInertiaY);
				if (Math.abs(me._scrollarea_2f.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_2f.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._scrollarea_2f__content.onmouseup = null;
			me._scrollarea_2f__content.onmousemove = null;
			me._scrollarea_2f__content.ontouchend = null;
			me._scrollarea_2f__content.ontouchmove = null;
			me._scrollarea_2f__content.onpointerup = null;
			me._scrollarea_2f__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_2f.ggIsDragging = false; }, 100);
		}
		me._scrollarea_2f__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_2f.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_2f.ggDragStartY) > 10) me._scrollarea_2f.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_2f.ggDragLastX) * me._scrollarea_2f.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_2f.ggDragLastY) * me._scrollarea_2f.ggVPercentVisible;
			me._scrollarea_2f.ggDragInertiaX = -diffX;
			me._scrollarea_2f.ggDragInertiaY = -diffY;
			me._scrollarea_2f.ggDragLastX = eventX;
			me._scrollarea_2f.ggDragLastY = eventY;
			me._scrollarea_2f.ggScrollByX(-diffX);
			me._scrollarea_2f.ggScrollByY(-diffY);
		}
		me._scrollarea_2f__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_2f.ggDragLastX = me._scrollarea_2f.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_2f.ggDragLastY = me._scrollarea_2f.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_2f__content.onmouseup = me._scrollarea_2f__content.mousetouchend;
			me._scrollarea_2f__content.ontouchend = me._scrollarea_2f__content.mousetouchend;
			me._scrollarea_2f__content.onmousemove = me._scrollarea_2f__content.mousetouchmove;
			me._scrollarea_2f__content.ontouchmove = me._scrollarea_2f__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_2f__content.onpointerup = me._scrollarea_2f__content.ontouchend;
				me._scrollarea_2f__content.onpointermove = me._scrollarea_2f__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_2f__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_2f__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_2f__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_2f__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 3px; height: 175px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_2f__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 3px; height: 175px; background-color: rgba(255,255,255,0.588235); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_2f.ggScrollPosY = 0;
		me._scrollarea_2f.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_2f.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_2f.ggDragInertiaY *= 0.96;
					me._scrollarea_2f.ggScrollByY(me._scrollarea_2f.ggDragInertiaY);
					if (Math.abs(me._scrollarea_2f.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_2f.ggDragLastY;
				me._scrollarea_2f.ggDragInertiaY = diffY;
				me._scrollarea_2f.ggDragLastY = e.clientY;
				me._scrollarea_2f.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_2f.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_2f.ggDragInertiaY *= 0.96;
					me._scrollarea_2f.ggScrollByY(me._scrollarea_2f.ggDragInertiaY);
					if (Math.abs(me._scrollarea_2f.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_2f.ggDragLastY;
				me._scrollarea_2f.ggDragInertiaY = diffY;
				me._scrollarea_2f.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_2f.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_2f.ggScrollHeight;
			if (e.offsetY < me._scrollarea_2f.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_2f.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_2f__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_2f.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_2f.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_2f.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_2f.ggScrollByYSmooth(30 * me._scrollarea_2f.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_2f__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 3px; height: 3px; background-color: rgba(255,255,255,0);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 2F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='z-index: -5;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='height : 175px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_2f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_2f.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Room_visibility_2F') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_2F') == false))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._scrollarea_2f.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._scrollarea_2f.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._scrollarea_2f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_2f.ggCurrentLogicStatePosition == 0) {
					me._scrollarea_2f.style.left = 'calc(50% - (148px / 2))';
					me._scrollarea_2f.style.top='40px';
				}
				else if (me._scrollarea_2f.ggCurrentLogicStatePosition == 1) {
					me._scrollarea_2f.style.left = 'calc(50% - (148px / 2))';
					me._scrollarea_2f.style.top='0px';
				}
				else {
					me._scrollarea_2f.style.left='calc(50% - ((148px + 0px) / 2) + 0px)';
					me._scrollarea_2f.style.top='0px';
				}
			}
		}
		me._scrollarea_2f.logicBlock_position();
		me._scrollarea_2f.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1)) || 
				((me.ggUserdata.tags.indexOf("Exterior") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._scrollarea_2f.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._scrollarea_2f.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._scrollarea_2f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_2f.ggCurrentLogicStateVisible == 0) {
					me._scrollarea_2f.style.visibility=(Number(me._scrollarea_2f.style.opacity)>0||!me._scrollarea_2f.style.opacity)?'inherit':'hidden';
					me._scrollarea_2f.ggVisible=true;
				}
				else if (me._scrollarea_2f.ggCurrentLogicStateVisible == 1) {
					me._scrollarea_2f.style.visibility="hidden";
					me._scrollarea_2f.ggVisible=false;
				}
				else {
					me._scrollarea_2f.style.visibility="hidden";
					me._scrollarea_2f.ggVisible=false;
				}
			}
		}
		me._scrollarea_2f.logicBlock_visible();
		me._scrollarea_2f.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Room_visibility_2F') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_2F') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._scrollarea_2f.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._scrollarea_2f.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._scrollarea_2f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_2f.ggCurrentLogicStateAlpha == 0) {
					me._scrollarea_2f.style.visibility=me._scrollarea_2f.ggVisible?'inherit':'hidden';
					me._scrollarea_2f.style.opacity=1;
				}
				else if (me._scrollarea_2f.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._scrollarea_2f.style.opacity == 0.0) { me._scrollarea_2f.style.visibility="hidden"; } }, 505);
					me._scrollarea_2f.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._scrollarea_2f.style.opacity == 0.0) { me._scrollarea_2f.style.visibility="hidden"; } }, 505);
					me._scrollarea_2f.style.opacity=0;
				}
			}
		}
		me._scrollarea_2f.logicBlock_alpha();
		me._scrollarea_2f.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_2f.ggScrollPosY / me._scrollarea_2f.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_2f.ggHorScrollVisible && contentHeight > this.clientHeight - 3) || (!me._scrollarea_2f.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_2f__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_2f__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_2f.ggVertScrollVisible = true;
				} else {
					me._scrollarea_2f__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_2f__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_2f.ggVertScrollVisible = false;
				}
				if(me._scrollarea_2f.ggVertScrollVisible) {
					me._scrollarea_2f.ggAvailableWidth = me._scrollarea_2f.clientWidth - 3;
					if (me._scrollarea_2f.ggHorScrollVisible) {
						me._scrollarea_2f.ggAvailableHeight = me._scrollarea_2f.clientHeight - 3;
						me._scrollarea_2f.ggAvailableHeightWithScale = me._scrollarea_2f.getBoundingClientRect().height - me._scrollarea_2f__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_2f__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_2f.ggAvailableHeight = me._scrollarea_2f.clientHeight;
						me._scrollarea_2f.ggAvailableHeightWithScale = me._scrollarea_2f.getBoundingClientRect().height;
						me._scrollarea_2f__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_2f__vertScrollBg.style.height = me._scrollarea_2f.ggAvailableHeight + 'px';
					me._scrollarea_2f.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_2f.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_2f.ggVPercentVisible > 1.0) me._scrollarea_2f.ggVPercentVisible = 1.0;
					me._scrollarea_2f.ggScrollHeight =  Math.round(me._scrollarea_2f__vertScrollBg.offsetHeight * me._scrollarea_2f.ggVPercentVisible);
					me._scrollarea_2f__vertScrollFg.style.height = me._scrollarea_2f.ggScrollHeight + 'px';
					me._scrollarea_2f.ggScrollPosY = me._scrollarea_2f.ggScrollPosYPercent * me._scrollarea_2f.ggAvailableHeight;
					me._scrollarea_2f.ggScrollPosY = Math.min(me._scrollarea_2f.ggScrollPosY, me._scrollarea_2f__vertScrollBg.offsetHeight - me._scrollarea_2f__vertScrollFg.offsetHeight);
					me._scrollarea_2f__vertScrollFg.style.top = me._scrollarea_2f.ggScrollPosY + 'px';
					if (me._scrollarea_2f.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_2f.ggScrollPosY / (me._scrollarea_2f__vertScrollBg.offsetHeight - me._scrollarea_2f__vertScrollFg.offsetHeight);
						me._scrollarea_2f__content.style.top = -(Math.round((me._scrollarea_2f.ggContentHeight * (1.0 - me._scrollarea_2f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_2f.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_2f.ggAvailableWidth = me._scrollarea_2f.clientWidth;
					me._scrollarea_2f.ggScrollPosY = 0;
					me._scrollarea_2f.ggScrollPosYPercent = 0.0;
					me._scrollarea_2f__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_2f__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_2f.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_2f.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_2f);
					me._scrollarea_2f.ggUpdatePosition();
				}
			}
		}
		el=me._container_2f=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._container_2f;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Container 2F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -5;';
		hs+='border : 0px solid #000000;';
		hs+='height : 245px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2f.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_2f=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_2f;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 148;
		el.ggHeight = 35;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggGoUp = function() {
			if (me._cloner_2f.ggCloneOffset + me._cloner_2f.ggNumRows <= me._cloner_2f.ggNumFilterPassed) {
				me._cloner_2f.ggCloneOffset += me._cloner_2f.ggNumRows;
				me._cloner_2f.ggCloneOffsetChanged = true;
				me._cloner_2f.ggUpdate();
			}
		}
		el.ggGoDown = function() {
			if (me._cloner_2f.ggCloneOffset > 0) {
				me._cloner_2f.ggCloneOffset -= me._cloner_2f.ggNumRows;
				me._cloner_2f.ggCloneOffset = Math.max(me._cloner_2f.ggCloneOffset, 0);
				me._cloner_2f.ggCloneOffsetChanged = true;
				me._cloner_2f.ggUpdate();
			}
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_2f.ggUpdating == true) return;
			me._cloner_2f.ggUpdating = true;
			var el=me._cloner_2f;
			var curNumRows = 0;
			var parentHeight = me._cloner_2f.parentNode.classList.contains('ggskin_subelement') ? (me._cloner_2f.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._cloner_2f.parentNode.parentNode.ggAvailableHeight : me._cloner_2f.parentNode.parentNode.clientHeight) : me._cloner_2f.parentNode.clientHeight;
			if (parentHeight == 0) parentHeight = me._cloner_2f.parentNode.parentNode.clientHeight;
			curNumRows = Math.floor(((parentHeight - me._cloner_2f.offsetTop) * me._cloner_2f.ggNumRepeat / 100.0) / me._cloner_2f.offsetHeight);
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) ) && (!me._cloner_2f.ggCloneOffsetChanged)) {
				me._cloner_2f.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_2f.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._cloner_2f.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_2f.getFilteredNodes(tourNodes, filter);
			me._cloner_2f.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_2f.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_2f.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_2f.ggWidth) + 'px';
				parameter.width=me._cloner_2f.ggWidth + 'px';
				parameter.height=me._cloner_2f.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_2f_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					keepCloning = false;
				}
			}
			player.setVariableValue('cloner_2f_hasDown', me._cloner_2f.ggCloneOffset > 0);
			player.setVariableValue('cloner_2f_hasUp', me._cloner_2f.ggCloneOffset + me._cloner_2f.ggNumCols < me._cloner_2f.ggNumFilterPassed);
			me._cloner_2f.ggNodeCount = me._cloner_2f.ggNumFilterPassed;
			me._cloner_2f.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_2f.parentNode && me._cloner_2f.parentNode.classList.contains('ggskin_subelement') && me._cloner_2f.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_2f.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "2F_Rooms";
		el.ggId="Cloner 2F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_2f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_2f.ggUpdatePosition=function (useTransition) {
			me._cloner_2f.ggUpdate();
		}
		me._container_2f.appendChild(me._cloner_2f);
		me._scrollarea_2f__content.appendChild(me._container_2f);
		me.__2f_rooms.appendChild(me._scrollarea_2f);
		el=me._room_panel_2f=document.createElement('div');
		els=me._room_panel_2f__img=document.createElement('img');
		els.className='ggskin ggskin_room_panel_2f';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlAAAAK8CAYAAAAgZIG8AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB/ySURBVHgB7d1Pz1xXmSDw8vWNnSiJsNTAQCYSdiLSbNJKS4BG6lGYblasmt6B2DSfoGdWLNPeIFhN+hPADg2bHjYgNs0fkVUidcSKICCWAG9CByMLGUhc7joVn+vz795z6nW61eDfT3Kq6t63bt2qt67z+DnPec653aCvfOUrlx5++OFPnz9//hN37tx57ty5c5cPmy8d7i8/E+4ftu9OlR4jiMeI20ePufXz5b70XFv71o4zqvws1h73PrO1/fG5W89fe89n/T21zmvks2r9TOsc1s6r97vrHbc837O+963XHdk/euz4OBj9jHrPW/u59GdPPf/09z/6nN'+
			'65xOOm213/rv/0+a5/1//WcU79Dh3cODy+drh9dZ7n7968efMbn//852/sBnTP7Gtf+9rlwwv9w+HP3x9e5FI8idabbv2ldBat45/63LXbd0s85tpxy79c1j6v8nij1p7fer9nee/lc87yOfY+o7XXjc/tndPo65/ymvf7PRn5Xfee03v8n2n0/bj+2+dR3m/tT483yvU//vqnvKbrP/cAX/9fPfz81c9+9rPXNl9vbUfIOD3yyCP/GIKn/X4/9EXsfWFHv9Cjx2l9KGt/ecSfL9/L1r9Y4vN753GKOyf+i+mUY6Xbg/TLPE1T9t7LL3vrAhg5z96+nvS56e+t/Atk63mlkYuld/xTnPX9tz7vtf8xnuV8W7/X8nV7z21dM73nnHX/qcdx/bv+W1z/9XNd/2e+/l/8zGc+83/WzqV5lnezTt85HORy62RWD3au/6+u'+
			'1om2viC9C6A8Zu91147filC3/jJZ+yJvHa93zq3to5/71vttfTatx1s/s6Z8n6PfjbXPduTzG3mNeMzy53vn2fsce5/P1vf91O9mvMi3vnO966X3u137PFp/ubj+Xf9rr+v6337+2vmsPc/1/1/y+r92uPnrVjaqekdf//rXn7t9+/Y/H+5eLve9/fbbv//JT37yw5///OfX33zzzZtvvPHGzR0AwB+hRx999OKTTz75Z08//fSVJ5544srFixcfD9vTgO9w/9ohLvq7z33uc6+mz80CqJB5Otx85xBxXU4PcOvWrZs/+MEP/uW11167vgMA+BP08Y9//M+fffbZjz3yyCOPF5mra7siE7UEUHdn2f1rDJ6i119//Yff+973Xvntb3/7+x0AwJ+wkJV6/vnnP/rUU0/9Rbo9BFG/+93v/jLO0pvijgsXLvxjCJ5CxB'+
			'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'+
			'DbQjAlAwUA0FEVkVsLDwBg21I8fhixU0QOADAo7VowC5wAALalJU/BJIACABiTrYUniAIAWBeH7+J9GSgAgAGhgFwGCgBgULqUSzClGwRSAAC1su2TDBQAwIA0XhJAAQB0VGvhGboDANi2uphwaycAAO9Ik05TmJIXNwIAUFNEDgBwBulyLgIoAIAB6WLCoYj8RtgY25M/+uijj+8AADi6cOHCxdiF/G7S6Uaogbp2jKTu1kIJoAAA7rl06dKfhdtkLbxr0+HBq/EHQiB1+KEndgAAHL33ve+9ErNPd/+8GtJO3ws7Yx3U+973vr/YAQBw9J73vOdKuE0CqO9OFy9e/P/nz5+/EXcc7l/8wAc+IAsFADzwPvShD/35Qw89lJU33bp16xvT1atXQ/D01XRR4aeeeupvQsHUDgDgARVioSeffPJjxfDdV1988cUbx8rx'+
			't99++5/SQvIQaX34wx/+6A4A4AH1zDPPfGye5yz7dPv27avh9nz4z0svvXTj+eefv3S4+z9ihPXoo4/+t4cffvjcr371q+s7AIAHyEc+8pGPvf/97//LNPt0586dF7/0pS/9v7B/WQvvEGGFiOpafBx+8IMf/OBHn3322b8ynAcAPAhCzHOIff5niIHC4yR4unbr1q2r8eeyFuRf+MIXLp8/f/47h6G8y+n2t9566+b169df/tnPfvbaDgDgT9AhaHri6aef/puyaDz0ffrDH/7w11/+8pevLdvKJ7/wwgvP7ff7fz7cvXz3SbvD4+O+EEj95je/ef2NN954/c033/y3w8F+vwMA+CP0+MFjjz32+KVLl/77Ybju2UMC6WK6vN3dZVuu3b59+++++MUvvpo+t7kIXshEHVJY39ndDaLWhAPHwvP4eDnw3fVishdrbB'+
			'uVLuBXnsPoWn7v9jltvfb9vtezPHftMxp5rfs53+iU38Xaz/5H/T7id7X1+4/7t86jd17p/vR+PKe1717rte/XKb+H+30d17/rP3L9u/6jP7Hrv8o8Lc/fetYhG/V/Dwf/3+mJpifc+8KO7msds/fBpF/W5c00PozRD7j1cyPPbX345S977f3E7N7I+x09163PdvRYp24f/Z21jjHyOqPnsvacd/N7GrTef3TK9zrd1jruqef7bj537bN1/dfPK7n+x8/f9e/6/698/R+8ePPmzauhZUHred0jH4Koy4eL/IXDwf9+N2DtC9f6kq3tbx1vbf+7ZevLsfaX5FnPqffc+zl27zj387vovUb6GY5se7de4yzH3DpW63hr/3M6i61jr51P3L72+iOfx+h3e+tcR95beX6u/9Oe6/o/7TXOcsytY7WO5/off2/l+f0RXv83'+
			'DjHPVw/ZtX+6evXqtc3n7QYdAqlLh4N++nD3E4cDP3e4vXx4wUvpBxa1vgznzo3/q+g/wlkusK2/UHvnf5b3GJ7TSjOvHfvOne1/Na+dw6nvZesc1o7xbv2Oz3rs8jNqXYitz3vrs117jbVtrb801o6zdh498VzPcr7pX2BneZ3e98v17/q/X67/ba7/MZ3rP2SXrh1+5tXDn+8e4pxv3G0w3vXvDLox5WmXfjEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Room_panel 2f";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -10;';
		hs+='height : 175px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_panel_2f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_panel_2f.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Room_visibility_2F') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_2F') == false))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._room_panel_2f.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._room_panel_2f.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._room_panel_2f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._room_panel_2f.ggCurrentLogicStatePosition == 0) {
					me._room_panel_2f.style.left = 'calc(50% - (148px / 2))';
					me._room_panel_2f.style.top='40px';
				}
				else if (me._room_panel_2f.ggCurrentLogicStatePosition == 1) {
					me._room_panel_2f.style.left = 'calc(50% - (148px / 2))';
					me._room_panel_2f.style.top='0px';
				}
				else {
					me._room_panel_2f.style.left='calc(50% - ((148px + 0px) / 2) + 0px)';
					me._room_panel_2f.style.top='0px';
				}
			}
		}
		me._room_panel_2f.logicBlock_position();
		me._room_panel_2f.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1)) || 
				((me.ggUserdata.tags.indexOf("Exterior") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._room_panel_2f.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._room_panel_2f.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._room_panel_2f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._room_panel_2f.ggCurrentLogicStateVisible == 0) {
					me._room_panel_2f.style.visibility=(Number(me._room_panel_2f.style.opacity)>0||!me._room_panel_2f.style.opacity)?'inherit':'hidden';
					me._room_panel_2f.ggVisible=true;
				}
				else if (me._room_panel_2f.ggCurrentLogicStateVisible == 1) {
					me._room_panel_2f.style.visibility="hidden";
					me._room_panel_2f.ggVisible=false;
				}
				else {
					me._room_panel_2f.style.visibility="hidden";
					me._room_panel_2f.ggVisible=false;
				}
			}
		}
		me._room_panel_2f.logicBlock_visible();
		me._room_panel_2f.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Room_visibility_2F') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_2F') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._room_panel_2f.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._room_panel_2f.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._room_panel_2f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._room_panel_2f.ggCurrentLogicStateAlpha == 0) {
					me._room_panel_2f.style.visibility=me._room_panel_2f.ggVisible?'inherit':'hidden';
					me._room_panel_2f.style.opacity=1;
				}
				else if (me._room_panel_2f.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._room_panel_2f.style.opacity == 0.0) { me._room_panel_2f.style.visibility="hidden"; } }, 505);
					me._room_panel_2f.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._room_panel_2f.style.opacity == 0.0) { me._room_panel_2f.style.visibility="hidden"; } }, 505);
					me._room_panel_2f.style.opacity=0;
				}
			}
		}
		me._room_panel_2f.logicBlock_alpha();
		me._room_panel_2f.ggUpdatePosition=function (useTransition) {
		}
		me.__2f_rooms.appendChild(me._room_panel_2f);
		me._room_name_p.appendChild(me.__2f_rooms);
		el=me.__3f_rooms=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="3F_Rooms";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3f_rooms.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3f_rooms.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_3f=document.createElement('div');
		els=me._scrollarea_3f__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 244px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 147px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_3f.ggScrollByX = function(diffX) {
			if(!me._scrollarea_3f.ggHorScrollVisible || diffX == 0 || me._scrollarea_3f.ggHPercentVisible >= 1.0) return;
			me._scrollarea_3f.ggScrollPosX = (me._scrollarea_3f__horScrollFg.offsetLeft + diffX);
			me._scrollarea_3f.ggScrollPosX = Math.max(me._scrollarea_3f.ggScrollPosX, 0);
			me._scrollarea_3f.ggScrollPosX = Math.min(me._scrollarea_3f.ggScrollPosX, me._scrollarea_3f__horScrollBg.offsetWidth - me._scrollarea_3f__horScrollFg.offsetWidth);
			me._scrollarea_3f__horScrollFg.style.left = me._scrollarea_3f.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_3f.ggScrollPosX / (me._scrollarea_3f__horScrollBg.offsetWidth - me._scrollarea_3f__horScrollFg.offsetWidth);
			me._scrollarea_3f__content.style.left = -(Math.round((me._scrollarea_3f.ggContentWidth * (1.0 - me._scrollarea_3f.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_3f.ggContentLeftOffset + 'px';
			me._scrollarea_3f.ggScrollPosXPercent = (me._scrollarea_3f__horScrollFg.offsetLeft / me._scrollarea_3f__horScrollBg.offsetWidth);
		}
		me._scrollarea_3f.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_3f.ggHorScrollVisible || diffX == 0 || me._scrollarea_3f.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_3f.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_3f.ggScrollPosX >= me._scrollarea_3f__horScrollBg.offsetWidth - me._scrollarea_3f__horScrollFg.offsetWidth)) {
					me._scrollarea_3f.ggScrollPosX = Math.min(me._scrollarea_3f.ggScrollPosX, me._scrollarea_3f__horScrollBg.offsetWidth - me._scrollarea_3f__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_3f.ggScrollPosX <= 0)) {
					me._scrollarea_3f.ggScrollPosX = Math.max(me._scrollarea_3f.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_3f__horScrollFg.style.left = me._scrollarea_3f.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_3f.ggScrollPosX / (me._scrollarea_3f__horScrollBg.offsetWidth - me._scrollarea_3f__horScrollFg.offsetWidth);
			me._scrollarea_3f__content.style.left = -(Math.round((me._scrollarea_3f.ggContentWidth * (1.0 - me._scrollarea_3f.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_3f.ggContentLeftOffset + 'px';
			me._scrollarea_3f.ggScrollPosXPercent = (me._scrollarea_3f__horScrollFg.offsetLeft / me._scrollarea_3f__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_3f.ggScrollByY = function(diffY) {
			if(!me._scrollarea_3f.ggVertScrollVisible || diffY == 0 || me._scrollarea_3f.ggVPercentVisible >= 1.0) return;
			me._scrollarea_3f.ggScrollPosY = (me._scrollarea_3f__vertScrollFg.offsetTop + diffY);
			me._scrollarea_3f.ggScrollPosY = Math.max(me._scrollarea_3f.ggScrollPosY, 0);
			me._scrollarea_3f.ggScrollPosY = Math.min(me._scrollarea_3f.ggScrollPosY, me._scrollarea_3f__vertScrollBg.offsetHeight - me._scrollarea_3f__vertScrollFg.offsetHeight);
			me._scrollarea_3f__vertScrollFg.style.top = me._scrollarea_3f.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_3f.ggScrollPosY / (me._scrollarea_3f__vertScrollBg.offsetHeight - me._scrollarea_3f__vertScrollFg.offsetHeight);
			me._scrollarea_3f__content.style.top = -(Math.round((me._scrollarea_3f.ggContentHeight * (1.0 - me._scrollarea_3f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_3f.ggContentTopOffset + 'px';
			me._scrollarea_3f.ggScrollPosYPercent = (me._scrollarea_3f__vertScrollFg.offsetTop / me._scrollarea_3f__vertScrollBg.offsetHeight);
		}
		me._scrollarea_3f.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_3f.ggVertScrollVisible || diffY == 0 || me._scrollarea_3f.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_3f.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_3f.ggScrollPosY >= me._scrollarea_3f__vertScrollBg.offsetHeight - me._scrollarea_3f__vertScrollFg.offsetHeight)) {
					me._scrollarea_3f.ggScrollPosY = Math.min(me._scrollarea_3f.ggScrollPosY, me._scrollarea_3f__vertScrollBg.offsetHeight - me._scrollarea_3f__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_3f.ggScrollPosY <= 0)) {
					me._scrollarea_3f.ggScrollPosY = Math.max(me._scrollarea_3f.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_3f__vertScrollFg.style.top = me._scrollarea_3f.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_3f.ggScrollPosY / (me._scrollarea_3f__vertScrollBg.offsetHeight - me._scrollarea_3f__vertScrollFg.offsetHeight);
			me._scrollarea_3f__content.style.top = -(Math.round((me._scrollarea_3f.ggContentHeight * (1.0 - me._scrollarea_3f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_3f.ggContentTopOffset + 'px';
			me._scrollarea_3f.ggScrollPosYPercent = (me._scrollarea_3f__vertScrollFg.offsetTop / me._scrollarea_3f__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_3f.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_3f.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_3f.ggHPercentVisible);
					me._scrollarea_3f.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_3f.clientWidth - (me._scrollarea_3f.ggVertScrollVisible ? 3 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_3f.clientWidth - (me._scrollarea_3f.ggVertScrollVisible ? 3 : 0))) * me._scrollarea_3f.ggHPercentVisible);
					me._scrollarea_3f.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_3f.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_3f.ggVPercentVisible);
					me._scrollarea_3f.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_3f.clientHeight - (me._scrollarea_3f.ggHorScrollVisible ? 3 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_3f.clientHeight - (me._scrollarea_3f.ggHorScrollVisible ? 3 : 0))) * me._scrollarea_3f.ggVPercentVisible);
					me._scrollarea_3f.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_3f__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_3f.ggDragInertiaX *= 0.96;
				me._scrollarea_3f.ggDragInertiaY *= 0.96;
				me._scrollarea_3f.ggScrollByX(me._scrollarea_3f.ggDragInertiaX);
				me._scrollarea_3f.ggScrollByY(me._scrollarea_3f.ggDragInertiaY);
				if (Math.abs(me._scrollarea_3f.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_3f.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._scrollarea_3f__content.onmouseup = null;
			me._scrollarea_3f__content.onmousemove = null;
			me._scrollarea_3f__content.ontouchend = null;
			me._scrollarea_3f__content.ontouchmove = null;
			me._scrollarea_3f__content.onpointerup = null;
			me._scrollarea_3f__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_3f.ggIsDragging = false; }, 100);
		}
		me._scrollarea_3f__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_3f.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_3f.ggDragStartY) > 10) me._scrollarea_3f.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_3f.ggDragLastX) * me._scrollarea_3f.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_3f.ggDragLastY) * me._scrollarea_3f.ggVPercentVisible;
			me._scrollarea_3f.ggDragInertiaX = -diffX;
			me._scrollarea_3f.ggDragInertiaY = -diffY;
			me._scrollarea_3f.ggDragLastX = eventX;
			me._scrollarea_3f.ggDragLastY = eventY;
			me._scrollarea_3f.ggScrollByX(-diffX);
			me._scrollarea_3f.ggScrollByY(-diffY);
		}
		me._scrollarea_3f__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_3f.ggDragLastX = me._scrollarea_3f.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_3f.ggDragLastY = me._scrollarea_3f.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_3f__content.onmouseup = me._scrollarea_3f__content.mousetouchend;
			me._scrollarea_3f__content.ontouchend = me._scrollarea_3f__content.mousetouchend;
			me._scrollarea_3f__content.onmousemove = me._scrollarea_3f__content.mousetouchmove;
			me._scrollarea_3f__content.ontouchmove = me._scrollarea_3f__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_3f__content.onpointerup = me._scrollarea_3f__content.ontouchend;
				me._scrollarea_3f__content.onpointermove = me._scrollarea_3f__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_3f__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_3f__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_3f__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_3f__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 3px; height: 175px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_3f__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 3px; height: 175px; background-color: rgba(255,255,255,0.588235); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_3f.ggScrollPosY = 0;
		me._scrollarea_3f.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_3f.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_3f.ggDragInertiaY *= 0.96;
					me._scrollarea_3f.ggScrollByY(me._scrollarea_3f.ggDragInertiaY);
					if (Math.abs(me._scrollarea_3f.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_3f.ggDragLastY;
				me._scrollarea_3f.ggDragInertiaY = diffY;
				me._scrollarea_3f.ggDragLastY = e.clientY;
				me._scrollarea_3f.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_3f.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_3f.ggDragInertiaY *= 0.96;
					me._scrollarea_3f.ggScrollByY(me._scrollarea_3f.ggDragInertiaY);
					if (Math.abs(me._scrollarea_3f.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_3f.ggDragLastY;
				me._scrollarea_3f.ggDragInertiaY = diffY;
				me._scrollarea_3f.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_3f.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_3f.ggScrollHeight;
			if (e.offsetY < me._scrollarea_3f.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_3f.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_3f__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_3f.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_3f.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_3f.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_3f.ggScrollByYSmooth(30 * me._scrollarea_3f.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_3f__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 3px; height: 3px; background-color: rgba(255,255,255,0);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 3F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='z-index: -5;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='height : 175px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_3f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_3f.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Room_visibility_3F') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_3F') == false))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._scrollarea_3f.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._scrollarea_3f.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._scrollarea_3f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_3f.ggCurrentLogicStatePosition == 0) {
					me._scrollarea_3f.style.left = 'calc(50% - (148px / 2))';
					me._scrollarea_3f.style.top='40px';
				}
				else if (me._scrollarea_3f.ggCurrentLogicStatePosition == 1) {
					me._scrollarea_3f.style.left = 'calc(50% - (148px / 2))';
					me._scrollarea_3f.style.top='0px';
				}
				else {
					me._scrollarea_3f.style.left='calc(50% - ((148px + 0px) / 2) + 0px)';
					me._scrollarea_3f.style.top='0px';
				}
			}
		}
		me._scrollarea_3f.logicBlock_position();
		me._scrollarea_3f.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("2F") == -1)) || 
				((me.ggUserdata.tags.indexOf("Exterior") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._scrollarea_3f.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._scrollarea_3f.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._scrollarea_3f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_3f.ggCurrentLogicStateVisible == 0) {
					me._scrollarea_3f.style.visibility=(Number(me._scrollarea_3f.style.opacity)>0||!me._scrollarea_3f.style.opacity)?'inherit':'hidden';
					me._scrollarea_3f.ggVisible=true;
				}
				else if (me._scrollarea_3f.ggCurrentLogicStateVisible == 1) {
					me._scrollarea_3f.style.visibility="hidden";
					me._scrollarea_3f.ggVisible=false;
				}
				else {
					me._scrollarea_3f.style.visibility="hidden";
					me._scrollarea_3f.ggVisible=false;
				}
			}
		}
		me._scrollarea_3f.logicBlock_visible();
		me._scrollarea_3f.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Room_visibility_3F') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_3F') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._scrollarea_3f.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._scrollarea_3f.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._scrollarea_3f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_3f.ggCurrentLogicStateAlpha == 0) {
					me._scrollarea_3f.style.visibility=me._scrollarea_3f.ggVisible?'inherit':'hidden';
					me._scrollarea_3f.style.opacity=1;
				}
				else if (me._scrollarea_3f.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._scrollarea_3f.style.opacity == 0.0) { me._scrollarea_3f.style.visibility="hidden"; } }, 505);
					me._scrollarea_3f.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._scrollarea_3f.style.opacity == 0.0) { me._scrollarea_3f.style.visibility="hidden"; } }, 505);
					me._scrollarea_3f.style.opacity=0;
				}
			}
		}
		me._scrollarea_3f.logicBlock_alpha();
		me._scrollarea_3f.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_3f.ggScrollPosY / me._scrollarea_3f.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_3f.ggHorScrollVisible && contentHeight > this.clientHeight - 3) || (!me._scrollarea_3f.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_3f__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_3f__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_3f.ggVertScrollVisible = true;
				} else {
					me._scrollarea_3f__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_3f__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_3f.ggVertScrollVisible = false;
				}
				if(me._scrollarea_3f.ggVertScrollVisible) {
					me._scrollarea_3f.ggAvailableWidth = me._scrollarea_3f.clientWidth - 3;
					if (me._scrollarea_3f.ggHorScrollVisible) {
						me._scrollarea_3f.ggAvailableHeight = me._scrollarea_3f.clientHeight - 3;
						me._scrollarea_3f.ggAvailableHeightWithScale = me._scrollarea_3f.getBoundingClientRect().height - me._scrollarea_3f__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_3f__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_3f.ggAvailableHeight = me._scrollarea_3f.clientHeight;
						me._scrollarea_3f.ggAvailableHeightWithScale = me._scrollarea_3f.getBoundingClientRect().height;
						me._scrollarea_3f__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_3f__vertScrollBg.style.height = me._scrollarea_3f.ggAvailableHeight + 'px';
					me._scrollarea_3f.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_3f.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_3f.ggVPercentVisible > 1.0) me._scrollarea_3f.ggVPercentVisible = 1.0;
					me._scrollarea_3f.ggScrollHeight =  Math.round(me._scrollarea_3f__vertScrollBg.offsetHeight * me._scrollarea_3f.ggVPercentVisible);
					me._scrollarea_3f__vertScrollFg.style.height = me._scrollarea_3f.ggScrollHeight + 'px';
					me._scrollarea_3f.ggScrollPosY = me._scrollarea_3f.ggScrollPosYPercent * me._scrollarea_3f.ggAvailableHeight;
					me._scrollarea_3f.ggScrollPosY = Math.min(me._scrollarea_3f.ggScrollPosY, me._scrollarea_3f__vertScrollBg.offsetHeight - me._scrollarea_3f__vertScrollFg.offsetHeight);
					me._scrollarea_3f__vertScrollFg.style.top = me._scrollarea_3f.ggScrollPosY + 'px';
					if (me._scrollarea_3f.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_3f.ggScrollPosY / (me._scrollarea_3f__vertScrollBg.offsetHeight - me._scrollarea_3f__vertScrollFg.offsetHeight);
						me._scrollarea_3f__content.style.top = -(Math.round((me._scrollarea_3f.ggContentHeight * (1.0 - me._scrollarea_3f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_3f.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_3f.ggAvailableWidth = me._scrollarea_3f.clientWidth;
					me._scrollarea_3f.ggScrollPosY = 0;
					me._scrollarea_3f.ggScrollPosYPercent = 0.0;
					me._scrollarea_3f__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_3f__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_3f.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_3f.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_3f);
					me._scrollarea_3f.ggUpdatePosition();
				}
			}
		}
		el=me._container_3f=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._container_3f;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Container 3F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -5;';
		hs+='border : 0px solid #000000;';
		hs+='height : 245px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_3f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_3f.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_3f=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_3f;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 148;
		el.ggHeight = 35;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggGoUp = function() {
			if (me._cloner_3f.ggCloneOffset + me._cloner_3f.ggNumRows <= me._cloner_3f.ggNumFilterPassed) {
				me._cloner_3f.ggCloneOffset += me._cloner_3f.ggNumRows;
				me._cloner_3f.ggCloneOffsetChanged = true;
				me._cloner_3f.ggUpdate();
			}
		}
		el.ggGoDown = function() {
			if (me._cloner_3f.ggCloneOffset > 0) {
				me._cloner_3f.ggCloneOffset -= me._cloner_3f.ggNumRows;
				me._cloner_3f.ggCloneOffset = Math.max(me._cloner_3f.ggCloneOffset, 0);
				me._cloner_3f.ggCloneOffsetChanged = true;
				me._cloner_3f.ggUpdate();
			}
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_3f.ggUpdating == true) return;
			me._cloner_3f.ggUpdating = true;
			var el=me._cloner_3f;
			var curNumRows = 0;
			var parentHeight = me._cloner_3f.parentNode.classList.contains('ggskin_subelement') ? (me._cloner_3f.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._cloner_3f.parentNode.parentNode.ggAvailableHeight : me._cloner_3f.parentNode.parentNode.clientHeight) : me._cloner_3f.parentNode.clientHeight;
			if (parentHeight == 0) parentHeight = me._cloner_3f.parentNode.parentNode.clientHeight;
			curNumRows = Math.floor(((parentHeight - me._cloner_3f.offsetTop) * me._cloner_3f.ggNumRepeat / 100.0) / me._cloner_3f.offsetHeight);
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) ) && (!me._cloner_3f.ggCloneOffsetChanged)) {
				me._cloner_3f.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_3f.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._cloner_3f.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_3f.getFilteredNodes(tourNodes, filter);
			me._cloner_3f.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_3f.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_3f.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_3f.ggWidth) + 'px';
				parameter.width=me._cloner_3f.ggWidth + 'px';
				parameter.height=me._cloner_3f.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_3f_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					keepCloning = false;
				}
			}
			player.setVariableValue('cloner_3f_hasDown', me._cloner_3f.ggCloneOffset > 0);
			player.setVariableValue('cloner_3f_hasUp', me._cloner_3f.ggCloneOffset + me._cloner_3f.ggNumCols < me._cloner_3f.ggNumFilterPassed);
			me._cloner_3f.ggNodeCount = me._cloner_3f.ggNumFilterPassed;
			me._cloner_3f.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_3f.parentNode && me._cloner_3f.parentNode.classList.contains('ggskin_subelement') && me._cloner_3f.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_3f.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "3F_Rooms";
		el.ggId="Cloner 3F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_3f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_3f.ggUpdatePosition=function (useTransition) {
			me._cloner_3f.ggUpdate();
		}
		me._container_3f.appendChild(me._cloner_3f);
		me._scrollarea_3f__content.appendChild(me._container_3f);
		me.__3f_rooms.appendChild(me._scrollarea_3f);
		el=me._room_panel_3f=document.createElement('div');
		els=me._room_panel_3f__img=document.createElement('img');
		els.className='ggskin ggskin_room_panel_3f';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlAAAAK8CAYAAAAgZIG8AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB/ySURBVHgB7d1Pz1xXmSDw8vWNnSiJsNTAQCYSdiLSbNJKS4BG6lGYblasmt6B2DSfoGdWLNPeIFhN+hPADg2bHjYgNs0fkVUidcSKICCWAG9CByMLGUhc7joVn+vz795z6nW61eDfT3Kq6t63bt2qt67z+DnPec653aCvfOUrlx5++OFPnz9//hN37tx57ty5c5cPmy8d7i8/E+4ftu9OlR4jiMeI20ePufXz5b70XFv71o4zqvws1h73PrO1/fG5W89fe89n/T21zmvks2r9TOsc1s6r97vrHbc837O+963XHdk/euz4OBj9jHrPW/u59GdPPf/09z/6nN'+
			'65xOOm213/rv/0+a5/1//WcU79Dh3cODy+drh9dZ7n7968efMbn//852/sBnTP7Gtf+9rlwwv9w+HP3x9e5FI8idabbv2ldBat45/63LXbd0s85tpxy79c1j6v8nij1p7fer9nee/lc87yOfY+o7XXjc/tndPo65/ymvf7PRn5Xfee03v8n2n0/bj+2+dR3m/tT483yvU//vqnvKbrP/cAX/9fPfz81c9+9rPXNl9vbUfIOD3yyCP/GIKn/X4/9EXsfWFHv9Cjx2l9KGt/ecSfL9/L1r9Y4vN753GKOyf+i+mUY6Xbg/TLPE1T9t7LL3vrAhg5z96+nvS56e+t/Atk63mlkYuld/xTnPX9tz7vtf8xnuV8W7/X8nV7z21dM73nnHX/qcdx/bv+W1z/9XNd/2e+/l/8zGc+83/WzqV5lnezTt85HORy62RWD3au/6+u'+
			'1om2viC9C6A8Zu91147filC3/jJZ+yJvHa93zq3to5/71vttfTatx1s/s6Z8n6PfjbXPduTzG3mNeMzy53vn2fsce5/P1vf91O9mvMi3vnO966X3u137PFp/ubj+Xf9rr+v6337+2vmsPc/1/1/y+r92uPnrVjaqekdf//rXn7t9+/Y/H+5eLve9/fbbv//JT37yw5///OfX33zzzZtvvPHGzR0AwB+hRx999OKTTz75Z08//fSVJ5544srFixcfD9vTgO9w/9ohLvq7z33uc6+mz80CqJB5Otx85xBxXU4PcOvWrZs/+MEP/uW11167vgMA+BP08Y9//M+fffbZjz3yyCOPF5mra7siE7UEUHdn2f1rDJ6i119//Yff+973Xvntb3/7+x0AwJ+wkJV6/vnnP/rUU0/9Rbo9BFG/+93v/jLO0pvijgsXLvxjCJ5CxB'+
			'X//OhHP3r5m9/85kuCJwDgQRBinm9961svhRgojYlCjHQY4nsh/twxAxWG7vb7/evpAX7605/+8Nvf/vZLOwCAB9CnPvWpv7py5UqWiZqm6UoYyosZqBfSnXdrnl7ZAQA8oL7//e+/chi2yybM3b59+x/C7blQ+/TQQw/9Op3G98orr/zLyy+//NoOAOAB9swzzzzxyU9+8m+TTTfeeuutK9OFCxc+HR7F4ClEWoInAIDd7sc//vH10MYp2RQST387HQKnT6RFUtevX399BwDAUagLT2Ol/X7/v0IN1HNpr4PXD3YAABz94he/yPpgnjt37rmQgbqc1j/98pe//LcdAABHv/71r4+F5DEDdXA5ZKAuxeAp3Or5BABwT1i6Lh2tO9y/NIWFC+8+2AEAUEuTTcEcH5yyAjIAwIOkyEDtprghZKIEUAAAtZBoCpYMlMwT'+
			'AMC2cghvEjwBAIyJmahZAAUAsK2Ml2SgAAA6qgAq3SiYAgBoS+OlKW6M/aAAAGhbisjTBzJQAAC1ZBmXvA9U3AAAQC1t/bRkoGI3cgAAaunyd0sNlIaaAADblk7k6p8AALalk+1C0kkjTQCAQXHEbt4BANCVJp1koAAAOtI2BsFU7gQAIBe7FTQbaWpjAADQljXSTHsayEABANTKxuOT/k8AAH1psmlqbQQAIJeWOs3pMi4CKACAtrSZ5qQTOQDAtjJOygIoQRQAQC2Nk5bFhAVOAAB9sexpCaAEUQAAfaEWKlsLTxAFAFBr1kDJQAEArCvjpLnsrAkAQFvVSBMAgHXpiN2cbgQAoC1tPD6pfwIA2BZjpdiNXCdyAICOspHmnG4URAEA9M2CJgCAbTFeCjVQgVl4AAAnWNbCiw8AAFi3tDFIU1KCKACAWtWJvLURAI'+
			'B1isgBAAakMVNWAxWbQwEAcE/ZN1MGCgCgIy7jEu9P5U4AAGppnJRloGJkBQDAPWWSSQYKAGDAahE5AAC1WAMV1w6eBE4AANvKbgXHRpphQ4iqtDEAAKilM/CCuexrAABArllELngCANjWbGMQh/EAAMiVI3ZLEbngCQBgzBzvGMYDAGgrG49PFhEGABgXYqdjBio2hgIAoGYWHgDAfVgyUAIoAIB1VQbKLDwAgL40VlqG8GShAADWpfGSpVwAADrSOCncn3YAAAypMlAAALTJQAEA3Ke5bE0OAEButY1BaycAALlsCE/wBACwLm1jcAyg4mLCFhUGAKhtDuGpgQIAqKXZp+MQnkaaAABjliG8NOtkCA8AoFZOutNIEwCgIySc0phJI00AgI4y4SQDBQAwoMpApZXlAADkdCIHADiDrI1BugEAgFocrVvaGMhAAQCM'+
			'yZZySTcAAJDb7ANlKRcAgL45fSALBQBQW52FJ3gCANgWC8mPNVBxDTxBFABAreyZOQmaAADGxLhpLjcAANAWFxU+zsIz+w4AYF21mHBrIwAAuZh0WorIAQBYV3YtmGWfAAC2pdmnwCw8AICOEC/Ftk/BnEZTAAC0xUl31Vp4AADUqqVc1nYAAPCOtOXTMQMV76S3AADcYzFhAID7lNVACaIAAGqrNVCtnQAAvCONk7IMlDXxAABq5YhdVgMlAwUAsG5ZyiV9IIACAKipgQIAuE/HAMrwHQDAunK0Th8oAIABcTHhcLsM4ZmBBwCwLsRKIeEUbi0mDADQsTqEBwBAW4yX4ojd0sYgpqUAAKilcdLU2ggAwD1lnKQGCgCgoxypm3YAAGwq18KTgQIA6CjrxZdO5AAArEvjpbm1EQCAe6oMlMAJAKAvKyJPFxIWTAEA1K'+
			'pO5OUOAADWhZhpKSIXQAEAtIU4ab/fL/ensq8BAABtVRG54AkAYF3VxkAQBQCwThsDAIAzCDVQOpEDAJwoZqF0IgcA6Cg7FlhMGACgI60XD1mo+eB4BwCAtgsXLhxv1UABAAxKG2kGaqAAADqaa+EJngAAxk2xGAoAgLZyFl6WgZKJAgDYdlxMOH0AAMA6iwkDAJwoDuVliwkDAFBLY6VjI83WDgAA2o41UDFwiovjAQCQK2OkKQZO2hkAAGyrisjTjQAA5NKJd9oYAAAMyBppykABAIyJZU/WwgMA6KiKyMu1XQAAqKUx07EPlBYGAADrypInQ3gAACeadgAAbCpLnqZyJwAAuVDulJY8zYImAIBt6YotWSNNAADWVUN4aWtyAADaYi3ULHgCANhWNdLcAQAwJAZSZuEBAAxIR+3MwgMAOJEhPACAjuZiwq0dAADk'+
			'lll4aVdNQRQAQE0GCgDgPmSdyGN7cgAAcmXCKZuFJ4gCAKiVMdKcPjCMBwBQ2+xELoACAGjTSBMA4AyypVzUPgEArCsTTlkGSjYKAGDbcQgv3gEAoC3GSnHUbjJ8BwBwmjmu6SKQAgBoK0uesqVcDOUBANTKRNO0AwBgUxyty9oYyDwBAGxL4yV9oAAATrSshScLBQDQlrYxOBaR7/f7HQAA29IJd8chvBhEyUIBALTFkqelE3l8IIACAKiVMVLWxkAxOQBAn0aaAAAdaZx0LCKPdwAA2BYDqWUIz/AdAEBfiJmOReRpSgoAgFy1lIvgCQBgWxo8BRYTBgDoiLVPzQyULBQAQK1ayqXcCABAW7aUS7kRAIB7VjuRC54AANrSUbplLTwz8QAA1lUZqP1+vwMAYNyU9jWQgQIAqFVtDMJ/YhBlFh4AwLZsLby4AQCAXD'+
			'lad6yB0kQTAGBdHKWLt7MaKACAvmwtPEETAMC21UaarZ0AAOQx0rGI3PAdAEBf1cZA8AQAMG7aAQDQlRWRlxsAAKjFzgXHxYTVQAEAbNuchQcAQN+croEnCwUAUCtjpLm1EQCAdYrIAQA6ynWDs0aaAikAgLZ0/eB5BwDApmoplx0AAJvihLugWgvPEB4AQK3sm6mIHABgQLWUS7kRAIBcGitlfaAEUQAAtdh4PBvCAwBg236/v9fGQNYJAKAvnYmXFZELpgAA2tJ4SRsDAICOMHwXNNsYpKkpAADaZKAAADrSGXjVUi4yUAAAtWYn8nInAADr9IECABiQdSJXQA4AMGYZwlNEDgCwrYyR5rSqHACAWjlily3lYhgPAKBtdTFhmSgAgLa07GlONwAAsC1kouYdAABdacJpiovjqX8CAGirOpHHwMkwHgBAWzULL90I'+
			'AMC6ZiNNAADashqoHQAAQ2IvqFnmCQBgW1VE3toJAEAtq4ESOAEArFsCp+md3NNc7gAAoJYmnY5hVLo4HgAA244BVAieBFEAAG1ljJTNwrOcCwBArUw0yUABAHSUMdKU7hBAAQD0zZZyAQDYVpY8zTsAAIboRA4AcAbHtfDiHQAA2qoicsETAMCY2PJp2gEAsCkmnPb7/fHWWngAAB2xX2a8nQVOAADbyrZPU2sjAADrsk7k1sIDAKilyabwZ5mFZy08AIB1acw0lRsBAFgXZuJN6p8AALbFobtoCmmoEEkZwgMA2JbNwotBFAAAfYrIAQBOoJEmAMCAajHheEcPKACAtjSAyvpAhRoo2SgAgFpMNMXG47PaJwCAvrSVwSR4AgDYlk66C+ZyBwAAuTh0F+Mls/AAAAY018IDAGBduvydtfAAAAakLZ+mOJ6nDxQAwL'+
			'osAxXupL0NAACoxXgpq4GShQIAWJcmmpYAaprUkwMArMlqoOIdw3cAANuancgFUQAA6+KI3ZSmo9RAAQCsWzJQOwAAurLFhHcAAHRVReRqnwAA+mIQNen/BACwrZx0N+n/BACwLS59F++LngAABqRJJ32gAAAG7Pf75X6WgVILBQDQFuOkkHCa40bZJwCAvqwGKjyQgQIAWFc10pSBAgBoi0mmpQ+UrBMAwLa0gDyY0p4GAADUyjhpShfGAwCgVsZKs8wTAMC2KgOVPpCJAgDoyzqRy0YBAKzL2hgInAAA+uKiwlO8o5gcAGBd2rlgjhtkoQAA2spYyRAeAEBH1Yl8BwBAVyx7CgRQAAAD0lpxARQAwInmeEcdFADAmCUDpY0BAMC2qgZK8AQAsK2ahWcIDwBgjCJyAIATCaAAADrSHlDBVO4EACC33+8t5QIAcKoq'+
			'AxU3mIkHAFCbpslSLgAAp4iB09LGwPAdAEBfNoRn+A4AoC8rIi9TUgAAbDOEBwAwIE06KSIHABgQk04hkNIHCgDgRFkfKAAAti0ZqHQDAADrqhooQ3kAAG3VWngAAGyr1sIDAGCcAAoA4AT6QAEAnKiahQcAQJ8ACgDgRJPeTwAAp7GYMADAiSzlAgBwIosJAwCc6FgDFTNQAikAgL5jDVQMnAzlAQC0WQsPAOBE1sIDALgPAigAgI6yTnwJoNQ/AQC0lXHS0gfKDDwAgDH6QAEAnEgNFADACULiSQAFAHCCUPo0KR4HANhWzcJT/wQAsK05C08QBQAw5jiEF+7s93t9oAAABoTE0xzvAADQZxYeAMCJzMIDABjQnIUniAIA6IuBlFl4AAAdMdkUbw3hAQCcSBE5AMCANOmkEzkAQEcIntKYSQYKAKCjmoW3AwBgSD'+
			'YLDwCAvmUW3g4AgJMIoAAATiSAAgA4gcWEAQBOdFxMOH0AAMC6ahaehpoAANuyWXiCJwCAccelXPb7/Q4AgHXZUi5xbRc1UAAA67LFhOMdw3gAANti4kkbAwCAQdbCAwA4g6wPlCE8AIAxSxuDOKYHAMC2bAhPOwMAgFqZZJrSFgYyUAAAtbSFwbEGSv8nAIC+mGjSxgAAYFCzkSYAAGOmNB2lBgoAoG8qi6IAANiW9YECAKAtHanTxgAAYEBWRG4IDwBgjMWEAQBOFJNNAigAgAFZDdTaDgAA3lFOuJvSHQAArMtqoOIDReQAALUYI8XbOX0AAMA2iwkDAAxIl7wLiad5BwDApnK0LquBAgCgb7IOHgDAmGUWXho8yUQBAKwLcVNWRC4TBQCwLcZLSwAleAIAaCt7ZmpjAADQUc3Ck3kCABh3rIFSOA4AMKaqgQIA'+
			'YEwWQMlGAQDU0sWEq7Xw1EMBANTSJJMhPACAEyydyHcAAAxp9oFSAwUA0JbGSZZyAQAYEOOkpYhc8AQAMGYpIhc8AQCMU0QOAHAiARQAQEc50U4ABQDQETuQR8tiwloYAAC0lRPulgyUQnIAgLYyTprDf2JUJQsFAFBr1kAJngAAtoV4KVvKJQZPhvEAALYdG2mm0RQAAH2WcgEA6CjjpKUGSgAFANAXYqY5PlBEDgCwLk02zTJPAADb0o4FxyLyHQAAQ7I2BukGAABqzaVc1EABAIwxhAcAcKIsgDKMBwDQt7QxEDwBAGxbishjE001UAAA62LwtDTSlH0CAFi33++PtyHhFP7MaVMoAABq6UjdsZFmug6eYTwAgFq5bvAUU1JxJwAAbUsRuawTAMC2Msk0G74DANgW4qRsCC9WkwMAsC7GS8dZeOGO2icAgHXliN'+
			'0seAIAGLMUkccNhvEAALbFeGlK25LLRgEA1Mp4aUqrymWhAADWxfWD53hH9gkAYF0aM01xAwAAbdUQXtxh+A4AoC2Nk6o+UDJRAADrljYGgicAgL5YAxVM6Q7DeAAAtTThFOKlqbUTAIC2rIg8kIECAGhLE00yUAAAHWXfzGwWXiALBQCQi8FT1kgTAIB1ZdeCab/f7wAAGJctJqwGCgCgVmWgwn/ScT0AAHJlwsksPACAjjJGmgRNAACnOWagBFEAANuyRpoKyAEATjOVjaEAAMilMdKxiFzwBAAwJmtjIHgCABi3tDHQAwoAYF2acKoWEwYAoJYmm+a0A7lACgCgLWtj0NoIAMA6ReQAAB3VUi5bOwEAuKfZxsBMPACAWoiV0t6Zs6VcAADGxCBq2gEAsKlayiXdaQgPAKBWxkhz+sAwHgDAuqqIXPAEALAtZqLm'+
			'HQAAm6o+UGVRFAAA2yaF4wAAfWnJ07zf75cdgikAgL4lAxU7awIAUAuxUtWJHACAtjBil47ULY00BVIAAG1lmZM+UAAAJ5rjongAAKxLk01zuQEAgG3TDgCATWmyKYzcCaAAAE4QgqlJATkAwGmWRpoCKQCAtjROWjJQkdl4AABt6aotWQ2UDBQAQFuWgSo3AgCwLmSi5vQBAABtabLJLDwAgBMtGShBFABAW4yT4ojdvAMAoKs5C08GCgBgXVYDVW4AAKC22kgTAIBaGjwFFhMGABiQtnzSiRwAYEBVAwUAwLp0CC/80QcKAKAjDt/F26ncAQBArkw0zTJPAAB9IWZaMlCxq2a4lYUCAFi31EDt9/tsAwAA60LCSRE5AEBHVQO1AwBgiE7kAAAnqtoYAAAwJmtjYBYeAEAtxksxVppbOwEAqKmBAgAYVI7SCaAAAD'+
			'rKUbop3WgIDwCg71gDlS7nAgBAW0w2zWVVOQAAubJrgaVcAABOEGKmKX0AAEDfUkRuCA8AYMwxgIpF5AAAtKWx0jKEJ4gCAGhLY6RwfxY0AQCMqZZyUQMFANC2moGSiQIAWJf2zpxkngAAtoV4KcZMWR8oAADWpW2fJkN3AADbypInARQAQEcZL6mBAgDoKPtlTmbhAQBsq4bw0ohKEAUAsO04C0/QBADQl5Y9aWMAANARgqf9fr88zgIo2SgAgNpmGwMz8gAAatVaeOVGAADa4uQ7NVAAAIN0IgcAGBTipfgnmMvOmgAA1GLMpA8UAMCg5lIuAACMmQ52AABsk4ECADhR2i9zjgGUYnIAgHVZBqq1EQCAe8o4SQEUAMCJBFAAAINCJiqUPU3xgSE8AIBtIXja7/fvLCacdtYEACBXxkizoAkAoC+2MTgu5RLvAACw'+
			'LcZMisgBAAakCaesBgoAgLYsgHrsscd2AACsK+OlJQMFAEBbGStNB1lVOQAA65ZGmvGBTBQAQC3GSPF2SoMmARQAQFtMNoU/aqAAADqqGqh0h0AKAKAtHcab0nQUAAC1sgZqbm0EAOCeaghP0AQAcJo57QElmAIAqDWLyI/FUJN1hQEAtugDBQBwgmwWXroBAIBaOlJ3bKRpBh4AQF8aK+lEDgAwKMRMYeKdNgYAAB1hCC8dtZvTACpEVAAA1NKYySw8AIBBSxuD9IEACgCgFtcNjo3HNdIEABikkSYAwKB0tG7JQAEAsC2O1lWz8AAAqJX14lNMRaUbAQC4pxlAHe8oIgcAWJU10iw3AACQK2OkaW0HAAC1qohcEAUAUGtmoNJCcgAA1mUZqNiaHACAXBkj6QMFANAR18GL5nQHAABtaaw0lxsAAMilsVLIRE2CJw'+
			'CAccfFhDXRBAAYEzsXzOkDQRQAQC1NOIUhvLm1EwCAe8rG41OaeUqn5wEAcE82C0/WCQBgW1kzPqeNoQRTAABtaZxkLTwAgI5pmvLHZVEUAADbsjYGisgBANrSeGk2Aw8AYNzSSDM+AACg1pyFBwDAujJemncAAGxKA6isBgoAgL7jUi7xDgAAbWXPzKUTuSAKAGBdFkCF/5TdNQEAuKechTfJPAEAbKvaGKQPAABoS4OoKX0gkAIAqGmkCQBwBlkGagcAQFc1C08WCgBgW9r2aQ4tDPSBAgBYV9aK60QOANBRLSYcO5G3dgIAsBJAAQAwplpMWDAFANCW1kFN6UYAAGqG8AAAThRrxmMWaip3AgBQi8FTCKS0MQAA6Ejrn8Lt0kgz3gIAkCuTTdNxHG+amjsBAKgdIyeZJwCAbdkQXrkBAIBcGStpYwAA0BHjpdjK'+
			'YNoBADAkzsbLhvAAAKhVncjjDDwAANpiA81oLncCAFBL46SsiFw7AwCA2uZiwjJQAABt6TBeNoQnAwUAUCv7QGUV5ArKAQBq5WLCk2E7AIAxWSdyQRQAQF81hCeIAgBoK4fwzMIDAOgo2z5NAigAgHHLYsLqoAAA1jXbGAieAAC2NWugBFEAAG1VDVS6URAFAFBLY6TQeHyO67oIngAA1qWxkkaaAACDlk7kOwAANpXJpjndEYbyAADIlQGUInIAgBPNoZIcAIB1VQZK1gkAYMxSRK6FAQDAtrRW/LgWnvonAIBtse3TkoFKAydBFABAW5p0mlo7AAC4p2w8PseNAABsizHTFNoYqIMCAOirlnIRPAEAtJXJpmwWniAKAKAtKyIvp+UBAJBrLiYcm0MJogAAamn2KcRMU7kDAIC22I18aaQpAwUA0FYtJrzcmaYdAA'+
			'DbQjAlAwUA0FEVkVsLDwBg21I8fhixU0QOADAo7VowC5wAALalJU/BJIACABiTrYUniAIAWBeH7+J9GSgAgAGhgFwGCgBgULqUSzClGwRSAAC1su2TDBQAwIA0XhJAAQB0VGvhGboDANi2uphwaycAAO9Ik05TmJIXNwIAUFNEDgBwBulyLgIoAIAB6WLCoYj8RtgY25M/+uijj+8AADi6cOHCxdiF/G7S6Uaogbp2jKTu1kIJoAAA7rl06dKfhdtkLbxr0+HBq/EHQiB1+KEndgAAHL33ve+9ErNPd/+8GtJO3ws7Yx3U+973vr/YAQBw9J73vOdKuE0CqO9OFy9e/P/nz5+/EXcc7l/8wAc+IAsFADzwPvShD/35Qw89lJU33bp16xvT1atXQ/D01XRR4aeeeupvQsHUDgDgARVioSeffPJjxfDdV1988cUbx8rx'+
			't99++5/SQvIQaX34wx/+6A4A4AH1zDPPfGye5yz7dPv27avh9nz4z0svvXTj+eefv3S4+z9ihPXoo4/+t4cffvjcr371q+s7AIAHyEc+8pGPvf/97//LNPt0586dF7/0pS/9v7B/WQvvEGGFiOpafBx+8IMf/OBHn3322b8ynAcAPAhCzHOIff5niIHC4yR4unbr1q2r8eeyFuRf+MIXLp8/f/47h6G8y+n2t9566+b169df/tnPfvbaDgDgT9AhaHri6aef/puyaDz0ffrDH/7w11/+8pevLdvKJ7/wwgvP7ff7fz7cvXz3SbvD4+O+EEj95je/ef2NN954/c033/y3w8F+vwMA+CP0+MFjjz32+KVLl/77Ybju2UMC6WK6vN3dZVuu3b59+++++MUvvpo+t7kIXshEHVJY39ndDaLWhAPHwvP4eDnw3fVishdrbB'+
			'uVLuBXnsPoWn7v9jltvfb9vtezPHftMxp5rfs53+iU38Xaz/5H/T7id7X1+4/7t86jd17p/vR+PKe1717rte/XKb+H+30d17/rP3L9u/6jP7Hrv8o8Lc/fetYhG/V/Dwf/3+mJpifc+8KO7msds/fBpF/W5c00PozRD7j1cyPPbX345S977f3E7N7I+x09163PdvRYp24f/Z21jjHyOqPnsvacd/N7GrTef3TK9zrd1jruqef7bj537bN1/dfPK7n+x8/f9e/6/698/R+8ePPmzauhZUHred0jH4Koy4eL/IXDwf9+N2DtC9f6kq3tbx1vbf+7ZevLsfaX5FnPqffc+zl27zj387vovUb6GY5se7de4yzH3DpW63hr/3M6i61jr51P3L72+iOfx+h3e+tcR95beX6u/9Oe6/o/7TXOcsytY7WO5/off2/l+f0RXv83'+
			'DjHPVw/ZtX+6evXqtc3n7QYdAqlLh4N++nD3E4cDP3e4vXx4wUvpBxa1vgznzo3/q+g/wlkusK2/UHvnf5b3GJ7TSjOvHfvOne1/Na+dw6nvZesc1o7xbv2Oz3rs8jNqXYitz3vrs117jbVtrb801o6zdh498VzPcr7pX2BneZ3e98v17/q/X67/ba7/MZ3rP2SXrh1+5tXDn+8e4pxv3G0w3vXvDLox5WmXfjEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Room_panel 3f";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: -10;';
		hs+='height : 175px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_panel_3f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_panel_3f.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Room_visibility_3F') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_3F') == false))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._room_panel_3f.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._room_panel_3f.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._room_panel_3f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._room_panel_3f.ggCurrentLogicStatePosition == 0) {
					me._room_panel_3f.style.left = 'calc(50% - (148px / 2))';
					me._room_panel_3f.style.top='40px';
				}
				else if (me._room_panel_3f.ggCurrentLogicStatePosition == 1) {
					me._room_panel_3f.style.left = 'calc(50% - (148px / 2))';
					me._room_panel_3f.style.top='0px';
				}
				else {
					me._room_panel_3f.style.left='calc(50% - ((148px + 0px) / 2) + 0px)';
					me._room_panel_3f.style.top='0px';
				}
			}
		}
		me._room_panel_3f.logicBlock_position();
		me._room_panel_3f.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("2F") == -1)) || 
				((me.ggUserdata.tags.indexOf("Exterior") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._room_panel_3f.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._room_panel_3f.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._room_panel_3f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._room_panel_3f.ggCurrentLogicStateVisible == 0) {
					me._room_panel_3f.style.visibility=(Number(me._room_panel_3f.style.opacity)>0||!me._room_panel_3f.style.opacity)?'inherit':'hidden';
					me._room_panel_3f.ggVisible=true;
				}
				else if (me._room_panel_3f.ggCurrentLogicStateVisible == 1) {
					me._room_panel_3f.style.visibility="hidden";
					me._room_panel_3f.ggVisible=false;
				}
				else {
					me._room_panel_3f.style.visibility="hidden";
					me._room_panel_3f.ggVisible=false;
				}
			}
		}
		me._room_panel_3f.logicBlock_visible();
		me._room_panel_3f.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Room_visibility_3F') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_3F') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._room_panel_3f.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._room_panel_3f.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._room_panel_3f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._room_panel_3f.ggCurrentLogicStateAlpha == 0) {
					me._room_panel_3f.style.visibility=me._room_panel_3f.ggVisible?'inherit':'hidden';
					me._room_panel_3f.style.opacity=1;
				}
				else if (me._room_panel_3f.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._room_panel_3f.style.opacity == 0.0) { me._room_panel_3f.style.visibility="hidden"; } }, 505);
					me._room_panel_3f.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._room_panel_3f.style.opacity == 0.0) { me._room_panel_3f.style.visibility="hidden"; } }, 505);
					me._room_panel_3f.style.opacity=0;
				}
			}
		}
		me._room_panel_3f.logicBlock_alpha();
		me._room_panel_3f.ggUpdatePosition=function (useTransition) {
		}
		me.__3f_rooms.appendChild(me._room_panel_3f);
		me._room_name_p.appendChild(me.__3f_rooms);
		el=me._room_names=document.createElement('div');
		els=me._room_names__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Room_Names";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._room_names.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._room_names.ggUpdateText();
		player.addListener('changenode', function() {
			me._room_names.ggUpdateText();
		});
		el.appendChild(els);
		me._room_names.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_names.ggUpdatePosition=function (useTransition) {
		}
		me._room_name_p.appendChild(me._room_names);
		el=me._rooms_h=document.createElement('div');
		els=me._rooms_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Rooms_H";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((138px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 40px);';
		hs+='visibility : hidden;';
		hs+='width : 138px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 0px 5px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._rooms_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Rooms", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._rooms_h.ggUpdateText();
		el.appendChild(els);
		me._rooms_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rooms_h.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Room_visibility_1F') == true)) || 
				((player.getVariableValue('Room_visibility_2F') == true)) || 
				((player.getVariableValue('Room_visibility_3F') == true)) || 
				((player.getVariableValue('Floor_Visibility') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_1F') == false)) || 
				((player.getVariableValue('Room_visibility_2F') == false)) || 
				((player.getVariableValue('Room_visibility_3F') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rooms_h.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rooms_h.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rooms_h.style.transition='opacity 500ms ease 0ms';
				if (me._rooms_h.ggCurrentLogicStateVisible == 0) {
					me._rooms_h.style.visibility="hidden";
					me._rooms_h.ggVisible=false;
				}
				else if (me._rooms_h.ggCurrentLogicStateVisible == 1) {
					me._rooms_h.style.visibility=(Number(me._rooms_h.style.opacity)>0||!me._rooms_h.style.opacity)?'inherit':'hidden';
					me._rooms_h.ggVisible=true;
				}
				else {
					me._rooms_h.style.visibility=(Number(me._rooms_h.style.opacity)>0||!me._rooms_h.style.opacity)?'inherit':'hidden';
					me._rooms_h.ggVisible=true;
				}
			}
		}
		me._rooms_h.logicBlock_visible();
		me._rooms_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['room_name_p'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.elementMouseDown['room_name_p'] == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rooms_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rooms_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rooms_h.style.transition='opacity 500ms ease 0ms';
				if (me._rooms_h.ggCurrentLogicStateAlpha == 0) {
					me._rooms_h.style.visibility=me._rooms_h.ggVisible?'inherit':'hidden';
					me._rooms_h.style.opacity=1;
				}
				else if (me._rooms_h.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._rooms_h.style.opacity == 0.0) { me._rooms_h.style.visibility="hidden"; } }, 505);
					me._rooms_h.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._rooms_h.style.opacity == 0.0) { me._rooms_h.style.visibility="hidden"; } }, 505);
					me._rooms_h.style.opacity=0;
				}
			}
		}
		me._rooms_h.logicBlock_alpha();
		me._rooms_h.ggUpdatePosition=function (useTransition) {
		}
		me._room_name_p.appendChild(me._rooms_h);
		me._right_top_corner_panel.appendChild(me._room_name_p);
		el=me._floorplan_b=document.createElement('div');
		els=me._floorplan_b__img=document.createElement('img');
		els.className='ggskin ggskin_floorplan_b';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABZRSURBVHgB7V1PjFXFmv/qcNGEF5XBJhhG+sFCmLyN3WycRBNHE12ZATYm7hCMi5cQeFFx4cJxidHMe3FnwsCsZlwJLyZGZoJMAgsXPtrFvPAgsRt6odiMQDRqGvrW1Heqvq9+Vffcpnl0v3v7nvqlb5+/VedU1VdfffX9qWNoiTh06ND6hYWF3d1u92ljzIQ7tdX91pO1ZMM91gGSGIJD62/QQ8vXw57ly/6asf5WY7L8wv31tfCs+CQ+cC9V31/nbEzY+vts8vQ67667YHwafT2K72S7nCUfG0Pwnsm+gXJhwfscQ2VYLScUxBAU0MY8tMxQbsvvZmO+Rq'+
			'vJnzOQh8VyhXq67o4uu9+UOzzj2vXkiRMnbtASYO50gyOUrXZh4aCrwL3uyetNaGxuHK0wzCeUPyMQaXzfAL2Vj4WKDS2F9ISU5w916xvXUxoQiTzL15MnEswrPp+a3l/Kp++O++EFmei6kehMnkfPc+S9pGhA7PhuNhA039+FfZt1mvCOUgexs1BDG0Qi1WMoxnHHDN5xhDNDi6AvwTBHcRn8i9s96LbS66XmuJJsyEB7C1YsNrxQu7ykVkzCkGIFW36eMUnlJ9dD5WKl2NjrpAFiMnlVfh/MmxIulle0DQRomrhLXsa0IFmDQSdBQsDHhHwSwsyIm8uRcKGeDpB2JkryYsJ2ZReiAsJHQuKTf3D77/TjOI0Ew1zFZf65q9xfhx4kBEPSIHml1A2WNhRWrhY2r2DbVGhpWOzVQEDY+xuehXmmecT8TZ+epxXNZa64'+
			'PNTDYagJOBwmZYpjXtKRAufDzEzGWXWohjYgguHF4nH2ntm7LXbc29mJZtzhM03cpspPHPrtbyeYWFyuW0nYPBCLjU+B3cBpImtGzhBfJPYivcc0sHErjSpnfQXbpMwEpU+HL3w/E66HrpnclzaWf05CIDpkpL0+JgjDnTBbyNBYqS6fZ28j8h+XUZ7J93e7toGIsA3qSgmZGdOQLzBPX97YJsg4tR5sJNzYsXzbf7579+6JnvzxoJZXHLF0fYJ8KIkvQbFBRGaAhyqrI9LGV7aYc6CmvBt6WixgeGYP28/ywe5igf0jx5TLRJlQGQtjrHDHlDN6WvDvmg9Zntjg0GTlgTJqXelLeFkrCr4yhFHknI2yWCx32vjhaX2Oezk1RcHZXZ92j34WOY1WFMss7obzPAwlYxw1s7qs4aEaoIdSXp600mxGXD0CMWWNHTlevJ'+
			'bLBz6fZrkjtp48H99H3zmvWHxnkIMk30ROQCJQqS/tVGm++H5xP5HHkuEHOk3GLDRjSJdMDiiOAlpeTNv0PoFodopMo0MSC7iuIrbWFcYVItw3sFtl/VJwOKa8h8aeiWmEXUrreMHVVwA2ANZCwmItZR051KWN93r2n+cDz83ysno94eU6BFiogzhc6i2RdoEbm7zi5Q1NfIbQb8xM6IJHKelscr/favJkeM3qKdSlsUhkYWuz4c5aa/twfKUXl9U2t30bCy1C7jT24sbe6rY//vjjhW+//fb8//75z3+anZ39PypYdRgfH9+ycePG8b/fvHlXp9MZs73ch5Ie7ne38dDUCSferqkUhhEYv+uesXD79k8zMzMnPv300/+mglWNK1euzPLvyy+/PPfEE08898gjj+yqqmodEUzHU4bLI9BBt/mdCfqW6z0CLrA0d/2n'+
			'06dPH7lw4cIsFYwcmONMTkwcdkTzq0yawSH4xs2bN7dVrO6vL8BNJtufnp4+UYhldMHc5turV/8Y5EqGyndAC+sffPBB5kTV0xQleAtCWn3v/Pz8tTIMjT6++OKL//r555//ArOxekcnL1SLs//Es6QJnbHIfCKOX+bipUsnqaAVuH79+nk9QJ1ZVEVMVKzVA/1Brm6333zzzRUqaAXcpCYSjKgCRLfmpdpfM4dZz1eQaHQa7W4tskt78N13313DY9F1qasH0d91LI5VoLxSHUxB26DWCJPKMvWmqrWlRGoEVOFXtLQFbUNNLMGlRbwQ9FonsfugvabJz6OgDQjNr+aUKN+6Dbt8GLBNGPlXSKW1QMOzSCZiyzIVCrgCsRsVtBMmdyEBj4HoQCWWVbTgFkbTOojFHN0yBDWH0am0d/6q90gs+URlltQyiITSja4rCS'+
			'pxheQD9XNBrW9B66D+V73nbSXCrvjCaIrAkgpaBtvjnK7H9ZAUhJtILN4XolBKS8GUUWW+1+ApSBW68YnSThOXmVIr0bfVWQ+DZmwTwh7KlLrVsME2oEd6UkwDjMT4WKbTbYZX2KFrA6npyHQS5Uwcq4qyt62wGm9FEBWixFDZNKxDDU4WqaygNQheC54UGnykKoPKuSC/mJTTFLQIOCMKobxIBN40oLYjGJ4yV82CFkFDkkQnE2PbTdVzL1FkQ2Ve3VpYG0N26xNh9KmUu4D7N/CVwmJaBhVb1O3OoMmo1sPYzLWhUYlX0A7oLFpCpGF67SjICb1VFQPtA8Bls3CYlsGmU2lhGurGIDKMSVIErlPYS/tg0xEnYRp8rWO73XDJr3sSlsyICpyCRbF3797xTZs2raN7xPnz5+dOnTo1VKth4GJRUdNLlCy2IyEDkoYK'+
			'GvHee+9NHjhwYP999913z8Qi+Oqrr86++OKL/3nx4sWfaEDQdWaizk7dvk1tfERPuyDLGFP8GxbD888/P/baa68dYGKREfxef4zHH3/8qU8++WQfDRa4ypdOgILxkTrgYYfkRcU9sz+OHDmyi7ddN5wvLCzQcmHt2rX02GOP7dy+ffu6gXIZPIjRJPXgU+U8KOzanoQFig0bNozxtivy3zJBmmD37t1baJCwsFwuUSKeVNmNcel1KqbHfpidna0XKBjJgdsmi1Lm3pcal2TDRVEH+5sLyTTi6NGjZ3m7Zs2aehjh7d38hhrRbtQI794g11kbTA3rvxYkOHbs2Oz777//wQ8//FCvdlBV1ZJ+3FmXU+ZZMURvO5wt1TsdXfywaY3cYhroi9dff/08/w4fPryj3z1jY2PrDh48uF9mU7dv36ZVApkEoWBSn+vIRNtamx'+
			'NI49LkBSnefffdvzSd55nOuXPnDvcjFuY2zHWGjuP0jka6grvEJVlQ1Oma9tRLQAVLhBCL4zDj/Yil0+nQMCIEA6TnQFdUv7VQUCa/gP6mYKlYzcRSw8bVy1F5J/uV2I6sRBLEWOuyQMxdYtUTCwOXt0f3TL+8vnegUuOS8aBIM4XDLBF3Qyzz8/MD0+IuAVGB2+3GuKOAWnGnMyWCKXiRYZaMuyGWa9euXfnggw+O0rAifhKK4FsD8mENUzUOO/GrGYXD3AF3SyxPPvnku3Nzcz/TsMLoV3ea2h6iBrK5t028HAqa8NcQyyCNikuEWUR8raMGarsRulURpcNUQS9GlFhUVhFdL//DMOoKQwm8xdFK5CNVRehtxKgSCwOXzyTCSZKJ1moxFGSDV+EuDRhlYmFY9I+iJMKkRoeiVVpvtHFbABh1YsmRuUjVA5D3hwnf'+
			'PATXht7vCrYcy0ksV69ebTw/DBKAyiviqmtQ0cuaXt7IDRTXuIOYlNZjuTnL8ePHr7Dyjo2P7B/D6cVPhl0m+hk0/xZQk0B0xJQPoEahFzzsrIjF5L/V3Hqhd6WGIVHeMdFwet4yPvzww/+gwQMXl9JPCTC8DBMuqHuv91W1idavpfjoo49eWgmZhX1pTp06dZgdyh924M/osScfO2fRAKHLrQb2of7dgTg6EogvEi/6xbSdWjicZGJi4kneXwkB1xHMNfcbKjMBf8UkWh+JUIbxtiQTP7yuhuoQvNR2AWZycrIxOmDUZkMIsRklpgFR5pnwcQojIo5nQzEQktqNjz/+uI4OEH9cxigTiyI3DQQishL5CMJu/R8TthlMCJcuXfoT7zOR8Exm5ImFEfVyDINeeOreADFJFM4V/ymHF1544d+mpqbO8b7MZJiIRpVYwF'+
			'83iUeSy/pFNnHTrM9SlHKo5WCicLLMUScAn3QC8MMnTpyYHUmuAuixVnsi8bMkg2YAGKd5al34S0SY0Vyj0QcKu7lYYjo26lssZTPp1ithWghmFl2/ThDpMrwUgwMquYnQTdOfHA7jxgqCtbhvvvnmP7jh5mEqqAEOC+pQB+67toPUg/shNY0imFB4HRZeWkPODcNiPsMGm8mwXg/jr8jcO7EF2BE0PoptiInFDt9iPsODaK0WHUwwPnoeJHElaYIRE2OaDIn8u3XrVn1dFvOhFsOI5h/Wtwvng8edn06rAdJiQhod3MnqbIdlMZ8BA0chjHwUHxlR3PWYAkZJBbMUFwWR752Srg1T50UhTlToEyW2RVmBSmZHQXMXg9kGjZdffnnL2bNnX7p8+fKbrjH33e2M5m78WVjwHbalTwcFmCklfEQ1vTKfylLRIMFLm/Jq'+
			'lXI8Pj6+47PPPnuKF/Nhf5I7pb9b5yeeJVFBrZeDEFki/JpJ9NoMMdXgHzNovPrqqy/xlt0LuLHFzYDXx71T2rY5bC8X8olyPVz7/ZpOZI07PRU0v/XNgxySWKH2wAMPjHFj86I7uOVFenio6pe2EMtfD1H5C0ex0RfGf6I40b2kgq8ZBkVvP+F748aNjdPfQiz3CGPSbWqY9uv0qg+n7FK2ksMqQSGWZYVKKgKu046GEJi4ClW4aIeCxSwRhViWB8gkwDSgxFNBWAlh1NJq0vIWYlk+YGh1YoQMl6tkxTuKHld2wELvUlGIZXkhloD8tISciHdzdLCLs2wVmIcVhVhWFsBH/OeIJWoAJGLV1wy7Ty8vmlyIZUVgm/Zlet1BLR6RxlbrIEZDisVW2C7Eck+QeVDi501h0OlQHLOiiSB63w0twRRiWVGAai4ZZozEJc'+
			'Xhx5tuh36WVIhl5SHmRZMEsoVJUU9opKQYQhRiWTmI3wtF5W3COGRRRJO7b2bboUEhlpWF+L0QKOvElsTooOGRMOpN+NGQIf/6h8lW2D527NjJPXv2jPdLf+TIkQtU0B/RF0q0//WimeIG04GlHWxwtRr6GZIAiYXBgvAbb7xxYLE0b7311jVetGcp/jRtBM6JwkZmzt6n10Z5BeMjgxw83KpejnUWRfVSf+wywU5Zi7lHFARYmxsCvBN4H6cpM+wzJR6exPN/qT9xwtq/f/9TVNAE8AI3MYogUE3dRY2XXzCQTWQYGjUIwYyPjxcOcwcE5a4flnS5D3fQ9WOPeImLFs8MckhqWsxnOSBLdnz//fetjw7oA9NvX/UwRiKpwQg5aN7StJjPvf5wtcrDhw+fpIL+yJlFmDRXiQMEXKYhQL6Yz73+uKg89eaogxJO0h8y'+
			'2zEgw8jo07GRwxDYj6Lb5gCRL+ZD94i5ubmfBr2s6WqBBLOFXTVKx+9WR2u11e2Q6GJatJjPsMD0jkgySwo3BOFFhy6zChR3BSsDaHrQ63q33Y5GCASuYoJexoIBqqBFAG9dApOAnFAO4//3kFbhMm1DmC/DCAMiDHvcoaExUJc6gJdhqZWA0UWjkCSqpAPEojfUgnDQ/ha0C4njN25R05skkHEr2JcK2osmDxf5wBb/FzuS+OXRIE0DBQOHNRkN1HFJwfellltA0MXIt4KWAmdIDB+XFC6AAo90nZiCNiOGHQV44yOpH6c1uaBTiKYgg3KYeptdtEVx1zrYNGAkhNnHy7KgkEFuAoRSZJiWIl3Ig9QKGY2Poovxkm4hlJZCTUP5hXCuyqIcTfDJK1PqlkLaP5sgqxEykWFItLzCaArRtA4SgG8xPins8WX51oBwFp'+
			'OnpoJ2w+gKDj4uycSQyDh2ZaJyQXuQiyJACvWMSUNlQauH4SWFwxQkDKWCRc0MaO2E2xQO0z70ZxIYNYBcRY2QhcO0Ebbp2GLkoz8dpWITUxUO0z6YTITVIcnbkiAuSWdMqV2poF2wyXrN0T2z3jKHuUHp0lTyWeI6zZbNm8sXV1uCzZs3j0M8UjK8BMK5wYq7mfqMV9aoOkZu3vGb3+ykglZgw4YNW0Rpi8NSoAvmPDM8JE2p90uwI2lstdsZGxubpIJWYNOmTbvwWKQVWBRxqlpYWPgfvSOuE6ME9Kt163Y8++yzz1HBSGNiYuK5tWvXjoHiLtHw1jvGnKm63e4Jt38ziMKNs6Xx8fFd27dvL+upjCic7LJl48aN/3wnxf78/PzJNVNTU7/s3LnzEUcc/8gndUGhKCnXbhCPPvroE26MuzU9Pf01FYwMJicnn9u2'+
			'bdv+qqr4g2UG5RdKFbj/fvr06Y9qoti7d+/Wzpo1TAgYmB9DJINMwydu3bo1N/3113/8bm5u9uLFi1eoYNXByaVjW7ZsmXzooYd23n///TsI2xw+ECrg9nftvu3MmTMzOj698sor/+o2hyAmKXrhgadDI9sKdiiNmAypqMFDAszm6blsvp9FYWrYi4HAqqZ36sdWs2g+fQZY6+N1keUseM3HnmaSPMHKH2YSuvIBn+zCDBVmIPhe4oCvx0SanODZSRqKDUz4fEkr+/i8pjrIz9m0Ak248PtTp079jk9IbDUvGPiOu3eGwlNCLqjxk8LFJ8mUCzmTj801lmKIZbzdakSCXLFYKdIAoYK0YmQNvpiv5p2UT/RJsV6tTAvluqSxsRFMXtHybGHPgaiooVJ71gG03a5+CaZrdUHkoAPTm21it4PYZdPg8agvF2VMFRew/k'+
			'I6A7TSs2wHZZpceL+0HKGp3c0zTnZ5R84rwRw/fvyGmzE94268rCmMfg/SQoPJyzeZtGMPzXoIiNoxvXZF7c0aRMf7pqqMBlPBwo36cMkL8kbiMMZEpWXsSrnoL4egWSCCcmgZZM+kZUxd09w7B0056jMSBkFAeDbmre9tKf3sTKJtjdVuA0FGt5RYtz6/SBCYj61SPUuy1Vrx987M37r1jBuKbsiFCgvriGZmTbe7J3Aakzdi8vKhd5nItgwOF1KbWEuwj6zUakUEwsIeYIHYsOaFc0hLK9eh2PJyn9Yi9F6bvpalpl4GNWfxvqjYxEWAiQgW4on9ISEqC/JgOA9vaHAKqxw2a0zlCiYzHOfcxGI9RSIxWC6iZtuR2592vz0styTPpgawEOyk5s/dxa05O1ZqxsbJYXvG3EgIyCYjh8FzsReBjIF5BtlAbR46avj3'+
			'aVqNoj50KgTMAsugDQMVi5WXFQ+uA7HbnmqwKSHCvV3pCMYkcgQ+C9PbrLxEPXJIUzrNExk6cDGTpZNdHoaeyYmFqA/BCPbt26eCcNIzeykZK1CpmCjapWz6ZsgprIzjPP7nxJH3DiyYEEF2XWjMND2LstEQKqmnwSCRVj4kSsrYQCzUhKSz4HuHRqzLIvXQJ5+MqFS2sen1nKh6iAyJENL/nmUWHIYQixIMI3Cbt3lXKRNZF751bAT8sEF9rwwbYQhLKomoz4wgNkwy+wAiisdEJnuXyM1Sbth/VpISAl6Psw4KXCy7x+Cz0iEiTy910ZO+H5eSDtDDKaST9RIGaZnS9yB4FyzDDXfquCOUPzRxFcozXAoc4ax3m93u97T7Pe4SbnNPXY/3hGFBBsQ4vuIwJm1JFKfMFDkX9FoipH7tSkRNFdunsglkHJQdss5ltT'+
			'3hnpgPDGUJryedNufPxQZJhhXJJyNiHCaI+gyFjeeQeDLOk7+TnHMM4KbjzDNud8rVwZlffvnlZD+OkuP/AZHCi/Z4qq67AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._floorplan_b__img.ggOverSrc=hs;
		el.ggId="FloorPlan_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 235px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_b.onclick=function (e) {
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility='hidden';
			me._right_top_corner_panel.ggVisible=false;
			me._floorplan.style.transition='none';
			me._floorplan.style.visibility=(Number(me._floorplan.style.opacity)>0||!me._floorplan.style.opacity)?'inherit':'hidden';
			me._floorplan.ggVisible=true;
			if (player.transitionsDisabled) {
				me._fp_screen_blur.style.transition='none';
			} else {
				me._fp_screen_blur.style.transition='all 500ms ease-out 0ms';
			}
			me._fp_screen_blur.style.opacity='1';
			me._fp_screen_blur.style.visibility=me._fp_screen_blur.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorplan.style.transition='none';
			} else {
				me._floorplan.style.transition='all 500ms ease-out 0ms';
			}
			me._floorplan.style.opacity='1';
			me._floorplan.style.visibility=me._floorplan.ggVisible?'inherit':'hidden';
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility='hidden';
			me._right_bottom_corner_panel.ggVisible=false;
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility='hidden';
			me._left_bottom_corner_panel.ggVisible=false;
			player.setVariableValue('Map_Pin_Normal_E', true);
			player.setVariableValue('Map_Pin_active_E', true);
			if (
				(
					((me.ggUserdata.tags.indexOf("1F") != -1))
				)
			) {
				me._floorplans.ggChangeMap("FirstFloor");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("2F") != -1))
				)
			) {
				me._floorplans.ggChangeMap("SecondFloor");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("3F") != -1))
				)
			) {
				me._floorplans.ggChangeMap("ThirdFloor");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("1F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorswitch_01.style.transition='none';
				} else {
					me._floorswitch_01.style.transition='all 200ms step-end 0ms';
				}
				me._floorswitch_01.style.opacity='1';
				me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("2F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorswitch_02.style.transition='none';
				} else {
					me._floorswitch_02.style.transition='all 200ms ease 0ms';
				}
				me._floorswitch_02.style.opacity='1';
				me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("3F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorswitch_03.style.transition='none';
				} else {
					me._floorswitch_03.style.transition='all 200ms ease 0ms';
				}
				me._floorswitch_03.style.opacity='1';
				me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("1F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorswitch_01.style.transition='none';
				} else {
					me._floorswitch_01.style.transition='all 200ms linear 0ms';
				}
				me._floorswitch_01.ggParameter.sx=1.2;me._floorswitch_01.ggParameter.sy=1.2;
				me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
				setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("2F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorswitch_02.style.transition='none';
				} else {
					me._floorswitch_02.style.transition='all 0ms ease 0ms';
				}
				me._floorswitch_02.ggParameter.sx=1.2;me._floorswitch_02.ggParameter.sy=1.2;
				me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
				setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 50);
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("3F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorswitch_03.style.transition='none';
				} else {
					me._floorswitch_03.style.transition='all 0ms step-end 0ms';
				}
				me._floorswitch_03.ggParameter.sx=1.2;me._floorswitch_03.ggParameter.sy=1.2;
				me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
				setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 50);
			}
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			if (player.transitionsDisabled) {
				me._screen_blur.style.transition='none';
			} else {
				me._screen_blur.style.transition='all 2000ms ease 200ms';
			}
			me._screen_blur.style.opacity='1';
			me._screen_blur.style.visibility=me._screen_blur.ggVisible?'inherit':'hidden';
			player.setVariableValue('Hotspot_Visibility', false);
		}
		me._floorplan_b.onmouseenter=function (e) {
			me._floorplan_b__img.src=me._floorplan_b__img.ggOverSrc;
			me.elementMouseOver['floorplan_b']=true;
			me._floor_plans_.logicBlock_alpha();
		}
		me._floorplan_b.onmouseleave=function (e) {
			me._floorplan_b__img.src=me._floorplan_b__img.ggNormalSrc;
			me.elementMouseOver['floorplan_b']=false;
			me._floor_plans_.logicBlock_alpha();
		}
		me._floorplan_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._floor_plans_=document.createElement('div');
		els=me._floor_plans___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Floor_Plans ";
		el.ggDx=-25;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) - 25px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 40px);';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 0px 5px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._floor_plans_.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floor_plans_.ggUpdateText();
		el.appendChild(els);
		me._floor_plans_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_plans_.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['floorplan_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floor_plans_.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floor_plans_.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floor_plans_.style.transition='opacity 500ms ease 0ms';
				if (me._floor_plans_.ggCurrentLogicStateAlpha == 0) {
					me._floor_plans_.style.visibility=me._floor_plans_.ggVisible?'inherit':'hidden';
					me._floor_plans_.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._floor_plans_.style.opacity == 0.0) { me._floor_plans_.style.visibility="hidden"; } }, 505);
					me._floor_plans_.style.opacity=0;
				}
			}
		}
		me._floor_plans_.logicBlock_alpha();
		me._floor_plans_.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_b.appendChild(me._floor_plans_);
		me._right_top_corner_panel.appendChild(me._floorplan_b);
		el=me._floors_b=document.createElement('div');
		els=me._floors_b__img=document.createElement('img');
		els.className='ggskin ggskin_floors_b';
		hs=basePath + 'images/floors_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/floors_b__o.png';
		me._floors_b__img.ggOverSrc=hs;
		el.ggId="Floors_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 203px;';
		hs+='top : 235px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floors_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floors_b.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Floor_Visibility') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Floor_Visibility') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floors_b.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floors_b.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floors_b.style.transition='opacity 0s';
				if (me._floors_b.ggCurrentLogicStateAlpha == 0) {
					me._floors_b.style.visibility=me._floors_b.ggVisible?'inherit':'hidden';
					me._floors_b.style.opacity=1;
				}
				else if (me._floors_b.ggCurrentLogicStateAlpha == 1) {
					me._floors_b.style.visibility="hidden";
					me._floors_b.style.opacity=0;
				}
				else {
					me._floors_b.style.visibility="hidden";
					me._floors_b.style.opacity=0;
				}
			}
		}
		me._floors_b.logicBlock_alpha();
		me._floors_b.onclick=function (e) {
			player.setVariableValue('Floor_Visibility', !player.getVariableValue('Floor_Visibility'));
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('contactpanel', false);
		}
		me._floors_b.onmouseenter=function (e) {
			me._floors_b__img.src=me._floors_b__img.ggOverSrc;
			me.elementMouseOver['floors_b']=true;
		}
		me._floors_b.onmouseleave=function (e) {
			me._floors_b__img.src=me._floors_b__img.ggNormalSrc;
			if (player.transitionsDisabled) {
				me._floors_h.style.transition='none';
			} else {
				me._floors_h.style.transition='all 500ms ease-out 0ms';
			}
			me._floors_h.style.opacity='0';
			me._floors_h.style.visibility='hidden';
			me.elementMouseOver['floors_b']=false;
		}
		me._floors_b.ggCurrentLogicStateAlpha = -1;
		me._floors_b.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['floors_b']) {
				if (player.transitionsDisabled) {
					me._floors_h.style.transition='none';
				} else {
					me._floors_h.style.transition='all 500ms ease-out 0ms';
				}
				me._floors_h.style.opacity='1';
				me._floors_h.style.visibility=me._floors_h.ggVisible?'inherit':'hidden';
			}
		}
		me._floors_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._floors_p=document.createElement('div');
		els=me._floors_p__img=document.createElement('img');
		els.className='ggskin ggskin_floors_p';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Floors_P";
		el.ggDx=42;
		el.ggDy=42;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 42px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 42px);';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floors_p.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floors_p.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Floor_Visibility') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Floor_Visibility') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._floors_p.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._floors_p.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._floors_p.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._floors_p.ggCurrentLogicStatePosition == 0) {
					me._floors_p.style.left = 'calc(50% - (120px / 2) - (0px / 2) + 42px)';
					me._floors_p.style.top = 'calc(50% - (120px / 2) - (0px / 2) + 42px)';
				}
				else if (me._floors_p.ggCurrentLogicStatePosition == 1) {
					me._floors_p.style.left = 'calc(50% - (120px / 2) - (0px / 2) + 42px)';
					me._floors_p.style.top = 'calc(50% - (120px / 2) - (0px / 2) + 82px)';
				}
				else {
					me._floors_p.style.left='calc(50% - ((120px + 0px) / 2) + 42px)';
					me._floors_p.style.top='calc(50% - ((120px + 0px) / 2) + 42px)';
				}
			}
		}
		me._floors_p.logicBlock_position();
		me._floors_p.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Floor_Visibility') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Floor_Visibility') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floors_p.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floors_p.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floors_p.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._floors_p.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._floors_p.style.opacity == 0.0) { me._floors_p.style.visibility="hidden"; } }, 505);
					me._floors_p.style.opacity=0;
				}
				else if (me._floors_p.ggCurrentLogicStateAlpha == 1) {
					me._floors_p.style.visibility=me._floors_p.ggVisible?'inherit':'hidden';
					me._floors_p.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._floors_p.style.opacity == 0.0) { me._floors_p.style.visibility="hidden"; } }, 505);
					me._floors_p.style.opacity=0;
				}
			}
		}
		me._floors_p.logicBlock_alpha();
		me._floors_p.ggUpdatePosition=function (useTransition) {
		}
		el=me._floor_tx_03=document.createElement('div');
		els=me._floor_tx_03__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Floor_Tx_03";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 40px);';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floor_tx_03.ggUpdateText=function() {
			var params = [];
			var hs = player._("Third Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floor_tx_03.ggUpdateText();
		el.appendChild(els);
		me._floor_tx_03.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_tx_03.onclick=function (e) {
			player.openNext("{node46}","");
		}
		me._floor_tx_03.ggUpdatePosition=function (useTransition) {
		}
		me._floors_p.appendChild(me._floor_tx_03);
		el=me._floor_tx_02=document.createElement('div');
		els=me._floor_tx_02__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Floor_Tx_02";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floor_tx_02.ggUpdateText=function() {
			var params = [];
			var hs = player._("Second Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floor_tx_02.ggUpdateText();
		el.appendChild(els);
		me._floor_tx_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_tx_02.onclick=function (e) {
			player.openNext("{node23}","");
		}
		me._floor_tx_02.ggUpdatePosition=function (useTransition) {
		}
		me._floors_p.appendChild(me._floor_tx_02);
		el=me._floor_tx_01=document.createElement('div');
		els=me._floor_tx_01__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Floor_Tx_01";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) - 40px);';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floor_tx_01.ggUpdateText=function() {
			var params = [];
			var hs = player._("First Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floor_tx_01.ggUpdateText();
		el.appendChild(els);
		me._floor_tx_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_tx_01.onclick=function (e) {
			player.openNext("{node7}","");
		}
		me._floor_tx_01.ggUpdatePosition=function (useTransition) {
		}
		me._floors_p.appendChild(me._floor_tx_01);
		me._floors_b.appendChild(me._floors_p);
		me._right_top_corner_panel.appendChild(me._floors_b);
		el=me._floor_indication_b=document.createElement('div');
		els=me._floor_indication_b__img=document.createElement('img');
		els.className='ggskin ggskin_floor_indication_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACNCAYAAABlnJKbAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA+OSURBVHgB7V1Pjx3FEa/ufdhrlLWXPxJgEXkRkYW42MYCJSfMBZwbUj5AHHGKhJBzyw34BMktx9gfwIojBST/QZibJRRsOOEIxDpAUBzb2LEtMHhfp2feVL9fV1fPPqRc2K6f9PRm+v/01FRXV1dXO/qBOHr06Oq9e/f2O+fWQgi7aDpd5bhpLdN0muJ9fxuvvM/ip7V8kK7L56leD8f3eaBOrIPjp9Nqa4u6/JDea/lkPViX1g4sf4F2bJaW4/h6wfyX4/16fI8XT548eYN+ANwiiQYiORovn4+/Q11YJJY+c5CJwywkwDWnJ+fm1yJ9liemS2mwvKyaef'+
			'147Tgv1xf/+/h4PdXa3MVT+Qx9WVB+Ue8QxuXK/LRAPdhObiOXy/dd/BSuQ6UPUj8O6bL6R+5jGRcj8Rzb2Nj4aySeddoEowTTEUqkyjfi79cx4SpX0mXiTsIXEELR9UUH44sgLaz7j19C33nzQlI6LJOoTpgqUXbh3VfmXJ5eq4eJRr4o+UHIuippuAwkBBLEXRCm/HCgHHwHWb1Ke9IHM/QrhxE85xB2LP69OUY4S7WIV1999eXYue+6GUdZ5kZyo5xoaOpcEZ7QxXX5MM1AFNlX3z1cZJ+hwp1IIVTCa/5asR1IfNwWKEeCy/bcuVo9XA7Bc/MLU8oNULbKaSnvPyfyFJ+i9nHSOJxWL7yT+N+JGi8/9dRTNz7++OMPtTJUgnnttdfeiEX8KV4up07BipRO0Vi9BvlFV1kcviz4IrG+oh6RBuOdTFups+BYlLfd'+
			'ifqDSOuGjwm5SRh7LhGfOJBsmvgRlR+oU8IkZP8rw+TqQDQuEs05mb8gmKORWCKrez01CNmr9iCbNBAb6iRn4riy0PTvRBhyMvxai2vSO9ApXKMGyUVJucdnwv7ie5UARBiX0f86AVbIew4Ii4eiWq9L4tPaTLVnhDZHHNq7d6+7dOnSOYzPCIaJRb6Q4gtROiBjuVrDXDkeFxypQnzM3STBFUMFcMCxIYvLzOqulCu5qBPcLpOrpNzF7YUhqxiCZZ2QhjRhl4lF6T/MJ9uOz57dV7jZLNodipzmZuQ052VcJ+CuTTc2PpMdnxorhC41DYRrrB1nMKnjasIl1NmnqckuioCnoZg56YmKWReH43Oo5WhtJ9JnRnCNBJiEUn2omPUfC+2VNNp1LWy0r3K8EAXhc93FhENiY99NL5FZKX8lXeOA3W7cu3f3P1evfvXNN9'+
			'/c+vbbb79TasxYahUjX9zQqKRTGdVWiM5L5cGLJefG21IUqasNNtOb4Oym+lzwkYy1abS9oFfaTJOD5dx3333blpeXV3bt3PnY0mSyHeNHCOgP8e9Ad92/1chdjkTu8uc+UqmIH6wjkI8++ujv77///j/I8KNHHG72Pvnkkwe3bdu20t2PcZxIA0cilzneyzDPPffcX2LAaiZkCuHt+vXr/zpx4sTf1tfXr5BhS+Dq1avXrly5sr5r166VHcvLq9oEBohoNQrAx13kLvsjm70wxGYJebj4761b144fP36CDFsWL7300q927NjxUE090tPCxsYLPhLL87PweYRkTW+99dYpMmxpnD9//lQUS+5qszemh6n3+3ynpCkUUsCa/vn555ci67pNhi2Nmzdv3v73lSu5bIozYZpNszshexX1B5LC4hzcBNxG8OWXX15ONyCS'+
			'JPVHCPu7RZv9BIGcmPHFF19cI0MTiCPJVbxXFnLXJmFE9d9xnjt37nxHhibAOrVMqy50XD6tUQhFW9KMGpoDm0J0QNro4DN7FdBO9iYGZGgVSCTIRLxTlvSRgAztAdft+n+w+/EEq58iFxnahBuMqoo1po7D9P+QOBBVbV8MWx+aSWhCx2EKcz3MTIbWwMPPdDApkcsEXgo3QcgyhvZQs47sKMNn2xrmOQhtWgwNAZhG0v6DmYtnC6+MNIxQmkXPRVy+8yLXw2DiBU34DFsbaAUpWYfP7B2G6ZRNqdtGUExsWb71uBkrTakNTQN3HshdFonDGFcxZEA5FqbXPrODQas7uDe0g8ykQcyWOnhX5phLxTZbag5y77ucQRdLA/19CKa0axi4wU4uE3lINfvjWzK0DNw1AoEDwQitrrY3ydAGcPExOQGAGZMPlSUAU9q1CY'+
			'cOBMTaYgef3EvgJjayhcdWgSvU2h4lr+SY/TtnckyLCOPOE3zmVQqn1DYkNQl867gxgOlkkqZOrLCh0qbT0A6c4qYFmYiXAXxf9W1i2PoQergA1nfzaXUH4VrL0CjEOlJmD0PKNhMbkgw1O6neZVnm4qsPcEUmQyOQo4uwj/IygelgGscmC84TbdejwdBDkWXn5g0wDElrcUOjULiNZ1tejZqM2zQIhUnkehjW4oHtpuYXxNAGEgPBMNDDzGZJmzkiNjQFJhAkG17B9rhbIHPxYeaZhmHbUTJ3oGGWlLiLWBIwkmkbeBgZT4Bma0kkZkbDz4anBiG8ecyC5ssDmT1MNsV2zjhMi3CVM54GTEizsFL2oxjagTxlBUlngoHadhNDW1DPpQIC8rh2xIn4522m1BxqRxxy+MR0LwZEzeWLw2l1zX7XCKltoDI3DUlJKePy'+
			'o4V5ecDQFtA/EG9kQ8xNNBU7TkN7kBsb8QzLDh43W6NpA0G4oT3IE2p1xZ10WWZcpjloK9WFiWaxNEAm8LaK/hQTdMULckzycTcNIT9gi6iqGjZsbTCBaJxmdjgFlT5AOIGhXcj3zwwleaBCNTAJGwhD28CZ03xfEhpOoWM8Q1PQ3nnm4y4oSpqk/TWCaRKF/EJS00ulmwfjLgaNYUzCSKShPfABoTjioNolmyVlhlQm8DYJzdoOdXQTDDBTBwOimFr320xmMcVqdR9MhpbhQIE3X3wUq5NZBjK0BnmarDSg8tL/B3MZG57aRM34mxchPQag8GvE0i6Yy0hVS4fMvMGm2AaGtvjcbwwI6HY1izWiaRlB2ETNNb3DQmMynKrMmAyNQDIKcWhJcUgorhvY8kCDEMtCyfXHQBu+sN0kUs8rNrSLzAic5JFtROVea0OzcM'+
			'LJs0dbGMltDO1BG47yA7aGi9mf8HNnaA7IUTSRxBM4EOrA02x1qm3Y8hgbWdKugSyx4DaGdqGuVlNl8dGRyTGGOViWmagr1SGYEVXjYL0c0wLvIpmoSwLgt9fQKAY6mIrV63ReUrK6AxnGBqS2wRpel22VBZ9mfeAsptiEbWgDYZNFaF9NaGgSXhjUSTesPtsiG8RJ6Cb0Ngdp7lI4FMq0us5Ok20dGQOhUh9XN6CqhRmaQhCjjrfN94YxOCHT9HoY9bykigbY0A4yjx4DJlI508fH33SWgwyGBNbDsOCbdDEh2OJj41BZRb80AOsFeQ5bGmgVcrdj7yhxuJ+gHS8SjQ1GbQN1L9mpsrZmZNCgHVLR7xoQoSVVGZqDG3HOMJGOnJ22RGBoFplROAkPVHKXm6FdaMbgvcVdMsUEjV5aKrBhqUlo8gsreOfbTIRllQwz'+
			'tAHNA/jsQnH30Wcgs40xzKB5J/OqTzuxZdbQJpyyMd/jPmqnZDC0C31f0iymXKm2Yal5FOwihFKGkQkMBkbSw/A2E6ckMLQFqaiT8GnDGqxYp6m2wcBgPUySXUDvwgRkaA/S8zeD7zzvFEgR4BTR0B7GFp8DC73S+zMOU4bGwE6dK+8+nTWQ+YaBzIa2oL5x3GaSecxk71Nje5UMWxo1wymmBc/T6YB2vcZZDBJp8ZEdxoDwK6fZBgPD1w4hMC5jQOQHbM1C0n82UzI0B81vM8u4Hk0ZUAdjuwnaBXohwy0m2a4BGckc5/77799GhiawLUIe4ZeQhN7pdJ0JRJ5c0WH37t0PkaEJPBwhHQiFnC7WO6H3Iq9WJ4dCoOld27NnjQxNIDKHvXjvhFOhSBfrnry/SHkqQgJ6/PHH99qwtPWxc+fOlQcffHCPNMlERMI556'+
			'fT6XuZ2zIxW1paWtp++PDhF8mwpfH000//Ig4328fSRAI6t/TBBx+sP/PMMy9H4ng0i2UBOP4vLy+vPPLIIz/55JNPLpNhy+HZZ599/oEHHvhZd+0UT2TD/fqZM2d+t9RdHTx4cDkGHh4za9i5svJwpMK9d+7cufb111/fJsOPHlFm2X3gwIEX43D0083SRkI6+umnn36YRqJXXnnlsxi4lhw640Y2ITV/d/furWvXr391+/btW6lAqph0iqlZRr2d3xHve/8j3fx+SjoKd2pavNvcR58W39ftfbpmVNsT5r73x9pDSpqF2hnbMKXFUKuHKDe5lfV1YkYnr8RZ9EqFm8g2r58+ffqJ7n7CETHwN/Hv3eEmqxSJpbvftn37ymOPPrrCaVIZcJ9pkNFpEZpTzFtFWVkibfFAQdnaq9SFhIbPIduNHT8V2k10ppP1Q411'+
			'D3FTMESqvITsWVClIdfxgigLtfBTyJOeC9YHVSEW6qwSMPR9jD/CwUt8Mcgy3eUhziC1vXifbdYu6hpZVhgezuG/E8ce83TO+8xhI9bL23kDhBGmhbKztolyyublNkEpPaahOro287OMcZPMYc9IeYmIxuKAQIbCUx1ocplNkytEDA1k4nzj7Nmzxzl4CTNFonkvEs0T8XI/LdJ457IvGF9qRgAkvmiav3AuNxVJynSOH4CU9hBl3KRomxgSx15O1gaaP0vB8rEtgttlaRRiGfuqM4sBp3g2hTj8Jzf+VGqdkEerp0/r/bGzUdDFspZk4RcuXDgZheDVmOPnQ86MYnHaTUQLyS3pRYVyiCFJhGF+gkaqT7wQB51AGqfDNqdm1F8gXmtraGEkT3rGRYDPOrwkt2Be/FiL+rWhkWQTXTWNxolj2B/PnD79W1lOQTAdIq'+
			'c5dWDfvpsx02H5spJswQXLzJWHYUWgzIPsu5B3ON7ps7c+vJMxlGEHOZiWT2u/SlRa55P4ukPYnKiGtBmBig+Qn5X7QfPRIsF5xghvETkFcCOm/30Uct/UylIJpsOFixfP79u373jMvErdEDXSYMkFgnjxKK1nrE8OPUrnO5efppHKcXM75CC/XPhiglaPbH8lDuM3nZFA/fJl4zNJ2QifR3tWjK9xaJlWojoTEn3aKea+//77X77zzjunqIKF+OGRI0fW4tTz9VjgoXi7xg0NZctmf3BNFanfUS7RYxwp5QbRWRonYOIMSj1jsgPPPGbNrc9+so+CqDRtrbVNC8e+opHnXrBsGVd9hg75M96I18fi72RUzL1Hm2AhgkFE4tkfO3VPrGD/WDqejmr6DNR3iIjZf6cX2UwfMehwtPIW1a1U26FWpzwPtGG0vEXT0bzt'+
			'm7Xt/1DGekxz7u23375MPwD/A5ksV5UyI1izAAAAAElFTkSuQmCC';
		me._floor_indication_b__img.ggOverSrc=hs;
		el.ggId="Floor indication B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 35px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 203px;';
		hs+='top : 235px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floor_indication_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_indication_b.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Floor_Visibility') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Floor_Visibility') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floor_indication_b.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floor_indication_b.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floor_indication_b.style.transition='opacity 0s';
				if (me._floor_indication_b.ggCurrentLogicStateAlpha == 0) {
					me._floor_indication_b.style.visibility=me._floor_indication_b.ggVisible?'inherit':'hidden';
					me._floor_indication_b.style.opacity=1;
				}
				else if (me._floor_indication_b.ggCurrentLogicStateAlpha == 1) {
					me._floor_indication_b.style.visibility="hidden";
					me._floor_indication_b.style.opacity=0;
				}
				else {
					me._floor_indication_b.style.visibility="hidden";
					me._floor_indication_b.style.opacity=0;
				}
			}
		}
		me._floor_indication_b.logicBlock_alpha();
		me._floor_indication_b.onclick=function (e) {
			player.setVariableValue('Floor_Visibility', !player.getVariableValue('Floor_Visibility'));
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('contactpanel', false);
		}
		me._floor_indication_b.onmouseenter=function (e) {
			me._floor_indication_b__img.src=me._floor_indication_b__img.ggOverSrc;
			me.elementMouseOver['floor_indication_b']=true;
			me._floors_h.logicBlock_alpha();
		}
		me._floor_indication_b.onmouseleave=function (e) {
			me._floor_indication_b__img.src=me._floor_indication_b__img.ggNormalSrc;
			if (player.transitionsDisabled) {
				me._floors_h.style.transition='none';
			} else {
				me._floors_h.style.transition='all 500ms ease-out 0ms';
			}
			me._floors_h.style.opacity='0';
			me._floors_h.style.visibility='hidden';
			me.elementMouseOver['floor_indication_b']=false;
			me._floors_h.logicBlock_alpha();
		}
		me._floor_indication_b.ggCurrentLogicStateAlpha = -1;
		me._floor_indication_b.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['floor_indication_b']) {
				if (player.transitionsDisabled) {
					me._floors_h.style.transition='none';
				} else {
					me._floors_h.style.transition='all 500ms ease-out 0ms';
				}
				me._floors_h.style.opacity='1';
				me._floors_h.style.visibility=me._floors_h.ggVisible?'inherit':'hidden';
			}
		}
		me._floor_indication_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._floor_indication=document.createElement('div');
		els=me._floor_indication__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Floor indication";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._floor_indication.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('floor_indication', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floor_indication.ggUpdateText();
		player.addListener('varchanged_floor_indication', function() {
			me._floor_indication.ggUpdateText();
		});
		player.addListener('changenode', function() {
			me._floor_indication.ggUpdateText();
		});
		el.appendChild(els);
		me._floor_indication.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_indication.ggUpdatePosition=function (useTransition) {
		}
		me._floor_indication_b.appendChild(me._floor_indication);
		el=me._floors_h=document.createElement('div');
		els=me._floors_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Floors_H";
		el.ggDx=11;
		el.ggDy=41;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 11px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 41px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 0px 5px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._floors_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Floors", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floors_h.ggUpdateText();
		el.appendChild(els);
		me._floors_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floors_h.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Floor_Visibility') == true)) || 
				((player.getVariableValue('Room_visibility_1F') == true)) || 
				((player.getVariableValue('Room_visibility_2F') == true)) || 
				((player.getVariableValue('Room_visibility_3F') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('Floor_Visibility') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floors_h.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floors_h.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floors_h.style.transition='opacity 200ms ease 0ms';
				if (me._floors_h.ggCurrentLogicStateVisible == 0) {
					me._floors_h.style.visibility="hidden";
					me._floors_h.ggVisible=false;
				}
				else if (me._floors_h.ggCurrentLogicStateVisible == 1) {
					me._floors_h.style.visibility=(Number(me._floors_h.style.opacity)>0||!me._floors_h.style.opacity)?'inherit':'hidden';
					me._floors_h.ggVisible=true;
				}
				else {
					me._floors_h.style.visibility=(Number(me._floors_h.style.opacity)>0||!me._floors_h.style.opacity)?'inherit':'hidden';
					me._floors_h.ggVisible=true;
				}
			}
		}
		me._floors_h.logicBlock_visible();
		me._floors_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['floor_indication_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floors_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floors_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floors_h.style.transition='opacity 200ms ease 0ms';
				if (me._floors_h.ggCurrentLogicStateAlpha == 0) {
					me._floors_h.style.visibility=me._floors_h.ggVisible?'inherit':'hidden';
					me._floors_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._floors_h.style.opacity == 0.0) { me._floors_h.style.visibility="hidden"; } }, 205);
					me._floors_h.style.opacity=0;
				}
			}
		}
		me._floors_h.logicBlock_alpha();
		me._floors_h.ggUpdatePosition=function (useTransition) {
		}
		me._floor_indication_b.appendChild(me._floors_h);
		me._right_top_corner_panel.appendChild(me._floor_indication_b);
		el=me._minimap_b=document.createElement('div');
		els=me._minimap_b__img=document.createElement('img');
		els.className='ggskin ggskin_minimap_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._minimap_b__img.ggOverSrc=hs;
		el.ggId="Minimap_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._minimap_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap_b.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._minimap_bg.style.transition='none';
			} else {
				me._minimap_bg.style.transition='all 100ms ease-out 0ms';
			}
			me._minimap_bg.ggParameter.rx=0;me._minimap_bg.ggParameter.ry=0;
			me._minimap_bg.style.transform=parameterToTransform(me._minimap_bg.ggParameter);
			me._floorplan_b.style.transition='none';
			me._floorplan_b.style.visibility=(Number(me._floorplan_b.style.opacity)>0||!me._floorplan_b.style.opacity)?'inherit':'hidden';
			me._floorplan_b.ggVisible=true;
			if (player.transitionsDisabled) {
				me._room_name_p.style.transition='none';
			} else {
				me._room_name_p.style.transition='all 100ms ease-out 0ms';
			}
			me._room_name_p.ggParameter.rx=0;me._room_name_p.ggParameter.ry=0;
			me._room_name_p.style.transform=parameterToTransform(me._room_name_p.ggParameter);
			if (player.transitionsDisabled) {
				me._floors_b.style.transition='none';
			} else {
				me._floors_b.style.transition='all 100ms ease-out 0ms';
			}
			me._floors_b.ggParameter.rx=0;me._floors_b.ggParameter.ry=0;
			me._floors_b.style.transform=parameterToTransform(me._floors_b.ggParameter);
			if (player.transitionsDisabled) {
				me._floor_indication_b.style.transition='none';
			} else {
				me._floor_indication_b.style.transition='all 100ms ease-out 0ms';
			}
			me._floor_indication_b.ggParameter.rx=0;me._floor_indication_b.ggParameter.ry=0;
			me._floor_indication_b.style.transform=parameterToTransform(me._floor_indication_b.ggParameter);
			me._minimap_b.style.transition='none';
			me._minimap_b.style.visibility='hidden';
			me._minimap_b.ggVisible=false;
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			if (player.transitionsDisabled) {
				me._rooms_blur_bg.style.transition='none';
			} else {
				me._rooms_blur_bg.style.transition='all 100ms ease-out 0ms';
			}
			me._rooms_blur_bg.ggParameter.rx=0;me._rooms_blur_bg.ggParameter.ry=0;
			me._rooms_blur_bg.style.transform=parameterToTransform(me._rooms_blur_bg.ggParameter);
			if (player.transitionsDisabled) {
				me._floors_blur_bg.style.transition='none';
			} else {
				me._floors_blur_bg.style.transition='all 100ms ease-out 0ms';
			}
			me._floors_blur_bg.ggParameter.rx=0;me._floors_blur_bg.ggParameter.ry=0;
			me._floors_blur_bg.style.transform=parameterToTransform(me._floors_blur_bg.ggParameter);
			player.setVariableValue('contactpanel', false);
		}
		me._minimap_b.onmouseenter=function (e) {
			me._minimap_b__img.src=me._minimap_b__img.ggOverSrc;
			me.elementMouseOver['minimap_b']=true;
			me._minimap_h.logicBlock_alpha();
		}
		me._minimap_b.onmouseleave=function (e) {
			me._minimap_b__img.src=me._minimap_b__img.ggNormalSrc;
			me.elementMouseOver['minimap_b']=false;
			me._minimap_h.logicBlock_alpha();
		}
		me._minimap_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._minimap_h=document.createElement('div');
		els=me._minimap_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Minimap_H";
		el.ggDx=-60;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) - 60px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 40px);';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 0px 5px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._minimap_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Floor Plan", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._minimap_h.ggUpdateText();
		el.appendChild(els);
		me._minimap_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap_h.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Room_visibility_1F') == true)) || 
				((player.getVariableValue('Room_visibility_2F') == true)) || 
				((player.getVariableValue('Room_visibility_3F') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minimap_h.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minimap_h.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minimap_h.style.transition='opacity 500ms ease 0ms';
				if (me._minimap_h.ggCurrentLogicStateVisible == 0) {
					me._minimap_h.style.visibility="hidden";
					me._minimap_h.ggVisible=false;
				}
				else {
					me._minimap_h.style.visibility=(Number(me._minimap_h.style.opacity)>0||!me._minimap_h.style.opacity)?'inherit':'hidden';
					me._minimap_h.ggVisible=true;
				}
			}
		}
		me._minimap_h.logicBlock_visible();
		me._minimap_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['minimap_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._minimap_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._minimap_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._minimap_h.style.transition='opacity 500ms ease 0ms';
				if (me._minimap_h.ggCurrentLogicStateAlpha == 0) {
					me._minimap_h.style.visibility=me._minimap_h.ggVisible?'inherit':'hidden';
					me._minimap_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._minimap_h.style.opacity == 0.0) { me._minimap_h.style.visibility="hidden"; } }, 505);
					me._minimap_h.style.opacity=0;
				}
			}
		}
		me._minimap_h.logicBlock_alpha();
		me._minimap_h.ggUpdatePosition=function (useTransition) {
		}
		me._minimap_b.appendChild(me._minimap_h);
		me._right_top_corner_panel.appendChild(me._minimap_b);
		el=me._floors_blur_bg=document.createElement('div');
		el.ggId="Floors_Blur_BG";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -10;';
		hs+='border : 0px solid #000000;';
		hs+='height : 120px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 118px;';
		hs+='top : 235px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floors_blur_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floors_blur_bg.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Floor_Visibility') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Floor_Visibility') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._floors_blur_bg.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._floors_blur_bg.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._floors_blur_bg.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._floors_blur_bg.ggCurrentLogicStatePosition == 0) {
					me._floors_blur_bg.style.right='118px';
					me._floors_blur_bg.style.top='235px';
				}
				else if (me._floors_blur_bg.ggCurrentLogicStatePosition == 1) {
					me._floors_blur_bg.style.right='118px';
					me._floors_blur_bg.style.top='275px';
				}
				else {
					me._floors_blur_bg.style.right='118px';
					me._floors_blur_bg.style.top='235px';
				}
			}
		}
		me._floors_blur_bg.logicBlock_position();
		me._floors_blur_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Floor_Visibility') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Floor_Visibility') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floors_blur_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floors_blur_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floors_blur_bg.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._floors_blur_bg.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._floors_blur_bg.style.opacity == 0.0) { me._floors_blur_bg.style.visibility="hidden"; } }, 505);
					me._floors_blur_bg.style.opacity=0;
				}
				else if (me._floors_blur_bg.ggCurrentLogicStateAlpha == 1) {
					me._floors_blur_bg.style.visibility=me._floors_blur_bg.ggVisible?'inherit':'hidden';
					me._floors_blur_bg.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._floors_blur_bg.style.opacity == 0.0) { me._floors_blur_bg.style.visibility="hidden"; } }, 505);
					me._floors_blur_bg.style.opacity=0;
				}
			}
		}
		me._floors_blur_bg.logicBlock_alpha();
		me._floors_blur_bg.ggUpdatePosition=function (useTransition) {
		}
		me._right_top_corner_panel.appendChild(me._floors_blur_bg);
		el=me._rooms_blur_bg=document.createElement('div');
		el.ggId="Rooms_Blur_BG";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -10;';
		hs+='border : 0px solid #000000;';
		hs+='height : 175px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : 235px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rooms_blur_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rooms_blur_bg.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Room_visibility_1F') == false)) || 
				((player.getVariableValue('Room_visibility_2F') == false)) || 
				((player.getVariableValue('Room_visibility_3F') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_1F') == true)) || 
				((player.getVariableValue('Room_visibility_2F') == true)) || 
				((player.getVariableValue('Room_visibility_3F') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rooms_blur_bg.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rooms_blur_bg.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rooms_blur_bg.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rooms_blur_bg.ggCurrentLogicStatePosition == 0) {
					me._rooms_blur_bg.style.right='50px';
					me._rooms_blur_bg.style.top='235px';
				}
				else if (me._rooms_blur_bg.ggCurrentLogicStatePosition == 1) {
					me._rooms_blur_bg.style.right='50px';
					me._rooms_blur_bg.style.top='275px';
				}
				else {
					me._rooms_blur_bg.style.right='50px';
					me._rooms_blur_bg.style.top='235px';
				}
			}
		}
		me._rooms_blur_bg.logicBlock_position();
		me._rooms_blur_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Room_visibility_1F') == false)) || 
				((player.getVariableValue('Room_visibility_2F') == false)) || 
				((player.getVariableValue('Room_visibility_3F') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_1F') == true)) || 
				((player.getVariableValue('Room_visibility_2F') == true)) || 
				((player.getVariableValue('Room_visibility_3F') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rooms_blur_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rooms_blur_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rooms_blur_bg.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rooms_blur_bg.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rooms_blur_bg.style.opacity == 0.0) { me._rooms_blur_bg.style.visibility="hidden"; } }, 505);
					me._rooms_blur_bg.style.opacity=0;
				}
				else if (me._rooms_blur_bg.ggCurrentLogicStateAlpha == 1) {
					me._rooms_blur_bg.style.visibility=me._rooms_blur_bg.ggVisible?'inherit':'hidden';
					me._rooms_blur_bg.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._rooms_blur_bg.style.opacity == 0.0) { me._rooms_blur_bg.style.visibility="hidden"; } }, 505);
					me._rooms_blur_bg.style.opacity=0;
				}
			}
		}
		me._rooms_blur_bg.logicBlock_alpha();
		me._rooms_blur_bg.ggUpdatePosition=function (useTransition) {
		}
		me._right_top_corner_panel.appendChild(me._rooms_blur_bg);
		el=me._playermouse_click=document.createElement('div');
		el.ggId="playermouse_click";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='height : 1px;';
		hs+='left : -1074px;';
		hs+='position : absolute;';
		hs+='top : 1006px;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._playermouse_click.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._playermouse_click.onclick=function (e) {
			me._floors_b.style.transition='none';
			me._floors_b.style.visibility='hidden';
			me._floors_b.ggVisible=false;
			me._floor_indication_b.style.transition='none';
			me._floor_indication_b.style.visibility=(Number(me._floor_indication_b.style.opacity)>0||!me._floor_indication_b.style.opacity)?'inherit':'hidden';
			me._floor_indication_b.ggVisible=true;
		}
		me._playermouse_click.ggUpdatePosition=function (useTransition) {
		}
		me._right_top_corner_panel.appendChild(me._playermouse_click);
		me.divSkin.appendChild(me._right_top_corner_panel);
		el=me._right_bottom_corner_panel=document.createElement('div');
		el.ggId="Right bottom corner panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right_bottom_corner_panel.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._right_bottom_corner_panel.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_off_b=document.createElement('div');
		els=me._fullscreen_off_b__img=document.createElement('img');
		els.className='ggskin ggskin_fullscreen_off_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._fullscreen_off_b__img.ggOverSrc=hs;
		el.ggId="Fullscreen off_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: 1;';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '1');
		el.style.transformOrigin='50% 50%';
		me._fullscreen_off_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_off_b.onclick=function (e) {
			me._fullscreen_off_b.style.transition='none';
			me._fullscreen_off_b.style.visibility='hidden';
			me._fullscreen_off_b.ggVisible=false;
			player.exitFullscreen();
			me._fullscreen_b.style.transition='none';
			me._fullscreen_b.style.visibility=(Number(me._fullscreen_b.style.opacity)>0||!me._fullscreen_b.style.opacity)?'inherit':'hidden';
			me._fullscreen_b.ggVisible=true;
		}
		me._fullscreen_off_b.onmouseenter=function (e) {
			me._fullscreen_off_b__img.src=me._fullscreen_off_b__img.ggOverSrc;
			me.elementMouseOver['fullscreen_off_b']=true;
			me._exit_fullscreen_h.logicBlock_alpha();
		}
		me._fullscreen_off_b.onmouseleave=function (e) {
			me._fullscreen_off_b__img.src=me._fullscreen_off_b__img.ggNormalSrc;
			me.elementMouseOver['fullscreen_off_b']=false;
			me._exit_fullscreen_h.logicBlock_alpha();
		}
		me._fullscreen_off_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._exit_fullscreen_h=document.createElement('div');
		els=me._exit_fullscreen_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Exit_fullscreen_H";
		el.ggDx=-85;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) - 85px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 50px);';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 0px 5px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._exit_fullscreen_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Exit Fullscreen", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._exit_fullscreen_h.ggUpdateText();
		el.appendChild(els);
		me._exit_fullscreen_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._exit_fullscreen_h.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('contactpanel') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('contactpanel') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._exit_fullscreen_h.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._exit_fullscreen_h.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._exit_fullscreen_h.style.transition='opacity 500ms ease 0ms';
				if (me._exit_fullscreen_h.ggCurrentLogicStateVisible == 0) {
					me._exit_fullscreen_h.style.visibility="hidden";
					me._exit_fullscreen_h.ggVisible=false;
				}
				else if (me._exit_fullscreen_h.ggCurrentLogicStateVisible == 1) {
					me._exit_fullscreen_h.style.visibility=(Number(me._exit_fullscreen_h.style.opacity)>0||!me._exit_fullscreen_h.style.opacity)?'inherit':'hidden';
					me._exit_fullscreen_h.ggVisible=true;
				}
				else {
					me._exit_fullscreen_h.style.visibility=(Number(me._exit_fullscreen_h.style.opacity)>0||!me._exit_fullscreen_h.style.opacity)?'inherit':'hidden';
					me._exit_fullscreen_h.ggVisible=true;
				}
			}
		}
		me._exit_fullscreen_h.logicBlock_visible();
		me._exit_fullscreen_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['fullscreen_off_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._exit_fullscreen_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._exit_fullscreen_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._exit_fullscreen_h.style.transition='opacity 500ms ease 0ms';
				if (me._exit_fullscreen_h.ggCurrentLogicStateAlpha == 0) {
					me._exit_fullscreen_h.style.visibility=me._exit_fullscreen_h.ggVisible?'inherit':'hidden';
					me._exit_fullscreen_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._exit_fullscreen_h.style.opacity == 0.0) { me._exit_fullscreen_h.style.visibility="hidden"; } }, 505);
					me._exit_fullscreen_h.style.opacity=0;
				}
			}
		}
		me._exit_fullscreen_h.logicBlock_alpha();
		me._exit_fullscreen_h.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_off_b.appendChild(me._exit_fullscreen_h);
		me._right_bottom_corner_panel.appendChild(me._fullscreen_off_b);
		el=me._fullscreen_b=document.createElement('div');
		els=me._fullscreen_b__img=document.createElement('img');
		els.className='ggskin ggskin_fullscreen_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._fullscreen_b__img.ggOverSrc=hs;
		el.ggId="Fullscreen_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: 1;';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '1');
		el.style.transformOrigin='50% 50%';
		me._fullscreen_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_b.onclick=function (e) {
			player.enterFullscreen();
			me._fullscreen_b.style.transition='none';
			me._fullscreen_b.style.visibility='hidden';
			me._fullscreen_b.ggVisible=false;
			me._fullscreen_off_b.style.transition='none';
			me._fullscreen_off_b.style.visibility=(Number(me._fullscreen_off_b.style.opacity)>0||!me._fullscreen_off_b.style.opacity)?'inherit':'hidden';
			me._fullscreen_off_b.ggVisible=true;
		}
		me._fullscreen_b.onmouseenter=function (e) {
			me._fullscreen_b__img.src=me._fullscreen_b__img.ggOverSrc;
			me.elementMouseOver['fullscreen_b']=true;
			me._fullscreen_h.logicBlock_alpha();
		}
		me._fullscreen_b.onmouseleave=function (e) {
			me._fullscreen_b__img.src=me._fullscreen_b__img.ggNormalSrc;
			me.elementMouseOver['fullscreen_b']=false;
			me._fullscreen_h.logicBlock_alpha();
		}
		me._fullscreen_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_h=document.createElement('div');
		els=me._fullscreen_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="fullscreen_H";
		el.ggDx=-60;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) - 60px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 50px);';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 0px 5px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._fullscreen_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Fullscreen", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._fullscreen_h.ggUpdateText();
		el.appendChild(els);
		me._fullscreen_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_h.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('contactpanel') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('contactpanel') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_h.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_h.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_h.style.transition='opacity 500ms ease 0ms';
				if (me._fullscreen_h.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_h.style.visibility="hidden";
					me._fullscreen_h.ggVisible=false;
				}
				else if (me._fullscreen_h.ggCurrentLogicStateVisible == 1) {
					me._fullscreen_h.style.visibility=(Number(me._fullscreen_h.style.opacity)>0||!me._fullscreen_h.style.opacity)?'inherit':'hidden';
					me._fullscreen_h.ggVisible=true;
				}
				else {
					me._fullscreen_h.style.visibility=(Number(me._fullscreen_h.style.opacity)>0||!me._fullscreen_h.style.opacity)?'inherit':'hidden';
					me._fullscreen_h.ggVisible=true;
				}
			}
		}
		me._fullscreen_h.logicBlock_visible();
		me._fullscreen_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['fullscreen_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen_h.style.transition='opacity 500ms ease 0ms';
				if (me._fullscreen_h.ggCurrentLogicStateAlpha == 0) {
					me._fullscreen_h.style.visibility=me._fullscreen_h.ggVisible?'inherit':'hidden';
					me._fullscreen_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._fullscreen_h.style.opacity == 0.0) { me._fullscreen_h.style.visibility="hidden"; } }, 505);
					me._fullscreen_h.style.opacity=0;
				}
			}
		}
		me._fullscreen_h.logicBlock_alpha();
		me._fullscreen_h.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_b.appendChild(me._fullscreen_h);
		me._right_bottom_corner_panel.appendChild(me._fullscreen_b);
		el=me._contact=document.createElement('div');
		els=me._contact__img=document.createElement('img');
		els.className='ggskin ggskin_contact';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._contact__img.ggOverSrc=hs;
		el.ggId="Contact";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 209px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._contact.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contact.onclick=function (e) {
			player.setVariableValue('contactpanel', !player.getVariableValue('contactpanel'));
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
		}
		me._contact.onmouseenter=function (e) {
			me._contact__img.src=me._contact__img.ggOverSrc;
			me.elementMouseOver['contact']=true;
			me._contact_info.logicBlock_alpha();
		}
		me._contact.onmouseleave=function (e) {
			me._contact__img.src=me._contact__img.ggNormalSrc;
			me.elementMouseOver['contact']=false;
			me._contact_info.logicBlock_alpha();
		}
		me._contact.ggUpdatePosition=function (useTransition) {
		}
		el=me._contact_info=document.createElement('div');
		els=me._contact_info__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Contact info";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 50px);';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 0px 5px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._contact_info.ggUpdateText=function() {
			var params = [];
			var hs = player._("Contact info", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._contact_info.ggUpdateText();
		el.appendChild(els);
		me._contact_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contact_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('contactpanel') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('contactpanel') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._contact_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._contact_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._contact_info.style.transition='opacity 500ms ease 0ms';
				if (me._contact_info.ggCurrentLogicStateVisible == 0) {
					me._contact_info.style.visibility="hidden";
					me._contact_info.ggVisible=false;
				}
				else if (me._contact_info.ggCurrentLogicStateVisible == 1) {
					me._contact_info.style.visibility=(Number(me._contact_info.style.opacity)>0||!me._contact_info.style.opacity)?'inherit':'hidden';
					me._contact_info.ggVisible=true;
				}
				else {
					me._contact_info.style.visibility=(Number(me._contact_info.style.opacity)>0||!me._contact_info.style.opacity)?'inherit':'hidden';
					me._contact_info.ggVisible=true;
				}
			}
		}
		me._contact_info.logicBlock_visible();
		me._contact_info.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['contact'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('contactpanel') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._contact_info.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._contact_info.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._contact_info.style.transition='opacity 500ms ease 0ms';
				if (me._contact_info.ggCurrentLogicStateAlpha == 0) {
					me._contact_info.style.visibility=me._contact_info.ggVisible?'inherit':'hidden';
					me._contact_info.style.opacity=1;
				}
				else if (me._contact_info.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._contact_info.style.opacity == 0.0) { me._contact_info.style.visibility="hidden"; } }, 505);
					me._contact_info.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._contact_info.style.opacity == 0.0) { me._contact_info.style.visibility="hidden"; } }, 505);
					me._contact_info.style.opacity=0;
				}
			}
		}
		me._contact_info.logicBlock_alpha();
		me._contact_info.ggUpdatePosition=function (useTransition) {
		}
		me._contact.appendChild(me._contact_info);
		el=me._contact_panel=document.createElement('div');
		els=me._contact_panel__img=document.createElement('img');
		els.className='ggskin ggskin_contact_panel';
		hs=basePath + 'images/contact_panel.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Contact panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 280px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._contact_panel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contact_panel.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('contactpanel') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('contactpanel') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._contact_panel.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._contact_panel.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._contact_panel.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._contact_panel.ggCurrentLogicStatePosition == 0) {
					me._contact_panel.style.left='0px';
					me._contact_panel.style.bottom='0px';
				}
				else if (me._contact_panel.ggCurrentLogicStatePosition == 1) {
					me._contact_panel.style.left='0px';
					me._contact_panel.style.bottom='60px';
				}
				else {
					me._contact_panel.style.left='0px';
					me._contact_panel.style.bottom='0px';
				}
			}
		}
		me._contact_panel.logicBlock_position();
		me._contact_panel.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('contactpanel') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('contactpanel') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._contact_panel.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._contact_panel.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._contact_panel.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._contact_panel.ggCurrentLogicStateAlpha == 0) {
					me._contact_panel.style.visibility=me._contact_panel.ggVisible?'inherit':'hidden';
					me._contact_panel.style.opacity=1;
				}
				else if (me._contact_panel.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._contact_panel.style.opacity == 0.0) { me._contact_panel.style.visibility="hidden"; } }, 505);
					me._contact_panel.style.opacity=0;
				}
				else {
					me._contact_panel.style.visibility=me._contact_panel.ggVisible?'inherit':'hidden';
					me._contact_panel.style.opacity=1;
				}
			}
		}
		me._contact_panel.logicBlock_alpha();
		me._contact_panel.ggUpdatePosition=function (useTransition) {
		}
		el=me._designation_=document.createElement('div');
		els=me._designation___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Designation ";
		el.ggDx=0;
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 10px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 300;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._designation_.ggUpdateText=function() {
			var params = [];
			var hs = player._("Listing Agent", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._designation_.ggUpdateText();
		el.appendChild(els);
		me._designation_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._designation_.ggUpdatePosition=function (useTransition) {
		}
		me._contact_panel.appendChild(me._designation_);
		el=me._broker_name=document.createElement('div');
		els=me._broker_name__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Broker name";
		el.ggDx=0;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) - 30px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 30px;';
		hs+='font-weight: 300;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._broker_name.ggUpdateText=function() {
			var params = [];
			var hs = player._("Agent Name", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._broker_name.ggUpdateText();
		el.appendChild(els);
		me._broker_name.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._broker_name.ggUpdatePosition=function (useTransition) {
		}
		me._contact_panel.appendChild(me._broker_name);
		el=me._ph_number_2=document.createElement('div');
		els=me._ph_number_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Ph_number 2";
		el.ggDx=35;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 57px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 35px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 300;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ph_number_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("+1111 2222 333", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ph_number_2.ggUpdateText();
		el.appendChild(els);
		me._ph_number_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ph_number_2.ggUpdatePosition=function (useTransition) {
		}
		me._contact_panel.appendChild(me._ph_number_2);
		el=me._ph_number=document.createElement('div');
		els=me._ph_number__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Ph_number";
		el.ggDx=35;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 37px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 35px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 300;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ph_number.ggUpdateText=function() {
			var params = [];
			var hs = player._("+1111 2222 333", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ph_number.ggUpdateText();
		el.appendChild(els);
		me._ph_number.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ph_number.ggUpdatePosition=function (useTransition) {
		}
		me._contact_panel.appendChild(me._ph_number);
		el=me._mail_id=document.createElement('div');
		els=me._mail_id__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Mail id";
		el.ggDx=35;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 35px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 300;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._mail_id.ggUpdateText=function() {
			var params = [];
			var hs = player._("abcd@zzz.com", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mail_id.ggUpdateText();
		el.appendChild(els);
		me._mail_id.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mail_id.ggUpdatePosition=function (useTransition) {
		}
		me._contact_panel.appendChild(me._mail_id);
		el=me._heading=document.createElement('div');
		els=me._heading__img=document.createElement('img');
		els.className='ggskin ggskin_heading';
		hs=basePath + 'images/heading.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Heading";
		el.ggDx=0;
		el.ggDy=-100;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 71px;';
		hs+='left : calc(50% - ((270px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((71px + 0px) / 2) - 100px);';
		hs+='visibility : inherit;';
		hs+='width : 270px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._heading.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._heading.ggUpdatePosition=function (useTransition) {
		}
		me._contact_panel.appendChild(me._heading);
		el=me._phone_icon=document.createElement('div');
		els=me._phone_icon__img=document.createElement('img');
		els.className='ggskin ggskin_phone_icon';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABGCAYAAACaGVmHAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR+SURBVHgB5ZyNddsgEMdPWaDZoBqhG1gbJBs0ncDZIOoE9gZ2J3A2UDpB2glwJ3A2+Bee8IurcnCAZAvn9x4vrc2HOI6DO5ArygTArf7T6LTQ6dZ+/KLTz6qq9vSR0MJodOrAo3S6p4+AFYaCjINOX+ha0Z2rA5rB0dE1YkY7QjtcNHRNWIEchJ3n8m3oWhAKpNNpqdNnW+aVyXdLpYPehiiPMMx3C0e5JZP/iUrHM+KGFTfy5nO4teuAkrVFP/yDRyDBETd5mLJLKhH4p41oClhtcVHm8uzRkqgOgd/TNFQaHi2pI+tpxhDuxfF0JGmf4dGWmmbMzeD/d0'+
			'y+75TGD+bzr1QKzMi+UiIodHkeaorLo32hRHQ85U3/WTu+MgKZ//IMfhm9m6heRTPlVFNqJs8bZWC1Zev4yuyHGpohp0Lh5vie8uEM7iz9oRs6A1pbXshtm5o5GtxToXDTpKZxWDOfZ9msKZAIZSz+UCFIpk9Nmdgd7I75ek9zhlk6s3afdklWJS3LQ03ZO/LkHlG0xGvbmuYO3NG25KCzLtuCZ0UlYAQwlorrcvcegST7U2cHfNA5ai8Bf/TOfF5TKXhGt4mow2dYD0UJxADeeRN7tDrvDjzFBq6VozOiECIyTwFmC9zGVhQUAn9WtKOS8Yx2IyjrQqGwQzDXNv+ZyZvquG1tTKVs4I7VBqcQ3PaouONSziF0aYvp2IL8bJlyV3G4nnTsCT56L7JJsweJx57gD9cVStu4DUHisSf8O9rRjkzt863s4HX23zVNDfh9'+
			'R0PhB+bI9o7h9743kwoHvIMYHHE7chwtJYBeC7eQscEUdgyZhhP+K6YtRWCf5RXxdMiMHroe5pFpLBgTQfjeXEsCBPVIUKMKBxk3m2yHfDcsjVdde8qH7vBKr7P+Ixzk2h3whlN0zRzhq6fK9ZDo4zvBcjatEKdNJu8GOcIBbx/MPJd40JI7ue2xLvDT9rTdetCGEc4D4qfaBinCgX8aiJZZyK6zK7jDF6d0CPthqcKJ89PgH71HYR25RjNqn4NeOF1E/fFBdfjDjY2wDrO8bhBPsmOpyy6kbVIsCAemxYdn6DVPunqMEt9Fr6kbX0OUAvxGUyHCaAke0rSzoJE5aVeNIhRbqS9IbRqKOm5Fr97dQBgdMK2T5+oH5QA+THDsVNI7hLCvyZwDVx8ol4BgDC3NGDhWJhoDgWDYV2EuCXq7gkmEYht4CghGYWaRNzAGns'+
			'ZEIBhDSzOA0xJMcZEIYZ/lqDUXvZ8Pfpc7zXNB/spuhwtE+cGHMxUmDmXWkPscJt9ZfgIA/vjuebQXMjtzOlLLKUYLvXuy9rVN5wS91uwQR2cFlP1bCQj/PoPCpVZGpMU4DMct/xP6aJyxWaF4isljpkoo2P2fE1vRBTDCof58uaY83gaJbJ23xL+AMSz/raqqZ5oLGZozBgpz/hkT/XB3iLc5OXQo5Vwb74HnDtOgMEFs5mygX0IXeD9Ejz3fOXI00mJhXMTQpoLeBnyi/n0BY0hrchvrvU6/bPode73sL3XFD1OZphfpAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Phone icon";
		el.ggDx=-90;
		el.ggDy=78;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) - 90px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 78px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._phone_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone_icon.ggUpdatePosition=function (useTransition) {
		}
		me._contact_panel.appendChild(me._phone_icon);
		el=me._mail_icon=document.createElement('div');
		els=me._mail_icon__img=document.createElement('img');
		els.className='ggskin ggskin_mail_icon';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAA4CAYAAACxDdW4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALiSURBVHgB7ZuNcdswDIUhXwfwBlU3iDdINmgmcDpBuoHcCTqC3AnaTFBlgniDaoRsgAIWk/M5JAVSFEXd4btjmB+KhF8skQ+kKyAQcUvVngrXykBP5bmqqr4igWr64S+VGpRreiq7DX15BBXIRU1lzyLpLeZnuwFlFBVJwKeAticqd/S0f4WVEzpZhbyTbqi8mAFWS8xsHnq71TzAWoWiuPkfHbzccYnEt1Tv+FsNKxRKIFDvutYn0h2MC3UDK4DifIBBINdyp4fh9Vpx3m68HAeZUF+hYCi+71S14BaIJ6Sdeb1WvM+kC6FOjiY88G8TSHFQXAeqfnqadC'+
			'CZsamjFj/y76rNlsoL+jlAQXA8I/G2lmtsNCKRLjo54gqEEsTZOK6bLpLpqMFChcLhHR8lkLk+jUimswb9tJAZlD0SHkf6SCeS6bBBPxxwlgwDjVNzzCPx7AX9WEWKNrg0I/yg6punSRYbg+M2g2euW4r3F0QyKQtAAx+pujeB2KhhxtU5ylbRPMU/wwQmp0oogD8gW3TWkJAAgU4wkST5JBNINhuDQpvhW0WHkCzplsvGYAKbEUrSzOTcNgZT2YyIgVuMWAKM9JncxmCEzYiI27oEmEWki0GT2BicsIoOjDe/SGbgBiOFwok2IyLWZUQygzfox+bIJ9uMiDiXE8kE0KCfdxuDiWxGRIxWkbLtuwXYmFuY2WaEknVzUmpjYGabEUr2HVyBjXHRQyKbEcoi29wCG3MNt0tmM0JZ7CyAwMa8kdxmhLLogQmBjemggPMH'+
			'i58q8Qh1pL8VcUAj5FTJbBghdjikQD5TOdHvnqAQihDpDbNEKA49xCVARRKgIglQkQSoSAJUJAEqkgAVSYCKJEBFEqAiCVCRBLgM7hYT7metHRbJlq/hrZ0DKMwr327F5G0K5WlDOZwOhjSp8pHj+YPK/B3qh5VtdFTuOWt6nt3OalXVFxh2WLPvaxUEP587Kg+X+fX/7aqEj66h/owAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Mail icon";
		el.ggDx=-90;
		el.ggDy=115;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 16px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) - 90px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 0px) / 2) + 115px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mail_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mail_icon.ggUpdatePosition=function (useTransition) {
		}
		me._contact_panel.appendChild(me._mail_icon);
		me._contact.appendChild(me._contact_panel);
		me._right_bottom_corner_panel.appendChild(me._contact);
		el=me._contact_panel_blur_bg=document.createElement('div');
		el.ggId="contact panel Blur_BG";
		el.ggDx=-79;
		el.ggDy=-140;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -5;';
		hs+='border : 0px solid #000000;';
		hs+='height : 280px;';
		hs+='left : calc(50% - ((240px + 0px) / 2) - 79px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((280px + 0px) / 2) - 140px);';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._contact_panel_blur_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contact_panel_blur_bg.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('contactpanel') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('contactpanel') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._contact_panel_blur_bg.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._contact_panel_blur_bg.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._contact_panel_blur_bg.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._contact_panel_blur_bg.ggCurrentLogicStatePosition == 0) {
					me._contact_panel_blur_bg.style.left = 'calc(50% - (240px / 2) - (0px / 2) + -79px)';
					me._contact_panel_blur_bg.style.top = 'calc(50% - (280px / 2) - (0px / 2) + -140px)';
				}
				else if (me._contact_panel_blur_bg.ggCurrentLogicStatePosition == 1) {
					me._contact_panel_blur_bg.style.left = 'calc(50% - (240px / 2) - (0px / 2) + -79px)';
					me._contact_panel_blur_bg.style.top = 'calc(50% - (280px / 2) - (0px / 2) + -200px)';
				}
				else {
					me._contact_panel_blur_bg.style.left='calc(50% - ((240px + 0px) / 2) - 79px)';
					me._contact_panel_blur_bg.style.top='calc(50% - ((280px + 0px) / 2) - 140px)';
				}
			}
		}
		me._contact_panel_blur_bg.logicBlock_position();
		me._contact_panel_blur_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('contactpanel') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('contactpanel') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._contact_panel_blur_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._contact_panel_blur_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._contact_panel_blur_bg.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._contact_panel_blur_bg.ggCurrentLogicStateAlpha == 0) {
					me._contact_panel_blur_bg.style.visibility=me._contact_panel_blur_bg.ggVisible?'inherit':'hidden';
					me._contact_panel_blur_bg.style.opacity=1;
				}
				else if (me._contact_panel_blur_bg.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._contact_panel_blur_bg.style.opacity == 0.0) { me._contact_panel_blur_bg.style.visibility="hidden"; } }, 505);
					me._contact_panel_blur_bg.style.opacity=0;
				}
				else {
					me._contact_panel_blur_bg.style.visibility=me._contact_panel_blur_bg.ggVisible?'inherit':'hidden';
					me._contact_panel_blur_bg.style.opacity=1;
				}
			}
		}
		me._contact_panel_blur_bg.logicBlock_alpha();
		me._contact_panel_blur_bg.ggUpdatePosition=function (useTransition) {
		}
		me._right_bottom_corner_panel.appendChild(me._contact_panel_blur_bg);
		el=me._interior_b=document.createElement('div');
		els=me._interior_b__img=document.createElement('img');
		els.className='ggskin ggskin_interior_b';
		hs=basePath + 'images/interior_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlEAAACMCAYAAABcQ/wGAAAgYklEQVR4Ae2dTc8lR3WAT90ZCyFAGn8IJcbIYyKEkYjk2IiEFWGXRRbOP/CCFRvMLyD8gpB/4J9gFKFsEBhYkwzCskbZ+MWgEDueZJAjEWPPrXTf21X3nFOnqvslK08/j/S+tz/q49TXqdPV1VVJrsnLL798a/p5Mef8ten3uen39vR763QzZ5GULo6X8/lKLucBWfvVfor7EqYOX4U1H+k40uImazkKS9jH4m76LXdTIE8q8S9h6DBn/3mQJhOevz/71xdUHNKRS4dV447y3IWRnEw5CLOJQ4Vjys+Fm0s+LfLo8LMuUyWTKLc6TdKRVaJ64PyWctIyGFz9aq6r41KmvXzL3p8Oy8khKt1a1jX5qgwu/3R964ZT4hzIFdfaQJ6160FZeNbi8/ntZd'+
			'Vhh21qaYtHlWc5ap+6rh6P59/lel78aZlq21f+TV3otX+nb3TZe1kittT7tbrQ6E9fB3yYLu1eHnHh+3qUfNse6MYar5Oh6iEtr8gw73Q5Vb1ewgjk7KXJuHF5YvJ5S1t2Mupr2YUR1mfp1L8S7kUYey7b2/WqHtmA99fTm7KhLngdO5KxJ2+jMzttL/Xr6P3p72r6uzP9vTb9ff/VV1+9Lysk2chkPN2eIvzWpHxemiK/lYNK0iSu04hlYHjUcLLr9IJOphZWyRDpVFCdYd4gG8ii/UcdbRJZNaTCfJFAUbq8ieLvduRRGL3rXr6OUZGi+5FsvfSoilrKs5bP4s43nLAB9dLm5BEvh5Pd1CnlthrTYutJUuc+jiaPfHyuA9ikpHTedsqq21EG5ec7NB2HD3ckkzY0LhG3BvNIzs2oOtKUReBWXLk18mpdkDYakD6P'+
			'UmzM1fZ/OPQ7CKfzdFupddyVl+jwvaGgZPJ1rGnHPXlc3egxNIJcG+yWeUlDih/4fN3U+iGKe2iwiJhy9v4kKP9iTEf1qNd2TPtbyUMdZmRgROfdcuy06+bBtecvFq6RpemnOmn0eRXdl0G4PXmiMlzzr8spktfnlci19NMr0993J2PqqudgpdWdR56Ox+PfT4ff0p78KFGj0L1yGChwr4RN5Q3QVnpTOSOlpDq9Y9RQnDzVj0jciar7a4wqtc9HL0vUOZU0NkahDjvq8HT4qX0S1+61YmzOnTzFfw1LOkawc1/C0CRnPHkZGgXsZN7aQUTKY1OnoNNngnP1NefG2Cnx9fLGGJwuHJNvixuRjuJ1nWtPgYcGWRTX9Hec64poxzbMtfy6Lqe6ORknUb2cOWZrnHu5erL4TtPog1PEcUfpy3M9Aa4M1HGJN8yzoD4YA0'+
			'GHGZRBE7/Tf15vNmmL9Hfvno7Oy9Pp3CM5fRuMRg49tdwWPxG+E9ayajdhGCs6pDHIIzkH/VBo+Kj2puP1RlhNj6sbEZHej67r8mtG2lyb0WGX+yY+2VDPVxgZnlp/RuFGfk1agjRv5HuTIfXt6EYa+TqNPh2PP87nV3YSdWaL5EZI47aJMYVKxiv02khEmg48Yq0DN8pIy1AMivJEqSvYoshzpECC8IcKowp6MTg2PWFKpyIHirKXT0ZRSV+uLeHVa2nlKcil45BS7bCMsZhbA2x2d/AVXCsAJ48ovz69vbT6POmF5+tSozhdffCdggw64N6Tr1FQxX9WnX3U+JU8tY7rezVR7Uibl6+kMZJn1UjZrpSs3GIVczNCUK47P5LbTiZMj9cJOYedik7/aFTEhO3S4jujXr30nZvP1xzo1WGHFOnmcl3F49MzaiehAeDK'+
			'ZbVDypfXrcmVgfdbyj56SKz9QlC3tV73OipK48iA6na6LkyN1gu+/UXGQM0XNZLZM3p6YW4qt8H9kYHm+0LfVqTXT63U07CfcOE1ebyWHuemZ8xFMgzbUw261rmr6e/rflTqRs/jN7/5zeemjuyfpwhun4QLOgyTsOi+SNMRe+FTK7EUi9wTGVVhgUQyiYQd7tmZ6kh8gZZrPnwnX9PReffu3DwViosuOlaKtjYwl+ehUvDkgbEUlGuT550K3dxLl9er3bKWS94nJZ/pWEo6y72Sf0F4YYMYdJ5RGlIroD1Wyt6kU7Y3zJJXxTDwyl7/mnLtpEErvhRdU3lWGeVHaYNVhNSkbzNr8ZS0+XAXP0Z2Xfaqw+zGqY9d/vg4hh1jEK6ur/VQ4rzqyZhcG9adUVPP5FKmKcqvck9ieX0dlcBdWK5Ox2hZUiCzkc3Hr9tMqf'+
			'9Kthqecte08aCj9G1G66weYZ+0lEeYv77NRXo957BuhnlV0pfa/qD8qshkRPJ1XfnR7b+pZ9LPIyODCqvEV9Op8mqU34VGHte+w3C8/hi1b99e/ghy1Aedr9+ajl589otf/Mndu3f/YxhPGYGaDm+vdUq1wuQ4C3XjjSpuhMlIF66upJLWXyuczt3TivGzptxX0tW7nnvhj8J2lbW6VxWmPtF5f4HROuxg8sBQXM7LE2ENyynbcm1+mjoqtyJxGTZ5IzI2hoM0GWdyTZwS0bLq6/4J1DdOP1K0nIR11cTtOscatog1ZBf3Ov/KE2tUp+bzMtLn06Rli9pHyNY0SdthhGF5JRhdD+5n79Yfl3Mnq+4k9HnJp2jUanO+uLwcyZKLYeHiGsWny3ftdcZQRhG57qigl8l3eCZfndFQRg5rXU7jkSlv1A7LoVfm0tcpo5T7'+
			'eCNDxpS1ir/mf3G3Ek+Pmj+9+r+ks9FJQb04jdzP+mEuA5emJt1BOzFyiQzbss/nzXVtVGcjNz0ZV8I5yZX78+u2jJYb/S6uHZzPr6bzOiLVSDPPgZoc/etUILfD4XOdmAineLMEHeVaRx7Eo189lMJrhjR7lXvQiUeYSpoC4yJSjNm9GnHyZh+uTnNu576YRlPi951wlM9pw/v6ErVLb5NW6St+owSU30YRBTKlIGxx6W78BPkUlaGvD71Go+WQQXimjg7qlYl7q8JYwmyG00WGRrgug+LGGNeBAbqmjIyCTfErqWHZjdIZyG/qkqy3Td3mGoOqVw5ejuJ3zV9Pj/g0rXXmvuMLwm3qTN72BWBzXeWzLzsfl2lTIjIydnqyRHLp+hqly+jOSH/7cIO6GIop/fzqtv+2Y5TVB4IOUVjX9i9VYBOmHyRYbta06jrmH2'+
			'RXw7EOu/Xd6HR1LaIbfolD+vV6pFt8Hkdha714rXIMdKHosAJZJq6me38xf7138A7mSeSzAWUu+grc6ZT0PW00ZLEKuIQXDdVLRzEo4etxbbTlT4XhlVbWcYtVlqnI5s/LtZW0N3EUp06WEm5298/enYJZfk0UOmxfAZ0R49Nr0rL85VLRorwXaRSwDqemyfn1VS4Hx1mc4ij+nQKNOu4m/7xc+jy18yp0h1nyuWmgSgYdlogY+bK06dPKJqm4sgvTt5fkZKpulg5J1+XzTzJl6NuGaX+9Oittepuwgt+tnUTWHWhQt0q6ohGP6JVK9mGLSqs4JawVocSyaaWbfPuN6oOSr7iJ6reOQ//6dlZl0HU/udffXqH3ytS3/2znY0XtZh65CMsyyDtfHtqYCuXwcalwdZvTMupwa1i5/0rXl3vxP9KTXm9lX/9W8IZr0w/J'+
			'pS0n3VYH4VSdEeiY4r/RM9ptzo1c+loO+p4aby+NgR6WKC7vNwonq9E8b+gXWYoudrJ1y1K3odyOPPm23aRZp8P3s4uf0idnF9fC7envO17G02u8yYh60zdco/CXCO/du/fvv/71r6/eeOONX7377rvvCQAAAMBHkE9/+tOPP/bYY49/7nOfe+GRRx75lB6ZP5Hb0a3JzTM39YXJyvqOumueEstTwIcffvj+66+//vOf/vSnrwsAAADAR5x33nnn3vx39+7df/vziaeffvr5GzdufMy8SVhQr1C/VUeiTnOhjsf/NqNOC2VY64PJgPrBD37wT2+99dZ/CQAAAMBDyDwy9Zdf+crfpsPhY/X1YpnAf3ntruZEPXjwon8feT5J9R3jPAKFAQUAAAAPM/Oo1JtXV/9yOlnmc+k5tsfzm7pb1Yiabn3tfBBPHPv973//3s'+
			'9+9jNe4QEAAMBDzzRw9Mv/ee+9387H+kOYej5xGYk6HJ473VAz6GXxNPPLX/zi5wIAAACwE/7z3XffzNmuF6a/CLyMRC3LGkSfN8/89u237wkAAADATnjrrbd+Nf/65SHKXPHL13kp3RK9rovYdZ2mgDCiAAAAYDf87ne/e++Qkl1/Ti1yejGigsXb/CJiAAAAAHsiuzWi9AKc9XWe3wJArwSKCQUAAAB7xK+Mr7nMicrBPknnGwIAAACwV5rVysWNROXgJgAAAABcCL/OqxugejZuzAgAAADwsOI3lTZf53XHnfQGfAAAAAA7xCwBtRyPR6KKB17tAQAAwI7Jbk9h8zrv5ODsyvryK5gDAAAA7IyywKbGfJ2XLienv/Lej5EoAAAA2CvZ20Xni2bF8su8KOcIEwoAAAD2THlbp0ekbloX2Z1iPgEAAMC+SZ1pTXbb'+
			'l+D1XR54BgAAAHjYyW4EqmC3fQn2yUtn3wIAAACwN8yc8YW07C/crljuRp3YOw8AAAD2StkGr1knyixxoCaQZ/XHizwAAADYK34kSq9cYNaJKnvmlWGqxbUAAAAA7BX9Rq6MSM3/D95h3XxY7Q2DGQUAAAB7J7u54+HeedWQ0p4AAAAAdoz/CG+8d94MBhQAAADAmTLNSU8sb0ylYjwxJwoAAAB2TnZraGY/sRwAAAAAFIvxpBfbLF/omW1fyr4web6pVy9nNAoAAAB2jl+13MyJagwm5kMBAADAjtELbWoDajaoLl/nBV/jpcsFAQAAANgjZQTqtHrBci2eE+UX2wQAAADYM2qBzaTe2F2MKPXJnt8CBgAAAGCv+BXLixl10Bf1KuUnlhEpDCkAAADYM3oEqthF5nVeXc68vM5jLhQAAADsmOQHmBRmiYMy6tSMPm'+
			'FMAQAAwA7pbn3nJ5Z7Z+GyBwAAAAA74fSx3WIHJXvjMhIVjUJl/WoPAAAAYGf47V70dbt33vxVnl4jqnypx+s8AAAA2Dt6sU1xc6L0qFMO9ooBAAAA2Bt5WUNT3P55zWKbWdxw1dmlAAAAAOwRvbxBUnsLX4yo8tpOrRFVXvEBAAAA7JFiG2U35Wk+MiuW13lQi4PR2ggAAAAADzvlNV5FrVpw01xUv/q1XuJ1HgAAAOyQOh+qoI6bieXawirrRDESBQAAAHul7pfnJpbfdK7ML6YTAAAA7Jky/8nPEzfrRNXNh7XPxfLidR4AAADskoENdGgczq/vyunhYGajAwAAAOyJkQ3ULnGgR6T8ZCoAAACAPaOMKrPtS2QusVYUAAAAwIIaXKpG1GniVJl9Lst2LyLmaz0AAACA3bO8vbMbECtjSX/Cx0gUAAAA7JFiD5m5'+
			'UfMC5b2986obYbVyAAAAgKTWiJqZj806UUndOP2WkSle5wEAAMAO0VvglUXIT9fFfZ13+pFgyxdGowAAAGCPLBsQnw7F2khmsU29O3HSa0YxEgUAAAA75bSCwTIPqmK2fXFbvpSv8pgTBQAAAHulGFBmBQPx276crrZzoA7e8gIAAADYEVm9zqtLQE3Ukai6Qvny67eAAQAAANglyw4up/lQ0Yrlp3d954NqUOXqF1MKAAAA9oexjRzN13lnt9aQmjciBgAAANgb2njSH+DN3GwcqYlTdW4UI1EAAACwc+qaUct5M8SURJohK0woAAAA2D1uUMkYUZEBxXd5AAAAAFLf0OVlupMxovQaCMsFRqEAAAAAFvLypZ7Z9qXMPl9cLBfT5R4AAADAjjE7ujSLbYq1sMp+MYxGAQAAwN7Ji/FUBplu6huni2otBP3FHgAAAM'+
			'AeqUsbzINMiyGVzN55na1deJUHAAAAYI2peYDJjER5gyn6Wg8AAABgjxS7qBhTB3/jfJKMBzYgBgAAgD2iVynXA0vm67zTBbW5Xi6O52vMiQIAAIAdEy1Ebr/OW17p1T8MKAAAANg5/o1c8zqv3pCLtZWXJQ4AAAAA9shoQMmuWC6Xr/GiieYAAAAAeyIyoJJfJ+p0US6GVGYyOQAAAECL3zsvuxtZrVSOOQUAAAAgdZrTPBrVbEBc98srI1FqBXMAAACAPZLVvsJlsOnQc5yEieUAAAAAZZuX5aQeWyNKzYOqk8xZ5gAAAAB2jP9CL17iQI08VccYUAAAALBjykiUni8+c9AOTiNR8w7Fclm9XPhKDwAAAHaKeZXnuOydp1/l6blQjEQBAADATjnZR8oW0vaSHYmKDKZlZAoAAABgb2S19JOIXXzzMhIlYh3J5Qs9'+
			'xqIAAABgr/jBpPDrvLrli7DAJgAAAEBE83WeX51cj0oBAAAA7JXT4FIwudy+ztMTp07/0nBWOgAAAMBDTTAXqpzXDYjLcgZZnSflEAAAAGB3uIGkHO6dp77OS8v5EeMJAAAAwFCWPTioK9XaKgtvlld6AAAAAGDnjtuRKE2wRwwAAADA3jBWkNpHz45EueOTEwwoAAAA2CvzB3b1MJsP7m5qR56yACcv9AAAAGCXuJUKykbE81kzEpXdOcsbAAAAwF4pBpPf9qWZE2VGncp2L2z7AgAAADsmsoPsSJSI/Rpv+ToPAwoAAADAYkaisogZecrHY7MVDAAAAMAeiVYqOEQO/fpQjEYBAADAnknByuWNEdVsPMwSBwAAAAAnyq4udtsX42KxtpaVyzGkAAAAYLcs60OdDud/zbYvZTEpbTCpSeYAAAAAe6Nuhedf54lbJy'+
			'q7kSe9QicAAADA3jDGk7KH+q/zitviUAAAAAD2jR5Syv51nn99l9U7QAAAAIDd4VYqL8dmJCoHDpO+BwAAALA3ynQnhxmJqquTqwnmvM4DAACAPVP2ztPnM+GcqPLpnt5Hj5EoAAAA2CuRHRQutll2Ktb75jESBQAAAHvHL3Ng5kSVW9oJmxADAAAAXF7lld/VbV8woAAAAADOlC/zZowRVQ2mZU6U8iEAAAAAe8Yvc2CMqOZ1HsYTAAAAwImktn+Zf2/qG2ZzPetLAAAAAPZM7m37ktX6UHUjYownAAAA2DllBxc9CjVjXucdF8OprhU1n/NKDwAAAHZONaCWcz8n6n5d/2Axnk7n8990/MQTT3xKAAAAAHbC448//oTf8qWsYuBXLL/yw1XFmJo9fP7zn39aAAAAAHbCo7duPSZlMnnwZk4bUXdm06msWD5TXuvN'+
			'15588snbAgAAALATnvrsZ1+I9s0rVCPqwYMHP6mOlt9iUM3njz766JNf/epXvyQAAAAADznPPvvslx555JHTVKZiC2nMnKjj8fjqNOp0X9/0X+dNAb7w1FNPPS4AAAAADymPT3zmM595YT7Ogw/sbpSDO3fu/O/zzz//J9PhX50u6Fnoi0F1OBxuPvPMM3/28Y9//MFvfvObdwQAAADgIWIegfrCF77w15PN87H5PPWXe3rF3HnppZdu37xx482ktn0pGxDXjYgXg+r9999/74033vj522+/fW8yqO4JAAAAwEeQT37yk5+a3rQ9PQ1APfOJT3ziT3ujT2Vh8vnvww8/fKYxr77xjW/8w/TzsvEkahVz/ZqvHKvfHESWLhfiYTEfplwMN32sr5mwAv+iZ9Irt6mJup8e/6Wil8MbmmVZiOh6TYfOL5E2f47Hi/ydfC'+
			'p+ajwq731ZFfmb8vMyqPwKDWjtT6dF5WNS16PzIuspjd6vy29dXt38DvLGyCo2f039CcKIwq3+g7T6MJKrZzmQT6e1uItkCenkfSOnb2O9ttLxa9Lk/a+KmI0/H58Pp5dPXqf4+lHdyjXyLmhTvbKM/Pj4dZ32copYZRu1jag+bEtKbuKMrou658v1ukRy9vR61F80aQ7cNPEt7t2NsJ6enVrdoeX2x41sgd8tNPU9iLPKJ526Lq3+7PWlIzmitOn7EZHOar7QX6nzjRxnB7HMnTwf5n/gp4lzVAcHRHL02mTQ/r/3wx/+8NsHH+hkWX13unlVhVfC+M6pZLhOaEnA6Vz5r261eyvhJUwVn+5Ai4FSFFPFF3hRXiperSj1X1XYqqB8hpp0S4xXEDPHbA2kqAKYxjcZF+lwsPlY0iWXihuFl7X7GmWq6WwUnlP2Nf0S'+
			'JS5d8ng5TjrfVFxF3l5D8nGXdFYlojqdki4jiruWivy6fNJlodhyLyt3WQYNLLedfLmeXVojBZJ1mwnqemkbVW4fj7TlaAVKRh4fZ9OGRNq2ouq4zqPiXsfftHGVVl3+WnZdF7KT1eM7lax+a/t3ii0HuqINOFcZdZ3T10y+idJbErR/EbPAXoNuw8vxcTnWbUHE1tfk/Ff3Acn9ius0/QNTpL9WCcrUxCnS6FJfn7J2p9Os5Cxt3BjbKqyk9LgJX+n24i568CoclA46BMaA/x1h3Lj6nINwm07YhWfav9axym1U5yJZfdvoyWnkCdJgdK+rN/5eFKout24eBHkUutV1N7eGVuSntJ8s4zLOgV5Inf7fpO0SztVsK80HjRH1yiuv3H/w4MHXT4aUqvg1EaqSm45ZLpmc1bWmQarOuAqYUrdiNAlb3HsDIwrHdwYmbA'+
			'lQBZWie53wspNZN/CjUw42SNtpGKXhFEeNR3eis5IWsfkol86gHM9/R1cZal6qDknHq9PVlE1xFyi6FKQxKT8pciOXxlfu12vqXMukr59GtrTs2RoGvtH2jBeTv4s/fS2scw5jKOu67q+p8Bvlpe6Lk8/Lb+IW16kE97UMxtjRdc67lzZt2iAt/rVS0vLnKCxplVqNUxsULryid3plaOJUdcp3FuETrYu7KWVngKYgHfNDkDa2j2Vk2aWzHPuybjqnoD1q/+bBSlz9KPk10Is1Dlf2JSyvE6J8Oar0ekPA1I+zoxKQNcLU9SrTJdKalkGnZuPRMixldQzaU/JGgtJBPuzeQ3DtC1fy2NfbrPzo+p8HZS6BzLp/ru0/XR6WI38zB9e3ajfaiDBGhgurZ9A0MooY+8A8UIhNs46/yhCkX//WsHM7CuttiKicdZzmPJBt'+
			'cnP1wQcffP211147fYh3QwLu3Llz/8tf/vJPJs9/M3m4tfhsG62y+rTyrpEtbpRUJhzTabiMaYiuO6WtMyX1/Di/IlbhbmGbK1UoPtyiFEZxTMr46N0oZVLPe/IEykGnOewkRIwC9nJnpyx9OZryXMKo8ZQG4eLRstXOVtUrcWF5dGMrcTfh+bSJSp/+tRkhPl+yd6fzU1q5qj+X/9pISSuddtQhSu6/mvEK5eDTLDaPdNn1wozSq+MTVwYlvLX2ZNKm5DIG1Ub5fFvzytkrTC9/T1bToWo/W8ixMb85b3pyaT1Q3KT2QXRTmUrbqeVBekp8dXTncIjdia1nNWzfznQanTHl5fCdp/azVia+bkXh9tDl5Y0NHUaW1nioMs/GtZYnqK/Xlq3TD5t4N7bBRh8H7poHUHd8iPyt/PrwD+4hxN8vfrO/3tNN6lj/FR0pnT'+
			'jURZ8fV9Pf3/3oRz+669MYMk80v3Hjxo8nR7e9IjCW4fKbZdxwvRHWZIQLT6KwljCO2T5x5RU5TnFMT4W+oouz+k0BBTKUzkl6ldPf6ygJXSH9HKEmfyQ2DobKLq3PIWk6/iaYwRwCEWukKNmGsmQ7j8Onx5ShC1M/HR2SG+kM5NJGWaSgInQc3TzO9qnM+5Ug/caNtHW/iUvXy5TM6KL2V499HZK2jpi0BXUplKVX1wNl48NtZIjahvar5NAye3R6ix/TngI9M1K2Pn+iMjNxB8q8E2CsCzrlGMpzdtRN36luBDr5/4OuJx0HwzoR6adQ/r4AlzovKv+VLtGd7ZpcRWd367hyd8w5NIR8nkT50zVAJC6bXtgjvIHh9dXpWom3F2bQD3VHYVRYoX4fyOnz4jrpHPlJQXuI/Fw33l75qTwvI1BX+n6SDZwmm+dcJ5uP'+
			'jIwVKW3hiSvwoCPwClGCihx2QCk18umRk7CzF7GGgcQNbbPi1B2hrFTE5fqsHI5qXoVuHDosL5OWPXs5yrm0HUqKlNEobT4uFYZRekvcq8aeDs91fLrTOQe2Xg9E1uujySNzo83zTXU9K6PKGwZpxSCTjiLTaVe/jTJxdUXSBuM+5+4DQ5jG3Dd+euH18PWzMRQkbsuNPNpP1Mkt97V8tf1f10DIuTHIN3UGrsyih8UwrV6HuOOwgxPZLpePT2w6pROuaZvVSw47tV7HPJJFP5hsSkPOjdGt/fbabK/z1eE2umDFT6Tbw/SrfNzSXmLxYoP0OsZJL7xy/scyMvzPl2397D4cqDB7xutpMEXpPx9PJFskw8Z0fW+eA1Ve4WnS1kCWUanvzIfFo+5IvaJPQee3pmh7SiVqxM25SGM8NNeCRpddhV4zWCLCzu9y08jQNe'+
			'BSavNSZGjERYZnk/eRvC6sKN/NaF/UAW8wDmTUGZwT0A/D52NwzSi4lQ5BpNN4VB0reRLmv+6g0thQGRn5UZ736n2pD0ahrIQlQUfcMzR0mCL9uhDla/WzxBXK4FgzKkdPzrqDDeuBU75akY/C8h1IJHONcwkzclNHRgJZt+iQXjsy+knVCZ8+XYarrLStWk7Lhy45KN/T9WW+16Y4F7r6Iue4Lg2TMS474+4U+foIs8+Xqrvlep1vaFyK7V/WOvVyfWi4ubBGsoTXzwGF97aypl+8O3cx1i+pHZ1uHiCDeLYYhNcwOu9Pbl6ZjKd/9KNPJjy5JpMxdWtSGC9OgnxtiuC56dLtVOZNabzS8R1nGjx5Ggltw44MJ98JiAw6ZW+ILfd6HVpknDXhKjmrrCqtItbg6RkNpgPQtzqySSRnh+ETsMTGcNNhFrflnsoT419s'+
			'Ze4ZsyLb0zoqf3FhlXv+68iQ3Bo+ozjiIJRfFa5Rmh3jJTRY8uC1nVYs0qmbvvxcmiQI2yWojooWw0D8w0xPli106tnYS27yN6yr3tjfKFeUx7KibHv5H3WOfpSs24nXwFN7XctWbok0BoJIR//pcHv62JXryUBcjEJfz0edXHXXKeOuAeQ6USN/rw13wruOIdAzoLTRGrXJof88fq20ZpT13KcUvJJP66/uapjnwOp5j7UyqLJInE8ljLV4vGybdFTP/8Ag7NXRYqim844tV9Po1p1pwOi1P/zhD9+PRp48/weDObabgjdmtwAAAABJRU5ErkJggg==';
		me._interior_b__img.ggOverSrc=hs;
		el.ggId="Interior_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: -1;';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 56px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._interior_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._interior_b.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Exterior") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("2F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._interior_b.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._interior_b.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._interior_b.style.transition='';
				if (me._interior_b.ggCurrentLogicStateVisible == 0) {
					me._interior_b.style.visibility=(Number(me._interior_b.style.opacity)>0||!me._interior_b.style.opacity)?'inherit':'hidden';
					me._interior_b.ggVisible=true;
				}
				else if (me._interior_b.ggCurrentLogicStateVisible == 1) {
					me._interior_b.style.visibility="hidden";
					me._interior_b.ggVisible=false;
				}
				else {
					me._interior_b.style.visibility="hidden";
					me._interior_b.ggVisible=false;
				}
			}
		}
		me._interior_b.logicBlock_visible();
		me._interior_b.onclick=function (e) {
			player.openNext("{node7}","");
			me._extrerior_b.style.transition='none';
			me._extrerior_b.style.visibility=(Number(me._extrerior_b.style.opacity)>0||!me._extrerior_b.style.opacity)?'inherit':'hidden';
			me._extrerior_b.ggVisible=true;
			me._interior_b.style.transition='none';
			me._interior_b.style.visibility='hidden';
			me._interior_b.ggVisible=false;
			player.setVariableValue('contactpanel', false);
		}
		me._interior_b.onmouseenter=function (e) {
			me._interior_b__img.src=me._interior_b__img.ggOverSrc;
			me.elementMouseOver['interior_b']=true;
		}
		me._interior_b.onmouseleave=function (e) {
			me._interior_b__img.src=me._interior_b__img.ggNormalSrc;
			me.elementMouseOver['interior_b']=false;
		}
		me._interior_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._interior_bt=document.createElement('div');
		els=me._interior_bt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Interior_BT";
		el.ggDx=-3;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((125px + 0px) / 2) - 3px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 125px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._interior_bt.ggUpdateText=function() {
			var params = [];
			var hs = player._("Interior View", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._interior_bt.ggUpdateText();
		el.appendChild(els);
		me._interior_bt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._interior_bt.ggUpdatePosition=function (useTransition) {
		}
		me._interior_b.appendChild(me._interior_bt);
		el=me._back_icon_1=document.createElement('div');
		els=me._back_icon_1__img=document.createElement('img');
		els.className='ggskin ggskin_back_icon_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHiSURBVGhD7ZjRTcMwFEUbNmCDjsAvEhL9ZIt2Cz7LBsAEHaXwxxaUDdgg3ItfBI7tpImfG1vykZ5sKe31fYn9YmdVqVTKppE2irZt12gYQ5yapjlJf3lgeo/4RExhL39fDpowXmYz9qTSgIE3iKl33EHkLgvGpXkNjiKpxugixqAbNEMDv0l8IYYW6TKLGAmEps0Rscx8PhcYDC1YPpW8gcm18eqQv3kCozvj10J9ESYDZg/G8x9yqQzE838OcikrrqS1gNnk1UVrDG8CAd6ljQLGWX45HVmeWeX0bxZEfW/e6OoDDV9li0oi9AR8b8x7aWPwGX1CbGOS8A'+
			'LB/htYpYRCx6lugu50gtjvXO2hMgB00ichYn3USim1jKSDThIUQfg2cjv5STTQSp5EaICikghtp9XmK3RmJ9FIG0QEWIFCQjzMsOzyRRdzYHlEPJiuxQviNeowhCRUzsMRxJdwiIQW9aW4EysWo1OoD4T4bYeLWGX+nwumkNfr5AQIkqD5LYL7I/ZTJ/MN/9fSt5iVQB9JKDaJZ8SN6Vp8wPyt9PMEN8C3bSH5H2Fp0nh1qOaTQpPGq0M1nxSaNF4dijAf+tqXv3kCo76PBWWY74BhbpE7yjLfAeN8Eqm3H5VKJX9Wqx9gq0dkmviTdQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Back icon_1";
		el.ggDx=-53;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) - 53px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._back_icon_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._back_icon_1.ggUpdatePosition=function (useTransition) {
		}
		me._interior_b.appendChild(me._back_icon_1);
		me._right_bottom_corner_panel.appendChild(me._interior_b);
		el=me._extrerior_b=document.createElement('div');
		els=me._extrerior_b__img=document.createElement('img');
		els.className='ggskin ggskin_extrerior_b';
		hs=basePath + 'images/extrerior_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._extrerior_b__img.ggOverSrc=hs;
		el.ggId="Extrerior_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: -1;';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 56px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._extrerior_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._extrerior_b.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1)) || 
				((me.ggUserdata.tags.indexOf("2F") != -1)) || 
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("Exterior") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._extrerior_b.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._extrerior_b.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._extrerior_b.style.transition='';
				if (me._extrerior_b.ggCurrentLogicStateVisible == 0) {
					me._extrerior_b.style.visibility=(Number(me._extrerior_b.style.opacity)>0||!me._extrerior_b.style.opacity)?'inherit':'hidden';
					me._extrerior_b.ggVisible=true;
				}
				else if (me._extrerior_b.ggCurrentLogicStateVisible == 1) {
					me._extrerior_b.style.visibility="hidden";
					me._extrerior_b.ggVisible=false;
				}
				else {
					me._extrerior_b.style.visibility="hidden";
					me._extrerior_b.ggVisible=false;
				}
			}
		}
		me._extrerior_b.logicBlock_visible();
		me._extrerior_b.onclick=function (e) {
			player.openNext("{node51}","");
			me._extrerior_b.style.transition='none';
			me._extrerior_b.style.visibility='hidden';
			me._extrerior_b.ggVisible=false;
			me._interior_b.style.transition='none';
			me._interior_b.style.visibility=(Number(me._interior_b.style.opacity)>0||!me._interior_b.style.opacity)?'inherit':'hidden';
			me._interior_b.ggVisible=true;
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			player.setVariableValue('contactpanel', false);
		}
		me._extrerior_b.onmouseenter=function (e) {
			me._extrerior_b__img.src=me._extrerior_b__img.ggOverSrc;
			me.elementMouseOver['extrerior_b']=true;
		}
		me._extrerior_b.onmouseleave=function (e) {
			me._extrerior_b__img.src=me._extrerior_b__img.ggNormalSrc;
			me.elementMouseOver['extrerior_b']=false;
		}
		me._extrerior_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._exterior_bt=document.createElement('div');
		els=me._exterior_bt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Exterior_BT";
		el.ggDx=-3;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((125px + 0px) / 2) - 3px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 125px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._exterior_bt.ggUpdateText=function() {
			var params = [];
			var hs = player._("Exterior View", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._exterior_bt.ggUpdateText();
		el.appendChild(els);
		me._exterior_bt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._exterior_bt.ggUpdatePosition=function (useTransition) {
		}
		me._extrerior_b.appendChild(me._exterior_bt);
		el=me._back_icon=document.createElement('div');
		els=me._back_icon__img=document.createElement('img');
		els.className='ggskin ggskin_back_icon';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHiSURBVGhD7ZjRTcMwFEUbNmCDjsAvEhL9ZIt2Cz7LBsAEHaXwxxaUDdgg3ItfBI7tpImfG1vykZ5sKe31fYn9YmdVqVTKppE2irZt12gYQ5yapjlJf3lgeo/4RExhL39fDpowXmYz9qTSgIE3iKl33EHkLgvGpXkNjiKpxugixqAbNEMDv0l8IYYW6TKLGAmEps0Rscx8PhcYDC1YPpW8gcm18eqQv3kCozvj10J9ESYDZg/G8x9yqQzE838OcikrrqS1gNnk1UVrDG8CAd6ljQLGWX45HVmeWeX0bxZEfW/e6OoDDV9li0oi9AR8b8x7aWPwGX1CbGOS8A'+
			'LB/htYpYRCx6lugu50gtjvXO2hMgB00ichYn3USim1jKSDThIUQfg2cjv5STTQSp5EaICikghtp9XmK3RmJ9FIG0QEWIFCQjzMsOzyRRdzYHlEPJiuxQviNeowhCRUzsMRxJdwiIQW9aW4EysWo1OoD4T4bYeLWGX+nwumkNfr5AQIkqD5LYL7I/ZTJ/MN/9fSt5iVQB9JKDaJZ8SN6Vp8wPyt9PMEN8C3bSH5H2Fp0nh1qOaTQpPGq0M1nxSaNF4dijAf+tqXv3kCo76PBWWY74BhbpE7yjLfAeN8Eqm3H5VKJX9Wqx9gq0dkmviTdQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Back icon";
		el.ggDx=-53;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) - 53px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._back_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._back_icon.ggUpdatePosition=function (useTransition) {
		}
		me._extrerior_b.appendChild(me._back_icon);
		me._right_bottom_corner_panel.appendChild(me._extrerior_b);
		me.divSkin.appendChild(me._right_bottom_corner_panel);
		el=me._left_bottom_corner_panel=document.createElement('div');
		el.ggId="left bottom corner panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -1px;';
		hs+='height : 1080px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 1920px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left_bottom_corner_panel.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._left_bottom_corner_panel.ggUpdatePosition=function (useTransition) {
		}
		el=me._guide_b=document.createElement('div');
		els=me._guide_b__img=document.createElement('img');
		els.className='ggskin ggskin_guide_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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'+
			'pKIN9KsAAAAASUVORK5CYII=';
		me._guide_b__img.ggOverSrc=hs;
		el.ggId="Guide_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._guide_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._guide_b.onclick=function (e) {
			me._quick_guide.style.transition='none';
			me._quick_guide.style.visibility=(Number(me._quick_guide.style.opacity)>0||!me._quick_guide.style.opacity)?'inherit':'hidden';
			me._quick_guide.ggVisible=true;
			if (player.transitionsDisabled) {
				me._qg_screen_blur.style.transition='none';
			} else {
				me._qg_screen_blur.style.transition='all 500ms ease-in-out 0ms';
			}
			me._qg_screen_blur.style.opacity='1';
			me._qg_screen_blur.style.visibility=me._qg_screen_blur.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._quick_guide.style.transition='none';
			} else {
				me._quick_guide.style.transition='all 500ms ease-in-out 0ms';
			}
			me._quick_guide.style.opacity='1';
			me._quick_guide.style.visibility=me._quick_guide.ggVisible?'inherit':'hidden';
			player.setVariableValue('SlideShow_QG', Number("0.00"));
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility='hidden';
			me._right_top_corner_panel.ggVisible=false;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility='hidden';
			me._right_bottom_corner_panel.ggVisible=false;
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility='hidden';
			me._left_bottom_corner_panel.ggVisible=false;
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			if (player.transitionsDisabled) {
				me._screen_blur.style.transition='none';
			} else {
				me._screen_blur.style.transition='all 2000ms ease 200ms';
			}
			me._screen_blur.style.opacity='1';
			me._screen_blur.style.visibility=me._screen_blur.ggVisible?'inherit':'hidden';
			player.setVariableValue('Hotspot_Visibility', false);
		}
		me._guide_b.onmouseenter=function (e) {
			me._guide_b__img.src=me._guide_b__img.ggOverSrc;
			me.elementMouseOver['guide_b']=true;
			me._guide_h.logicBlock_alpha();
			me._guide_h.logicBlock_alpha();
		}
		me._guide_b.onmousedown=function (e) {
			me.elementMouseDown['guide_b']=true;
			me._guide_h.logicBlock_alpha();
			me._guide_h.logicBlock_alpha();
		}
		me._guide_b.onmouseup=function (e) {
			me.elementMouseDown['guide_b']=false;
			me._guide_h.logicBlock_alpha();
			me._guide_h.logicBlock_alpha();
		}
		me._guide_b.onmouseleave=function (e) {
			me._guide_b__img.src=me._guide_b__img.ggNormalSrc;
			me.elementMouseDown['guide_b']=false;
			me._guide_h.logicBlock_alpha();
			me._guide_h.logicBlock_alpha();
			me.elementMouseOver['guide_b']=false;
			me._guide_h.logicBlock_alpha();
			me._guide_h.logicBlock_alpha();
		}
		me._guide_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._guide_h=document.createElement('div');
		els=me._guide_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Guide_H";
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 50px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 0px 5px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._guide_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Guide", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._guide_h.ggUpdateText();
		el.appendChild(els);
		me._guide_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._guide_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['guide_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.elementMouseDown['guide_b'] == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._guide_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._guide_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._guide_h.style.transition='opacity 500ms ease 0ms';
				if (me._guide_h.ggCurrentLogicStateAlpha == 0) {
					me._guide_h.style.visibility=me._guide_h.ggVisible?'inherit':'hidden';
					me._guide_h.style.opacity=1;
				}
				else if (me._guide_h.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._guide_h.style.opacity == 0.0) { me._guide_h.style.visibility="hidden"; } }, 505);
					me._guide_h.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._guide_h.style.opacity == 0.0) { me._guide_h.style.visibility="hidden"; } }, 505);
					me._guide_h.style.opacity=0;
				}
			}
		}
		me._guide_h.logicBlock_alpha();
		me._guide_h.ggUpdatePosition=function (useTransition) {
		}
		me._guide_b.appendChild(me._guide_h);
		me._left_bottom_corner_panel.appendChild(me._guide_b);
		el=me._hide_o_b=document.createElement('div');
		els=me._hide_o_b__img=document.createElement('img');
		els.className='ggskin ggskin_hide_o_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACNCAYAAABlnJKbAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABsySURBVHgB7V15cBXF85/dhOBBJBxCJR5EsABF7p8iWkpERfEHikdpfcUDywMEFPjDKqr8Q7xKy388sLDAP0RFLEtRPEolgIYq9avIES8uERKKQxQUfhGBQN7+ul929vX29ux7eTnekrefqmTfzszOzO70dvd098xaqgmYOnXqENu2RzmOM8SyrPJkouN4+Q6/IJFI/Qwp62C6Wxb/2/oaTLcsXSh5jSW1Q+pJlsZr3LYc0g/dG6y/ActCOcdxQutKtsnLQX26n4nUBal+kd/JOtzypvrTwTH1VahXfE7uc6TXw+8aqLMaxnPVu+++W60yhJWuwMyZM0sSic'+
			'RM6NwN0Lkhit6EEm6YDpS/g97g+26cExG/uXT5yjC4uj18gO4DTwh9DgwC6b8uK7blpul6lfAcnLBzXQe5H0oU+hzzE/o37wu279ZrfFnctk3nbn01cJyzdOnS11UahBLMQw89NAk6+jwQTAm/SD8kOgABQtAPguT5qJ89aK8eeHOSD4/Wxdqx6DUCYYpEienIbfRDNZTTdWoC5NxDbFcpYz20DCUEXxnpJQh5cegYiO36kt0XBp+rfg6kXvJca+AQSjgiwSBXaWhoeA1qmEDfIG/ghYcosm7hrRI6KbNPIs4odxKvUcrIcQL5pP9eHm3bBd6z7RItr1u+JSf4kpA6+f1pzueDQDSKcEfWoMyxTH1LU461uxAOs4BwDvByAYIBYikHSvwSrip32MN1QgjD+8nSAoQgEBQlRCPBMUIVB8RQh/RQKAKERdqg+T7Rp1LP'+
			'g15rEithg8vfdvEaYdAdRviB+xfKpHuhyT3WwOEKIJoamm/TEyQWeLO/dJBYSMeVch8anFus88ky+k3kjZOyOo9TqEXqVm5ntbz22tP5blmdb7F6FEv31UX6q/sq9VlJ9yDcB9VhLFK3vgevLU3ovkodX79oeVBClajvERGdoNyS95e/vIaXh7et6D00ohzq+nLChAk+dcRHME5Dw/NILBYZHNpR3XGfeEDRQQmId0wPovvwvJtwf9NzZVLsSBqt3/dgWT2ewkrqofX5HpS+jhOFChKlRfQf3QdPbPF7Ytc7rhjyyjM4+nmSPllMfHn6GyNCj/sb2lbCNXwsg8UtJJoPaFqB/gEK7kw4zPRRJWVnYZTr77lYhnIG79wtE8aGLU6wKkSEuWU9rkXS+e+wl0C3QftB+x2oU2qTl1fBAXQIp7HITMnHdcnR4iLIdwv+e0'+
			'ynp3jt+xMCDAKJpn///gc3bdr0rXcPWm9Jche3s3yapgng+PHjR3fs2LHlz3379h88ePCfv/76q07lGImE3xrhs49kCUlxbmvgfbXEvVAUA4oAZWVlvUo6dy6Dn8VczHJA+gEgnHNQCS50Ex5ThFgQVKnUlL1t+/afVq1atfbQoUP1KsYJCXjJky/4tm3bajp37twJuMdAIJ6BaS5DW9wMOD6eFEkjRox4AYgiqdxIEg3TNm3cuGZZZeX3x44da1Ax2gWOHj1av2vXrp0dOnSo79Kly1mWoM8Q5X5IaWnp/ILp06ejrWWKV0AFFb2NmzatWbFy5ToVo13iD0BJSUlRp06dekqzWBcnAWEtswsKCkYpor0jqCw7fPhw3YoVK2Jiaeeorq5em2hoOBpmGgFD5g2oUw2hU00+Zdu8ZctPKka7x5EjR+p37tr1sy+Rzpbx'+
			'YNsVaCUa4rNOsopqa2v3qBh5gZ07d9Z6J8Su41m1HacEOUyjsmtwdMEUer+KkRcAVWYfPde2LjKtLy90mOmfwgqxAsZov6AGRGoBR9jUOqoLe0cnl2arGLmCDoVAcAu9zV3xnjdWO8Fi5CUsFk6ij7bnq2EOxJhY8hd87Km/y+ZTJ3KVipGfoF55H/NADuORBXHNSwpwjPwAD5pLsGgAmwdD+eI3VIx8gxY/CUcOr7VpzIXj+ONMYx6Tn6BxOjzdVjySq/HEC6aJkWdwHDHQCpFUen3KjS4RE0reAmnAZpF9NNLP5iGR9BhPrfMTYlipSzQpkaRSKwBi5DekVQs6/MXmUf0xYng+pOSJlUpTikyrYyU3BkIy5JIptqfDUPcAX1sTI3+gjbae85nZY2wfT9EzppjT5C34+ibFjLnJlY+BRWeOvLouRvuH9h15U2mmqg'+
			'Sm1T4RFSPvQBcCBGggGd7g/qDasM/iGyOvQD3T3kYLhNPYDmM5Dr8wRl7Bc0Bz36JLIzZG1vG4Tb6YLUb+wDF4qTVs4QpxFX+M/ECYZEl6q739SMh2EypkW4kY+QO6EaMmpEKu1OitPmLkJyzmQ6JpSCOFWhumy0pM+7JFARMnTiy78MILu65Zs2b/okWL4lWZrQEW7kKJp9BXgFBSFIll4cKFw+++++7h+vymm276Cf7+q2K0LNjOY5R4bEkM+faTiwjKysqKKLEgbrzxxoGvv/76MBWjReH5Esm5RpLD0IVsSUj7wOUYPXv27Cil33XXXf+DRyCmeEuSlgDXX9kEyObiJ6o2mPXr19ft27dP3E8Pieaxxx7rq2I0H2lmyIXc8eiL7Y0Y7rjjjsoPPvhg3MknnxzgNnPmzKn4+++/61966aWaDKtTpaWlHQcNGtSp'+
			'X79+xV27di3q1atXsVSutra2buvWrXV//vln/Y8//vjPnj17jqr2jBBdtpATiO93xKbXy5Yt2w96yyeff/75zVL+s88+O2rz5s11WC6snqFDhxa/+eabFQMGDChVWQAIaP/vv/9e9+233+7+7LPP9qRr74SFwG1sGsvLySOKogkH5/HHH6+S8pDzIAdCggirA8qMyZZYEMCJuo0YMaJ8xowZlyDxAuf5z/LlyyuAA2ZdZ2QgMAlqh7G9dShkZqQ92FEVTSB+trz44ovidBqJprKy0kg0ONvCAVctiO7duxdfddVVfYFrjUfiQX0KxZ06AeExEJrmOCQInBTwNnVW0cfMmTN/ArvMWikPBxCJBomD5+3evbv+8OHDraaDYNuoT4GucxNO+dNxu8hBEwdzSHtB4L6PNdBCJ4A/6Z577lkL4kXctBEH7ptvvhkvEc2CBQ'+
			'tafQqO7ePsDQkXuOEF6kQBC9GkG2UmQx+mTZ3q6Kk0PSYBOfNeeWWBijDQVfDqq69eLc2cEN99913NxRdfXMnT4c3vBLabcpxZgfK6f+/evfXV1dXitH3IkCHF559/fnG3bt2Khg0b1g1cE2W9e/fuampTApoExowZ8wmaB1SEMX78+Afw6LDwTM+YO23aNMenr7C4mFciTDDAXUZOmDAh3bbnauXKlZtBx1ilWhi333572S233NLrsssuK0eOksk1b7zxxpooGxnHjxv3gLLMX4ezJTnFFy9FDagX1NTU3JwJsSCuvPLKfq3hQli8ePFu9GWdfvrpbwOn+wQJM901KKZQMY6sbkPDXASkVg2o1JqUKK+tRhH09ddf39TUmQ4OVGv6nZB4kIuByFqcjnC0Uh7VaXjYKtiCiy68cE6ykE5hImnNmjVrVUQAs4++YMkd'+
			'06FDh0JTmQ0bNuzGGz7llFMC+sXgwYPL4FC3atWqtIY2nBY/9dRT5912221nAXF2rK+vbwBjXdqvuGAZEDu1H3300eZzzz23CHSd7lI57B9wp35gYT4Ktpw/VETQt2/fpIPX970JQkAFoMDN0Zl6TUoq4NdS30eEYDC0AQ1lpnycKs+bN2/19ddf/9WKFStqgKP0lQiroqICFd39oAwfCGtv+/btt44ePfpcUHjLxo4d22fy5MkDb7311tLCwsL6dNciNOHAw6674IILukkEjAAD4FlAVM7SpUsjEdsDbpLhUroWUZ5I8qbVEVy8xuNgONBUf+mlly4B20xyr3yYifyDLgSTvQVdCNdcc41RpD388MOiEgszpTKYIo/55ZdfxmWqg6CREWZHH2MfTWVaW1w2CUwU8V3JbK+QILOioMGkIxa0w5SXly9BIqHp6EJ47r'+
			'nnjNbgMBcCvPGdVAiQcFCPytS+gn3DPpoMjYioEI3Jl+gTSYr4kqh4QiLKpQ6Db/rs2bMvM+XDAKyBqe33pvyqqqr9Xbp0qQc7zFk8D8XVzTffXA7iq5brJmClPTB16tTzwnQlzGuqOPnwww/3AOGgXadMym+KjtVaQJHkbR3v/lE0Kr08wo6IplwRDL79b7/99ljToAGrr5o1a9bP6epBhdI0SKhXING89dZbW+rq6rwvzeFvmLb/OXz48G4lJSWnhNWPg9wUxRWJBvUa1KWkfCDCUnjmO3/77bfDKgdApZeuq6c2mOQedw7NVGxqnSN9BokFp50mSyoSC3ist6gMATMrY1mTCwGIaDeKkTPOOGMhesdNwVsI4ISXhOlEHKjXhHncFy1aNEZyabQlJMMdwreQLcCCcmSHAevySJPlFMVQU4gFgcQXlo82nffff79C'+
			'ykNnJQ4wGufCdJD58+dXqCYgjGjw3pcvXz5G5QC+besEJ6Rvj7vGMv7P+bU1UJHEWBMpD4kFHI5NMquj7SYTsz22CfrMqLAy6Ow0DTISXVPDRJFoTETozsja3GmZIB+up7FSyfOka0Cl9oOhqwVysakQiiJk71Le6tWrtzeVWBDg6+mXadlMXAhhsThgp2lyXDES4RdffCFahu+///7hbe1C0ARiCVuWNX6cQqnghs4qN24BDJuU0lF/ALtKk52H+LClyDqsLyygPB3RYCwO2GICMyPkCtmY+++8887/Sv1x9ZlRKgfwjT8SkCt5UuuS3AyvAD1vA6DoMIVNouELdQnVRID9ppeU/sQTT3yDdTZnFcIzzzwjihLgUk0mGLw3DHCX8pAI23pFhLgTOFV6tc3FmxnlgMtMmzZNNM6h3sKNcpkC9JIzeBoSydy5c2uxTh'+
			'wkkzUYo+bQDmSqG2dR0rXnnXded5UF0NBo0memT58+vK1mTU5YTK9yv8jmsEQpNqY1YVJMcXCz0Vs0iouLAw8Z7BueUUyvQjBdn86F8MMPP/zO0/r06ZN1vDDqM5ILAZ/N008/3WYKsCmmF2HrEDyHXdCWM6VJkyaJcS0gOpq1brpnz54BEz+wf58Yas4qhD179vwfT/v333+bFS/86KOPivc8bty4jJX3FoPAMOxALC+hprbSYHr06BEYWGT3X331VYubyA8ePBjQhbJdhQC2ly1cLMGMp0Y1Axs2bKiTRN2pp57aJiKJfiCUu4sQqVUDfF0SNeC0MsCsHjDE4UCB83C4amGceeaZIrfIZhUCcif0kmPcMP4B0X3THBGKwHuWLNxgja5RbQAebce3/bDpQnweAN5WOsyTTz4pRv7jWp/mRKVt3br1L54GPiVjfdms'+
			'QkDlGYPM8U+HV2QLjCbEe5byHnnkkTb36QU+uKbtMHT3KcpT2kqHwYdueruff/75imxnCJKOgQMfpshijK7JkBbmQmguMMLvhRdeEG0uGPKZ7UyxOaCuIk/pDQuaaktbLyh7P0myGwf45Zdfzko0LVmypFZKnzx5cqhdA2wpq0wBT5m4ELLBvHnzhplmim3JXWg4JuUwKeejxZYU0AtV2wGNV7NnzxatubhxUDZ+FZOtBOtL512+5JJLjFFyLb0KAe/NtAICXpa1bcldTN/81BMjWxE/Ui7EEQVu1YHKo5SHfpWmhBBovPPOO6JegSEEYX4aJGAgrGXNcSFkgjD/GYqipnrmWwKSWcXHYTRyofBygA5RFeJXGdNUZ1yYqAtbtI/AN7u5LoQw6LgfKa+tRRGH+FVZRSy9uSIQDnyzYbYhiqZMBlmqzyTqsL5169b9J2'+
			'zRPBLNrFmzqkz1p3MhmKCJxRR6MWPGjKpcKLpJEN2FH60HH3wwtVSWLMTXBcA4lZOlsjBjGAgPbaSUl806ZZjdjETdJawMisONGzfuxx2n8LykpKQIpstlgwYNKg1bR40cDF0MmW4slI5Yson7aSlcd911D3DLvxfegH8PTpnSSCtenuMrOH/BgpytrQ4b5GyIBnSCUaNHj24VEzsSDRjx3k/Xn3TEgnagXG4l+79AMB7zIIzDW1vNCUT7lnShXAIfnBR3gtDiqSmKME6XTYa55iLdRkYaYcSCqzZzvu8wCXFJJaUIx6bxmzQYnB5zCeAiy0zTW3zwuGVYU6bcOCDoN2qNTYXCNjJCIDGZiAXv8eqrr65UEYMvisFzDTD2ozOjAFRaw2wiCJyW4h5zmSrD6DdCH1Amuy1wIBfABfdhfifTRkZ79+4ViRTvDe8xmyCx'+
			'lkaABpjxzrfMxJK+yhYBaKIx2WgQ6IPBtzvTaS7OQPRuCxjegHVLXAfTkEjQsYhLTgYMGIB60z9hsbgmFwLeByc0rDsqxIKwuCji+VMmT6beJZX8HI5euARJuVR6JWQy29mxY8c+jCvJ9uMVuOMUHv/444+j6Qby559/Hm8KLTVtZIQbEYH4KYUp/f65c+fWqAgBZ0n0PLA+aYo7S1KO/FHIqBEM4rXXXhs+adKktP4lfHsx9rY1v3qCogdFkGm/mqjvOMVBCUZSS2yTVddS0dFjOFAcoCgJW42IwABqvRUqLupvjSUbV1xxRfdff/31xNiZoRnQjshCGvTNC7TlqoGmAvWIwYMHL0FPdjoRhYoo7gCBf0hk1dXVez7++OOaTHYN50Ciu+GGG0oHDhzY/fLLL++VySI5JJpt27b9kwu/ULaga6o1kuEOWofhgd/ash'+
			'dFkcSBO2KCwjs+040JOXCWcujQIdRXRFM8iJ1OPXr0KM62fg2wXFc25VsIuYAWSZpgvHBN1UgwgU/4ac3YcqK7EzgHchtc+4yrD3C5SlMHVusfIMJUayLTbyFEBTRc0/EWsrEAGW0WjpJDMlPoRfM4TQ6z27Q2TG1n+i2EXEJcxOZbjG8oeCIDCQe36rj22muTxrl0ynFLAO016HaYOHHix9h2tt9CyDUkvYWuWyt0Ujn+qXXEld5MgKwf/pJ2EL0Jc9++fbs350smFMhJwJay+7333qtZvHixb+qO1uTOnTsXSdN/7UJApT0qBrsAiPWfzpgLNUloi6+nu5zgxMKB++jiH/5G20lFRUX3iy66qOvZZ59dDOfFnTp16igtfEOAQlyP30fCRXBgFKxbvXr1ftwOLd1g4/QfiUaaxWkXQpSsvAiHhLg0HoivEc8nP/CA'+
			'w6fWlMssePXVyM+Soo6wsArTtxByhbFjx6YsvcLEx6bbk7UfLSZaSLcKQbsiIgc9a/YpvXrqJC1ka2diKZcI87iDKMzpfnYm6Kk0nUEnOUzCZT3eEhP3d3uaOeUaplUIeB5Ju4w09nSZCQ1p4OtrY7QM9CoEnOojt8FpOM6UVAQhsQrP0kuDfFNXxNylNaDjcFSEwVc7ontA70hW6BAOQ0nkRLT0xmg5WCwAPAn0VgeWFPivUjHyE6KLQJEgcL3PXYCqYuQdrJDNGQodEs6gE5PnsTjKXxgWAzROq5Xyf+tR2CcmRp7BsgLB4AjH02G0kY5TViyW8hKmEIfGZSaUWKg+YwjdjNG+wYnFJ30U2+5D22N40EyM/IQkZWw9O0oedCrRZWLkLyxhNay38lGy9MZT6/xGQDzRXTQDnuoYMQQ0EoxJ/MSEE4OgcdWAEox0bN'+
			'uPGPkDvkUZh+3tnmmw7sXIT0j6a1KH8XQXYneJVd38Bd/52z3xOx8DG/iy6VSM/IHofCZEFNBhvE2eY0tvXsLb1FmPPaMB28dRuNyK7TAxGOOwfTtmOs4JvbY6RvMhOR4pLRSKBYWtN2PkOVyGYlMlx+M2+M9xYsU3hh/JabXhIwQxYlD4P7DVmOIdQwPDY7R7SNZeve2HTd0A3oxJxca7fIZvv2ZqyHNXPh7wQhnY1g6I7l27Rna3pBgti9NOO63Y9wk/kucSzoFGgknmOp6iS3eAPqtXrxbZfCdG9NGjR49SvnumNuK56TW2su0qbyG+O1OiDslzzjkn6y+OxTix0LNnT98eNlQ0uahB10A1v5ASUJeSkrLevXvHXKad4+yzzy4vLi4ulT5Q4qRm0kvtY8eOvU53biClvbSRI0dWNHeP2hjRBeouffr0GWmyu2k6'+
			'qK+vX1VQXV19ZNiwYRWQWI6JvkBw91hQUNCxHLBr167aw4cPR3MTvxhZoQwwcODAMUVFRUmGYAmRCq7+snTlypXzCzABCKYWUiepoMzy0KGwsGP//v0HgpwrVonE0b/+/js3H7CM0SJAQoHxHA58YCQyBC/DbN2fsm3btlqPNu67774P4DCB7gruXcy0ZrzoeEPD0ePHjzdym0RCJUzNMB+V5DannnJfPqd2tuhOMjA5RJQ6Ql+cQJLjd7yyvHTXKtZ33zYZ8JfgfROWblBDqUksSOl6W3dURBOG8pbwnAoLC4ts2+4o1Su1A2kLly9ffk/yWp0Igz8LKG2IQtFEjHmWUgFiwbMCaLCgqKijiR75wHMPuOMvnErjv6ltiG1z72tHaMsxrIbgbTtSv5Xy7bXPH7yJdWubVkIYMFrOYvfo20/O0KdkXdAfPS6IhOOPXX'+
			'KUTCy0nnT3wfJqQM99XKd7O4EvXLiwBgrcQ65Q/Itc9Ny3WFtojCXQSlLXa25AO00MiJZt+2+IlLdYvxSvhxsjdVd4n1m+xVaCSr95DLTveuizHlDTYNC+OkI7nFh81lbyMic4gdFn69ZlMe6HsAWuI61BctNurKqqqtHpBbTQunXraoYOHVoLhSfoTilD5/VN6zeFzrT4/N1idXlviPAgKEdT5HplWXJ/lPJxE9o3xetihJYJxMV8tC9pCIIjwPVYW/SFNJW1OGEYXgpfm6w/gbBc4RrgrpNWrFixjKYX8ILr16+vBiX4B6jiYqi0hLJ/X9imxN5TrSlyd6kOkrpoWf5WJ0Mt9OASMUNv1hE4iEXbpxxMqVDWS39nstozUE8G1+h+eX12+2ZleG2A07A83g4Hf8ZccrB+oPX/WiCWD3k9AYJBANFsGjx48IdQSTnU'+
			'1D+gSBooVbE8eu5jmTRbpdh3QN/R+Zy7EBmd3LBPeMMkceT12SBOQ0UILafY2+2kUZhTDQQ4HhWhXr/d5yDt0aKEdoQBZ80G26XX6vbdtCrQZcdWVlb+INal0mASACp9LEk8gsz1KadUHhKWqstJSmjgsTrBD2Rwlhp6TvvC0ujsxSNIQU/hOgQ9SiJCbF8FuRe9XuRsTmo3U9o/Wr9JkTWdZ0rM8OJVwWEOzIZWqRBkyEuTH1oYBQ2hblMBnR5i6lzyQH5LbyCfJfgIiIkfrx0yEGGExh+2T8dhbzQd2HQEodhLoNtKOOFizpSeycvjZFI3ec7pCEkQa+gWqgJiWZqOUDQyJhiOe++9t1dYPliEVa5w5MgRddJJJ3m/2yOae1+ffvpprcoC/w+ajg+9LFthXQAAAABJRU5ErkJggg==';
		me._hide_o_b__img.ggOverSrc=hs;
		el.ggId="Hide O_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 55px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hide_o_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_o_b.onclick=function (e) {
			player.setVariableValue('View_option', false);
			me._left_bottom_view_icon_panel.style.transition='none';
			me._left_bottom_view_icon_panel.style.visibility=(Number(me._left_bottom_view_icon_panel.style.opacity)>0||!me._left_bottom_view_icon_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_view_icon_panel.ggVisible=true;
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility='hidden';
			me._left_bottom_corner_panel.ggVisible=false;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility='hidden';
			me._right_bottom_corner_panel.ggVisible=false;
			if (player.transitionsDisabled) {
				me._right_top_corner_panel.style.transition='none';
			} else {
				me._right_top_corner_panel.style.transition='all 0ms linear 0ms';
			}
			me._right_top_corner_panel.style.opacity='0';
			me._right_top_corner_panel.style.visibility='hidden';
		}
		me._hide_o_b.onmouseenter=function (e) {
			me._hide_o_b__img.src=me._hide_o_b__img.ggOverSrc;
			me.elementMouseOver['hide_o_b']=true;
			me._hide_o_h.logicBlock_alpha();
		}
		me._hide_o_b.onmouseleave=function (e) {
			me._hide_o_b__img.src=me._hide_o_b__img.ggNormalSrc;
			me.elementMouseOver['hide_o_b']=false;
			me._hide_o_h.logicBlock_alpha();
		}
		me._hide_o_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._hide_o_h=document.createElement('div');
		els=me._hide_o_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Hide O_H";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 50px);';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 0px 5px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hide_o_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Hide Options", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hide_o_h.ggUpdateText();
		el.appendChild(els);
		me._hide_o_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_o_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hide_o_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hide_o_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hide_o_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hide_o_h.style.transition='opacity 500ms ease 0ms';
				if (me._hide_o_h.ggCurrentLogicStateAlpha == 0) {
					me._hide_o_h.style.visibility=me._hide_o_h.ggVisible?'inherit':'hidden';
					me._hide_o_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hide_o_h.style.opacity == 0.0) { me._hide_o_h.style.visibility="hidden"; } }, 505);
					me._hide_o_h.style.opacity=0;
				}
			}
		}
		me._hide_o_h.logicBlock_alpha();
		me._hide_o_h.ggUpdatePosition=function (useTransition) {
		}
		me._hide_o_b.appendChild(me._hide_o_h);
		me._left_bottom_corner_panel.appendChild(me._hide_o_b);
		el=me._showreel_b=document.createElement('div');
		els=me._showreel_b__img=document.createElement('img');
		els.className='ggskin ggskin_showreel_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._showreel_b__img.ggOverSrc=hs;
		el.ggId="Showreel_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._showreel_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._showreel_b.onclick=function (e) {
			me._showreel_c_.style.transition='none';
			me._showreel_c_.style.visibility=(Number(me._showreel_c_.style.opacity)>0||!me._showreel_c_.style.opacity)?'inherit':'hidden';
			me._showreel_c_.ggVisible=true;
			if (player.transitionsDisabled) {
				me._showreel_c_.style.transition='none';
			} else {
				me._showreel_c_.style.transition='all 800ms ease 0ms';
			}
			me._showreel_c_.style.opacity='1';
			me._showreel_c_.style.visibility=me._showreel_c_.ggVisible?'inherit':'hidden';
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility='hidden';
			me._left_bottom_corner_panel.ggVisible=false;
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility='hidden';
			me._right_top_corner_panel.ggVisible=false;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility='hidden';
			me._right_bottom_corner_panel.ggVisible=false;
			if (me._showreel.ggApiPlayer) {
				if (me._showreel.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._showreel.ggApiPlayer.playVideo();
					};
					if (me._showreel.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._showreel.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._showreel.ggApiPlayerType == 'vimeo') {
					me._showreel.ggApiPlayer.play();
				}
			} else {
				player.playSound("Showreel","0");
			}
			if (player.transitionsDisabled) {
				me._screen_blur.style.transition='none';
			} else {
				me._screen_blur.style.transition='all 2000ms ease 200ms';
			}
			me._screen_blur.style.opacity='1';
			me._screen_blur.style.visibility=me._screen_blur.ggVisible?'inherit':'hidden';
			player.setVariableValue('Hotspot_Visibility', false);
		}
		me._showreel_b.onmouseenter=function (e) {
			me._showreel_b__img.src=me._showreel_b__img.ggOverSrc;
			me.elementMouseOver['showreel_b']=true;
			me._showreel_h.logicBlock_alpha();
		}
		me._showreel_b.onmouseleave=function (e) {
			me._showreel_b__img.src=me._showreel_b__img.ggNormalSrc;
			me.elementMouseOver['showreel_b']=false;
			me._showreel_h.logicBlock_alpha();
		}
		me._showreel_b.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['showreel_b']) {
				if (player.transitionsDisabled) {
					me._sr_close_b.style.transition='none';
				} else {
					me._sr_close_b.style.transition='all 1000ms ease-out 2000ms';
				}
				me._sr_close_b.ggParameter.rx=0;me._sr_close_b.ggParameter.ry=100;
				me._sr_close_b.style.transform=parameterToTransform(me._sr_close_b.ggParameter);
			}
		}
		me._showreel_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._showreel_h=document.createElement('div');
		els=me._showreel_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Showreel_H";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 50px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 0px 5px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._showreel_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Showreel", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._showreel_h.ggUpdateText();
		el.appendChild(els);
		me._showreel_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._showreel_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['showreel_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._showreel_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._showreel_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._showreel_h.style.transition='opacity 500ms ease 0ms';
				if (me._showreel_h.ggCurrentLogicStateAlpha == 0) {
					me._showreel_h.style.visibility=me._showreel_h.ggVisible?'inherit':'hidden';
					me._showreel_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._showreel_h.style.opacity == 0.0) { me._showreel_h.style.visibility="hidden"; } }, 505);
					me._showreel_h.style.opacity=0;
				}
			}
		}
		me._showreel_h.logicBlock_alpha();
		me._showreel_h.ggUpdatePosition=function (useTransition) {
		}
		me._showreel_b.appendChild(me._showreel_h);
		me._left_bottom_corner_panel.appendChild(me._showreel_b);
		el=me._previous_b=document.createElement('div');
		els=me._previous_b__img=document.createElement('img');
		els.className='ggskin ggskin_previous_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._previous_b__img.ggOverSrc=hs;
		el.ggId="Previous B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 40px;';
		hs+='left : 146px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._previous_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._previous_b.onclick=function (e) {
			player.openNext("{"+player.getLastVisitedNode()+"}","$(cur)");
		}
		me._previous_b.onmouseenter=function (e) {
			me._previous_b__img.src=me._previous_b__img.ggOverSrc;
			me.elementMouseOver['previous_b']=true;
			me._previous_h.logicBlock_alpha();
		}
		me._previous_b.onmouseleave=function (e) {
			me._previous_b__img.src=me._previous_b__img.ggNormalSrc;
			me.elementMouseOver['previous_b']=false;
			me._previous_h.logicBlock_alpha();
		}
		me._previous_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._back=document.createElement('div');
		els=me._back__img=document.createElement('img');
		els.className='ggskin ggskin_back';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAjdJREFUaEPtmc1NAzEQhZ87oAOSLjggQSqBVABUQDhSBaELbkTiwJUOSAcpYcigXcla+Wdmx+s40q7ECf+8z2OP3zgOZ/65M9ePGeDUEZwjwBEgogWAhXNuVzsi5ggQ0SeA2074xjn3UhPCBDAQ3+te1YzEaICIeIZYOuf2taIwCiAhfuecW9USz/OoAVoSrwZoTbwKoEXxYoBWxYsAWhafBSCibwBXgazyA+DJmG32JdJtNAsR0QHAhVFkrjvfF/zHFuR9DFAKgHKzF/4/g2y1ViQIQETXAL4KC5QOxyBsR0S3eSoCvkmTTl6qHYtfSzxVCoAt8gOAx4CqDwCvBrU89g1bcM/JDocTRSJpJTqff3cceRMQy/t1bYD475qZgz'+
			'PVMjVH1gvVgOhA7gG8aRcqCyBYpSKRSEAkt5IIoDIER4Gj4X/RSk8MUAui27K/A4BonaECqAgxTOHRw6wGEECYa2Iieg5kvmCpOgogA2GuiYmIXzk4Cv4XXJjRABGIIjUxEYVSatkI+EvDB0/qXSQXHxGFMtF0ABJRmjYhgKNLDe4W0xbSiNK0PR7ioZWPXpbNAURKWHam29AiNAUQyT6sO5rZmgFIiE8+GJ8coLMOnHX6F25/p9jttObw9W373wsSfbmQuexEh4T3XbO3evEIJN6RtGuRFc8DTgFgfc0Q18PFASJWWLPy6l94pohAyEmmIEa9B/UDFgfwTB4f1KTwEv5pEgDNnrG2nQGsK2jtP0fAuoLW/n9PYfsxDXJvEAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Back";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._back.ggUpdatePosition=function (useTransition) {
		}
		me._previous_b.appendChild(me._back);
		el=me._previous_h=document.createElement('div');
		els=me._previous_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Previous_H";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 50px);';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 0px 5px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._previous_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Previous view\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._previous_h.ggUpdateText();
		el.appendChild(els);
		me._previous_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._previous_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['previous_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._previous_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._previous_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._previous_h.style.transition='opacity 500ms ease 0ms';
				if (me._previous_h.ggCurrentLogicStateAlpha == 0) {
					me._previous_h.style.visibility=me._previous_h.ggVisible?'inherit':'hidden';
					me._previous_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._previous_h.style.opacity == 0.0) { me._previous_h.style.visibility="hidden"; } }, 505);
					me._previous_h.style.opacity=0;
				}
			}
		}
		me._previous_h.logicBlock_alpha();
		me._previous_h.ggUpdatePosition=function (useTransition) {
		}
		me._previous_b.appendChild(me._previous_h);
		me._left_bottom_corner_panel.appendChild(me._previous_b);
		me.divSkin.appendChild(me._left_bottom_corner_panel);
		el=me._left_bottom_view_icon_panel=document.createElement('div');
		el.ggId="Left bottom view icon panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left_bottom_view_icon_panel.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._left_bottom_view_icon_panel.ggUpdatePosition=function (useTransition) {
		}
		el=me._view_o_b=document.createElement('div');
		els=me._view_o_b__img=document.createElement('img');
		els.className='ggskin ggskin_view_o_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._view_o_b__img.ggOverSrc=hs;
		el.ggId="View O_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(10px) grayscale(0%); -webkit-backdrop-filter: blur(10px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._view_o_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._view_o_b.onclick=function (e) {
			player.setVariableValue('View_option', true);
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			me._left_bottom_view_icon_panel.style.transition='none';
			me._left_bottom_view_icon_panel.style.visibility='hidden';
			me._left_bottom_view_icon_panel.ggVisible=false;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
			if (
				(
					((me.ggUserdata.tags.indexOf("1F") != -1)) || 
					((me.ggUserdata.tags.indexOf("2F") != -1)) || 
					((me.ggUserdata.tags.indexOf("3F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._right_top_corner_panel.style.transition='none';
				} else {
					me._right_top_corner_panel.style.transition='all 0ms linear 0ms';
				}
				me._right_top_corner_panel.style.opacity='1';
				me._right_top_corner_panel.style.visibility=me._right_top_corner_panel.ggVisible?'inherit':'hidden';
			}
		}
		me._view_o_b.onmouseenter=function (e) {
			me._view_o_b__img.src=me._view_o_b__img.ggOverSrc;
			me.elementMouseOver['view_o_b']=true;
			me._view_o_h.logicBlock_alpha();
		}
		me._view_o_b.onmouseleave=function (e) {
			me._view_o_b__img.src=me._view_o_b__img.ggNormalSrc;
			me.elementMouseOver['view_o_b']=false;
			me._view_o_h.logicBlock_alpha();
		}
		me._view_o_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._view_o_h=document.createElement('div');
		els=me._view_o_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="View O_H";
		el.ggDy=-56;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 56px);';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 0px 0px 5px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._view_o_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("View Options", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._view_o_h.ggUpdateText();
		el.appendChild(els);
		me._view_o_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._view_o_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['view_o_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._view_o_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._view_o_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._view_o_h.style.transition='opacity 500ms ease 0ms';
				if (me._view_o_h.ggCurrentLogicStateAlpha == 0) {
					me._view_o_h.style.visibility=me._view_o_h.ggVisible?'inherit':'hidden';
					me._view_o_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._view_o_h.style.opacity == 0.0) { me._view_o_h.style.visibility="hidden"; } }, 505);
					me._view_o_h.style.opacity=0;
				}
			}
		}
		me._view_o_h.logicBlock_alpha();
		me._view_o_h.ggUpdatePosition=function (useTransition) {
		}
		me._view_o_b.appendChild(me._view_o_h);
		me._left_bottom_view_icon_panel.appendChild(me._view_o_b);
		me.divSkin.appendChild(me._left_bottom_view_icon_panel);
		el=me._quickguide_main=document.createElement('div');
		el.ggId="QuickGuide_Main";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 1080px;';
		hs+='left : calc(50% - ((1920px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1080px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1920px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._quickguide_main.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._quickguide_main.ggUpdatePosition=function (useTransition) {
		}
		el=me._quick_guide=document.createElement('div');
		el.ggId="Quick_Guide";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._quick_guide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._quick_guide.ggUpdatePosition=function (useTransition) {
		}
		el=me._mouse_qg=document.createElement('div');
		els=me._mouse_qg__img=document.createElement('img');
		els.className='ggskin ggskin_mouse_qg';
		hs=basePath + 'images/mouse_qg.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Mouse_QG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 700px;';
		hs+='left : calc(50% - ((1400px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((700px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 1400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mouse_qg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mouse_qg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._mouse_qg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._mouse_qg.ggCurrentLogicStateSize = newLogicStateSize;
				me._mouse_qg.style.transition='width 0s, height 0s';
				if (me._mouse_qg.ggCurrentLogicStateSize == 0) {
					me._mouse_qg.style.width='1400px';
					me._mouse_qg.style.height='700px';
					me._mouse_qg.style.left = 'calc(50% - (1400px / 2))';
					me._mouse_qg.style.top = 'calc(50% - (700px / 2))';
					skin.updateSize(me._mouse_qg);
				}
				else if (me._mouse_qg.ggCurrentLogicStateSize == 1) {
					me._mouse_qg.style.width='300px';
					me._mouse_qg.style.height='150px';
					me._mouse_qg.style.left = 'calc(50% - (300px / 2))';
					me._mouse_qg.style.top = 'calc(50% - (150px / 2))';
					skin.updateSize(me._mouse_qg);
				}
				else {
					me._mouse_qg.style.width='1400px';
					me._mouse_qg.style.height='700px';
					me._mouse_qg.style.left = 'calc(50% - (1400px / 2))';
					me._mouse_qg.style.top = 'calc(50% - (700px / 2))';
					skin.updateSize(me._mouse_qg);
				}
			}
		}
		me._mouse_qg.logicBlock_size();
		me._mouse_qg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') != Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mouse_qg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mouse_qg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mouse_qg.style.transition='width 0s, height 0s';
				if (me._mouse_qg.ggCurrentLogicStateVisible == 0) {
					me._mouse_qg.style.visibility=(Number(me._mouse_qg.style.opacity)>0||!me._mouse_qg.style.opacity)?'inherit':'hidden';
					me._mouse_qg.ggVisible=true;
				}
				else if (me._mouse_qg.ggCurrentLogicStateVisible == 1) {
					me._mouse_qg.style.visibility="hidden";
					me._mouse_qg.ggVisible=false;
				}
				else {
					me._mouse_qg.style.visibility="hidden";
					me._mouse_qg.ggVisible=false;
				}
			}
		}
		me._mouse_qg.logicBlock_visible();
		me._mouse_qg.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._mouse_qg);
		el=me._laptop_qg=document.createElement('div');
		els=me._laptop_qg__img=document.createElement('img');
		els.className='ggskin ggskin_laptop_qg';
		hs=basePath + 'images/laptop_qg.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Laptop_QG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 700px;';
		hs+='left : calc(50% - ((1400px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((700px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 1400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._laptop_qg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._laptop_qg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._laptop_qg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._laptop_qg.ggCurrentLogicStateSize = newLogicStateSize;
				me._laptop_qg.style.transition='width 0s, height 0s';
				if (me._laptop_qg.ggCurrentLogicStateSize == 0) {
					me._laptop_qg.style.width='1400px';
					me._laptop_qg.style.height='700px';
					me._laptop_qg.style.left = 'calc(50% - (1400px / 2))';
					me._laptop_qg.style.top = 'calc(50% - (700px / 2))';
					skin.updateSize(me._laptop_qg);
				}
				else if (me._laptop_qg.ggCurrentLogicStateSize == 1) {
					me._laptop_qg.style.width='300px';
					me._laptop_qg.style.height='150px';
					me._laptop_qg.style.left = 'calc(50% - (300px / 2))';
					me._laptop_qg.style.top = 'calc(50% - (150px / 2))';
					skin.updateSize(me._laptop_qg);
				}
				else {
					me._laptop_qg.style.width='1400px';
					me._laptop_qg.style.height='700px';
					me._laptop_qg.style.left = 'calc(50% - (1400px / 2))';
					me._laptop_qg.style.top = 'calc(50% - (700px / 2))';
					skin.updateSize(me._laptop_qg);
				}
			}
		}
		me._laptop_qg.logicBlock_size();
		me._laptop_qg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') != Number("1")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._laptop_qg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._laptop_qg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._laptop_qg.style.transition='width 0s, height 0s';
				if (me._laptop_qg.ggCurrentLogicStateVisible == 0) {
					me._laptop_qg.style.visibility=(Number(me._laptop_qg.style.opacity)>0||!me._laptop_qg.style.opacity)?'inherit':'hidden';
					me._laptop_qg.ggVisible=true;
				}
				else if (me._laptop_qg.ggCurrentLogicStateVisible == 1) {
					me._laptop_qg.style.visibility="hidden";
					me._laptop_qg.ggVisible=false;
				}
				else {
					me._laptop_qg.style.visibility="hidden";
					me._laptop_qg.ggVisible=false;
				}
			}
		}
		me._laptop_qg.logicBlock_visible();
		me._laptop_qg.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._laptop_qg);
		el=me._mobile_qg=document.createElement('div');
		els=me._mobile_qg__img=document.createElement('img');
		els.className='ggskin ggskin_mobile_qg';
		hs=basePath + 'images/mobile_qg.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Mobile_QG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 700px;';
		hs+='left : calc(50% - ((1400px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((700px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 1400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile_qg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_qg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._mobile_qg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._mobile_qg.ggCurrentLogicStateSize = newLogicStateSize;
				me._mobile_qg.style.transition='width 0s, height 0s';
				if (me._mobile_qg.ggCurrentLogicStateSize == 0) {
					me._mobile_qg.style.width='1400px';
					me._mobile_qg.style.height='700px';
					me._mobile_qg.style.left = 'calc(50% - (1400px / 2))';
					me._mobile_qg.style.top = 'calc(50% - (700px / 2))';
					skin.updateSize(me._mobile_qg);
				}
				else if (me._mobile_qg.ggCurrentLogicStateSize == 1) {
					me._mobile_qg.style.width='300px';
					me._mobile_qg.style.height='150px';
					me._mobile_qg.style.left = 'calc(50% - (300px / 2))';
					me._mobile_qg.style.top = 'calc(50% - (150px / 2))';
					skin.updateSize(me._mobile_qg);
				}
				else {
					me._mobile_qg.style.width='1400px';
					me._mobile_qg.style.height='700px';
					me._mobile_qg.style.left = 'calc(50% - (1400px / 2))';
					me._mobile_qg.style.top = 'calc(50% - (700px / 2))';
					skin.updateSize(me._mobile_qg);
				}
			}
		}
		me._mobile_qg.logicBlock_size();
		me._mobile_qg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') == Number("2")))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') != Number("2")))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile_qg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile_qg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile_qg.style.transition='width 0s, height 0s';
				if (me._mobile_qg.ggCurrentLogicStateVisible == 0) {
					me._mobile_qg.style.visibility=(Number(me._mobile_qg.style.opacity)>0||!me._mobile_qg.style.opacity)?'inherit':'hidden';
					me._mobile_qg.ggVisible=true;
				}
				else if (me._mobile_qg.ggCurrentLogicStateVisible == 1) {
					me._mobile_qg.style.visibility=(Number(me._mobile_qg.style.opacity)>0||!me._mobile_qg.style.opacity)?'inherit':'hidden';
					me._mobile_qg.ggVisible=true;
				}
				else if (me._mobile_qg.ggCurrentLogicStateVisible == 2) {
					me._mobile_qg.style.visibility="hidden";
					me._mobile_qg.ggVisible=false;
				}
				else {
					me._mobile_qg.style.visibility="hidden";
					me._mobile_qg.ggVisible=false;
				}
			}
		}
		me._mobile_qg.logicBlock_visible();
		me._mobile_qg.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._mobile_qg);
		el=me._qg_close_b=document.createElement('div');
		els=me._qg_close_b__img=document.createElement('img');
		els.className='ggskin ggskin_qg_close_b';
		hs=basePath + 'images/qg_close_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="QG_Close_B";
		el.ggDx=640;
		el.ggDy=-320;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 640px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 320px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._qg_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._qg_close_b.onclick=function (e) {
			me._quick_guide.style.transition='none';
			me._quick_guide.style.visibility='hidden';
			me._quick_guide.ggVisible=false;
			if (player.transitionsDisabled) {
				me._quick_guide.style.transition='none';
			} else {
				me._quick_guide.style.transition='all 500ms ease-out 0ms';
			}
			me._quick_guide.style.opacity='0';
			me._quick_guide.style.visibility='hidden';
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_top_corner_panel.ggVisible=true;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
			if (player.transitionsDisabled) {
				me._screen_blur.style.transition='none';
			} else {
				me._screen_blur.style.transition='all 100ms ease-out 0ms';
			}
			me._screen_blur.style.opacity='0';
			me._screen_blur.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._qg_screen_blur.style.transition='none';
			} else {
				me._qg_screen_blur.style.transition='all 0ms ease-in-out 0ms';
			}
			me._qg_screen_blur.style.opacity='0';
			me._qg_screen_blur.style.visibility='hidden';
			player.setVariableValue('Hotspot_Visibility', true);
		}
		me._qg_close_b.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._qg_close_b);
		el=me._left_02=document.createElement('div');
		els=me._left_02__img=document.createElement('img');
		els.className='ggskin ggskin_left_02';
		hs=basePath + 'images/left_02.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Left_02";
		el.ggDx=-630;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) - 630px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_02.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') > Number("1")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._left_02.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._left_02.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._left_02.style.transition='';
				if (me._left_02.ggCurrentLogicStateVisible == 0) {
					me._left_02.style.visibility=(Number(me._left_02.style.opacity)>0||!me._left_02.style.opacity)?'inherit':'hidden';
					me._left_02.ggVisible=true;
				}
				else if (me._left_02.ggCurrentLogicStateVisible == 1) {
					me._left_02.style.visibility="hidden";
					me._left_02.ggVisible=false;
				}
				else {
					me._left_02.style.visibility=(Number(me._left_02.style.opacity)>0||!me._left_02.style.opacity)?'inherit':'hidden';
					me._left_02.ggVisible=true;
				}
			}
		}
		me._left_02.logicBlock_visible();
		me._left_02.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._left_02);
		el=me._left_01=document.createElement('div');
		els=me._left_01__img=document.createElement('img');
		els.className='ggskin ggskin_left_01';
		hs=basePath + 'images/left_01.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="left_01";
		el.ggDx=-630;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) - 630px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_01.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') > Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') == Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._left_01.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._left_01.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._left_01.style.transition='';
				if (me._left_01.ggCurrentLogicStateVisible == 0) {
					me._left_01.style.visibility=(Number(me._left_01.style.opacity)>0||!me._left_01.style.opacity)?'inherit':'hidden';
					me._left_01.ggVisible=true;
				}
				else if (me._left_01.ggCurrentLogicStateVisible == 1) {
					me._left_01.style.visibility="hidden";
					me._left_01.ggVisible=false;
				}
				else {
					me._left_01.style.visibility=(Number(me._left_01.style.opacity)>0||!me._left_01.style.opacity)?'inherit':'hidden';
					me._left_01.ggVisible=true;
				}
			}
		}
		me._left_01.logicBlock_visible();
		me._left_01.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SlideShow_QG') >= Number("0")))
				)
			) {
				player.setVariableValue('SlideShow_QG', player.getVariableValue('SlideShow_QG') - Number("1.00"));
			}
		}
		me._left_01.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._left_01);
		el=me._right_02=document.createElement('div');
		els=me._right_02__img=document.createElement('img');
		els.className='ggskin ggskin_right_02';
		hs=basePath + 'images/right_02.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Right_02";
		el.ggDx=630;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 630px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_02.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') >= Number("2")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') < Number("2")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._right_02.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._right_02.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._right_02.style.transition='';
				if (me._right_02.ggCurrentLogicStateVisible == 0) {
					me._right_02.style.visibility=(Number(me._right_02.style.opacity)>0||!me._right_02.style.opacity)?'inherit':'hidden';
					me._right_02.ggVisible=true;
				}
				else if (me._right_02.ggCurrentLogicStateVisible == 1) {
					me._right_02.style.visibility="hidden";
					me._right_02.ggVisible=false;
				}
				else {
					me._right_02.style.visibility=(Number(me._right_02.style.opacity)>0||!me._right_02.style.opacity)?'inherit':'hidden';
					me._right_02.ggVisible=true;
				}
			}
		}
		me._right_02.logicBlock_visible();
		me._right_02.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._right_02);
		el=me._right_01=document.createElement('div');
		els=me._right_01__img=document.createElement('img');
		els.className='ggskin ggskin_right_01';
		hs=basePath + 'images/right_01.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Right_01";
		el.ggDx=630;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 630px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_01.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') < Number("2")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 2))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._right_01.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._right_01.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._right_01.style.transition='';
				if (me._right_01.ggCurrentLogicStateVisible == 0) {
					me._right_01.style.visibility=(Number(me._right_01.style.opacity)>0||!me._right_01.style.opacity)?'inherit':'hidden';
					me._right_01.ggVisible=true;
				}
				else if (me._right_01.ggCurrentLogicStateVisible == 1) {
					me._right_01.style.visibility="hidden";
					me._right_01.ggVisible=false;
				}
				else {
					me._right_01.style.visibility=(Number(me._right_01.style.opacity)>0||!me._right_01.style.opacity)?'inherit':'hidden';
					me._right_01.ggVisible=true;
				}
			}
		}
		me._right_01.logicBlock_visible();
		me._right_01.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SlideShow_QG') < Number("2")))
				)
			) {
				player.setVariableValue('SlideShow_QG', player.getVariableValue('SlideShow_QG') + Number("1.00"));
			}
		}
		me._right_01.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._right_01);
		el=me._qg_outside_close_b=document.createElement('div');
		el.ggId="QG_Outside_close_B";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -5;';
		hs+='border : 0px solid #000000;';
		hs+='height : 1100px;';
		hs+='left : calc(50% - ((1940px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1940px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._qg_outside_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._qg_outside_close_b.onclick=function (e) {
			me._quick_guide.style.transition='none';
			me._quick_guide.style.visibility='hidden';
			me._quick_guide.ggVisible=false;
			if (player.transitionsDisabled) {
				me._quick_guide.style.transition='none';
			} else {
				me._quick_guide.style.transition='all 500ms ease-out 0ms';
			}
			me._quick_guide.style.opacity='0';
			me._quick_guide.style.visibility='hidden';
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_top_corner_panel.ggVisible=true;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
			if (player.transitionsDisabled) {
				me._screen_blur.style.transition='none';
			} else {
				me._screen_blur.style.transition='all 100ms ease-out 0ms';
			}
			me._screen_blur.style.opacity='0';
			me._screen_blur.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._qg_screen_blur.style.transition='none';
			} else {
				me._qg_screen_blur.style.transition='all 0ms ease-in-out 0ms';
			}
			me._qg_screen_blur.style.opacity='0';
			me._qg_screen_blur.style.visibility='hidden';
			player.setVariableValue('Hotspot_Visibility', true);
		}
		me._qg_outside_close_b.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._qg_outside_close_b);
		me._quickguide_main.appendChild(me._quick_guide);
		el=me._qg_screen_blur=document.createElement('div');
		el.ggId="QG_Screen_Blur";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='border : 0px solid #000000;';
		hs+='height : 64.81%;';
		hs+='left : calc(50% - ((72.92% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64.81% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 72.92%;';
		hs+='pointer-events:none;';
		hs+='backdrop-filter: blur(20px) grayscale(0%); -webkit-backdrop-filter: blur(20px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._qg_screen_blur.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._qg_screen_blur.ggUpdatePosition=function (useTransition) {
		}
		me._quickguide_main.appendChild(me._qg_screen_blur);
		me.divSkin.appendChild(me._quickguide_main);
		el=me._showreel_c_=document.createElement('div');
		el.ggId="Showreel_c ";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._showreel_c_.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._showreel_c_.ggUpdatePosition=function (useTransition) {
		}
		el=me._sr_outside_close=document.createElement('div');
		el.ggId="SR_Outside_close";
		el.ggDx=0;
		el.ggDy=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -5;';
		hs+='border : 0px solid #000000;';
		hs+='height : 1100px;';
		hs+='left : calc(50% - ((1940px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1100px + 0px) / 2) - 3px);';
		hs+='visibility : inherit;';
		hs+='width : 1940px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sr_outside_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sr_outside_close.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._showreel_c_.style.transition='none';
			} else {
				me._showreel_c_.style.transition='all 500ms ease-out 0ms';
			}
			me._showreel_c_.style.opacity='0';
			me._showreel_c_.style.visibility='hidden';
			me._showreel_c_.style.transition='none';
			me._showreel_c_.style.visibility='hidden';
			me._showreel_c_.ggVisible=false;
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_top_corner_panel.ggVisible=true;
			if (me._showreel.ggApiPlayer) {
				if (me._showreel.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._showreel.ggApiPlayer.pauseVideo();
						me._showreel.ggApiPlayer.seekTo(0);
					};
					if (me._showreel.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._showreel.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._showreel.ggApiPlayerType == 'vimeo') {
					me._showreel.ggApiPlayer.pause();
					me._showreel.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("Showreel");
			}
			if (player.transitionsDisabled) {
				me._sr_close_b.style.transition='none';
			} else {
				me._sr_close_b.style.transition='all 1000ms ease-out 0ms';
			}
			me._sr_close_b.ggParameter.rx=0;me._sr_close_b.ggParameter.ry=0;
			me._sr_close_b.style.transform=parameterToTransform(me._sr_close_b.ggParameter);
			if (player.transitionsDisabled) {
				me._screen_blur.style.transition='none';
			} else {
				me._screen_blur.style.transition='all 100ms ease-out 0ms';
			}
			me._screen_blur.style.opacity='0';
			me._screen_blur.style.visibility='hidden';
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			player.setVariableValue('Hotspot_Visibility', true);
		}
		me._sr_outside_close.ggUpdatePosition=function (useTransition) {
		}
		me._showreel_c_.appendChild(me._sr_outside_close);
		el=me._showreel=document.createElement('div');
		me._showreel.seekbars = [];
			me._showreel.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._showreel.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._showreel.seekbars.length; i++) {
					var seekbar = me.findElements(me._showreel.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._showreel.hasChildNodes()) {
				me._showreel.removeChild(me._showreel.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._showreel.ggVideoNotLoaded == false && me._showreel.ggDeactivate && player.isPlaying('showreel')) { me._showreel.ggDeactivate(); }
				me._showreel.ggVideoNotLoaded = true;
				return;
			}
			me._showreel.ggVideoNotLoaded = false;
			me._showreel__vid=document.createElement('iframe');
			me._showreel__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=0&amp;controls=1&amp;loop=1&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._showreel__vid.setAttribute('src', ggVideoUrl);
			me._showreel__vid.setAttribute('width', '100%');
			me._showreel__vid.setAttribute('height', '100%');
			me._showreel__vid.setAttribute('allow', 'autoplay');
			me._showreel__vid.setAttribute('allowfullscreen', 'true');
			me._showreel__vid.setAttribute('style', 'border:none; ; ;');
			me._showreel.appendChild(me._showreel__vid);
			me._showreel__vid.id = 'youtube-video';
			me._showreel.ggYoutubeApiReady = function() {
				me._showreel.ggApiPlayerType = 'youtube';
				me._showreel.ggApiPlayerReady = false;
				me._showreel.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._showreel.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._showreel.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._showreel.ggMediaEnded) {
								me._showreel.ggMediaEnded();
							}
							if (event.data == 1 && me._showreel.ggActivate) {
								me._showreel.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._showreel.ggDeactivate) {
								me._showreel.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'Showreel' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._showreel.ggApiPlayer.unMute();
						if (args.state == 1) skin._showreel.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._showreel.ggApiPlayer.isMuted()) skin._showreel.ggApiPlayer.unMute(); else skin._showreel.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'Showreel' || args.id == '_main') {
						if (args.type == 'set') skin._showreel.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._showreel.ggApiPlayer.setVolume(skin._showreel.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._showreel.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._showreel.ggYoutubeApiReady();}
		}
		el.ggId="Showreel";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 633px;';
		hs+='left : calc(50% - ((1200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((633px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._showreel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._showreel.ggUpdatePosition=function (useTransition) {
		}
		me._showreel_c_.appendChild(me._showreel);
		el=me._sr_close_b=document.createElement('div');
		els=me._sr_close_b__img=document.createElement('img');
		els.className='ggskin ggskin_sr_close_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="SR_Close_B";
		el.ggDx=0;
		el.ggDy=250;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 250px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sr_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sr_close_b.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._showreel_c_.style.transition='none';
			} else {
				me._showreel_c_.style.transition='all 500ms ease-out 0ms';
			}
			me._showreel_c_.style.opacity='0';
			me._showreel_c_.style.visibility='hidden';
			me._showreel_c_.style.transition='none';
			me._showreel_c_.style.visibility='hidden';
			me._showreel_c_.ggVisible=false;
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_top_corner_panel.ggVisible=true;
			if (me._showreel.ggApiPlayer) {
				if (me._showreel.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._showreel.ggApiPlayer.pauseVideo();
						me._showreel.ggApiPlayer.seekTo(0);
					};
					if (me._showreel.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._showreel.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._showreel.ggApiPlayerType == 'vimeo') {
					me._showreel.ggApiPlayer.pause();
					me._showreel.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("Showreel");
			}
			if (player.transitionsDisabled) {
				me._sr_close_b.style.transition='none';
			} else {
				me._sr_close_b.style.transition='all 1000ms ease-out 0ms';
			}
			me._sr_close_b.ggParameter.rx=0;me._sr_close_b.ggParameter.ry=0;
			me._sr_close_b.style.transform=parameterToTransform(me._sr_close_b.ggParameter);
			if (player.transitionsDisabled) {
				me._screen_blur.style.transition='none';
			} else {
				me._screen_blur.style.transition='all 100ms ease-out 0ms';
			}
			me._screen_blur.style.opacity='0';
			me._screen_blur.style.visibility='hidden';
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.style.transition='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			player.setVariableValue('Hotspot_Visibility', true);
		}
		me._sr_close_b.onmouseenter=function (e) {
			me.elementMouseOver['sr_close_b']=true;
		}
		me._sr_close_b.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._sr_close_bg.style.transition='none';
			} else {
				me._sr_close_bg.style.transition='all 500ms ease-out 0ms';
			}
			me._sr_close_bg.style.opacity='0';
			me._sr_close_bg.style.visibility='hidden';
			me.elementMouseOver['sr_close_b']=false;
		}
		me._sr_close_b.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['sr_close_b']) {
				if (player.transitionsDisabled) {
					me._sr_close_bg.style.transition='none';
				} else {
					me._sr_close_bg.style.transition='all 500ms ease-out 0ms';
				}
				me._sr_close_bg.style.opacity='1';
				me._sr_close_bg.style.visibility=me._sr_close_bg.ggVisible?'inherit':'hidden';
			}
		}
		me._sr_close_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._sr_close_bg=document.createElement('div');
		els=me._sr_close_bg__img=document.createElement('img');
		els.className='ggskin ggskin_sr_close_bg';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="SR_Close_BG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -2;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sr_close_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sr_close_bg.ggUpdatePosition=function (useTransition) {
		}
		me._sr_close_b.appendChild(me._sr_close_bg);
		me._showreel_c_.appendChild(me._sr_close_b);
		me.divSkin.appendChild(me._showreel_c_);
		el=me._hotspots=document.createElement('div');
		el.ggId="Hotspots";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspots.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._hotspots);
		el=me._blur=document.createElement('div');
		el.ggId="Blur";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._blur.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._blur.ggUpdatePosition=function (useTransition) {
		}
		el=me._screen_blur=document.createElement('div');
		el.ggId="Screen_Blur";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -10;';
		hs+='background : rgba(0,0,0,0.294118);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='backdrop-filter: blur(5px) grayscale(0%); -webkit-backdrop-filter: blur(5px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_blur.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._screen_blur.ggUpdatePosition=function (useTransition) {
		}
		me._blur.appendChild(me._screen_blur);
		me.divSkin.appendChild(me._blur);
		el=me._floorplan_main=document.createElement('div');
		el.ggId="FloorPlan_Main";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 1080px;';
		hs+='left : calc(50% - ((1920px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1080px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1920px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_main.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._floorplan_main.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplan=document.createElement('div');
		el.ggId="FloorPlan";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 900px;';
		hs+='left : calc(50% - ((1200px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((900px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 1200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplan_bg=document.createElement('div');
		els=me._floorplan_bg__img=document.createElement('img');
		els.className='ggskin ggskin_floorplan_bg';
		hs=basePath + 'images/floorplan_bg.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="FloorPlan_BG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 900px;';
		hs+='left : calc(50% - ((1200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((900px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplans=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FirstFloor';
		el.ggId="Floorplans";
		el.ggDx=100;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 840px;';
		hs+='left : calc(50% - ((900px + 0px) / 2) + 100px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((840px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 900px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplans.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplans.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._floorplans.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplans.ggCalculateFloorplanSize(mapDetails);
				me._floorplans.ggShowSimpleFloorplan(mapDetails);
				me._floorplans.ggPlaceMarkersOnSimpleFloorplan();
			}
		}
		me._floorplans.ggUpdatePosition=function (useTransition) {
			me._floorplans.ggUpdateConditionResize();
		}
		me._floorplan_bg.appendChild(me._floorplans);
		el=me._fp_close_b=document.createElement('div');
		els=me._fp_close_b__img=document.createElement('img');
		els.className='ggskin ggskin_fp_close_b';
		hs=basePath + 'images/fp_close_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="FP_Close_B";
		el.ggDx=540;
		el.ggDy=-422;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: 2;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 540px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 422px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fp_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fp_close_b.onclick=function (e) {
			me._floorplan.style.transition='none';
			me._floorplan.style.visibility='hidden';
			me._floorplan.ggVisible=false;
			if (player.transitionsDisabled) {
				me._fp_screen_blur.style.transition='none';
			} else {
				me._fp_screen_blur.style.transition='all 0ms ease-out 0ms';
			}
			me._fp_screen_blur.style.opacity='0';
			me._fp_screen_blur.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._floorplan.style.transition='none';
			} else {
				me._floorplan.style.transition='all 500ms ease-out 0ms';
			}
			me._floorplan.style.opacity='0';
			me._floorplan.style.visibility='hidden';
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_top_corner_panel.ggVisible=true;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.style.opacity='0.5';
			me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.style.opacity='0.5';
			me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.style.opacity='0.5';
			me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.ggParameter.sx=1;me._floorswitch_01.ggParameter.sy=1;
			me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.ggParameter.sx=1;me._floorswitch_02.ggParameter.sy=1;
			me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.ggParameter.sx=1;me._floorswitch_03.ggParameter.sy=1;
			me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
			player.setVariableValue('Map_Pin_Normal_E', false);
			player.setVariableValue('Map_Pin_active_E', false);
			player.setVariableValue('Hotspot_Visibility', true);
			if (player.transitionsDisabled) {
				me._screen_blur.style.transition='none';
			} else {
				me._screen_blur.style.transition='all 100ms ease 200ms';
			}
			me._screen_blur.style.opacity='0';
			me._screen_blur.style.visibility='hidden';
		}
		me._fp_close_b.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me._fp_close_b);
		el=me._floorswitch_01=document.createElement('div');
		els=me._floorswitch_01__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FloorSwitch 01";
		el.ggDx=-420;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) - 420px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floorswitch_01.ggUpdateText=function() {
			var params = [];
			var hs = player._("First Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floorswitch_01.ggUpdateText();
		el.appendChild(els);
		me._floorswitch_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorswitch_01.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2F") == -1)) && 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floorswitch_01.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floorswitch_01.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floorswitch_01.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms';
				if (me._floorswitch_01.ggCurrentLogicStateScaling == 0) {
					me._floorswitch_01.ggParameter.sx = 1.2;
					me._floorswitch_01.ggParameter.sy = 1.2;
					me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
				}
				else if (me._floorswitch_01.ggCurrentLogicStateScaling == 1) {
					me._floorswitch_01.ggParameter.sx = 1;
					me._floorswitch_01.ggParameter.sy = 1;
					me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
				}
				else {
					me._floorswitch_01.ggParameter.sx = 1;
					me._floorswitch_01.ggParameter.sy = 1;
					me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
				}
			}
		}
		me._floorswitch_01.logicBlock_scaling();
		me._floorswitch_01.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2F") == -1)) && 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floorswitch_01.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floorswitch_01.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floorswitch_01.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms';
				if (me._floorswitch_01.ggCurrentLogicStateAlpha == 0) {
					me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
					me._floorswitch_01.style.opacity=1;
				}
				else if (me._floorswitch_01.ggCurrentLogicStateAlpha == 1) {
					me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
					me._floorswitch_01.style.opacity=0.5;
				}
				else {
					me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
					me._floorswitch_01.style.opacity=0.5;
				}
			}
		}
		me._floorswitch_01.logicBlock_alpha();
		me._floorswitch_01.onclick=function (e) {
			me._floorplans.ggChangeMap("FirstFloor");
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.style.opacity='1';
			me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.ggParameter.sx=1.2;me._floorswitch_01.ggParameter.sy=1.2;
			me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.style.opacity='0.5';
			me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.ggParameter.sx=1;me._floorswitch_02.ggParameter.sy=1;
			me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.style.opacity='0.5';
			me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease 0ms';
			}
			me._floorswitch_03.ggParameter.sx=1;me._floorswitch_03.ggParameter.sy=1;
			me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
			me.__1st_floornames.style.transition='none';
			me.__1st_floornames.style.visibility=(Number(me.__1st_floornames.style.opacity)>0||!me.__1st_floornames.style.opacity)?'inherit':'hidden';
			me.__1st_floornames.ggVisible=true;
			me.__2nd_floornames.style.transition='none';
			me.__2nd_floornames.style.visibility='hidden';
			me.__2nd_floornames.ggVisible=false;
			me.__3rd_floornames.style.transition='none';
			me.__3rd_floornames.style.visibility='hidden';
			me.__3rd_floornames.ggVisible=false;
		}
		me._floorswitch_01.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me._floorswitch_01);
		el=me._floorswitch_02=document.createElement('div');
		els=me._floorswitch_02__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FloorSwitch 02";
		el.ggDx=-420;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) - 420px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floorswitch_02.ggUpdateText=function() {
			var params = [];
			var hs = player._("Second Floor\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floorswitch_02.ggUpdateText();
		el.appendChild(els);
		me._floorswitch_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorswitch_02.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.ggUserdata.tags.indexOf("2F") != -1))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) && 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floorswitch_02.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floorswitch_02.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floorswitch_02.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms';
				if (me._floorswitch_02.ggCurrentLogicStateScaling == 0) {
					me._floorswitch_02.ggParameter.sx = 1.2;
					me._floorswitch_02.ggParameter.sy = 1.2;
					me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
				}
				else if (me._floorswitch_02.ggCurrentLogicStateScaling == 1) {
					me._floorswitch_02.ggParameter.sx = 1;
					me._floorswitch_02.ggParameter.sy = 1;
					me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
				}
				else {
					me._floorswitch_02.ggParameter.sx = 1;
					me._floorswitch_02.ggParameter.sy = 1;
					me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
				}
			}
		}
		me._floorswitch_02.logicBlock_scaling();
		me._floorswitch_02.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.ggUserdata.tags.indexOf("2F") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floorswitch_02.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floorswitch_02.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floorswitch_02.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms';
				if (me._floorswitch_02.ggCurrentLogicStateAlpha == 0) {
					me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
					me._floorswitch_02.style.opacity=1;
				}
				else if (me._floorswitch_02.ggCurrentLogicStateAlpha == 1) {
					me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
					me._floorswitch_02.style.opacity=0.5;
				}
				else {
					me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
					me._floorswitch_02.style.opacity=0.5;
				}
			}
		}
		me._floorswitch_02.logicBlock_alpha();
		me._floorswitch_02.onclick=function (e) {
			me._floorplans.ggChangeMap("SecondFloor");
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.style.opacity='1';
			me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.ggParameter.sx=1.2;me._floorswitch_02.ggParameter.sy=1.2;
			me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.style.opacity='0.5';
			me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms linear 0ms';
			}
			me._floorswitch_01.ggParameter.sx=1;me._floorswitch_01.ggParameter.sy=1;
			me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.style.opacity='0.5';
			me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.ggParameter.sx=1;me._floorswitch_03.ggParameter.sy=1;
			me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
			me.__2nd_floornames.style.transition='none';
			me.__2nd_floornames.style.visibility=(Number(me.__2nd_floornames.style.opacity)>0||!me.__2nd_floornames.style.opacity)?'inherit':'hidden';
			me.__2nd_floornames.ggVisible=true;
			me.__1st_floornames.style.transition='none';
			me.__1st_floornames.style.visibility='hidden';
			me.__1st_floornames.ggVisible=false;
			me.__3rd_floornames.style.transition='none';
			me.__3rd_floornames.style.visibility='hidden';
			me.__3rd_floornames.ggVisible=false;
		}
		me._floorswitch_02.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me._floorswitch_02);
		el=me._floorswitch_03=document.createElement('div');
		els=me._floorswitch_03__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FloorSwitch 03";
		el.ggDx=-420;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) - 420px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 50px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floorswitch_03.ggUpdateText=function() {
			var params = [];
			var hs = player._("Third Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floorswitch_03.ggUpdateText();
		el.appendChild(els);
		me._floorswitch_03.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorswitch_03.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("2F") == -1))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floorswitch_03.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floorswitch_03.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floorswitch_03.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms';
				if (me._floorswitch_03.ggCurrentLogicStateScaling == 0) {
					me._floorswitch_03.ggParameter.sx = 1.2;
					me._floorswitch_03.ggParameter.sy = 1.2;
					me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
				}
				else if (me._floorswitch_03.ggCurrentLogicStateScaling == 1) {
					me._floorswitch_03.ggParameter.sx = 1;
					me._floorswitch_03.ggParameter.sy = 1;
					me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
				}
				else {
					me._floorswitch_03.ggParameter.sx = 1;
					me._floorswitch_03.ggParameter.sy = 1;
					me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
				}
			}
		}
		me._floorswitch_03.logicBlock_scaling();
		me._floorswitch_03.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("2F") == -1))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floorswitch_03.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floorswitch_03.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floorswitch_03.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms';
				if (me._floorswitch_03.ggCurrentLogicStateAlpha == 0) {
					me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
					me._floorswitch_03.style.opacity=1;
				}
				else if (me._floorswitch_03.ggCurrentLogicStateAlpha == 1) {
					me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
					me._floorswitch_03.style.opacity=0.5;
				}
				else {
					me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
					me._floorswitch_03.style.opacity=0.5;
				}
			}
		}
		me._floorswitch_03.logicBlock_alpha();
		me._floorswitch_03.onclick=function (e) {
			me._floorplans.ggChangeMap("ThirdFloor");
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.style.opacity='1';
			me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.ggParameter.sx=1.2;me._floorswitch_03.ggParameter.sy=1.2;
			me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.style.opacity='0.5';
			me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease 0ms';
			}
			me._floorswitch_02.ggParameter.sx=1;me._floorswitch_02.ggParameter.sy=1;
			me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.style.opacity='0.5';
			me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.ggParameter.sx=1;me._floorswitch_01.ggParameter.sy=1;
			me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
			me.__3rd_floornames.style.transition='none';
			me.__3rd_floornames.style.visibility=(Number(me.__3rd_floornames.style.opacity)>0||!me.__3rd_floornames.style.opacity)?'inherit':'hidden';
			me.__3rd_floornames.ggVisible=true;
			me.__2nd_floornames.style.transition='none';
			me.__2nd_floornames.style.visibility='hidden';
			me.__2nd_floornames.ggVisible=false;
			me.__1st_floornames.style.transition='none';
			me.__1st_floornames.style.visibility='hidden';
			me.__1st_floornames.ggVisible=false;
		}
		me._floorswitch_03.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me._floorswitch_03);
		el=me.__1st_floornames=document.createElement('div');
		els=me.__1st_floornames__img=document.createElement('img');
		els.className='ggskin ggskin__1st_floornames';
		hs=basePath + 'images/_1st_floornames.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1st_FloorNames";
		el.ggDx=105;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 3;';
		hs+='height : 840px;';
		hs+='left : calc(50% - ((900px + 0px) / 2) + 105px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((840px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 900px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1st_floornames.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1st_floornames.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1st_floornames.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1st_floornames.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1st_floornames.style.transition='';
				if (me.__1st_floornames.ggCurrentLogicStateVisible == 0) {
					me.__1st_floornames.style.visibility=(Number(me.__1st_floornames.style.opacity)>0||!me.__1st_floornames.style.opacity)?'inherit':'hidden';
					me.__1st_floornames.ggVisible=true;
				}
				else if (me.__1st_floornames.ggCurrentLogicStateVisible == 1) {
					me.__1st_floornames.style.visibility="hidden";
					me.__1st_floornames.ggVisible=false;
				}
				else {
					me.__1st_floornames.style.visibility="hidden";
					me.__1st_floornames.ggVisible=false;
				}
			}
		}
		me.__1st_floornames.logicBlock_visible();
		me.__1st_floornames.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me.__1st_floornames);
		el=me.__2nd_floornames=document.createElement('div');
		els=me.__2nd_floornames__img=document.createElement('img');
		els.className='ggskin ggskin__2nd_floornames';
		hs=basePath + 'images/_2nd_floornames.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2nd_FloorNames";
		el.ggDx=105;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 3;';
		hs+='height : 840px;';
		hs+='left : calc(50% - ((900px + 0px) / 2) + 105px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((840px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 900px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2nd_floornames.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2nd_floornames.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2nd_floornames.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2nd_floornames.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2nd_floornames.style.transition='';
				if (me.__2nd_floornames.ggCurrentLogicStateVisible == 0) {
					me.__2nd_floornames.style.visibility=(Number(me.__2nd_floornames.style.opacity)>0||!me.__2nd_floornames.style.opacity)?'inherit':'hidden';
					me.__2nd_floornames.ggVisible=true;
				}
				else if (me.__2nd_floornames.ggCurrentLogicStateVisible == 1) {
					me.__2nd_floornames.style.visibility="hidden";
					me.__2nd_floornames.ggVisible=false;
				}
				else {
					me.__2nd_floornames.style.visibility="hidden";
					me.__2nd_floornames.ggVisible=false;
				}
			}
		}
		me.__2nd_floornames.logicBlock_visible();
		me.__2nd_floornames.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me.__2nd_floornames);
		el=me.__3rd_floornames=document.createElement('div');
		els=me.__3rd_floornames__img=document.createElement('img');
		els.className='ggskin ggskin__3rd_floornames';
		hs=basePath + 'images/_3rd_floornames.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3rd_FloorNames";
		el.ggDx=100;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 3;';
		hs+='height : 840px;';
		hs+='left : calc(50% - ((900px + 0px) / 2) + 100px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((840px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 900px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3rd_floornames.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3rd_floornames.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) && 
				((me.ggUserdata.tags.indexOf("2F") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__3rd_floornames.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__3rd_floornames.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__3rd_floornames.style.transition='';
				if (me.__3rd_floornames.ggCurrentLogicStateVisible == 0) {
					me.__3rd_floornames.style.visibility=(Number(me.__3rd_floornames.style.opacity)>0||!me.__3rd_floornames.style.opacity)?'inherit':'hidden';
					me.__3rd_floornames.ggVisible=true;
				}
				else if (me.__3rd_floornames.ggCurrentLogicStateVisible == 1) {
					me.__3rd_floornames.style.visibility="hidden";
					me.__3rd_floornames.ggVisible=false;
				}
				else {
					me.__3rd_floornames.style.visibility="hidden";
					me.__3rd_floornames.ggVisible=false;
				}
			}
		}
		me.__3rd_floornames.logicBlock_visible();
		me.__3rd_floornames.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me.__3rd_floornames);
		el=me._outside_close_b=document.createElement('div');
		el.ggId="Outside_close_B";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -5;';
		hs+='border : 0px solid #000000;';
		hs+='height : 1100px;';
		hs+='left : calc(50% - ((1940px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1940px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._outside_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._outside_close_b.onclick=function (e) {
			me._floorplan.style.transition='none';
			me._floorplan.style.visibility='hidden';
			me._floorplan.ggVisible=false;
			if (player.transitionsDisabled) {
				me._fp_screen_blur.style.transition='none';
			} else {
				me._fp_screen_blur.style.transition='all 0ms ease-out 0ms';
			}
			me._fp_screen_blur.style.opacity='0';
			me._fp_screen_blur.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._floorplan.style.transition='none';
			} else {
				me._floorplan.style.transition='all 500ms ease-out 0ms';
			}
			me._floorplan.style.opacity='0';
			me._floorplan.style.visibility='hidden';
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_top_corner_panel.ggVisible=true;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.style.opacity='0.5';
			me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.style.opacity='0.5';
			me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.style.opacity='0.5';
			me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.ggParameter.sx=1;me._floorswitch_01.ggParameter.sy=1;
			me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.ggParameter.sx=1;me._floorswitch_02.ggParameter.sy=1;
			me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.ggParameter.sx=1;me._floorswitch_03.ggParameter.sy=1;
			me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
			player.setVariableValue('Map_Pin_Normal_E', false);
			player.setVariableValue('Map_Pin_active_E', false);
			player.setVariableValue('Hotspot_Visibility', true);
			if (player.transitionsDisabled) {
				me._screen_blur.style.transition='none';
			} else {
				me._screen_blur.style.transition='all 100ms ease 200ms';
			}
			me._screen_blur.style.opacity='0';
			me._screen_blur.style.visibility='hidden';
		}
		me._outside_close_b.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me._outside_close_b);
		me._floorplan.appendChild(me._floorplan_bg);
		me._floorplan_main.appendChild(me._floorplan);
		el=me._fp_screen_blur=document.createElement('div');
		el.ggId="FP_Screen_Blur";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='border : 0px solid #000000;';
		hs+='height : 900px;';
		hs+='left : calc(50% - ((1200px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((900px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 1200px;';
		hs+='pointer-events:none;';
		hs+='backdrop-filter: blur(20px) grayscale(0%); -webkit-backdrop-filter: blur(20px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fp_screen_blur.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fp_screen_blur.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_main.appendChild(me._fp_screen_blur);
		me.divSkin.appendChild(me._floorplan_main);
		el=me._product_information=document.createElement('div');
		el.ggId="Product Information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 1080px;';
		hs+='left : calc(50% - ((1920px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1080px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1920px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._product_information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._product_information.ggUpdatePosition=function (useTransition) {
		}
		el=me._wolfrange=document.createElement('div');
		el.ggId="WolfRange";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 1080px;';
		hs+='left : calc(50% - ((1920px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1080px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1920px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._wolfrange.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._wolfrange.ggUpdatePosition=function (useTransition) {
		}
		el=me._productpanel_wolf=document.createElement('div');
		els=me._productpanel_wolf__img=document.createElement('img');
		els.className='ggskin ggskin_productpanel_wolf';
		hs=basePath + 'images/productpanel_wolf.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ProductPanel (Wolf)";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 550px;';
		hs+='left : calc(50% - ((1000px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((550px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 1000px;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(20px) grayscale(0%); -webkit-backdrop-filter: blur(20px) grayscale(0%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._productpanel_wolf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._productpanel_wolf.ggUpdatePosition=function (useTransition) {
		}
		el=me._product_heading=document.createElement('div');
		els=me._product_heading__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Product heading";
		el.ggDx=200;
		el.ggDy=-170;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((500px + 0px) / 2) + 200px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) - 170px);';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._product_heading.ggUpdateText=function() {
			var params = [];
			var hs = player._("48\" Gas Range - 6 Burners and \nInfrared Charbroiler", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._product_heading.ggUpdateText();
		el.appendChild(els);
		me._product_heading.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._product_heading.ggUpdatePosition=function (useTransition) {
		}
		el=me._line=document.createElement('div');
		el.ggId="LIne";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='bottom : -3px;';
		hs+='height : 2px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._line.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._line.ggUpdatePosition=function (useTransition) {
		}
		me._product_heading.appendChild(me._line);
		me._productpanel_wolf.appendChild(me._product_heading);
		el=me._product_brand=document.createElement('div');
		els=me._product_brand__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Product Brand";
		el.ggDx=-280;
		el.ggDy=190;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((500px + 0px) / 2) - 280px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 190px);';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 30px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._product_brand.ggUpdateText=function() {
			var params = [];
			var hs = player._("WOLF", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._product_brand.ggUpdateText();
		el.appendChild(els);
		me._product_brand.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._product_brand.ggUpdatePosition=function (useTransition) {
		}
		me._productpanel_wolf.appendChild(me._product_brand);
		el=me._wolf=document.createElement('div');
		els=me._wolf__img=document.createElement('img');
		els.className='ggskin ggskin_wolf';
		hs=basePath + 'images/wolf.jpg';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Wolf";
		el.ggDx=-280;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 237px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) - 280px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((237px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._wolf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._wolf.onclick=function (e) {
			player.openUrl("https:\/\/www.subzero-wolf.com\/wolf\/ranges\/gas-range\/48-inch-gas-range-6-burners-infrared-griddle","_blank");
		}
		me._wolf.ggUpdatePosition=function (useTransition) {
		}
		me._productpanel_wolf.appendChild(me._wolf);
		el=me._info_scroll_area=document.createElement('div');
		els=me._info_scroll_area__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 524px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 479px;';
		hs+="";
		els.setAttribute('style',hs);
		me._info_scroll_area.ggScrollByX = function(diffX) {
			if(!me._info_scroll_area.ggHorScrollVisible || diffX == 0 || me._info_scroll_area.ggHPercentVisible >= 1.0) return;
			me._info_scroll_area.ggScrollPosX = (me._info_scroll_area__horScrollFg.offsetLeft + diffX);
			me._info_scroll_area.ggScrollPosX = Math.max(me._info_scroll_area.ggScrollPosX, 0);
			me._info_scroll_area.ggScrollPosX = Math.min(me._info_scroll_area.ggScrollPosX, me._info_scroll_area__horScrollBg.offsetWidth - me._info_scroll_area__horScrollFg.offsetWidth);
			me._info_scroll_area__horScrollFg.style.left = me._info_scroll_area.ggScrollPosX + 'px';
			let percentScrolled = me._info_scroll_area.ggScrollPosX / (me._info_scroll_area__horScrollBg.offsetWidth - me._info_scroll_area__horScrollFg.offsetWidth);
			me._info_scroll_area__content.style.left = -(Math.round((me._info_scroll_area.ggContentWidth * (1.0 - me._info_scroll_area.ggHPercentVisible)) * percentScrolled)) + me._info_scroll_area.ggContentLeftOffset + 'px';
			me._info_scroll_area.ggScrollPosXPercent = (me._info_scroll_area__horScrollFg.offsetLeft / me._info_scroll_area__horScrollBg.offsetWidth);
		}
		me._info_scroll_area.ggScrollByXSmooth = function(diffX) {
			if(!me._info_scroll_area.ggHorScrollVisible || diffX == 0 || me._info_scroll_area.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._info_scroll_area.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._info_scroll_area.ggScrollPosX >= me._info_scroll_area__horScrollBg.offsetWidth - me._info_scroll_area__horScrollFg.offsetWidth)) {
					me._info_scroll_area.ggScrollPosX = Math.min(me._info_scroll_area.ggScrollPosX, me._info_scroll_area__horScrollBg.offsetWidth - me._info_scroll_area__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._info_scroll_area.ggScrollPosX <= 0)) {
					me._info_scroll_area.ggScrollPosX = Math.max(me._info_scroll_area.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._info_scroll_area__horScrollFg.style.left = me._info_scroll_area.ggScrollPosX + 'px';
			let percentScrolled = me._info_scroll_area.ggScrollPosX / (me._info_scroll_area__horScrollBg.offsetWidth - me._info_scroll_area__horScrollFg.offsetWidth);
			me._info_scroll_area__content.style.left = -(Math.round((me._info_scroll_area.ggContentWidth * (1.0 - me._info_scroll_area.ggHPercentVisible)) * percentScrolled)) + me._info_scroll_area.ggContentLeftOffset + 'px';
			me._info_scroll_area.ggScrollPosXPercent = (me._info_scroll_area__horScrollFg.offsetLeft / me._info_scroll_area__horScrollBg.offsetWidth);
			}, 10);
		}
		me._info_scroll_area.ggScrollByY = function(diffY) {
			if(!me._info_scroll_area.ggVertScrollVisible || diffY == 0 || me._info_scroll_area.ggVPercentVisible >= 1.0) return;
			me._info_scroll_area.ggScrollPosY = (me._info_scroll_area__vertScrollFg.offsetTop + diffY);
			me._info_scroll_area.ggScrollPosY = Math.max(me._info_scroll_area.ggScrollPosY, 0);
			me._info_scroll_area.ggScrollPosY = Math.min(me._info_scroll_area.ggScrollPosY, me._info_scroll_area__vertScrollBg.offsetHeight - me._info_scroll_area__vertScrollFg.offsetHeight);
			me._info_scroll_area__vertScrollFg.style.top = me._info_scroll_area.ggScrollPosY + 'px';
			let percentScrolled = me._info_scroll_area.ggScrollPosY / (me._info_scroll_area__vertScrollBg.offsetHeight - me._info_scroll_area__vertScrollFg.offsetHeight);
			me._info_scroll_area__content.style.top = -(Math.round((me._info_scroll_area.ggContentHeight * (1.0 - me._info_scroll_area.ggVPercentVisible)) * percentScrolled)) + me._info_scroll_area.ggContentTopOffset + 'px';
			me._info_scroll_area.ggScrollPosYPercent = (me._info_scroll_area__vertScrollFg.offsetTop / me._info_scroll_area__vertScrollBg.offsetHeight);
		}
		me._info_scroll_area.ggScrollByYSmooth = function(diffY) {
			if(!me._info_scroll_area.ggVertScrollVisible || diffY == 0 || me._info_scroll_area.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._info_scroll_area.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._info_scroll_area.ggScrollPosY >= me._info_scroll_area__vertScrollBg.offsetHeight - me._info_scroll_area__vertScrollFg.offsetHeight)) {
					me._info_scroll_area.ggScrollPosY = Math.min(me._info_scroll_area.ggScrollPosY, me._info_scroll_area__vertScrollBg.offsetHeight - me._info_scroll_area__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._info_scroll_area.ggScrollPosY <= 0)) {
					me._info_scroll_area.ggScrollPosY = Math.max(me._info_scroll_area.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._info_scroll_area__vertScrollFg.style.top = me._info_scroll_area.ggScrollPosY + 'px';
			let percentScrolled = me._info_scroll_area.ggScrollPosY / (me._info_scroll_area__vertScrollBg.offsetHeight - me._info_scroll_area__vertScrollFg.offsetHeight);
			me._info_scroll_area__content.style.top = -(Math.round((me._info_scroll_area.ggContentHeight * (1.0 - me._info_scroll_area.ggVPercentVisible)) * percentScrolled)) + me._info_scroll_area.ggContentTopOffset + 'px';
			me._info_scroll_area.ggScrollPosYPercent = (me._info_scroll_area__vertScrollFg.offsetTop / me._info_scroll_area__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._info_scroll_area.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._info_scroll_area.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._info_scroll_area.ggHPercentVisible);
					me._info_scroll_area.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._info_scroll_area.clientWidth - (me._info_scroll_area.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._info_scroll_area.clientWidth - (me._info_scroll_area.ggVertScrollVisible ? 5 : 0))) * me._info_scroll_area.ggHPercentVisible);
					me._info_scroll_area.ggScrollByXSmooth(diffX);
				}
			}
			if (me._info_scroll_area.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._info_scroll_area.ggVPercentVisible);
					me._info_scroll_area.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._info_scroll_area.clientHeight - (me._info_scroll_area.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._info_scroll_area.clientHeight - (me._info_scroll_area.ggHorScrollVisible ? 5 : 0))) * me._info_scroll_area.ggVPercentVisible);
					me._info_scroll_area.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._info_scroll_area__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._info_scroll_area.ggDragInertiaX *= 0.96;
				me._info_scroll_area.ggDragInertiaY *= 0.96;
				me._info_scroll_area.ggScrollByX(me._info_scroll_area.ggDragInertiaX);
				me._info_scroll_area.ggScrollByY(me._info_scroll_area.ggDragInertiaY);
				if (Math.abs(me._info_scroll_area.ggDragInertiaX) < 1.0 && Math.abs(me._info_scroll_area.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._info_scroll_area__content.onmouseup = null;
			me._info_scroll_area__content.onmousemove = null;
			me._info_scroll_area__content.ontouchend = null;
			me._info_scroll_area__content.ontouchmove = null;
			me._info_scroll_area__content.onpointerup = null;
			me._info_scroll_area__content.onpointermove = null;
			setTimeout(function() { me._info_scroll_area.ggIsDragging = false; }, 100);
		}
		me._info_scroll_area__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._info_scroll_area.ggDragStartX) > 10 || Math.abs(eventY - me._info_scroll_area.ggDragStartY) > 10) me._info_scroll_area.ggIsDragging = true;
			var diffX = (eventX - me._info_scroll_area.ggDragLastX) * me._info_scroll_area.ggHPercentVisible;
			var diffY = (eventY - me._info_scroll_area.ggDragLastY) * me._info_scroll_area.ggVPercentVisible;
			me._info_scroll_area.ggDragInertiaX = -diffX;
			me._info_scroll_area.ggDragInertiaY = -diffY;
			me._info_scroll_area.ggDragLastX = eventX;
			me._info_scroll_area.ggDragLastY = eventY;
			me._info_scroll_area.ggScrollByX(-diffX);
			me._info_scroll_area.ggScrollByY(-diffY);
		}
		me._info_scroll_area__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._info_scroll_area.ggDragLastX = me._info_scroll_area.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._info_scroll_area.ggDragLastY = me._info_scroll_area.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._info_scroll_area__content.onmouseup = me._info_scroll_area__content.mousetouchend;
			me._info_scroll_area__content.ontouchend = me._info_scroll_area__content.mousetouchend;
			me._info_scroll_area__content.onmousemove = me._info_scroll_area__content.mousetouchmove;
			me._info_scroll_area__content.ontouchmove = me._info_scroll_area__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._info_scroll_area__content.onpointerup = me._info_scroll_area__content.ontouchend;
				me._info_scroll_area__content.onpointermove = me._info_scroll_area__content.ontouchmove;
			}
		}
		els.onmousedown = me._info_scroll_area__content.mousetouchstart;
		els.ontouchstart = me._info_scroll_area__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._info_scroll_area__content.mousetouchstart;
		}
		elVertScrollBg = me._info_scroll_area__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 300px; background-color: rgba(128,128,128,0.196078); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._info_scroll_area__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 300px; background-color: rgba(192,192,192,0.196078); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._info_scroll_area.ggScrollPosY = 0;
		me._info_scroll_area.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._info_scroll_area.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._info_scroll_area.ggDragInertiaY *= 0.96;
					me._info_scroll_area.ggScrollByY(me._info_scroll_area.ggDragInertiaY);
					if (Math.abs(me._info_scroll_area.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._info_scroll_area.ggDragLastY;
				me._info_scroll_area.ggDragInertiaY = diffY;
				me._info_scroll_area.ggDragLastY = e.clientY;
				me._info_scroll_area.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._info_scroll_area.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._info_scroll_area.ggDragInertiaY *= 0.96;
					me._info_scroll_area.ggScrollByY(me._info_scroll_area.ggDragInertiaY);
					if (Math.abs(me._info_scroll_area.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._info_scroll_area.ggDragLastY;
				me._info_scroll_area.ggDragInertiaY = diffY;
				me._info_scroll_area.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._info_scroll_area.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._info_scroll_area.ggScrollHeight;
			if (e.offsetY < me._info_scroll_area.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._info_scroll_area.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._info_scroll_area__vertScrollBg.getBoundingClientRect();
			var diffY = me._info_scroll_area.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._info_scroll_area.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._info_scroll_area.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._info_scroll_area.ggScrollByYSmooth(30 * me._info_scroll_area.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._info_scroll_area__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,0.392157);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Info scroll area";
		el.ggDx=200;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((500px + 0px) / 2) + 200px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((300px + 0px) / 2) + 50px);';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_scroll_area.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_scroll_area.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._info_scroll_area.ggScrollPosY / me._info_scroll_area.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._info_scroll_area__vertScrollBg.style.visibility = 'inherit';
				me._info_scroll_area__vertScrollFg.style.visibility = 'inherit';
				me._info_scroll_area.ggVertScrollVisible = true;
				if(me._info_scroll_area.ggVertScrollVisible) {
					me._info_scroll_area.ggAvailableWidth = me._info_scroll_area.clientWidth - 5;
					if (me._info_scroll_area.ggHorScrollVisible) {
						me._info_scroll_area.ggAvailableHeight = me._info_scroll_area.clientHeight - 5;
						me._info_scroll_area.ggAvailableHeightWithScale = me._info_scroll_area.getBoundingClientRect().height - me._info_scroll_area__vertScrollBg.getBoundingClientRect().width;
						me._info_scroll_area__cornerBg.style.visibility = 'inherit';
					} else {
						me._info_scroll_area.ggAvailableHeight = me._info_scroll_area.clientHeight;
						me._info_scroll_area.ggAvailableHeightWithScale = me._info_scroll_area.getBoundingClientRect().height;
						me._info_scroll_area__cornerBg.style.visibility = 'hidden';
					}
					me._info_scroll_area__vertScrollBg.style.height = me._info_scroll_area.ggAvailableHeight + 'px';
					me._info_scroll_area.ggVPercentVisible = contentHeight != 0 ? me._info_scroll_area.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._info_scroll_area.ggVPercentVisible > 1.0) me._info_scroll_area.ggVPercentVisible = 1.0;
					me._info_scroll_area.ggScrollHeight =  Math.round(me._info_scroll_area__vertScrollBg.offsetHeight * me._info_scroll_area.ggVPercentVisible);
					me._info_scroll_area__vertScrollFg.style.height = me._info_scroll_area.ggScrollHeight + 'px';
					me._info_scroll_area.ggScrollPosY = me._info_scroll_area.ggScrollPosYPercent * me._info_scroll_area.ggAvailableHeight;
					me._info_scroll_area.ggScrollPosY = Math.min(me._info_scroll_area.ggScrollPosY, me._info_scroll_area__vertScrollBg.offsetHeight - me._info_scroll_area__vertScrollFg.offsetHeight);
					me._info_scroll_area__vertScrollFg.style.top = me._info_scroll_area.ggScrollPosY + 'px';
					if (me._info_scroll_area.ggVPercentVisible < 1.0) {
						let percentScrolled = me._info_scroll_area.ggScrollPosY / (me._info_scroll_area__vertScrollBg.offsetHeight - me._info_scroll_area__vertScrollFg.offsetHeight);
						me._info_scroll_area__content.style.top = -(Math.round((me._info_scroll_area.ggContentHeight * (1.0 - me._info_scroll_area.ggVPercentVisible)) * percentScrolled)) + me._info_scroll_area.ggContentTopOffset + 'px';
					}
				} else {
					me._info_scroll_area.ggAvailableWidth = me._info_scroll_area.clientWidth;
					me._info_scroll_area.ggScrollPosY = 0;
					me._info_scroll_area.ggScrollPosYPercent = 0.0;
					me._info_scroll_area__content.style.top = this.ggContentTopOffset + 'px';
					me._info_scroll_area__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._info_scroll_area.ggHorScrollVisible || vertScrollWasVisible != me._info_scroll_area.ggVertScrollVisible) {
					skin.updateSize(me._info_scroll_area);
					me._info_scroll_area.ggUpdatePosition();
				}
			}
		}
		el=me._contents=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._contents;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._contents__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Contents";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 750px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((750px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 480px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: justify;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._contents.ggUpdateText=function() {
			var params = [];
			var hs = player._("Control temperature precisely with six dual-stacked, sealed gas burners for higher highs, lower lows\n\nRely on a 15,000 Btu infrared griddle to sear burgers, stir-fry vegetables, and more\n\nEnjoy quicker heat and more even cooking with this large capacity gas convection oven\n\nMulti-task with an additional 18\" oven.\n\nClean up sloshes and spills easily with the seamless, sealed, black porcelain-coated burner pans\n\nProduce crisper crusts and faster sears with the powerful infrared interior broiler\n\nRe-ignites flame automatically with our spark ignition system for improved temperature control and added safety\n\nMove pots and pans easily across continuous cast-iron grates\n\nFind your kitchen style with a choice of iconic red, black, or brushed stainless control knobs\n\n\nSpecifications:\n\nOverall Dimensions: 47 7\/8\" W x 37\" H x 28 3\/8\" D\nOven 1 Interior Dimensions:\n13 1\/2\" W x 18 5\/8\" H x 17\" D\nOven 2 Interior Dimensions:\n24\" W x 18 5\/8\" H x 17\" D\nOven 1 Usable Capacity: 1.6 cubic feet\nOven 1 Overall Capacity: 2.5 cubic feet\nOven 2 Usable Capacity: 2.9 cubic feet\nOven 2 Overall Capacity: 4.4 cubic feet\nDoor Clearance: 19 1\/2\"\nStar-K Certified\nShipping Weight: 654 lbs\nReceptacle: 3-prong grounding-type\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._contents.ggUpdateText();
		el.appendChild(els);
		me._contents.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contents.ggUpdatePosition=function (useTransition) {
		}
		me._info_scroll_area__content.appendChild(me._contents);
		me._productpanel_wolf.appendChild(me._info_scroll_area);
		el=me._pp_close_b=document.createElement('div');
		els=me._pp_close_b__img=document.createElement('img');
		els.className='ggskin ggskin_pp_close_b';
		hs=basePath + 'images/pp_close_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="PP_Close_B";
		el.ggDx=440;
		el.ggDy=-247;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 440px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 247px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pp_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pp_close_b.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._productpanel_wolf.style.transition='none';
			} else {
				me._productpanel_wolf.style.transition='all 500ms ease-out 0ms';
			}
			me._productpanel_wolf.style.opacity='0';
			me._productpanel_wolf.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._screen_blur.style.transition='none';
			} else {
				me._screen_blur.style.transition='all 0ms ease 0ms';
			}
			me._screen_blur.style.opacity='0';
			me._screen_blur.style.visibility='hidden';
			player.setVariableValue('Hotspot_Visibility', true);
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_top_corner_panel.ggVisible=true;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
		}
		me._pp_close_b.ggUpdatePosition=function (useTransition) {
		}
		me._productpanel_wolf.appendChild(me._pp_close_b);
		el=me._pp_outside_close=document.createElement('div');
		el.ggId="PP_Outside_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -5;';
		hs+='border : 0px solid #000000;';
		hs+='height : 1100px;';
		hs+='left : calc(50% - ((1940px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1940px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pp_outside_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pp_outside_close.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._productpanel_wolf.style.transition='none';
			} else {
				me._productpanel_wolf.style.transition='all 500ms ease-out 0ms';
			}
			me._productpanel_wolf.style.opacity='0';
			me._productpanel_wolf.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._screen_blur.style.transition='none';
			} else {
				me._screen_blur.style.transition='all 0ms ease 0ms';
			}
			me._screen_blur.style.opacity='0';
			me._screen_blur.style.visibility='hidden';
			player.setVariableValue('Hotspot_Visibility', true);
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_top_corner_panel.ggVisible=true;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
		}
		me._pp_outside_close.ggUpdatePosition=function (useTransition) {
		}
		me._productpanel_wolf.appendChild(me._pp_outside_close);
		me._wolfrange.appendChild(me._productpanel_wolf);
		el=me._text_tooltip_visit_site=document.createElement('div');
		els=me._text_tooltip_visit_site__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="text_tooltip (Visit site)";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 30px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 2px 2px 4px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_tooltip_visit_site.ggUpdateText=function() {
			var params = [];
			var hs = player._("Visit site\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_tooltip_visit_site.ggUpdateText();
		el.appendChild(els);
		me._text_tooltip_visit_site.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_tooltip_visit_site.ggUpdatePosition=function (useTransition) {
		}
		me._wolfrange.appendChild(me._text_tooltip_visit_site);
		me._product_information.appendChild(me._wolfrange);
		me.divSkin.appendChild(me._product_information);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 500px;';
		hs+='left : calc(50% - ((500px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((500px + 2px) / 2) - 2px);';
		hs+='visibility : hidden;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_1.style.transition='background-color 0s';
				if (me._rectangle_1.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_1.style.backgroundColor="rgba(255,0,4,1)";
				}
				else if (me._rectangle_1.ggCurrentLogicStateBackgroundColor == 1) {
					me._rectangle_1.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._rectangle_1.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rectangle_1.logicBlock_backgroundcolor();
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._rectangle_1);
		me._right_top_corner_panel.logicBlock_visible();
		me._right_top_corner_panel.logicBlock_alpha();
		me._mini_map.ggMarkerInstances=[];
		me._mini_map.ggLastNodeId=null;
		me._mini_map.ggSimpleFloorplanMarkerArray=[];
		me._mini_map.ggFloorplanWidth=0;
		me._mini_map.ggFloorplanHeight=0;
		me._mini_map__mapdiv=document.createElement('div');
		me._mini_map__mapdiv.className='ggskin ggskin_map';
		me._mini_map.appendChild(me._mini_map__mapdiv);
		me._mini_map__img=document.createElement('img');
		me._mini_map__img.className='ggskin ggskin_map';
		me._mini_map__mapdiv.appendChild(me._mini_map__img);
		me._mini_map.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._mini_map.clientWidth;
			var mapHeight = me._mini_map.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._mini_map.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._mini_map__img.setAttribute('src', imageFilename);
			me._mini_map__img.setAttribute('loading', 'lazy');
		me._mini_map__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._mini_map.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._mini_map.ggFloorplanHeight / 2 + 'px;width:' + me._mini_map.ggFloorplanWidth + 'px;height:' + me._mini_map.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._mini_map__img.setAttribute('style','width:' + me._mini_map.ggFloorplanWidth + 'px;height:' + me._mini_map.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._mini_map.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._mini_map.clientWidth / me._mini_map.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._mini_map.ggFloorplanHeight = me._mini_map.clientHeight;
				me._mini_map.ggFloorplanWidth = me._mini_map.ggFloorplanHeight * floorplanAR;
			} else {
				me._mini_map.ggFloorplanWidth = me._mini_map.clientWidth;
				me._mini_map.ggFloorplanHeight = me._mini_map.ggFloorplanWidth / floorplanAR;
			}
		}
		me._mini_map.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._mini_map.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._mini_map.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._mini_map.ggPermeableMap = true;
			} else {
				me._mini_map.ggPermeableMap = false;
			}
			me._mini_map.ggCalculateFloorplanSize(mapDetails);
			me._mini_map.ggShowSimpleFloorplan(mapDetails);
			me._mini_map.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._mini_map.ggMapNotLoaded = false;
		}
		me._mini_map.ggClearMap=function() {
			me._mini_map.ggClearMapMarkers();
			me._mini_map.ggMapNotLoaded = true;
		}
		me._mini_map.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._mini_map.ggMapId = mapId;
			if (!me._mini_map.ggMapNotLoaded) {
				me._mini_map.ggClearMap();
				me._mini_map.ggInitMap();
				me._mini_map.ggInitMapMarkers();
			}
		}
		me._mini_map.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._mini_map.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._mini_map.ggMapId);
					var xPos = (me._mini_map.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._mini_map.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._mini_map.ggHMarkerAnchorOffset;
					yPos -= me._mini_map.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._mini_map.style['z-index'] + 2;
				}
			}
		}
		me._mini_map.ggInitMapMarkers=function() {
			me._mini_map.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._mini_map.ggFilteredIds = [];
			if (me._mini_map.ggFilter != '') {
				var filter = me._mini_map.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._mini_map.ggFilteredIds.push(nodeId);
					}
				}
				if (me._mini_map.ggFilteredIds.length > 0) ids = me._mini_map.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._mini_map.ggMapId);
				if (coords.length>=2) {
					me._mini_map.ggHMarkerAnchorOffset = 12;
					me._mini_map.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._mini_map.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._mini_map.ggSimpleFloorplanMarkerArray[id] = marker;
					me._mini_map__mapdiv.appendChild(marker);
				}
			}
			me._mini_map.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._mini_map);
		}
		me._mini_map.ggClearMapMarkers=function() {
			for (id in me._mini_map.ggSimpleFloorplanMarkerArray) {
				if (me._mini_map.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._mini_map__mapdiv.removeChild(me._mini_map.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._mini_map.ggMarkerInstances=[];
			me._mini_map.ggSimpleFloorplanMarkerArray=[];
		}
		me.elementMouseOver['minimap_cb']=false;
		me._minimap_ch.logicBlock_visible();
		me._minimap_ch.logicBlock_alpha();
		me.elementMouseOver['minimap_blur']=false;
		me.elementMouseOver['room_name_p']=false;
		me._scrollarea_1f.logicBlock_position();
		me._scrollarea_1f.logicBlock_visible();
		me._scrollarea_1f.logicBlock_alpha();
		me._room_panel_1f.logicBlock_position();
		me._room_panel_1f.logicBlock_visible();
		me._room_panel_1f.logicBlock_alpha();
		me._scrollarea_2f.logicBlock_position();
		me._scrollarea_2f.logicBlock_visible();
		me._scrollarea_2f.logicBlock_alpha();
		me._room_panel_2f.logicBlock_position();
		me._room_panel_2f.logicBlock_visible();
		me._room_panel_2f.logicBlock_alpha();
		me._scrollarea_3f.logicBlock_position();
		me._scrollarea_3f.logicBlock_visible();
		me._scrollarea_3f.logicBlock_alpha();
		me._room_panel_3f.logicBlock_position();
		me._room_panel_3f.logicBlock_visible();
		me._room_panel_3f.logicBlock_alpha();
		me._rooms_h.logicBlock_visible();
		me._rooms_h.logicBlock_alpha();
		me.elementMouseOver['floorplan_b']=false;
		me._floor_plans_.logicBlock_alpha();
		me._floors_b.logicBlock_alpha();
		me.elementMouseOver['floors_b']=false;
		me._floors_p.logicBlock_position();
		me._floors_p.logicBlock_alpha();
		me._floor_indication_b.logicBlock_alpha();
		me.elementMouseOver['floor_indication_b']=false;
		me._floors_h.logicBlock_visible();
		me._floors_h.logicBlock_alpha();
		me.elementMouseOver['minimap_b']=false;
		me._minimap_h.logicBlock_visible();
		me._minimap_h.logicBlock_alpha();
		me._floors_blur_bg.logicBlock_position();
		me._floors_blur_bg.logicBlock_alpha();
		me._rooms_blur_bg.logicBlock_position();
		me._rooms_blur_bg.logicBlock_alpha();
		me.elementMouseOver['fullscreen_off_b']=false;
		me._exit_fullscreen_h.logicBlock_visible();
		me._exit_fullscreen_h.logicBlock_alpha();
		me.elementMouseOver['fullscreen_b']=false;
		me._fullscreen_h.logicBlock_visible();
		me._fullscreen_h.logicBlock_alpha();
		me.elementMouseOver['contact']=false;
		me._contact_info.logicBlock_visible();
		me._contact_info.logicBlock_alpha();
		me._contact_panel.logicBlock_position();
		me._contact_panel.logicBlock_alpha();
		me._contact_panel_blur_bg.logicBlock_position();
		me._contact_panel_blur_bg.logicBlock_alpha();
		me._interior_b.logicBlock_visible();
		me.elementMouseOver['interior_b']=false;
		me._extrerior_b.logicBlock_visible();
		me.elementMouseOver['extrerior_b']=false;
		me.elementMouseOver['guide_b']=false;
		me._guide_h.logicBlock_alpha();
		me.elementMouseOver['hide_o_b']=false;
		me._hide_o_h.logicBlock_alpha();
		me.elementMouseOver['showreel_b']=false;
		me._showreel_h.logicBlock_alpha();
		me.elementMouseOver['previous_b']=false;
		me._previous_h.logicBlock_alpha();
		me.elementMouseOver['view_o_b']=false;
		me._view_o_h.logicBlock_alpha();
		me._mouse_qg.logicBlock_size();
		me._mouse_qg.logicBlock_visible();
		me._laptop_qg.logicBlock_size();
		me._laptop_qg.logicBlock_visible();
		me._mobile_qg.logicBlock_size();
		me._mobile_qg.logicBlock_visible();
		me._left_02.logicBlock_visible();
		me._left_01.logicBlock_visible();
		me._right_02.logicBlock_visible();
		me._right_01.logicBlock_visible();
		me._showreel.ggInitMedia('2VAEA3BOuN4&si=DFLYb_aYKYc-bsp0');
		me.elementMouseOver['sr_close_b']=false;
		me._floorplans.ggMarkerInstances=[];
		me._floorplans.ggLastNodeId=null;
		me._floorplans.ggSimpleFloorplanMarkerArray=[];
		me._floorplans.ggFloorplanWidth=0;
		me._floorplans.ggFloorplanHeight=0;
		me._floorplans__mapdiv=document.createElement('div');
		me._floorplans__mapdiv.className='ggskin ggskin_map';
		me._floorplans.appendChild(me._floorplans__mapdiv);
		me._floorplans__img=document.createElement('img');
		me._floorplans__img.className='ggskin ggskin_map';
		me._floorplans__mapdiv.appendChild(me._floorplans__img);
		me._floorplans.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._floorplans.clientWidth;
			var mapHeight = me._floorplans.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._floorplans.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._floorplans__img.setAttribute('src', imageFilename);
			me._floorplans__img.setAttribute('loading', 'lazy');
		me._floorplans__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._floorplans.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._floorplans.ggFloorplanHeight / 2 + 'px;width:' + me._floorplans.ggFloorplanWidth + 'px;height:' + me._floorplans.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._floorplans__img.setAttribute('style','width:' + me._floorplans.ggFloorplanWidth + 'px;height:' + me._floorplans.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._floorplans.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._floorplans.clientWidth / me._floorplans.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._floorplans.ggFloorplanHeight = me._floorplans.clientHeight;
				me._floorplans.ggFloorplanWidth = me._floorplans.ggFloorplanHeight * floorplanAR;
			} else {
				me._floorplans.ggFloorplanWidth = me._floorplans.clientWidth;
				me._floorplans.ggFloorplanHeight = me._floorplans.ggFloorplanWidth / floorplanAR;
			}
		}
		me._floorplans.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._floorplans.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._floorplans.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._floorplans.ggPermeableMap = true;
			} else {
				me._floorplans.ggPermeableMap = false;
			}
			me._floorplans.ggCalculateFloorplanSize(mapDetails);
			me._floorplans.ggShowSimpleFloorplan(mapDetails);
			me._floorplans.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._floorplans.ggMapNotLoaded = false;
		}
		me._floorplans.ggClearMap=function() {
			me._floorplans.ggClearMapMarkers();
			me._floorplans.ggMapNotLoaded = true;
		}
		me._floorplans.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._floorplans.ggMapId = mapId;
			if (!me._floorplans.ggMapNotLoaded) {
				me._floorplans.ggClearMap();
				me._floorplans.ggInitMap();
				me._floorplans.ggInitMapMarkers();
			}
		}
		me._floorplans.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._floorplans.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._floorplans.ggMapId);
					var xPos = (me._floorplans.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._floorplans.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._floorplans.ggHMarkerAnchorOffset;
					yPos -= me._floorplans.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._floorplans.style['z-index'] + 2;
				}
			}
		}
		me._floorplans.ggInitMapMarkers=function() {
			me._floorplans.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplans.ggFilteredIds = [];
			if (me._floorplans.ggFilter != '') {
				var filter = me._floorplans.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplans.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplans.ggFilteredIds.length > 0) ids = me._floorplans.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._floorplans.ggMapId);
				if (coords.length>=2) {
					me._floorplans.ggHMarkerAnchorOffset = 12;
					me._floorplans.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._floorplans.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._floorplans.ggSimpleFloorplanMarkerArray[id] = marker;
					me._floorplans__mapdiv.appendChild(marker);
				}
			}
			me._floorplans.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._floorplans);
		}
		me._floorplans.ggClearMapMarkers=function() {
			for (id in me._floorplans.ggSimpleFloorplanMarkerArray) {
				if (me._floorplans.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._floorplans__mapdiv.removeChild(me._floorplans.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._floorplans.ggMarkerInstances=[];
			me._floorplans.ggSimpleFloorplanMarkerArray=[];
		}
		me._floorswitch_01.logicBlock_scaling();
		me._floorswitch_01.logicBlock_alpha();
		me._floorswitch_02.logicBlock_scaling();
		me._floorswitch_02.logicBlock_alpha();
		me._floorswitch_03.logicBlock_scaling();
		me._floorswitch_03.logicBlock_alpha();
		me.__1st_floornames.logicBlock_visible();
		me.__2nd_floornames.logicBlock_visible();
		me.__3rd_floornames.logicBlock_visible();
		me._rectangle_1.logicBlock_backgroundcolor();
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node_90')) {
				for(var i = 0; i < hotspotTemplates['ht_node_90'].length; i++) {
					hotspotTemplates['ht_node_90'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_180')) {
				for(var i = 0; i < hotspotTemplates['ht_node_180'].length; i++) {
					hotspotTemplates['ht_node_180'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_270')) {
				for(var i = 0; i < hotspotTemplates['ht_node_270'].length; i++) {
					hotspotTemplates['ht_node_270'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_Turn')) {
				for(var i = 0; i < hotspotTemplates['ht_node_Turn'].length; i++) {
					hotspotTemplates['ht_node_Turn'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me._right_top_corner_panel.logicBlock_visible();
			me._right_top_corner_panel.logicBlock_alpha();
			for (var i=0; i < me._mini_map.ggMarkerInstances.length; i++) {
				me._mini_map.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._mini_map.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._mini_map.ggCalculateFloorplanSize(mapDetails);
				me._mini_map.ggShowSimpleFloorplan(mapDetails);
				me._mini_map.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._mini_map.ggLastNodeId) {
				var lastActiveMarker = me._mini_map.ggSimpleFloorplanMarkerArray[me._mini_map.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._mini_map.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._mini_map.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._mini_map.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._mini_map.ggChangeMap(mapId);
					}
				}
			}
			me._mini_map.ggLastNodeId = id;
			me._scrollarea_1f.logicBlock_position();
			me._scrollarea_1f.logicBlock_visible();
			me._scrollarea_1f.logicBlock_alpha();
			me._room_panel_1f.logicBlock_position();
			me._room_panel_1f.logicBlock_visible();
			me._room_panel_1f.logicBlock_alpha();
			me._scrollarea_2f.logicBlock_position();
			me._scrollarea_2f.logicBlock_visible();
			me._scrollarea_2f.logicBlock_alpha();
			me._room_panel_2f.logicBlock_position();
			me._room_panel_2f.logicBlock_visible();
			me._room_panel_2f.logicBlock_alpha();
			me._scrollarea_3f.logicBlock_position();
			me._scrollarea_3f.logicBlock_visible();
			me._scrollarea_3f.logicBlock_alpha();
			me._room_panel_3f.logicBlock_position();
			me._room_panel_3f.logicBlock_visible();
			me._room_panel_3f.logicBlock_alpha();
			me._rooms_h.logicBlock_visible();
			me._floors_b.logicBlock_alpha();
			me._floors_p.logicBlock_position();
			me._floors_p.logicBlock_alpha();
			me._floor_indication_b.logicBlock_alpha();
			me._floors_h.logicBlock_visible();
			me._minimap_h.logicBlock_visible();
			me._floors_blur_bg.logicBlock_position();
			me._floors_blur_bg.logicBlock_alpha();
			me._rooms_blur_bg.logicBlock_position();
			me._rooms_blur_bg.logicBlock_alpha();
			me._exit_fullscreen_h.logicBlock_visible();
			me._fullscreen_h.logicBlock_visible();
			me._contact_info.logicBlock_visible();
			me._contact_info.logicBlock_alpha();
			me._contact_panel.logicBlock_position();
			me._contact_panel.logicBlock_alpha();
			me._contact_panel_blur_bg.logicBlock_position();
			me._contact_panel_blur_bg.logicBlock_alpha();
			me._interior_b.logicBlock_visible();
			me._extrerior_b.logicBlock_visible();
			me._mouse_qg.logicBlock_visible();
			me._laptop_qg.logicBlock_visible();
			me._mobile_qg.logicBlock_visible();
			me._left_02.logicBlock_visible();
			me._left_01.logicBlock_visible();
			me._right_02.logicBlock_visible();
			me._right_01.logicBlock_visible();
			for (var i=0; i < me._floorplans.ggMarkerInstances.length; i++) {
				me._floorplans.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._floorplans.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplans.ggCalculateFloorplanSize(mapDetails);
				me._floorplans.ggShowSimpleFloorplan(mapDetails);
				me._floorplans.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplans.ggLastNodeId) {
				var lastActiveMarker = me._floorplans.ggSimpleFloorplanMarkerArray[me._floorplans.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._floorplans.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._floorplans.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplans.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplans.ggChangeMap(mapId);
					}
				}
			}
			me._floorplans.ggLastNodeId = id;
			me._floorswitch_01.logicBlock_scaling();
			me._floorswitch_01.logicBlock_alpha();
			me._floorswitch_02.logicBlock_scaling();
			me._floorswitch_02.logicBlock_alpha();
			me._floorswitch_03.logicBlock_scaling();
			me._floorswitch_03.logicBlock_alpha();
			me.__1st_floornames.logicBlock_visible();
			me.__2nd_floornames.logicBlock_visible();
			me.__3rd_floornames.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node_90')) {
				for(var i = 0; i < hotspotTemplates['ht_node_90'].length; i++) {
					hotspotTemplates['ht_node_90'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_180')) {
				for(var i = 0; i < hotspotTemplates['ht_node_180'].length; i++) {
					hotspotTemplates['ht_node_180'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_270')) {
				for(var i = 0; i < hotspotTemplates['ht_node_270'].length; i++) {
					hotspotTemplates['ht_node_270'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_Turn')) {
				for(var i = 0; i < hotspotTemplates['ht_node_Turn'].length; i++) {
					hotspotTemplates['ht_node_Turn'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me._variable_SlideShow_QG.logicBlock();
			me._right_top_corner_panel.logicBlock_visible();
			for (var i=0; i < me._mini_map.ggMarkerInstances.length; i++) {
				me._mini_map.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._mini_map.ggClearMap();
			me._mini_map.ggInitMap(false);
			me._mini_map.ggInitMapMarkers(true);
			me._scrollarea_1f.ggUpdatePosition();
			me._scrollarea_1f.logicBlock_position();
			me._scrollarea_1f.logicBlock_alpha();
			me._room_panel_1f.logicBlock_position();
			me._room_panel_1f.logicBlock_alpha();
			me._scrollarea_2f.ggUpdatePosition();
			me._scrollarea_2f.logicBlock_position();
			me._scrollarea_2f.logicBlock_alpha();
			me._room_panel_2f.logicBlock_position();
			me._room_panel_2f.logicBlock_alpha();
			me._scrollarea_3f.ggUpdatePosition();
			me._scrollarea_3f.logicBlock_position();
			me._scrollarea_3f.logicBlock_alpha();
			me._room_panel_3f.logicBlock_position();
			me._room_panel_3f.logicBlock_alpha();
			me._rooms_h.logicBlock_visible();
			me._floors_b.logicBlock_alpha();
			me._floors_p.logicBlock_position();
			me._floors_p.logicBlock_alpha();
			me._floor_indication_b.logicBlock_alpha();
			me._floors_h.logicBlock_visible();
			me._minimap_h.logicBlock_visible();
			me._floors_blur_bg.logicBlock_position();
			me._floors_blur_bg.logicBlock_alpha();
			me._rooms_blur_bg.logicBlock_position();
			me._rooms_blur_bg.logicBlock_alpha();
			me._exit_fullscreen_h.logicBlock_visible();
			me._fullscreen_h.logicBlock_visible();
			me._contact_info.logicBlock_visible();
			me._contact_info.logicBlock_alpha();
			me._contact_panel.logicBlock_position();
			me._contact_panel.logicBlock_alpha();
			me._contact_panel_blur_bg.logicBlock_position();
			me._contact_panel_blur_bg.logicBlock_alpha();
			me._mouse_qg.logicBlock_size();
			me._mouse_qg.logicBlock_visible();
			me._laptop_qg.logicBlock_size();
			me._laptop_qg.logicBlock_visible();
			me._mobile_qg.logicBlock_size();
			me._mobile_qg.logicBlock_visible();
			me._left_02.logicBlock_visible();
			me._left_01.logicBlock_visible();
			me._right_02.logicBlock_visible();
			me._right_01.logicBlock_visible();
			for (var i=0; i < me._floorplans.ggMarkerInstances.length; i++) {
				me._floorplans.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._floorplans.ggClearMap();
			me._floorplans.ggInitMap(false);
			me._floorplans.ggInitMapMarkers(true);
			me._info_scroll_area.ggUpdatePosition();
			me._rectangle_1.logicBlock_backgroundcolor();
		});
		player.addListener('hastouch', function(event) {
			for (var i=0; i < me._mini_map.ggMarkerInstances.length; i++) {
				me._mini_map.ggMarkerInstances[i].ggEvent_hastouch();
			}
			for (var i=0; i < me._floorplans.ggMarkerInstances.length; i++) {
				me._floorplans.ggMarkerInstances[i].ggEvent_hastouch();
			}
		});
		player.addListener('playerdown', function(event) {
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			player.setVariableValue('contactpanel', false);
		});
		player.addListener('positionchanged', function(event) {
			for (var i=0; i < me._mini_map.ggMarkerInstances.length; i++) {
				me._mini_map.ggMarkerInstances[i].ggEvent_positionchanged();
			}
			for (var i=0; i < me._floorplans.ggMarkerInstances.length; i++) {
				me._floorplans.ggMarkerInstances[i].ggEvent_positionchanged();
			}
		});
		player.addListener('sizechanged', function(event) {
			me._right_01.logicBlock_visible();
		});
		player.addListener('varchanged_Floor_Visibility', function(event) {
			me._rooms_h.logicBlock_visible();
			me._floors_b.logicBlock_alpha();
			me._floors_p.logicBlock_position();
			me._floors_p.logicBlock_alpha();
			me._floor_indication_b.logicBlock_alpha();
			me._floors_h.logicBlock_visible();
			me._floors_blur_bg.logicBlock_position();
			me._floors_blur_bg.logicBlock_alpha();
		});
		player.addListener('varchanged_Hotspot_Visibility', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node_90')) {
				for(var i = 0; i < hotspotTemplates['ht_node_90'].length; i++) {
					hotspotTemplates['ht_node_90'][i].ggEvent_varchanged_Hotspot_Visibility();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_180')) {
				for(var i = 0; i < hotspotTemplates['ht_node_180'].length; i++) {
					hotspotTemplates['ht_node_180'][i].ggEvent_varchanged_Hotspot_Visibility();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_270')) {
				for(var i = 0; i < hotspotTemplates['ht_node_270'].length; i++) {
					hotspotTemplates['ht_node_270'][i].ggEvent_varchanged_Hotspot_Visibility();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_Turn')) {
				for(var i = 0; i < hotspotTemplates['ht_node_Turn'].length; i++) {
					hotspotTemplates['ht_node_Turn'][i].ggEvent_varchanged_Hotspot_Visibility();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_Hotspot_Visibility();
				}
			}
		});
		player.addListener('varchanged_Map_Pin_Normal_E', function(event) {
			for (var i=0; i < me._mini_map.ggMarkerInstances.length; i++) {
				me._mini_map.ggMarkerInstances[i].ggEvent_varchanged_Map_Pin_Normal_E();
			}
			for (var i=0; i < me._floorplans.ggMarkerInstances.length; i++) {
				me._floorplans.ggMarkerInstances[i].ggEvent_varchanged_Map_Pin_Normal_E();
			}
		});
		player.addListener('varchanged_Map_Pin_active_E', function(event) {
			for (var i=0; i < me._mini_map.ggMarkerInstances.length; i++) {
				me._mini_map.ggMarkerInstances[i].ggEvent_varchanged_Map_Pin_active_E();
			}
			for (var i=0; i < me._floorplans.ggMarkerInstances.length; i++) {
				me._floorplans.ggMarkerInstances[i].ggEvent_varchanged_Map_Pin_active_E();
			}
		});
		player.addListener('varchanged_Room_visibility_1F', function(event) {
			me._scrollarea_1f.logicBlock_position();
			me._scrollarea_1f.logicBlock_alpha();
			me._room_panel_1f.logicBlock_position();
			me._room_panel_1f.logicBlock_alpha();
			me._rooms_h.logicBlock_visible();
			me._floors_h.logicBlock_visible();
			me._minimap_h.logicBlock_visible();
			me._rooms_blur_bg.logicBlock_position();
			me._rooms_blur_bg.logicBlock_alpha();
		});
		player.addListener('varchanged_Room_visibility_2F', function(event) {
			me._scrollarea_2f.logicBlock_position();
			me._scrollarea_2f.logicBlock_alpha();
			me._room_panel_2f.logicBlock_position();
			me._room_panel_2f.logicBlock_alpha();
			me._rooms_h.logicBlock_visible();
			me._floors_h.logicBlock_visible();
			me._minimap_h.logicBlock_visible();
			me._rooms_blur_bg.logicBlock_position();
			me._rooms_blur_bg.logicBlock_alpha();
		});
		player.addListener('varchanged_Room_visibility_3F', function(event) {
			me._scrollarea_3f.logicBlock_position();
			me._scrollarea_3f.logicBlock_alpha();
			me._room_panel_3f.logicBlock_position();
			me._room_panel_3f.logicBlock_alpha();
			me._rooms_h.logicBlock_visible();
			me._floors_h.logicBlock_visible();
			me._minimap_h.logicBlock_visible();
			me._rooms_blur_bg.logicBlock_position();
			me._rooms_blur_bg.logicBlock_alpha();
		});
		player.addListener('varchanged_SlideShow_QG', function(event) {
			me._mouse_qg.logicBlock_visible();
			me._laptop_qg.logicBlock_visible();
			me._mobile_qg.logicBlock_visible();
			me._left_02.logicBlock_visible();
			me._left_01.logicBlock_visible();
			me._right_02.logicBlock_visible();
			me._right_01.logicBlock_visible();
		});
		player.addListener('varchanged_View_option', function(event) {
			me._right_top_corner_panel.logicBlock_visible();
		});
		player.addListener('varchanged_contactpanel', function(event) {
			me._exit_fullscreen_h.logicBlock_visible();
			me._fullscreen_h.logicBlock_visible();
			me._contact_info.logicBlock_visible();
			me._contact_info.logicBlock_alpha();
			me._contact_panel.logicBlock_position();
			me._contact_panel.logicBlock_alpha();
			me._contact_panel_blur_bg.logicBlock_position();
			me._contact_panel_blur_bg.logicBlock_alpha();
		});
		player.addListener('varchanged_map_T_Active', function(event) {
			for (var i=0; i < me._mini_map.ggMarkerInstances.length; i++) {
				me._mini_map.ggMarkerInstances[i].ggEvent_varchanged_map_T_Active();
			}
			for (var i=0; i < me._floorplans.ggMarkerInstances.length; i++) {
				me._floorplans.ggMarkerInstances[i].ggEvent_varchanged_map_T_Active();
			}
		});
		player.addListener('viewerinit', function(event) {
			me._cloner_1f.ggUpdate();
			me._cloner_2f.ggUpdate();
			me._cloner_3f.ggUpdate();
		});
	};
	function SkinCloner_cloner_3f_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__3f_roomlist=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__3f_roomlist;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__3f_roomlist__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="3F_Roomlist";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__3f_roomlist.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3f_roomlist.ggUpdateText();
		el.appendChild(els);
		me.__3f_roomlist.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3f_roomlist.onclick=function (e) {
			if (me.__3f_roomlist.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__3f_roomlist.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__3f_roomlist);
	};
	function SkinCloner_cloner_2f_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__2f_roomlist=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2f_roomlist;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__2f_roomlist__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2F_Roomlist";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__2f_roomlist.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2f_roomlist.ggUpdateText();
		el.appendChild(els);
		me.__2f_roomlist.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2f_roomlist.onclick=function (e) {
			if (me.__2f_roomlist.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__2f_roomlist.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__2f_roomlist);
	};
	function SkinCloner_cloner_1f_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__1f_roomlist=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1f_roomlist;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__1f_roomlist__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1F_Roomlist";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__1f_roomlist.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1f_roomlist.ggUpdateText();
		el.appendChild(els);
		me.__1f_roomlist.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1f_roomlist.onclick=function (e) {
			if (me.__1f_roomlist.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__1f_roomlist.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__1f_roomlist);
	};
	function SkinHotspotClass_wolfcrange_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._wolfcrange_info=document.createElement('div');
		el.ggId="WolfCrange_Info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._wolfcrange_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._wolfcrange_info.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._wolfcrange_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._wolfcrange_info.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['wolfcrange_info']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._wolfcrange_info.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['wolfcrange_info']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._wolfcrange_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._line0=document.createElement('div');
		el.ggId="line";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((2px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -100px;';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._line0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._line0.onmouseenter=function (e) {
			me.elementMouseOver['line0']=true;
			me._product_info_b.logicBlock_scaling();
		}
		me._line0.onmouseleave=function (e) {
			me.elementMouseOver['line0']=false;
			me._product_info_b.logicBlock_scaling();
		}
		me._line0.ggUpdatePosition=function (useTransition) {
		}
		el=me._product_info_b=document.createElement('div');
		els=me._product_info_b__img=document.createElement('img');
		els.className='ggskin ggskin_product_info_b';
		hs=basePath + 'images/product_info_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Product_Info_B";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 100px;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._product_info_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._product_info_b.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['line0'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._product_info_b.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._product_info_b.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._product_info_b.style.transition='transform 800ms ease 0ms';
				if (me._product_info_b.ggCurrentLogicStateScaling == 0) {
					me._product_info_b.ggParameter.sx = 1.3;
					me._product_info_b.ggParameter.sy = 1.3;
					me._product_info_b.style.transform=parameterToTransform(me._product_info_b.ggParameter);
					setTimeout(function() {skin.updateSize(me._product_info_b);}, 850);
				}
				else {
					me._product_info_b.ggParameter.sx = 1;
					me._product_info_b.ggParameter.sy = 1;
					me._product_info_b.style.transform=parameterToTransform(me._product_info_b.ggParameter);
					setTimeout(function() {skin.updateSize(me._product_info_b);}, 850);
				}
			}
		}
		me._product_info_b.logicBlock_scaling();
		me._product_info_b.onclick=function (e) {
			if (player.transitionsDisabled) {
				skin._productpanel_wolf.style.transition='none';
			} else {
				skin._productpanel_wolf.style.transition='all 500ms ease-out 0ms';
			}
			skin._productpanel_wolf.style.opacity='1';
			skin._productpanel_wolf.style.visibility=skin._productpanel_wolf.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				skin._screen_blur.style.transition='none';
			} else {
				skin._screen_blur.style.transition='all 2000ms ease 200ms';
			}
			skin._screen_blur.style.opacity='1';
			skin._screen_blur.style.visibility=skin._screen_blur.ggVisible?'inherit':'hidden';
			player.setVariableValue('Hotspot_Visibility', false);
			skin._left_bottom_corner_panel.style.transition='none';
			skin._left_bottom_corner_panel.style.visibility='hidden';
			skin._left_bottom_corner_panel.ggVisible=false;
			skin._right_top_corner_panel.style.transition='none';
			skin._right_top_corner_panel.style.visibility='hidden';
			skin._right_top_corner_panel.ggVisible=false;
			skin._right_bottom_corner_panel.style.transition='none';
			skin._right_bottom_corner_panel.style.visibility='hidden';
			skin._right_bottom_corner_panel.ggVisible=false;
		}
		me._product_info_b.ggUpdatePosition=function (useTransition) {
		}
		me._line0.appendChild(me._product_info_b);
		me._wolfcrange_info.appendChild(me._line0);
		me.elementMouseOver['wolfcrange_info']=false;
		me.elementMouseOver['line0']=false;
		me._product_info_b.logicBlock_scaling();
		me.ggUse3d=true;
		me.gg3dDistance=1000;
			me.__div = me._wolfcrange_info;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Hotspot_Visibility') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('Hotspot_Visibility') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style.transition='';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
				else if (me._ht_node.ggCurrentLogicStateVisible == 1) {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
				else {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
			}
		}
		me._ht_node.logicBlock_visible();
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player.getPanN().toFixed(1)+"\/"+player.getTilt().toFixed(1)+"\/"+me.hotspot.pan+"\/"+me.hotspot.tilt+"\/$(af-100)\n\n");
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot=document.createElement('div');
		el.ggId="Hotspot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot.style.transition='opacity 0s';
				if (me._hotspot.ggCurrentLogicStateAlpha == 0) {
					me._hotspot.style.visibility=me._hotspot.ggVisible?'inherit':'hidden';
					me._hotspot.style.opacity=1;
				}
				else {
					me._hotspot.style.visibility=me._hotspot.ggVisible?'inherit':'hidden';
					me._hotspot.style.opacity=0.5;
				}
			}
		}
		me._hotspot.logicBlock_alpha();
		me._hotspot.onmouseenter=function (e) {
			me.elementMouseOver['hotspot']=true;
			me._hotspot.logicBlock_alpha();
		}
		me._hotspot.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._hotspot_name.style.transition='none';
			} else {
				me._hotspot_name.style.transition='all 200ms ease-out 0ms';
			}
			me._hotspot_name.style.opacity='0';
			me._hotspot_name.style.visibility='hidden';
			me.elementMouseOver['hotspot']=false;
			me._hotspot.logicBlock_alpha();
		}
		me._hotspot.ggCurrentLogicStateAlpha = -1;
		me._hotspot.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot']) {
				if (player.transitionsDisabled) {
					me._hotspot_name.style.transition='none';
				} else {
					me._hotspot_name.style.transition='all 200ms ease-out 0ms';
				}
				me._hotspot_name.style.opacity='1';
				me._hotspot_name.style.visibility=me._hotspot_name.ggVisible?'inherit':'hidden';
			}
		}
		me._hotspot.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_outcircle=document.createElement('div');
		el.ggId="Hotspot_outcircle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_outcircle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_outcircle.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['hotspot_outcircle'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hotspot_outcircle.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hotspot_outcircle.ggCurrentLogicStateSize = newLogicStateSize;
				me._hotspot_outcircle.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle.ggCurrentLogicStateSize == 0) {
					me._hotspot_outcircle.style.width='60px';
					me._hotspot_outcircle.style.height='60px';
					me._hotspot_outcircle.style.left = 'calc(50% - (60px / 2) - (6px / 2))';
					me._hotspot_outcircle.style.top = 'calc(50% - (60px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle);}, 250);
				}
				else {
					me._hotspot_outcircle.style.width='50px';
					me._hotspot_outcircle.style.height='50px';
					me._hotspot_outcircle.style.left = 'calc(50% - (50px / 2) - (6px / 2))';
					me._hotspot_outcircle.style.top = 'calc(50% - (50px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle);}, 250);
				}
			}
		}
		me._hotspot_outcircle.logicBlock_size();
		me._hotspot_outcircle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_outcircle'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_outcircle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_outcircle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_outcircle.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_outcircle.style.visibility=me._hotspot_outcircle.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle.style.opacity=1;
				}
				else {
					me._hotspot_outcircle.style.visibility=me._hotspot_outcircle.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle.style.opacity=0.5;
				}
			}
		}
		me._hotspot_outcircle.logicBlock_alpha();
		me._hotspot_outcircle.onmouseenter=function (e) {
			me.elementMouseOver['hotspot_outcircle']=true;
			me._hotspot_outcircle.logicBlock_size();
			me._hotspot_outcircle.logicBlock_alpha();
		}
		me._hotspot_outcircle.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_outcircle']=false;
			me._hotspot_outcircle.logicBlock_size();
			me._hotspot_outcircle.logicBlock_alpha();
		}
		me._hotspot_outcircle.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot.appendChild(me._hotspot_outcircle);
		me._ht_node.appendChild(me._hotspot);
		el=me._hotspot_name=document.createElement('div');
		els=me._hotspot_name__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Hotspot name";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) - 50px);';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 0px 0px 5px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hotspot_name.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hotspot_name.ggUpdateText();
		player.addListener('changenode', function() {
			me._hotspot_name.ggUpdateText();
		});
		el.appendChild(els);
		me._hotspot_name.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_name.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._hotspot_name);
		me._ht_node.logicBlock_visible();
		me.elementMouseOver['ht_node']=false;
		me._hotspot.logicBlock_alpha();
		me.elementMouseOver['hotspot']=false;
		me._hotspot_outcircle.logicBlock_size();
		me._hotspot_outcircle.logicBlock_alpha();
		me.elementMouseOver['hotspot_outcircle']=false;
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_Hotspot_Visibility=function() {
				me._ht_node.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				me._hotspot.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_node_turn(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_turn=document.createElement('div');
		el.ggId="ht_node_Turn";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_turn.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_turn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Hotspot_Visibility') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('Hotspot_Visibility') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_turn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_turn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_turn.style.transition='';
				if (me._ht_node_turn.ggCurrentLogicStateVisible == 0) {
					me._ht_node_turn.style.visibility=(Number(me._ht_node_turn.style.opacity)>0||!me._ht_node_turn.style.opacity)?'inherit':'hidden';
					me._ht_node_turn.ggVisible=true;
				}
				else if (me._ht_node_turn.ggCurrentLogicStateVisible == 1) {
					me._ht_node_turn.style.visibility="hidden";
					me._ht_node_turn.ggVisible=false;
				}
				else {
					me._ht_node_turn.style.visibility=(Number(me._ht_node_turn.style.opacity)>0||!me._ht_node_turn.style.opacity)?'inherit':'hidden';
					me._ht_node_turn.ggVisible=true;
				}
			}
		}
		me._ht_node_turn.logicBlock_visible();
		me._ht_node_turn.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player.getPanN().toFixed(1)+"\/"+player.getTilt().toFixed(1)+"\/"+me.hotspot.pan+"\/"+me.hotspot.tilt+"\/$(af-100)\n\n");
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			if (
				(
					((me.ggUserdata.tags.indexOf("Turn") != -1))
				)
			) {
				player.moveToDefaultViewEx(1,0);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_turn.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_turn.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_turn']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_turn.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_turn']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_turn.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot0=document.createElement('div');
		el.ggId="Hotspot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot0'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot0.style.transition='opacity 0s';
				if (me._hotspot0.ggCurrentLogicStateAlpha == 0) {
					me._hotspot0.style.visibility=me._hotspot0.ggVisible?'inherit':'hidden';
					me._hotspot0.style.opacity=1;
				}
				else {
					me._hotspot0.style.visibility=me._hotspot0.ggVisible?'inherit':'hidden';
					me._hotspot0.style.opacity=0.5;
				}
			}
		}
		me._hotspot0.logicBlock_alpha();
		me._hotspot0.onmouseenter=function (e) {
			me.elementMouseOver['hotspot0']=true;
			me._hotspot0.logicBlock_alpha();
		}
		me._hotspot0.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._hotspot_name0.style.transition='none';
			} else {
				me._hotspot_name0.style.transition='all 200ms ease-out 0ms';
			}
			me._hotspot_name0.style.opacity='0';
			me._hotspot_name0.style.visibility='hidden';
			me.elementMouseOver['hotspot0']=false;
			me._hotspot0.logicBlock_alpha();
		}
		me._hotspot0.ggCurrentLogicStateAlpha = -1;
		me._hotspot0.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot0']) {
				if (player.transitionsDisabled) {
					me._hotspot_name0.style.transition='none';
				} else {
					me._hotspot_name0.style.transition='all 200ms ease-out 0ms';
				}
				me._hotspot_name0.style.opacity='1';
				me._hotspot_name0.style.visibility=me._hotspot_name0.ggVisible?'inherit':'hidden';
			}
		}
		me._hotspot0.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_outcircle0=document.createElement('div');
		el.ggId="Hotspot_outcircle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_outcircle0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_outcircle0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['hotspot_outcircle0'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hotspot_outcircle0.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hotspot_outcircle0.ggCurrentLogicStateSize = newLogicStateSize;
				me._hotspot_outcircle0.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle0.ggCurrentLogicStateSize == 0) {
					me._hotspot_outcircle0.style.width='60px';
					me._hotspot_outcircle0.style.height='60px';
					me._hotspot_outcircle0.style.left = 'calc(50% - (60px / 2) - (6px / 2))';
					me._hotspot_outcircle0.style.top = 'calc(50% - (60px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle0);}, 250);
				}
				else {
					me._hotspot_outcircle0.style.width='50px';
					me._hotspot_outcircle0.style.height='50px';
					me._hotspot_outcircle0.style.left = 'calc(50% - (50px / 2) - (6px / 2))';
					me._hotspot_outcircle0.style.top = 'calc(50% - (50px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle0);}, 250);
				}
			}
		}
		me._hotspot_outcircle0.logicBlock_size();
		me._hotspot_outcircle0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_outcircle0'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_outcircle0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_outcircle0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_outcircle0.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle0.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_outcircle0.style.visibility=me._hotspot_outcircle0.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle0.style.opacity=1;
				}
				else {
					me._hotspot_outcircle0.style.visibility=me._hotspot_outcircle0.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle0.style.opacity=0.5;
				}
			}
		}
		me._hotspot_outcircle0.logicBlock_alpha();
		me._hotspot_outcircle0.onmouseenter=function (e) {
			me.elementMouseOver['hotspot_outcircle0']=true;
			me._hotspot_outcircle0.logicBlock_size();
			me._hotspot_outcircle0.logicBlock_alpha();
		}
		me._hotspot_outcircle0.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_outcircle0']=false;
			me._hotspot_outcircle0.logicBlock_size();
			me._hotspot_outcircle0.logicBlock_alpha();
		}
		me._hotspot_outcircle0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot0.appendChild(me._hotspot_outcircle0);
		me._ht_node_turn.appendChild(me._hotspot0);
		el=me._hotspot_name0=document.createElement('div');
		els=me._hotspot_name0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Hotspot name";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) - 50px);';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 2px 2px 4px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hotspot_name0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hotspot_name0.ggUpdateText();
		player.addListener('changenode', function() {
			me._hotspot_name0.ggUpdateText();
		});
		el.appendChild(els);
		me._hotspot_name0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_name0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_turn.appendChild(me._hotspot_name0);
		me._ht_node_turn.logicBlock_visible();
		me.elementMouseOver['ht_node_turn']=false;
		me._hotspot0.logicBlock_alpha();
		me.elementMouseOver['hotspot0']=false;
		me._hotspot_outcircle0.logicBlock_size();
		me._hotspot_outcircle0.logicBlock_alpha();
		me.elementMouseOver['hotspot_outcircle0']=false;
			me.ggEvent_changenode=function() {
				me._ht_node_turn.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_turn.logicBlock_visible();
			};
			me.ggEvent_varchanged_Hotspot_Visibility=function() {
				me._ht_node_turn.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				me._hotspot0.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node_turn;
	};
	function SkinHotspotClass_ht_node_270(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_270=document.createElement('div');
		el.ggId="ht_node_270";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_270.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_270.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Hotspot_Visibility') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('Hotspot_Visibility') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_270.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_270.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_270.style.transition='';
				if (me._ht_node_270.ggCurrentLogicStateVisible == 0) {
					me._ht_node_270.style.visibility=(Number(me._ht_node_270.style.opacity)>0||!me._ht_node_270.style.opacity)?'inherit':'hidden';
					me._ht_node_270.ggVisible=true;
				}
				else if (me._ht_node_270.ggCurrentLogicStateVisible == 1) {
					me._ht_node_270.style.visibility="hidden";
					me._ht_node_270.ggVisible=false;
				}
				else {
					me._ht_node_270.style.visibility=(Number(me._ht_node_270.style.opacity)>0||!me._ht_node_270.style.opacity)?'inherit':'hidden';
					me._ht_node_270.ggVisible=true;
				}
			}
		}
		me._ht_node_270.logicBlock_visible();
		me._ht_node_270.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player.getPanN().toFixed(1)+"\/"+player.getTilt().toFixed(1)+"\/"+me.hotspot.pan+"\/"+me.hotspot.tilt+"\/$(af-100)\n\n");
			player.moveTo("270","0","100","1.0000");
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_270.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_270.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_270']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_270.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_270']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_270.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot1=document.createElement('div');
		el.ggId="Hotspot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot1.style.transition='opacity 0s';
				if (me._hotspot1.ggCurrentLogicStateAlpha == 0) {
					me._hotspot1.style.visibility=me._hotspot1.ggVisible?'inherit':'hidden';
					me._hotspot1.style.opacity=1;
				}
				else {
					me._hotspot1.style.visibility=me._hotspot1.ggVisible?'inherit':'hidden';
					me._hotspot1.style.opacity=0.5;
				}
			}
		}
		me._hotspot1.logicBlock_alpha();
		me._hotspot1.onmouseenter=function (e) {
			me.elementMouseOver['hotspot1']=true;
			me._hotspot1.logicBlock_alpha();
		}
		me._hotspot1.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._hotspot_name1.style.transition='none';
			} else {
				me._hotspot_name1.style.transition='all 200ms ease-out 0ms';
			}
			me._hotspot_name1.style.opacity='0';
			me._hotspot_name1.style.visibility='hidden';
			me.elementMouseOver['hotspot1']=false;
			me._hotspot1.logicBlock_alpha();
		}
		me._hotspot1.ggCurrentLogicStateAlpha = -1;
		me._hotspot1.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot1']) {
				if (player.transitionsDisabled) {
					me._hotspot_name1.style.transition='none';
				} else {
					me._hotspot_name1.style.transition='all 200ms ease-out 0ms';
				}
				me._hotspot_name1.style.opacity='1';
				me._hotspot_name1.style.visibility=me._hotspot_name1.ggVisible?'inherit':'hidden';
			}
		}
		me._hotspot1.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_outcircle1=document.createElement('div');
		el.ggId="Hotspot_outcircle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_outcircle1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_outcircle1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['hotspot_outcircle1'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hotspot_outcircle1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hotspot_outcircle1.ggCurrentLogicStateSize = newLogicStateSize;
				me._hotspot_outcircle1.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle1.ggCurrentLogicStateSize == 0) {
					me._hotspot_outcircle1.style.width='60px';
					me._hotspot_outcircle1.style.height='60px';
					me._hotspot_outcircle1.style.left = 'calc(50% - (60px / 2) - (6px / 2))';
					me._hotspot_outcircle1.style.top = 'calc(50% - (60px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle1);}, 250);
				}
				else {
					me._hotspot_outcircle1.style.width='50px';
					me._hotspot_outcircle1.style.height='50px';
					me._hotspot_outcircle1.style.left = 'calc(50% - (50px / 2) - (6px / 2))';
					me._hotspot_outcircle1.style.top = 'calc(50% - (50px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle1);}, 250);
				}
			}
		}
		me._hotspot_outcircle1.logicBlock_size();
		me._hotspot_outcircle1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_outcircle1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_outcircle1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_outcircle1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_outcircle1.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle1.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_outcircle1.style.visibility=me._hotspot_outcircle1.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle1.style.opacity=1;
				}
				else {
					me._hotspot_outcircle1.style.visibility=me._hotspot_outcircle1.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle1.style.opacity=0.5;
				}
			}
		}
		me._hotspot_outcircle1.logicBlock_alpha();
		me._hotspot_outcircle1.onmouseenter=function (e) {
			me.elementMouseOver['hotspot_outcircle1']=true;
			me._hotspot_outcircle1.logicBlock_size();
			me._hotspot_outcircle1.logicBlock_alpha();
		}
		me._hotspot_outcircle1.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_outcircle1']=false;
			me._hotspot_outcircle1.logicBlock_size();
			me._hotspot_outcircle1.logicBlock_alpha();
		}
		me._hotspot_outcircle1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot1.appendChild(me._hotspot_outcircle1);
		me._ht_node_270.appendChild(me._hotspot1);
		el=me._hotspot_name1=document.createElement('div');
		els=me._hotspot_name1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Hotspot name";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) - 50px);';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 2px 2px 4px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hotspot_name1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hotspot_name1.ggUpdateText();
		player.addListener('changenode', function() {
			me._hotspot_name1.ggUpdateText();
		});
		el.appendChild(els);
		me._hotspot_name1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_name1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_270.appendChild(me._hotspot_name1);
		me._ht_node_270.logicBlock_visible();
		me.elementMouseOver['ht_node_270']=false;
		me._hotspot1.logicBlock_alpha();
		me.elementMouseOver['hotspot1']=false;
		me._hotspot_outcircle1.logicBlock_size();
		me._hotspot_outcircle1.logicBlock_alpha();
		me.elementMouseOver['hotspot_outcircle1']=false;
			me.ggEvent_changenode=function() {
				me._ht_node_270.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_270.logicBlock_visible();
			};
			me.ggEvent_varchanged_Hotspot_Visibility=function() {
				me._ht_node_270.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				me._hotspot1.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node_270;
	};
	function SkinHotspotClass_ht_node_180(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_180=document.createElement('div');
		el.ggId="ht_node_180";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_180.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_180.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Hotspot_Visibility') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('Hotspot_Visibility') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_180.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_180.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_180.style.transition='';
				if (me._ht_node_180.ggCurrentLogicStateVisible == 0) {
					me._ht_node_180.style.visibility=(Number(me._ht_node_180.style.opacity)>0||!me._ht_node_180.style.opacity)?'inherit':'hidden';
					me._ht_node_180.ggVisible=true;
				}
				else if (me._ht_node_180.ggCurrentLogicStateVisible == 1) {
					me._ht_node_180.style.visibility="hidden";
					me._ht_node_180.ggVisible=false;
				}
				else {
					me._ht_node_180.style.visibility=(Number(me._ht_node_180.style.opacity)>0||!me._ht_node_180.style.opacity)?'inherit':'hidden';
					me._ht_node_180.ggVisible=true;
				}
			}
		}
		me._ht_node_180.logicBlock_visible();
		me._ht_node_180.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player.getPanN().toFixed(1)+"\/"+player.getTilt().toFixed(1)+"\/"+me.hotspot.pan+"\/"+me.hotspot.tilt+"\/$(af-100)\n\n");
			player.moveTo("180","0","100","1.0000");
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_180.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_180.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_180']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_180.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_180']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_180.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot2=document.createElement('div');
		el.ggId="Hotspot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot2.style.transition='opacity 0s';
				if (me._hotspot2.ggCurrentLogicStateAlpha == 0) {
					me._hotspot2.style.visibility=me._hotspot2.ggVisible?'inherit':'hidden';
					me._hotspot2.style.opacity=1;
				}
				else {
					me._hotspot2.style.visibility=me._hotspot2.ggVisible?'inherit':'hidden';
					me._hotspot2.style.opacity=0.5;
				}
			}
		}
		me._hotspot2.logicBlock_alpha();
		me._hotspot2.onmouseenter=function (e) {
			me.elementMouseOver['hotspot2']=true;
			me._hotspot2.logicBlock_alpha();
		}
		me._hotspot2.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._hotspot_name2.style.transition='none';
			} else {
				me._hotspot_name2.style.transition='all 200ms ease-out 0ms';
			}
			me._hotspot_name2.style.opacity='0';
			me._hotspot_name2.style.visibility='hidden';
			me.elementMouseOver['hotspot2']=false;
			me._hotspot2.logicBlock_alpha();
		}
		me._hotspot2.ggCurrentLogicStateAlpha = -1;
		me._hotspot2.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot2']) {
				if (player.transitionsDisabled) {
					me._hotspot_name2.style.transition='none';
				} else {
					me._hotspot_name2.style.transition='all 200ms ease-out 0ms';
				}
				me._hotspot_name2.style.opacity='1';
				me._hotspot_name2.style.visibility=me._hotspot_name2.ggVisible?'inherit':'hidden';
			}
		}
		me._hotspot2.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_outcircle2=document.createElement('div');
		el.ggId="Hotspot_outcircle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_outcircle2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_outcircle2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['hotspot_outcircle2'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hotspot_outcircle2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hotspot_outcircle2.ggCurrentLogicStateSize = newLogicStateSize;
				me._hotspot_outcircle2.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle2.ggCurrentLogicStateSize == 0) {
					me._hotspot_outcircle2.style.width='60px';
					me._hotspot_outcircle2.style.height='60px';
					me._hotspot_outcircle2.style.left = 'calc(50% - (60px / 2) - (6px / 2))';
					me._hotspot_outcircle2.style.top = 'calc(50% - (60px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle2);}, 250);
				}
				else {
					me._hotspot_outcircle2.style.width='50px';
					me._hotspot_outcircle2.style.height='50px';
					me._hotspot_outcircle2.style.left = 'calc(50% - (50px / 2) - (6px / 2))';
					me._hotspot_outcircle2.style.top = 'calc(50% - (50px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle2);}, 250);
				}
			}
		}
		me._hotspot_outcircle2.logicBlock_size();
		me._hotspot_outcircle2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_outcircle2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_outcircle2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_outcircle2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_outcircle2.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle2.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_outcircle2.style.visibility=me._hotspot_outcircle2.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle2.style.opacity=1;
				}
				else {
					me._hotspot_outcircle2.style.visibility=me._hotspot_outcircle2.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle2.style.opacity=0.5;
				}
			}
		}
		me._hotspot_outcircle2.logicBlock_alpha();
		me._hotspot_outcircle2.onmouseenter=function (e) {
			me.elementMouseOver['hotspot_outcircle2']=true;
			me._hotspot_outcircle2.logicBlock_size();
			me._hotspot_outcircle2.logicBlock_alpha();
		}
		me._hotspot_outcircle2.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_outcircle2']=false;
			me._hotspot_outcircle2.logicBlock_size();
			me._hotspot_outcircle2.logicBlock_alpha();
		}
		me._hotspot_outcircle2.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot2.appendChild(me._hotspot_outcircle2);
		me._ht_node_180.appendChild(me._hotspot2);
		el=me._hotspot_name2=document.createElement('div');
		els=me._hotspot_name2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Hotspot name";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) - 50px);';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 2px 2px 4px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hotspot_name2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hotspot_name2.ggUpdateText();
		player.addListener('changenode', function() {
			me._hotspot_name2.ggUpdateText();
		});
		el.appendChild(els);
		me._hotspot_name2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_name2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_180.appendChild(me._hotspot_name2);
		me._ht_node_180.logicBlock_visible();
		me.elementMouseOver['ht_node_180']=false;
		me._hotspot2.logicBlock_alpha();
		me.elementMouseOver['hotspot2']=false;
		me._hotspot_outcircle2.logicBlock_size();
		me._hotspot_outcircle2.logicBlock_alpha();
		me.elementMouseOver['hotspot_outcircle2']=false;
			me.ggEvent_changenode=function() {
				me._ht_node_180.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_180.logicBlock_visible();
			};
			me.ggEvent_varchanged_Hotspot_Visibility=function() {
				me._ht_node_180.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				me._hotspot2.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node_180;
	};
	function SkinHotspotClass_ht_node_90(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_90=document.createElement('div');
		el.ggId="ht_node_90";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_90.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_90.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Hotspot_Visibility') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('Hotspot_Visibility') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_90.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_90.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_90.style.transition='';
				if (me._ht_node_90.ggCurrentLogicStateVisible == 0) {
					me._ht_node_90.style.visibility=(Number(me._ht_node_90.style.opacity)>0||!me._ht_node_90.style.opacity)?'inherit':'hidden';
					me._ht_node_90.ggVisible=true;
				}
				else if (me._ht_node_90.ggCurrentLogicStateVisible == 1) {
					me._ht_node_90.style.visibility="hidden";
					me._ht_node_90.ggVisible=false;
				}
				else {
					me._ht_node_90.style.visibility=(Number(me._ht_node_90.style.opacity)>0||!me._ht_node_90.style.opacity)?'inherit':'hidden';
					me._ht_node_90.ggVisible=true;
				}
			}
		}
		me._ht_node_90.logicBlock_visible();
		me._ht_node_90.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player.getPanN().toFixed(1)+"\/"+player.getTilt().toFixed(1)+"\/"+me.hotspot.pan+"\/"+me.hotspot.tilt+"\/$(af-100)\n\n");
			player.moveTo("90","0","100","1.0000");
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_90.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_90.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_90']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_90.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_90']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_90.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot3=document.createElement('div');
		el.ggId="Hotspot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot3'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot3.style.transition='opacity 0s';
				if (me._hotspot3.ggCurrentLogicStateAlpha == 0) {
					me._hotspot3.style.visibility=me._hotspot3.ggVisible?'inherit':'hidden';
					me._hotspot3.style.opacity=1;
				}
				else {
					me._hotspot3.style.visibility=me._hotspot3.ggVisible?'inherit':'hidden';
					me._hotspot3.style.opacity=0.5;
				}
			}
		}
		me._hotspot3.logicBlock_alpha();
		me._hotspot3.onmouseenter=function (e) {
			me.elementMouseOver['hotspot3']=true;
			me._hotspot3.logicBlock_alpha();
		}
		me._hotspot3.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._hotspot_name3.style.transition='none';
			} else {
				me._hotspot_name3.style.transition='all 200ms ease-out 0ms';
			}
			me._hotspot_name3.style.opacity='0';
			me._hotspot_name3.style.visibility='hidden';
			me.elementMouseOver['hotspot3']=false;
			me._hotspot3.logicBlock_alpha();
		}
		me._hotspot3.ggCurrentLogicStateAlpha = -1;
		me._hotspot3.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot3']) {
				if (player.transitionsDisabled) {
					me._hotspot_name3.style.transition='none';
				} else {
					me._hotspot_name3.style.transition='all 200ms ease-out 0ms';
				}
				me._hotspot_name3.style.opacity='1';
				me._hotspot_name3.style.visibility=me._hotspot_name3.ggVisible?'inherit':'hidden';
			}
		}
		me._hotspot3.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_outcircle3=document.createElement('div');
		el.ggId="Hotspot_outcircle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_outcircle3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_outcircle3.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['hotspot_outcircle3'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hotspot_outcircle3.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hotspot_outcircle3.ggCurrentLogicStateSize = newLogicStateSize;
				me._hotspot_outcircle3.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle3.ggCurrentLogicStateSize == 0) {
					me._hotspot_outcircle3.style.width='60px';
					me._hotspot_outcircle3.style.height='60px';
					me._hotspot_outcircle3.style.left = 'calc(50% - (60px / 2) - (6px / 2))';
					me._hotspot_outcircle3.style.top = 'calc(50% - (60px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle3);}, 250);
				}
				else {
					me._hotspot_outcircle3.style.width='50px';
					me._hotspot_outcircle3.style.height='50px';
					me._hotspot_outcircle3.style.left = 'calc(50% - (50px / 2) - (6px / 2))';
					me._hotspot_outcircle3.style.top = 'calc(50% - (50px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle3);}, 250);
				}
			}
		}
		me._hotspot_outcircle3.logicBlock_size();
		me._hotspot_outcircle3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_outcircle3'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_outcircle3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_outcircle3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_outcircle3.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle3.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_outcircle3.style.visibility=me._hotspot_outcircle3.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle3.style.opacity=1;
				}
				else {
					me._hotspot_outcircle3.style.visibility=me._hotspot_outcircle3.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle3.style.opacity=0.5;
				}
			}
		}
		me._hotspot_outcircle3.logicBlock_alpha();
		me._hotspot_outcircle3.onmouseenter=function (e) {
			me.elementMouseOver['hotspot_outcircle3']=true;
			me._hotspot_outcircle3.logicBlock_size();
			me._hotspot_outcircle3.logicBlock_alpha();
		}
		me._hotspot_outcircle3.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_outcircle3']=false;
			me._hotspot_outcircle3.logicBlock_size();
			me._hotspot_outcircle3.logicBlock_alpha();
		}
		me._hotspot_outcircle3.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot3.appendChild(me._hotspot_outcircle3);
		me._ht_node_90.appendChild(me._hotspot3);
		el=me._hotspot_name3=document.createElement('div');
		els=me._hotspot_name3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Hotspot name";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) - 50px);';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 2px 2px 4px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hotspot_name3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hotspot_name3.ggUpdateText();
		player.addListener('changenode', function() {
			me._hotspot_name3.ggUpdateText();
		});
		el.appendChild(els);
		me._hotspot_name3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_name3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_90.appendChild(me._hotspot_name3);
		me._ht_node_90.logicBlock_visible();
		me.elementMouseOver['ht_node_90']=false;
		me._hotspot3.logicBlock_alpha();
		me.elementMouseOver['hotspot3']=false;
		me._hotspot_outcircle3.logicBlock_size();
		me._hotspot_outcircle3.logicBlock_alpha();
		me.elementMouseOver['hotspot_outcircle3']=false;
			me.ggEvent_changenode=function() {
				me._ht_node_90.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_90.logicBlock_visible();
			};
			me.ggEvent_varchanged_Hotspot_Visibility=function() {
				me._ht_node_90.logicBlock_visible();
			};
			me.hotspotTimerEvent=function() {
				me._hotspot3.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node_90;
	};
	function SkinHotspotClass_ht_node_0(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_0=document.createElement('div');
		el.ggId="ht_node_0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_0.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player.getPanN().toFixed(1)+"\/"+player.getTilt().toFixed(1)+"\/"+me.hotspot.pan+"\/"+me.hotspot.tilt+"\/$(af-100)\n\n");
			player.moveTo("0","0","100","1.0000");
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_0.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_0.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_0']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_0.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_0']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_0.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot4=document.createElement('div');
		el.ggId="Hotspot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot4'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot4.style.transition='opacity 0s';
				if (me._hotspot4.ggCurrentLogicStateAlpha == 0) {
					me._hotspot4.style.visibility=me._hotspot4.ggVisible?'inherit':'hidden';
					me._hotspot4.style.opacity=1;
				}
				else {
					me._hotspot4.style.visibility=me._hotspot4.ggVisible?'inherit':'hidden';
					me._hotspot4.style.opacity=0.5;
				}
			}
		}
		me._hotspot4.logicBlock_alpha();
		me._hotspot4.onmouseenter=function (e) {
			me.elementMouseOver['hotspot4']=true;
			me._hotspot4.logicBlock_alpha();
		}
		me._hotspot4.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._hotspot_name4.style.transition='none';
			} else {
				me._hotspot_name4.style.transition='all 200ms ease-out 0ms';
			}
			me._hotspot_name4.style.opacity='0';
			me._hotspot_name4.style.visibility='hidden';
			me.elementMouseOver['hotspot4']=false;
			me._hotspot4.logicBlock_alpha();
		}
		me._hotspot4.ggCurrentLogicStateAlpha = -1;
		me._hotspot4.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot4']) {
				if (player.transitionsDisabled) {
					me._hotspot_name4.style.transition='none';
				} else {
					me._hotspot_name4.style.transition='all 200ms ease-out 0ms';
				}
				me._hotspot_name4.style.opacity='1';
				me._hotspot_name4.style.visibility=me._hotspot_name4.ggVisible?'inherit':'hidden';
			}
		}
		me._hotspot4.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_outcircle4=document.createElement('div');
		el.ggId="Hotspot_outcircle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_outcircle4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_outcircle4.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['hotspot_outcircle4'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hotspot_outcircle4.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hotspot_outcircle4.ggCurrentLogicStateSize = newLogicStateSize;
				me._hotspot_outcircle4.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle4.ggCurrentLogicStateSize == 0) {
					me._hotspot_outcircle4.style.width='60px';
					me._hotspot_outcircle4.style.height='60px';
					me._hotspot_outcircle4.style.left = 'calc(50% - (60px / 2) - (6px / 2))';
					me._hotspot_outcircle4.style.top = 'calc(50% - (60px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle4);}, 250);
				}
				else {
					me._hotspot_outcircle4.style.width='50px';
					me._hotspot_outcircle4.style.height='50px';
					me._hotspot_outcircle4.style.left = 'calc(50% - (50px / 2) - (6px / 2))';
					me._hotspot_outcircle4.style.top = 'calc(50% - (50px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle4);}, 250);
				}
			}
		}
		me._hotspot_outcircle4.logicBlock_size();
		me._hotspot_outcircle4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_outcircle4'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_outcircle4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_outcircle4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_outcircle4.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle4.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_outcircle4.style.visibility=me._hotspot_outcircle4.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle4.style.opacity=1;
				}
				else {
					me._hotspot_outcircle4.style.visibility=me._hotspot_outcircle4.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle4.style.opacity=0.5;
				}
			}
		}
		me._hotspot_outcircle4.logicBlock_alpha();
		me._hotspot_outcircle4.onmouseenter=function (e) {
			me.elementMouseOver['hotspot_outcircle4']=true;
			me._hotspot_outcircle4.logicBlock_size();
			me._hotspot_outcircle4.logicBlock_alpha();
		}
		me._hotspot_outcircle4.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_outcircle4']=false;
			me._hotspot_outcircle4.logicBlock_size();
			me._hotspot_outcircle4.logicBlock_alpha();
		}
		me._hotspot_outcircle4.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot4.appendChild(me._hotspot_outcircle4);
		me._ht_node_0.appendChild(me._hotspot4);
		el=me._hotspot_name4=document.createElement('div');
		els=me._hotspot_name4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Hotspot name";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) - 50px);';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 2px 2px 4px rgba(0,0,0,0.7);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hotspot_name4.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hotspot_name4.ggUpdateText();
		player.addListener('changenode', function() {
			me._hotspot_name4.ggUpdateText();
		});
		el.appendChild(els);
		me._hotspot_name4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_name4.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_0.appendChild(me._hotspot_name4);
		me.elementMouseOver['ht_node_0']=false;
		me._hotspot4.logicBlock_alpha();
		me.elementMouseOver['hotspot4']=false;
		me._hotspot_outcircle4.logicBlock_size();
		me._hotspot_outcircle4.logicBlock_alpha();
		me.elementMouseOver['hotspot_outcircle4']=false;
			me.hotspotTimerEvent=function() {
				me._hotspot4.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node_0;
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.onmouseenter=function (e) {
			me.elementMouseOver['map_pin']=true;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.onmouseleave=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : calc(50% - ((75px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((75px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('Map_Pin_active_E') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('Map_Pin_active_E') == false))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='transform 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 2;
					me._map_pin_active.ggParameter.sy = 2;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					skin.updateSize(me._map_pin_active);
				}
				else if (me._map_pin_active.ggCurrentLogicStateScaling == 1) {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					skin.updateSize(me._map_pin_active);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					skin.updateSize(me._map_pin_active);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getPanN() == 0))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._map_pin_active.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._map_pin_active.style.transition='transform 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAngle == 0) {
					me._map_pin_active.ggParameter.a = 0;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
				}
				else {
					me._map_pin_active.ggParameter.a = 0;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
				}
			}
		}
		me._map_pin_active.logicBlock_angle();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='transform 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs=basePath + 'images/map_pin_normal.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: 1;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('Map_Pin_Normal_E') == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getVariableValue('Map_Pin_Normal_E') == false))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='transform 0ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.5;
					me._map_pin_normal.ggParameter.sy = 1.5;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 50);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateScaling == 1) {
					me._map_pin_normal.ggParameter.sx = 2;
					me._map_pin_normal.ggParameter.sy = 2;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 50);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateScaling == 2) {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 50);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 50);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='transform 0ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onclick=function (e) {
			skin._fp_close_b.onclick.call(skin._fp_close_b);
		}
		me._map_pin_normal.onmouseenter=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseleave=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		el=me._map_pin_tt=document.createElement('div');
		els=me._map_pin_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_pin_tt";
		el.ggDx=0;
		el.ggDy=38;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 38px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 4px 6px 4px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._map_pin_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_pin_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._map_pin_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._map_pin_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_tt.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_pin_tt.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_pin_tt.style.transition='left 0s, top 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStatePosition == 0) {
					me._map_pin_tt.style.left = 'calc(50% - (100px / 2))';
					me._map_pin_tt.style.top = 'calc(50% - (20px / 2) - (0px / 2) + -38px)';
				}
				else {
					me._map_pin_tt.style.left='calc(50% - ((100px + 0px) / 2) + 0px)';
					me._map_pin_tt.style.top='calc(50% - ((20px + 0px) / 2) + 38px)';
				}
			}
		}
		me._map_pin_tt.logicBlock_position();
		me._map_pin_tt.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('map_T_Active') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('map_T_Active') == false))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_tt.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_tt.style.transition='left 0s, top 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateScaling == 0) {
					me._map_pin_tt.ggParameter.sx = 1.5;
					me._map_pin_tt.ggParameter.sy = 1.5;
					me._map_pin_tt.style.transform=parameterToTransform(me._map_pin_tt.ggParameter);
					skin.updateSize(me._map_pin_tt);
				}
				else if (me._map_pin_tt.ggCurrentLogicStateScaling == 1) {
					me._map_pin_tt.ggParameter.sx = 0;
					me._map_pin_tt.ggParameter.sy = 0;
					me._map_pin_tt.style.transform=parameterToTransform(me._map_pin_tt.ggParameter);
					skin.updateSize(me._map_pin_tt);
				}
				else {
					me._map_pin_tt.ggParameter.sx = 1;
					me._map_pin_tt.ggParameter.sy = 1;
					me._map_pin_tt.style.transform=parameterToTransform(me._map_pin_tt.ggParameter);
					skin.updateSize(me._map_pin_tt);
				}
			}
		}
		me._map_pin_tt.logicBlock_scaling();
		me._map_pin_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('map_T_Active') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('map_T_Active') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_tt.style.transition='left 0s, top 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateVisible == 0) {
					me._map_pin_tt.style.visibility=(Number(me._map_pin_tt.style.opacity)>0||!me._map_pin_tt.style.opacity)?'inherit':'hidden';
					me._map_pin_tt.ggVisible=true;
				}
				else if (me._map_pin_tt.ggCurrentLogicStateVisible == 1) {
					me._map_pin_tt.style.visibility="hidden";
					me._map_pin_tt.ggVisible=false;
				}
				else {
					me._map_pin_tt.style.visibility="hidden";
					me._map_pin_tt.ggVisible=false;
				}
			}
		}
		me._map_pin_tt.logicBlock_visible();
		me._map_pin_tt.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['map_pin'] == true)) && 
				((player._(me.ggUserdata.title) != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_tt.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_tt.style.transition='left 0s, top 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_tt.style.visibility=me._map_pin_tt.ggVisible?'inherit':'hidden';
					me._map_pin_tt.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_tt.style.opacity == 0.0) { me._map_pin_tt.style.visibility="hidden"; } }, 505);
					me._map_pin_tt.style.opacity=0;
				}
			}
		}
		me._map_pin_tt.logicBlock_alpha();
		me._map_pin_tt.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_tt);
		me.elementMouseOver['map_pin']=false;
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_angle();
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
		me.elementMouseOver['map_pin_normal']=false;
		me._map_pin_tt.logicBlock_position();
		me._map_pin_tt.logicBlock_scaling();
		me._map_pin_tt.logicBlock_visible();
		me._map_pin_tt.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function() {
				me._map_pin_tt.logicBlock_alpha();
			};
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_scaling();
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_scaling();
				me._map_pin_normal.logicBlock_alpha();
				me._map_pin_tt.logicBlock_scaling();
				me._map_pin_tt.logicBlock_visible();
				me._map_pin_tt.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_active.logicBlock_scaling();
				me._map_pin_normal.logicBlock_scaling();
				me._map_pin_tt.logicBlock_position();
				me._map_pin_tt.logicBlock_scaling();
				me._map_pin_tt.logicBlock_visible();
				me._map_pin_tt.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._map_pin_tt.logicBlock_position();
			};
			me.ggEvent_positionchanged=function() {
				me._map_pin_active.logicBlock_angle();
			};
			me.ggEvent_varchanged_Map_Pin_Normal_E=function() {
				me._map_pin_normal.logicBlock_scaling();
			};
			me.ggEvent_varchanged_Map_Pin_active_E=function() {
				me._map_pin_active.logicBlock_scaling();
			};
			me.ggEvent_varchanged_map_T_Active=function() {
				me._map_pin_tt.logicBlock_scaling();
				me._map_pin_tt.logicBlock_visible();
			};
	player.addListener('timer', function() { var hs='';
if (me._map_pin_active.ggParameter) {
	hs+=parameterToTransform(me._map_pin_active.ggParameter) + ' ';
}
hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
me._map_pin_active.style.transform=hs; });
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node_0') {
				hotspot.skinid = 'ht_node_0';
				hsinst = new SkinHotspotClass_ht_node_0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_90') {
				hotspot.skinid = 'ht_node_90';
				hsinst = new SkinHotspotClass_ht_node_90(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_180') {
				hotspot.skinid = 'ht_node_180';
				hsinst = new SkinHotspotClass_ht_node_180(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_270') {
				hotspot.skinid = 'ht_node_270';
				hsinst = new SkinHotspotClass_ht_node_270(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_Turn') {
				hotspot.skinid = 'ht_node_Turn';
				hsinst = new SkinHotspotClass_ht_node_turn(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'WolfCrange_Info';
				hsinst = new SkinHotspotClass_wolfcrange_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._minimap_blur.ggUpdateConditionTimer();
		me._floors_b.ggUpdateConditionTimer();
		me._floor_indication_b.ggUpdateConditionTimer();
		me._showreel_b.ggUpdateConditionTimer();
		me._sr_close_b.ggUpdateConditionTimer();
		var hs='';
		if (me._text_tooltip_visit_site.ggParameter) {
			hs+=parameterToTransform(me._text_tooltip_visit_site.ggParameter) + ' ';
		}
		hs+='translate(' + (1 * player.mouse.x + 0) + 'px,0px) ';
		hs+='translate(0px,' + (1 * player.mouse.y + 0) + 'px) ';
		me._text_tooltip_visit_site.style.transform=hs;
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal } .ggskin.tooltip { font-family: "Montserrat", sans-serif; font-size: 14px; }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};
function onYouTubeIframeAPIReady() {
	setTimeout(function(){
		var videoElements = document.querySelectorAll('.ggskin_video');
		for (var i=0; i<videoElements.length; i++) {
			if (videoElements[i].ggYoutubeApiReady) {
				videoElements[i].ggYoutubeApiReady();
			}
		}
	}, 1000);
}