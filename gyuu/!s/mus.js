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

        function toggleAudio() {
            const audio = document.getElementById("bg-music");
            const button = document.getElementById("play-pause-btn");

            if (audio.paused) {
                audio.play();
                button.textContent = "toggle bgm";
            } else {
                audio.pause();
                button.textContent = "toggle bgm";
            }
        }
        function toggleAutoplay() {
            let autoplay = localStorage.getItem("autoplay") === "true";
            localStorage.setItem("autoplay", !autoplay);
            alert("autoplay is now turned " + (!autoplay ? "on" : "off") + " for all pages.");
        }