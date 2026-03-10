function NavBar() {
  return (
    <div className="top-0 left-0 fixed w-full min-w-[320px] h-[48px] max-h-[44px] font-[17px]/[1.4705882353] m-0 font-[400] -tracking-[0.022em] flex justify-center items-center z-[9999] bg-white">
      <div className="relative w-full max-w-[1024px] h-auto pt-0 pb-0 my-auto">
        <ul className="w-full h-[44px] flex flex-row justify-between items-center -my-[8px] p-0 text-black">
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>Vision</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
