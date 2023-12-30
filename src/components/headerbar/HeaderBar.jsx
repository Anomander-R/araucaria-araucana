import "./headerbar.scss";

const HeaderBar = () => {
  return (
    <header className="header">
      <div className="wrapper wrapper__narrow">
        <h1>
          Reliable, efficient delivery <br /> <span>Powered by Technology</span>
        </h1>
        <p className="header__text">Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful</p>
      </div>
    </header>
  );
};

export default HeaderBar;
