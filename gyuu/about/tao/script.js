document.addEventListener('DOMContentLoaded', () => {
    const loadElement = document.querySelector('.load');
    const load2Element = document.querySelector('.load2');
    const frameDiv = document.querySelector('.frame');
    const load2Click = document.querySelector('.load2');
    const loadText = document.getElementById('load');
    const glitchElement = document.querySelector('.glitch');
    const poundAudio = document.getElementById('pound');
    const poundVideo = document.querySelector('.pound');
    const frameDiv2 = document.querySelector('.frame');
    const youText = document.getElementById('you');
    const weewaoAudio = document.getElementById('weewao');
    const timerText = document.getElementById('timer');
    const proceedText = document.getElementById('proceed');
    const timprocDiv = document.getElementById('timproc');
    const bg2Video = document.querySelector('.bg2');
    const mus1Audio = document.getElementById('mus1');
    const mus2Audio = document.getElementById('mus2');
    const bgVideo = document.querySelector('.bg');
    const attentionAudio = document.getElementById('attention');
    const mainText = document.getElementById('main');


    if (loadElement && load2Element && frameDiv) {
        setTimeout(() => {
            loadElement.style.display = 'none';
            load2Element.style.display = 'block';
            frameDiv.style.display = 'block';
            youText.style.display = 'block';
        }, 2200);
    }

    if (load2Click && loadText && glitchElement && poundAudio && poundVideo && frameDiv2) {
        load2Click.addEventListener('click', () => {
            loadText.style.display = 'none';
            glitchElement.style.display = 'none';

            poundAudio.play();
            poundVideo.play();
        });

        poundVideo.addEventListener('ended', () => {
            poundVideo.style.display = 'none';
            load2Click.style.display = 'none';

            setTimeout(() => {
                frameDiv2.style.display = 'none';
                youText.style.display = 'none';
            }, 620);

            setTimeout(() => {
                weewaoAudio.play();
                timerText.style.display = 'block';
                startCountUp();

                proceedText.style.display = 'block';
            }, 800);
        });
    }

    function startCountUp() {
        const targetDate = new Date('2001-10-27T00:00:00Z');
        const updateTimer = () => {
            const now = new Date();
            const diff = now - targetDate;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            const pluralize = (value, singular, plural) => (value === 1 ? singular : plural);

            timerText.textContent = `The Tangent Universe collapsed ${days} ${pluralize(days, 'day', 'days')}, ${hours} ${pluralize(hours, 'hour', 'hours')}, ${minutes} ${pluralize(minutes, 'minute', 'minutes')} and ${seconds} ${pluralize(seconds, 'second', 'seconds')} ago.`;
        };

        updateTimer();
        setInterval(updateTimer, 1000);
    }

    if (proceedText && timprocDiv) {
        proceedText.addEventListener('click', () => {

            timprocDiv.classList.add('hidden');

            setTimeout(() => {
                bg2Video.classList.add('visible'); 
                bg2Video.play();

                bgVideo.style.display = 'none';

                function onTimeUpdate() {
                    if (bg2Video.currentTime >= 20.50) {
                        attentionAudio.play(); 
                        bg2Video.removeEventListener('timeupdate', onTimeUpdate);
                    }
                }

                bg2Video.addEventListener('timeupdate', onTimeUpdate);

                bg2Video.addEventListener('ended', () => {
                    bg2Video.classList.remove('visible'); 
                    bg2Video.classList.add('hidden'); 
                    mainText.style.display = 'block'; 
                });
            }, 1000);

            const fadeDuration = 10000;
            const fadeInterval = 50;
            const step = fadeInterval / fadeDuration;

            let mus1Volume = 1;
            let mus2Volume = 0;

            mus1Audio.volume = mus1Volume; 
            mus2Audio.volume = mus2Volume; 
            mus2Audio.play(); 

            const crossfade = setInterval(() => {
                mus1Volume = Math.max(0, mus1Volume - step); 
                mus2Volume = Math.min(1, mus2Volume + step);

                mus1Audio.volume = mus1Volume;
                mus2Audio.volume = mus2Volume;

                if (mus1Volume <= 0 && mus2Volume >= 1) {
                    clearInterval(crossfade);
                }
            }, fadeInterval);
        });
    }
});