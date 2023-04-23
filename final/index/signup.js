// Add event listener to the form
document.querySelector("#form").addEventListener("submit", validateForm);

// Function to validate the form
function validateForm(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the value of the mobile number input field
  const mobileNumber = document.querySelector("#num").value;

  // Check if the mobile number is empty
  if (mobileNumber === "") {
    alert("Please enter a 10-digit mobile number.");
    return false;
  }

  // Check if the mobile number contains only digits
  if (isNaN(mobileNumber)) {
    alert("Please enter only digits.");
    return false;
  }

  // Check if the mobile number is exactly 10 digits long
  if (mobileNumber.length !== 10) {
    alert("Please enter a valid 10-digit mobile number.");
    return false;
  }

  // Check if the mobile number starts with 6, 7, 8 or 9
  if (!["6", "7", "8", "9"].includes(mobileNumber.charAt(0))) {
    alert("Please enter a valid mobile number.");
    return false;
  }

  // If all the validations pass, redirect to the OTP page
  window.location.href = "otp.html";
  return true;
}
