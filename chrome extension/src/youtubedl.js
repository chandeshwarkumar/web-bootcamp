


window.onload = function(){
    var url = document.getElementById('id_url');
    var btn = document.getElementById('search');
    
    

    url.value = "https://www.youtube.com/watch?v=lY8Ol2n4o4A";
    btn.click();


    setTimeout(() => { 
        var results = document.getElementById('convert-result'); 
        var download = document.getElementById('720');
        window.location.href = download.href;
     }, 1000);
    
}