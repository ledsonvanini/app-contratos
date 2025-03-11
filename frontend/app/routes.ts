import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
route("cadastro-dados", "routes/cadastro-dados.tsx"),
route("cadastro-fornecedor", "routes/cadastro-fornecedor.tsx"),

// Nested Routes
// route("dashboard", "routes/dashboard.tsx", [
//     route("finances", "routes/finances.tsx"),
//     route("personal-info", "routes/personal-info.tsx"),
// ])
// Prefix for routes
// route("dashboard", "routes/dashboard.tsx", [
//     ...prefix("edit", [        
//         route("finances", "routes/finances.tsx"),
//         route("personal-info", "routes/personal-info.tsx"),
//     ])
// ])
] satisfies RouteConfig;
