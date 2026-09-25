const form = document.getElementById("studentForm");
const output = document.getElementById("output");
const clearBtn = document.getElementById("clearBtn");
const preview = document.querySelector(".preview");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const course = document.getElementById("course").value.trim();
    const year = document.getElementById("year").value.trim();
    const section = document.getElementById("section").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !course || !year || !section || !email) {
        alert("Please fill out all fields!");
        return;
    }

    output.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Year Level:</strong> ${year}</p>
        <p><strong>Section:</strong> ${section}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;

    // SHOW PREVIEW WITH ANIMATION
    preview.classList.add("show");
});

clearBtn.addEventListener("click", () => {
    form.reset();
    output.innerHTML = "";
    preview.classList.remove("show");
});