import { atom } from "recoil";

interface FormData {
    Name: string;
    Email: string;
    Birthplace: string;
    Birthdate: string;
    Address: string;
    Gender: string;
    City: string;
}

export const registeredData = atom<FormData>({
    key: "registeredData",
    default: {
        Name: "",
        Email: "",
        Birthplace: "",
        Birthdate: "",
        Address: "",
        Gender: "",
        City: ""
    }
})