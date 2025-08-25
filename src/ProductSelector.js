// src/ProductSelector.js

import React from "react";

function ProductSelector({ products, currentSelection, onSelectProduct, onChangeGrams, usedLetters }) {
  const handleCheckboxChange = (letter, product, checked) => {
    onSelectProduct(letter, product, checked);
  };

  const handleGramsChange = (letter, productName, grams) => {
    onChangeGrams(letter, productName, grams);
  };

  return (
    <div className="space-y-6">
      {Object.entries(products).map(([letter, items]) => {
        const isUsed = usedLetters.has(letter);

        return (
          <div key={letter} className={`font-semibold mb-2 product-list ${isUsed ? "selected-letter" : "active-letter"}`}>
            <h3 className={`font-semibold mb-2 ${isUsed ? "text-gray-400" : "text-black"}`}>
              {letter}
            </h3>
            <ul className="space-y-1">
              {items.map((item) => {
                const selectedProducts = currentSelection[letter] || [];
                const selectedProduct = selectedProducts.find(p => p.name === item.name);
                const checked = Boolean(selectedProduct);
                const isDisabled = isUsed;

                return (
                  <li
                    key={item.name}
                    className={`p-2 border rounded flex items-center justify-between ${
                      isDisabled ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-white cursor-pointer"
                    }`}
                  >
                    <label className={`flex-1 ${isDisabled ? "text-gray-400" : ""} ${checked ? "input-checked" : ""}`}>
                      <input
                        hidden
                        type="checkbox"
                        disabled={isDisabled}
                        checked={checked}
                        onChange={e => handleCheckboxChange(letter, item, e.target.checked)}
                      />
                      <span className="ml-2">{item.name}</span>
                      <span className="text-gray-500">(макс {item.maxGrams})г</span>
                    </label>
                    <span className="flex items-center space-x-2">
                      <input
                        type="number"
                        min="0"
                        max={item.maxGrams}
                        value={selectedProduct?.grams || item.maxGrams}
                        onChange={e => handleGramsChange(letter, item.name, Number(e.target.value))}
                        disabled={!checked || isDisabled}
                        className="w-20 border rounded px-2 py-1"
                      />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ProductSelector;
