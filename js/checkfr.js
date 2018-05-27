var inputs = document.forms['home1'].getElementsByTagName('input');
var textareas = document.forms['home1'].getElementsByTagName('textarea');
	var run_onchange = false;
	function valid(){
 	
 	var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
 	for(var i=0; i<inputs.length; i++){
  	var value = inputs[i].value;
    // var val = textarea.value;
  	var id = inputs[i].getAttribute('id');
    // Tạo phần tử span lưu thông tin lỗi
    var span = document.createElement('span');
    // Nếu span đã tồn tại thì remove
    var value1 = textareas.value 
    var p = inputs[i].parentNode;
    if(p.lastChild.nodeName == 'SPAN') {p.removeChild(p.lastChild);
    }
    if( value1 == ""){
      span.innerHTML="Can not be empty"
    }
    // Kiểm tra rỗng
    if(value == ''){
      span.innerHTML ='Can not be empty';
   	}

    // Kiểm tra các trường hợp khác
    if(id =='email'){
      var email =value;
      if(reg_mail.test(value) == false){ span.innerHTML ='Invalid import email(ex: abc@gmail.com)';
    }
    
  	if(id == 'confirm_email' && value != email){span.innerHTML ='Invalid import email fail';
	}
	    // Kiểm tra số điện thoại

    if(id == 'phone' && isNaN(value) == true){span.innerHTML ='Số điện thoại phải là kiểu số';}

    

     // Kiểm tra password
     if(id == 'password'){
      if(value.length <8){span.innerHTML ='Password must be from 8 characters';}
      var pass =value;
    }
 	}

    // Nếu có lỗi thì chèn span vào hồ sơ, chạy onchange, submit return false, highlight border
    if(span.innerHTML != ''){
     inputs[i].parentNode.appendChild(span);
     errors = true;
     run_onchange = true;
     inputs[i].style.border = '1px solid #c6807b';
     inputs[i].style.background = '#fffcf9';
     span.style.color= 'red';
     span.style.fontFamily='PlayfairDisplayR'
     span.style.textTransform ='initial'

   }

   }// end for

   if(errors == false){alert('Đăng ký thành công');}

   return !errors;

  }// end valid()

  

  // Chạy hàm kiểm tra valid()

  var register = document.getElementById('submit');

  register.onclick = function(){

   return valid();

 }

  // Kiểm tra lỗi với sự kiện onchange -> gọi lại hàm valid()

  for(var i=0; i<inputs.length; i++){

    var id = inputs[i].getAttribute('id');

    inputs[i].onchange = function(){

     if(run_onchange == true){

      this.style.border = '1px solid #999';

      this.style.background = '#fff';

      valid();

    }

  }

   }// end for
