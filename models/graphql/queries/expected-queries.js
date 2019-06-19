// FROM FRONTEND

/*
// onLoad() of VEHICLES SEARCH PAGE on RenterApp
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

// onLoad() of BOOK VEHICLE PAGE on RenterApp
query {
  findVehicleById(vehicleId: "98srufsa") {
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
  bookTrip(userId: "98srufsa", vehicleId: "3456456") {
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
mutation {
  startTrip(tripId: "98srufsa") {
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
      deviceLogs
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

// onEndTrip() by RenterApp
mutation {
  endTrip(tripId: "98srufsa") {
    _id
    returnBy
    returnedAt
    bookedAt
    deviceLogs
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

// onGetTripStatus() by RenterApp
query {
  findTripById(tripId: "98srufsa") {
    _id
    returnBy
    returnedAt
    bookedAt
    deviceLogs
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
*/
