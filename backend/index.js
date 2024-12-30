const db = require("./db");
const app = require('express')();
const PORT = process.env.PORT;

app.get("/api/users/findAll", async (req, res) => {
    try {
        await db.connect();
        const data = await db.fetchAllUsers();
        res.json(data);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Internal Server Error");
    } finally {
        await db.close();
    }
});

app.get("/api/users/find/:username", async (req, res) => {
    const { username } = req.params;
    try {
        await db.connect();
        const data = await db.fetchUsers(username);
        console.log(data);
        res.json(data);
    } catch(error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Internal Server Error");
    } finally {
        await db.close();
    }
});

app.post(
    "/api/users/insert/",
    async (req,res)=>{
        await db.connect();
        try{
            res.sendStatus(200);
            await db.insertUser(
                {
                    username:req.query.username,
                    email:req.query.email,
                    pass:req.query.pass
                }
            );
        }catch(err){
            res.sendStatus(500);
            console.error(err);
        }finally{
            db.close();
        }
    }
);

app.listen(
    PORT,
    (err)=>{
        if(err)throw err;
        console.log(`Backend Server Running at:\nhttp://localhost:${PORT}`);
    }
);