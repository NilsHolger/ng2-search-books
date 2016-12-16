import { DBSchema } from '@ngrx/db';

export const schema: DBSchema = {
  version: 1,
  name: 'google_books_app',
  stores: {
    books: {
      autoIncrement: true,
      primaryKey: 'id'
    }
  }
};