"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
};
exports.getUsers = getUsers;
const getProducts = (req, res) => {
    res.json([{ id: 1, name: "Laptop" }, { id: 2, name: "Phone" }]);
};
exports.getProducts = getProducts;
