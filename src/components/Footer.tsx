import React from "react";

async function getLocation() {
  const result = await fetch("http://ip-api.com/json/")

  if(!result.ok) {
    throw new Error("Failed to fetch data")
  }
  return result.json()
}

async function Footer() {
  const location = await getLocation()
  return (
    <footer className="absolute w-full bottom-0 text-sm bg-[#f2f2f2] text-gray-500">
      <div className="border-b px-8 py-3">
        {`${location.city}, ${location.country}`}
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How Search Works</li>
        </ul>

        <ul className="flex items-center space-x-6">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Settings</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
