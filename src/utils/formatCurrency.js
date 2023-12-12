export const formatCurrency = (val) => {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return USDollar.format(val);
};
