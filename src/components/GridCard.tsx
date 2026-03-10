type cardType = {
  header: string;
  subheader: string;
  learnString?: string;
  purchaseString?: string;
  imageURL?: string;
  styleImageURL?: string;
};

function GridCard({
  header,
  subheader,
  learnString,
  purchaseString,
  imageURL,
  styleImageURL,
}: cardType) {
  // helper function
  function GetHeader() {
    if (styleImageURL) {
      return (
        <h3>
          <img
            className="m-auto mt-[55px] w-[22/25] max-w-[430px] h-[36px] bg-center bg-size-[299px_36px]"
            src={styleImageURL}
            alt="img of styled header"
          ></img>
        </h3>
      );
    } else {
      return (
        <h3 className="text-[40px]/[1.1] font-[600] -tracking-[0em] mt-[53px] w-[22/25] max-w-[430px] relative ml-auto mr-auto m-0 p-0">
          {header}
        </h3>
      );
    }
  }

  function GetPurchaseButton() {
    if (purchaseString) {
      return (
        <button
          className="!py-[8px] !m-0 !mt-[17px] !px-[15px] !text-[14px]/[1.42859] !font-[400] !-tracking-[.016em] !ml-[10px] bg-transparent text-[#0066cc] border-[#0066cc] border-solid border
            hover:bg-[#0071e3] hover:text-white"
        >
          {purchaseString}
        </button>
      );
    }
  }

  return (
    <>
      <div className="relative h-[580px] bg-[#fff] border-[#fff] pt-0 relative border-l-0 border-r-0 overflow-hidden">
        <div className="flex flex-col relative text-center display:block font-family-[Helvetica] z-4 grow-0">
          <GetHeader />
          <p className="text-[21px]/[1.19048] font-[400] tracking-[.011em] mt-[4px] w-[22/25] max-w-[430px] ml-auto mr-auto relative m-0 p-0">
            {subheader}
          </p>
          <div id="link buttons h-[657px]">
            <button className="!py-[8px] !m-0 !mt-[17px] !px-[15px] !text-[14px]/[1.42859] !font-[400] !-tracking-[.016em] bg-[#0071e3] relative text-white border-[1px] w-auto border border-none border-1">
              {learnString ? learnString : "Learn more"}
            </button>
            <GetPurchaseButton />
          </div>
        </div>

        <div className="">
          <img
            src={imageURL}
            alt="image of device"
            className="bg-no-repeat grow-1 w-[1262px] h-[580px] absolute max-w-none border-0 m-0 p-0 top-auto z-1 left-1/2 right-auto bottom-0 -translate-x-1/2"
          ></img>
        </div>
      </div>
    </>
  );
}

export default GridCard;
