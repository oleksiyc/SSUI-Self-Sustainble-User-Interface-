
// ======================================================== //
var playerContainer = '#playerJS', 
    playList = '.songs', 
    playListsContainer = '.content', 
    playBtn = '#playBtn', 
    pauseBtn = '#playBtn.nowplaying', 
    nextBtn = '.next-btn', 
    prevBtn = '.prev-btn', 
    songDuration = '.song-length', 
    songCurrentTime = '.current-time', 
    playerSlider = '#slider', 
    playerSliderProgress = '.sliderBg', 
    radioTime = '.channel-time', 
    starBtn = '.saveit', 
    downloadBtn = '.downloadit', 
    currentLoopBtn = '.loop-btn', 
    currentStarBtn = '.star-btn', 
    currentDownloadBtn = '.cloud-btn', 
    currentShareBtn = '.share-btn', 
    currentShareLink = '.share-link', 
    starredList = '.starred-list', 
    noStarredList = '#nocontent', 
    resultsList = '.results-list', 
    noResultsList = '#noresults', 
    importLocalFiles = 'input.getSongs', 
    importDefaultArt = 'images/albums/albumart-blank.jpg', 
    liveSearch = '#search', 
    starredListStorage = true, 
    importStorage = true, 
    lastPlayedSongIdStorage = true; 

// ======================================================== //