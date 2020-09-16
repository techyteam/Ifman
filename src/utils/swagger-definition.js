/* eslint-disable import/prefer-default-export */
export const swaggerDefinition = {
  openapi: '3.0.1',
  servers: [{ url: '/api/v1' }],
  info: {
    title: 'IFMA Nigeria',
    version: '1.0.0',
    description: 'IFMA Nigeria Backend Api',
    contact: {
      email: 'info@ifmanigeria.com',
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
          memberType: {
            type: 'string',
            example: 'non-member',
          },
          id: {
            type: 'integer',
            example: 1,
          },
          email: {
            type: 'string',
            example: 'john.doe@test.com',
          },
          updatedAt: {
            type: 'timestamp',
            example: '2020-09-09T12:59:16.143Z',
          },
          createdAt: {
            type: 'timestamp',
            example: '2020-09-09T12:59:16.143Z',
          },
          firstName: {
            type: 'string',
            example: 'null',
          },
          middleName: {
            type: 'string',
            example: 'null',
          },
          lastName: {
            type: 'string',
            example: 'null',
          },
          phoneNumber: {
            type: 'string',
            example: 'null',
          },
          isAdmin: {
            type: 'boolean',
            example: false,
          },
          birthDate: {
            type: 'DATEONLY',
            example: 'null',
          },
          gender: {
            type: 'string',
            example: 'null',
          },
          tokens: {
            token: {
              type: 'string',
              example:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            },
            RefreshToken: {
              type: 'string',
              example:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
            },
          },
          password: {
            type: 'string',
            example: 'passw0rd',
          },
        },
      },
      courses: {
        type: 'object',
        properties: {
          courseTitle: {
            type: 'string',
            example: 'F M P Credential',
          },
          nonMemberFees: {
            type: 'float',
            example: '20,000.00',
          },
          memberFees: {
            type: 'float',
            example: '21,000.00',
          },
          duration: {
            type: 'string',
            example: 'two days',
          },
          venue: {
            type: 'string',
            example: 'two days',
          },
          startDate: {
            type: 'date',
            example: '2020-09-09',
          },
          endDate: {
            type: 'date',
            example: '2020-09-09',
          },
        },
      },
      courseReg: {
        type: 'object',
        properties: {
          registeredOn: {
            type: 'date',
            example: '2020-09-09',
          },
          UserId: {
            type: 'integer',
            example: 1,
          },
          courseId: {
            type: 'integer',
            example: 4,
          },
        },
      },
      payment: {
        type: 'object',
        properties: {
          UserId: {
            type: 'INTEGER',
            example: 2,
          },
          for: {
            type: 'string',
            example: 'course',
          },
          amount: {
            type: 'INTEGER',
            example: '20,000.00',
          },
          status: {
            type: 'ENUM',
            example: 'pending',
          },
          date: {
            type: 'STRING',
            example: '2020-09-09',
          },
        },
      },
      conflict: {
        type: 'object',
        properties: {
          status: {
            type: 'integer',
            example: '409',
          },
          message: {
            type: 'string',
          },
        },
      },
      forbidden: {
        type: 'object',
        properties: {
          status: {
            type: 'integer',
            example: '403',
          },
          message: {
            type: 'string',
          },
        },
      },
      badRequest: {
        type: 'object',
        properties: {
          status: {
            type: 'integer',
            example: '400',
          },
          message: {
            type: 'string',
          },
        },
      },
      authError: {
        type: 'object',
        properties: {
          status: {
            type: 'integer',
            example: '401',
          },
          message: {
            type: 'string',
          },
        },
      },
      notFound: {
        type: 'object',
        properties: {
          status: {
            type: 'integer',
            example: '404',
          },
          message: {
            type: 'string',
          },
        },
      },
      serverError: {
        type: 'object',
        properties: {
          status: {
            type: 'integer',
            example: '500',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
  },
};
