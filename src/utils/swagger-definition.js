/* eslint-disable import/prefer-default-export */
export const swaggerDefinition = {
  openapi: '3.0.1',
  servers: [{ url: '/api/v1' }],
  info: {
    title: 'JustOwnIt',
    version: '1.0.0',
    description: "APIs to power TD's device financing platform",
    contact: {
      email: 'null@advansio.com',
    },
  },
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
  },
  consumes: 'application/json',
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    schemas: {
      user: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            example: 1,
          },
          token: {
            type: 'string',
            example:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
          },
          firstname: {
            type: 'string',
            example: 'John',
          },
          lastname: {
            type: 'string',
            example: 'Doe',
          },
          email: {
            type: 'string',
            example: 'john.doe@test.com',
          },
          isAdmin: {
            type: 'boolean',
            example: true,
          },
          isActive: {
            type: 'boolean',
            example: 'true',
          },
        },
      },
    },
  },
};
