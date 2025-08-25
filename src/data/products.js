const products = {
  а: [
    {
      name: "Бобові", maxGrams: 33, letter: "а"
    },
    {
      name: "Картопля", maxGrams: 110, letter: "а"
    },
    {
      name: "Кукурудза свіжа", maxGrams: 110, letter: "а"
    },
    {
      name: "Рис (не шліфований)", maxGrams: 33, letter: "а"
    },
    {
      name: "Будь-яка крупа", maxGrams: 33, letter: "а"
    },
    {
      name: "Цільнозернове борошно", maxGrams: 33, letter: "а"
    },
    {
      name: "Хлібці", maxGrams: 47, letter: "а"
    },
    {
      name: "Цільнозерновий хліб", maxGrams: 52, letter: "а"
    },
    {
      name: "Макарони твердих сортів", maxGrams: 33, letter: "а"
    },
    {
      name: "Лаваш", maxGrams: 47, letter: "а"
    },
  ],

  б: [
    {
      name: "Сир кисломолочний нежирний", fat: "0.2%", maxGrams: 80, letter: "б"
    },
    {
      name: "Сири м‘які, тверді, плавлені", maxGrams: 17, letter: "б"
    },
    {
      name: "Сметана", fat: "15%", maxGrams: 35, letter: "б"
    },
    {
      name: "Кефір", fat: "1%", maxGrams: 135, letter: "б"
    },
    {
      name: "Несолодкий йогурт", fat: "1%", maxGrams: 125, letter: "б"
    },
    {
      name: "Молоко", fat: "1%", maxGrams: 140, letter: "б"
    },
  ],

  в: [
    {
      name: "Будь-чого (солодощі, снеки, ковбаса тощо)", maxGrams: 95, letter: "в"
    },
    {
      name: "Фрукти", maxGrams: 950, letter: "в"
    },
    {
      name: "Банани", maxGrams: 570, letter: "в"
    },
  ],

  г: [
    {
      name: "Бобові", maxGrams: 33, letter: "г"
    },
    {
      name: "Картопля", maxGrams: 110, letter: "г"
    },
    {
      name: "Кукурудза свіжа", maxGrams: 110, letter: "г"
    },
    {
      name: "Рис (не шліфований)", maxGrams: 33, letter: "г"
    },
    {
      name: "Будь-яка крупа", maxGrams: 33, letter: "г"
    },
    {
      name: "Цільнозернове борошно", maxGrams: 33, letter: "г"
    },
    {
      name: "Хлібці", maxGrams: 47, letter: "г"
    },
    {
      name: "Цільнозерновий хліб", maxGrams: 52, letter: "г"
    },
    {
      name: "Макарони твердих сортів", maxGrams: 33, letter: "г"
    },
    {
      name: "Лаваш", maxGrams: 47, letter: "г"
    },
  ],

  д: [
    {
      name: "Телятина/Печінка", maxGrams: 120, letter: "д"
    },
    {
      name: "Куряче/Індиче філе", maxGrams: 140, letter: "д"
    },
    {
      name: "Риба до", fat: "5%", maxGrams: 170, letter: "д"
    },
    {
      name: "Риба від", fat: "5%", maxGrams: 110, letter: "д"
    },
    {
      name: "2 Яйця", letter: "д"
    },
    {
      name: "Морепродукти", maxGrams: 175, letter: "д"
    },
  ],

  е:[
    { name: "Овочі (квашені також і зелень)/гриби/",  maxGrams: 300, letter: "е" }
  ],

  є: [
    {
      name: "Олія (рекомендуємо лляну)", maxGrams: 8, letter: "є"
    },
    {
      name: "Майонез", maxGrams: 10, letter: "є"
    },
    {
      name: "Авокадо", maxGrams: 43, letter: "є"
    },
    {
      name: "Оливки", maxGrams: 57, letter: "є"
    },
    {
      name: "Гірчиця", maxGrams: 21, letter: "є"
    },
    {
      name: "Кетчуп", maxGrams: 32, letter: "є"
    },
    {
      name: "Масло", maxGrams: 10, letter: "є"
    },
    {
      name: "Сало", maxGrams: 8, letter: "є"
    },
  ],

  ж: [
    {
      name: "Сир кисломолочний нежирний", fat: "0.2%", maxGrams: 135, letter: "ж"
    },
    {
      name: "Сири м‘які, тверді, плавлені", maxGrams: 28, letter: "ж"
    },
    {
      name: "Сметана", fat: "15%", maxGrams: 55, letter: "ж"
    },
    {
      name: "Кефір", fat: "1%", maxGrams: 225, letter: "ж"
    },
    {
      name: "Несолодкий йогурт", fat: "1%", maxGrams: 220, letter: "ж"
    },
    {
      name: "Молоко", fat: "1%", maxGrams: 225, letter: "ж"
    },
  ],

  з: [
    {
      name: "Фрукти та ягоди", maxGrams: 270, letter: "з"
    },
    {
      name: "Банани, виноград, хурма", maxGrams: 160, letter: "з"
    },
  ],

  и: [
    {
      name: "Горіхи (рекомендуємо грецькі) або насіння", maxGrams: 8, letter: "и"
    },
  ],

  і: [
    {
      name: "Телятина/Печінка", maxGrams: 120, letter: "і"
    },
    {
      name: "Куряче/Індиче філе", maxGrams: 140, letter: "і"
    },
    {
      name: "Риба до", fat: "5%", maxGrams: 170, letter: "і"
    },
    {
      name: "Риба від", fat: "5%", maxGrams: 110, letter: "і"
    },
    {
      name: "2 Яйця", letter: "і"
    },
    {
      name: "Морепродукти", maxGrams: 175, letter: "і"
    },
  ],

  ї:[
    { name: "Овочі (квашені також і зелень)/гриби/",  maxGrams: 300, letter: "ї" }
  ],

  й: [
    {
      name: "Олія (рекомендуємо лляну)", maxGrams: 8, letter: "й"
    },
    {
      name: "Майонез", maxGrams: 10, letter: "й"
    },
    {
      name: "Авокадо", maxGrams: 43, letter: "й"
    },
    {
      name: "Оливки", maxGrams: 57, letter: "й"
    },
    {
      name: "Гірчиця", maxGrams: 21, letter: "й"
    },
    {
      name: "Кетчуп", maxGrams: 32, letter: "й"
    },
    {
      name: "Масло", maxGrams: 10, letter: "й"
    },
    {
      name: "Сало", maxGrams: 8, letter: "й"
    },
  ],
};

export default products;
