const React = require("react");

class Index extends React.Component {
  render() {
    const myStyle = {
      color: "#ffffff",
      backgroundColor: "#000000",
    };
    const { pokemon } = this.props;
    return (
      <div>
        <ul>
          {pokemon.map((mon, i) => {
            return (
              <li>{mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
