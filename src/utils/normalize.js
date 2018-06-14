export const normalizeCountries = items =>
  items.map(item => ({
    value: item.name,
    key: item.alpha3Code,
    code: item.alpha2Code,
    text: item.name,
  }));

export const normalizeCity = item => {
  if (item.places.length) {
    return {
      city: item.places[0]['place name'],
      province: item.places[0].state,
    };
  } else {
    return null;
  }
};
