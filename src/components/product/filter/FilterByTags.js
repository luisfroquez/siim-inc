import { useState } from "react";
import { clickToActive } from "../../../utils/utils";

const FilterByTags = ({ filterByTags, setActive_ }) => {
  const tags = [
    "Sistemas de Protección Contra Incendio",
    "Detección de Incendio",
    "Aspiración",
    "Accesorios",
    "Canastillos",
    "Detectores de Flujo",
    "Extinción de Incendio",
    "Extintores",
    "Fittings", 
    "Flanges",
    "Cañerías",
    "Hierro Maleable",
    "Palancas",
    "Sirenas y Balizas",
    "Direccionable",
    "Fotoeléctricos",
    "PernosU",
    "Ranurado",
    "Straps",
    "Soportacion",
    "Tee Mecanicas",
    "Uniones",
    "Juntas de Dilatacion",
    "Manometros",
    "Mangueras",
    "Rosetas",
    "Storz",
    "Sprinklers",
    "Valvulas",
    "Electronica", 
    "Citofonia",
    "Control de Acceso",
    "Computación", 
    "Cables",
    "Adaptadores",
    "Ángulos",
    "Ferreteria",
    "Abrazaderas",
    "Cajas",
    "Cintas",
    "Candados",
    "EPP",
    "Espárragos",
    "Herramientas",
    "Líquidos/Químicos",
    "Mangueras",
    "Riel",
    "Soldadura",
    "Teflón"
  ];
  const [active, setActive] = useState([]);
  const activeFun = (value) => {
    filterByTags(value);
    setActive_();
    clickToActive(active, value, setActive);
  };
  return (
    <div className="shop-widget">
      <h3 className="shop-title">Tags</h3>
      <ul className="shop-tag">
        {tags &&
          tags.map((tag) => (
            <li key={tag}>
              <a
                href="#"
                className={`text-capitalize ${
                  active.includes(tag) ? "activeTag" : ""
                }`}
                onClick={(e) => {
                  activeFun(tag);
                  e.preventDefault();
                }}
              >
                {" "}
                {tag}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FilterByTags;
