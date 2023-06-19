const Newsletter = ({ container }) => {
  return (
    <section className="subscribe-area box-1052">
      <div
        className={`${
          container ? "container" : "subscribe-inner black-bg pt-70 pb-20"
        }`}
      >
        <div
          className={`${
            container
              ? "subscribe-inner black-bg pt-70 pb-20"
              : "container-fluid"
          }`}
        >
          <div className="row">
            <div className="col-xl-5">
              <div className="subscribe d-flex fix">
                <div className="subscribe-icon">
                  <img src="img/icon/subscribe.png" alt="" />
                </div>
                <div className="area-title white-color mb-50">
                  <h2>Newsletter</h2>
                  <p>Subsribe here for get every single updates</p>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="subscribe fix">
                <div className="subscribe-form mb-50">
                  <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Enter your email address" />
                    <button className="btn theme-btn" type="submit">
                      subscribe now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
