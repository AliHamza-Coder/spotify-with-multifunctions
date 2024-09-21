
let scalvalues
document.querySelector(".add-video-btn").addEventListener("click",(e)=>
    {
        document.getElementById("input_mp4").click()
    })
function getScaleValues(resolution) {
    switch (resolution) {
        case '720p':
            return { width: 1280, height: 720 };
        case '1080p':
            return { width: 1920, height: 1080 };
        case '4K':
            return { width: 3840, height: 2160 };
        case '6K':
            return { width: 6144, height: 3160 };
        case '8K':
            return { width: 7680, height: 4320 };
    }
}
document.getElementById("resolution").addEventListener("change",(e)=>{
    scalvalues = getScaleValues(e.target.value)
})
document.getElementById("input_mp4").addEventListener("change",(e)=>
{
    var file = e.target.files[0];
    document.querySelector("#video_display video").src = URL.createObjectURL(file);
    document.getElementById("video_screen").width=scalvalues.width;
    document.getElementById("video_screen").heigth=scalvalues.height;
    video_display.style.display="block";    
    let video = document.querySelector("#video_display video");
    video.play()
    video.addEventListener("ended",()=>
    {
        video.play();
    })
})
document.querySelector(".close-video-btn").addEventListener("click",()=>
    {
        document.querySelector("#video_display video").pause()
        document.querySelector("#video_display video").src = ""
        video_display.style.display="none";
    })