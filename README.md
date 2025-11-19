# MusicStream - Web-Based Music Player

sandbox deployment link : https://wf5zxs.csb.app/

**Project Difficulty Level:** Hard  
**Technologies Used:** HTML5, CSS3, JavaScript (ES6+)

---

## Project Overview

MusicStream is a fully-featured web-based music player application that provides an intuitive and interactive interface for playing audio files. The application demonstrates advanced web development concepts including HTML5 Audio API, responsive design, and modern JavaScript programming.

---

## Features

### ✅ User Interface
- **Clean & Intuitive Design** - Modern, user-friendly interface with gradient backgrounds
- **Sticky Footer Player** - Always accessible controls at the bottom of the screen
- **Large Album Display** - Prominent now-playing section showing current song information
- **Responsive Layout** - Adapts seamlessly to desktop, tablet, and mobile devices

### ✅ Audio Playback
- **HTML5 Audio Element** - Native browser audio playback support
- **Multiple Format Support** - Plays MP3, WAV, OGG, and other HTML5-supported formats
- **Seamless Playback** - Smooth transitions between songs

### ✅ Playlist Management
- **Dynamic Playlist** - Add and remove songs on the fly
- **Song Counter** - Displays total number of songs in playlist
- **Clear All Function** - Remove all songs with confirmation
- **Visual Feedback** - Active song highlighting in playlist

### ✅ Playback Controls
- **Play/Pause** - Toggle playback with visual feedback
- **Next/Previous** - Navigate through playlist
- **Shuffle Mode** - Random song selection
- **Repeat Modes** - Off, Repeat All, Repeat One
- **Seek Functionality** - Click progress bar to jump to any position

### ✅ Volume Control
- **Volume Slider** - Adjust audio level from 0-100%
- **Mute/Unmute** - Quick volume toggle
- **Visual Indicator** - Dynamic volume icon (mute, low, high)
- **Keyboard Control** - Arrow up/down for volume adjustment

### ✅ Song Information Display
- **Title** - Song name displayed in footer and main section
- **Artist** - Artist information
- **Album** - Album name (if available)
- **Duration** - Total song length
- **Current Time** - Real-time playback position

### ✅ Additional Features
- **Keyboard Shortcuts** - Space (play/pause), Arrow keys (navigation/volume)
- **Progress Tracking** - Real-time progress bar with time display
- **Smooth Animations** - Fade-in effects and hover states
- **Remove Songs** - Individual song removal from playlist

---

## How to Use

### Getting Started
1. **Open the Application**
   - Double-click `index.html` or open it in your web browser
   - No server required - runs entirely in the browser
   - **50 demo songs** automatically loaded (Telugu, Hindi, English)

2. **Demo Mode**
   - Application loads with 50 predefined songs:
     - **10 Telugu songs** (Sid Sriram, Armaan Malik, etc.)
     - **15 Hindi songs** (Arijit Singh, Sonu Nigam, etc.)
     - **20 English songs** (Ed Sheeran, The Weeknd, Adele, etc.)
   - These are sample entries without actual audio files
   - Shows how the player looks with a full playlist

3. **Upload Your Music**
   - Click the "Upload Music" button in the top navigation
   - Select one or more audio files from your computer
   - Supported formats: MP3, WAV, OGG, M4A, FLAC
   - Your uploaded songs will be added to the playlist

4. **Play Music**
   - Click any uploaded song to start playback
   - Use the footer controls to manage playback
   - View current song information in the "Now Playing" section

### Controls Guide

#### Playback Controls
- **Play/Pause Button** (Center, large) - Start or stop the current song
- **Previous Button** - Go to previous song in playlist
- **Next Button** - Skip to next song
- **Shuffle Button** - Enable/disable random playback (purple when active)
- **Repeat Button** - Cycle through repeat modes (off → all → one)

#### Progress Bar
- **Click** anywhere on the progress bar to seek to that position
- **Time Display** - Shows current time / total duration

#### Volume Control
- **Volume Icon** - Click to mute/unmute
- **Volume Slider** - Click or drag to adjust volume level

#### Playlist Management
- **Click Song** - Play selected song
- **X Button** - Remove individual song (appears on hover)
- **Clear All** - Remove all songs from playlist

#### Keyboard Shortcuts
- **Spacebar** - Play/Pause
- **Arrow Right** - Next song
- **Arrow Left** - Previous song
- **Arrow Up** - Increase volume
- **Arrow Down** - Decrease volume

---

## Technical Implementation

### Technologies Used

**HTML5**
- Semantic HTML structure
- Audio element for playback
- File input for uploads
- Accessible markup

**CSS3**
- CSS Grid and Flexbox layouts
- CSS Variables for theming
- Responsive media queries
- Smooth transitions and animations
- Gradient backgrounds
- Glassmorphism effects

**JavaScript (ES6+)**
- Event-driven architecture
- DOM manipulation
- HTML5 Audio API
- File API for uploads
- ES6 modules and arrow functions
- Template literals
- Array methods (map, filter, forEach)

### Code Structure

```
MUSIC PLAYER/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Application logic and functionality
└── README.md       # This documentation file
```

### Key Components

1. **State Management** - Centralized state object for playlist and player status
2. **Event Listeners** - Comprehensive event handling for user interactions
3. **Audio Control** - HTML5 Audio API integration
4. **Dynamic UI Updates** - Real-time DOM manipulation
5. **Responsive Design** - Mobile-first approach with breakpoints

---

## Browser Compatibility

- ✅ Google Chrome (recommended)
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Safari
- ✅ Opera

**Requirements:** Modern browser with HTML5 audio support

---

## Project Structure

### HTML Components
- Navigation bar with upload button
- Hero section
- Now Playing display
- Playlist section
- Sticky footer player
- Audio element

### CSS Features
- CSS Variables for easy theming
- Responsive grid layout
- Flexbox for component alignment
- Smooth animations
- Hover effects
- Mobile-responsive design

### JavaScript Modules
- State management
- Event handling
- File upload processing
- Playlist management
- Audio playback control
- Progress tracking
- Volume control
- Keyboard shortcuts

---

## Unique Features

1. **Dual Display** - Song information shown in both footer and main section
2. **Keyboard Navigation** - Full keyboard control support
3. **Visual Feedback** - Active states, hover effects, and smooth transitions
4. **Smart Repeat** - Three repeat modes for different listening preferences
5. **Playlist Counter** - Real-time song count display
6. **Confirmation Dialogs** - Prevents accidental playlist clearing

---

## Code Quality

- ✅ **Clean Code** - Well-organized and readable
- ✅ **Comments** - Comprehensive inline documentation
- ✅ **Modular Functions** - Single responsibility principle
- ✅ **Error Handling** - Graceful handling of edge cases
- ✅ **Best Practices** - Modern JavaScript standards

---

## Future Enhancements

Potential features for future versions:
- Drag and drop file upload
- Playlist save/load functionality
- Equalizer controls
- Visualizer effects
- Search and filter songs
- Album artwork display
- Lyrics display

---

## Credits

**Developer:** [Your Name]  
**Project Type:** Web Development Assignment  
**Difficulty:** Hard  
**Technologies:** HTML5, CSS3, JavaScript

---

## License

This project is created for educational purposes as part of a web development assignment.

---

**Enjoy your music with MusicStream!** 🎵
