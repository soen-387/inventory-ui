function actionFormatter(value, row) {
    return '<a href="View.html?id=' + row.id +'">View </a><a href="Form.html?id=' + row.id + '">Edit </a><a href="#">Delete </a>';
}

function deleteResource() {
    var id = $('#id').val();
	window.location.href = "Resources.html";
}

function getData() {
	return [
    {
        "id": "1",
        "name": "Conference Room #1",
        "type": "Conference Room",
        "status": "Available"
    },
    {
        "id": "2",
        "name": "Projector #1",
        "type": "Projector",
        "status": "Available"
    },
    {
        "id": "3",
        "name": "Whiteboard #1",
        "type": "Whiteboard",
        "status": "Unavailable"
    },
    {
        "id": "4",
        "name": "Computer #1",
        "type": "Computer",
        "status": "Unavailable"
    },
    {
        "id": "5",
        "name": "Conference Room #2",
        "type": "Conference Room",
        "status": "Available"
    },
	{
        "id": "6",
        "name": "Projector #2",
        "type": "Projector",
        "status": "Unavailable"
    },
    {
        "id": "7",
        "name": "Whiteboard #2",
        "type": "Whiteboard",
        "status": "Unavailable"
    },
    {
        "id": "8",
        "name": "Computer #2",
        "type": "Computer",
        "status": "Available"
    },
    {
        "id": "9",
        "name": "Conference Room #3",
        "type": "Conference Room",
        "status": "Unavailable"
    },
    {
        "id": "10",
        "name": "Projector #3",
        "type": "Projector",
        "status": "Available"
    },
	{
        "id": "11",
        "name": "Whiteboard #3",
        "type": "Whiteboard",
        "status": "Unavailable"
    },
    {
        "id": "12",
        "name": "Computer #3",
        "type": "Computer",
        "status": "Available"
    },
    {
        "id": "13",
        "name": "Conference Room #4",
        "type": "Conference Room",
        "status": "Unavailable"
    },
    {
        "id": "14",
        "name": "Projector #4",
        "type": "Projector",
        "status": "Unavailable"
    },
    {
        "id": "15",
        "name": "Whiteboard #4",
        "type": "Whiteboard",
        "status": "Available"
    },
	{
        "id": "16",
        "name": "Computer #4",
        "type": "Computer",
        "status": "Unavailable"
    },
    {
        "id": "17",
        "name": "Conference Room #5",
        "type": "Conference Room",
        "status": "Available"
    },
    {
        "id": "18",
        "name": "Projector #5",
        "type": "Projector",
        "status": "Unavailable"
    },
    {
        "id": "19",
        "name": "Whiteboard #5",
        "type": "Whiteboard",
        "status": "Available"
    },
    {
        "id": "20",
        "name": "Computer #5",
        "type": "Computer",
        "status": "Unavailable"
    }
	];
}

$(document).ready(function(){
    $("#table").DataTable({
        data: getData(),
        columns: [
            { 
                title: "ID", 
                data: "id" 
            },
            { 
                title: "Name", 
                data: "name" 
            },
            { 
                title: "Type", 
                data: "type" 
            },
            { 
                title: "Status", 
                data: "status",
                createdCell: function(td, cellData, rowData, row, col) {
                    if(cellData == "Available"){
                        $(td).css('background-color', "#dff0d8");
                    }
                    else if(cellData == "Unavailable"){
                        $(td).css('background-color', "#f2dede");
                    }
                }
            },
            { 
                title: "Actions", 
                data: "id",
                render: function(data){
                            return "<div class='col-xs-12'>" + "<a class='col-xs-3 btn btn-primary' href='View.html?id="+ data +"'>View</a>"
                                 + "<a class='col-xs-3 btn btn-warning' style='margin-right: 15px; margin-left: 15px;' href='editResource.html?id="+ data +"'>Edit</a>" 
                                 + "<a class='col-xs-3 btn btn-danger' href=''>Delete</a>"
                                 + "</div>";
                } 
            },
            { 
                title: "Other", 
                data: "id",
                render: function(data){
                            return "<div class='checkbox'><label><input type='checkbox' value='"+ data +"'>Quick Edit</label></div>";
                }  
            }
        ]
    });

    $(".table").css("border-color", "black");
});

function getInventoryItem(id) {
	var data = getData();
	for (var i = 0; i < data.length; i++) {
		if (data[i].id == id) {
			return data[i];
		}
	}
	return null;
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function loadEdit() {
	var edit = false;
	var id = getUrlParameter('id');
	if(typeof id !== 'undefined') {
		var item = getInventoryItem(id);
		if (item != null) {
			edit = true;
			 $('#name').val(item.name)
			 $('#type').val(item.type)
			 $('#status').val(item.status)
			 $('#id').val(item.id)
			 $("#saveResource").after(' <button type="button" class="btn btn-danger" id="deleteResource">Delete</button>');
			 $(".panel-body form").before('<h2>Edit Resource</h2>');
		}
	}
	
	if(!edit) {
		$(".panel-body form").before('<h2>Create Resource</h2>');
	}
}

function quickEditFormatter(row) {
    return '<span><label class="checkbox-inline"><input type="checkbox">Quick Edit</label></span>';
}

function saveResource() {
    var resource = {
		id: $('#id').val(),
		name: $('#name').val(),
		type: $('#type').val(),
		status: $('#status').val()
	};
	window.location.href = "Resources.html";
}