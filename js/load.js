

    for(var i = 0; i < 14; i ++)
    {
        var j = i;
    }

    $.getJSON("../msg.json",function(data){
        
        var obj = data;
            alert(data.msg);
        
    });
