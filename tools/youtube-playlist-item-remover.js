let i = 1
setInterval(() => {
    document.querySelectorAll('.ytd-playlist-video-list-renderer yt-icon-button button')[i++].click()
    setTimeout(() => {
        document.querySelectorAll('tp-yt-paper-item')[3].click()
    }, 500)
}, 1000)
