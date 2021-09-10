document.addEventListener("DOMContentLoaded",() => {

    document.getElementById("addRow").onclick = function(){
        const row1 = document.createElement("li");
        const input1 = document.getElementById("list1");
        let newButton = document.createElement('button');
        newButton.innerHTML = 'Del';
        newButton.addEventListener("click",del);

        row1.appendChild(document.createTextNode(input1.value));
        row1.appendChild(newButton);

        document.getElementById("list").appendChild(row1);

        document.getElementById("list1").value = "";
    }
    function del(event){
        const but = event.target;
        but.parentElement.remove();
    }
})