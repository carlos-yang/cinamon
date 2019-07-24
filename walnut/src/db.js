export const menus = [
  {
    id: 0,
    name: '아메리카노',
    price: 2200,
    isSoldout: false
  },
  {
    id: 1,
    name: '더치라떼',
    price: 3500,
    isSoldout: false
  },
  {
    id: 2,
    name: '플랫화이트',
    price: 3000,
    isSoldout: false
  },
  {
    id: 3,
    name: '밀크티',
    price: 4000,
    isSoldout: false
  }
];

export const orders = [
  {
    id: 0,
    orderList: [
      {
        id: 1
      },
      {
        id: 2
      }
    ]
  }
];

export const getById = id => {
  const filteredMenu = menus.filter(menu => menu.id === id);
  return filteredMenu[0];
};
