import React from "react";
import PricingItem from "./PricingItem/PricingItem";

const contents = [
  {
    header: "starter",
    price: "$25",
    domains: "1",
    cpu: "0.5GHz",
    ram: "1GB",
    bandwidth: "50GB",
    space: "50GB"
  },
  {
    header: "basic",
    price: "$34",
    domains: "2",
    cpu: "1GHz",
    ram: "4GB",
    bandwidth: "100GB",
    space: "100GB"
  },
  {
    header: "pro",
    price: "$45",
    domains: "15",
    cpu: "1.5GHz",
    ram: "10GB",
    bandwidth: "500GB",
    space: "500GB"
  },
  {
    header: "super",
    price: "$99",
    domains: "50 ",
    cpu: "5GHz",
    ram: "30GB",
    bandwidth: "1TB",
    space: "1TB"
  }
];

const Pricing = () => {
  return (
    <div className="pricing">
      {contents.map((item, i) => (
        <PricingItem key={i} content={item} />
      ))}
    </div>
  );
};

export default Pricing;
