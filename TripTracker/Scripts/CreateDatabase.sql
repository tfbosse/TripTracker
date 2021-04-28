CREATE TABLE Trips
(
  TripId INT IDENTITY(1,1),
  TripName VARCHAR(256) NOT NULL,
  PRIMARY KEY (TripId)
);

CREATE TABLE Vehicles
(
  VehicleId INT IDENTITY(1,1),
  VehicleYear INT NOT NULL,
  VehicleMake VARCHAR(64) NOT NULL,
  VehicleModel VARCHAR(128) NOT NULL,
  PRIMARY KEY (VehicleId)
);

CREATE TABLE Locations
(
  LocationId INT IDENTITY(1,1),
  LocationName VARCHAR(256),
  LocationCity VARCHAR(256) NOT NULL,
  LocationState CHAR(2) NOT NULL,
  PRIMARY KEY (LocationId)
);

CREATE TABLE Legs
(
  LegId INT IDENTITY(1,1),
  LegName VARCHAR(256),
  StartDate DATE NOT NULL,
  EndDate DATE NOT NULL,
  TripId INT NOT NULL,
  VehicleId INT NOT NULL,
  StartLocationId INT NOT NULL,
  EndLocationId INT NOT NULL,
  PRIMARY KEY (LegId),
  FOREIGN KEY (TripId) REFERENCES Trips(TripId),
  FOREIGN KEY (VehicleId) REFERENCES Vehicles(VehicleId),
  FOREIGN KEY (StartLocationId) REFERENCES Locations(LocationId),
  FOREIGN KEY (EndLocationId) REFERENCES Locations(LocationId)
);