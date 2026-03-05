
document.addEventListener("DOMContentLoaded", function () {

    // Cuando la página carga, aparece suave
    document.body.style.opacity = "1";

    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const url = this.href;

            // Solo animar enlaces internos
            if (url && url.includes(window.location.origin)) {
                e.preventDefault();

                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = url;
                }, 500);
            }
        });
    });
});

