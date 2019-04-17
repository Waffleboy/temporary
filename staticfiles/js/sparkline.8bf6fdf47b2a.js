/**
 *  * Create a constructor for sparklines that takes some sensible defaults and
 *  merges in the individual
 *   * chart options. This function is also available from the jQuery plugin as
 *   $(element).highcharts('SparkLine').
 *    */
Highcharts.setOptions( {
    exporting : {
        enabled: false
    }
} )
Highcharts.SparkLine = function (a, b, c) {
    var hasRenderToArg = typeof a === 'string' || a.nodeName,
        options = arguments[hasRenderToArg ? 1 : 0],
        defaultOptions = {
            chart: {
                renderTo: (options.chart && options.chart.renderTo) || this,
                backgroundColor: null,
                borderWidth: 0,
                type: 'area',
                margin: [2, 0, 2, 0],
                width: 120,
                height: 20,
                style: {
                    overflow: 'visible'
                },
                skipClone: true
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickPositions: []
            },
            yAxis: {
                endOnTick: false,
                startOnTick: false,
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                tickPositions: [0]
            },
            legend: {
                enabled: false
            },
            tooltip: {
                backgroundColor: '#FFFFFF',
                borderWidth: 1,
                shadow: false,
                useHTML: true,
                hideDelay: 0,
                shared: true,
                padding: 0,
                positioner: function (w, h, point) {
                    return { x: point.plotX - w / 2, y: point.plotY - h  };
                }
            },
            exporting: {
                enabled: false
            },
            plotOptions: {
                series: {
                    animation: false,
                    lineWidth: 1,
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    marker: {
                        radius: 1,
                        states: {
                            hover: {
                                radius: 2
                            }
                        }
                    },
                    fillOpacity: 0.25
                },
                column: {
                    negativeColor: '#910000',
                    borderColor: 'silver'
                }
            }
        };
    options = Highcharts.merge(defaultOptions, options);
    return hasRenderToArg ?
        new Highcharts.Chart(a, options, c) :
        new Highcharts.Chart(options, b);
};

var start = +new Date(),
    $tds = $('td[data-sparkline]'),
    fullLen = $tds.length,
    n = 0;

// Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
// can take some seconds, so we split the input into chunks and apply them in timeouts
// in order avoid locking up the browser process and allow interaction.
function calcDate(){
    var datefield1,datefield2,text;
    datefield1 = document.getElementById("datefield1").value;
    datefield2 = document.getElementById("datefield2").value;
    if(datefield1>datefield2){
        text = "First year cannot be greater than second year";
        document.getElementById("error").innerHTML = text;
    }else{
        doChunk_filter(datefield1,datefield2)
    }
}


$('#button').click(function(){
    var datefield1,
        datefield2,
        text;
    datefield1 = parseInt(document.getElementById("datefield1").value);
    datefield2 = parseInt(document.getElementById("datefield2").value);
    if(datefield1>datefield2){
        text = "First year cannot be greater than second year";
        document.getElementById("error").innerHTML = text;
    } else{
        text = "";
        document.getElementById("error").innerHTML = text;        
        var i,
            $tds = $('td[data-sparkline]'),
            len = $tds.length,
            $td,
            chart,
            strindata;
        for(i=0; i < len; i ++){
            $td = $($tds[i]);
            stringdata = filterdata($td.data('sparkline'),datefield1,datefield2);
            chart = $td.highcharts();
            updategraphics(chart,stringdata);

//            $td.highcharts().series[0].setData(stringdata);
        }
    }
});


function filterdata(array_data,datefield1,datefield2){
    var new_array = [];
    for(var i=0; i<array_data.length;i++){
        array_to_check = array_data[i];
        array_date = parseInt(array_to_check[0]);
        if(array_date>=datefield1 && array_date <=datefield2){
            new_array.push(array_to_check);
        }
    }
    return new_array;
}

function updategraphics(chart,data){
    chart.showLoading();
    chart.series[0].setData(data);
    chart.hideLoading();
}



var start = 2012;
var end = new Date().getFullYear();
var datefield1 = "<option selected='selected' value='2012'>2012</option>";
for(var year = start + 1; year <= end -1; year++){
    datefield1 +="<option value="+ year.toString()+">" + year + "</option>";
} 
datefield1 += "<option value="+(end+0.5).toString() +">" + end + "</option>";
document.getElementById("datefield1").innerHTML = datefield1;

var datefield2 = "";
for(var year = start; year <= end -1; year++){
    datefield2 +="<option value="+ year.toString()+">" + year + "</option>";
} 
datefield2 += "<option selected='selected' value=" +(end+0.5).toString()+">" + end + "</option>";
document.getElementById("datefield2").innerHTML = datefield2;







$('#button').click(function(){
    var datefield1,
        datefield2,
        text;
    datefield1 = parseInt(document.getElementById("datefield1").value);
    datefield2 = parseInt(document.getElementById("datefield2").value);
    if(datefield1>datefield2){
        text = "First year cannot be greater than second year";
        document.getElementById("error").innerHTML = text;
    } else{
        text = "";
        document.getElementById("error").innerHTML = text;        
        var i,
            $tds = $('td[data-sparkline]'),
            len = $tds.length,
            $td,
            chart,
            strindata;
        for(i=0; i < len; i ++){
            $td = $($tds[i]);
            stringdata = filterdata($td.data('sparkline'),datefield1,datefield2);
            chart = $td.highcharts();
            updategraphics(chart,stringdata);

//            $td.highcharts().series[0].setData(stringdata);
        }
    }
});


function filterdata(array_data,datefield1,datefield2){
    var new_array = [];
    for(var i=0; i<array_data.length;i++){
        array_to_check = array_data[i];
        array_date = parseInt(array_to_check[0]);
        if(array_date>=datefield1 && array_date <=datefield2){
            new_array.push(array_to_check);
        }
    }
    return new_array;
}

function updategraphics(chart,data){
    chart.showLoading();
    chart.series[0].setData(data);
    chart.hideLoading();
}



var start = 2012;
var end = new Date().getFullYear();
var datefield1 = "<option selected='selected' value='2012'>2012</option>";
for(var year = start + 1; year <= end -1; year++){
    datefield1 +="<option value="+ year.toString()+">" + year + "</option>";
} 
datefield1 += "<option value="+(end+0.5).toString() +">" + end + "</option>";
document.getElementById("datefield1").innerHTML = datefield1;

var datefield2 = "";
for(var year = start; year <= end -1; year++){
    datefield2 +="<option value="+ year.toString()+">" + year + "</option>";
} 
datefield2 += "<option selected='selected' value=" +(end+0.5).toString()+">" + end + "</option>";
document.getElementById("datefield2").innerHTML = datefield2;







$('#button').click(function(){
    var datefield1,
        datefield2,
        text;
    datefield1 = parseInt(document.getElementById("datefield1").value);
    datefield2 = parseInt(document.getElementById("datefield2").value);
    if(datefield1>datefield2){
        text = "First year cannot be greater than second year";
        document.getElementById("error").innerHTML = text;
    } else{
        text = "";
        document.getElementById("error").innerHTML = text;        
        var i,
            $tds = $('td[data-sparkline]'),
            len = $tds.length,
            $td,
            chart,
            strindata;
        for(i=0; i < len; i ++){
            $td = $($tds[i]);
            stringdata = filterdata($td.data('sparkline'),datefield1,datefield2);
            chart = $td.highcharts();
            updategraphics(chart,stringdata);

//            $td.highcharts().series[0].setData(stringdata);
        }
    }
});


function filterdata(array_data,datefield1,datefield2){
    var new_array = [];
    for(var i=0; i<array_data.length;i++){
        array_to_check = array_data[i];
        array_date = parseInt(array_to_check[0]);
        if(array_date>=datefield1 && array_date <=datefield2){
            new_array.push(array_to_check);
        }
    }
    return new_array;
}

function updategraphics(chart,data){
    chart.showLoading();
    chart.series[0].setData(data);
    chart.hideLoading();
}



var start = 2012;
var end = new Date().getFullYear();
var datefield1 = "<option selected='selected' value='2012'>2012</option>";
for(var year = start + 1; year <= end -1; year++){
    datefield1 +="<option value="+ year.toString()+">" + year + "</option>";
} 
datefield1 += "<option value="+(end+0.5).toString() +">" + end + "</option>";
document.getElementById("datefield1").innerHTML = datefield1;

var datefield2 = "";
for(var year = start; year <= end -1; year++){
    datefield2 +="<option value="+ year.toString()+">" + year + "</option>";
} 
datefield2 += "<option selected='selected' value=" +(end+0.5).toString()+">" + end + "</option>";
document.getElementById("datefield2").innerHTML = datefield2;






function doChunk() {
    var time = +new Date(),
        i,
        len = $tds.length,
        $td,
        stringdata,
        arr,
        data,
        chart;
    for (i = 0; i < len; i += 1) {
        $td = $($tds[i]);
        stringdata = $td.data('sparkline');
        chart = {};
        $td.highcharts('SparkLine', {
            series: [{
                data: stringdata,
            }],
            tooltip: {
                headerFormat: '<span style="font-size: 12px">' + $td.parent().find('th').html() + ', {point.x}</span><br/>',
                pointFormat: '<b>{point.y}</b>'

            },
            chart: chart,
            exporting: {
                enabled: false
            }
        });
        n += 1;

        if (new Date() - time > 500) {
            $tds.splice(0, i + 1);
            setTimeout(doChunk, 0);
            break;
        }
    }
}
doChunk();
