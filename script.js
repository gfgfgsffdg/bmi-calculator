function calculateBMI() {
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);

  // Validate input
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById("result").innerHTML = "Please enter valid height and weight.";
    return;
  }

  // Convert height from centimeters to meters
  height = height / 100;

  // Calculate BMI
  var bmi = weight / (height * height);
  bmi = bmi.toFixed(2);  // Round to two decimal places

  // Classify BMI
  var classification = "";
  if (bmi < 16) {
    classification = "Severe Thinness";
  } else if (bmi < 17) {
    classification = "Moderate Thinness";
  } else if (bmi < 18.5) {
    classification = "Mild Thinness";
  } else if (bmi < 25) {
    classification = "Normal";
  } else if (bmi < 30) {
    classification = "Overweight";
  } else if (bmi < 35) {
    classification = "Obese Class I";
  } else if (bmi < 40) {
    classification = "Obese Class II";
  } else {
    classification = "Obese Class III";
  }

  // Display result
  var resultMessage = "Your BMI is " + bmi + ". ";
  resultMessage += "Classification: " + classification + "<br><br>";
  resultMessage += "The resault is based on the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 20 or older.";

  document.getElementById("result").innerHTML = resultMessage;
}
function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");

  var darkModeToggle = document.querySelector(".dark-mode-toggle i");
  darkModeToggle.classList.toggle("fa-sun");
  darkModeToggle.classList.toggle("fa-moon");
  darkModeToggle.classList.toggle("light-mode"); // Add this line if you want to change the icon color for light mode
}
