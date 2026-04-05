# DesiSpotify 🎵

A modern, responsive web-based music player featuring a curated collection of Indian and Desi music. Built with vanilla HTML, CSS, and JavaScript with a sleek glass-morphism design inspired by Spotify.

## Features

✨ **Modern Music Player**
- Play, pause, next, and previous track controls
- Progress bar with seek functionality
- Volume control with visual indicator
- Shuffle and repeat modes
- Real-time track time display

📱 **Responsive Design**
- Desktop and mobile optimized interface
- Sidebar navigation with album/playlist filtering
- Mobile-friendly library view
- Glass-morphism UI effects

🎼 **Music Library**
- 40+ curated tracks across multiple genres
- Organized by albums and playlists:
  - **Bhagwan Ke Bajan** (Spiritual songs)
  - **Haryana** (Haryanvi folk music)
  - **Favorite** (Popular Punjabi & Bollywood hits)
  - **Random Songs** (Party and dance tracks)
  - **Indian Army** (Patriotic songs)
  - **Love** (Classic romantic songs)

🔍 **Search Functionality**
- Real-time search across all tracks
- Filter by title and artist

🎨 **Premium UI/UX**
- Glass-morphism design elements
- Smooth animations and transitions
- Album artwork display
- Hero section with playlist/album info

## Project Structure

```
desispotify.better/
├── index.html          # Main HTML structure
├── styles.css          # All styling with CSS variables
├── script.js           # Player logic and interactivity
├── LICENSE             # License file
└── README.md           # This file
```

## Getting Started

### Installation

1. Clone the repository or download the files
2. Open `index.html` in a modern web browser
3. Start playing music!

### No Dependencies Required
This project uses only:
- Vanilla JavaScript (no frameworks)
- Font Awesome icons (CDN)
- Google Fonts (CDN)

## How to Use

### Player Controls
- **Play/Pause**: Click the play button in the player bar or main hero section
- **Next/Previous**: Use the navigation arrows
- **Shuffle**: Toggle shuffle mode
- **Repeat**: Toggle repeat mode (off → repeat all → repeat one)
- **Volume**: Adjust with the volume slider
- **Seek**: Click or drag on the progress bar

### Navigation
1. **Home**: View all tracks and featured playlists
2. **Search**: Find songs by title or artist
3. **Your Library**: Browse organized playlists
4. **Playlists Sidebar**: Click any album to filter by that collection

### Select and Play
- Click any track in the song list to play it
- Track starts playing immediately with artwork and info displayed

## Music Library

### Highlighted Artists
- **Kritika** - Bollywood covers
- **Guru Randhawa** - Punjabi pop
- **Neha Kakkar** - Bollywood and pop fusion
- **Khasa Aala Chahar** - Haryanvi music
- **Shankar Mahadevan** - Devotional songs
- **Honey Singh** - Hip-hop and party tracks

## Technical Features

### Audio Storage
- All audio files and artwork hosted on Supabase cloud storage
- Optimized for fast streaming

### Responsive Breakpoints
- Desktop: Full sidebar layout
- Tablet: Optimized navigation
- Mobile: Compact view with bottom controls

### Browser Compatibility
- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## Customization

### Color Scheme
Edit the CSS variables in `styles.css`:
```css
:root {
    --accent: #E91E63;        /* Change primary color */
    --bg-dark: #121212;       /* Change background */
    --text-primary: #FFFFFF;  /* Change text color */
}
```

### Add More Songs
Edit the `playlist` array in `script.js`:
```javascript
playlist.push({
    title: "Song Title",
    artist: "Artist Name",
    album: "Album Name",
    url: "https://your-audio-url.mp3",
    art: "https://your-image-url.jpg"
});
```

## Performance
- Lightweight codebase (~100KB total)
- Smooth animations at 60fps
- Lazy loading of album artwork
- Efficient DOM updates

## License
See the [LICENSE](LICENSE) file for details.

## Credits
- **Music**: Contributed by various Indian artists
- **Design**: Inspired by modern music streaming platforms
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)
- **Storage**: Supabase

---

**Enjoy your Desi music experience! 🎵🇮🇳**

Built with ❤️ for music lovers everywhere.
