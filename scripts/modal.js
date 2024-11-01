function openModal(src) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex"; // Change to flex to center content
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
}