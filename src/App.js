import React, { useState } from "react";

function AnagramGrouper() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  // Function to group anagrams
  function grAnagrams(arr) {
    const anagrams = {};
    arr.forEach((word) => {
      const sortedWord = word.toLowerCase().split("").sort().join("");
      if (!anagrams[sortedWord]) {
        anagrams[sortedWord] = [];
      }
      anagrams[sortedWord].push(word);
    });
    return Object.values(anagrams);
  }
  console.table(grAnagrams(["Silent", "bat", " dog", "god", "tensil", "tan"]));
  // Handler for input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Handler for grouping anagrams when user clicks the button
  const handleGroupAnagrams = () => {
    const words = input.split(",").map((word) => word.trim());
    const groupedAnagrams = grAnagrams(words);
    setResult(groupedAnagrams);
  };

  return (
    <div>
      <h1>Anagram Grouper</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter words separated by commas"
      />
      <button onClick={handleGroupAnagrams}>Group Anagrams</button>

      <div>
        {result.map((group, index) => (
          <div key={index}>
            <strong>Group {index + 1}:</strong> {group.join(", ")}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnagramGrouper;
