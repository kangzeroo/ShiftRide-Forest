// FROM FRONTEND

/*
// onLoad() of RenterApp
query {
  findVehicles(lat:57.6885,lng:-46.6768,radius:99999999) {
    _id
		alias
    owner {
      _id
      aliasName
      profilePicture
    }
    licensePlate
    make
    model
    color
    costMultiple
    gasMultiple
    hasGasCard
    location
    parkingDescription
    fullAddress
    bodyType
    transmission
    seatCount
    gasType
    petsAllowed
    smokingAllowed
    features
    description
    photos
  }
}

// onBookTrip() by RenterApp
mutation {
  startTrip(userId: "98srufsa", vehicleId: "3456456") {
    _id
    returnBy
    bookedAt
    userNotes
    bookedVehicleLocation
    vehicle {
			_id
      alias
      owner {
        _id
        aliasName
        profilePicture
      }
      licensePlate
      make
      model
      color
      costMultiple
      gasMultiple
      hasGasCard
      location
      parkingDescription
      fullAddress
      bodyType
      transmission
      seatCount
      gasType
      petsAllowed
      smokingAllowed
      features
      description
      photos
      specialInstructions
      lockboxCode
      lockboxLocation
      lockboxVideoUrl
    }
  }
}

// onStartTrip() by RenterApp

// onEndTrip() by RenterApp

// onGetTripStatus() by RenterApp

*/
