export interface User {
    id: string;
    name: string;
    dob: Date;
    email: string;
    phone: string;
    workEnvironment: "Hybrid" | "Remote" | "Office";
    remarks?: string;
}