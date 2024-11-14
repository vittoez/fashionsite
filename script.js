document.addEventListener("DOMContentLoaded", function() {
    const openModalButton = document.querySelector(".open-modal");
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".modal-overlay");

    if (openModalButton) {
        openModalButton.addEventListener("click", function() {
            modal.classList.add("active");
            overlay.classList.add("active");
        });
    }

    overlay.addEventListener("click", function() {
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});
