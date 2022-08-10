function multiplyBy()
    {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var desc = document.getElementById("desc").value;
        if(desc=="")
            alert("Enter Item Description");
        if(isNaN(num1))
            alert("Enter Quantity");
        if(isNaN(num2))
            alert("Enter Price");
        if(!isNaN(num1) && !isNaN(num2) && desc != ""){
            var result = num1*num2;
            document.getElementById("result").innerHTML = result.toFixed(2);
            var table = document.getElementById("tab");
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
            row.insertCell(0).innerHTML = rowCount;
            row.insertCell(1).innerHTML = desc;
            row.insertCell(2).innerHTML = num1;
            row.insertCell(3).innerHTML = num2.toFixed(2);
            row.insertCell(4).innerHTML = result.toFixed(2);
        }
    }
    function totalAmount(){
        var table = document.getElementById("tab");
        var rowCount = table.rows.length;
        var sum = 0.0;
        for (var i = 1; i < rowCount; i++) {
            var cells = table.rows.item(i).cells;
             var value = cells.item(4).innerHTML;
             sum+=parseFloat(value);
       }
        printLine(sum,"Total")
        var result = 0.0;
        var sgst = parseFloat(document.getElementById("sgst").value);
        resultSGST = (sgst*sum)/100;
        printLine(resultSGST,"SGST");
        var cgst = parseFloat(document.getElementById("cgst").value);
        resultCGST = (cgst*sum)/100;
        printLine(resultCGST,"CGST");
        var grandTotal = sum + resultSGST + resultCGST;
        printLine(grandTotal,"GTotal");
        grandTotal = grandTotal.toFixed(2);
        if(!isNaN(grandTotal)){
            var splitNum = grandTotal.toString().split('.');
            var nonDec = splitNum[0];
            var dec = splitNum[1];
            var spell = price_in_words(Number(nonDec))+" rupees and "+price_in_words(Number(dec))+" paise";
            printAnything(spell,"");
        }else{
            alert("Empty Grand Total");
        }
        
    }
    function printLine(sum, msg){
        if(!isNaN(sum))
        {
            var table = document.getElementById("tab");
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
            row.insertCell(0).innerHTML = "";
            row.insertCell(1).innerHTML = "";
            row.insertCell(2).innerHTML = "";
            row.insertCell(3).innerHTML = msg;
            row.insertCell(4).innerHTML = sum.toFixed(2);
        }else{
            alert("Already Calulated");
        }
    }
    function printAnything(any, msg){
        var table = document.getElementById("tab");
        var rowCount = table.rows.length;
       var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML = "";
        row.insertCell(1).innerHTML = "";
        row.insertCell(2).innerHTML = "";
        row.insertCell(3).innerHTML = msg;
        row.insertCell(4).innerHTML = any;
    }


    function printDiv(){
        var content = document.getElementById("area").innerHTML;
        var content_header = document.getElementById("area1").innerHTML;
        var a = window.open('','','height=500, width=500');
        a.document.write('<html>');
        a.document.write('<body>');
        a.document.write(content_header);
        a.document.write(content);
        a.document.write('</body</html');
        a.document.close();
        a.print();
    }

    function deleteRow(){
        var table = document.getElementById("tab");
        var rowCount = table.rows.length;
        if(rowCount>1)
            document.getElementById("tab").deleteRow(rowCount-1);
    }
