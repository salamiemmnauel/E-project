document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("newsletterModal");
    const closeBtn = document.querySelector(".close");

    modal.style.display = "block"; // Display the modal automatically

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
