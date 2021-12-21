
// Diagrama de brocas
// Fade In entre os campos = Liner OD chama Liner ID
$("#pop_PLOD").change(function () {
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
//  Fade In entre os campos = Bit OD chama length
$("#pop_PBOD").change(function () {
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

$("#pop_ILOD").change(function () {
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

$("#pop_IBOD").change(function () {
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

$("#pop_SLOD").change(function () {
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

$("#pop_SBOD").change(function () {
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

$("#pop_CLOD").change(function () {
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

$("#pop_CBOD").change(function () {
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

$("#pop_STLOD").change(function () {
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

$("#pop_STBOD").change(function () {
    $("#StL").parent().fadeIn(500);
});

// Adiciona opções no select de forma dinâmica
function add_options(select, values) {
    select.find('option').remove();
    select.append($('<option>', ''))
    $.each(values, function (key, value) {
        select.append($('<option>', value)
            .text(value));
    });
}

// declaração de variáveis volume de lama
var MudVolumeProduction, MudVolumeIntermediate, MudVolumeSurface, MudVolumeConductor, MudVolumeStructural, MudVolumeTotal;

$("#run").click(function () {

    $("#results").parent().fadeIn(500);
    $("#results-table").parent().fadeIn(500);

    //Seta variável OD e alerta erro se production não estiver preenchido
    var OD_ProductionCasing = $("#pop_PLOD").val();
    if (!OD_ProductionCasing)
        alert('Please choose a Production Casing OD.');

    var HoleSizePC = $("#pop_PBOD").val();
    if (!HoleSizePC)
        alert('Please choose a Production Bit OD.');

    // Inicia as variáveis com valor zero caso não tenham sido preenchidas

    var OD_IntermediateCasing = $("#pop_ILOD").val();
    if (!OD_IntermediateCasing)
        OD_IntermediateCasing = 0.0;

    var HoleSizeIC = $("#pop_IBOD").val();
    if (!HoleSizeIC)
        HoleSizeIC = 0.0;

    var OD_SurfaceCasing = $("#pop_SLOD").val();
    if (!OD_SurfaceCasing)
        OD_SurfaceCasing = 0.0;

    var HoleSizeSC = $("#pop_SBOD").val();
    if (!HoleSizeSC)
        HoleSizeSC = 0.0;

    var OD_ConductorCasing = $("#pop_CLOD").val();
    if (!OD_ConductorCasing)
        OD_ConductorCasing = 0.0;

    var HoleSizeCC = $("#pop_CBOD").val();
    if (!HoleSizeCC)
        HoleSizeCC = 0.0;

    var OD_StructuralCasing = $("#pop_STLOD").val();
    if (!OD_StructuralCasing)
        OD_StructuralCasing = 0.0;

    var HoleSizeSTC = $("#pop_STBOD").val();
    if (!HoleSizeSTC)
        HoleSizeSTC = 0.0;

    //Conversão de fração para decimal
    switch (OD_ProductionCasing) {
        case '4':
            OD_ProductionCasing = 4.0;
            break;
        case '4 1/2':
            OD_ProductionCasing = 4.5;
            break;
        case '5':
            OD_ProductionCasing = 5.0;
            break;
        case '5 1/2':
            OD_ProductionCasing = 5.5;
            break;
        case '6 5/8':
            OD_ProductionCasing = 6.625;
            break;
        case '7':
            OD_ProductionCasing = 7.0;
            break;
        case '7 5/8':
            OD_ProductionCasing = 7.625;
            break;
        case '7 3/4':
            OD_ProductionCasing = 7.75;
            break;
        case '8 5/8':
            OD_ProductionCasing = 8.625;
            break;
        case '9 5/8':
            OD_ProductionCasing = 9.625;
            break;
        case '9 3/4':
            OD_ProductionCasing = 9.75;
            break;
    }
    switch (HoleSizePC) {
        case '4 3/4':
            HoleSizePC = 4.75;
            break;
        case '5 7/8':
            HoleSizePC = 5.875;
            break;
        case '6':
            HoleSizePC = 6.0;
            break;
        case '6 1/8':
            HoleSizePC = 6.125;
            break;
        case '6 1/2':
            HoleSizePC = 6.5;
            break;
        case '7 7/8':
            HoleSizePC = 7.875;
            break;
        case '8 1/2':
            HoleSizePC = 8.5;
            break;
        case '8 3/4':
            HoleSizePC = 8.75;
            break;
        case '9 1/2':
            HoleSizePC = 9.5;
            break;
        case '10 5/8':
            HoleSizePC = 10.625;
            break;
        case '12 1/4':
            HoleSizePC = 12.25;
            break;
    }
    switch (OD_IntermediateCasing) {
        case '5 1/2':
            OD_IntermediateCasing = 5.5;
            break;
        case '6 5/8':
            OD_IntermediateCasing = 6.625;
            break;
        case '7':
            OD_IntermediateCasing = 7.0;
            break;
        case '7 5/8':
            OD_IntermediateCasing = 7.625;
            break;
        case '7 3/4':
            OD_IntermediateCasing = 7.75;
            break;
        case '8 5/8':
            OD_IntermediateCasing = 8.625;
            break;
        case '9 5/8':
            OD_IntermediateCasing = 9.625;
            break;
        case '9 7/8':
            OD_IntermediateCasing = 9.875;
            break;
        case '10 3/4':
            OD_IntermediateCasing = 10.75;
            break;
        case '11 3/4':
            OD_IntermediateCasing = 11.75;
            break;
        case '11 7/8':
            OD_IntermediateCasing = 11.875;
            break;
        case '13 3/8':
            OD_IntermediateCasing = 13.375;
            break;
        case '14':
            OD_IntermediateCasing = 14.0;
            break;
    }
    switch (HoleSizeIC) {
        case '6 1/2':
            HoleSizeIC = 6.5;
            break;
        case '7 7/8':
            HoleSizeIC = 7.875;
            break;
        case '8 1/2':
            HoleSizeIC = 8.5;
            break;
        case '8 3/4':
            HoleSizeIC = 8.75;
            break;
        case '9 1/2':
            HoleSizeIC = 9.5;
            break;
        case '10 5/8':
            HoleSizeIC = 10.625;
            break;
        case '12 1/4':
            HoleSizeIC = 12.25;
            break;
        case '14 1/2':
            HoleSizeIC = 14.5;
            break;
        case '14 3/4':
            HoleSizeIC = 14.75;
            break;
        case '16':
            HoleSizeIC = 16.0;
            break;
        case '17 1/2':
            HoleSizeIC = 17.5;
            break;
    }
    switch (OD_SurfaceCasing) {
        case '7 5/8':
            OD_SurfaceCasing = 7.625;
            break;
        case '7 3/4':
            OD_SurfaceCasing = 7.75;
            break;
        case '8 5/8':
            OD_SurfaceCasing = 8.625;
            break;
        case '9 5/8':
            OD_SurfaceCasing = 9.625;
            break;
        case '9 7/8':
            OD_SurfaceCasing = 9.875;
            break;
        case '10 3/4':
            OD_SurfaceCasing = 10.75;
            break;
        case '11 3/4':
            OD_SurfaceCasing = 11.75;
            break;
        case '11 7/8':
            OD_SurfaceCasing = 11.875;
            break;
        case '13 3/8':
            OD_SurfaceCasing = 13.375;
            break;
        case '14':
            OD_SurfaceCasing = 14.0;
            break;
        case '16':
            OD_SurfaceCasing = 16.0;
            break;
        case '18 5/8':
            OD_SurfaceCasing = 18.625;
            break;
        case '20':
            OD_SurfaceCasing = 20.0;
            break;
    }
    switch (HoleSizeSC) {
        case '8 1/2':
            HoleSizeSC = 8.5;
            break;
        case '8 3/4':
            HoleSizeSC = 8.75;
            break;
        case '9 1/2':
            HoleSizeSC = 9.5;
            break;
        case '10 5/8':
            HoleSizeSC = 10.625;
            break;
        case '12 1/4':
            HoleSizeSC = 12.25;
            break;
        case '14 1/2':
            HoleSizeSC = 14.5;
            break;
        case '14 3/4':
            HoleSizeSC = 14.75;
            break;
        case '16':
            HoleSizeSC = 16.0;
            break;
        case '17 1/2':
            HoleSizeSC = 17.5;
            break;
        case '20':
            HoleSizeSC = 20.0;
            break;
        case '24':
            HoleSizeSC = 24.0;
            break;
        case '26':
            HoleSizeSC = 26.0;
            break;
    }
    switch (OD_ConductorCasing) {
        case '9 5/8':
            OD_ConductorCasing = 9.625;
            break;
        case '9 7/8':
            OD_ConductorCasing = 9.875;
            break;
        case '10 3/4':
            OD_ConductorCasing = 10.75;
            break;
        case '11 3/4':
            OD_ConductorCasing = 11.75;
            break;
        case '11 7/8':
            OD_ConductorCasing = 11.875;
            break;
        case '13 3/8':
            OD_ConductorCasing = 13.375;
            break;
        case '14':
            OD_ConductorCasing = 14.0;
            break;
        case '16':
            OD_ConductorCasing = 16.0;
            break;
        case '18 5/8':
            OD_ConductorCasing = 18.625;
            break;
        case '20':
            OD_ConductorCasing = 20.0;
            break;
        case '24':
            OD_ConductorCasing = 24.0;
            break;
        case '30':
            OD_ConductorCasing = 30.0;
            break;
    }
    switch (HoleSizeCC) {
        case '10 5/8':
            HoleSizeCC = 10.625;
            break;
        case '12 1/2':
            HoleSizeCC = 12.5;
            break;
        case '14 1/2':
            HoleSizeCC = 14.5;
            break;
        case '14 3/4':
            HoleSizeCC = 14.75;
            break;
        case '16':
            HoleSizeCC = 16.0;
            break;
        case '17 1/2':
            HoleSizeCC = 17.5;
            break;
        case '20':
            HoleSizeCC = 20.0;
            break;
        case '24':
            HoleSizeCC = 24.0;
            break;
        case '26':
            HoleSizeCC = 26.0;
            break;
        case '30':
            HoleSizeCC = 30.0;
            break;
        case '36':
            HoleSizeCC = 36.0;
            break;
    }
    switch (OD_StructuralCasing) {
        case '11 3/4':
            OD_StructuralCasing = 11.75;
            break;
        case '11 7/8':
            OD_StructuralCasing = 11.875;
            break;
        case '13 3/8':
            OD_StructuralCasing = 13.375;
            break;
        case '14':
            OD_StructuralCasing = 14.0;
            break;
        case '16':
            OD_StructuralCasing = 16.0;
            break;
        case '18 5/8':
            OD_StructuralCasing = 18.625;
            break;
        case '20':
            OD_StructuralCasing = 20.0;
            break;
        case '24':
            OD_StructuralCasing = 24.0;
            break;
        case '30':
            OD_StructuralCasing = 30.0;
            break;
        case '36':
            OD_StructuralCasing = 36.0;
            break;
        case '42':
            OD_StructuralCasing = 42.0;
            break;
    }
    switch (HoleSizeSTC) {
        case '11 3/4':
            HoleSizeSTC = 11.75;
            break;
        case '11 7/8':
            HoleSizeSTC = 11.875;
            break;
        case '13 3/8':
            HoleSizeSTC = 13.375;
            break;
        case '14':
            HoleSizeSTC = 14.0;
            break;
        case '16':
            HoleSizeSTC = 16.0;
            break;
        case '18 5/8':
            HoleSizeSTC = 18.625;
            break;
        case '20':
            HoleSizeSTC = 20.0;
            break;
        case '24':
            HoleSizeSTC = 24.0;
            break;
        case '30':
            HoleSizeSTC = 30.0;
            break;
        case '36':
            HoleSizeSTC = 36.0;
            break;
        case '42':
            HoleSizeSTC = 42.0;
            break;
    }

    // Seta variável Length e alerta erro se production não estiver preenchido
    var L_ProductionCasing = Number($("#PL").val());
    if (!L_ProductionCasing)
        alert('Please choose a Production Length.');

    var L_IntermediateCasing = Number($("#IL").val());
    var L_SurfaceCasing = Number($("#SuL").val());
    var L_ConductorCasing = Number($("#CL").val());
    var L_StructuralCasing = Number($("#StL").val());

    // Seta variável ID e alerta erro se production não estiver preenchido
    var ID_ProductionCasing = Number($("#PLID").val());
    if (!ID_ProductionCasing)
        alert('Please choose an Production ID.');

    var ID_IntermediateCasing = Number($("#ILID").val());
    var ID_SurfaceCasing = Number($("#SLID").val());
    var ID_ConductorCasing = Number($("#CLID").val());
    var ID_StructuralCasing = Number($("#STLID").val());

    // Calcula o volume de cimento
    var CementVolumeProduction = (((HoleSizePC ** 2 - OD_ProductionCasing ** 2) * L_ProductionCasing) / 1029.4);

    var CementVolumeIntermediate = (((HoleSizeIC ** 2 - OD_IntermediateCasing ** 2) * L_IntermediateCasing) / 1029.4);

    var CementVolumeSurface = (((HoleSizeSC ** 2 - OD_SurfaceCasing ** 2) * L_SurfaceCasing) / 1029.4);

    var CementVolumeConductor = (((HoleSizeCC ** 2 - OD_ConductorCasing ** 2) * L_ConductorCasing) / 1029.4);

    var CementVolumeStructural = (((HoleSizeSTC ** 2 - OD_StructuralCasing ** 2) * L_StructuralCasing) / 1029.4);

    var CementVolumeTotal = (CementVolumeProduction + CementVolumeIntermediate + CementVolumeSurface + CementVolumeConductor);


    // Calcula o volume do Open Hole
    var OpenHoleVolumeProduction = (((HoleSizePC ** 2) * L_ProductionCasing) / 1029.4);

    var OpenHoleVolumeIntermediate = (((HoleSizeIC ** 2) * L_IntermediateCasing) / 1029.4);

    var OpenHoleVolumeSurface = (((HoleSizeSC ** 2) * L_SurfaceCasing) / 1029.4);

    var OpenHoleVolumeConductor = (((HoleSizeCC ** 2) * L_ConductorCasing) / 1029.4);

    var OpenHoleVolumeStructural = (((OD_StructuralCasing ** 2) * L_StructuralCasing) / 1029.4);
    var OpenHoleVolumeTotal = (OpenHoleVolumeProduction + OpenHoleVolumeIntermediate + OpenHoleVolumeSurface + OpenHoleVolumeConductor);


    // Calcula o volume de lama
    MudVolumeProduction = (((ID_ProductionCasing ** 2) * L_ProductionCasing) / 1029.4);

    MudVolumeIntermediate = (((ID_IntermediateCasing ** 2) * L_IntermediateCasing) / 1029.4);

    MudVolumeSurface = (((ID_SurfaceCasing ** 2) * L_SurfaceCasing) / 1029.4);

    MudVolumeConductor = (((ID_ConductorCasing ** 2) * L_ConductorCasing) / 1029.4);

    MudVolumeStructural = (((ID_StructuralCasing ** 2) * L_StructuralCasing) / 1029.4);
    MudVolumeTotal = (MudVolumeProduction + MudVolumeIntermediate + MudVolumeSurface + MudVolumeConductor);


    // Calcula o Casing Displacement
    var CasingDisplacementProduction = (((OD_ProductionCasing ** 2 - ID_ProductionCasing ** 2) * L_ProductionCasing) / 1029.4);

    var CasingDisplacementIntermediate = (((OD_IntermediateCasing ** 2 - ID_IntermediateCasing ** 2) * L_IntermediateCasing) / 1029.4);

    var CasingDisplacementSurface = (((OD_SurfaceCasing ** 2 - ID_SurfaceCasing ** 2) * L_SurfaceCasing) / 1029.4);

    var CasingDisplacementConductor = (((OD_ConductorCasing ** 2 - ID_ConductorCasing ** 2) * L_ConductorCasing) / 1029.4);

    var CasingDisplacementStructural = (((OD_StructuralCasing ** 2 - ID_StructuralCasing ** 2) * L_StructuralCasing) / 1029.4);
    var CasingDisplacementTotal = (CasingDisplacementProduction + CasingDisplacementIntermediate + CasingDisplacementSurface + CasingDisplacementConductor);

    // oculta as linhas da tabela que estão zeradas
    !OpenHoleVolumeIntermediate ? $("#intermediate").hide() : $("#intermediate").show();
    !OpenHoleVolumeSurface ? $("#surface").hide() : $("#surface").show();
    !OpenHoleVolumeConductor ? $("#conductor").hide() : $("#conductor").show();
    !OpenHoleVolumeStructural ? $("#structural").hide() : $("#structural").show();

    // oculta as opções zeradas de well section
    !OpenHoleVolumeIntermediate ? $("[id^=section]").children('option[value="Intermediate"]').remove() : null;
    !OpenHoleVolumeSurface ? $("[id^=section]").children('option[value="Surface"]').remove() : null;
    !OpenHoleVolumeConductor ? $("[id^=section]").children('option[value="Conductor"]').remove() : null;
    !OpenHoleVolumeStructural ? $("[id^=section]").children('option[value="Structural"]').remove() : null;

    // Preenche os campos de resultados
    //OpenHoleVolume
    $("#Production_OHV").text(OpenHoleVolumeProduction.toFixed(3));
    $("#Intermediate_OHV").text(OpenHoleVolumeIntermediate.toFixed(3));
    $("#Surface_OHV").text(OpenHoleVolumeSurface.toFixed(3));
    $("#Conductor_OHV").text(OpenHoleVolumeConductor.toFixed(3));
    $("#Structural_OHV").text(OpenHoleVolumeStructural.toFixed(3));
    $("#Total_OHV").text(OpenHoleVolumeTotal.toFixed(3));
    //CementVolume
    $("#Production_CV").text(CementVolumeProduction.toFixed(3));
    $("#Intermediate_CV").text(CementVolumeIntermediate.toFixed(3));
    $("#Surface_CV").text(CementVolumeSurface.toFixed(3));
    $("#Conductor_CV").text(CementVolumeConductor.toFixed(3));
    $("#Structural_CV").text(CementVolumeStructural.toFixed(3));
    $("#Total_CV").text(CementVolumeTotal.toFixed(3));
    //MudVolume
    $("#Production_MV").text(MudVolumeProduction.toFixed(3));
    $("#Intermediate_MV").text(MudVolumeIntermediate.toFixed(3));
    $("#Surface_MV").text(MudVolumeSurface.toFixed(3));
    $("#Conductor_MV").text(MudVolumeConductor.toFixed(3));
    $("#Structural_MV").text(MudVolumeStructural.toFixed(3));
    $("#Total_MV").text(MudVolumeTotal.toFixed(3));
    //CasingDisplacement
    $("#Production_CD").text(CasingDisplacementProduction.toFixed(3));
    $("#Intermediate_CD").text(CasingDisplacementIntermediate.toFixed(3));
    $("#Surface_CD").text(CasingDisplacementSurface.toFixed(3));
    $("#Conductor_CD").text(CasingDisplacementConductor.toFixed(3));
    $("#Structural_CD").text(CasingDisplacementStructural.toFixed(3));
    $("#Total_CD").text(CasingDisplacementTotal.toFixed(3));

    // Gráfico

    var shift = ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) - (OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing)) / 2;

    // Plota o hole
    var x = [((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) - (HoleSizePC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) + (HoleSizePC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) + (HoleSizePC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) + (HoleSizeIC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) + (HoleSizeIC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) + (HoleSizeSC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) + (HoleSizeSC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) + (HoleSizeCC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) + (HoleSizeCC / 2), (HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC), (HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC), 0, 0, ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) - (HoleSizeCC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) - (HoleSizeCC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) - (HoleSizeSC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) - (HoleSizeSC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) - (HoleSizeIC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) - (HoleSizeIC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) - (HoleSizePC / 2), ((HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC) / 2) - (HoleSizePC / 2)];
    var y = [L_ProductionCasing + L_IntermediateCasing + L_ConductorCasing + L_SurfaceCasing + L_StructuralCasing, L_ProductionCasing + L_IntermediateCasing + L_ConductorCasing + L_SurfaceCasing + L_StructuralCasing, L_IntermediateCasing + L_ConductorCasing + L_SurfaceCasing + L_StructuralCasing, L_IntermediateCasing + L_ConductorCasing + L_SurfaceCasing + L_StructuralCasing, L_ConductorCasing + L_SurfaceCasing + L_StructuralCasing, L_ConductorCasing + L_SurfaceCasing + L_StructuralCasing, L_ConductorCasing + L_StructuralCasing, L_ConductorCasing + L_StructuralCasing, L_StructuralCasing, L_StructuralCasing, 0, 0, L_StructuralCasing, L_StructuralCasing, L_StructuralCasing + L_ConductorCasing, L_StructuralCasing + L_ConductorCasing, L_StructuralCasing + L_ConductorCasing + L_SurfaceCasing, L_StructuralCasing + L_ConductorCasing + L_SurfaceCasing, L_StructuralCasing + L_ConductorCasing + L_SurfaceCasing + L_IntermediateCasing, L_StructuralCasing + L_ConductorCasing + L_SurfaceCasing + L_IntermediateCasing, L_StructuralCasing + L_ConductorCasing + L_SurfaceCasing + L_IntermediateCasing + L_ProductionCasing];

    // Polígonos do gráfico
    // production
    var x1 = [((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) - (OD_ProductionCasing / 2) + shift, ((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) - (OD_ProductionCasing / 2) + shift];
    var y1 = [L_ProductionCasing + L_IntermediateCasing + L_ConductorCasing + L_SurfaceCasing + L_StructuralCasing, 0];

    var x2 = [((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) + (OD_ProductionCasing / 2) + shift, ((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) + (OD_ProductionCasing / 2) + shift];
    var y2 = [L_ProductionCasing + L_IntermediateCasing + L_ConductorCasing + L_SurfaceCasing + L_StructuralCasing, 0];

    // intermediate
    var x3 = [((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) + (OD_IntermediateCasing / 2) + shift, ((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) + (OD_IntermediateCasing / 2) + shift];
    var y3 = [L_IntermediateCasing + L_ConductorCasing + L_SurfaceCasing + L_StructuralCasing, 0];

    var x4 = [((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) - (OD_IntermediateCasing / 2) + shift, ((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) - (OD_IntermediateCasing / 2) + shift];
    var y4 = [L_IntermediateCasing + L_ConductorCasing + L_SurfaceCasing + L_StructuralCasing, 0];

    // surface
    var x5 = [((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) - (OD_SurfaceCasing / 2) + shift, ((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) - (OD_SurfaceCasing / 2) + shift];
    var y5 = [L_ConductorCasing + L_SurfaceCasing + L_StructuralCasing, 0];

    var x6 = [((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) + (OD_SurfaceCasing / 2) + shift, ((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) + (OD_SurfaceCasing / 2) + shift];
    var y6 = [L_ConductorCasing + L_SurfaceCasing + L_StructuralCasing, 0];

    // conductor
    var x7 = [((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) + (OD_ConductorCasing / 2) + shift, ((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) + (OD_ConductorCasing / 2) + shift];
    var y7 = [L_ConductorCasing + L_StructuralCasing, 0];

    var x8 = [((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) - (OD_ConductorCasing / 2) + shift, ((OD_StructuralCasing || OD_ConductorCasing || OD_SurfaceCasing || OD_IntermediateCasing || OD_ProductionCasing) / 2) - (OD_ConductorCasing / 2) + shift];
    var y8 = [L_ConductorCasing + L_StructuralCasing, 0];

    // structural
    var x9 = [(HoleSizeSTC / 2) - (OD_StructuralCasing / 2), (HoleSizeSTC / 2) - (OD_StructuralCasing / 2)];
    var y9 = [L_StructuralCasing, 0];

    var x10 = [(HoleSizeSTC / 2) + (OD_StructuralCasing / 2), (HoleSizeSTC / 2) + (OD_StructuralCasing / 2)];
    var y10 = [L_StructuralCasing, 0];

    // Monta o objeto hole
    var holeTrace = {
        x: x,
        y: y,
        mode: 'lines',
        name: 'Hole',
        hoverinfo: 'skip',
        line: {
            width: 3
        }
    };

    // Monta o objeto production casing
    var productionCasing = {
        x: [x1[0], x1[1], x2[0], x2[0], x2[1]],
        y: [y1[0], y1[1], y1[1], y2[0], y2[1]],
        mode: 'lines',
        name: 'Production Casing',
        hoverinfo: 'skip'
    };

    // Monta o objeto intermediate casing    
    var intermediateCasing = {
        x: [x3[0], x3[1], x4[0], x4[0], x4[1]],
        y: [y3[0], y3[1], y3[1], y4[0], y4[1]],
        mode: 'lines',
        name: 'Intermediate Casing',
        hoverinfo: 'skip'
    };
    // Monta o objeto surface casing    
    var surfaceCasing = {
        x: [x5[0], x5[1], x6[0], x6[0], x6[1]],
        y: [y5[0], y5[1], y5[1], y6[0], y6[1]],
        mode: 'lines',
        name: 'Surface Casing',
        hoverinfo: 'skip'
    };
    // Monta o objeto conductor casing    
    var conductorCasing = {
        x: [x7[0], x7[1], x8[0], x8[0], x8[1]],
        y: [y7[0], y7[1], y7[1], y8[0], y8[1]],
        mode: 'lines',
        name: 'Conductor Casing',
        hoverinfo: 'skip'
    };
    // Monta o objeto structural casing   
    var structuralCasing = {
        x: [x9[0], x9[1], x10[0], x10[0], x10[1]],
        y: [y9[0], y9[1], y9[1], y10[0], y10[1]],
        mode: 'lines',
        name: 'Structural Casing',
        hoverinfo: 'skip'
    };

    var data = [productionCasing, intermediateCasing, surfaceCasing, conductorCasing, structuralCasing, holeTrace];

    var xZoom = HoleSizeSTC || HoleSizeCC || HoleSizeSC || HoleSizeIC || HoleSizePC;

    // definição dos eixos do gráfico
    var layout = {
        xaxis: {
            title: 'Open Hole Diameter (in)',
            showgrid: false,
            zeroline: false,
            side: 'top',
            range: [-1, xZoom + 1]
        },
        yaxis: {
            title: 'Length (ft)',
            showgrid: false,
            zeroline: false,
            autorange: 'reversed',
            range: [0, L_ProductionCasing + L_IntermediateCasing + L_SurfaceCasing + L_ConductorCasing + L_StructuralCasing]
        }
    };

    var config = {
        responsive: true,
        locale: 'br',
        modeBarButtonsToRemove: ['hoverCompareCartesian', 'toggleSpikelines', 'hoverClosestCartesian', 'autoScale2d'],
        displaylogo: false
    };

    Plotly.newPlot('canvas', data, layout, config);
});


// Ação de salvar PDF
$("#save").click(function () {
    window.print();
});

// Ação de clear (reload da página)
$("#clear").click(function () {
    if (confirm("Are you sure?"))
        window.location.reload();
});

// Aditivos
// Tipos de lama e bases
var mud_types = {
    'Water-based': {
        'Industrial': '350.507',
        'Salt Water': '357.5171',
        'Other': ''
    },
    'Oil-based': {
        'Diesel': '287.416',
        'Mineral Oil': '',
        'Synthetic Fluid': '',
        'Other': ''
    },
    'Air-based': {
        'Compressed Air': '',
        'Nitrogen': '0.01043',
        'Other': ''
    }
};

// Dinâmica entre mud type e base
$("[id^=mud_type]").change(function () {
    let mud_type = this.value;
    let mud_type_n = this.id.slice(-1);
    let options = Object.keys(mud_types[mud_type]);
    let select = $('#base' + mud_type_n);
    add_options(select, options);
});

// Dinâmica entre a base e o density
$("[id^=base]").change(function () {
    let base = this.value;
    let base_n = this.id.slice(-1);
    let density = mud_types[$('#mud_type' + base_n).val()][base];
    $('#density_base' + base_n).val(density);

    // Mostra campo digitável para outro
    if (base == 'Other') {
        $('#mud_type' + base_n).parent().parent().parent().parent().parent().attr('class', 'col-md-3');
        $('#base' + base_n).parent().parent().parent().parent().parent().attr('class', 'col-md-3');
        $('#density_base' + base_n).parent().parent().parent().parent().parent().attr('class', 'col-md-3');
        $("#other_base" + base_n).parent().parent().parent().parent().parent().fadeIn(1);
    } else {
        $('#mud_type' + base_n).parent().parent().parent().parent().parent().attr('class', 'col-md-4');
        $('#base' + base_n).parent().parent().parent().parent().parent().attr('class', 'col-md-4');
        $('#density_base' + base_n).parent().parent().parent().parent().parent().attr('class', 'col-md-4');
        $("#other_base" + base_n).parent().parent().parent().parent().parent().fadeOut(1);
    }
});

// Lista de aditivos e densidades
var additives = {
    'Barite (BaSO₄)': '1559.756',
    'Bentonite': '578.3365',
    'Caustic Soda (NaOH)': '746.5799',
    'Lime (CaO)': '1170.693',
    'Salt (NaCl)': '757.0951',
    'Soap (TBD)': '',
    'Soda Ash (Na₂CO₃)': '890.2877',
    'Xanthan Gum (C₃₅H₄₉O₂₉)': '525.76',
    'Other': ''
};

// Dinâmica entre mud additives e density
$("[id^=add_mud]").change(function () {
    let element = '#' + this.id;
    let dfNumber = this.id.slice(-2);
    let elementNumber = this.id.slice(-3, -2);
    let nextElement = +elementNumber + 1 + dfNumber;

    let add_mud = $(element).val();
    let density = additives[add_mud];

    $('#add_density' + elementNumber + dfNumber).val(density);

    $("#add_mud" + nextElement).parent().fadeIn(500);
    $("#add_density" + nextElement).parent().fadeIn(500);
    $("#add_mass" + nextElement).parent().fadeIn(500);

    // Mostra campo digitável para outro
    if (add_mud == 'Other') {
        $('#add_density' + elementNumber + dfNumber).parent().parent().parent().parent().parent().attr('class', 'col-md-3');
        $('#add_mass' + elementNumber + dfNumber).parent().parent().parent().parent().parent().attr('class', 'col-md-3');
        $(element).parent().parent().parent().parent().parent().attr('class', 'col-md-3');
        $("#add_other" + elementNumber + dfNumber).parent().parent().parent().parent().parent().fadeIn(1);
    } else {
        $('#add_density' + elementNumber + dfNumber).parent().parent().parent().parent().parent().attr('class', 'col-md-4');
        $('#add_mass' + elementNumber + dfNumber).parent().parent().parent().parent().parent().attr('class', 'col-md-4');
        $(element).parent().parent().parent().parent().parent().attr('class', 'col-md-4');
        $("#add_other" + elementNumber + dfNumber).parent().parent().parent().parent().parent().fadeOut(1);
    }

    // Adiciona nova linha de aditivo
    if ($('#add_mud' + nextElement).val() == null) {
        let options = Object.keys(additives);
        let select = $('#add_mud' + nextElement);
        add_options(select, options);
    }
});

// Adiciona novo drilling fluid
$("#add_aditivos").click(function () {
    if (!$("#df2").is(':visible'))
        $("#df2").fadeIn(500);
    else if (!$("#df3").is(':visible'))
        $("#df3").fadeIn(500);
    else if (!$("#df4").is(':visible'))
        $("#df4").fadeIn(500);
    else if (!$("#df5").is(':visible')) {
        $("#df5").fadeIn(500);
        $("#add_aditivos").hide();
    }
});

// Exibe o mud volume referente ao well section
$("[id^=section]").change(function () {
    let id = this.id.slice(-1);
    let section = $("#section" + id).val();
    let mud_volume = window['MudVolume' + section];
    if (mud_volume)
        $("#mud_volume" + id).val(mud_volume.toFixed(3));
});

// Ação de cálculo dos aditivos
$("#run_aditivos").click(function () {

    // Mostra a tabela de resultados
    $("#aditivos-results").fadeIn(500);
    $("#aditivos-results-table").fadeIn(500);

    // Oculta todas as seções
    $(".Production").hide();
    $(".Intermediate").hide();
    $(".Surface").hide();
    $(".Conductor").hide();
    $(".Structural").hide();
    $(".Total").hide();

    // loop para cada drilling fluid (5)
    for (let i = 1; i <= 5; i++) {
    
        //identifica a seção do poço para a qual será calculo o drilling fluid 
        let section = $("#section" + i).val();
        // identifica a densidade da lama dessa seção
        let mud_density = $("#mud_density" + i).val();

        // verifica se o well section foi selecionado
        if (section) {
            // exibe cabeçalho da tabela (well section)
            $("." + section).show();
            // identifica a base selecionada
            let base = $("#base" + i).val();
            if (base == 'Other') {
                base = $("#other_base" + i).val();
            }
            // identifica a densidade da base selecionada
            let density_base = $("#density_base" + i).val();
            // busca o valor do mud volume para a seção definida
            let mud_volume = $("#mud_volume" + i).val();

            // calculo da massa total da lama na seção
            let total_mud_mass = +mud_density * 42 * mud_volume;

            let sum_add_mass = 0;
            $("." + section)[2].innerHTML = "";

            // loop para cada aditivo (10)
            for (let j = 0; j <= 9; j++) {
                // identifica qual aditivo foi selecionado
                let additive = $("#add_mud" + j + "_" + i).val();
                if (additive == 'Other') {
                    additive = $("#add_other" + j + "_" + i).val();
                }
                // identifica a densidade do aditivo selecionado
                let add_density = $("#add_density" + j + "_" + i).val();
                // identifica a massa do aditivo selecionado
                let add_mass = $("#add_mass" + j + "_" + i).val();

                // calculo da massa total do aditivo
                let total_add_mass = +add_mass * mud_volume;

                // calculo do volume total do aditivo
                let total_add_volume = total_add_mass / +add_density;

                if (additive) {
                    // insere linha de cada aditivo
                    $("." + section)[2].innerHTML += `<tr>
                                                        <td class="text-left">${additive}</td>
                                                        <td>${total_add_mass.toFixed(3)}</td>
                                                        <td>${total_add_volume.toFixed(3)}</td>
                                                    </tr>`;

                    // somatório das massas totais dos aditivos
                    sum_add_mass += total_add_mass;
                }

            }

            // calculo da massa total da base
            let total_base_mass = total_mud_mass - sum_add_mass;

            // calculo da volume total da base
            let total_base_volume = total_base_mass / +density_base;

            // insere linha da base na tabela
            $("." + section)[2].innerHTML += `<tr>
                                                <td class="text-left">${base}</td>
                                                <td>${total_base_mass.toFixed(3)}</td>
                                                <td>${total_base_volume.toFixed(3)}</td>
                                            </tr>`;
        }

    }

});