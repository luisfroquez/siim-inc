import Link from "next/link";
const DasktopHeader = ({ whiteMenu }) => {
  return (
    <div className={`main-menu text-center ${whiteMenu ? "menu-white" : ""}`}>
      <nav id="mobile-menu">
        <ul>
          <li>
            <Link legacyBehavior href="/homeSiim">
              <a>Inicio</a>
            </Link>
            
          </li>
          <li className="mega-menu">
            <Link legacyBehavior href="/shop/col-3">Distribuidora</Link>
           
          </li>
          
          <li>
            <Link legacyBehavior href="/about" onClick={(e) => e.preventDefault()}>
              Siim
            </Link>
          
          </li>
          <li>
            <Link legacyBehavior href="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DasktopHeader;
