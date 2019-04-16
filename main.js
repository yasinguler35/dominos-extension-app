window.onload = function(){
    let btn = document.getElementById("siparisform");
    // let closeBtn = document.querySelector("button#closeBtn");

    // let permission = Push.Permission.has();

    // alert(permission);

    btn.addEventListener("submit", function(){
        Push.create("Pizza Sipariş Takip", {
            title : "Pizza Sipariş Takip",
            body: "O geliyor pizzacı hüsamettin geliyor",
            icon : "/dominos.png",
            tag : "kk",
            link : "",
            timeout : 10000, 
            onClick: function(){
                //window.focus();
                this.close();
            },
            onShow : function (){
                console.log("Ekranda gösterildi...");
            }
        });
        
    })
    // closeBtn.addEventListener("click", function(){
    //     // Push.clear("kk");
    //     Push.clear();
    // })
    
}
