document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.welcome-video');
    const stopBtn = document.querySelector('.video-stop-btn');

    stopBtn.addEventListener('click', function() {
        video.pause();
        video.currentTime = 0;
    });

    // Auto-start the video
    video.play();
});
