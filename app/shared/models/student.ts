export enum Gender {
    male,
    female
}

export interface Student {
    id: number;
    name: string;
    age: number;
    gender: Gender;
}
