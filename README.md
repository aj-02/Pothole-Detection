# Pothole Detection

This repository contains a web application for visualizing and pinpointing the locations of potholes on a map. The severity of the potholes is represented by different colors on the map, providing users with an intuitive understanding of the road conditions.

## Features

- Visual representation of pothole locations on a map.
- Severity indication through color differentiation.
- Integration with a JSON file containing detailed information about potholes.
- User-friendly interface for easy navigation and interaction.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/pothole-map.git
    ```

2. Navigate into the project directory:

    ```bash
    cd pothole-map
    ```

3. Open `index.html` in a web browser.

## Usage

- Upon opening the web application, users will be presented with a map interface.
- Pothole locations will be marked on the map with different colors indicating severity.
- Users can interact with the map to zoom in/out and pan to explore different areas.
- Clicking on a pothole marker will display detailed information about the pothole.

## Data Integration

Pothole data is integrated into the application using a JSON file. The structure of the JSON file should follow the format below:

```json
[
  {
    "latitude": 40.7128,
    "longitude": -74.006,
    "severity": "High",
    "description": "Large pothole on main street."
  },
  {
    "latitude": 34.0522,
    "longitude": -118.2437,
    "severity": "Medium",
    "description": "Multiple potholes near intersection."
  },
  {
    "latitude": 51.5074,
    "longitude": -0.1278,
    "severity": "Low",
    "description": "Small pothole on side street."
  }
]
