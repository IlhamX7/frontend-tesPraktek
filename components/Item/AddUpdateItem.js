import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";
function AddUpdateItem({ handleClose, show, handleShow, onRefresh, editData }) {
  const [namaBarang, setNamaBarang] = useState({
    value: "",
    errorMessage: "",
  });

  const [hargaBeli, setHargaBeli] = useState({
    value: "",
    errorMessage: "",
  });

  const [hargaJual, setHargaJual] = useState({
    value: "",
    errorMessage: "",
  });

  const [stok, setStok] = useState({
    value: "",
    errorMessage: "",
  });

  function onNamaBarangChange(e) {
    let errorMessage;
    let namaBarang = e.target.validity.valid ? e.target.value : namaBarang.value;

    if (namaBarang == "") {
      errorMessage = "nama barang kosong";
    } else {
      errorMessage = "";
    }
    setNamaBarang({
      ...namaBarang,
      value: namaBarang,
      errorMessage: errorMessage,
    });
  }

  function onHargaBeliChange(e) {
    setHargaBeli({ ...hargaBeli, value: e.target.value, errorMessage: "" });
  }

  function onHargaJualChange(e) {
    setHargaJual({ ...hargaJual, value: e.target.value, errorMessage: "" });
  }

  function onStokChange(e) {
    setStok({ ...stok, value: e.target.value, errorMessage: "" });
  }

  const postBarangItem = async () => {
    try {
      const response = await axios.post(`/api/item`, {
        namaBarang: namaBarang.value,
        hargaBeli: hargaBeli.value,
        hargaJual: hargaJual.value,
        stok: stok.value,
      });
      onRefresh("");
      handleClose();
      clear();
      Swal.fire(response.data.message);
    } catch (error) {
      console.log(error);
      Swal.fire("Oops...", error.response.data.message, "error");
    }
  };

  const putBarangItem = async () => {
    try {
      const response = await axios.put(`/api/item/${editData.data._id}`, {
        namaBarang: namaBarang.value,
        hargaBeli: hargaBeli.value,
        hargaJual: hargaJual.value,
        stok: stok.value,
      });
      onRefresh("");
      handleClose();
      clear();
      Swal.fire(response.data.message);
    } catch (error) {
      console.log(error);
      Swal.fire("Oops...", error.response.data.message, "error");
    }
  };

  function clear() {
    setNamaBarang({
      value: "",
      errorMessage: "",
    });

    setHargaBeli({
      value: "",
      errorMessage: "",
    });

    setHargaJual({
      value: "",
      errorMessage: "",
    });

    setStok({
      value: "",
      errorMessage: "",
    });
  }

  useEffect(() => {
    if (editData.isEdit) {
      // console.log(editData.data);

      setNamaBarang({
        value: editData.data.namaBarang,
        errorMessage: "",
      });

      setHargaBeli({
        value: editData.data.hargaBeli,
        errorMessage: "",
      });

      setHargaJual({
        value: editData.data.hargaJual,
        errorMessage: "",
      });

      setStok({
        value: editData.data.stok,
        errorMessage: "",
      });
    } else {
      clear();
    }
  }, [editData]);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {editData.isEdit ? "Edit Barang" : "Tambah Barang"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="form-group">
              <label htmlFor="namaBarang f12">Nama Barang</label>
              <input
                id="namaBarang"
                name="namaBarang"
                type="text"
                value={namaBarang.value}
                onChange={onNamaBarangChange}
                maxLength="50"
                className={[
                  "form-control mt-2 mb-2",
                  namaBarang.errorMessage === "" ? "" : "is-invalid",
                ].join(" ")}
                placeholder="nama barang"
              />
            </div>
            <div className="form-group">
              <label htmlFor="hargaBeli f12">Harga Beli</label>
              <input
                id="hargaBeli"
                name="hargaBeli"
                type="number"
                value={hargaBeli.value}
                onChange={onHargaBeliChange}
                maxLength="20"
                className={[
                  "form-control mt-2 mb-2",
                  hargaBeli.errorMessage === "" ? "" : "is-invalid",
                ].join(" ")}
                placeholder="harga beli"
              />
            </div>
            <div className="form-group">
              <label htmlFor="hargaJual f12">Harga Jual</label>
              <input
                id="hargaJual"
                name="hargaJual"
                type="number"
                value={hargaJual.value}
                onChange={onHargaJualChange}
                maxLength="20"
                className={[
                  "form-control mt-2 mb-2",
                  hargaJual.errorMessage === "" ? "" : "is-invalid",
                ].join(" ")}
                placeholder="harga jual"
              />
            </div>
            <div className="form-group">
              <label htmlFor="stok f12">Stok</label>
              <input
                id="stok"
                name="stok"
                type="number"
                value={stok.value}
                onChange={onStokChange}
                maxLength="20"
                className={[
                  "form-control mt-2 mb-2",
                  stok.errorMessage === "" ? "" : "is-invalid",
                ].join(" ")}
                placeholder="stok"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={editData.isEdit ? putBarangItem : postBarangItem}
          >
            Simpan Data
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddUpdateItem;
