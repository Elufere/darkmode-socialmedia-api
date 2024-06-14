import express from "express";
const app = express();
import usersRoute from "./routes/users.js";
import postsRoute from "./routes/posts.js";
import likesRoute from "./routes/likes.js";
import commentsRoute from "./routes/comments.js";
import relationshipsRoute from "./routes/relationships.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

//middlewares
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials", true);
    next();
})
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    }
    ));
app.use(cookieParser());

app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/likes", likesRoute);
app.use("/api/comments", commentsRoute);
app.use("/api/relationships", relationshipsRoute);
app.use("/api/auth", authRoutes);



app.listen(8800, () => {
    console.log("API is working");
});