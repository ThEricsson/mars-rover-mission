# 🤖 Mars Rover Mission

Mars Rover Mission is a web application designed to monitor and control the movement of a rover in a simulated Mars terrain. This project uses Vue 3, Pinia, and PrimeVue.

---

## 📚 Table of Contents

- [🤖 Mars Rover Mission](#-mars-rover-mission)
  - [📚 Table of Contents](#-table-of-contents)
  - [⚙️ Technologies Used](#️-technologies-used)
  - [🌟 Features \& Functionality](#-features--functionality)
  - [🧠 Core Logic](#-core-logic)
    - [🚗 Rover Logic](#-rover-logic)
    - [🪐 Terrain Logic](#-terrain-logic)
  - [🎯 Future Improvements](#-future-improvements)

---

## ⚙️ Technologies Used

- **Vue 3**: Progressive framework for building user interfaces.
- **Pinia**: State management library for Vue.
- **PrimeVue**: Modern, customizable UI components.
- **TailwindCSS**: CSS framework for fast and responsive styling.

---

## 🌟 Features & Functionality

- **Rover Control**: Send commands to the rover to move it forward, turn left or right.
- **Navigation History**: Displays a record of the movements made by the rover, including whether they were successful or unsuccessful.
- **Position Display**: Displays the rover's current position on the ground and its cardinal orientation (North, East, South, West).
- **Rover Connection**: Simulates the initial connection to the rover to start controlling it.
- **Terrain Validation**: Ensures that the rover does not move outside the defined terrain boundaries.

---

## 🧠 Core Logic

The application is composed by key logics, the hooks and stores of the rover and the terrain:

### 🚗 Rover Logic

- The **rover store** is the most important point of the application, it is in charge of modifying the state of the rover to make it advance in the terrain and modify the direction of the rover (N, E, S and W). For each advance that the rover makes, it will check if this position is correct or if it has encountered an obstacle, in case of encountering an obstacle it will go back.
- The **rover hook** has the logic to “connect” to the rover. The “connect” generates a random x & y position and direction for the rover, checking the terrain limits so as not to generate it outside the “planet”.

### 🪐 Terrain Logic

- The **terrain store** is responsible for storing the state of the terrain amplitude. It has the logic that returns the movement limits for the terrain. This logic helps to make the code more scalable.
- The **terrain hook**, which returns the constants for the generation of the terrain state, was created to obtain the “analysis” of the planet, it could be modified to access an access point in a program enhancement. It also has the method to check if the rover position is valid or not.

---

## 🎯 Future Improvements

Due to time limitations 🥲, the following features were left for future development:

- ✅ Add end-to-end testing with Cypress
- 🪨 Add random obstacles in the terrain (ready logic).
- 🗺️ Add a map with the actual position of the rover
- 💥 Adding an integrity system for the rover that will lower for each “hit”.
- 🎯 Defining a target coordinate to complete the mission

Developed with ♥️ By [Eric Roca Herrera](https://github.com/ThEricsson)
