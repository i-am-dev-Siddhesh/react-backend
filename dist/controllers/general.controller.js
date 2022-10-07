"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockData = exports.checkServerHealth = void 0;
const constants_1 = require("../utils/constants");
const errorResponse_1 = require("../utils/errorResponse");
const MOCK_DATA_json_1 = __importDefault(require("../MOCK_DATA.json"));
// @desc    Check Server Health
// @route   GET /v1/
// @access  Public
const checkServerHealth = (_req, res) => {
    try {
        return res
            .status(200)
            .json({ status: true, message: constants_1.SERVER_RUNNING_MESSAGE });
    }
    catch (error) {
        return res.status(500).json((0, errorResponse_1.generalError)(error));
    }
};
exports.checkServerHealth = checkServerHealth;
// @desc    Get Data
// @route   GET /v1/mockdata
// @access  Public
const getMockData = (_req, res) => {
    try {
        return res.status(200).json({ status: true, data: MOCK_DATA_json_1.default });
    }
    catch (error) {
        return res.status(500).json((0, errorResponse_1.generalError)(error));
    }
};
exports.getMockData = getMockData;
