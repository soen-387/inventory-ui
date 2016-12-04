$(document).ready(function(){
    $("#submit").on('click', function(){
		var name = $("#email").val();
		var pass = $("#password").val();
		var data = { "username": name, "password": pass };
        $.ajax({
            url: '/login', 
            type : "POST", 
            dataType : 'json', 
            data : data, 
            success : function(result) {
				if (result.status) {
					//make cookie
				}
                // TODO: redirect to resources
                console.log(result);
            },
            error: function(xhr, resp, text) {
				//need cookie
                console.log(xhr, resp, text);
                window.location.href = "Resources.html";
                // TODO: flash prompt for pass again
            }
        })
    });
});