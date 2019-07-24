import { menus, getById } from './db';

const resolvers = {
  Query: {
    menus: () => menus,
    menu: (_, { id }) => getById(id)
  },
  Mutation: {
    createMenu: (_, { input }) => {
      let menuId = menus.length;
      input.map((menu, index) => {
        const menuIndex = menuId + index;
        const newMenu = {
          id: menuIndex,
          name: menu.name,
          price: menu.price,
          isSoldout: false
        };
        menus.push(newMenu);
      });

      return 'pushed';
    }
  }
};

export default resolvers;
