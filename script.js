document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const mainPlayBtn = document.getElementById('mainPlayBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const repeatBtn = document.getElementById('repeatBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeIcon = document.getElementById('volumeIcon');
    const progressBar = document.getElementById('progressBar');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');

    // Player Bar Elements
    const trackTitleEl = document.getElementById('trackTitle');
    const trackArtistEl = document.getElementById('trackArtist');
    const currentArtEl = document.getElementById('currentArt');

    // Content Elements
    const playlistEl = document.getElementById('playlist');
    const albumListEl = document.getElementById('albumList');

    // Hero Elements
    const heroTitle = document.getElementById('heroTitle');
    const heroImage = document.getElementById('heroImage');
    const heroCount = document.getElementById('heroCount');

    // Navigation & Search Elements
    const homeView = document.getElementById('homeView');
    const searchView = document.getElementById('searchView');
    const libraryView = document.getElementById('libraryView');
    const songListView = document.getElementById('songListView');
    const searchInput = document.getElementById('searchInput');
    const mobileLibraryListEl = document.getElementById('mobileLibraryList');
    const navItems = document.querySelectorAll('.nav-item');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

    // State
    let isPlaying = false;
    let currentTrackIndex = 0;
    let currentAlbum = 'All';
    let filteredPlaylist = [];
    let isShuffle = false;
    let isRepeat = false;
    let searchQuery = '';

    // Playlist Data
    const playlist = [
        { title: "Assam Rifles", artist: "KTSec234 & INDIAN ARMY", album: "INDIAN ARMY", url: "assamrefaile.mp3", art: "images/image28.jpg" },
        { title: "Thumak Thumak", artist: "Kritika", album: "KRITIKA", url: "kritikavoice.mp3", art: "images/kritika_sketch.jpg" },
        { title: "Lag Ja Gale", artist: "Lata Mangeshkar", album: "LOVE", url: "love1.mp3", art: "images/image.jpg" },
        { title: "Tuition Badmashi Kaa", artist: "Faujdar, Kiran", album: "HARAYANA", url: "Tuition_Badmashi_Kaa_Hemant_Faujdar,_Kiran,_Masoom_Sharma,_Manisha.mp3", art: "images/image17.jpg" },
        { title: "Bhola Parvat Ka", artist: "KTSec234", album: "BHAGWAN KE BAJAN", url: "_Mai_bhola_parvat_ka_Bholenath_kaka_Devo_ke_dev_mahadev_Shiv_Sati.mp3", art: "images/image4.jpg" },
        { title: "Radha (Unconditional Love)", artist: "Kaka WRLD", album: "BHAGWAN KE BAJAN", url: "Kaka_WRLD_Radha_Unconditional_Love_Official_Video_Pellet_Drum_Productions.mp3", art: "images/image5.jpg" },
        { title: "Radha Rani Lage", artist: "Simpal Kharel", album: "BHAGWAN KE BAJAN", url: "RADHA_RANI_LAGE_SIMPAL_KHAREL_NEW_SONG_RADHA_KRISHNA_BHAJAN_2023.mp3", art: "images/image5.jpg" },
        { title: "Shiv Tandav Stotram", artist: "Ravana", album: "BHAGWAN KE BAJAN", url: "audio6.mp3", art: "images/image4.jpg" },
        { title: "Hanuman Chalisa", artist: "Shankar Mahadevan", album: "BHAGWAN KE BAJAN", url: "audio7.mp3", art: "images/image2.jpg" },
        { title: "Kabira Dohe", artist: "Jubin Nautiyal", album: "BHAGWAN KE BAJAN", url: "Jubin_Nautiyal_Kabira_Lyrical_Video_कबीर_दोहे_Raaj_Aashoo_Lovesh.mp3", art: "images/image6.jpg" },
        { title: "So Dukh Kaisa Paave", artist: "Jassie Gill", album: "BHAGWAN KE BAJAN", url: "So_Dukh_Kaisa_Paave_Jassie_Gill_Jaya_Kishori_Gurnazar_Devotional.mp3", art: "images/image8.jpg" },
        { title: "Backbone", artist: "Harrdy Sandhu", album: "FAVOURITE", url: "audio21.mp3", art: "images/image7.jpg" },
        { title: "Tu Meri Rani", artist: "Guru Randhawa", album: "FAVOURITE", url: "audio22.mp3", art: "images/image11.jpg" },
        { title: "Made in India", artist: "Guru Randhawa", album: "FAVOURITE", url: "audio23.mp3", art: "images/image13.jpg" },
        { title: "Yaari Meri Yaari Hai", artist: "Tony Kakkar", album: "FAVOURITE", url: "audio24.mp3", art: "images/image10.jpg" },
        { title: "Prada", artist: "Jass Manak", album: "FAVOURITE", url: "audio25.mp3", art: "images/image9.jpg" },
        { title: "Dil Ko Karrar Aaya", artist: "Neha Kakkar", album: "FAVOURITE", url: "audio26.mp3", art: "images/image14.jpg" },
        { title: "Guilty", artist: "Inder Chahal", album: "FAVOURITE", url: "audio27.mp3", art: "images/image16.jpg" },
        { title: "Ishare Tere", artist: "Guru Randhawa", album: "FAVOURITE", url: "audio28.mp3", art: "images/image11.jpg" },
        { title: "Butterfly", artist: "Jass Manak", album: "FAVOURITE", url: "audio29.mp3", art: "images/image9.jpg" },
        { title: "Aarambh Hai Prachand", artist: "Piyush Mishra", album: "FAVOURITE", url: "audio30.mp3", art: "images/image20.jpg" },
        { title: "Shoorveer 3", artist: "Rapperiya Baalam", album: "FAVOURITE", url: "audio41.mp3", art: "images/image15.jpg" },
        { title: "Tu Aake Dekhle", artist: "King", album: "FAVOURITE", url: "audio42.mp3", art: "images/image18.jpg" },
        { title: "Aankhon Mein Aansoo", artist: "Yasser Desai", album: "FAVOURITE", url: "audio43.mp3", art: "images/image21.jpg" },
        { title: "Club Pub", artist: "Bohemia", album: "RANDOM SONG", url: "audio31.mp3", art: "images/image22.jpg" },
        { title: "Goa Beach", artist: "Neha Kakkar", album: "RANDOM SONG", url: "audio32.mp3", art: "images/image25.jpg" },
        { title: "4 Men Down", artist: "Millind Gaba", album: "RANDOM SONG", url: "audio33.mp3", art: "images/image24.jpg" },
        { title: "All Black", artist: "Sukhe", album: "RANDOM SONG", url: "audio34.mp3", art: "images/image27.jpg" },
        { title: "Ram Aayenge", artist: "Vishal Mishra", album: "BHAGWAN KE BAJAN", url: "audio4.mp3", art: "images/image30.jpg" },
        { title: "Bhagatt Aadmi", artist: "Masoom Sharma", album: "HARAYANA", url: "Bhagatt_Aadmi_Tha_Masoom_Sharma_Pranjal_Dahiya,_Aman_Jaji_New_Haryanvi.mp3", art: "images/image3.jpg" },
        { title: "Jai Veeru", artist: "Khasa Aala Chahar", album: "HARAYANA", url: "Khasa_Aala_Chahar_Official_Video_Jai_Veeru_Bamboo_Beats_New_Haryanvi.mp3", art: "images/image19.jpg" },
        { title: "Narayan Mil Jayega", artist: "Jubin Nautiyal", album: "BHAGWAN KE BAJAN", url: "audio5.mp3", art: "images/image30.jpg" },
        { title: "Blue Eyes", artist: "Honey Singh", album: "FAVOURITE", url: "audio44.mp3", art: "images/image12.jpg" },
        { title: "Z Black", artist: "KD Desirock", album: "HARAYANA", url: "audio16.mp3", art: "images/image23.jpg" },
        { title: "Pistal", artist: "PS Polist", album: "HARAYANA", url: "audio20.mp3", art: "images/image17.jpg" },
        { title: "Father Saab", artist: "Khasa Aala Chahar", album: "HARAYANA", url: "audio13.mp3", art: "images/image26.jpg" },
        { title: "Desh Mere", artist: "Ajay Devgn", album: "INDIAN ARMY", url: "indanarmy2.mp3", art: "images/image28.jpg" },
    ];

    // Get unique albums
    const albums = ['All', ...new Set(playlist.map(track => track.album))];

    // Render Side Navigation & Mobile Albums
    function renderAlbumList() {
        albumListEl.innerHTML = '';
        if (mobileLibraryListEl) mobileLibraryListEl.innerHTML = '';

        albums.forEach(album => {
            // Sidebar List Item
            const li = document.createElement('li');
            li.textContent = album;
            li.className = album === currentAlbum ? 'active' : '';
            li.addEventListener('click', () => handleAlbumClick(album));
            albumListEl.appendChild(li);

            // Mobile Library Item
            if (mobileLibraryListEl) {
                const libLi = document.createElement('li');
                libLi.innerHTML = `<i class="fas fa-compact-disc"></i> <span>${album}</span>`;
                libLi.addEventListener('click', () => {
                    handleAlbumClick(album);
                    switchView('home'); // Go to home to see songs after picking album? 
                    // Or stay in library? Usually Spotify goes to the playlist view.
                    // For now let's go home so they see the songs.
                });
                mobileLibraryListEl.appendChild(libLi);
            }
        });
    }

    function handleAlbumClick(album) {
        currentAlbum = album;
        updateHeroSection();
        filterAndRenderPlaylist();

        // Update active state in sidebar
        document.querySelectorAll('.playlist-nav li').forEach(item => {
            item.className = item.textContent === currentAlbum ? 'active' : '';
        });
    }

    // Update Hero Section based on Album
    function updateHeroSection() {
        if (currentAlbum === 'All') {
            heroTitle.textContent = 'All Tracks';
            heroImage.src = 'images/kt.jpg'; // Default art
        } else {
            heroTitle.textContent = currentAlbum;
            // Find first song art for this album
            const firstSong = playlist.find(p => p.album === currentAlbum);
            if (firstSong) heroImage.src = firstSong.art;
        }
    }

    // Filter and Render Main Song List
    function filterAndRenderPlaylist() {
        let filtered = currentAlbum === 'All' ? playlist : playlist.filter(track => track.album === currentAlbum);

        if (searchQuery) {
            filtered = filtered.filter(track =>
                track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                track.artist.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        filteredPlaylist = filtered;

        // Update stats
        heroCount.textContent = `${filteredPlaylist.length} songs`;

        playlistEl.innerHTML = '';
        filteredPlaylist.forEach((track, index) => {
            const div = document.createElement('div');
            div.className = 'song-row';
            if (index === currentTrackIndex && track.album === playlist[currentTrackIndex].album) {
                // Warning: basic equality check, might need better unique ID if duplicates exist
                // Ideally checks against currently PLAYING track object, not just index in filtered list
            }

            // Check if this track is the currently playing one
            // We need a way to know if this specific track instance is playing
            // For now, let's just render. Highlighting active track logic needs to be robust.

            div.innerHTML = `
                <div class="col-num">${index + 1}</div>
                <div class="col-title">
                    <span>${track.title}</span>
                    <span class="sub-artist">${track.artist}</span>
                </div>
                <div class="col-album">${track.album}</div>
                <div class="col-duration">--:--</div> 
            `;

            div.addEventListener('click', () => {
                // We need to play from the FILTERED playlist, 
                // but we also need to map it back to the main playlist context effectively
                // For simplicity, let's play the track and set the current queue to the filtered playlist
                loadAndPlay(index, filteredPlaylist);
            });
            playlistEl.appendChild(div);
        });
    }

    // We need a separate variable to hold the CURRENT PLAYING CONTEXT (queue)
    let currentQueue = [];

    function loadTrack(index, queue) {
        if (!queue || queue.length === 0) queue = playlist;
        currentQueue = queue;

        // Ensure index wraps around safely
        if (index < 0) index = queue.length - 1;
        if (index >= queue.length) index = 0;

        currentTrackIndex = index;
        const track = queue[currentTrackIndex];

        audioPlayer.src = track.url;
        audioPlayer.load();

        // Update Player Bar UI
        trackTitleEl.textContent = track.title;
        trackArtistEl.textContent = track.artist;
        currentArtEl.src = track.art;

        // Highlight in list if visible
        updateActiveRow();

        // Update progress
        progress.style.width = '0%';
        currentTimeEl.textContent = '0:00';
    }

    function updateActiveRow() {
        const rows = document.querySelectorAll('.song-row');
        rows.forEach((row, i) => {
            row.classList.remove('active');
            // If the filtered view matches the current playing queue
            // This logic is a bit simple, but works for now
            if (filteredPlaylist[i] === currentQueue[currentTrackIndex]) {
                row.classList.add('active');
            }
        });
    }

    function playTrack() {
        audioPlayer.play().then(() => {
            isPlaying = true;
            updatePlayButtons();
        }).catch(err => console.error('Play error:', err));
    }

    function pauseTrack() {
        audioPlayer.pause();
        isPlaying = false;
        updatePlayButtons();
    }

    function updatePlayButtons() {
        const icon = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
        playPauseBtn.innerHTML = icon;
        mainPlayBtn.innerHTML = icon;
    }

    function loadAndPlay(index, queue) {
        loadTrack(index, queue);
        playTrack();
    }

    // Format time
    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Event Listeners
    playPauseBtn.addEventListener('click', () => isPlaying ? pauseTrack() : playTrack());
    mainPlayBtn.addEventListener('click', () => {
        // If nothing playing, play first of current view
        if (audioPlayer.paused && audioPlayer.currentTime === 0 && !audioPlayer.src) {
            loadAndPlay(0, filteredPlaylist);
        } else {
            isPlaying ? pauseTrack() : playTrack();
        }
    });

    prevBtn.addEventListener('click', () => loadAndPlay(currentTrackIndex - 1, currentQueue));
    nextBtn.addEventListener('click', () => loadAndPlay(currentTrackIndex + 1, currentQueue));

    volumeSlider.addEventListener('input', () => {
        const volume = volumeSlider.value / 100;
        audioPlayer.volume = volume;
        volumeIcon.className = `fas ${volume > 0.5 ? 'fa-volume-up' : volume > 0 ? 'fa-volume-down' : 'fa-volume-mute'}`;
    });

    // Progress Bar Click
    progressBar.addEventListener('click', (e) => {
        const width = progressBar.clientWidth;
        const clickX = e.offsetX;
        audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
    });

    // Audio Events
    audioPlayer.addEventListener('timeupdate', () => {
        const { currentTime, duration } = audioPlayer;
        if (!isNaN(duration)) {
            progress.style.width = `${(currentTime / duration) * 100}%`;
            currentTimeEl.textContent = formatTime(currentTime);
            totalTimeEl.textContent = formatTime(duration);
        }
    });

    audioPlayer.addEventListener('ended', () => {
        if (isRepeat) {
            audioPlayer.currentTime = 0;
            playTrack();
        } else {
            loadAndPlay(currentTrackIndex + 1, currentQueue);
        }
    });

    // Shuffle & Repeat (UI Toggle only for now, logic implemented basics)
    shuffleBtn.addEventListener('click', () => {
        isShuffle = !isShuffle;
        shuffleBtn.style.color = isShuffle ? 'var(--accent)' : 'var(--text-secondary)';
        // Shuffle logic would typically shuffle the queue array
    });

    repeatBtn.addEventListener('click', () => {
        isRepeat = !isRepeat;
        repeatBtn.style.color = isRepeat ? 'var(--accent)' : 'var(--text-secondary)';
    });

    // Search Input Event
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterAndRenderPlaylist();
        });
    }

    // Navigation Toggling Logic
    function switchView(viewName) {
        // Reset all
        homeView.classList.add('hidden');
        searchView.classList.add('hidden');
        libraryView.classList.add('hidden');
        songListView.classList.remove('hidden'); // Default show songs

        if (viewName === 'search') {
            searchView.classList.remove('hidden');
        } else if (viewName === 'library') {
            libraryView.classList.remove('hidden');
            songListView.classList.add('hidden'); // Hide songs in library list view
        } else {
            homeView.classList.remove('hidden');
        }

        // Update active class on nav items
        const allNavs = [...navItems, ...mobileNavItems];
        allNavs.forEach(item => {
            const text = item.querySelector('span').textContent.toLowerCase();
            if (text.includes(viewName.toLowerCase())) {
                item.classList.add('active');
            } else if (viewName === 'home' && (text.includes('home'))) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const view = item.querySelector('span').textContent.toLowerCase();
            if (view.includes('home')) switchView('home');
            if (view.includes('search')) switchView('search');
            if (view.includes('library')) switchView('library');
        });
    });

    mobileNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const view = item.querySelector('span').textContent.toLowerCase();
            if (view.includes('home')) switchView('home');
            if (view.includes('search')) switchView('search');
            if (view.includes('library')) switchView('library');
        });
    });

    // Initialize
    currentQueue = playlist; // Default queue
    renderAlbumList();
    filterAndRenderPlaylist();
    updateHeroSection();
});
