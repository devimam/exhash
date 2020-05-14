/* global declarations here*/
var k = 3;
document.getElementById("k").value = k;
var max_bit_size = 3;
var bucketsize = 2;
document.getElementById("rec").value = bucketsize;

///need to reset every time when restart is clicked
var i = 1;
var j_arr = [1, 1]; ///to save each j values
var map = [0, 1]; ///mapping each i cell to corresponding j_cell indexes
var search_keys = [[], []];


///graphics initialization universal
var unit = 40;
var interval = 20;
var cellwidth = 100; ///keep 10 offset in both sides
var bucketwidth = 120;
var cellheight = unit + interval;
var j_points = [];///to save the middle points of each j block
var mid_points = []; ///to save the middle points of each cell of main hash structure

var canvas;
/*end of global declaration*/

resizeme();

function resizeme() {
    ///console.log('resize me');
    var height = window.innerHeight;
    var width = window.innerWidth;

    document.getElementById('mainbody').style.height = height + 'px';
    document.getElementById('mainbody').style.width = "100%";

    document.getElementById('leftside').style.width = "35%";
    document.getElementById('leftside').style.height = height + 'px';

    document.getElementById('rightside').style.height = height + 'px';
    document.getElementById('rightside').style.width = "64.70%";
}

placeicon();

function placeicon() {
    ///console.log("icon placed");
    if (hashvalidity()) {
        document.getElementById('hashfn').innerHTML = "<span class='glyphicon glyphicon-ok-circle' style='color:rgb(0,230,77);font-size:150%;'></span>";
    } else {
        document.getElementById('hashfn').innerHTML = "<span class='glyphicon glyphicon-ban-circle' style='color:red;font-size:150%;'></span>";
    }
}

function hashvalidity() {
    var expr = document.getElementById("hfn").value;
    try {
        var evalresult = math.eval(expr, {k: 11});
        return true;
    } catch (err) {
        return false;
    }

}

skeyvalidity();

function skeyvalidity() {
    var skey = parseInt(document.getElementById('skey').value);

    if (isNaN(skey)) {
        document.getElementById('validskeyicon').innerHTML = "<span class='glyphicon glyphicon-ban-circle' style='color:red;font-size:150%;'></span>";
        document.getElementById('hval').value = "######";

        document.getElementById("inconsider").innerHTML = "##";
        document.getElementById("tmpinconsider").innerHTML = "##";
        document.getElementById("noconsider").innerHTML = "##";
    } else {
        var expr = document.getElementById("hfn").value;
        var evalresult = 0;
        try {
            var evalresult1 = math.eval(expr, {k: skey});
            evalresult = Math.floor(evalresult1); ///considering floor for the floating point numbers
            document.getElementById('hval').value = evalresult;
        } catch (err) {
            document.getElementByid('hval').value = "######";
        }

        var binaryform = dectobin(evalresult);
        var inconsider = binaryform.slice(0, i);
        var tmpinconsider = binaryform.slice(i, k);
        var noconsider = binaryform.slice(k, max_bit_size);
        ///console.log(inconsider+" "+notinconsider);
        document.getElementById("inconsider").innerHTML = inconsider;
        document.getElementById("tmpinconsider").innerHTML = tmpinconsider;
        document.getElementById("noconsider").innerHTML = noconsider;


        document.getElementById('validskeyicon').innerHTML = "<span class='glyphicon glyphicon-ok-circle' style='color:rgb(0,230,77);font-size:150%;'></span>";
    }
}

function insert() {
    skeyvalidity();
    var skey = parseInt(document.getElementById("skey").value);

    if (isNaN(skey)) {
        window.alert("Invalid search key value");
    } else {
        var expr = document.getElementById("hfn").value;
        var evalresult = 0;
        try {
            var evalresult1 = math.eval(expr, {k: skey});
            evalresult = Math.floor(evalresult1);

            insertKey(evalresult);
        } catch (err) {
            window.alert("Invalid Hash Function Result!!");
        }
    }
}

function dectobin(d) {
    var bin = [];
    while (d != 0) {
        bin.unshift(d % 2);
        d = Math.floor(d / 2);
    }


    while (bin.length < max_bit_size)
        bin.unshift(0);
    return bin.join("");
}

function bintodec(bin) {
    var sum = 0;
    for (var len = 0; len < bin.length; len++) {
        sum += parseInt(bin.charAt(bin.length - len - 1)) * Math.pow(2, len);
    }
    return sum;
}

kvalidate();

function kvalidate() {
    var k = parseInt(document.getElementById("k").value);

    if (isNaN(k)) {
        document.getElementById('kval').innerHTML = "<span class='glyphicon glyphicon-ban-circle' style='color:red;font-size:150%;'></span>";
    } else {
        document.getElementById('kval').innerHTML = "<span class='glyphicon glyphicon-ok-circle' style='color:rgb(0,230,77);font-size:150%;'></span>";
    }
}

recvalidate();

function recvalidate() {
    var r = parseInt(document.getElementById("rec").value);

    if (isNaN(r)) {
        document.getElementById('recval').innerHTML = "<span class='glyphicon glyphicon-ban-circle' style='color:red;font-size:150%;'></span>";
    } else {
        document.getElementById('recval').innerHTML = "<span class='glyphicon glyphicon-ok-circle' style='color:rgb(0,230,77);font-size:150%;'></span>";
    }
}

function validate() {
    var k = parseInt(document.getElementById("k").value);
    var r = parseInt(document.getElementById("rec").value);
    if (hashvalidity() == false) {
        window.alert("Invalid hash function");
        return false;
    }
    if (isNaN(k)) {
        window.alert("Invalid value of k");
        return false;
    } else if (isNaN(r)) {
        window.alert("Invalid value of r");
        return false;
    } else {
        return true;
    }
}

function start() {
    if (validate()) {
        k = parseInt(document.getElementById("k").value);
        bucketsize = parseInt(document.getElementById("rec").value);

        $('#rslider').roundSlider({readOnly: true});
        document.getElementById("hfn").disabled = true;
        document.getElementById("k").disabled = true;
        document.getElementById("rec").disabled = true;
        document.getElementById("st").disabled = true;
        document.getElementById("clr").disabled = false;

        document.getElementById("showme").style.display = "block";
        //window.alert("Maximum Global Depth = "+k+" and Bucketsize = "+bucketsize);

        skeyvalidity();
        reset();

        ///hash function return value maximum bit length
        var max_val = 0;
        var obj = $("#rslider").data("roundSlider");
        var max_skey_val = obj.option("value");

        var expr = document.getElementById("hfn").value;
        for (var val = 0; val <= max_skey_val; val++) {
            try {
                var tmpevalresult1 = math.eval(expr, {k: val});
                var tmpevalresult = Math.floor(tmpevalresult1);
                if (max_val <= tmpevalresult)
                    max_val = tmpevalresult;
            } catch (err) {
                console.log("error at line 192");
                ;
            }
        }
        max_bit_size = Math.floor(Math.log2(max_val)) + 1;
        if (max_bit_size < k)
            max_bit_size = k;
        console.log("Maximum Bit Length: " + max_bit_size);
    }
}

function clearme() {
    window.location.reload();
}

function title(txt) {
    var textbox = new fabric.Text(txt, {left: 10, top: 10});

    return textbox;
}

function drawBucket(no_of_cell) {
    var bucketheight = (no_of_cell + 1) * cellheight;

    var bucket = new fabric.Rect({
        width: bucketwidth,
        height: bucketheight,
        top: 0,
        left: 0,
        fill: 'blue'
    });
    return bucket;
}

function drawCell(cell_no, sz, keyval, type) { ///starts with 1
    var finalform = "";
    var tmp = 0;
    if (type == 1) {
        var cellcontent = dectobin(keyval);
        cellcontent=cellcontent.slice(max_bit_size-i,max_bit_size);
        tmp = cellcontent.length;
        finalform = cellcontent;
    } else if (type == 2) {
        var binform = dectobin(keyval);
        var binformp1 = binform.slice(0, sz);
        var binformp2 = binform.slice(sz, max_bit_size);

        tmp = binformp1.length + 1 + binformp2.length;
        finalform = binformp1 + "  " + binformp2;
    }

    while (tmp < 5) {
        finalform = "  " + finalform;
        tmp++;
    }
    var celltextbox = new fabric.Text(finalform, {left: 10, top: cell_no * cellheight, textBackgroundColor: 'red'});

    return celltextbox;
}

///initializing the canvas
function initCanvas(callback) {
    canvas = new fabric.Canvas('drawingboard');
    canvas.clear();
    canvas.backgroundColor = 'rgba(255,119,51,0.3)';

    canvas.setWidth(document.getElementById('rightside').offsetWidth);
    canvas.setHeight(document.getElementById('rightside').offsetHeight + 200);
    canvas.setZoom(0.5);
    canvas.on('mouse:wheel', function (opt) {
        var delta = opt.e.deltaY;
        var pointer = canvas.getPointer(opt.e);
        var zoom = canvas.getZoom();
        zoom = zoom - delta / 500;
        if (zoom > 5)
            zoom = 5;
        if (zoom < 0.3)
            zoom = 0.3;
        canvas.zoomToPoint({x: opt.e.offsetX, y: opt.e.offsetY}, zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
    });

    callback();
}

function initDrawingBoard() {
    j_points = [];
    mid_points = [];
    ///creating componenets for the main hash structure
    var hashStructure = drawBucket(Math.pow(2, i));
    var head = title(" i = " + i);
    var grouparray = [];
    grouparray.push(hashStructure);
    grouparray.push(head);
    for (var cell = 1; cell <= Math.pow(2, i); cell++) {
        var tmp = drawCell(cell, i, cell - 1, 1);
        mid_points.push((cell + 0.5) * cellheight);
        grouparray.push(tmp);
    }
    ///console.log(mid_points.toString());

    var leftpos = 200;
    var bucketheight = (Math.pow(2, i) + 1) * cellheight;
    var toppos = (window.innerHeight - bucketheight) / 2; ///to place at the center of the screen

    var maingroup = new fabric.Group(grouparray, {
        left: leftpos,
        top: toppos
    });
    maingroup.selectable = false;
    canvas.add(maingroup);


    ///drawing the buckets
    for (var ind = 0; ind < j_arr.length; ind++) {
        var tmpgrouparray = [];
        var tmpbucket = drawBucket(bucketsize);
        var tmphead = title(" j = " + j_arr[ind]);
        tmpgrouparray.push(tmpbucket);
        tmpgrouparray.push(tmphead);

        var jcell_keys = search_keys[ind];
        for (var cell = 1; cell <= bucketsize; cell++) {
            var tmp;
            if (cell <= jcell_keys.length)
                tmp = drawCell(cell, k, jcell_keys[cell - 1], 2);
            else
                tmp = drawCell(cell, 0, -1); ///empty cell
            tmpgrouparray.push(tmp);
        }

        var tmpleftpos = 520;
        var tmptoppos = ind * (bucketsize + 1) * cellheight + ind * 10 + 10;
        j_points.push(tmptoppos + ((bucketsize + 1) * cellheight) / 2);
        var tmpgroup = new fabric.Group(tmpgrouparray, {
            left: tmpleftpos,
            top: tmptoppos
        });
        tmpgroup.selectable = false;
        canvas.add(tmpgroup);
    }

    ///drawing the lines
    var linegrouparray = [];
    for (var r = 0; r < Math.pow(2, i); r++) {
        var st = r;
        var end = map[r];
        var line1 = new fabric.Line([leftpos + 110, toppos + mid_points[st], 520, j_points[end]], {strokeWidth: 3, stroke: 'black'});
        linegrouparray.push(line1);
        ///canvas.add(line1);
    }
    var linegroup = new fabric.Group(linegrouparray);
    linegroup.selectable = false;
    canvas.add(linegroup);

    ///console.log(j_arr.toString());
    ///console.log(map.toString());
    ///console.log(j_points.toString());
}

function increaseJval(iarr_cellind, jarr_cellind, j_val, keys_in_that_cell, val, ipart, jpart) {
    console.log("Increasing the value of j");
    ///we need to increase j_val and split the cell
    ///j_arr , map, search_keys will have new changes
    var newjval = j_val + 1;
    j_arr.splice(jarr_cellind, 1, newjval, newjval);

    var mapcountindex = 0;
    var tmpsavearr = [];
    for (var indcount = 0; indcount < map.length; indcount++) {
        if (map[indcount] == jarr_cellind) {
            tmpsavearr.push(indcount);
        }
    }
    console.log("tmpsavearray --> " + tmpsavearr.toString());
    var half = tmpsavearr.length / 2; ///half index will be same and the other half index including the rest of the elements index will be increased by 1

    for (var rep = half; rep < tmpsavearr.length; rep++) {
        console.log(tmpsavearr[rep] + " " + jarr_cellind);
        map[tmpsavearr[rep]] = jarr_cellind + 1;
    }
    for (var other = tmpsavearr[tmpsavearr.length - 1] + 1; other < Math.pow(2, i); other++) {
        map[other]++;
    }


    var prev_values = search_keys[jarr_cellind];
    ///prev_values.push(val);

    var arr1 = [];
    var arr2 = [];
    for (var ind = 0; ind < prev_values.length; ind++) {
        var binaryform = dectobin(prev_values[ind]);
        var inconsider = binaryform.slice(0, newjval);
        var eqdec = bintodec(inconsider);
        if (eqdec % 2 == 0)
            arr1.push(prev_values[ind]);
        else
            arr2.push(prev_values[ind]);
    }
    /*
     if (arr1.length > bucketsize || arr2.length > bucketsize) {
     ///no way except increasing the size of i
     increaseIval(iarr_cellind, jarr_cellind, j_val, keys_in_that_cell,val, ipart, jpart);
     } else {
     */
    search_keys.splice(jarr_cellind, 1, arr1, arr2);

    console.log(j_arr.toString());
    console.log(map.toString());
    console.log(prev_values.toString());
    console.log(search_keys[2 * jarr_cellind]);
    console.log(search_keys[2 * jarr_cellind + 1]);

    insertKey(val, ipart, jpart);
    // }
}

function increaseIval(iarr_cellind, jarr_cellind, j_val, keys_in_that_cell, val, ipart, jpart) {
    ///need to increase the value of i
    if (i + 1 > k) {
        window.alert("Saturated!!!!! Not Possible to Insert this Data.");

        return;
    } else {
        ///otherwise increasing the value of i
        console.log("Increasing the value of i");
        ++i;
        var tmpmap = map;
        ///reinitializing the map
        map = [];
        for (var it = 0; it < Math.pow(2, i - 1); it++) {
            ///each value will be repeated twice
            map.push(tmpmap[it]);
            map.push(tmpmap[it]);
        }
        ///redrawing then again trying to insert this data
        ///initCanvas(initDrawingBoard);
        var binaryform = dectobin(val);
        var inconsider = binaryform.slice(0, i);
        var tmpinconsider = binaryform.slice(i, k);
        var noconsider = binaryform.slice(k, max_bit_size);
        ///console.log(inconsider+" "+notinconsider);
        document.getElementById("inconsider").innerHTML = inconsider;
        document.getElementById("tmpinconsider").innerHTML = tmpinconsider;
        document.getElementById("noconsider").innerHTML = noconsider;

        insertKey(val, ipart, jpart);
    }

}

function insertKey(val) {
    ///console.log("cell number "+bintodec(ipart));
    var binaryform = dectobin(val);
    var ipart = binaryform.slice(0, i);
    var jpart = binaryform.slice(i, k);

    var iarr_cellind = bintodec(ipart);
    var jarr_cellind = map[iarr_cellind];
    var j_val = j_arr[jarr_cellind];
    var keys_in_that_cell = search_keys[jarr_cellind].length;

    if (keys_in_that_cell < bucketsize) {
        console.log("free cell found");
        search_keys[jarr_cellind].push(val);
        ///redrawing
        initCanvas(initDrawingBoard);
    } else if (keys_in_that_cell == bucketsize) {
        var mybinform = dectobin(val);
        var mykbits = mybinform.slice(0, k);

        var is_all_same = true;
        for (var rot = 0; rot < bucketsize; rot++) {
            var tmpbinform = dectobin(search_keys[jarr_cellind][rot]);
            var firstkbits = tmpbinform.slice(0, k);
            if (mykbits != firstkbits) {
                is_all_same = false;
                break;
            }
        }

        if (is_all_same == true) {
            window.alert("Saturated!!!!! Not Possible to Insert this Data.");
            return;
        } else if (j_val < i && is_all_same == false) {
            increaseJval(iarr_cellind, jarr_cellind, j_val, keys_in_that_cell, val, ipart, jpart);
        } else if (i < k && is_all_same == false) {
            increaseIval(iarr_cellind, jarr_cellind, j_val, keys_in_that_cell, val, ipart, jpart);
        }
    }
}

function reset() {
    i = 1;
    j_arr = [1, 1];
    map = [0, 1];
    search_keys = [[], []];
    initCanvas(initDrawingBoard);
}
