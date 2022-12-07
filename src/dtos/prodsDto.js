const asDtoObj = (data) => {
  return {
    title: data.title,
    price: data.price,
    thumbnail: data.thumbnail,
  };
};

export function asDto(data) {
  if (Array.isArray(data)) return data.map((p) => asDtoObj(p));
  else return asDtoObj(data);
}
