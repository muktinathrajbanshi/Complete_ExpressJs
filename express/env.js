
//  export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

import { z, ZodError } from "zod";

// const ageSchema = z.number().min(18).max(100).int();
// const userAge = 17;

// const parseUserAge = ageSchema.parse(userAge);
// // const {data, error, success} = ageSchema.safeParse(userAge);

// console.log(error);

// try {
//     const parseUserAge = ageSchema.parse(userAge);
//     console.log(parseUserAge);
// } catch (error) {
//     // instancesof is a JavaScript operator used to check if an object is an instance of a specific class or constructor.
//     if (error instanceof ZodError) {
//         console.log(error.issues[0].message); // Display error message only
//     } else {
//         console.log("Unexpected error: ", error);
//     }
// }


const portSchema = z.coerce.number().min(1).
max(65535).default(3006);
export const PORT = portSchema.parse(process.env.PORT);