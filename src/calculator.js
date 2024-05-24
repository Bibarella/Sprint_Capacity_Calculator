//  Utilization percentages per sprint and planned days off
const engineers = [
    { name: "Engineer 1", utilization: 0.75, daysOff: 5 },
    { name: "Engineer 2", utilization: 0.70, daysOff: 0 },
    { name: "Engineer 3", utilization: 0.60, daysOff: 0 },
    { name: "Engineer 4", utilization: 0.20, daysOff: 0 }
];

// Sprint length in Days
const sprintLengthInDays = 10;
const idealHoursPerSprint = 77;  

// Hours per story point
const hoursPerStoryPoint = {
    1: 4,   // 1 story point = 0.5 days = 4 hours
    2: 8,   // 2 story points = 1 day = 8 hours
    3: 12,  // 3 story points = 1.5 days = 12 hours
    5: 24,  // 5 story points = 3 days = 24 hours
    8: 40   // 8 story points = 5 days = 40 hours
};

// Calculation of the available hours per engineer
engineers.forEach(engineer => {
    const effectiveDays = sprintLengthInDays - engineer.daysOff;
    const effectiveUtilization = (effectiveDays / sprintLengthInDays) * engineer.utilization;
    const availableHours = idealHoursPerSprint * effectiveUtilization;
    engineer.availableHours = availableHours;
});

// Total availability of hours for the sprint
const totalAvailableHours = engineers.reduce((total, engineer) => total + engineer.availableHours, 0);

// Maximum story points that can be planned based on the available hours
const calculateMaxStoryPoints = (availableHours) => {
    let remainingHours = availableHours;
    let storyPoints = 0;

    const pointValues = [8, 5, 3, 2, 1];
    while (remainingHours > 0) {
        let pointAdded = false;
        for (let value of pointValues) {
            const hoursForPoint = hoursPerStoryPoint[value];
            if (remainingHours >= hoursForPoint) {
                remainingHours -= hoursForPoint;
                storyPoints += value;
                pointAdded = true;
                break;
            }
        }
        // If no story point can fit into the remaining hours, break the loop
        if (!pointAdded) {
            break;
        }
    }

    return storyPoints;
};

// Max story Points per Engineer
engineers.forEach(engineer => {
    engineer.maxStoryPoints = calculateMaxStoryPoints(engineer.availableHours);
});

// Max story points for the sprint
const totalMaxStoryPoints = engineers.reduce((total, engineer) => total + engineer.maxStoryPoints, 0);

// Results
console.log("Engineers Availability and Story Points:");
engineers.forEach(engineer => {
    console.log(`${engineer.name}: Available Hours = ${engineer.availableHours.toFixed(2)}, Max Story Points = ${engineer.maxStoryPoints}`);
});
console.log(`Total Available Hours: ${totalAvailableHours.toFixed(2)}`);
console.log(`Total Max Story Points that can be planned: ${totalMaxStoryPoints}`);
