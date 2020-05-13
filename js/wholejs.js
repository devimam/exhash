/*
Title: Extendible Hashing Simulator
Author: Mohammad Imam Hossain
Date: 11/05/2020
All rights reserved
*/

/* global declarations here*/
//setting the initial values of the fields and variables
var k = 3;
document.getElementById("k").value = k;
var max_bit_size = 3;
var bucketsize = 2;
document.getElementById("rec").value = bucketsize;

///need to reset every time when restart is clicked
//initial configuration for the canvas drawing
var i = 1;
var j_arr = [1, 1]; ///to save each j values
var map = [0, 1]; ///mapping each i cell to corresponding j_cell indexes
var search_keys = [[], []]; ///to store the hashed keys
var real_keys=[[],[]]; ///to store the real keys


///initial setting for drawing the buckets and cells within the canvas
var unit = 40; ///read height of each cell
var interval = 20; ///gap between two cells
var cellheight = unit + interval; ///total height=real height+gap
var cellwidth = 200; ///keep 10 offset in both sides
var bucketwidth = 220; ///cell width including the padding
var j_points = [];///to save the middle points of each j block
var mid_points = []; ///to save the middle points of each cell of main hash structure

var canvas;
/*end of global declaration*/


//to place the ok/wrong icons within the hashfn field
placeicon();
function placeicon() {
    ///console.log("icon placed");
    if (hashvalidity()) {
        document.getElementById('hashfn').innerHTML = "<span class='glyphicon glyphicon-ok-circle' style='color:rgb(0,230,77);'></span>";
    } else {
        document.getElementById('hashfn').innerHTML = "<span class='glyphicon glyphicon-ban-circle' style='color:red;'></span>";
    }
}

//hash function validity checking
function hashvalidity() {
    var expr = document.getElementById("hfn").value;
    try {
        var evalresult = math.eval(expr, {k: 11}); /// giving a sample of k for validity testing purpose
        return true;
    } catch (err) {
        return false;
    }
}

//search key value validity checking and ok/wrong icon placement
skeyvalidity();
function skeyvalidity() {
    var skey = parseInt(document.getElementById('skey').value);

    if (isNaN(skey)) {
        document.getElementById('validskeyicon').innerHTML = "<span class='glyphicon glyphicon-ban-circle' style='color:red;font-size:120%;'></span>";
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

        var binaryform = dectobin(evalresult); ///converting to binary
        var inconsider = binaryform.slice(0, i); ///considering first i bits
        var tmpinconsider = binaryform.slice(i, k); ///we need to consider the next i to k bits in future when the structure grows
        var noconsider = binaryform.slice(k, max_bit_size); ///as i can't be greater than k so the bits after k will never be considered
        ///console.log(inconsider+" "+notinconsider);
        document.getElementById("inconsider").innerHTML = inconsider;
        document.getElementById("tmpinconsider").innerHTML = tmpinconsider;
        document.getElementById("noconsider").innerHTML = noconsider;


        document.getElementById('validskeyicon').innerHTML = "<span class='glyphicon glyphicon-ok-circle' style='color:rgb(0,230,77);font-size:120%;'></span>";
    }
}

///it will be called when the inset key button is clicked
function insert() {
    ///first valdiating the search key
    skeyvalidity();
    var skey = parseInt(document.getElementById("skey").value);

    if (isNaN(skey)) {
        ///invalid search key so do nothing
        window.alert("Invalid search key value");
    } else {
        
        var expr = document.getElementById("hfn").value;
        var evalresult = 0;
        try {
            var evalresult1 = math.eval(expr, {k: skey});
            evalresult = Math.floor(evalresult1);

            insertKey(evalresult, skey); ///here, evalresult=hashedkey and skey=the real key value
        } catch (err) {
            ///if the hash function is wrong, do nothing
            window.alert("Invalid Hash Function Result!!");
        }
    }
}

///converting decimal number to binary form and adding padding to make the size equal to max_bit_size
function dectobin(d) {
    var bin = [];
    while (d != 0) {
        bin.unshift(d % 2);
        d = Math.floor(d / 2);
    }

    while (bin.length < max_bit_size)
        bin.unshift(0);
    return bin.join(""); ///returning as a string
}

///converting the binary number to decimal format
function bintodec(bin) {
    var sum = 0;
    for (var len = 0; len < bin.length; len++) {
        sum += parseInt(bin.charAt(bin.length - len - 1)) * Math.pow(2, len);
    }
    return sum; ///returning the decimal number
}

///validating the maximum global depth value that is, k
kvalidate();
function kvalidate() {
    var k = parseInt(document.getElementById("k").value);

    if (isNaN(k)) {
        document.getElementById('kval').innerHTML = "<span class='glyphicon glyphicon-ban-circle' style='color:red;'></span>";
    } else {
        document.getElementById('kval').innerHTML = "<span class='glyphicon glyphicon-ok-circle' style='color:rgb(0,230,77);'></span>";
    }
}

///validating the no of records per bucket field
recvalidate();
function recvalidate() {
    var r = parseInt(document.getElementById("rec").value);

    if (isNaN(r)) {
        document.getElementById('recval').innerHTML = "<span class='glyphicon glyphicon-ban-circle' style='color:red;'></span>";
    } else {
        document.getElementById('recval').innerHTML = "<span class='glyphicon glyphicon-ok-circle' style='color:rgb(0,230,77);'></span>";
    }
}

///checking all the hash, k, r validations
function validate() {
    var k = parseInt(document.getElementById("k").value);
    var r = parseInt(document.getElementById("rec").value);
    if (hashvalidity() == false) {
        window.alert("Invalid hash function");
        return false;
    }
    if (isNaN(k)) {
        window.alert("Invalid value of Maximum global depth (k)");
        return false;
    } else if (isNaN(r)) {
        window.alert("Invalid value of No of records/bucket");
        return false;
    } else {
        return true;
    }
}

///when lock button is pressed
function start() {
    if (validate()) {
        k = parseInt(document.getElementById("k").value);
        bucketsize = parseInt(document.getElementById("rec").value);

        ///making all the fields readonly
        $('#rslider').roundSlider({readOnly: true});
        document.getElementById("hfn").disabled = true;
        document.getElementById("k").disabled = true;
        document.getElementById("rec").disabled = true;
        
        ///setting the lock icon
        document.getElementById('hashfn').innerHTML = "<span class='glyphicon glyphicon-lock' style='color:red;'></span>";
        document.getElementById('kval').innerHTML = "<span class='glyphicon glyphicon-lock' style='color:red;'></span>";
        document.getElementById('recval').innerHTML = "<span class='glyphicon glyphicon-lock' style='color:red;'></span>";
        
        ///setting the lock btn disabled and hiding it
        document.getElementById("st").disabled = true;
        document.getElementById("st").style.display = "none";
        
        ///setting the unlock button enabled and showing it
        document.getElementById("clr").style.display = "inline-block";
        document.getElementById("clr").disabled = false;

        ///making the showme section visible
        document.getElementById("showme").style.display = "block";
        
        
        ///showing the rightside
        document.getElementById('rightside').style.display="inline-block";
        
        /*
        //debugging line
        window.alert("Maximum Global Depth = "+k+" and Bucketsize = "+bucketsize);
        */
        
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
            }
        }
        max_bit_size = Math.floor(Math.log2(max_val)) + 1;
        if (max_bit_size < k)
            max_bit_size = k; ///setting the minimum bit length
        
        /*
        //debugging line
        console.log("Maximum Bit Length: " + max_bit_size);
        */
    }
}

//unlock button operation, just simply reloading the page to set everything to their default values
function clearme() {
    window.location.reload();
}

///producing the title text
function title(txt) {
    var textbox = new fabric.Textbox(txt, {left: interval/2, top: interval/2, fill:'#33ff33', textAlign:'center', width: cellwidth});

    return textbox;
}

///generating the buckets from here
function drawBucket(no_of_cell) {
    var bucketheight = (no_of_cell + 1) * cellheight; ///+1 for the title cell

    var bucket = new fabric.Rect({
        width: bucketwidth,
        height: bucketheight,
        top: 0,
        left: 0,
        stroke: "#ff6600",
        strokeWidth: 1.5,
        fill:'transparent'
    });
    return bucket;
}

///drawing each cell for placing within the bucket
function drawCell(cell_no, sz, keyval, type, mainval) { ///cell_no starts with 1
    var finalform = "";
    if (type == 1) { /// i buckets
        var cellcontent = dectobin(keyval);
        cellcontent=cellcontent.slice(max_bit_size-i,max_bit_size);///discarding the initial zeros
        finalform = cellcontent;
    } else if (type == 2) { ///j buckets
        var binform = dectobin(keyval);
        var binformp1 = binform.slice(0, sz); ///we need these bits for operation
        var binformp2 = binform.slice(sz, max_bit_size);

        if(binformp2!="") finalform = binformp1 + "  " + binformp2+" - "+mainval;
        else finalform = binformp1 +" - "+mainval;
    }

    var celltextbox = new fabric.Textbox(finalform, {left: interval/2, top: cell_no * cellheight, fill:'#00ffff', width: cellwidth, textAlign:'center'});
    
    return celltextbox;
}

///drawing the border around each cell
function drawCellBorder(cell_no){
    var rec=new fabric.Rect({
        width: cellwidth,
        height: unit,
        top: cell_no * cellheight,
        left: interval/2,
        stroke: "#ff6600",
        strokeWidth: 1.5,
        fill:'transparent'
    });
    
    return rec;
}

///initializing the canvas and calling the callback fn that is initDrawingBoard
function initCanvas(callback) {
    ///reinitializing the canvas within rightside
    ///this way cause other ways have sideeffects
    document.getElementById('rightside').innerHTML="<canvas id='drawingboard'></canvas>";
    canvas = new fabric.Canvas('drawingboard');
    canvas.clear();
    canvas.setBackgroundColor('transparent');

    //setting the initial zoom level
    canvas.setZoom(0.6);
    
    var rightsidewidth=document.getElementById('rightside').clientWidth-20;///20px for padding of rightside in each side 10
    var calcmaxwidth=rightsidewidth;
    var drawmaxwidth=420+220+30;
    if(calcmaxwidth<drawmaxwidth) calcmaxwidth=drawmaxwidth;
    canvas.setWidth(calcmaxwidth*canvas.getZoom());
    
    var rightsidewidth=document.getElementById('rightside').clientWidth-20;
    var gap=rightsidewidth-calcmaxwidth*canvas.getZoom();
    if(gap>0){
        ///if gap found then centering to the middle position
        console.log(gap);
        document.getElementById('rightside').style.paddingLeft=10+gap/2+"px";///here 10 is the previous default set padding
    }
    
    
    canvas.setHeight(document.getElementById('rightside').clientHeight-20); ///20 cause the padding of rightside height is 10 + 10 =20
    
    //disabling the scroll feature
    ///enablescroll();

    callback();
}

///to enable the mouse scroll zoom feature, just call this function
function enablescroll(){
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
}

///reinitializing the data
function reset() {
    i = 1;
    j_arr = [1, 1];
    map = [0, 1];
    search_keys = [[], []];
    real_keys=[[],[]];
    
    initCanvas(initDrawingBoard);
}

///redrawing the whole board
function initDrawingBoard() {
    j_points = [];
    mid_points = []; ///to store the mid points of the i buckets
    
    ///creating componenets for the main hash structure
    var hashStructure = drawBucket(Math.pow(2, i));
    var head = title("i = " + i);
    var grouparray = [];
    grouparray.push(hashStructure);
    grouparray.push(head);
    for (var cell = 1; cell <= Math.pow(2, i); cell++) {
        var tmp = drawCell(cell, i, cell - 1, 1, -1);
        var tmpborder=drawCellBorder(cell);
        
        grouparray.push(tmpborder);
        
        mid_points.push((cell + 0.5) * cellheight);
        grouparray.push(tmp);
    }
    ///console.log(mid_points.toString());

    var leftpos = 30; ///padding from the left margin
    
    ///fixing the canvas height by calcualting the i buckets height and j buckets height
    
    ///i buckets height
    var bucketheight = (Math.pow(2, i) + 1) * cellheight;
    var canvasheight = document.getElementById('rightside').clientHeight-20;
    
    if(bucketheight>canvasheight){
        canvasheight=bucketheight+20;
    } 
    
    ///j buckets height
    var jbuckets_height=j_arr.length*(bucketsize+1)*cellheight+(j_arr.length-1)*10;
    ///console.log(jbuckets_height);
    if(jbuckets_height>canvasheight){
        canvasheight=jbuckets_height+20;
    }
    canvas.setHeight(canvasheight*canvas.getZoom());///recalculating height based on zoom label
    
    
    ///to place at the center of the screen
    var toppos = (canvasheight - bucketheight) / 2; 
    
    /*
    ///for debugging
    console.log("Top:"+toppos+" CH:"+canvasheight+" BH:"+bucketheight);
    */

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
        var tmphead = title(" j = " + j_arr[ind]+" ");
        tmpgrouparray.push(tmpbucket);
        tmpgrouparray.push(tmphead);

        var jcell_keys = search_keys[ind];
        for (var cell = 1; cell <= bucketsize; cell++) {
            var tmp;
            if (cell <= jcell_keys.length)
                tmp = drawCell(cell, k, jcell_keys[cell - 1], 2, real_keys[ind][cell-1]);
            else
                tmp = drawCell(cell, k, 0, -1, -1); ///empty cell
            
            var tmpborder=drawCellBorder(cell);
            tmpgrouparray.push(tmpborder);
            tmpgrouparray.push(tmp);
        }

        var tmpleftpos = 420;
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
        var line1 = new fabric.Line([leftpos + cellwidth+interval, toppos + mid_points[st], 420, j_points[end]], {strokeWidth: 3, stroke: '#ffff00'});
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

///increasing the value of local depth that is J and also splitting the cell
function increaseJval(iarr_cellind, jarr_cellind, j_val, keys_in_that_cell, val, ipart, jpart, mainval) {
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
    var prev_mainvalues=real_keys[jarr_cellind];

    var arr1 = []; var realarr1=[];
    var arr2 = []; var realarr2=[];
    for (var ind = 0; ind < prev_values.length; ind++) {
        var binaryform = dectobin(prev_values[ind]);
        var inconsider = binaryform.slice(0, newjval);
        var eqdec = bintodec(inconsider);
        if (eqdec % 2 == 0){
            arr1.push(prev_values[ind]);
            realarr1.push(prev_mainvalues[ind]);
        }
        else{
            arr2.push(prev_values[ind]);
            realarr2.push(prev_mainvalues[ind]);
        }
    }
    
    search_keys.splice(jarr_cellind, 1, arr1, arr2);
    real_keys.splice(jarr_cellind, 1, realarr1, realarr2);

    /*
    ///for debugging
    console.log(j_arr.toString());
    console.log(map.toString());
    console.log(prev_values.toString());
    console.log(search_keys[jarr_cellind]);
    console.log(search_keys[jarr_cellind + 1]);
    */

    insertKey(val, mainval);
}

function increaseIval(val, mainval) {
    ///increasing the value of i
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

    insertKey(val, mainval);
}

function insertKey(val, mainval) {
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
        real_keys[jarr_cellind].push(mainval);
        ///redrawing
        initCanvas(initDrawingBoard);
    } else if (keys_in_that_cell == bucketsize) {
        var mybinform = dectobin(val);
        var mykbits = mybinform.slice(0, k);

        var is_all_same = true;
        for (var rot = 0; rot < bucketsize; rot++) {
            var tmpbinform = dectobin(search_keys[jarr_cellind][rot]);
            var firstkbits = tmpbinform.slice(0, k);
            ///console.log("<<"+mykbits+"|"+firstkbits+">>")
            if (mykbits != firstkbits) {
                is_all_same = false;
                break;
            }
            
        }

        if (is_all_same == true) {
            window.alert("Saturated!!!!! Not Possible to Insert this Data.");
            return;
        } else if (j_val < i && is_all_same == false) {
            increaseJval(iarr_cellind, jarr_cellind, j_val, keys_in_that_cell, val, ipart, jpart, mainval);
        } else if (i < k && is_all_same == false) {
            increaseIval(val, mainval);
        }
    }
}
