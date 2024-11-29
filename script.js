function volume_sphere() {
    // Get the radius input value
    const radiusInput = document.getElementById("radius").value;
    const radius = parseFloat(radiusInput); // Convert to a floating-point number

    // Validate the radius: it must be a non-negative number
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return false; // Prevent form submission
    }

    // Calculate the volume using the formula: V = (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places and display in the volume field
    document.getElementById("volume").value = volume.toFixed(4);

    return false; // Prevent the form from refreshing
}

// Attach the function to the form's "onsubmit" event
document.getElementById("MyForm").onsubmit = volume_sphere;


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
