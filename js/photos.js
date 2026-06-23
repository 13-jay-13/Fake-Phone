document.addEventListener(
    "DOMContentLoaded",
    initializePhotos
);

function initializePhotos() {

    const thumbnails =
        document.querySelectorAll(
            ".photo-thumb"
        );

    const viewer =
        document.getElementById(
            "photoViewer"
        );

    const viewerImage =
        document.getElementById(
            "viewerImage"
        );

    const closeButton =
        document.getElementById(
            "closeViewer"
        );

    thumbnails.forEach(photo => {

        photo.addEventListener(
            "click",
            () => {

                viewerImage.src =
                    photo.src;

                viewer.classList.remove(
                    "hidden"
                );

            }
        );

    });

    closeButton.addEventListener(
        "click",
        () => {

            viewer.classList.add(
                "hidden"
            );

        }
    );

    viewer.addEventListener(
        "click",
        event => {

            if (
                event.target === viewer
            ) {

                viewer.classList.add(
                    "hidden"
                );

            }

        }
    );

}