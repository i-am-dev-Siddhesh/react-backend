"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkApiKey = void 0;
const errorResponse_1 = require("../utils/errorResponse");
const checkApiKey = (req, res, next) => {
    var _a;
    try {
        const apiKey = process.env.API_KEY;
        if (!req.headers.apikey || ((_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.apikey) !== apiKey) {
            return res.status(403).json((0, errorResponse_1.forbiddenError)());
        }
        return next();
    }
    catch (error) {
        return res.status(500).json((0, errorResponse_1.generalError)(error));
    }
};
exports.checkApiKey = checkApiKey;
