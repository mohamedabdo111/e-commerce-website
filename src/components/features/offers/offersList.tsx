import React from "react";
import { getOffersData } from "@/lib/api/getOffers";
import { Offer } from "@/types/api.types";
import Offersection from "./offersection";

const OffersList = async () => {
  const offers = await getOffersData({ page: 1, limit: 4 });
  console.log(offers);
  return (
    <>
      {offers.map((offer: Offer) => (
        <Offersection
          key={offer._id}
          offerName={offer.title}
          offerDescription={offer.description}
          offer={offer}
        />
      ))}
    </>
  );
};

export default OffersList;
