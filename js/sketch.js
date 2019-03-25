// Add coordinates in pairs.
let coordinates = [40, 40, 80, 60, 100, 100, 60, 120, 50, 150];

const DIAMETER = 10,
    CANVAS_WIDTH = 150,
    CANVAS_HEIGHT = 200,
    FIRST_X_COORDINATE = 0,
    LAST_X_COORDINATE = (coordinates.length - 2),
    AMOUNT_OF_COORDINATES = coordinates.length,
    RED = 0,
    GREEN = 0,
    BLUE = 0;

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {

    // Run draw() once.
    noLoop();

    // Draw the ellipses in the for loop at the tail of this function transparently.
    noFill();

    // Define the color of the curve and the ellipses.
    stroke(RED, GREEN, BLUE);

    beginShape();

    // Draw the continuous spline curve, which must be bound by beginShape and endShape.
    // Note: The first and last coordinates of a spline must be invoked curveVertex twice with the same arguments.
    for (let i = FIRST_X_COORDINATE; i < AMOUNT_OF_COORDINATES; i += 2) {
        if ((i === FIRST_X_COORDINATE) || (i === LAST_X_COORDINATE)) {
            curveVertex(coordinates[i], coordinates[i + 1]);
            curveVertex(coordinates[i], coordinates[i + 1]);
        } else {
            curveVertex(coordinates[i], coordinates[i + 1]);
        }
    }

    endShape();

    // Draws ellipses at the vertex points.
    for (let i = FIRST_X_COORDINATE; i < AMOUNT_OF_COORDINATES; i += 2) {
        ellipse(coordinates[i], coordinates[i + 1], DIAMETER, DIAMETER);
    }
}
