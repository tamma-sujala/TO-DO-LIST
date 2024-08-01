let input=document.getElementById("input");

let inVal=input.value;
let addBtn=document.getElementById("add");
addBtn.addEventListener("click",function(){
    if(input.value!=""){
        var task_list=document.getElementById("task-list");
        var li_con=document.createElement("li");
        var span=document.createElement("input");
        var b1=document.createElement("button");
        var b2=document.createElement("button");
        var b=document.createElement("div");
        span.setAttribute('readonly','readonly');
        span.blur();
        span.value=input.value;
        span.classList.add("span")
        li_con.classList.add("li_con");
        li_con.appendChild(span);   
        b1.innerText="Edit";
        b2.innerText="Delete";
        b1.classList.add("b1");
        b2.classList.add("b2");
        b.appendChild(b1);
        b.appendChild(b2);
        li_con.appendChild(b);
        task_list.appendChild(li_con) 
        input.value="";
    }
    else{
        alert("Please Add The List");
    }
    
b1.addEventListener("click",function(){
    if(b1.innerText=="Edit"){
        b1.innerText="Save";
        span.removeAttribute('readonly');
        span.focus();
        span.style.color="red";
    }
    else{
        if(span.value!=""){

        span.style.color="black";
        b1.innerText="Edit";
        span.setAttribute('readonly','readonly');}
        else{
            alert("Invalid List");
            span.focus();
        }

    }
})
b2.addEventListener("click",function(){
    let i=confirm("Are You Really Want TO Delete?");
    if(i==true){ 
    task_list.removeChild(li_con);
    
}})
})


