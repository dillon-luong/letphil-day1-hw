// import "./App.css";
import Card from "./components/Card.tsx";
import GridCard from "./components/GridCard.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {
  return (
    <section className="bg-[#fff]">
      <NavBar />
      <div
        className="flex flex-col bg-[#fff] text-[#1d1d1f] w-screen gap-[12px] border-b-[12px] border-[#fff]"
        id="section-collection"
      >
        <div>
          <Card
            header={"iPhone 17e"}
            subheader={"Feature Stacked. Value packed."}
            calloutTop={"Pre-order starting at 6:15 a.m. PT on 3.4"}
            calloutBot={"Available starting 3.11"}
            purchaseString={"View Pricing"}
            imageURL="./assets/hero_iphone_17e_announce__e1ip5db56t4y_largetall.jpg"
          />
        </div>

        <div>
          <Card
            header={"iPad air"}
            subheader={"Now supercharged by M4."}
            calloutTop={"Pre-order starting at 6:15 a.m. PT on 3.4"}
            calloutBot={"Available starting 3.11"}
            purchaseString={"View Pricing"}
            imageURL="./assets/hero_ipad_air_m4_announce__ep6lc62by06e_largetall.jpg"
            styleImageURL="./assets/hero_logo_ipad_air__ejixj9pic0uq_large.png"
          />
        </div>
        <div className="text-white">
          <Card
            header={"iPhone 17 Pro"}
            subheader={"All out Pro."}
            purchaseString={"Buy"}
            calloutTop={""}
            imageURL="./assets/hero_iphone_17_pro__bknyzxfk2agi_largetall.jpg"
          />
        </div>
      </div>

      <div className="relative bg-[#fff] grid gap-[12px] grid-cols-2 left-[12px] w-(--grid-width) border-b-[12px] border-[#fff] text-[#1d1d1f]">
        <GridCard
          header="iPhone 17"
          subheader="Magichromatic."
          purchaseString="Buy"
          imageURL="./assets/promo_iphone_17__bhofuohbsu3m_large.jpg"
        />
        <GridCard
          header="AirPods Pro 3"
          subheader="Test, aid, and help protect your hearing this World Hearing Day."
          purchaseString="Buy"
          imageURL="./assets/promo_hearing_health__exa0jejake0y_large.jpg"
        />
        <GridCard
          header="Watch Series 11"
          subheader="The ultimate way to watch your health."
          purchaseString="Buy"
          imageURL="./assets/promo_apple_watch_series_11__b63hxviqvonm_large.jpg"
          styleImageURL="./assets/promo_logo_apple_watch_series_11__d9br21pxygya_large.png"
        />
        <div className="text-white">
          <GridCard
            header="iPad Pro"
            subheader="Advanced AI performance and game-changing capabilities."
            purchaseString="Buy"
            imageURL="./assets/promo_ipad_pro__c529dk533k4m_large.jpg"
          />
        </div>
        <GridCard
          header="Trade In"
          subheader="Get up to $195-$685 in credit when you trade in iPhone 13 or higher."
          learnString="Get your estimate"
          imageURL="./assets/promo_iphone_tradein__bugw15ka691e_large.jpg"
          styleImageURL="./assets/promo_logo_iphone_tradein__7y3gtai5az66_large.png"
        />
        <GridCard
          header="Card"
          subheader="Get up to 3% Daily Cash back with every purchase."
          purchaseString="Apply now"
          imageURL="./assets/promo_apple_card__5cm7draujpey_large.jpg"
          styleImageURL="./assets/logo__dcojfwkzna2q_large.png"
        />
      </div>
    </section>
  );
}

export default App;
