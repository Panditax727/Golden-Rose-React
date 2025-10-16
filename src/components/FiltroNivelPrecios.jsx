import React, { useState } from "react";

function FiltroNivelPrecios() {
  const [selected, setSelected] = useState("Todos");

  const tiers = [
    {
      name: "Todos",
      img: null,
    },
    {
      name: "Edición selecta",
      img: "https://c-valorant-api.op.gg/Assets/ContentTiers/12683D76-48D7-84A3-4E09-6985794F0445.svg",
    },
    {
      name: "Edición de lujo",
      img: "https://c-valorant-api.op.gg/Assets/ContentTiers/0CEBB8BE-46D7-C12A-D306-E9907BFC5A25.svg",
    },
    {
      name: "Edición prémium",
      img: "https://c-valorant-api.op.gg/Assets/ContentTiers/60BCA009-4182-7998-DEE7-B8A2558DC369.svg",
    },
    {
      name: "Edición exclusiva",
      img: "https://c-valorant-api.op.gg/Assets/ContentTiers/E046854E-406C-37F4-6607-19A9BA8426FC.svg",
    },
    {
      name: "Edición ultra",
      img: "https://c-valorant-api.op.gg/Assets/ContentTiers/411E4A55-4E59-7757-41F0-86A53F101BB5.svg",
    },
  ];

  return (
    <div className="flex items-center border-darkpurple-900 bg-darkpurple-800 px-3 py-2 text-darkpurple-300 rounded-b border-0">
      {/* Texto del filtro */}
      <div className="min-w-[120px] font-medium">Nivel de precio</div>

      {/* Lista de botones */}
      <div className="flex flex-wrap gap-2">
        {tiers.map((tier) => (
          <span
            key={tier.name}
            onClick={() => setSelected(tier.name)}
            className={`flex cursor-pointer items-center gap-1 rounded-full px-3 py-1 text-xs transition ${
              selected === tier.name
                ? "bg-main-500 font-bold text-gray-0"
                : "bg-darkpurple-900 hover:bg-darkpurple-700"
            }`}
          >
            {tier.img && (
              <img
                alt={tier.name}
                loading="lazy"
                width="20"
                height="20"
                src={tier.img}
                className="size-5"
              />
            )}
            {tier.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default FiltroNivelPrecios;
