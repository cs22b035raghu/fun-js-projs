const a = document.querySelector("#list"); // Use a valid selector with #
const btn = document.querySelector("#add"); // Same here
const input = document.querySelector("#input"); // Target the input field, not `.innerText`

function add() {
    const inputValue = input.value;
    
    //alert(inputValue);// Get the current value of the input field

    const li = document.createElement('div'); // Create a new list item
    li.innerHTML = `
        <div class="pi">
            <button class="button" onclick=this.parentElement.remove()>delete</button>
            <p>${inputValue}</p>
        </div>
    `;

    
    a.appendChild(li); // Append the new item to the list
}

btn.addEventListener("click", add); // "click" should be a string
