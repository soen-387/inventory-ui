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
	$.ajax({
            url: '/inventory', 
            type : "GET", 
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
}

function getTypes() {
    return [
        {
            id: "Computer",
            text: "Computer"
        },
        {
            id: "Conference Room",
            text: "Conference Room"
        },

        {
            id: "Projector",
            text: "Projector"
        },
        {
            id: "Whiteboard",
            text: "Whiteboard"
        }
    ];
}

$(document).ready(function(){
    var table = $("#table").DataTable({
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
                    if(cellData.toLowerCase() == "available"){
                        $(td).css('background-color', "#dff0d8");
                    }
                    else if(cellData.toLowerCase() == "unavailable"){
                        $(td).css('background-color', "#f2dede");
                    }
                }
            },
            { 
                title: "Actions", 
                data: "id",
                render: function(data, type, full, meta){
                            return "<div class='col-sm-12 btn-group'>" 
                                 + "<button type='button' class='view col-sm-4 btn btn-primary' data-toggle='modal' data-target='#viewModal'>View</button>"
                                 + "<button type='button' class='edit col-sm-4 btn btn-warning' data-toggle='modal' data-target='#editModal'>Edit</button>"
                                 + "<button type='button' class='delete col-sm-4 btn btn-danger'>Delete</button>"
                                 + "</div>";
                } 
            },
            { 
                title: "Quick Edit", 
                data: "id",
                render: function(data){
                            return "<div class='checkbox'><label><input class='quickEditCB' type='checkbox' value='"+ data +"'>Quick Edit</label></div>";
                }  
            }
        ]
    });

    var createType = $("#createType").select2({ 
        data: getTypes(),
        width: "100%"    
    });

     var createStatus = $("#createStatus").select2({ 
        width: "100%",
        minimumResultsForSearch: Infinity
     });

    var editType = $("#editType").select2({ 
        data: getTypes(),
        width: "100%"
    });

    var editStatus = $("#editStatus").select2({ 
        width: "100%",
        minimumResultsForSearch: Infinity
     });

     $("#items-multiple").select2({ 
        width: "100%",  
        allowClear: true
    });

    $(".table").css("border-color", "black");

    $("#table").on("click", ".delete",(function() {
        var row = table.row($(this).parents('tr'));
        var dialog = confirm("Are you sure you want to delete this record?");
        if (dialog == true) {
            table.row(row).remove().draw();
        } 
    }));

    $("#quickEditStatus").click(function() {
        // var quickEditRow = $(".quickEditCB");
        // console.log(quickEditRow);
    });

    $("#table").on("click", ".view",(function() {
        var row = table.row($(this).parents('tr')).data();
        $("#viewID").val(row.id);
        $("#viewName").val(row.name);
        $("#viewType").val(row.type);

        if(row.status == "Available") {
            $("#available").show();
            $("#unavailable").hide();
        } else {
            $("#available").hide();
            $("#unavailable").show();
        }

        if(row.type == "Conference Room") {
            $("#viewStatusGroup").show();
			$("#viewRoomTypeGroup").show();
			$("#viewRoomNumberGroup").show();
			$("#viewCapacityGroup").show();
			$("#viewHeightGroup").show();
			$("#viewWidthGroup").show();
			$("#viewLengthGroup").show();
        } else {
            $("#viewStatusGroup").hide();
			$("#viewRoomTypeGroup").hide();
			$("#viewRoomNumberGroup").hide();
			$("#viewCapacityGroup").hide();
			$("#viewHeightGroup").hide();
			$("#viewWidthGroup").hide();
			$("#viewLengthGroup").hide();
        }
		
		if(row.type == "Whiteboard") {
            $("#viewPrintableGroup").show();
        } else {
            $("#viewPrintableGroup").hide();
        }
		
		if(row.type == "Computer") {
            $("#viewRamGroup").show();
			$("#viewStorageGroup").show();
			$("#viewOperatingSystemGroup").show();
        } else {
            $("#viewRamGroup").hide();
			$("#viewStorageGroup").hide();
			$("#viewOperatingSystemGroup").hide();
        }
    }));

    var editRow;

    $("#table").on("click", ".edit",(function() {
        var row = table.row($(this).parents('tr'));
        var rowData = row.data();
        editRow = row;
        $("#editID").val(rowData.id);
        $("#editName").val(rowData.name);
        editType.val(rowData.type).trigger("change");

        if(rowData.status.toLowerCase() == "available") {
            editStatus.val("Available").trigger("change");
        } else if(rowData.status.toLowerCase() == "unavailable") {
             editStatus.val("Unavailable").trigger("change");
        }
    }));

    $('#createRecord').click(function() {
        var name = $("#createName").val();
        var type = $("#createType").val();
        var status = $("#createStatus").val();
        
        if(name != null && name != "") {
            $.ajax({
                url: '/inventory/'+id, // url where to submit the request
                type : "POST", // type of action POST || GET
                dataType : 'json', // data type
                data : $("#createForm").serialize(), // post data || get data
                success : function(result) {
                    // you can see the result from the console
                    // tab of the developer tools
                    console.log(result);
                },
                error: function(xhr, resp, text) {
                    console.log(xhr, resp, text);
                    // TODO cancel update
                }
            });

            table.row.add({
                "id": "0",
                "name": $("#createName").val(),
                "type": $("#createType").val(),
                "status": $("#createStatus").val()
            }).draw();

            createType.val("Computer").trigger("change");
            createStatus.val("Available").trigger("change");
            $("#createName").val("");
            $("#createName").parents(".form-group").removeClass("has-error has-feedback");
            $("#createAlert").addClass("hidden");
            $("#createNameIcon").addClass("hidden");
            $("#createModal").modal("hide")
        } else {
            $("#createName").parents(".form-group").addClass("has-error has-feedback");
            $("#createAlert").removeClass("hidden");
            $("#createNameIcon").removeClass("hidden");
        }
    });

    $('#editRecord').click(function() {
        var id = $("#editID").val();
        var name = $("#editName").val();
        var type = $("#editType").val();
        var status = $("#editStatus").val();
        
        if(name != null && name != "") {
            $.ajax({
                url: '/inventory/'+id, 
                type : "POST", 
                dataType : 'json', 
                data : $("#editForm").serialize(), 
                success : function(result) {
                    
                    
                    console.log(result);
                },
                error: function(xhr, resp, text) {
                    console.log(xhr, resp, text);
                    // TODO cancel update
                }
            });

            table.row(editRow).remove();
            table.row.add({
                "id": id,
                "name": name,
                "type": type,
                "status": status
            }).draw();

            $("#editName").val("");
            $("#editName").parents(".form-group").removeClass("has-error has-feedback");
            $("#editAlert").addClass("hidden");
            $("#editNameIcon").addClass("hidden");
            $("#editModal").modal("hide")
        } else {
            $("#editName").parents(".form-group").addClass("has-error has-feedback");
            $("#editAlert").removeClass("hidden");
            $("#editNameIcon").removeClass("hidden");
        }
    });

    $('#deleteResources').click(function() {
        // get all ids of checked items
        var ids = new Array();

        $(".quickEditCB:checked").each(function() { 
            ids.push(this.value);

            // TODO: move this into the success method
            table.row($(this).parents('tr')).remove().draw();
        });

        $.ajax({
            url: '/inventory/', 
            type : "PATCH", 
            dataType : 'json', 
            data : ids, 
            success : function(result) {
                
                // TODO: On success remove rows
                console.log(result);
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });        
    });
	
	$('#createResource').click(function() {
        $("#createType").trigger("change");       
    });

    $('#quickAvailable').click(function() {
        // get all ids of checked items
        var ids = new Array();

        $(".quickEditCB:checked").each(function() { 
            ids.push(this.value);
            var row = table.row($(this).parents('tr'));
            rowData = row.data();
            rowData.status = "Available";
            row.data(rowData);
            table.row(row).draw();
        });

        $.ajax({
            url: '/inventory/', 
            type : "DELETE", 
            dataType : 'json', 
            data : ids, 
            success : function(result) {
                
                // TODO: refresh results? or use javascript to update table?
                console.log(result);
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        });        
    });
	
	$('#editType').on('change', function (e) {
		var optionSelected = $("option:selected", this);
		var valueSelected = this.value;
		if(valueSelected == "Conference Room") {
            $("#editStatusGroup").show();
			$("#editRoomTypeGroup").show();
			$("#editRoomNumberGroup").show();
			$("#editCapacityGroup").show();
			$("#editHeightGroup").show();
			$("#editWidthGroup").show();
			$("#editLengthGroup").show();
        } else {
            $("#editStatusGroup").hide();
			$("#editRoomTypeGroup").hide();
			$("#editRoomNumberGroup").hide();
			$("#editCapacityGroup").hide();
			$("#editHeightGroup").hide();
			$("#editWidthGroup").hide();
			$("#editLengthGroup").hide();
        }
		
		if(valueSelected == "Whiteboard") {
            $("#editPrintableGroup").show();
        } else {
            $("#editPrintableGroup").hide();
        }
		
		if(valueSelected == "Computer") {
            $("#editRamGroup").show();
			$("#editStorageGroup").show();
			$("#editOperatingSystemGroup").show();
        } else {
            $("#editRamGroup").hide();
			$("#editStorageGroup").hide();
			$("#editOperatingSystemGroup").hide();
        }
	});
	
	$('#createType').on('change', function (e) {
		var optionSelected = $("option:selected", this);
		var valueSelected = this.value;
		if(valueSelected == "Conference Room") {
            $("#createStatusGroup").show();
			$("#createRoomTypeGroup").show();
			$("#createRoomNumberGroup").show();
			$("#createCapacityGroup").show();
			$("#createHeightGroup").show();
			$("#createWidthGroup").show();
			$("#createLengthGroup").show();
        } else {
            $("#createStatusGroup").hide();
			$("#createRoomTypeGroup").hide();
			$("#createRoomNumberGroup").hide();
			$("#createCapacityGroup").hide();
			$("#createHeightGroup").hide();
			$("#createWidthGroup").hide();
			$("#createLengthGroup").hide();
        }
		
		if(valueSelected == "Whiteboard") {
            $("#createPrintableGroup").show();
        } else {
            $("#createPrintableGroup").hide();
        }
		
		if(valueSelected == "Computer") {
            $("#createRamGroup").show();
			$("#createStorageGroup").show();
			$("#createOperatingSystemGroup").show();
        } else {
            $("#createRamGroup").hide();
			$("#createStorageGroup").hide();
			$("#createOperatingSystemGroup").hide();
        }
	});
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