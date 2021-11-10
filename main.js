
$( "#pop_PLOD" ).change(function() {
    $("#PLID").parent().fadeIn(500);
    $("#linerids").parent().fadeIn(500);
    let select = $('#pop_PBOD');
    switch ($('#pop_PLOD').val()) {
        case '4': 
            add_options(select, ['4 3/4', '5 7/8']);
            break;
        case '4 1/2': 
            add_options(select, ['5 7/8', '6']);
            break;
        case '5': 
            add_options(select, ['6 1/8']);
            break;
        case '5 1/2': 
            add_options(select, ['6 1/2', '7 7/8']);
            break;
        case '6 5/8': 
            add_options(select, ['7 7/8', '8 1/2']);
            break;
        case '7': 
            add_options(select, ['8 1/2', '8 3/4']);
            break;
        case '7 5/8': 
            add_options(select, ['8 3/4', '9 1/2']);
            break;
        case '7 3/4': 
            add_options(select, ['8 3/4', '9 1/2']);
            break;
        case '8 5/8': 
            add_options(select, ['9 1/2', '10 5/8']);
            break;
        case '9 5/8': 
            add_options(select, ['10 5/8', '12 1/4']);
            break;
        case '9 3/4': 
            add_options(select, ['10 5/8', '12 1/4']);
            break;
    }
});

$( "#pop_PBOD" ).change(function() {
    $("#PL").parent().fadeIn(500);
    $("#length").parent().fadeIn(500);
    $("#pop_ILOD").parent().fadeIn(500);
    $("#pop_IBOD").parent().fadeIn(500);
    let select = $('#pop_ILOD');
    switch ($('#pop_PBOD').val()) {
        case '4 3/4':
            add_options(select, ['5 1/2', '6 5/8']);
            break;
        case '5 7/8':
            add_options(select, ['6 5/8', '7']);
            break;
        case '6':
            add_options(select, ['7']);
            break;
        case '6 1/8':
            add_options(select, ['7', '7 5/8', '7 3/4']);
            break;
        case '6 1/2':
            add_options(select, ['7 5/8', '7 3/4', '8 5/8']);
            break;
        case '7 7/8':
            add_options(select, ['8 5/8']);
            break;
        case '8 1/2':
            add_options(select, ['9 5/8', '9 7/8']);
            break;
        case '8 3/4':
            add_options(select, ['9 5/8', '9 7/8', '10 3/4']);
            break;
        case '9 1/2':
            add_options(select, ['10 3/4']);
            break;
        case '10 5/8':
            add_options(select, ['11 3/4', '11 7/8']);
            break;
        case '12 1/4':
            add_options(select, ['13 3/8', '14']);
            break;
    }
});

$( "#pop_ILOD" ).change(function() {
    $("#ILID").parent().fadeIn(500);
    let select = $('#pop_IBOD');
    switch ($('#pop_ILOD').val()) {
        case '5 1/2':
            add_options(select, ['6 1/2', '7 7/8']);
            break;
        case '6 5/8':
            add_options(select, ['7 7/8', '8 1/2']);
            break;
        case '7':
            add_options(select, ['8 1/2', '8 3/4']);
            break;
        case '7 5/8':
            add_options(select, ['8 1/2', '8 3/4', '9 1/2']);
            break;
        case '7 3/4':
            add_options(select, ['8 1/2', '8 3/4', '9 1/2']);
            break;
        case '8 5/8':
            add_options(select, ['9 1/2', '10 5/8']);
            break;
        case '9 5/8':
            add_options(select, ['10 5/8', '12 1/4']);
            break;
        case '9 7/8':
            add_options(select, ['10 5/8', '12 1/4']);
            break;
        case '10 3/4':
            add_options(select, ['12 1/4', '14 1/2', '14 3/4']);
            break;
        case '11 3/4':
            add_options(select, ['14 1/2', '14 3/4', '16']);
            break;
        case '11 7/8':
            add_options(select, ['14 1/2', '14 3/4', '16']);
            break;
        case '13 3/8':
            add_options(select, ['16', '17 1/2']);
            break;
        case '14':
            add_options(select, ['16', '17 1/2']);
            break;
    }
});

$( "#pop_IBOD" ).change(function() {
    $("#IL").parent().fadeIn(500);
    $("#pop_SLOD").parent().fadeIn(500);
    $("#pop_SBOD").parent().fadeIn(500);
    let select = $('#pop_SLOD');
    switch ($('#pop_IBOD').val()) {
        case '6 1/2':
            add_options(select, ['7 5/8', '7 3/4', '8 5/8']);
            break;
        case '7 7/8':
            add_options(select, ['8 5/8', '9 5/8', '9 7/8']);
            break;
        case '8 1/2':
            add_options(select, ['9 5/8', '9 7/8']);
            break;
        case '8 3/4':
            add_options(select, ['9 5/8', '9 7/8', '10 3/4']);
            break;
        case '9 1/2':
            add_options(select, ['10 3/4']);
            break;
        case '10 5/8':
            add_options(select, ['11 3/4', '11 7/8']);
            break;
        case '12 1/4':
            add_options(select, ['13 3/8', '14']);
            break;
        case '14 1/2':
            add_options(select, ['16']);
            break;
        case '14 3/4':
            add_options(select, ['16']);
            break;
        case '16':
            add_options(select, ['18 5/8']);
            break;
        case '17 1/2':
            add_options(select, ['18 5/8', '20']);
            break;
    }
});

$( "#pop_SLOD" ).change(function() {
    $("#SLID").parent().fadeIn(500);
    let select = $('#pop_SBOD');
    switch ($('#pop_SLOD').val()) {
        case '7 5/8':
            add_options(select, ['8 1/2', '8 3/4', '9 1/2']);
            break;
        case '7 3/4':
            add_options(select, ['8 1/2', '8 3/4', '9 1/2']);
            break;
        case '8 5/8':
            add_options(select, ['10 5/8']);
            break;
        case '9 5/8':
            add_options(select, ['10 5/8', '12 1/4']);
            break;
        case '9 7/8':
            add_options(select, ['10 5/8', '12 1/4']);
            break;
        case '10 3/4':
            add_options(select, ['12 1/4']);
            break;
        case '11 3/4':
            add_options(select, ['14 1/2', '14 3/4', '16']);
            break;
        case '11 7/8':
            add_options(select, ['14 1/2', '14 3/4', '16']);
            break;
        case '13 3/8':
            add_options(select, ['14 1/2', '14 3/4', '16', '17 1/2']);
            break;
        case '14':
            add_options(select, ['14 1/2', '14 3/4', '16', '17 1/2']);
            break;
        case '16':
            add_options(select, ['17 1/2', '20', '24']);
            break;
        case '18 5/8':
            add_options(select, ['24', '26']);
            break;
        case '20':
            add_options(select, ['24', '26']);
            break;
    }
});

$( "#pop_SBOD" ).change(function() {
    $("#SuL").parent().fadeIn(500);
    $("#pop_CLOD").parent().fadeIn(500);
    $("#pop_CBOD").parent().fadeIn(500);
    let select = $('#pop_CLOD');
    switch ($('#pop_SBOD').val()) {
        case '8 1/2':
            add_options(select, ['9 5/8', '9 7/8']);
            break;
        case '8 3/4':
            add_options(select, ['9 5/8', '9 7/8', '10 3/4']);
            break;
        case '9 1/2':
            add_options(select, ['10 3/4']);
            break;
        case '10 5/8':
            add_options(select, ['11 3/4', '11 7/8']);
            break;
        case '12 1/4':
            add_options(select, ['13 3/8', '14']);
            break;
        case '14 1/2':
            add_options(select, ['16']);
            break;
        case '14 3/4':
            add_options(select, ['16']);
            break;
        case '16':
            add_options(select, ['18 5/8']);
            break;
        case '17 1/2':
            add_options(select, ['18 5/8', '20']);
            break;
        case '20':
            add_options(select, ['24']);
            break;
        case '24':
            add_options(select, ['30']);
            break;
        case '26':
            add_options(select, ['30']);
            break;
    }
});

$( "#pop_CLOD" ).change(function() {
    $("#CLID").parent().fadeIn(500);
    let select = $('#pop_CBOD');
    switch ($('#pop_CLOD').val()) {
        case '9 5/8':
            add_options(select, ['10 5/8', '12 1/2']);
            break;
        case '9 7/8':
            add_options(select, ['10 5/8', '12 1/2']);
            break;
        case '10 3/4':
            add_options(select, ['12 1/2', '14 1/2', '12 3/4']);
            break;
        case '11 3/4':
            add_options(select, ['14 1/2', '14 3/4', '16']);
            break;
        case '11 7/8':
            add_options(select, ['14 1/2', '14 3/4', '16']);
            break;
        case '13 3/8':
            add_options(select, ['14 1/2', '14 3/4', '16', '17 1/2']);
            break;
        case '14':
            add_options(select, ['14 1/2', '14 3/4', '16', '17 1/2']);
            break;
        case '16':
            add_options(select, ['17 1/2', '20', '24']);
            break;
        case '18 5/8':
            add_options(select, ['24', '26']);
            break;
        case '20':
            add_options(select, ['26']);
            break;
        case '24':
            add_options(select, ['30']);
            break;
        case '30':
            add_options(select, ['36']);
            break;
    }
});

$( "#pop_CBOD" ).change(function() {
    $("#CL").parent().fadeIn(500);
    $("#pop_STLOD").parent().fadeIn(500);
    $("#pop_STBOD").parent().fadeIn(500);
    let select = $('#pop_STLOD');
    switch ($('#pop_CBOD').val()) {
        case '10 5/8':
            add_options(select, ['11 3/4', '11 7/8']);
            break;
        case '12 1/2':
            add_options(select, ['13 3/8', '14']);
            break;
        case '14 1/2':
            add_options(select, ['16']);
            break;
        case '14 3/4':
            add_options(select, ['16']);
            break;
        case '16':
            add_options(select, ['18 5/8']);
            break;
        case '17 1/2':
            add_options(select, ['18 5/8', '20']);
            break;
        case '20':
            add_options(select, ['24']);
            break;
        case '24':
            add_options(select, ['30']);
            break;
        case '26':
            add_options(select, ['30']);
            break;
        case '30':
            add_options(select, ['36']);
            break;
        case '36':
            add_options(select, ['42']);
            break;
    }
});

$( "#pop_STLOD" ).change(function() {
    $("#STLID").parent().fadeIn(500);
    let select = $('#pop_STBOD');
    switch ($('#pop_STLOD').val()) {
        case '11 3/4':
            add_options(select, ['11 3/4']);
            break;
        case '11 7/8':
            add_options(select, ['11 7/8']);
            break;
        case '13 3/8':
            add_options(select, ['13 3/8']);
            break;
        case '14':
            add_options(select, ['14']);
            break;
        case '16':
            add_options(select, ['16']);
            break;
        case '18 5/8':
            add_options(select, ['18 5/8']);
            break;
        case '20':
            add_options(select, ['20']);
            break;
        case '24':
            add_options(select, ['24']);
            break;
        case '30':
            add_options(select, ['30']);
            break;
        case '36':
            add_options(select, ['36']);
            break;
        case '42':
            add_options(select, ['42']);
            break;
    }
});

$( "#pop_STBOD" ).change(function() {
    $("#StL").parent().fadeIn(500);
});

function add_options(select, values){
    select.find('option').remove();
    select.append($('<option>', ''))
    $.each(values, function(key, value) {
        select.append($('<option>', value)
            .text(value));
    });
}
