import Link from "next/link";
const Banner = ({ banner }) => {
  return (
    <section className="banner-area pt-90 box-90">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="banner-2 pos-relative mb-30">
              <Link href="/shop">
                <a>
                  <img src={banner && banner.one.img} alt="Banner image" />
                </a>
              </Link>

              <div className="banner-trend">
                <span>{banner && banner.one.subTitle}</span>
                <h2>
                  <Link href="/shop">
                    <a>
                      {banner && banner.one.title}
                    </a>
                  </Link>
                </h2>
                <div className="">
                  <Link href="/shop">
                    <a className="btn theme-btn">{banner && banner.one.link}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="banner-2 pos-relative mb-30">
              <Link href="/shop">
                <a>
                  <img src={banner && banner.two.img} alt="Banner" />
                </a>
              </Link>

              <div className="banner-look">
                <span>{banner && banner.two.subTitle}</span>
                <h2>
                <Link href="/shop">
                    <a>
                    {banner && banner.two.title}
                    </a>
                  </Link>
                </h2>
                {/* <p>{banner && banner.two.text}</p> */}
                <Link href="/shop">
                  <a className="btn theme-btn izq">{banner && banner.two.link}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
