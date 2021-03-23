function Post()
{
    var input = document.getElementById("Input").value;
    var topic = document.getElementById("Topic");
    var Comment1 = document.getElementById("Comment1");
    var Comment2 = document.getElementById("Comment2");


    if(topic.innerHTML == "" && input != "")
    {
        topic.innerHTML = "Topic : "+input;
    }
    else if(Comment1.innerHTML == "" && input != "")
    {
        Comment1.innerHTML = "Comment 1 : "+input;
    }
    else if(Comment2.innerHTML == "" && input != "")
    {
        Comment2.innerHTML = "Comment 2 : "+input;
    }
    document.getElementById("Input").value = "";
}

function Clear()
{
    document.getElementById("Input").value = "";
    document.getElementById("Topic").innerHTML = "";
    document.getElementById("Comment1").innerHTML = "";
    document.getElementById("Comment2").innerHTML = "";
}
