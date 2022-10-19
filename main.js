function login(){
    var id = document.getElementById("loginId").value;
    var pw = document.getElementById("loginPw").value;

    if(id=='asdf'){
        if(pw == '1234'){
          alert("성공맨이야")  
        }else{
          alert("비밀번호 아이고난!")  
        }
        
    }else{
        alert("아이고난!!")  
    }
}
function showpopup(){
    document.getElementById('popup').style.display = 'block';
    document.getElementById('showpopupBtn').style.display = 'none';

}
function closepopup(){
    document.getElementById('popup').style.display = 'none';
    document.getElementById('showpopupBtn').style.display = 'block';
}
function closepopupDiv(){
    document.getElementById('popup').style.display = 'none';
    document.getElementById('showpopupBtn').style.display = 'block';
}