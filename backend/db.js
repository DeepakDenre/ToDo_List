var mon = require("mongoose");

class DB {
  constructor() {
    this.userSchema = new mon.Schema({
      username: String,
      email: String,
      pass: String,
    });

    this.UserModel = mon.model("user", this.userSchema);
  }

  async connect() {
    mon
      .connect(process.env.DB_URI)
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
      });
  }

  async insertUser(userData) {
    console.log(
      await this.fetchUsers(userData.username)
        .then((data) => {
          if (!data) {
            try {
              const user = new this.UserModel(userData);
              return user
                .save()
                .then(() => console.log("user saved"))
                .catch((err) => console.error("Error:", err));
            } catch (err) {
              console.error("Error saving user:", err);
            }
          } else {
            console.log("user exists");
          }
        })
        .catch((err) => {
          console.error(err);
        })
    );
  }

  fetchAllUsers() {
    return this.UserModel.find();
  }

  fetchUsers(usernameData) {
    return this.UserModel.findOne({
      username: usernameData,
    });
  }

  close() {
    mon.connection
      .on("error", (err) => {
        console.error("Error:", err);
      })
      .on("disconnected", () => {
        console.log("Disconnected from MongoDB");
      });
  }
}

module.exports = new DB();
