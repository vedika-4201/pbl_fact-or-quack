import React from "react";

function Facts() {
    const facts = [
        "Wombats poop cubes to stop it rolling away.",
        "Honey found in 3,000-year-old tombs is still edible.",
        "Octopuses have three hearts and blue blood.",
        "Cleopatra lived closer to the iPhone than the pyramids.",
        "The inventor of the Pringles can is buried in one.",
        "Bananas are technically berries, but strawberries aren't.",
        "Cowboys didn't actually wear cowboy hats in the 1800s.",
        "A cloud can weigh more than a million pounds.",
        "Scotland's national animal is the Unicorn.",
        "There are more trees on Earth than stars in the galaxy.",
        "Sloths can hold their breath longer than dolphins.",
        "It rains diamonds on Saturn and Jupiter.",
        "The heart of a shrimp is located in its head.",
        "A snail can sleep for three years.",
        "Koalas have unique fingerprints, just like humans.",
        "The total weight of all ants on Earth once equaled all humans.",
        "Venus is the only planet that rotates clockwise.",
        "Nutmeg is a hallucinogen if consumed in large doses.",
        "An ostrich's eye is bigger than its brain.",
        "Cows have 'best friends' and get stressed when separated."
      ];
  
    return (
      <div className="page-wrapper">
        <div className="page-card facts-bg" style={{ maxWidth: '900px' }}>
          <h2>🎲 Random Facts</h2>
          <div className="facts-grid">
            {facts.map((fact, index) => (
              <div key={index} className="fact-box">{fact}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Facts;


