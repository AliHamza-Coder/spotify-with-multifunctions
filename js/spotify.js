let ganay = []
let current_song = new Audio()
let current_title, play_icon, pause_icon, mute_volume, high_volume, current_volume = 100;
let play_all_click = 0, repeat_click_count = 0, volume_click_count = 0;
mute_volume = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none"><path d="M14 14.8135V9.18646C14 6.04126 14 4.46866 13.0747 4.0773C12.1494 3.68593 11.0603 4.79793 8.88232 7.02192C7.75439 8.17365 7.11085 8.42869 5.50604 8.42869C4.10257 8.42869 3.40084 8.42869 2.89675 8.77262C1.85035 9.48655 2.00852 10.882 2.00852 12C2.00852 13.118 1.85035 14.5134 2.89675 15.2274C3.40084 15.5713 4.10257 15.5713 5.50604 15.5713C7.11085 15.5713 7.75439 15.8264 8.88232 16.9781C11.0603 19.2021 12.1494 20.3141 13.0747 19.9227C14 19.5313 14 17.9587 14 14.8135Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M18 10L22 14M18 14L22 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>`
high_volume = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none"><path d="M14 14.8135V9.18646C14 6.04126 14 4.46866 13.0747 4.0773C12.1494 3.68593 11.0603 4.79793 8.88232 7.02192C7.75439 8.17365 7.11085 8.42869 5.50604 8.42869C4.10257 8.42869 3.40084 8.42869 2.89675 8.77262C1.85035 9.48655 2.00852 10.882 2.00852 12C2.00852 13.118 1.85035 14.5134 2.89675 15.2274C3.40084 15.5713 4.10257 15.5713 5.50604 15.5713C7.11085 15.5713 7.75439 15.8264 8.88232 16.9781C11.0603 19.2021 12.1494 20.3141 13.0747 19.9227C14 19.5313 14 17.9587 14 14.8135Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M17 9C17.6254 9.81968 18 10.8634 18 12C18 13.1366 17.6254 14.1803 17 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M20 7C21.2508 8.36613 22 10.1057 22 12C22 13.8943 21.2508 15.6339 20 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`
play_icon = `<svg id="playcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" /><path d="M9.5 11.1998V12.8002C9.5 14.3195 9.5 15.0791 9.95576 15.3862C10.4115 15.6932 11.0348 15.3535 12.2815 14.6741L13.7497 13.8738C15.2499 13.0562 16 12.6474 16 12C16 11.3526 15.2499 10.9438 13.7497 10.1262L12.2815 9.32594C11.0348 8.6465 10.4115 8.30678 9.95576 8.61382C9.5 8.92086 9.5 9.6805 9.5 11.1998Z" fill="currentColor" /></svg>`;
pause_icon = `<svg id="playcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#fff" fill="none"><path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="currentColor" stroke-width="1.5" /><path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="currentColor" stroke-width="1.5" />
</svg>`;
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}
function play_song(song, title) {
    current_song.src = song
    current_title = title
    document.querySelector(".song-info").textContent = current_title
    current_song.play()
    current_song.addEventListener("timeupdate", () => {
        document.querySelector(".song-time").innerHTML = `${secondsToMinutesSeconds(current_song.currentTime)}/${secondsToMinutesSeconds(current_song.duration)}`;
        document.querySelector(".circle").style.left = (current_song.currentTime / current_song.duration) * 100 + "%";
    })
}
function is_even(number) {
    if ((number % 2) == 0) {
        return true
    }
    else {
        return false
    }
}
function auto_play() {
    current_song.addEventListener("ended", next_function)
}
function stopAutoPlay() {
    current_song.removeEventListener("ended", next_function)
}
function previous_functon() {
    if (current_song.src != "") {
        let current_index = ganay.findIndex(e => e.title == current_title)
        if (current_index == 0) {
            play_song(ganay[ganay.length - 1].source, ganay[ganay.length - 1].title)
        }
        else {
            play_song(ganay[current_index - 1].source, ganay[current_index - 1].title)
        }
    }
    else {
        play_song(ganay[ganay.length - 1].source, ganay[ganay.length - 1].title)
    }
}
function next_function() {
    if (current_song.src != "") {
        let current_index = ganay.findIndex(e => e.title == current_title)
        if (current_index == (ganay.length - 1)) {
            play_song(ganay[0].source, ganay[0].title)
            console.log(0)
        }
        else {
            console.log(current_index + 1)
            play_song(ganay[current_index + 1].source, ganay[current_index + 1].title)
        }
    }
    else {
        play_song(ganay[0].source, ganay[0].title)
    }
}
function main() {
    let item = document.querySelector(".songs-list");
    document.querySelector(".remove-song").addEventListener("click", () => {
        ganay=[]
        item.innerHTML=""
        current_song.pause
        current_song.src=""
        current_title=""
        document.querySelector(".play-icon").innerHTML = play_icon
        document.querySelector(".song-info").textContent = "No Song Selected"
        document.querySelector(".song-time").textContent = "00:00";
        document.querySelector(".circle").style.left = "0%"
    })
    document.querySelector(".add-song").addEventListener("click", () => {
        document.getElementById("fileInput").click()
    })
    fileInput.addEventListener('change', (e) => {
        const files = fileInput.files;
        [...files].forEach((file) => {
            const fileType = file.type;
            if (fileType !== 'audio/mpeg') {
                alert('Only MP3 files are allowed');
                file.value = ''; // reset the input field
                }
            else{
                let newtitle = file.name.replace(".mp3", "")
                // Check if the song is unique
                if (!ganay.some(s => s.title === newtitle)) {
                    ganay.push({ title: newtitle, source: URL.createObjectURL(file) })
                    item.innerHTML += `<div class="song-view"><img src="SVG'S/music.svg"class="album-cover"><div class="song-details"><h3 class="song-title">${newtitle}</h3><h4 class="song-artist">It's Hamza😎</h4></div><p class="song-duration">😉</p></div>`
                }
                else {
                    alert(newtitle+" This song has already been added.");
                }
            }
        }
    )});
    document.querySelector(".songs-list").addEventListener("click", (e) => {
        let click_song = e.target.closest(".song-view")
        if (click_song) {
            let title = click_song.querySelector(".song-title").textContent
            let path
            ganay.forEach(e => {
                path = e.title
                path = path.replace(".mp3", "")
                if (path == title) {
                    play_song(e.source, e.title)
                }
            });
        }
    })
    document.querySelector("#play_all").addEventListener("click", () => {
        play_all_click++
        if (is_even(play_all_click)) {
            current_song.pause()
            document.querySelector(".play-icon").innerHTML = play_icon
            document.querySelector("#play_all").style.color = "#fff";
            stopAutoPlay()
        }
        else {
            document.querySelector("#play_all").style.color = "aquamarine";
            auto_play()
        }
    })

    document.querySelector("#repeat_one").addEventListener("click", () => {
        repeat_click_count++
        if (is_even(repeat_click_count)) {
            current_song.pause()
            document.querySelector(".play-icon").innerHTML = play_icon
            document.querySelector("#repeat_one").style.color = "#fff";
            current_song.loop = false;
        }
        else {
            document.querySelector("#repeat_one").style.color = "aquamarine";
            current_song.loop = true;
        }
    })
    document.querySelector(".play-icon").addEventListener("click", () => {
        if (current_song.src == "") {
            play_song(ganay[1].source, ganay[1].title)
        }
        else if (current_song.paused) {
            current_song.play()
        }
        else {
            document.querySelector(".play-icon").innerHTML = play_icon
            current_song.pause()
        }
    })
    document.querySelector(".progress-bar").addEventListener("click", (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        current_song.currentTime = current_song.duration * (percent / 100)
    })
    let volumeicon = document.querySelector("#volume-icon");
    volumeicon.addEventListener("click", () => {
        volume_click_count++
        if (is_even(volume_click_count)) {
            volumeicon.innerHTML = high_volume
            current_song.muted = false;
        }
        else {
            current_song.muted = true;
            volumeicon.innerHTML = mute_volume
        }
    });
    previous.addEventListener("click", () => {
        previous_functon()
    })
    next.addEventListener("click", () => {
        next_function()
    })
    current_song.addEventListener("playing", () => {
        current_volume = current_song.volume
        document.querySelector(".play-icon").innerHTML = pause_icon
    })
    current_song.addEventListener("ended", () => {
        document.querySelector(".play-icon").innerHTML = play_icon
    })
    document.querySelector(".song-volume-time").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        let volume = parseInt(e.target.value)
        if (volume < 10) {
            volume = 10
        }
        current_song.volume = volume / 100
    })
}
main();