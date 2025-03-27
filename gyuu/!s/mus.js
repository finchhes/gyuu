const STORAGE_KEY = "autoplay";
        const backgroundAudio = document.getElementById("bg-music");


        const autoplay = localStorage.getItem(STORAGE_KEY) === "true";

        if (autoplay) {

            backgroundAudio.play().catch(() => {
                console.log("Autoplay was blocked by the browser. User interaction is required.");
            });
        } else {

            backgroundAudio.pause();
        }

        document.addEventListener("visibilitychange", function () {
            if (document.hidden) {
                backgroundAudio.pause();
            } else if (autoplay) {
                backgroundAudio.play().catch(() => {
                    console.log("Autoplay was blocked by the browser. User interaction is required.");
                });
            }
        });