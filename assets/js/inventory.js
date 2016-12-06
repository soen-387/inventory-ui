function getData() {
	return [
    {
        "resource_id": "1",
        "id": "1",
        "type": "Conference Room",
        "status": "Available",
		"roomtype": "conference",
		"roomnumber": "H982",
		"capacity": "100",
		"height": "20",
		"width": "100",
		"length": "50"
    },
    {
        "resource_id": "2",
        "id": "1",
        "type": "Projector",
        "status": "Available"
    },
    {
        "resource_id": "3",
        "id": "1",
        "type": "Whiteboard",
        "status": "Unavailable",
		"printable": "true"
    },
    {
        "resource_id": "4",
        "id": "1",
        "type": "Computer",
        "status": "Unavailable",
		"ram": "100",
		"storage": "1000",
		"operating": "Windows 10"
    },
    {
        "resource_id": "5",
        "id": "2",
        "type": "Conference Room",
        "status": "Available",
		"roomtype": "meeting",
		"roomnumber": "H983",
		"capacity": "50",
		"height": "30",
		"width": "50",
		"length": "100"
    },
	{
        "resource_id": "6",
        "id": "2",
        "type": "Projector",
        "status": "Unavailable"
    },
    {
        "resource_id": "7",
        "id": "2",
        "type": "Whiteboard",
        "status": "Unavailable",
		"printable": "false"
    },
    {
        "resource_id": "8",
        "id": "2",
        "type": "Computer",
        "status": "Available",
		"ram": "100",
		"storage": "1000",
		"operating": "Windows 10"
    },
    {
        "resource_id": "9",
        "id": "3",
        "type": "Conference Room",
        "status": "Unavailable",
		"roomtype": "conference",
		"roomnumber": "H984",
		"capacity": "100",
		"height": "20",
		"width": "100",
		"length": "50"
    },
    {
        "resource_id": "10",
        "id": "3",
        "type": "Projector",
        "status": "Available"
    },
	{
        "resource_id": "11",
        "id": "3",
        "type": "Whiteboard",
        "status": "Unavailable",
		"printable": "true"
    },
    {
        "resource_id": "12",
        "id": "3",
        "type": "Computer",
        "status": "Available",
		"ram": "100",
		"storage": "1000",
		"operating": "Windows 10"
    },
    {
        "resource_id": "13",
        "id": "4",
        "type": "Conference Room",
        "status": "Unavailable",
		"roomtype": "meeting",
		"roomnumber": "H985",
		"capacity": "50",
		"height": "30",
		"width": "50",
		"length": "100"
    },
    {
        "resource_id": "14",
        "id": "4",
        "type": "Projector",
        "status": "Unavailable"
    },
    {
        "resource_id": "15",
        "id": "4",
        "type": "Whiteboard",
        "status": "Available",
		"printable": "false"
    },
	{
        "resource_id": "16",
        "id": "4",
        "type": "Computer",
        "status": "Unavailable",
		"ram": "100",
		"storage": "1000",
		"operating": "Windows 10"
    },
    {
        "resource_id": "17",
        "id": "5",
        "type": "Conference Room",
        "status": "Available",
		"roomtype": "conference",
		"roomnumber": "H986",
		"capacity": "100",
		"height": "20",
		"width": "100",
		"length": "50"
    },
    {
        "resource_id": "18",
        "id": "5",
        "type": "Projector",
        "status": "Unavailable"
    },
    {
        "resource_id": "19",
        "id": "5",
        "type": "Whiteboard",
        "status": "Available",
		"printable": "true"
    },
    {
        "resource_id": "20",
        "id": "5",
        "type": "Computer",
        "status": "Unavailable",
		"ram": "100",
		"storage": "1000",
		"operating": "Windows 10"
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
                data: "resource_id" 
            },
            { 
                title: "Name", 
                data: "type",
				render: function (data, type, row) {
					return data + " " + row.id;
				}
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
	
	var viewType = $("#viewType").select2({ 
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
        $("#viewResourceID").val(row.resource_id);
        viewType.val(row.type).trigger("change");

        $("viewAvailability").val(row.status).trigger("change");

        if(row.type == "Conference Room") {
			$("#viewRoomType").val(row.roomtype).trigger("change");
			$("#viewRoomNumber").val(row.roomnumber);
			$("#viewCapacity").val(row.capacity);
			$("#viewHeight").val(row.height);
			$("#viewWidth").val(row.width);
			$("#viewLength").val(row.length);
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
			$("#viewPrintableType").val(row.printable).trigger("change");
        } else {
            $("#viewPrintableGroup").hide();
        }
		
		if(row.type == "Computer") {
			$("#viewRam").val(row.ram);
			$("#viewStorage").val(row.storage);
			$("#viewOperatingSystem").val(row.operating);
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
        $("#editResourceID").val(rowData.resource_id);
        editType.val(rowData.type).trigger("change");

        $("editStatus").val(rowData.status).trigger("change");

        if(rowData.type == "Conference Room") {
			$("#editRoomType").val(rowData.roomtype).trigger("change");
			$("#editRoomNumber").val(rowData.roomnumber);
			$("#editCapacity").val(rowData.capacity);
			$("#editHeight").val(rowData.height);
			$("#editWidth").val(rowData.width);
			$("#editLength").val(rowData.length);
        } 
		
		if(rowData.type == "Whiteboard") {
			$("#editPrintableType").val(rowData.printable).trigger("change");
        } 
		
		if(rowData.type == "Computer") {
			$("#editRam").val(rowData.ram);
			$("#editStorage").val(rowData.storage);
			$("#editOperatingSystem").val(rowData.operating);
        }
    }));

    $('#createRecord').click(function() {
        var created = { "id": "0", "resource_id": "0", "type":  $("#createType").val(), "status": $("#createStatus").val() };
		
		if(created.type == "Conference Room") {
			created.roomtype = $("#createRoomType").val();
			created.roomnumber = $("#createRoomNumber").val();
			created.capacity = $("#createCapacity").val();
			created.height = $("#createHeight").val();
			created.width = $("#createWidth").val();
			created.length = $("#createLength").val();
		}
		
		if(created.type == "Whiteboard") {
			created.printable = $("#createPrintableType").val();
        }
		
		if(created.type == "Computer") {
			created.ram = $("#createRam").val();
			created.storage = $("#createStorage").val();
			created.operating = $("#createOperatingSystem").val();
        }
        
        if(created.type != null && created.type != "") {
            $.ajax({
                url: '/inventory/', // url where to submit the request
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

            table.row.add(
                created
            ).draw();

			$("#createRoomNumber").val("");
			$("#createCapacity").val("");
			$("#createHeight").val("");
			$("#createWidth").val("");
			$("#createLength").val("");
			$("#createRam").val("");
			$("#createStorage").val("");
			$("#createOperatingSystem").val("");
			$("#createRoomType").val("conference").trigger("change");
			$("#createPrintableType").val("true").trigger("change");
            createType.val("Computer").trigger("change");
            createStatus.val("Available").trigger("change");
            $("#createType").parents(".form-group").removeClass("has-error has-feedback");
            $("#createAlert").addClass("hidden");
            $("#createNameIcon").addClass("hidden");
            $("#createModal").modal("hide")
        } else {
            $("#createType").parents(".form-group").addClass("has-error has-feedback");
            $("#createAlert").removeClass("hidden");
        }
    });

    $('#editRecord').click(function() {
        var created = { "id": $("#editID").val(), "resource_id": $("#editResourceID").val(), "type":  $("#editType").val(), "status": $("#editStatus").val() };
		
		if(created.type == "Conference Room") {
			created.roomtype = $("#editRoomType").val();
			created.roomnumber = $("#editRoomNumber").val();
			created.capacity = $("#editCapacity").val();
			created.height = $("#editHeight").val();
			created.width = $("#editWidth").val();
			created.length = $("#editLength").val();
		}
		
		if(created.type == "Whiteboard") {
			created.printable = $("#editPrintableType").val();
        }
		
		if(created.type == "Computer") {
			created.ram = $("#editRam").val();
			created.storage = $("#editStorage").val();
			created.operating = $("#editOperatingSystem").val();
        }
        
        if(created.type != null && created.type != "") {
            $.ajax({
                url: '/inventory/', 
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
            table.row.add(created).draw();

            $("#editRoomNumber").val("");
			$("#editCapacity").val("");
			$("#editHeight").val("");
			$("#editWidth").val("");
			$("#editLength").val("");
			$("#editRam").val("");
			$("#editStorage").val("");
			$("#editOperatingSystem").val("");
			$("#editRoomNumber").val("conference").trigger("change");
			$("#editPrintableType").val("true").trigger("change");
            $("#editType").parents(".form-group").removeClass("has-error has-feedback");
            $("#editAlert").addClass("hidden");
            $("#editNameIcon").addClass("hidden");
            $("#editModal").modal("hide")
        } else {
            $("#editType").parents(".form-group").addClass("has-error has-feedback");
            $("#editAlert").removeClass("hidden");
			//$("#editNameIcon").removeClass("hidden");
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

            var created = { 
                "id": rowData.id, 
                "resource_id": rowData.resource_id, 
                "type":  rowData.type, 
                "status": "Available" 
            };

            table.row(row).remove();
            table.row.add(created).draw();
        });

        // $.ajax({
        //     url: '/inventory/', 
        //     type : "DELETE", 
        //     dataType : 'json', 
        //     data : ids, 
        //     success : function(result) {
                
        //         // TODO: refresh results? or use javascript to update table?
        //         console.log(result);
        //     },
        //     error: function(xhr, resp, text) {
        //         console.log(xhr, resp, text);
        //     }
        // });        
    });

    $('#quickUnavailable').click(function() {
        // get all ids of checked items
        var ids = new Array();

        $(".quickEditCB:checked").each(function() { 
            ids.push(this.value);
            var row = table.row($(this).parents('tr'));
            rowData = row.data();

            var created = { 
                "id": rowData.id, 
                "resource_id": rowData.resource_id, 
                "type":  rowData.type, 
                "status": "Unavailable" 
            };

            table.row(row).remove();
            table.row.add(created).draw();
        });

        // $.ajax({
        //     url: '/inventory/', 
        //     type : "DELETE", 
        //     dataType : 'json', 
        //     data : ids, 
        //     success : function(result) {
                
        //         // TODO: refresh results? or use javascript to update table?
        //         console.log(result);
        //     },
        //     error: function(xhr, resp, text) {
        //         console.log(xhr, resp, text);
        //     }
        // });        
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
		if (data[i].resource_id == id) {
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