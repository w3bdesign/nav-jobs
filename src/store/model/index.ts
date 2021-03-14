import todosModel, { TodosModel } from './todos';

export interface StoreModel {
  /**
   * Use the TodosModel properties in todos
   */
  todos: TodosModel;
}

const storeModel: StoreModel = {
  /**
   * Use the todosModel properties in todos
   */
  todos: todosModel,
};

export default storeModel;
