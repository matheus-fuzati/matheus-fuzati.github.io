import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes/routes";
import "./styles/global.css";

export const createRoot = ViteReactSSG({ routes, basename: "/" });
