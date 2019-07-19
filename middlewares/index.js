const Project = require("../models/project");
const Action = require("../models/action");

validateAction = (req, res, next) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({ message: "missing post data" });
  }

  if (!body.description) {
    return res
      .status(400)
      .json({ message: "missing required description field" });
  }

  if (!body.notes) {
    return res.status(400).json({ message: "missing required notes field" });
  }

  next();
};

validateProjectId = async (req, res, next) => {
  const { id } = req.params;

  const project = await Project.getById(id);

  if (!project) {
    return res.status(400).json({ message: "invalid project id" });
  }

  req.project = project;
  next();
};

const validateActionId = async (req, res, next) => {
  const { id } = req.params;

  const action = await Action.getById(id);

  if (!action) {
    return res.status(400).json({ message: "invalid action id" });
  }

  req.action = action;

  next();
};

validateProject = (req, res, next) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({ message: "missing user data" });
  }

  if (!body.name) {
    return res.status(400).json({ message: "missing required name field" });
  }

  if (!body.description) {
    return res
      .status(400)
      .json({ message: "missing required description field" });
  }

  next();
};

setBoolean = data => {
  if (data.length === undefined) {
    if (data.completed === 0) {
      data.completed = false;
    } else {
      data.completed = true;
    }
    return data;
  }

  if (data.length > 0) {
    const newData = data.map(singleData => {
      if (singleData.completed === 0) {
        singleData.completed = false;
      } else {
        singleData.completed = true;
      }
      return singleData;
    });
    return newData;
  } else {
    return data;
  }
  // console.log(typeof object);
  console.log(object.length);
};

module.exports = {
  validateAction,
  validateProject,
  validateProjectId,
  validateActionId,
  setBoolean
};
