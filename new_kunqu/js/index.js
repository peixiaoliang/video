$(function(){
		imgList=['http://cloud.citymsg.cn/zera_gif/L/p1待机循环.gif','http://cloud.citymsg.cn/zera_gif/L/p1转p2输出.gif','http://cloud.citymsg.cn/zera_gif/L/p2待机循环.gif','http://cloud.citymsg.cn/zera_gif/L/p3-4循环.gif','http://cloud.citymsg.cn/zera_gif/L/p3-4转场输出.gif','http://cloud.citymsg.cn/zera_gif/L/p4待机循环.gif','http://cloud.citymsg.cn/zera_gif/L/p5转场输出.gif','http://cloud.citymsg.cn/zera_gif/L/p5待机循环.gif','http://cloud.citymsg.cn/zera_gif/L/p6循环.gif','http://cloud.citymsg.cn/zera_gif/L/p7循环.gif','http://cloud.citymsg.cn/zera_gif/L/p7转场输出.gif','http://cloud.citymsg.cn/zera_gif/L/p8_0328循环.gif'];
		 var ld = new loader(imgList);
        ld.loadend(function(i){
        }).complete(function(){
        	options = {
			 img1: 'L/v1.png',
			 img2: 'L/v2.png',				   
			 speed: 500,			   
			 percent: 10,
			 limit: 89,
			 onInit: function(){console.log('init');},
			 onProgress: function(p){},
			 onComplete: function(p){
			 	console.log('complete',p);
			 	image1.play()
			 	 $('.bg1').css('display','block');
				 $('#p1').css('display','none');
				 $('body').css('background','#000');
				 $('.v3').css('display','none');
			}
		 };
		 myplugin = $('#p1').cprogress(options);
        });
		 
		// 音频播放
		var audio=$('#audio')[0];
			audio.play();
			$('.le1').click(function(event){
			event.stopPropagation();//防止冒泡
	        if(audio.paused){ 
	        	// alert(1)
	           audio.play(); //播放
	           $('.le1').css('opacity','1');
	            $('.le1').css('animation',' move 3s linear infinite');
	        }else{//当前是播放状态
	           audio.pause(); //暂停
	            $('.le1').css('opacity','0.7');
	            $('.le1').css('animation','none');
	           return
	        }
		})
		document.addEventListener("WeixinJSBridgeReady", function () {
			audio.play();
			$('.le1').click(function(event){
			event.stopPropagation();//防止冒泡
	        if(audio.paused){ 
	        	// alert(1)
	           audio.play(); //播放
	           $('.le1').css('opacity','1');
	            $('.le1').css('animation',' move 3s linear infinite');
	        }else{//当前是播放状态
	           audio.pause(); //暂停
	            $('.le1').css('opacity','0.7');
	            $('.le1').css('animation','none');
	           return
	        }
		})
			}, false); 
		 if ('getContext' in document.createElement('canvas')) {
		    HTMLImageElement.prototype.play = function() {
		        if (this.storeCanvas) {
		            // 移除存储的canvas
		            this.storeCanvas.parentElement.removeChild(this.storeCanvas);
		            this.storeCanvas = null;
		            // 透明度还原
		            //image.style.opacity = '';
		        }
		        if (this.storeUrl) {
		            this.src = this.storeUrl;    
		        }
		    };
		    HTMLImageElement.prototype.stop = function() {
		        var canvas = document.createElement('canvas');
		        // 尺寸
		        var width = this.width, height = this.height;
		        if (width && height) {
		            // 存储之前的地址
		            if (!this.storeUrl) {
		                this.storeUrl = this.src;
		            }
		            // canvas大小
		            canvas.width = width;
		            canvas.height = height;
		            // 绘制图片帧（第一帧）
		            canvas.getContext('2d').drawImage(this, 0, 0, width, height);
		            // 重置当前图片
		            try {
		                this.src = canvas.toDataURL("image/gif");
		                // alert(1)
		            } catch(e) {
		                // 跨域
		                this.removeAttribute('src');
		                // 载入canvas元素
		                canvas.style.position = 'absolute';
		                // 前面插入图片
		                this.parentElement.insertBefore(canvas, this);
		                // 隐藏原图
		                //this.style.opacity = '0';
		                // 存储canvas
		                this.storeCanvas = canvas;
		            }
		        }
		    };
		}
		var image1=document.getElementById("bg1");
		// image1.stop(); 
		var image2=document.getElementById("bg2");
		// image2.stop();
		var image3=document.getElementById("bg3");
		// image3.stop();
		var image4=document.getElementById("bg4");
		// image4.stop();
		var image5=document.getElementById("bg5");
		// image5.stop();
		var image6=document.getElementById("bg6");
		// image6.stop();
		var image7=document.getElementById("bg7");
		// image7.stop();
		var image8=document.getElementById("bg8");
		// image8.stop();
		var image9=document.getElementById("bg9");
		// image9.stop();
		var image10=document.getElementById("bg10");
		// image10.stop();
		var image13=document.getElementById("bg13");
		var image14=document.getElementById("bg14");
		$('#xiajian1,#cricle').click(function(){
			$('.bg1').css('display','none');
			image2.play()
	        $('.bg2').css('display','block');
	        	setTimeout(function(){
					$('.bg2').css('display','none');
					image3.play()    
					$('.bg3').css('display','block');
				},6000)      

		});
		$('#xiajian2').click(function(){
			$('.bg3').css('display','none');
			image4.play()
	        $('.bg4').css('display','block');      

		});
		$('#xiajian3').click(function(){
			$('.bg4').css('display','none');
			image5.play()
	        $('.bg5').css('display','block'); 
	        	setTimeout(function(){
					$('.bg5').css('display','none'); 
					image14.play()
					$('.bg14').css('display','block');
				},6000)     
		});
		$('#xiajian4').click(function(){
			$('.bg6').css('display','none');
			image13.play()
			$('.bg13').css('display','block');
			setTimeout(function(){
					$('.bg13').css('display','none');
					image7.play() 
					$('.bg7').css('display','block');
				},4000) 
	             
		});
		$('#xiajian5').click(function(){
			$('.bg7').css('display','none');
			image8.play()
	        $('.bg8').css('display','block');      
		});
		$('#xiajian6').click(function(){
			$('.bg8').css('display','none');
			image9.play()
	        $('.bg9').css('display','block'); 
	        	setTimeout(function(){
					$('.bg9').css('display','none');
					image10.play()
					$('.bg10').css('display','block');
				},4000)     

		});
		$('#xiajian7').click(function(){
			$('.bg10').css('display','none');
	        $('.bg11').css('display','block');      
		});
		$('#xiajian8').click(function(){
			$('.bg11').css('display','none');
	        $('.bg12').css('display','block');      
		});
		$('#xiajian9').click(function(){
			$('.bg14').css('display','none');
			image6.play()
	        $('.bg6').css('display','block');      
		});
	})