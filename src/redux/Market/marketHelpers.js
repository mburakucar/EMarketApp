import axios from "axios";

export const handleGetData = (data) => {
  return new Promise((resolve, reject) => {
    const params = {};

    if (data.page) {
      params.p = data.page;
    }
    if (data.limit) {
      params.l = data.limit;
    }
    if (data.search) {
      params.model = data.search;
    }
    if (data?.filters?.brand?.name) {
      params.brand = data?.filters?.brand?.name;
    }
    if (data?.filters?.model?.name) {
      params.model = data?.filters?.model?.name;
    }
    if (data?.filters?.sort?.details?.type) {
      params[data?.filters?.sort?.details?.type] =
        data?.filters?.sort?.details.key;
      params.order = data?.filters?.sort?.details.sort;
    }

    axios
      .get("https://5fc9346b2af77700165ae514.mockapi.io/products", {
        params: params,
      })
      .then((response) => {
        if (response.data) {
          resolve(response.data);
        } else {
          reject();
        }
      })
      .catch((err) => {
        if (err.toString().includes("404")) {
          resolve([]);
        } else {
          reject(err);
        }
      });
  });
};

export const handleGetFilters = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://5fc9346b2af77700165ae514.mockapi.io/products")
      .then((response) => {
        if (response.data) {
          resolve(response.data);
        } else {
          reject();
        }
      })
      .catch((err) => {
        if (err.toString().includes("404")) {
          resolve([]);
        } else {
          reject(err);
        }
      });
  });
};
