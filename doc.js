module.exports = {
  swagger: '2.0',
  info: {
    description: 'My Bank API description',
    version: '1.0.0',
    title: 'My Bank API description',
  },
  host: 'localhost:3000',
  tags: [
    {
      name: 'accounts',
      description: 'Account management',
    },
  ],
  paths: {
    '/accounts': {
      post: {
        tags: ['accounts'],
        summary: 'Create a new account',
        description: 'Create a new account description',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Account object that needs to be added to the bank',
            required: true,
            schema: {
              $ref: '#/definitions/NewAccount',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Successful operation',
            schema: {
              $ref: '#/definitions/Account',
            },
          },
          '400': {
            description: 'An error occurred',
          },
        },
      },
      get: {
        tags: ['accounts'],
        summary: 'Get existing accounts',
        description: 'Get existing accounts description',
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/Accounts',
              },
            },
          },
          '400': {
            description: 'An error occurred',
          },
        },
      },
      put: {
        tags: ['accounts'],
        summary: 'Update an existing account',
        description:
          'Update an existing account using the id provided in the body',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description:
              'Account object with the id that needs to have its name and balance updated in the bank',
            required: true,
            schema: {
              $ref: '#/definitions/Account',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Successful operation',
            schema: {
              $ref: '#/definitions/Account',
            },
          },
          '400': {
            description: 'Error occurred',
          },
        },
      },
    },
    '/accounts/uploadBalance': {
      patch: {
        tags: ['accounts'],
        summary: 'Update an existing account balance',
        description: 'Update an existing account balance description',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Account object that needs to be added to the bank',
            required: true,
            schema: {
              $ref: '#/definitions/UpdateBalance',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Successful operation',
            schema: {
              $ref: '#/definitions/Account',
            },
          },
          '400': {
            description: 'Error occurred',
          },
        },
      },
    },
    '/accounts/{accountId}': {
      get: {
        tags: ['accounts'],
        summary: 'Finds an account by its ID',
        description: 'Returns a single account',
        produces: ['application/json'],
        parameters: [
          {
            name: 'accountId',
            in: 'path',
            description: 'ID of account to return',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          '200': {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/Account',
            },
          },
          '400': {
            description: 'Error occurred',
          },
        },
      },
      delete: {
        tags: ['accounts'],
        summary: 'Deletes an account',
        description: 'Deletes an account',
        produces: ['application/json'],
        parameters: [
          {
            name: 'accountId',
            in: 'path',
            description: 'ID of account to delete',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          '200': {
            description: 'Successful operation',
          },
          '400': {
            description: 'Error occurred',
          },
        },
      },
    },
  },
  definitions: {
    Account: {
      type: 'object',
      required: ['name', 'balance'],
      properties: {
        id: {
          type: 'integer',
          example: 1,
        },
        name: {
          type: 'string',
          example: 'Isadora',
        },
        balance: {
          type: 'integer',
          example: 200,
        },
      },
    },
    NewAccount: {
      type: 'object',
      required: ['name', 'balance'],
      properties: {
        name: {
          type: 'string',
          example: 'Isadora',
        },
        balance: {
          type: 'integer',
          example: 200,
        },
      },
    },
    UpdateBalance: {
      type: 'object',
      required: ['name', 'balance'],
      properties: {
        id: {
          type: 'integer',
          example: 1,
        },
        balance: {
          type: 'integer',
          example: 200,
        },
      },
    },
    Accounts: {
      type: 'object',
      properties: {
        accounts: {
          type: 'array',
          items: {
            $ref: '#/definitions/Account',
          },
        },
      },
    },
  },
};
