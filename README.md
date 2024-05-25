# Sprint Story Points Calculator

This script calculates the maximum number of story points that can be planned in a 2-week sprint, based on the available working hours of software engineers. The calculation considers each engineer's utilization rate, anticipated days off, and the hours required per story point.

## Features

- Calculates available working hours for each engineer.
- Determines the maximum story points that can be planned based on available hours.
- Takes into account each engineer's utilization percentage and days off.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
    ```sh
    git clone <https://github.com/Bibarella/Sprint_Capacity_Calculator.git>
    ```
2. Navigate to the project directory:
    ```sh
    cd <Sprint_Capacity_Calculator>
    ```

### Usage

1. Update the `engineers` array in the `calculator.js` file with the appropriate utilization percentages and days off for each engineer.

2. Run the script:
    ```sh
    node calculator.js
    ```

## Future Plans
- Add Frontend