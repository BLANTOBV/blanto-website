document.addEventListener("DOMContentLoaded", function () {
    // Fill footer
    const footer = document.getElementById("footer");
    if (footer) {
        footer.innerHTML = `
            <div class="info">
                <b>BLANTO PROJECTS SCHRIJNWERKERIJ</b>
                |
                <a href="https://www.google.com/maps/place/Mechelbaan+64,+2861+Sint-Katelijne-Waver/@51.0560242,4.5611745,988m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47c3e373b0f79d9f:0xc47afb7d5dd05a42!8m2!3d51.0560242!4d4.5637548!16s%2Fg%2F11crx65l1h?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Mechelbaan 64 - 2861 OLV-Waver</a>
                |
                <a href="mailto:info@blanto.be">info@blanto.be</a>
                |
                BE 0694 797 934
            </div>
        `;
    }

    // Mobile menu toggle
    const menuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", function () {
            mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
        });

        mobileMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                mobileMenu.style.display = "none";
            });
        });
    }
});
