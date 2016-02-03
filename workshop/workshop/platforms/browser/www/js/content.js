$("#datepick").datepicker(  );

$("#addChild").click(function(){
    var pickedSex = '';
    if($('#inlineRadio1').is(':checked')) { pickedSex = "Boy" }
    else
    if($('#inlineRadio2').is(':checked')) { pickedSex = "Girl" }
    else
    if($('#inlineRadio3').is(':checked')) { pickedSex = "Pregnant" }

    var pickedDate = $('#datepick').val();

    if ((pickedSex!=="")&&(pickedDate!=="")){
        var boxDiv = document.createElement('div');
        boxDiv.className = 'childrenBox';

        var dataDiv = document.createElement("div");
        dataDiv.className = 'boxData';

        var closeDiv = document.createElement("div");
        closeDiv.className = 'closeChildrenBox';
        closeDiv.onclick = function() {$(this).closest('.childrenBox').remove();};

        boxDiv.appendChild(dataDiv);
        boxDiv.appendChild(closeDiv);
        dataDiv.appendChild(document.createTextNode(pickedSex + ': ' + pickedDate));
        closeDiv.appendChild(document.createTextNode('X'));
        document.getElementById("insertData").appendChild(boxDiv);
    }
});