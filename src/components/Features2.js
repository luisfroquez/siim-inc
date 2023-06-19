const Features2 = ({ features }) => {
  return (
    <section className="features-area box-90">
      <div className="container">
        <div className="theme-soft-bg fix pt-100 pb-50">
          <div className="row">
            <div className="col-xl-12">
              <div className="area-title text-center mb-50">
                <h2>Special Features</h2>
                <p>Get special services from our shop.</p>
              </div>
            </div>
          </div>
          <div
            className="service-bg"
            data-background="img/bg/servie-pattern.png"
            style={{ backgroundImage: 'url("img/bg/servie-pattern.png")' }}
          >
            <div className="row">
              {features &&
                features.map((feature, i) => (
                  <div
                    className={`col-xl-4  col-lg-4 col-md-6 ${
                      i === 3 ? "offset-xl-2" : ""
                    } ${i === 4 ? "d-md-none d-lg-none" : ""}`}
                    key={i}
                  >
                    <div className="single-seatures mb-50  text-center">
                      <i className={feature.icon} />
                      <span>{feature.text}</span>
                      <h3>{feature.title}</h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
