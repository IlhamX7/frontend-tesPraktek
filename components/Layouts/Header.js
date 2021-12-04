import Head from "next/head";

const Header = (props) => {
  return (
    <>
      <Head>
        <title>CRUD</title>
      </Head>
      <div className="row">
        <div className="col-12 d-flex justify-content-center text-center">
          <p className="mt-5 h2"> DATA BARANG</p>
        </div>
        <div className="col-12 d-flex justify-content-center text-center">
          <p className="mt-3 h2 f16"> Soal Tes Praktek React JS Programmer</p>
        </div>
      </div>
    </>
  );
};

export default Header;
