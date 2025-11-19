// Music Player Application
// Simple, clean, and functional

// State
const state = {
    playlist: [],
    allSongs: [], // Store all songs
    currentIndex: 0,
    isPlaying: false,
    isShuffle: false,
    repeatMode: 'off', // 'off', 'all', 'one'
    volume: 1,
    currentLanguage: 'all' // Track current language filter
};

// DOM Elements
const elements = {
    audioPlayer: document.getElementById('audioPlayer'),
    playlist: document.getElementById('playlist'),
    uploadBtn: document.getElementById('uploadBtn'),
    fileInput: document.getElementById('fileInput'),
    clearPlaylistBtn: document.getElementById('clearPlaylistBtn'),
    playlistCount: document.getElementById('playlistCount'),
    
    // Player controls
    playBtn: document.getElementById('playBtn'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    shuffleBtn: document.getElementById('shuffleBtn'),
    repeatBtn: document.getElementById('repeatBtn'),
    
    // Display - Footer
    artwork: document.getElementById('artwork'),
    songTitle: document.getElementById('songTitle'),
    songArtist: document.getElementById('songArtist'),
    
    // Display - Large
    albumArtLarge: document.getElementById('albumArtLarge'),
    currentSongTitle: document.getElementById('currentSongTitle'),
    currentArtist: document.getElementById('currentArtist'),
    currentAlbum: document.getElementById('currentAlbum'),
    
    // Progress
    progressBar: document.getElementById('progressBar'),
    progressFill: document.getElementById('progressFill'),
    currentTime: document.getElementById('currentTime'),
    duration: document.getElementById('duration'),
    
    // Volume
    volumeBtn: document.getElementById('volumeBtn'),
    volumeBar: document.getElementById('volumeBar'),
    volumeFill: document.getElementById('volumeFill')
};

// Initialize
function init() {
    setupEventListeners();
    loadPredefinedSongs();
    updatePlaylistDisplay();
}

// Predefined Songs (Demo Mode)
function loadPredefinedSongs() {
    const predefinedSongs = [
        // Telugu Songs
        { title: 'Samajavaragamana', artist: 'Sid Sriram', album: 'Ala Vaikunthapurramuloo', language: 'Telugu', duration: '4:32', src: '', isDemo: true },
        { title: 'Butta Bomma', artist: 'Armaan Malik', album: 'Ala Vaikunthapurramuloo', language: 'Telugu', duration: '4:15', src: '' },
        { title: 'Inkem Inkem', artist: 'Sid Sriram', album: 'Geetha Govindam', language: 'Telugu', duration: '3:58', src: '' },
        { title: 'Vachinde', artist: 'Madhu Priya', album: 'Fidaa', language: 'Telugu', duration: '4:22', src: '' },
        { title: 'Ramuloo Ramulaa', artist: 'Anurag Kulkarni', album: 'Ala Vaikunthapurramuloo', language: 'Telugu', duration: '4:45', src: '' },
        { title: 'Uppena', artist: 'Javed Ali', album: 'Uppena', language: 'Telugu', duration: '4:18', src: '' },
        { title: 'Maate Vinadhuga', artist: 'Sid Sriram', album: 'Taxiwaala', language: 'Telugu', duration: '4:05', src: '' },
        { title: 'Nee Kannu Neeli Samudram', artist: 'Sid Sriram', album: 'Uppena', language: 'Telugu', duration: '4:28', src: '' },
        { title: 'Oohalu Gusagusalade', artist: 'Kalyani Malik', album: 'Oohalu Gusagusalade', language: 'Telugu', duration: '3:52', src: '' },
        { title: 'Choosi Chudangane', artist: 'Sid Sriram', album: 'Chalo', language: 'Telugu', duration: '4:12', src: '' },
        
        // Hindi Songs
        { title: 'Tum Hi Ho', artist: 'Arijit Singh', album: 'Aashiqui 2', language: 'Hindi', duration: '4:22', src: '' },
        { title: 'Channa Mereya', artist: 'Arijit Singh', album: 'Ae Dil Hai Mushkil', language: 'Hindi', duration: '4:49', src: '' },
        { title: 'Kal Ho Naa Ho', artist: 'Sonu Nigam', album: 'Kal Ho Naa Ho', language: 'Hindi', duration: '5:22', src: '' },
        { title: 'Tere Naam', artist: 'Udit Narayan', album: 'Tere Naam', language: 'Hindi', duration: '5:15', src: '' },
        { title: 'Raabta', artist: 'Arijit Singh', album: 'Agent Vinod', language: 'Hindi', duration: '4:05', src: '' },
        { title: 'Kabira', artist: 'Tochi Raina', album: 'Yeh Jawaani Hai Deewani', language: 'Hindi', duration: '5:43', src: '' },
        { title: 'Gerua', artist: 'Arijit Singh', album: 'Dilwale', language: 'Hindi', duration: '4:55', src: '' },
        { title: 'Ae Dil Hai Mushkil', artist: 'Arijit Singh', album: 'Ae Dil Hai Mushkil', language: 'Hindi', duration: '4:29', src: '' },
        { title: 'Kesariya', artist: 'Arijit Singh', album: 'Brahmastra', language: 'Hindi', duration: '4:28', src: '' },
        { title: 'Apna Bana Le', artist: 'Arijit Singh', album: 'Bhediya', language: 'Hindi', duration: '4:02', src: '' },
        { title: 'Dil Diyan Gallan', artist: 'Atif Aslam', album: 'Tiger Zinda Hai', language: 'Hindi', duration: '3:56', src: '' },
        { title: 'Hawayein', artist: 'Arijit Singh', album: 'Jab Harry Met Sejal', language: 'Hindi', duration: '4:32', src: '' },
        { title: 'Pehla Nasha', artist: 'Udit Narayan', album: 'Jo Jeeta Wohi Sikandar', language: 'Hindi', duration: '5:48', src: '' },
        { title: 'Tujhe Kitna Chahne Lage', artist: 'Arijit Singh', album: 'Kabir Singh', language: 'Hindi', duration: '4:45', src: '' },
        { title: 'Bekhayali', artist: 'Sachet Tandon', album: 'Kabir Singh', language: 'Hindi', duration: '6:10', src: '' },
        
        // English Songs
        { title: 'Shape of You', artist: 'Ed Sheeran', album: 'Divide', language: 'English', duration: '3:53', src: '' },
        { title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', language: 'English', duration: '3:20', src: '' },
        { title: 'Someone Like You', artist: 'Adele', album: '21', language: 'English', duration: '4:45', src: '' },
        { title: 'Perfect', artist: 'Ed Sheeran', album: 'Divide', language: 'English', duration: '4:23', src: '' },
        { title: 'Thinking Out Loud', artist: 'Ed Sheeran', album: 'X', language: 'English', duration: '4:41', src: '' },
        { title: 'Stay', artist: 'Justin Bieber', album: 'Justice', language: 'English', duration: '2:21', src: '' },
        { title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', language: 'English', duration: '3:23', src: '' },
        { title: 'Watermelon Sugar', artist: 'Harry Styles', album: 'Fine Line', language: 'English', duration: '2:54', src: '' },
        { title: 'Bad Guy', artist: 'Billie Eilish', album: 'When We All Fall Asleep', language: 'English', duration: '3:14', src: '' },
        { title: 'Shallow', artist: 'Lady Gaga', album: 'A Star Is Born', language: 'English', duration: '3:35', src: '' },
        { title: 'Circles', artist: 'Post Malone', album: 'Hollywood\'s Bleeding', language: 'English', duration: '3:35', src: '' },
        { title: 'Memories', artist: 'Maroon 5', album: 'Jordi', language: 'English', duration: '3:09', src: '' },
        { title: 'Senorita', artist: 'Shawn Mendes', album: 'Senorita', language: 'English', duration: '3:11', src: '' },
        { title: 'Dance Monkey', artist: 'Tones and I', album: 'The Kids Are Coming', language: 'English', duration: '3:29', src: '' },
        { title: 'Believer', artist: 'Imagine Dragons', album: 'Evolve', language: 'English', duration: '3:24', src: '' },
        { title: 'Happier', artist: 'Marshmello', album: 'Happier', language: 'English', duration: '3:34', src: '' },
        { title: 'Sunflower', artist: 'Post Malone', album: 'Spider-Man: Into the Spider-Verse', language: 'English', duration: '2:38', src: '' },
        { title: 'Closer', artist: 'The Chainsmokers', album: 'Collage', language: 'English', duration: '4:04', src: '' },
        { title: 'Faded', artist: 'Alan Walker', album: 'Different World', language: 'English', duration: '3:32', src: '' },
        { title: 'Despacito', artist: 'Luis Fonsi', album: 'Vida', language: 'English', duration: '3:47', src: '' }
    ];
    
    // Mark all predefined songs as demo
    const markedSongs = predefinedSongs.map(song => ({
        ...song,
        isDemo: true
    }));
    
    // Store all songs
    state.allSongs = markedSongs;
    state.playlist = markedSongs;
    
    // Show notification about demo mode
    showDemoNotification();
}

function showDemoNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #6366f1, #ec4899);
        color: white;
        padding: 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 1000;
        max-width: 400px;
        animation: slideIn 0.5s ease-out;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: start; gap: 1rem;">
            <i class="fas fa-info-circle" style="font-size: 1.5rem; margin-top: 0.25rem;"></i>
            <div>
                <strong style="font-size: 1.1rem; display: block; margin-bottom: 0.5rem;">🎵 Welcome to MusicStream!</strong>
                <p style="margin: 0; font-size: 0.9rem; line-height: 1.5;">
                    <strong>50 demo songs loaded</strong> (Telugu, Hindi, English)
                    <br><br>
                    ⚠️ <strong>Important:</strong> Demo songs won't play (no audio files).
                    <br><br>
                    ✅ <strong>To play music:</strong> Click <strong>"Upload Music"</strong> button and add your MP3/WAV files!
                </p>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                    style="margin-top: 1rem; background: rgba(255,255,255,0.2); border: none; 
                    color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; font-weight: 600;">
                    Got it!
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.5s ease-out';
            setTimeout(() => notification.remove(), 500);
        }
    }, 10000);
}

// Event Listeners
function setupEventListeners() {
    // Upload
    elements.uploadBtn.addEventListener('click', () => elements.fileInput.click());
    elements.fileInput.addEventListener('change', handleFileUpload);
    elements.clearPlaylistBtn.addEventListener('click', clearPlaylist);
    
    // Language tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.language));
    });
    
    // Playback
    elements.playBtn.addEventListener('click', togglePlayPause);
    elements.prevBtn.addEventListener('click', playPrevious);
    elements.nextBtn.addEventListener('click', playNext);
    elements.shuffleBtn.addEventListener('click', toggleShuffle);
    elements.repeatBtn.addEventListener('click', toggleRepeat);
    
    // Progress
    elements.progressBar.addEventListener('click', seek);
    elements.audioPlayer.addEventListener('timeupdate', updateProgress);
    elements.audioPlayer.addEventListener('loadedmetadata', updateDuration);
    elements.audioPlayer.addEventListener('ended', handleSongEnd);
    
    // Volume
    elements.volumeBtn.addEventListener('click', toggleMute);
    elements.volumeBar.addEventListener('click', setVolume);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);
}

// Keyboard Shortcuts
function handleKeyboard(e) {
    if (e.target.tagName === 'INPUT') return; // Don't interfere with inputs
    
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlayPause();
            break;
        case 'ArrowRight':
            playNext();
            break;
        case 'ArrowLeft':
            playPrevious();
            break;
        case 'ArrowUp':
            e.preventDefault();
            adjustVolume(0.1);
            break;
        case 'ArrowDown':
            e.preventDefault();
            adjustVolume(-0.1);
            break;
    }
}

function adjustVolume(delta) {
    const newVolume = Math.max(0, Math.min(1, elements.audioPlayer.volume + delta));
    elements.audioPlayer.volume = newVolume;
    state.volume = newVolume;
    elements.volumeFill.style.width = `${newVolume * 100}%`;
    updateVolumeIcon();
}

// Language Switching
function switchLanguage(language) {
    state.currentLanguage = language;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.language === language);
    });
    
    // Filter playlist
    if (language === 'all') {
        state.playlist = state.allSongs;
    } else if (language === 'uploaded') {
        state.playlist = state.allSongs.filter(song => !song.isDemo);
    } else {
        state.playlist = state.allSongs.filter(song => song.language === language);
    }
    
    updatePlaylistDisplay();
}

// File Upload
function handleFileUpload(e) {
    const files = Array.from(e.target.files);
    
    if (files.length === 0) return;
    
    let uploadedCount = 0;
    
    files.forEach(file => {
        if (file.type.startsWith('audio/')) {
            const song = {
                title: file.name.replace(/\.[^/.]+$/, ""),
                artist: 'Unknown Artist',
                album: 'My Music',
                language: 'Uploaded',
                src: URL.createObjectURL(file),
                duration: '0:00',
                isDemo: false
            };
            state.allSongs.push(song);
            uploadedCount++;
        }
    });
    
    if (uploadedCount === 0) {
        alert('No audio files selected. Please select MP3, WAV, or other audio files.');
        return;
    }
    
    // Switch to "My Music" tab to show uploaded songs
    switchLanguage('uploaded');
    
    // Show success message
    showUploadSuccess(uploadedCount);
    
    // If this is the first song, load it
    const uploadedSongs = state.allSongs.filter(s => !s.isDemo);
    if (uploadedSongs.length === uploadedCount) {
        loadSong(0);
    }
    
    // Reset file input
    e.target.value = '';
}

function showUploadSuccess(count) {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 1000;
        max-width: 350px;
        animation: slideIn 0.5s ease-out;
    `;
    
    message.innerHTML = `
        <div style="display: flex; align-items: start; gap: 1rem;">
            <i class="fas fa-check-circle" style="font-size: 1.5rem; margin-top: 0.25rem;"></i>
            <div>
                <strong style="font-size: 1.1rem; display: block; margin-bottom: 0.5rem;">Upload Successful!</strong>
                <p style="margin: 0; font-size: 0.9rem; line-height: 1.5;">
                    ${count} song${count > 1 ? 's' : ''} added to "My Music" playlist.
                    <br><br>
                    Click any song to play it!
                </p>
            </div>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        if (message.parentElement) {
            message.style.opacity = '0';
            message.style.transition = 'opacity 0.5s';
            setTimeout(() => message.remove(), 500);
        }
    }, 4000);
}

// Playlist Display
function updatePlaylistDisplay() {
    // Update count
    elements.playlistCount.textContent = `${state.playlist.length} song${state.playlist.length !== 1 ? 's' : ''}`;
    
    if (state.playlist.length === 0) {
        elements.playlist.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-music"></i>
                <p>No songs yet. Upload music to get started!</p>
            </div>
        `;
        return;
    }
    
    elements.playlist.innerHTML = state.playlist.map((song, index) => {
        const languageBadge = song.language ? `<span class="language-badge ${song.language.toLowerCase()}">${song.language}</span>` : '';
        return `
            <div class="playlist-item ${index === state.currentIndex ? 'active' : ''}" onclick="playSong(${index})">
                <span class="playlist-item-number">${index + 1}</span>
                <i class="fas fa-music playlist-item-icon"></i>
                <div class="playlist-item-info">
                    <div class="playlist-item-title">${song.title} ${languageBadge}</div>
                    <div class="playlist-item-artist">${song.artist}</div>
                </div>
                <span class="playlist-item-duration">${song.duration}</span>
                <button class="playlist-item-remove" onclick="event.stopPropagation(); removeSong(${index})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
    }).join('');
}

// Clear Playlist
function clearPlaylist() {
    if (state.playlist.length === 0) return;
    
    if (confirm('Are you sure you want to clear all songs from the playlist?')) {
        state.playlist = [];
        state.currentIndex = 0;
        resetPlayer();
        updatePlaylistDisplay();
    }
}

// Load Song
function loadSong(index) {
    if (index < 0 || index >= state.playlist.length) return;
    
    state.currentIndex = index;
    const song = state.playlist[index];
    
    elements.audioPlayer.src = song.src;
    
    // Update footer player
    elements.songTitle.textContent = song.title;
    elements.songArtist.textContent = song.artist;
    
    // Update large display
    elements.currentSongTitle.textContent = song.title;
    elements.currentArtist.textContent = song.artist;
    elements.currentAlbum.textContent = song.album || 'Unknown Album';
    
    updatePlaylistDisplay();
}

// Play Song
function playSong(index) {
    const song = state.playlist[index];
    
    // Check if song has audio file
    if (!song.src || song.src === '') {
        showNoAudioMessage(song);
        loadSong(index); // Still load the song info
        return;
    }
    
    loadSong(index);
    play();
}

function showNoAudioMessage(song) {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ef4444, #dc2626);
        color: white;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        z-index: 2000;
        max-width: 500px;
        text-align: center;
        animation: popIn 0.3s ease-out;
    `;
    
    message.innerHTML = `
        <i class="fas fa-exclamation-circle" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
        <h3 style="margin-bottom: 1rem; font-size: 1.5rem;">No Audio File</h3>
        <p style="margin-bottom: 0.5rem; line-height: 1.6;">
            <strong>"${song.title}"</strong> is a demo song without an audio file.
        </p>
        <p style="margin-bottom: 1.5rem; opacity: 0.9; line-height: 1.6;">
            To play music, click <strong>"Upload Music"</strong> and add your own audio files.
        </p>
        <button onclick="this.parentElement.remove()" 
            style="background: white; color: #ef4444; border: none; 
            padding: 0.75rem 2rem; border-radius: 0.5rem; cursor: pointer; 
            font-weight: 600; font-size: 1rem;">
            Got it!
        </button>
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes popIn {
            from {
                transform: translate(-50%, -50%) scale(0.8);
                opacity: 0;
            }
            to {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(message);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (message.parentElement) {
            message.style.animation = 'popOut 0.3s ease-out';
            setTimeout(() => message.remove(), 300);
        }
    }, 5000);
}

// Remove Song
function removeSong(index) {
    state.playlist.splice(index, 1);
    
    if (index === state.currentIndex && state.playlist.length > 0) {
        loadSong(Math.min(index, state.playlist.length - 1));
    } else if (index < state.currentIndex) {
        state.currentIndex--;
    }
    
    if (state.playlist.length === 0) {
        resetPlayer();
    }
    
    updatePlaylistDisplay();
}

// Playback Controls
function togglePlayPause() {
    if (state.playlist.length === 0) {
        alert('Please upload some music first!');
        return;
    }
    
    if (state.isPlaying) {
        pause();
    } else {
        play();
    }
}

function play() {
    elements.audioPlayer.play();
    state.isPlaying = true;
    elements.playBtn.querySelector('i').className = 'fas fa-pause';
}

function pause() {
    elements.audioPlayer.pause();
    state.isPlaying = false;
    elements.playBtn.querySelector('i').className = 'fas fa-play';
}

function playNext() {
    if (state.playlist.length === 0) return;
    
    let nextIndex;
    if (state.isShuffle) {
        nextIndex = Math.floor(Math.random() * state.playlist.length);
    } else {
        nextIndex = (state.currentIndex + 1) % state.playlist.length;
    }
    
    playSong(nextIndex);
}

function playPrevious() {
    if (state.playlist.length === 0) return;
    
    const prevIndex = (state.currentIndex - 1 + state.playlist.length) % state.playlist.length;
    playSong(prevIndex);
}

function handleSongEnd() {
    if (state.repeatMode === 'one') {
        play();
    } else if (state.repeatMode === 'all' || state.currentIndex < state.playlist.length - 1) {
        playNext();
    } else {
        pause();
    }
}

// Shuffle & Repeat
function toggleShuffle() {
    state.isShuffle = !state.isShuffle;
    elements.shuffleBtn.classList.toggle('active', state.isShuffle);
}

function toggleRepeat() {
    const modes = ['off', 'all', 'one'];
    const currentIndex = modes.indexOf(state.repeatMode);
    state.repeatMode = modes[(currentIndex + 1) % modes.length];
    
    const icon = elements.repeatBtn.querySelector('i');
    elements.repeatBtn.classList.toggle('active', state.repeatMode !== 'off');
    
    if (state.repeatMode === 'one') {
        icon.className = 'fas fa-redo-alt';
    } else {
        icon.className = 'fas fa-redo';
    }
}

// Progress
function updateProgress() {
    const { currentTime, duration } = elements.audioPlayer;
    
    if (duration) {
        const percentage = (currentTime / duration) * 100;
        elements.progressFill.style.width = `${percentage}%`;
        elements.currentTime.textContent = formatTime(currentTime);
    }
}

function updateDuration() {
    const { duration } = elements.audioPlayer;
    if (duration && !isNaN(duration)) {
        elements.duration.textContent = formatTime(duration);
        
        // Update song duration in playlist
        if (state.playlist[state.currentIndex]) {
            state.playlist[state.currentIndex].duration = formatTime(duration);
            updatePlaylistDisplay();
        }
    }
}

function seek(e) {
    const rect = elements.progressBar.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    elements.audioPlayer.currentTime = percentage * elements.audioPlayer.duration;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Volume
function setVolume(e) {
    const rect = elements.volumeBar.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    const volume = Math.max(0, Math.min(1, percentage));
    
    elements.audioPlayer.volume = volume;
    state.volume = volume;
    elements.volumeFill.style.width = `${volume * 100}%`;
    
    updateVolumeIcon();
}

function toggleMute() {
    if (elements.audioPlayer.volume > 0) {
        state.volume = elements.audioPlayer.volume;
        elements.audioPlayer.volume = 0;
        elements.volumeFill.style.width = '0%';
    } else {
        elements.audioPlayer.volume = state.volume;
        elements.volumeFill.style.width = `${state.volume * 100}%`;
    }
    
    updateVolumeIcon();
}

function updateVolumeIcon() {
    const icon = elements.volumeBtn.querySelector('i');
    const volume = elements.audioPlayer.volume;
    
    if (volume === 0) {
        icon.className = 'fas fa-volume-mute';
    } else if (volume < 0.5) {
        icon.className = 'fas fa-volume-down';
    } else {
        icon.className = 'fas fa-volume-up';
    }
}

// Reset
function resetPlayer() {
    elements.audioPlayer.src = '';
    
    // Reset footer
    elements.songTitle.textContent = 'No song playing';
    elements.songArtist.textContent = 'Select a song';
    
    // Reset large display
    elements.currentSongTitle.textContent = 'No Song Playing';
    elements.currentArtist.textContent = 'Select a song from your playlist';
    elements.currentAlbum.textContent = 'Unknown Album';
    
    // Reset progress
    elements.currentTime.textContent = '0:00';
    elements.duration.textContent = '0:00';
    elements.progressFill.style.width = '0%';
    
    state.isPlaying = false;
    elements.playBtn.querySelector('i').className = 'fas fa-play';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
