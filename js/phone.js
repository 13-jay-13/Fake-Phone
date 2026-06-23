document.addEventListener(
    "DOMContentLoaded",
    initializePhone
);

function initializePhone() {

    initializeHomeButton();
    initializeIcons();
    initializeStatusBar();

}

function initializeHomeButton() {

    const homeButton =
        document.getElementById(
            "homeButton"
        );

    if (!homeButton) {
        return;
    }

    homeButton.addEventListener(
        "click",
        () => {

            const homePath =
                homeButton.dataset.home;

            if (!homePath) {
                return;
            }

            window.location.href =
                homePath;

        }
    );

}

function initializeIcons() {

    const icons =
        document.querySelectorAll(
            ".app-icon, .dock-icon"
        );

    icons.forEach(icon => {

        icon.addEventListener(
            "mousedown",
            () => {

                icon.style.transform =
                    "scale(.92)";

            }
        );

        icon.addEventListener(
            "mouseup",
            () => {

                icon.style.transform =
                    "";

            }
        );

        icon.addEventListener(
            "mouseleave",
            () => {

                icon.style.transform =
                    "";

            }
        );

    });

}

function initializeStatusBar() {

    const battery =
        document.getElementById(
            "battery"
        );

    const signal =
        document.getElementById(
            "signal"
        );

    if (battery) {
        battery.textContent =
            "84%";
    }

    if (signal) {
        signal.textContent =
            "●●●●";
    }

}