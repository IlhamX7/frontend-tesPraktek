const Table = ({ data, onDelete, setField }) => {
  return (
    <div className="row mb-5">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-14">
        <div className="card-body border-white">
          <div className="table-responsive">
            <table className="table table-bordered table-hover mb-0 text-nowrap">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Barang</th>
                  <th>Harga Beli</th>
                  <th>Harga Jual</th>
                  <th>Stok</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <th>{item.namaBarang}</th>
                        <th>{item.hargaBeli}</th>
                        <th>{item.hargaJual}</th>
                        <th>{item.stok}</th>
                        <th>
                          <span>
                            <button
                              className="btn btn-warning"
                              onClick={(e) => setField(item)}
                            >
                              {" "}
                              Edit{" "}
                            </button>
                          </span>
                          <span style={{ paddingLeft: "2px" }}>
                            <button
                              className="btn btn-danger"
                              onClick={(e) => onDelete(e, item._id)}
                            >
                              {" "}
                              Delete{" "}
                            </button>
                          </span>
                        </th>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
