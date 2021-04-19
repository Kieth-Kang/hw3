// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥

  // Define the variables for each data point in the Object.
  // Write the ride related information to the JavaScript console
  let passengerFirstName = ride.passengerDetails.first
  console.log(`Passenger's first name is ${passengerFirstName}`)

  let passengerLastName = ride.passengerDetails.last
  console.log(`Passenger's last name is ${passengerLastName}`)

  let passengerPhoneNumber = ride.passengerDetails.phoneNumber
  console.log(`Passenger's phone number is ${passengerPhoneNumber}`)

  let puLocation = ride.pickupLocation.address.concat(", ", ride.pickupLocation.city, ", ", ride.pickupLocation.state, ", ", ride.pickupLocation.zip)
  console.log(`The pickup location is ${puLocation}`)

  let doLocation = ride.dropoffLocation.address.concat(", ", ride.dropoffLocation.city, ", ", ride.dropoffLocation.state, ", ", ride.dropoffLocation.zip)
  console.log(`The dropoff location is ${doLocation}`)

  // Define the level of service related variables.
  let purple = ride.purpleRequested
  let nOfPassengers = ride.numberOfPassengers

  // Figure out which level of service should be displayed, store it in memory
  let serviceLevel
  if (purple === true) {
    serviceLevel = `Noober Purple`
  } else if (nOfPassengers > 3) {
    serviceLevel = `Noober XL`
  } else {
    serviceLevel = `Noober X`
  }
  console.log(`Service level is ${serviceLevel}`)

  // Create a sentence that displays the information of the ride
  let sentence = `${serviceLevel} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pickup at ${puLocation}. Drop-off at ${doLocation}`

  // Write the sentence to the JavaScript console
  console.log(sentence)

  // 🔥 YOUR CODE ENDS HERE 🔥
})
