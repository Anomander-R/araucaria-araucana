import "./fourcardschallenge.scss";
import "../simplecard/SimpleCard";
import "../headerbar/HeaderBar";
import HeaderBar from "../headerbar/HeaderBar";
import SimpleCard from "../simplecard/SimpleCard";

const FourCardsChallenge = () => {
  const cards = [
    {
      title: "Supervisor",
      bodyText: "Monitors activity to identify project roadblocks",
      imgUrl: "/icon_supervisor.svg",
      color: "green",
    },
    {
      title: "Team Builder",
      bodyText:
        "Scans our talent network to create the optimal team for your project",
      imgUrl: "/icon_team_builder.svg",
      color: "red",
    },
    {
      title: "Karma",
      bodyText: "Regularly evaluates our talent to ensure quality",
      imgUrl: "/icon_karma.svg",
      color: "orange",
    },
    {
      title: "Calculator",
      bodyText:
        "Uses data from past projects to provide better delivery estimates",
      imgUrl: "/icon_calculator.svg",
      color: "blue",
    },
  ];
  return (
    <>
      <HeaderBar />
      <main>
        <div className="wrapper">
          <div className="wrapper__layout">
            <div className="col">
              <SimpleCard card={cards[0]} />
            </div>
            <div className="col">
              <SimpleCard card={cards[1]} />
              <SimpleCard card={cards[2]} />
            </div>
            <div className="col">
              <SimpleCard card={cards[3]} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FourCardsChallenge;
