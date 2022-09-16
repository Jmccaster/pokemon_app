const React = require("react");

class Show extends React.Component {
  render() {
    const myStyle = {
      color: "#ffffff",
      backgroundColor: "#000000",
    };
    const poke = this.props.mon;
    return (
      <div>
        <h1>Gotta Catch 'Em All!</h1>
        <h2> {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h2>
        <img src={poke.img + ".jpg"} alt="Picture of Pokemon" />
      </div>
    );
  }
}

module.exports = Show;
