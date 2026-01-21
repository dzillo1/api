import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// In-memory data store
let components = [
  { id: 1, name: "Button", usageCount: 120 },
  { id: 2, name: "Modal", usageCount: 45 },
  { id: 3, name: "Dropdown", usageCount: 78 }
];

// --------------------
// GET all components
// --------------------
app.get("/components", (req, res) => {
  res.json(components);
});

// --------------------
// POST create new component
// Place this directly BELOW the GET /components route
// --------------------
app.post("/components", (req, res) => {
  const newComponent = {
    id: Date.now(),
    name: req.body.name,
    usageCount: req.body.usageCount
  };

  components.push(newComponent);

// 201 = "Created" status code
  res.status(201).json(newComponent);
});

// --------------------
// PUT update a component
// --------------------
app.put("/components/:id", (req, res) => {
  const id = Number(req.params.id); // convert URL param to number
  const component = components.find(c => c.id === id);

  if (!component) {
    return res.status(404).json({ error: "Component not found" });
  }

  // Update fields if provided
  if (req.body.name !== undefined) component.name = req.body.name;
  if (req.body.usageCount !== undefined) component.usageCount = req.body.usageCount;

  res.json(component);
});

// --------------------
// Start the server
// --------------------
app.listen(3000, () => {
  console.log("API running on port 3000");
});

// --------------------
// DELETE a component
// --------------------
app.delete("/components/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = components.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Component not found" });
  }

  const deleted = components.splice(index, 1)[0]; // remove from array

  res.json(deleted);
});
