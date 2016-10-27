function actionFormatter(value, row) {
    return '<a href="View.html?id=' + row.id +'">View </a><a href="Form.html?id=' + row.id + '">Edit </a><a href="#">Delete </a>';
}

function quickEditFormatter(row) {
    return '<span><label class="checkbox-inline"><input type="checkbox">Quick Edit</label></span>';
}

function getData() {
	return [
    {
        "id": "1",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "2",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "3",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "4",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "5",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
	{
        "id": "6",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "7",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "8",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "9",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "10",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
	{
        "id": "11",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "12",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "13",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "14",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "15",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
	{
        "id": "16",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "17",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "18",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "19",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
    {
        "id": "20",
        "name": "Cell 1",
        "type": "Cell 2",
        "status": "Cell 3"
    },
];
}