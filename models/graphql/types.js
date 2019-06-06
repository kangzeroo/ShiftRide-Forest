// vehicles(lat: Float, lng: Float, startDate: Date, endDate: Date): [Vehicle!]!

module.exports.typeDefs = `
    scalar Date

    type Query {
      findUserById(userId: String): User
      findUsers(lat: Float, lng: Float, radius: Float): [User!]!
      findVehicleById(vehicleId: String): Vehicle
      findVehicles(lat: Float, lng: Float, radius: Float, startDate: Date, endDate: Date): [Vehicle!]!
      findTripById(tripId: String): Trip,
      findTrips(startDate: Date, endDate: Date, lat: Float, lng: Float, radius: Float): [Trip!]!
      getFleet(userId: String): [Vehicle!]!
      getFleetBookings(vehicleIds: [String], startDate: Date, endDate: Date): [Trip!]!
    }

    type Mutation {
      startTrip(userId: String, vehicleId: String): Trip
      endTrip(userId: String, tripId: String): Trip
      updateVehicle(vehicleId: String): Vehicle
    }

    schema {
      query: Query
      mutation: Mutation
    }

    type User {
      _id: String
      userVehicles: [Vehicle!]!
      userTrips: [Trip!]!
      aliasName: String,
      licenseFirstName: String,
      licenseLastName: String,
      licenseNumber: String,
      licenseProvince: String,
      licenseCountry: String,
      licensePostalCode: String,
      licenseBirth: Date,
      licenseExpiry: Date,
      licenseDateOfLastVerification: Date,
      status: String,
      email: String,
      phoneNumber: String,
      profilePicture: String,
      credit: Int,
      canBook: Boolean,
      location: [Float!]!
    }

    type Vehicle {
      _id: String
      alias: String
      vehicleTrips: [Trip!]!
      owner: User,
      licensePlate: String,
      make: String,
      model: String,
      color: String,
      year: Int,
      vin: String,
      active: Boolean,
      verified: Boolean,
      costMultiple: Float,
      gasMultiple: Float,
      hasGasCard: Boolean,
      location: [Float!]!,
      parkingDescription: String,
      fullAddress: String,
      bodyType: String,
      transmission: String,
      seatCount: Float,
      gasType: String,
      petsAllowed: Boolean,
      smokingAllowed: Boolean,
      features: [String!]!,
      description: String,
      photos: [String!]!,
      specialInstructions: String,
      lockboxCode: String,
      lockboxLocation: String,
      lockboxVideoUrl: String
    }

    type Trip {
      _id: String
      deviceLogs: [String!]!
      userId: String,
      vehicle: Vehicle,
      paymentCardId: String,
      promotionId: String,
      hadIssues: String,
      notes: String,
      paymentPaused: Boolean,
      paymentFailed: Boolean,
      paidAt: Date,
      voidPayment: Boolean,
      returnBy: Date,
      bookedAt: Date,
      returnedAt: Date,
      bookedAtLocation: String,
      userNotes: String,
      bookedVehicleLocation: [Float!]!
    }


`;
