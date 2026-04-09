# Seesaw Simulation

A pure JavaScript seesaw simulation where users can drop random-weight objects directly onto the plank and watch the system rebalance based on torque calculations.

## Project Overview
This project simulates a playground seesaw with a centered pivot.  
Users can click directly on the plank to place new objects with random weights between 1 and 10 kg.  
The seesaw recalculates its balance after each interaction and tilts according to the torque difference between both sides.

## Features
- Pure HTML, CSS, and JavaScript
- Click-to-drop interaction on the plank
- Random object weights between 1 and 10 kg
- Torque-based balance calculation
- Angle clamped between -30° and 30°
- Smooth tilt animation
- Left and right total weight display
- Local storage persistence
- Reset button
- Pause/Resume button
- Weight indicator on each object (scaled by weight)
- Distance scale with tick marks on the plank
- Responsive layout

## Physics Logic
The seesaw uses a centered pivot point.

For each object:
- distance = distance from the pivot
- torque = weight × distance

Then:
- left torque and right torque are calculated separately
- the final angle is based on the torque difference
- the angle is clamped between -30 and 30 degrees

## Architecture
The project is split into small modules:

- `app.js`: initializes the app and connects all parts
- `config.js`: contains fixed constants
- `state.js`: stores application state
- `physics.js`: handles weight, torque, and angle calculations
- `events.js`: handles click interaction
- `render.js`: updates the DOM
- `storage.js`: persists and restores data
- `utils.js`: helper functions

## Thought Process and Design Decisions
I separated the project into state management, physics calculations, rendering, event handling, and persistence layers to keep responsibilities clear and make the project easier to maintain.

I implemented the simulation logic first before completing the interaction and rendering layer so I could verify the core calculations independently.

I used DOM-based rendering because canvas and external libraries were not allowed in the challenge requirements.

## Trade-offs / Limitations
- This is a simplified simulation and does not model advanced physics like momentum, friction, or bouncing.
- Objects are visually attached to the plank and do not stack physically.
- The angle calculation uses a visual scaling factor for readability and control.

## AI Usage
AI was used only in a limited helper role for discussing structure, reviewing ideas, and debugging.  
The main implementation, logic, code organization, and final code were written manually.

## How to Run
1. Clone the repository
2. Open `index.html` in a browser
