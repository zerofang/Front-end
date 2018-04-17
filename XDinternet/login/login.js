//通用ID获取函数和事件绑定函数
function addLoadListener(fn){
				if(typeof window.addLoadListener !='undefined'){
					window.addEventListener('load',fn,false);
				}else if(typeof document.addLoadListener !='undefined'){
					document.addLoadListener('load',fn,false);
				}else if(typeof window.attachEvent !='undefined'){
					window.attachEvent('onload',fn);
				}
				else {
					var oldfn=window.onload;
					if(typeof window.onload !='function'){
						window.onload=fn;
					}else{
						window.onload=function(){
							oldfn();
							fn();
						};
					}
				}
		}

	var g = function(id){
			if( id.substr(0,1)=='.'){
				return document.getElementsByClassName(id.substr(1));
			}
			else return document.getElementById(id);
		}
	//登陆框js
	function LogCheck(LogForm){
		var log_user=/^[a-zA-Z0-9_]{1,}$/;
		if(LogForm.username.value==""){
			alert("请输入用户名")
			LogForm.username.focus();
			return (false);
		}else if(LogForm.username.value.length<6||LogForm.username.length>12||!log_user.test(LogForm.username.value)){
			alert("请验证用户名是否正确");
			LogForm.username.focus();
			return (false);
		}
		if(LogForm.password.value==""||LogForm.password.value.length<6||LogForm.password.value.length>15){
			alert("密码不正确");
			LogForm.password.focus();
			return (false);
		}else {
			 LogForm.password.value=hex_sha1(LogForm.password.value);
		}
		if(LogForm.usercode.value==""||LogForm.usercode.value.length!=4){
			alert("验证码不正确");
			LogForm.usercode.focus();
			return (false);
		}
		alert(LogForm.usercode.value);
	}

	function RegCheck(RegForm){
		  //用户名长度验证及字符验证
		  if (RegForm.username.value == ""){
		    	alert("用户名不可为空!");
		    	RegForm.username.focus();
		    	return (false);
		  }else if(RegForm.username.value.length<6||RegForm.username.value.length>12){
		    		alert("用户名请限制在6-12位");
		    		RegForm.username.focus();
		    		return (false);
		  		}else if(RegForm.username !=""){
				  			var reg_user=/^[a-zA-Z0-9_]{1,}$/;
				  			if(!reg_user.test(RegForm.username.value)){
				  				alert("用户名只能由以数字英语下划线组成");
				  				RegForm.username.focus();
				  				return (false);
				  			}
		  				}
		  if (RegForm.password.value == ""){
		    	alert("必须设定登录密码!");
		    	RegForm.password.focus();
		    	return (false);
		  }else if(RegForm.password.value.length<6||RegForm.password>15){
		  		alert("密码请限制在6-15位");
		  		RegForm.password.focus();
		  		return (false);
		  }
		  if (RegForm.repass.value != RegForm.password.value){
		    	alert("两次密码不一致!");
		    	RegForm.repass.focus();
		    	return (false);
		  }
		  if(RegForm.repass.value == RegForm.password.value){
		  		RegForm.password.value=hex_sha1(RegForm.password.value);
		  		RegForm.repass.value=hex_sha1(RegForm.repass.value);
		  }
		  //邮箱验证
		  if (RegForm.email.value == ""){
		    	alert("电子邮箱不可为空!");
		    	RegForm.email.focus();
		    	return (false);
		  }else if(RegForm.email.value!=""){
		  		 	var reg_email =/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
		  		 	if(!reg_email.test(RegForm.email.value)){
			  		 	alert("邮箱格式错误");
			  		 	RegForm.email.focus();
			  		 	return (false);
		  			}
		  }
			if(RegForm.usercode.value==""||RegForm.usercode.value.length!=4){
				alert("验证码不正确");
				RegForm.usercode.focus();
				return (false);
			}
	}

	function contrl_left(){
		var login_box=g('login-Reg');
		if(parseInt(document.body.clientWidth)<600){
			var login_Maxwidth=document.body.clientWidth;
			var login_width=login_box.offsetWidth;
			login_box.style.left=(parseInt(login_Maxwidth)-parseInt(login_width))/2+'px';
		}
	}
	addLoadListener(contrl_left);
