import express from "express";
import { prisma } from "./lib/prisma.js";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    const requests = await prisma.request.findMany();
    res.send(requests);
})

app.post("/requests", async(req, res) => {
    
    const request = await prisma.request.create({
        data: {
            title: req.body.title,
            description: req.body.description,
            category_id: 1,
            status_id: 1
        }
    }) 
    res.status(201).send(request);
});

app.post("/categories", async(req, res) => {
    const {name} = req.body;
    const request = await prisma.category.create({
        data: {
            name: name
        }
    }) 
    res.status(201).send(request);
});

app.post("/status", async(req, res) => {
    const {name} = req.body;
    const request = await prisma.status.create({
        data: {
            name: name
        }
    }) 
    res.status(201).send(request);
});

app.listen(3000, () => console.log("Server running on port 3000"));