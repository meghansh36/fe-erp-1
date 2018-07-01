import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FeDependentService {
    allStates = [
        {
            'childOf': 'country',
            'states': [
                {
                    'name': 'India',
                    'states': ['Delhi', 'Mumbai', 'Chennai']
                },
                {
                    'name': 'USA',
                    'states': ['Canada', 'Washington', 'Florida']
                },
                {
                    'name': 'Germany',
                    'states': ['Berlin', 'Hamburg', 'Bavaria']
                }
            ]
        }
    ];
    productsAfterChangeEvent = [];

    dependentData(value) {
        return this.allStates.filter((obj) => obj.childOf == value);
    }
}
