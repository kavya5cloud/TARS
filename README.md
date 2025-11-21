# TARS
---

#  Interstellar Experience

A cinematic, immersive **Interstellar-themed web experience** featuring an animated cockpit, interactive TARS bot, spaceflight animation, and futuristic UI transitions.

##  Overview

Interstellar Experience is an animated, interactive web environment inspired by *Interstellar*.
It includes:

* A **tablet intro** with typing animation
* A **cockpit environment** with twinkling stars
* A fully animated **TARS robot**
* A **chat system** with dynamic TARS responses
* A **space view mode** with a rocket fly-by animation
* Smooth transitions and cinematic effects
* Custom sci-fi fonts and neon green theme

This project is built entirely using **HTML, CSS, and JavaScript** — no frameworks required.

---

##  Features

###  1. Tablet Intro & Typing Animation

* Interactive message typing effect
* Slide-in and slide-out tablet animation
* Cinematic transition into cockpit

###  2. Cockpit Environment

* Cockpit background (replaceable custom asset)
* Twinkling stars inside cockpit window
* Animated TARS robot entrance

###  3. TARS Chatbot

* Click TARS or “Chat with TARS” to open chat window
* AI-style responses based on keywords
* Built-in personality:

  * **90% Honesty**
  * **65% Humor**
* Live “processing” spinner for realism
* Auto-scroll chat messages

###  4. Space View Mode

* Full-screen space mode
* Random star generation each time
* Rocket fly-by animation
* One-click return to cockpit

###  5. Custom Visual Experience

* Neon green sci-fi typography
* Animated buttons
* Smooth fade transitions
* Reactive window stars
* High-quality Interstellar-inspired UI

---

##  Project Structure

```
/project
│── index.html
│── assets/
│   └── images/
│       ├── cockpit.png
│       ├── endurance.png
│       └── tars.png
```

> Make sure to keep the images in the exact paths shown above.

---

##  Technologies Used

* **HTML5** – Structure
* **CSS3** – Animations, UI, sci-fi aesthetic
* **Vanilla JavaScript** – Chat logic, transitions, effects
* **Google Fonts** – Share Tech Mono

No frameworks needed.

---

##  Getting Started

### 1. Clone the repository

```
git clone https://github.com/your-username/interstellar-experience.git
```

### 2. Open the project

Just open `index.html` in any browser.

### 3. Add required assets

Place your images in:

```
assets/images/cockpit.png  
assets/images/tars.png  
assets/images/endurance.png
```

### 4. Run

No build step required — everything works directly in the browser.

---

##  How TARS Chat Works

The chatbot responds to predefined triggers:

* **Greetings** → “hello”, “hi”, “greetings”
* **Status questions** → “how are you”
* **Purpose questions** → “what’s your purpose”
* **Jokes** → “tell me a joke”
* **Farewell** → “bye”, “exit”, “leave”
* Otherwise → default witty TARS replies

---

##  Customization

You can modify:

###  Tablet Message

Inside `#message`:

```
Welcome Cooper,
We were waiting for you...
```

###  TARS Personality

Inside `TARS_RESPONSES` object.

###  Animation timings

* Typing animation
* Rocket speed
* Slide transitions

---

##  Known Notes

* Keep animations synced with the intro duration.
* All assets must exist at correct paths.
* Background images should be PNG for best blending.

---

##  Credits

Made by **Kavya Shree**
Inspired by *Interstellar* & NASA futuristic UI aesthetics.
Developed as an interactive cinematic web experiment.

---

##  License

This project is free for personal use.
For commercial use, replace copyrighted movie assets.

---

