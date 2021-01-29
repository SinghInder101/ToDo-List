var tasks = [
  
    
];

function render(){
    var tskcontain=document.getElementsByClassName("taskContainer")[0];
    tskcontain.innerHTML="";
    for(var i=0;i<tasks.length;i++)
    {
        var bigDiv = document.createElement("div");
        bigDiv.setAttribute("class","row");

        var innerDiv = document.createElement("div");
        innerDiv.setAttribute("class","col-sm-6");
        
        

        var input = document.createElement("input");
        input.setAttribute("type","checkbox");
        input.setAttribute("id",i);
        input.setAttribute("class","mt-2 col-sm-1 offset-4 checkbox");
        input.setAttribute("onclick","strike(id)");

        var btn = document.createElement("button");
        btn.setAttribute("id",i);
        btn.setAttribute("class","close");
      
        btn.innerHTML="&times;";
        btn.setAttribute("onclick","closed(id)");

        //STRIKING AND CHECKING;
        if(tasks[i].checked){
            innerDiv.innerHTML="<strike>"+tasks[i].task+"</strike";
            input.setAttribute("checked","true");

        }
        else{
            innerDiv.innerHTML=tasks[i].task;
        }
        bigDiv.appendChild(innerDiv);
        bigDiv.appendChild(input);
        bigDiv.appendChild(btn);
        tskcontain.appendChild(bigDiv);
        tskcontain.innerHTML+="<hr>";
        

    }
}
function closed(id){
    console.log(id);
    tasks.splice(parseInt(id),1);
    render(); 

}
function strike(id){
    if(tasks[id].checked){
        tasks[id].checked=false;
    }
    else{
    tasks[id].checked=true;
    }
    render();

}
function addtask(event,value){
    
   
    if(event.keyCode == 13 && value!=""){
        tasks.push(
            {
            task:value,
            checked:false
            }
        );
        render();
        document.getElementById("taskInput").value="";
    }
   
    
}