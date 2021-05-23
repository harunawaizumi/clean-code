// (c) Maximilian Schwarzmüller / Academind GmbH
// Created in 2020

let sqlDriver: any;
let mongoDbDriver: any;

// Acts as an adapter, connecting models to various database engines (SQL, MongoDB)
class Database {
  private dbEngine: any;

  loadDatabaseDriver(driver: string) {
    if (driver === 'sql') {
      // Connect to the SQL Driver if "driver" is set to SQL
      this.dbEngine = sqlDriver;
    } else {
      // Otherwise, connect to MongoDB
      this.dbEngine = mongoDbDriver;
    }
  }

  connect() {
    this.dbEngine.connect(); // This may fail and throw an error
  }

  insertData(data: any) {
    this.dbEngine.insert(data); // insert a user
  }

  findOne(id: string) {
    // Todo: Needs to be implemented
  }
}