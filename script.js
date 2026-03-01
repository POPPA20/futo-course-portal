function login() {
    const name = document.getElementById("studentName").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    document.getElementById("displayName").innerText = name;
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
}

function calculateCredits() {
    let total = 0;
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

    checkboxes.forEach(box => {
        total += parseInt(box.value);
    });

    document.getElementById("totalCredits").innerText = total;
}

function submitRegistration() {
    const total = document.getElementById("totalCredits").innerText;

    if (total == 0) {
        alert("Please select at least one course.");
        return;
    }

    alert("Registration Successful!\nTotal Credits: " + total);
}
