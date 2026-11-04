
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const PORT = 3000;

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Task = mongoose.model("Task", taskSchema);

// Get all tasks
app.get("/api/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Database error" });
    }
});

// Add a task
app.post("/api/tasks", async (req, res) => {
    try {
        const name = req.body.name;

        if (typeof name !== "string" || !name.trim()) {
            return res.status(400).json({
                message: "Task name is required"
            });
        }

        const task = await Task.create({
            name: name.trim()
        });

        res.status(201).json(task);

    } catch (error) {
        res.status(500).json({ message: "Unable to add task" });
    }
});

// Delete a task
app.delete("/api/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json({ message: "Task deleted" });

    } catch (error) {
        res.status(400).json({
            message: "Invalid task ID"
        });
    }
});

// Connect to MongoDB
async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully");

        app.listen(PORT, "0.0.0.0", () => {
            console.log("Backend running on port 3000");
        });

    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}

startServer();
