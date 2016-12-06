$(document).ready(function(){
    $("#submit").on('click', function(){
		var name = $("#email").val();
		var pass = $("#password").val();
		var data = { "user_id": name, "user_password": pass };
		var test = JSON.stringify(data);
        $.ajax({
            url: 'http://localhost:8080/login',
			headers: {
				'Content-Type':'application/json'
			},
			dataType: "json",
            type : "POST",
            data : test, 
            success : function(result, status, xhr) {
				if (result.status) {
					document.cookie = xhr.getResponseHeader('Set-Cookie');
					window.location.href = "http://localhost:8081/Resources.html";
				}
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        })
    });
});