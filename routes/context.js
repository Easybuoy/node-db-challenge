const express = require("express");

const router = express.Router();

const Context = require("../models/context");
const { validateContext, validateContextId } = require("../middlewares");

/**
 * METHOD: GET
 * ROUTE: /api/contexts/
 * PURPOSE: Get all contexts
 */
router.get("/", async (req, res) => {
  try {
    let contexts = await Context.get();
    if (contexts.length > 0) {
      return res.json({ status: "success", data: contexts });
    }

    return res
      .status(404)
      .json({ status: "error", message: "Contexts not found" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "Error getting context(s)" });
  }
});

/**
 * METHOD: POST
 * ROUTE: /api/contexts
 * PURPOSE: Create new context
 */
router.post("/", validateContext, async (req, res) => {
  try {
    const { name } = req.body;

    const newContext = await Context.insert({
      name
    });
    if (newContext) {
      return res
        .status(201)
        .json({ status: "success", message: "Context Created Successfully" });
    }

    return res.status(500).json({
      status: "error",
      message: "Error creating context "
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error creating context"
    });
  }
});

/**
 * METHOD: GET
 * ROUTE: /api/contexts/:id/
 * PURPOSE: Get single context
 */
router.get("/:id", validateContextId, async (req, res) => {
  try {

    return res.json({
      status: "success",
      message: "Context detail gotten successfully",
      data: req.context
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "Error getting context" });
  }
});

/**
 * METHOD: DELETE
 * ROUTE: /api/contexts/:id
 * PURPOSE: Delete a context
 */
router.delete("/:id", validateContextId, async (req, res) => {
  try {
    const deletedContext = await Context.remove(req.context.id);

    if (deletedContext === 1) {
      return res.json({
        status: "success",
        message: "Context deleted successfully"
      });
    }
    return res
      .status(500)
      .json({ status: "error", message: "Error deleting context" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "Error deleting action" });
  }
});

/**
 * METHOD: PUT
 * ROUTE: /api/contexts/:id
 * PURPOSE: Update a context
 */
router.put("/:id", validateContextId, async (req, res) => {
  try {
    const { name } = req.body;

    const updatedContext = await Context.update(req.context.id, {
        name
    });

    if (updatedContext) {
      return res.json({
        status: "success",
        message: "Context updated successfully"
      });
    }
    return res
      .status(500)
      .json({ status: "error", message: "Error updating context" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "Error updating context" });
  }
});

module.exports = router;
