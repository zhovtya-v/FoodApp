import React, { useState } from "react";
import products from "./data/products";
import ProductSelector from "./ProductSelector";
import './MealManager.css';

function MealManager() {
  const [selection, setSelection] = useState({});
  const [usedLetters, setUsedLetters] = useState(new Set());
  const [meals, setMeals] = useState([]);

  const [dayNumber, setDayNumber] = useState("");
  const [training, setTraining] = useState("");
  const [feeling, setFeeling] = useState("");
  const [steps, setSteps] = useState("");

  const handleSelectProduct = (letter, product, checked) => {
    setSelection((prev) => {
      const currentProducts = prev[letter] || [];
      if (checked) {
        if (!currentProducts.find((p) => p.name === product.name)) {
          return {
            ...prev,
            [letter]: [...currentProducts, { name: product.name, grams: product.maxGrams }],
          };
        }
        return prev;
      } else {
        const filtered = currentProducts.filter((p) => p.name !== product.name);
        if (filtered.length === 0) {
          const copy = { ...prev };
          delete copy[letter];
          return copy;
        }
        return { ...prev, [letter]: filtered };
      }
    });
  };

  const handleChangeGrams = (letter, productName, grams) => {
    setSelection((prev) => {
      const currentProducts = prev[letter] || [];
      const updatedProducts = currentProducts.map((p) =>
        p.name === productName ? { ...p, grams } : p
      );
      return { ...prev, [letter]: updatedProducts };
    });
  };

  const addMeal = () => {
    if (Object.keys(selection).length === 0) return;

    const newMeal = {
      products: Object.entries(selection).map(([letter, items]) => ({
        letter,
        items,
      })),
    };

    setMeals((prev) => [...prev, newMeal]);
    setUsedLetters((prev) => {
      const updated = new Set(prev);
      Object.keys(selection).forEach((letter) => updated.add(letter));
      return updated;
    });
    setSelection({});
  };

  const generateReport = () => {
    if (meals.length === 0) return "Немає доданих прийомів їжі.";

    let header = `День №${dayNumber}\n`;

    const mealsText = meals
      .map(
        (meal, idx) =>
          `Прийом їжі ${idx + 1}: ` +
          meal.products
            .map(
              (p) =>
                `${p.letter}: ${p.items
                  .map((item) => `${item.name} (${item.grams} г)`)
                  .join(", ")}`
            )
            .join("; ")
      )
      .join("\n");

    let footer = "";
    if (training) footer += `\nТренування: ${training}`;
    if (feeling) footer += `\nСамопочуття: ${feeling}`;
    if (steps) footer += `\nРухова активність: ${steps} кроків`;

    return header + mealsText + footer;
  };

  const sendToTelegram = () => {
    const report = generateReport();
    const token = "8492566530:AAEYn_qqQmGvkdfsfSuT9fm-stKHIlfLbQI";
    const chatId = "426384424";

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: report,
      }),
    }).then(() => {
      alert("Звіт надіслано в Telegram!");
      setMeals([]);
      setUsedLetters(new Set());
      setSelection({});
      setDayNumber(prev => Number(prev || 0) + 1);
      setTraining("");
      setFeeling("");
      setSteps("");
    });
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Обери продукти за літерами</h1>

      {/* Поле День № */}
      <div className="mb-4">
        <label className="font-semibold">День №: </label>
        <input
          type="number"
          value={dayNumber}
          onChange={(e) => setDayNumber(e.target.value)}
          className="border px-2 py-1 rounded w-20"
        />
      </div>

      {/* Поля додаткової інформації */}
      <div className="mb-4 space-y-2">
        <div>
          <label className="font-semibold">Тренування: </label>
          <input
            type="text"
            value={training}
            onChange={(e) => setTraining(e.target.value)}
            placeholder="Наприклад: 5 кіл по 400 м"
            className="border px-2 py-1 rounded w-full"
          />
        </div>
        <div>
          <label className="font-semibold">Самопочуття: </label>
          <input
            type="text"
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
            placeholder="Наприклад: добре"
            className="border px-2 py-1 rounded w-full"
          />
        </div>
        <div>
          <label className="font-semibold">Рухова активність (кроки): </label>
          <input
            type="number"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Наприклад: 12000"
            className="border px-2 py-1 rounded w-full"
          />
        </div>
      </div>

      <ProductSelector
        products={products}
        currentSelection={selection}
        onSelectProduct={handleSelectProduct}
        onChangeGrams={handleChangeGrams}
        usedLetters={usedLetters}
      />

      <button
        onClick={addMeal}
        disabled={Object.keys(selection).length === 0}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
      >
        Додати прийом їжі
      </button>

      <h2 className="mt-6 text-xl">Додані прийоми їжі:</h2>
      {meals.length === 0 && <p>Поки що немає доданих прийомів їжі.</p>}
      <ul className="mt-2 list-disc list-inside space-y-1">
        {meals.map((meal, idx) => (
          <li key={idx}>
            <b>Прийом їжі {idx + 1}:</b>{" "}
            {meal.products
              .map(
                (p) =>
                  `${p.letter}: ${p.items
                    .map((item) => `${item.name} (${item.grams} г)`)
                    .join(", ")}`
              )
              .join("; ")}
          </li>
        ))}
      </ul>

      <button
        onClick={sendToTelegram}
        disabled={meals.length === 0}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded disabled:bg-gray-400"
      >
        Відправити звіт в Telegram
      </button>
    </div>
  );
}

export default MealManager;
