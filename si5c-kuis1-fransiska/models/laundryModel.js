let laundry = [
    {
        id: 1,
        namaPelanggan: "Fransiska",
        jenisLayanan: "Cuci Kering",
        berat: 3,
        totalHarga: 21000
    },
    {
        id: 2,
        namaPelanggan: "Cika",
        jenisLayanan: "Cuci Setrika",
        berat: 4,
        totalHarga: 32000
    },
    {
        id: 3,
        namaPelanggan: "Andi",
        jenisLayanan: "Cuci Kering",
        berat: 2,
        totalHarga: 14000
    }
];

const getAll = () => {
    return laundry;
};

const getById = (id) => {
    return laundry.find(item => item.id === Number(id));
};

const create = (data) => {
    const newLaundry = {
        id: laundry.length > 0
            ? laundry[laundry.length - 1].id + 1
            : 1,
        namaPelanggan: data.namaPelanggan,
        jenisLayanan: data.jenisLayanan,
        berat: Number(data.berat),
        totalHarga: Number(data.totalHarga)
    };

    laundry.push(newLaundry);

    return newLaundry;
};

const update = (id, data) => {
    const index = laundry.findIndex(
        item => item.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    laundry[index] = {
        id: Number(id),
        namaPelanggan: data.namaPelanggan,
        jenisLayanan: data.jenisLayanan,
        berat: Number(data.berat),
        totalHarga: Number(data.totalHarga)
    };

    return laundry[index];
};

const remove = (id) => {
    const index = laundry.findIndex(
        item => item.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    return laundry.splice(index, 1)[0];
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};