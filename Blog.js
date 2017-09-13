$(function(){
	//锁定BlogInfo部分
	lockBlogInfo=function(){
		var left=document.documentElement.clientWidth;
		var top=document.documentElement.clientHeight;
		//alert($('#BlogInfo').first().offsetHeight);
		var diffY=top-$('#BlogInfo').first().offsetHeight;
		var diffX=left-$('#BlogInfo').first().offsetWidth;
		$('#BlogInfo').css('top',diffY+'px');
	};
	lockBlogInfo();
	addEvent(window,'resize',lockBlogInfo);

	//将日期写入blogInfo中
	$('#nowDate').html(dateStr());

	//BlogInfo与背景遮罩渐变透明效果
	$('#test_img').first().onmouseover=function(){
		if(/right/.test($('#arrow_left').first().src)){
				$('#arrow_left').first().setAttribute('src','Images/arrow_left.png');
				$('#sideBar_ul').animate({
				'attr':'x',
				'target':205,
				'step':2,
				't':30,
				'speed':10,
				'fn':function(){
					addEvent($('#arrow_left').first(),'mouseover',test1);
					addEvent($('#arrow_left').first(),'mouseout',test2);
					addEvent($('#arrow_left').first(),'click',arrowClick);						
				}
				})					
			};
		$('#backgroundFace').animate({
			'attr':'o',
			'target':50,
			'step':2,
			't':30,
			'speed':10,
			'fn':function(){
				$('#infoClass').animate({
					'attr':'o',
					'target':100,
					'step':2,
					't':30,
					'speed':10
				})
			}
		});
	};
	
	$('#test_img').first().onmouseout=function(){
		$('#infoClass').animate({
			'attr':'o',
			'target':0,
			'step':2,
			't':30,
			'speed':10,
			'fn':function(){
				$('#backgroundFace').animate({
					'attr':'o',
					'target':0,
					'step':2,
					't':30,
					'speed':10
				})
			}			
		})
	}

	/*边栏箭头锁定
	lockArrow=function(){
		var left=document.documentElement.clientWidth;
		var top=document.documentElement.clientHeight;
		//alert($('#BlogInfo').first().offsetHeight);
		var diffY=top-$('#arrow_left').first().offsetHeight;
		var diffX=left-$('#arrow_left').first().offsetWidth;
		$('#arrow_left').css('top',diffY/2+'px');
		$('#arrow_left').css('left',diffX-5+'px');
	};
	lockArrow();
	addEvent(window,'resize',lockArrow);*/

	//边栏箭头透明渐变
	

	var test1=function(){
		$('#arrow_left').animate({
		'attr':'o',
		'target':100,
		'step':2,
		't':30,
		'speed':10
		})
	};

	var test2=function(){
		$('#arrow_left').animate({
		'attr':'o',
		'target':50,
		'step':2,
		't':30,
		'speed':10
		})		
	};
	$('#arrow_left').hover(test1,test2);

	//点击箭头后事件（箭头及边栏向左滑动）
	
	var arrowClick=function(){
		removeEvent($('#arrow_left').first(),'mouseover',test1);
		removeEvent($('#arrow_left').first(),'mouseout',test2);
		removeEvent($('#arrow_left').first(),'click',arrowClick);
		$('#arrow_left').css('opacity','0.5');
		$('#arrow_left').css('filter','(alpha:50)');
		if(/left/.test($('#arrow_left').first().src)){
			$('#arrow_left').first().setAttribute('src','Images/arrow_right.png');
			$('#sideBar_ul').animate({
			'attr':'x',
			'target':55,
			'step':2,
			't':30,
			'speed':10,
			'fn':function(){
				addEvent($('#arrow_left').first(),'mouseover',test1);
				addEvent($('#arrow_left').first(),'mouseout',test2);	
				addEvent($('#arrow_left').first(),'click',arrowClick);				
			}
			})			
		}else if(/right/.test($('#arrow_left').first().src)){
				$('#arrow_left').first().setAttribute('src','Images/arrow_left.png');
				$('#sideBar_ul').animate({
				'attr':'x',
				'target':205,
				'step':2,
				't':30,
				'speed':10,
				'fn':function(){
					addEvent($('#arrow_left').first(),'mouseover',test1);
					addEvent($('#arrow_left').first(),'mouseout',test2);
					addEvent($('#arrow_left').first(),'click',arrowClick);						
				}
				})					
			};
		
	}

	$('#arrow_left').bind('click',arrowClick);



});

/*window.onload = function(){
	//alert(document.getElementById('backgroundFace').style.opacity);
	var box=document.getElementById('backgroundFace');
	//alert(window.getComputedStyle(box,null).opacity);
	var BlogInfo=document.getElementById('BlogInfo');
	var test=document.getElementById('test_img');
	var arrow=document.getElementById('arrow_left');
	var infoClass=document.getElementById('infoClass');
	var pageTimer = [];


		
		var left=document.documentElement.clientWidth;
		var top=document.documentElement.clientHeight;
		
		var diffY=top-BlogInfo.offsetHeight;
		//alert(BlogInfo.offsetHeight);
		var diffX=left-BlogInfo.offsetWidth;
		
		BlogInfo.style.top=diffY+'px';
		//console.log(BlogInfo.offsetTop);
		//BlogInfo.offsetLeft=diffX;
		//BlogInfo.offsetTop=diffY;
		arrow.style.top=(top-arrow.offsetHeight)/2+'px';
		arrow.style.left=left-arrow.style.width-100+'px';

	$('#nowDate').html(dateStr());


	test.onmouseover=function(){
		for(var i=0;i<pageTimer.length;i++){
			clearInterval(pageTimer[i]);
		}
		$('#backgroundFace').changeOpa(pageTimer,50);
		$('#infoClass').changeOpa(pageTimer,100);
		
		
	};

	test.onmouseout = function(){
		for(var i=0;i<pageTimer.length;i++){
			clearInterval(pageTimer[i]);
		}
		$('#backgroundFace').changeOpa(pageTimer,0);
		$('#infoClass').changeOpa(pageTimer,0);
		
	};

	arrow.onmouseover=function(){
		for(var i=0;i<pageTimer.length;i++){
			clearInterval(pageTimer[i]);
		}
		$('#arrow_left').changeOpa(pageTimer,100);
	};

	arrow.onmouseout = function(){
		for(var i=0;i<pageTimer.length;i++){
			clearInterval(pageTimer[i]);
		}
		$('#arrow_left').changeOpa(pageTimer,20);
	};	

	window.onresize=function(){
		var left=document.documentElement.clientWidth;
		var top=document.documentElement.clientHeight;
		
		var diffY=top-BlogInfo.offsetHeight;
		//alert(BlogInfo.offsetHeight);
		var diffX=left-BlogInfo.offsetWidth;
		
		BlogInfo.style.top=diffY+'px';
		//console.log(BlogInfo.offsetTop);
		//BlogInfo.offsetLeft=diffX;
		//BlogInfo.offsetTop=diffY;
		
		arrow.style.top=(top-arrow.style.height)/2+'px';
		arrow.style.left=left-arrow.style.width-100+'px';
		//console.log(arrow.style.width);

	}
	
	$('#arrow_left').click(function(){
		for (var i=0;i<1000 ; i++)
		{	
			(function(){
				$('#arrow_left').elements[0].style.left=moveTo(90)+'px';
				function moveTo(aim){
					var dist=0;
					var aimNum=aim/100*document.documentElement.clientWidth;
					var left=$('#arrow_left').elements[0].offsetLeft;
					var time=setTimeout(function(){
						dist=left+(aimNum-left)/30;
					},3)
					return dist;
				
				}
			
			})();	
		
		}
		
	});


  		


}*/
