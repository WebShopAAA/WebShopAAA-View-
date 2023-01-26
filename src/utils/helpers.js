export const formatPrice = (number) => {
  return new Intl.NumberFormat("sv-SW", {
    style: "currency",
    currency: "SEK",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};

export const genId = (max, min) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const id = Math.floor(Math.random() * (max - min + 1)) + min;
  return id.toString();
};
