document.getElementById("complaintForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let complaint = document.getElementById("complaint").value;

    let li = document.createElement("li");
    li.textContent = name + ": " + complaint;

    document.getElementById("complaintList").appendChild(li);

    this.reset();
});
