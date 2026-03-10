type cardType = {
  header: string;
  subheader: string;
  calloutTop: string;
  calloutBot?: string;
  purchaseString?: string;
  imageURL?: string;
  styleImageURL?: string;
};

function Card({
  header,
  subheader,
  calloutTop,
  calloutBot,
  purchaseString,
  imageURL,
  styleImageURL,
}: cardType) {
  // helper function
  function GetHeader() {
    if (styleImageURL) {
      return (
        <h2>
          <img
            className="m-auto mt-[5px] h-[45px] bg-center bg-size-[201px_45px]"
            src={styleImageURL}
            alt="img of styled header"
          ></img>
        </h2>
      );
    } else {
      return (
        <h2 className="text-[56px]/[1.07143] font-[600] -tracking-[.005em]">
          {header}
        </h2>
      );
    }
  }

  return (
    <>
      <div className="relative">
        <div className="h-[692px] pt-[55px] flex flex-col relative text-center display:block font-family-[Helvetica] z-4 pt-[55px] grow-0">
          <GetHeader />
          <p className="text-[28px]/[1.14286] font-[400] tracking-[.007em] mt-[6px]">
            {subheader}
          </p>
          <div className="text-[19px]/[1.21053] font-[400] tracking-[.012em] text-[#6e6e73] mt-[8px]">
            <div>{calloutTop}</div>
            <div>{calloutBot}</div>
          </div>
          <div>
            <button className="bg-[#0071e3] text-white border-0 border border-none">
              Learn more
            </button>
            <button
              className="ml-[13px] bg-transparent text-[#0066cc] border-[#0066cc] border-solid border
            hover:bg-[#0071e3] hover:text-white"
            >
              {purchaseString}
            </button>
          </div>
        </div>

        <img
          src={imageURL}
          alt="image of device"
          className="w-[3008px] h-[692px] max-w-none absolute m-0 p-0 top-0 z-1 left-1/2 overflow-visible -translate-x-1/2"
        ></img>
      </div>
    </>
  );
}

export default Card;
