// import swaggerUi from "swagger-ui-express";
// import swaggerJsdoc from "swagger-jsdoc";

// import { Express } from "express";

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Express API with Swagger",
//       version: "1.0.0",
//       description: "A simple Express API with Swagger UI",
//     },
//   },
//   apis: ["./src/routes/*.ts"], // Ensure the correct path
// };

// const specs = swaggerJsdoc(options);

// export const setupSwagger = (app: Express) => {
//   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
// };

// app.get("/swagger.json", (req: , res:) => {
//   res.setHeader("Content-Type", "application/json");
//   res.send(specs);
// });
// };


import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { Express, Request, Response } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description: "A simple Express API with Swagger UI",
    },
  },
  apis: ["./src/routes/*.ts"], // Ensure the correct path
  //apis: ["./routes/*.ts"] 

};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
 // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
 app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(undefined, { swaggerUrl: "/swagger.json" }));

  // Manually serve the Swagger JSON file
  app.get("/swagger.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(specs);
  });
};
