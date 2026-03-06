// import "./App.css";
import Card from "./components/Card.tsx";

function App() {
  return (
    <>
      <div
        className="flex flex-col bg-[#fff] text-[#1d1d1f] w-screen gap-[12px]"
        id="section-collection"
      >
        <div className="bg-pink-50">
          <Card
            header={"iPhone17e"}
            subheader={"Feature Stacked. Value packed."}
            calloutTop={"Pre-order starting at 6:15 a.m. PT on 3.4"}
            calloutBot={"Available starting 3.11"}
            purchaseString={"View Pricing"}
            imageURL={
              "https://www.apple.com/v/home/cm/images/heroes/iphone-17e/hero_iphone_17e_announce__e1ip5db56t4y_largetall.jpg"
            }
          />
        </div>

        <div className="bg-linear-0 from-pink-50 to-sky-200">
          <Card
            header={"iPad air"}
            subheader={"Now supercharged by M4."}
            calloutTop={"Pre-order starting at 6:15 a.m. PT on 3.4"}
            calloutBot={"Available starting 3.11"}
            purchaseString={"View Pricing"}
            imageURL={""}
          />
        </div>
        <div className="bg-black text-white">
          <Card
            header={"iPhone 17 Pro"}
            subheader={"All out Pro."}
            purchaseString={"Buy"}
            calloutTop={""}
            imageURL={""}
          />
        </div>
      </div>
    </>
  );
}

export default App;
