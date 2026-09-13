# Case Study: Mobile AR in Human Anatomy
**Broadsheet Section: `[ FEATURED CASE STUDIES ]` · Spatial Computing & Computer Vision**  
*Title:* Spatial Computing for Education  
*Domain:* Augmented Reality / Computer Vision / Real-Time Systems  
*Author:* Nicki Marty Pecision ([@HairyBlue](https://github.com/HairyBlue))  

---

## Executive Summary
**Mobile AR in Human Anatomy** is an interactive spatial computing system that bridges real-world human body positioning with real-time 3D anatomical organ simulation. By combining low-latency computer vision pipelines in Python with Unity's 3D rendering engine, the application allows students to explore internal organs, vascular structures, and muscular systems superimposed directly onto the user's physical dimensions.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       MOBILE AR DATA TRANSMISSION FLOW                      │
│                                                                             │
│   [ Camera Feed ] ──> [ Python Landmark Extraction (OpenCV / MediaPipe) ]   │
│                                           │                                 │
│                                           ▼                                 │
│                     [ Spatial Normalization & Body Matrix ]                 │
│                                           │                                 │
│                                           ▼                                 │
│                     [ High-Frequency TCP / WebSocket Stream ]               │
│                                           │                                 │
│                                           ▼                                 │
│                     [ Unity 3D Engine (C# Real-Time Mesh Transform) ]       │
│                                           │                                 │
│                                           ▼                                 │
│                     [ Interactive 3D Anatomy Projected on Device ]          │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## The Challenge
Medical and health sciences students often struggle to conceptualize three-dimensional relationships between internal organs when studying from flat textbook illustrations or static plastic mannequins. While specialized headsets (e.g., Apple Vision Pro, HoloLens) offer immersive 3D views, their high hardware costs make widespread classroom adoption impossible in emerging economies. 

The goal of this project was to deliver accessible, accurate spatial tracking on standard mobile and desktop consumer hardware without proprietary tracking markers.

---

## The Engineering Solution

### 1. Computer Vision Pipeline (Python)
- Developed a Python-based spatial tracking engine running in an isolated virtual environment (`venv`).
- Leveraged OpenCV and MediaPipe landmark detection algorithms to map human body landmarks (torso, shoulders, hips, sternum) at 30+ frames per second.
- Computed dynamic body proportions, scale ratios, and rotational vectors to anchor 3D coordinate spaces to the subject.

### 2. Low-Latency IPC & Socket Streaming
- Designed a custom binary/JSON communication protocol over TCP sockets and WebSockets.
- Transmitted skeletal transforms, landmark coordinates, and depth vectors with sub-15ms packet latency to avoid spatial jitter or motion disconnect.

### 3. Unity 3D Simulation & Layered Visualization (C#)
- Engineered a Unity client that receives coordinate transforms and attaches 3D anatomical assets to the detected anatomical anchors.
- Implemented an interactive layering system: users can toggle through muscular, skeletal, cardiovascular, and digestive layers in real time.
- Integrated scale normalization, ensuring organs scale proportionally to the user's detected height and shoulder width.

---

## Key Achievements
- **Real-Time Body Dimension Mapping:** Accurate anatomical tracking without requiring physical fiducial markers.
- **Accessible Spatial Computing:** Delivered high-fidelity AR educational experiences utilizing accessible mobile and commodity computing devices.
- **Decoupled Architecture:** Clean separation between the computer vision processing node (Python) and the visualization client (Unity/C#).

---

## Technical Specifications
- **Author:** Nicki Marty Pecision
- **Repository:** [https://github.com/HairyBlue](https://github.com/HairyBlue)
- **Technologies:** Python, C#, Unity 3D Engine, Bash Scripting, VENV, TCP & WebSockets, OpenCV, Git
