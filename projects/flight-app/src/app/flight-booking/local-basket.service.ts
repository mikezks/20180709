import { Injectable } from '@angular/core';
import { db, basketTableName } from './db';

@Injectable({
    providedIn: 'root'
})
export class LocalBasketService {

    save(basket: { [key: string]: boolean }): Promise<any> {

        const entry = {
            id: 1,
            date: new Date(),
            basket
        };

        return db
                .table(basketTableName)
                .put(entry);
    }

    load(): Promise<{ [key: string]: boolean }> {
        return db
                .table(basketTableName)
                .get(1)
                .then(entry => entry.basket);
    }
}
