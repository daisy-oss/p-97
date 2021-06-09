function pin(){
    user=document.getElementById("name").value;
    localStorage.setItem("user",user);
    window.location="main_page.html";
    
    }