var _0x3e82=['width','100%','leftside','35%','rightside','64.70%','hashfn','<span\x20class=\x27glyphicon\x20glyphicon-ok-circle\x27\x20style=\x27color:rgb(0,230,77);font-size:150%;\x27></span>','innerHTML','<span\x20class=\x27glyphicon\x20glyphicon-ban-circle\x27\x20style=\x27color:red;font-size:150%;\x27></span>','hfn','eval','skey','validskeyicon','######','inconsider','tmpinconsider','noconsider','floor','hval','slice','alert','Invalid\x20search\x20key\x20value','Invalid\x20Hash\x20Function\x20Result!!','unshift','length','join','charAt','pow','kval','rec','recval','Invalid\x20hash\x20function','Invalid\x20value\x20of\x20k','Invalid\x20value\x20of\x20r','#rslider','roundSlider','disabled','clr','showme','display','block','data','log','error\x20at\x20line\x20192','log2','Maximum\x20Bit\x20Length:\x20','location','reload','Text','Rect','blue','Canvas','drawingboard','rgba(255,119,51,0.3)','offsetWidth','setHeight','offsetHeight','mouse:wheel','getPointer','getZoom','zoomToPoint','offsetX','offsetY','stopPropagation','\x20i\x20=\x20','push','Group','selectable','add','\x20j\x20=\x20','Line','black','splice','tmpsavearray\x20-->\x20','toString','Saturated!!!!!\x20Not\x20Possible\x20to\x20Insert\x20this\x20Data.','Increasing\x20the\x20value\x20of\x20i','free\x20cell\x20found','getElementById','value','innerWidth','mainbody','style','height'];(function(_0x430baf,_0x75a37a){var _0x536bd3=function(_0x35f681){while(--_0x35f681){_0x430baf['push'](_0x430baf['shift']());}};_0x536bd3(++_0x75a37a);}(_0x3e82,0xa4));var _0x25cd=function(_0x4b1795,_0x56908a){_0x4b1795=_0x4b1795-0x0;var _0x24ff13=_0x3e82[_0x4b1795];return _0x24ff13;};var k=0x3;document['getElementById']('k')['value']=k;var max_bit_size=0x3;var bucketsize=0x2;document[_0x25cd('0x0')]('rec')[_0x25cd('0x1')]=bucketsize;var i=0x1;var j_arr=[0x1,0x1];var map=[0x0,0x1];var search_keys=[[],[]];var unit=0x28;var interval=0x14;var cellwidth=0x64;var bucketwidth=0x78;var cellheight=unit+interval;var j_points=[];var mid_points=[];var canvas;resizeme();function resizeme(){var _0x40820f=window['innerHeight'];var _0x235a46=window[_0x25cd('0x2')];document[_0x25cd('0x0')](_0x25cd('0x3'))[_0x25cd('0x4')][_0x25cd('0x5')]=_0x40820f+'px';document[_0x25cd('0x0')](_0x25cd('0x3'))[_0x25cd('0x4')][_0x25cd('0x6')]=_0x25cd('0x7');document[_0x25cd('0x0')](_0x25cd('0x8'))['style'][_0x25cd('0x6')]=_0x25cd('0x9');document[_0x25cd('0x0')](_0x25cd('0x8'))[_0x25cd('0x4')][_0x25cd('0x5')]=_0x40820f+'px';document['getElementById'](_0x25cd('0xa'))[_0x25cd('0x4')][_0x25cd('0x5')]=_0x40820f+'px';document[_0x25cd('0x0')](_0x25cd('0xa'))[_0x25cd('0x4')][_0x25cd('0x6')]=_0x25cd('0xb');}placeicon();function placeicon(){if(hashvalidity()){document[_0x25cd('0x0')](_0x25cd('0xc'))['innerHTML']=_0x25cd('0xd');}else{document[_0x25cd('0x0')](_0x25cd('0xc'))[_0x25cd('0xe')]=_0x25cd('0xf');}}function hashvalidity(){var _0x480b98=document[_0x25cd('0x0')](_0x25cd('0x10'))[_0x25cd('0x1')];try{var _0x2a246e=math[_0x25cd('0x11')](_0x480b98,{'k':0xb});return!![];}catch(_0x284c7b){return![];}}skeyvalidity();function skeyvalidity(){var _0x239e2f=parseInt(document[_0x25cd('0x0')](_0x25cd('0x12'))['value']);if(isNaN(_0x239e2f)){document[_0x25cd('0x0')](_0x25cd('0x13'))[_0x25cd('0xe')]=_0x25cd('0xf');document[_0x25cd('0x0')]('hval')['value']=_0x25cd('0x14');document[_0x25cd('0x0')](_0x25cd('0x15'))[_0x25cd('0xe')]='##';document[_0x25cd('0x0')](_0x25cd('0x16'))['innerHTML']='##';document[_0x25cd('0x0')](_0x25cd('0x17'))[_0x25cd('0xe')]='##';}else{var _0x77babe=document['getElementById'](_0x25cd('0x10'))[_0x25cd('0x1')];var _0x409069=0x0;try{var _0x4685b6=math[_0x25cd('0x11')](_0x77babe,{'k':_0x239e2f});_0x409069=Math[_0x25cd('0x18')](_0x4685b6);document['getElementById'](_0x25cd('0x19'))[_0x25cd('0x1')]=_0x409069;}catch(_0x302747){document['getElementByid'](_0x25cd('0x19'))[_0x25cd('0x1')]=_0x25cd('0x14');}var _0x32f996=dectobin(_0x409069);var _0x5252f2=_0x32f996[_0x25cd('0x1a')](0x0,i);var _0x123c79=_0x32f996[_0x25cd('0x1a')](i,k);var _0x2d5da4=_0x32f996[_0x25cd('0x1a')](k,max_bit_size);document[_0x25cd('0x0')](_0x25cd('0x15'))[_0x25cd('0xe')]=_0x5252f2;document[_0x25cd('0x0')](_0x25cd('0x16'))[_0x25cd('0xe')]=_0x123c79;document[_0x25cd('0x0')](_0x25cd('0x17'))[_0x25cd('0xe')]=_0x2d5da4;document[_0x25cd('0x0')](_0x25cd('0x13'))['innerHTML']='<span\x20class=\x27glyphicon\x20glyphicon-ok-circle\x27\x20style=\x27color:rgb(0,230,77);font-size:150%;\x27></span>';}}function insert(){skeyvalidity();var _0x2ce67a=parseInt(document[_0x25cd('0x0')](_0x25cd('0x12'))[_0x25cd('0x1')]);if(isNaN(_0x2ce67a)){window[_0x25cd('0x1b')](_0x25cd('0x1c'));}else{var _0x3034d3=document[_0x25cd('0x0')](_0x25cd('0x10'))['value'];var _0x37b27d=0x0;try{var _0x2c75bf=math[_0x25cd('0x11')](_0x3034d3,{'k':_0x2ce67a});_0x37b27d=Math[_0x25cd('0x18')](_0x2c75bf);insertKey(_0x37b27d);}catch(_0x1ca07b){window[_0x25cd('0x1b')](_0x25cd('0x1d'));}}}function dectobin(_0x54a562){var _0xb606ac=[];while(_0x54a562!=0x0){_0xb606ac[_0x25cd('0x1e')](_0x54a562%0x2);_0x54a562=Math['floor'](_0x54a562/0x2);}while(_0xb606ac[_0x25cd('0x1f')]<max_bit_size)_0xb606ac[_0x25cd('0x1e')](0x0);return _0xb606ac[_0x25cd('0x20')]('');}function bintodec(_0x44089e){var _0x414c2a=0x0;for(var _0x5d7139=0x0;_0x5d7139<_0x44089e[_0x25cd('0x1f')];_0x5d7139++){_0x414c2a+=parseInt(_0x44089e[_0x25cd('0x21')](_0x44089e[_0x25cd('0x1f')]-_0x5d7139-0x1))*Math[_0x25cd('0x22')](0x2,_0x5d7139);}return _0x414c2a;}kvalidate();function kvalidate(){var _0x14f7f4=parseInt(document[_0x25cd('0x0')]('k')[_0x25cd('0x1')]);if(isNaN(_0x14f7f4)){document[_0x25cd('0x0')](_0x25cd('0x23'))[_0x25cd('0xe')]=_0x25cd('0xf');}else{document[_0x25cd('0x0')](_0x25cd('0x23'))[_0x25cd('0xe')]=_0x25cd('0xd');}}recvalidate();function recvalidate(){var _0x6d2c28=parseInt(document[_0x25cd('0x0')](_0x25cd('0x24'))[_0x25cd('0x1')]);if(isNaN(_0x6d2c28)){document['getElementById']('recval')['innerHTML']=_0x25cd('0xf');}else{document[_0x25cd('0x0')](_0x25cd('0x25'))[_0x25cd('0xe')]=_0x25cd('0xd');}}function validate(){var _0x28537c=parseInt(document[_0x25cd('0x0')]('k')[_0x25cd('0x1')]);var _0x157564=parseInt(document[_0x25cd('0x0')](_0x25cd('0x24'))[_0x25cd('0x1')]);if(hashvalidity()==![]){window[_0x25cd('0x1b')](_0x25cd('0x26'));return![];}if(isNaN(_0x28537c)){window[_0x25cd('0x1b')](_0x25cd('0x27'));return![];}else if(isNaN(_0x157564)){window[_0x25cd('0x1b')](_0x25cd('0x28'));return![];}else{return!![];}}function start(){if(validate()){k=parseInt(document[_0x25cd('0x0')]('k')['value']);bucketsize=parseInt(document[_0x25cd('0x0')](_0x25cd('0x24'))['value']);$(_0x25cd('0x29'))[_0x25cd('0x2a')]({'readOnly':!![]});document[_0x25cd('0x0')](_0x25cd('0x10'))[_0x25cd('0x2b')]=!![];document['getElementById']('k')[_0x25cd('0x2b')]=!![];document[_0x25cd('0x0')](_0x25cd('0x24'))[_0x25cd('0x2b')]=!![];document[_0x25cd('0x0')]('st')[_0x25cd('0x2b')]=!![];document[_0x25cd('0x0')](_0x25cd('0x2c'))[_0x25cd('0x2b')]=![];document[_0x25cd('0x0')](_0x25cd('0x2d'))[_0x25cd('0x4')][_0x25cd('0x2e')]=_0x25cd('0x2f');skeyvalidity();reset();var _0x1e0241=0x0;var _0x47c748=$(_0x25cd('0x29'))[_0x25cd('0x30')](_0x25cd('0x2a'));var _0x32c6e2=_0x47c748['option'](_0x25cd('0x1'));var _0x33cecd=document['getElementById']('hfn')[_0x25cd('0x1')];for(var _0x274c89=0x0;_0x274c89<=_0x32c6e2;_0x274c89++){try{var _0x180c78=math[_0x25cd('0x11')](_0x33cecd,{'k':_0x274c89});var _0x82d03f=Math[_0x25cd('0x18')](_0x180c78);if(_0x1e0241<=_0x82d03f)_0x1e0241=_0x82d03f;}catch(_0x3f2986){console[_0x25cd('0x31')](_0x25cd('0x32'));;}}max_bit_size=Math[_0x25cd('0x18')](Math[_0x25cd('0x33')](_0x1e0241))+0x1;if(max_bit_size<k)max_bit_size=k;console['log'](_0x25cd('0x34')+max_bit_size);}}function clearme(){window[_0x25cd('0x35')][_0x25cd('0x36')]();}function title(_0x27e0d7){var _0x214597=new fabric[(_0x25cd('0x37'))](_0x27e0d7,{'left':0xa,'top':0xa});return _0x214597;}function drawBucket(_0x1f27d7){var _0xd0f2f=(_0x1f27d7+0x1)*cellheight;var _0x48eb58=new fabric[(_0x25cd('0x38'))]({'width':bucketwidth,'height':_0xd0f2f,'top':0x0,'left':0x0,'fill':_0x25cd('0x39')});return _0x48eb58;}function drawCell(_0x2e186c,_0x1af401,_0x4eabdc,_0xe6fb41){var _0x7517d0='';var _0x12aec2=0x0;if(_0xe6fb41==0x1){var _0x4960be=dectobin(_0x4eabdc);_0x4960be=_0x4960be['slice'](max_bit_size-i,max_bit_size);_0x12aec2=_0x4960be[_0x25cd('0x1f')];_0x7517d0=_0x4960be;}else if(_0xe6fb41==0x2){var _0x5efe94=dectobin(_0x4eabdc);var _0x534678=_0x5efe94[_0x25cd('0x1a')](0x0,_0x1af401);var _0x45b3d5=_0x5efe94['slice'](_0x1af401,max_bit_size);_0x12aec2=_0x534678[_0x25cd('0x1f')]+0x1+_0x45b3d5['length'];_0x7517d0=_0x534678+'\x20\x20'+_0x45b3d5;}while(_0x12aec2<0x5){_0x7517d0='\x20\x20'+_0x7517d0;_0x12aec2++;}var _0x589401=new fabric[(_0x25cd('0x37'))](_0x7517d0,{'left':0xa,'top':_0x2e186c*cellheight,'textBackgroundColor':'red'});return _0x589401;}function initCanvas(_0x255a7f){canvas=new fabric[(_0x25cd('0x3a'))](_0x25cd('0x3b'));canvas['clear']();canvas['backgroundColor']=_0x25cd('0x3c');canvas['setWidth'](document[_0x25cd('0x0')](_0x25cd('0xa'))[_0x25cd('0x3d')]);canvas[_0x25cd('0x3e')](document['getElementById'](_0x25cd('0xa'))[_0x25cd('0x3f')]+0xc8);canvas['setZoom'](0.5);canvas['on'](_0x25cd('0x40'),function(_0x174630){var _0x4a67b2=_0x174630['e']['deltaY'];var _0xb0b4e=canvas[_0x25cd('0x41')](_0x174630['e']);var _0x104c05=canvas[_0x25cd('0x42')]();_0x104c05=_0x104c05-_0x4a67b2/0x1f4;if(_0x104c05>0x5)_0x104c05=0x5;if(_0x104c05<0.3)_0x104c05=0.3;canvas[_0x25cd('0x43')]({'x':_0x174630['e'][_0x25cd('0x44')],'y':_0x174630['e'][_0x25cd('0x45')]},_0x104c05);_0x174630['e']['preventDefault']();_0x174630['e'][_0x25cd('0x46')]();});_0x255a7f();}function initDrawingBoard(){j_points=[];mid_points=[];var _0x7ec0ee=drawBucket(Math['pow'](0x2,i));var _0x541d3c=title(_0x25cd('0x47')+i);var _0x102528=[];_0x102528[_0x25cd('0x48')](_0x7ec0ee);_0x102528[_0x25cd('0x48')](_0x541d3c);for(var _0x2318f4=0x1;_0x2318f4<=Math[_0x25cd('0x22')](0x2,i);_0x2318f4++){var _0x51c449=drawCell(_0x2318f4,i,_0x2318f4-0x1,0x1);mid_points[_0x25cd('0x48')]((_0x2318f4+0.5)*cellheight);_0x102528[_0x25cd('0x48')](_0x51c449);}var _0x4f7552=0xc8;var _0x3de9ec=(Math[_0x25cd('0x22')](0x2,i)+0x1)*cellheight;var _0x16d079=(window['innerHeight']-_0x3de9ec)/0x2;var _0x44516a=new fabric[(_0x25cd('0x49'))](_0x102528,{'left':_0x4f7552,'top':_0x16d079});_0x44516a[_0x25cd('0x4a')]=![];canvas[_0x25cd('0x4b')](_0x44516a);for(var _0x29235c=0x0;_0x29235c<j_arr[_0x25cd('0x1f')];_0x29235c++){var _0x4b79b8=[];var _0x4022d7=drawBucket(bucketsize);var _0x1fc3f4=title(_0x25cd('0x4c')+j_arr[_0x29235c]);_0x4b79b8[_0x25cd('0x48')](_0x4022d7);_0x4b79b8['push'](_0x1fc3f4);var _0x180b26=search_keys[_0x29235c];for(var _0x2318f4=0x1;_0x2318f4<=bucketsize;_0x2318f4++){var _0x51c449;if(_0x2318f4<=_0x180b26[_0x25cd('0x1f')])_0x51c449=drawCell(_0x2318f4,k,_0x180b26[_0x2318f4-0x1],0x2);else _0x51c449=drawCell(_0x2318f4,0x0,-0x1);_0x4b79b8[_0x25cd('0x48')](_0x51c449);}var _0x32ae96=0x208;var _0x50e58d=_0x29235c*(bucketsize+0x1)*cellheight+_0x29235c*0xa+0xa;j_points[_0x25cd('0x48')](_0x50e58d+(bucketsize+0x1)*cellheight/0x2);var _0x4952e2=new fabric[(_0x25cd('0x49'))](_0x4b79b8,{'left':_0x32ae96,'top':_0x50e58d});_0x4952e2[_0x25cd('0x4a')]=![];canvas[_0x25cd('0x4b')](_0x4952e2);}var _0x720db2=[];for(var _0x1bce53=0x0;_0x1bce53<Math[_0x25cd('0x22')](0x2,i);_0x1bce53++){var _0x515ba1=_0x1bce53;var _0x2c0e8b=map[_0x1bce53];var _0x562af6=new fabric[(_0x25cd('0x4d'))]([_0x4f7552+0x6e,_0x16d079+mid_points[_0x515ba1],0x208,j_points[_0x2c0e8b]],{'strokeWidth':0x3,'stroke':_0x25cd('0x4e')});_0x720db2[_0x25cd('0x48')](_0x562af6);}var _0x100821=new fabric[(_0x25cd('0x49'))](_0x720db2);_0x100821[_0x25cd('0x4a')]=![];canvas[_0x25cd('0x4b')](_0x100821);}function increaseJval(_0x482aa0,_0x345036,_0x443a84,_0x3c7f08,_0x1f099b,_0x2a7a6c,_0x144a2d){console[_0x25cd('0x31')]('Increasing\x20the\x20value\x20of\x20j');var _0x3698ef=_0x443a84+0x1;j_arr[_0x25cd('0x4f')](_0x345036,0x1,_0x3698ef,_0x3698ef);var _0x487194=0x0;var _0x1f0caa=[];for(var _0x2c2120=0x0;_0x2c2120<map[_0x25cd('0x1f')];_0x2c2120++){if(map[_0x2c2120]==_0x345036){_0x1f0caa[_0x25cd('0x48')](_0x2c2120);}}console[_0x25cd('0x31')](_0x25cd('0x50')+_0x1f0caa[_0x25cd('0x51')]());var _0x37e79b=_0x1f0caa[_0x25cd('0x1f')]/0x2;for(var _0x35b3f5=_0x37e79b;_0x35b3f5<_0x1f0caa['length'];_0x35b3f5++){console[_0x25cd('0x31')](_0x1f0caa[_0x35b3f5]+'\x20'+_0x345036);map[_0x1f0caa[_0x35b3f5]]=_0x345036+0x1;}for(var _0x35cab0=_0x1f0caa[_0x1f0caa[_0x25cd('0x1f')]-0x1]+0x1;_0x35cab0<Math[_0x25cd('0x22')](0x2,i);_0x35cab0++){map[_0x35cab0]++;}var _0x29ae20=search_keys[_0x345036];var _0x45bcb9=[];var _0x10fabe=[];for(var _0x536763=0x0;_0x536763<_0x29ae20[_0x25cd('0x1f')];_0x536763++){var _0x180fb2=dectobin(_0x29ae20[_0x536763]);var _0x997a59=_0x180fb2[_0x25cd('0x1a')](0x0,_0x3698ef);var _0x12272b=bintodec(_0x997a59);if(_0x12272b%0x2==0x0)_0x45bcb9[_0x25cd('0x48')](_0x29ae20[_0x536763]);else _0x10fabe['push'](_0x29ae20[_0x536763]);}search_keys[_0x25cd('0x4f')](_0x345036,0x1,_0x45bcb9,_0x10fabe);console[_0x25cd('0x31')](j_arr[_0x25cd('0x51')]());console[_0x25cd('0x31')](map[_0x25cd('0x51')]());console[_0x25cd('0x31')](_0x29ae20[_0x25cd('0x51')]());console[_0x25cd('0x31')](search_keys[0x2*_0x345036]);console[_0x25cd('0x31')](search_keys[0x2*_0x345036+0x1]);insertKey(_0x1f099b,_0x2a7a6c,_0x144a2d);}function increaseIval(_0x519a49,_0x2cd646,_0x5a7911,_0x398d37,_0x25d4e7,_0x11be5f,_0x116150){if(i+0x1>k){window[_0x25cd('0x1b')](_0x25cd('0x52'));return;}else{console[_0x25cd('0x31')](_0x25cd('0x53'));++i;var _0x59c1df=map;map=[];for(var _0x50b8c7=0x0;_0x50b8c7<Math['pow'](0x2,i-0x1);_0x50b8c7++){map[_0x25cd('0x48')](_0x59c1df[_0x50b8c7]);map[_0x25cd('0x48')](_0x59c1df[_0x50b8c7]);}var _0xce4e6c=dectobin(_0x25d4e7);var _0x51dea9=_0xce4e6c[_0x25cd('0x1a')](0x0,i);var _0x488c71=_0xce4e6c[_0x25cd('0x1a')](i,k);var _0x3c0ed7=_0xce4e6c[_0x25cd('0x1a')](k,max_bit_size);document[_0x25cd('0x0')]('inconsider')[_0x25cd('0xe')]=_0x51dea9;document['getElementById'](_0x25cd('0x16'))[_0x25cd('0xe')]=_0x488c71;document[_0x25cd('0x0')](_0x25cd('0x17'))[_0x25cd('0xe')]=_0x3c0ed7;insertKey(_0x25d4e7,_0x11be5f,_0x116150);}}function insertKey(_0x468a90){var _0x492d73=dectobin(_0x468a90);var _0x14b28c=_0x492d73[_0x25cd('0x1a')](0x0,i);var _0x322a6a=_0x492d73[_0x25cd('0x1a')](i,k);var _0x9dfd8b=bintodec(_0x14b28c);var _0x934035=map[_0x9dfd8b];var _0x195b5f=j_arr[_0x934035];var _0xe2dfa0=search_keys[_0x934035][_0x25cd('0x1f')];if(_0xe2dfa0<bucketsize){console['log'](_0x25cd('0x54'));search_keys[_0x934035][_0x25cd('0x48')](_0x468a90);initCanvas(initDrawingBoard);}else if(_0xe2dfa0==bucketsize){var _0x3c7ee9=dectobin(_0x468a90);var _0xf9ad82=_0x3c7ee9[_0x25cd('0x1a')](0x0,k);var _0x300d87=!![];for(var _0x438aa2=0x0;_0x438aa2<bucketsize;_0x438aa2++){var _0x156a4b=dectobin(search_keys[_0x934035][_0x438aa2]);var _0x1251cc=_0x156a4b['slice'](0x0,k);if(_0xf9ad82!=_0x1251cc){_0x300d87=![];break;}}if(_0x300d87==!![]){window['alert']('Saturated!!!!!\x20Not\x20Possible\x20to\x20Insert\x20this\x20Data.');return;}else if(_0x195b5f<i&&_0x300d87==![]){increaseJval(_0x9dfd8b,_0x934035,_0x195b5f,_0xe2dfa0,_0x468a90,_0x14b28c,_0x322a6a);}else if(i<k&&_0x300d87==![]){increaseIval(_0x9dfd8b,_0x934035,_0x195b5f,_0xe2dfa0,_0x468a90,_0x14b28c,_0x322a6a);}}}function reset(){i=0x1;j_arr=[0x1,0x1];map=[0x0,0x1];search_keys=[[],[]];initCanvas(initDrawingBoard);}