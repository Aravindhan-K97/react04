
function TopNav() {
  return (
    <>
      <nav className="navbar bg-body-tertiary topnav">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="images/Guvi-blog-logo.png" alt="Bootstrap" width="120" height="50" />
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="navimg d-flex justify-content-center">
          <img src="images/image.png" alt="Bootstrap" width="100%" height="30%" />
        </div>
      </div>
    </>
  );
}

export default TopNav;