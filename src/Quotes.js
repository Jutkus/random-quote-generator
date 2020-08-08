import React from "react";

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      rand: 0,
    };
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/config/motivational-quotes.json"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          isLoaded: true,
          rand: Math.floor(Math.random() * 177),
        });
      });
  }
  GenerateRandNum() {
    this.setState({
      rand: Math.floor(Math.random() * 177),
    });
  }
  render() {
    return (
      <div id="quote-box">
        {!this.state.isLoaded ? (
          <ul>Loading</ul>
        ) : (
          <div>
            <ul id="text">
              {this.state.items.motivationalQuotes[this.state.rand].quote}
            </ul>
            <span id="author">
              {this.state.items.motivationalQuotes[this.state.rand].author}
            </span>
            <button id="new-quote" onClick={this.GenerateRandNum.bind(this)}>
              Click Me!
            </button>
            <a
              class="twitter-share-button"
              id="tweet-quote"
              target="_blank"
              rel="noopener noreferrer"
              href={
                "twitter.com/intent/tweet?text=" +
                this.state.items.motivationalQuotes[this.state.rand].quote +
                "%20" +
                this.state.items.motivationalQuotes[this.state.rand].author
              }
            >
              Tweet
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Quotes;
