const getBaseApi = () => {
  return process.env.REACT_APP_BASE_API;
};

export default {
  getCategories: async () => {
    const res = await fetch(getBaseApi() + "/categories");
    const json = await res.json();
    return json;
  },

  getProducts: async (category, page, search) => {
    let fields = {};
    if (category) {
      fields.category = category;
    }
    if (page > 0) {
      fields.page = page;
    }
    if (search) {
      fields.search = search;
    }
    let queryString = new URLSearchParams(fields).toString();
    const res = await fetch(getBaseApi() + "/products?" + queryString);

    const json = await res.json();
    return json;
  },
};
