import todosModel, { modalModel } from './todos';

export interface StoreModel {
  /**
   * Use the TodosModel properties in todos
   */
  todos: modalModel;
}

const storeModel: StoreModel = {
  /**
   * Use the todosModel properties in todos
   */
  todos: todosModel,
};

export default storeModel;
