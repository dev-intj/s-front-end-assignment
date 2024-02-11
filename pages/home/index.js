import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <div
        className="jumbotron p-3 p-md-5 text-white  bg-dark position-relative"
        style={{
          height: "100vh",
        }}
      >
        <Image
          src="/assets/fullSizeHero.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Picture of the author"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10,
            width: "100%",
            height: "100%",
            background:
              " linear-gradient(90deg, rgba(255,255,255,0.7917542016806722) 0%, rgba(255,255,255,0.500437675070028) 17%, rgba(0,212,255,0) 50%)",
          }}
        ></div>
        <div className="position-absolute right-4 bg-white bg-opacity-75 bottom-0 end-0 text-black">
          <div className="col-md-6 px-0">
            <div>SEASON 2022</div>
            <h1 className="">Επικοινώνησε μαζί μας</h1>
            <button className="">Συμπλήρωσε τη φόρμα {`->`}</button>
          </div>
        </div>
      </div>
      <div className="jumbotron text-black bg-white" style={{ height: "80vh" }}>
        <div className="container" style={{ maxWidth: "100vw" }}>
          <div className="row">
            <div className="col">
              <h1>gallery</h1>
              <div className="row">
                <div className="col">1 gallery</div>
                <div className="col">2 gallery</div>
              </div>
            </div>
            <div className="col">
              <Image width={800} height={800} src="/assets/middle.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron text-white bg-black" style={{ height: "80vh" }}>
        <Image
          src="/assets/leftHalfSize.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-50 h-100 position-static"
          alt="Picture of the author"
        />
        <Image
          src="/assets/rightHalfSize.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-50 h-100 position-static"
          alt="Picture of the author"
        />
      </div>
    </>
  );
};

export default HomePage;
