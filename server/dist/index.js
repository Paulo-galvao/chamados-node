import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("Hello from chamados server");
});
app.listen(3000, () => console.log("Server running on port 3000"));
//# sourceMappingURL=index.js.map