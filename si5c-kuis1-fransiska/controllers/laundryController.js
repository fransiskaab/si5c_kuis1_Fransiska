const laundryModel = require("../models/laundryModel");

const getAll = (req, res) => {
    const data = laundryModel.getAll();

    res.json(data);
};

const getById = (req, res) => {
    const laundry = laundryModel.getById(req.params.id);

    if (!laundry) {
        return res.status(404).json({
            message: "Data laundry tidak ditemukan"
        });
    }

    res.json(laundry);
};

const create = (req, res) => {
    const {
        namaPelanggan,
        jenisLayanan,
        berat,
        totalHarga
    } = req.body;

    if (!namaPelanggan || !jenisLayanan || !berat || !totalHarga) {
        return res.status(400).json({
            message: "Data laundry belum lengkap"
        });
    }

    const data = laundryModel.create({
        namaPelanggan,
        jenisLayanan,
        berat,
        totalHarga
    });

    res.status(201).json(data);
};

const update = (req, res) => {
    const {
        namaPelanggan,
        jenisLayanan,
        berat,
        totalHarga
    } = req.body;

    if (!namaPelanggan || !jenisLayanan || !berat || !totalHarga) {
        return res.status(400).json({
            message: "Data laundry belum lengkap"
        });
    }

    const data = laundryModel.update(
        req.params.id,
        {
            namaPelanggan,
            jenisLayanan,
            berat,
            totalHarga
        }
    );

    if (!data) {
        return res.status(404).json({
            message: "Data laundry tidak ditemukan"
        });
    }

    res.json(data);
};

const remove = (req, res) => {
    const data = laundryModel.remove(req.params.id);

    if (!data) {
        return res.status(404).json({
            message: "Data laundry tidak ditemukan"
        });
    }

    res.json({
        message: "Data laundry berhasil dihapus",
        data: data
    });
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};