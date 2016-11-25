$(document).ready(function(){
    $("#submit").on('click', function(){
        $.ajax({
            url: '/login', 
            type : "POST", 
            dataType : 'json', 
            data : $("#loginForm").serialize(), 
            success : function(result) {

                // TODO: redirect to resources
                console.log(result);
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
                window.location.href = "Resources.html";
                // TODO: flash prompt for pass again
            }
        })
    });
});