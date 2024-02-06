import { atom } from "recoil";

interface FormData {
    Name: string;
    Email: string;
    Birthplace: string;
    Gender: string;
}

export const registeredData = atom<FormData>({
    key: "registeredData",
    default: {
        Name: "",
        Email: "",
        Birthplace: "",
        Gender: "",
    }
})