var list1=[];
var list2=[];
var list3=[];
var list4=[];
var n=1;
var x=0;

function AddRow(){
    var AddRow=document.getElementById('table')
    var NewRow= AddRow.insertrow(n);

    list1[x] = document.getElementById("name").value;
    list2[x] = document.getElementById("surname").value;
    list3[x] = document.getElementById("gender").value;
    list4[x] = document.getElementById("birth").value;
    
    var cell1 = NewRow.insertCell(0);
    var cell2 = NewRow.insertCell(1);
    var cell3 = NewRow.insertCell(2);
    var cell4 = NewRow.insertCell(3);
    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    cell3.innerHTML = list3[x];
    cell4.innerHTML = list4[x];

    n++;
    x++;
}

