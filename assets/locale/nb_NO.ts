interface ILocale {
  items_per_page: string;
  jump_to: string;
  page: string;
  prev_page: string;
  next_page: string;
  prev_5: string;
  next_5: string;
  prev_3: string;
  next_3: string;
  page_size: string;
}

const locale: ILocale = {
  items_per_page: "/ side",
  jump_to: "Gå til side",
  page: "Side",
  prev_page: "Forrige side",
  next_page: "Neste side",
  prev_5: "5 forrige",
  next_5: "5 neste",
  prev_3: "3 forrige",
  next_3: "3 neste",
  page_size: "sidestørrelse",
};

export default locale;
