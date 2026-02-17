import React from "react";

function Facts() {
  const facts = [
    "Wombats poop cubes.",
    "Honey from ancient tombs is edible.",
    "Octopuses have three hearts.",
    "Bananas are berries.",
    "Sloths can hold breath longer than dolphins.",
    "It rains diamonds on Saturn.",
    "Koalas have fingerprints.",
    "Lightning strikes the same place twice.",
    "A cloud can weigh over a million pounds.",
    "Scotland’s national animal is the unicorn."
  ];

  return (
    <div className="facts-container">
      <div className="facts-card">
        <h2>🎲 Random Facts</h2>
        <p className="sub-text">Some truths are stranger than fiction.</p>

        <div className="facts-grid-new">
          {facts.map((fact, index) => (
            <div key={index} className="fact-box-new">
              {fact}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facts;



