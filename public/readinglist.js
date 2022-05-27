document.getElementById('add_reading').onclick = function () {
    if (document.getElementById('user_input').value.length == 0) {
        alert("Please enter the content")
    }
    else {
        document.getElementById('card_content').innerHTML += `
        <div class="reading">
        <span id="taskname" style='width:90%'>
        ${document.getElementById('user_input').value}
        </span>
        <button class="delete">- Del</button>
        `;
        var currents_tasks = document.querySelectorAll('.delete');
        for (var i = 0; i < currents_tasks.length; i++) {
            currents_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

    }
}