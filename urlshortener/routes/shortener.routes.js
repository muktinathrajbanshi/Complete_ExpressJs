import { Router } from "express";
import { postURLShortener, getShortenerPage, redirectToShortLink } from "../controllers/postshortner.controllers.js";

const router = Router();



// const serveFile = async (res, filePath, contentType) => {
//     try {
//         const data = await readFile(filePath);
//         res.writeHead(200, { "Content-Type": contentType });
//         res.end(data);

//     } catch (error) {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("404 page not found");
//       }
// };


router.get("/", getShortenerPage);

router.post("/", postURLShortener);

router.get("/:shortCode", redirectToShortLink);

// default export
//export default router;

// Named exports
export const shortenerRoutes = router;


