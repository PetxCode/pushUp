const express = require("express");
const model = require("./model");
const router = express.Router();

exports.getAllEntry = async (req, res) => {
  const newData = await model.find();
  res.status(200).json({
    mgs: "Found Successfully",
    data: newData,
  });
};

exports.createdNewEntry = async (req, res) => {
  const newData = await model.create(req.body);
  res.status(200).json({
    mgs: "Created Successfully",
    data: newData,
  });
};

exports.getSingleEntry = async (req, res) => {
  const newData = await model.findById(req.params.id);
  res.status(200).json({
    mgs: "Executed Successfully",
    data: newData,
  });
};

exports.updateEntry = async (req, res) => {
  const newData = await model.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    mgs: "Updated Successfully",
    data: newData,
  });
};

exports.deleteEntry = async (req, res) => {
  const newData = await model.findByIdAndRemove();
  res.status(200).json({
    mgs: "Deleted Successfully",
  });
};
