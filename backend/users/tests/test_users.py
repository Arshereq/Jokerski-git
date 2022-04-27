import json
from django.test import TestCase
from django.test import Client


# Inherit from this in your test cases

class GraphQLTestCase(TestCase):

    def setUp(self):
        self._client = Client()

    def query(self, query: str, op_name: str = None, input: dict = None):
        '''
        Args:
            query (string) - GraphQL query to run
            op_name (string) - If the query is a mutation or named query, you must
                               supply the op_name.  For annon queries ("{ ... }"),
                               should be None (default).
            input (dict) - If provided, the $input variable in GraphQL will be set
                           to this value

        Returns:
            dict, response from graphql endpoint.  The response has the "data" key.
                  It will have the "error" key if any error happened.
        '''
        body = {'query': query}
        if op_name:
            body['operation_name'] = op_name
        if input:
            body['variables'] = {'input': input}

        resp = self._client.post('/graphql', json.dumps(body),
                                 content_type='application/json')
        jresp = json.loads(resp.content.decode())
        return jresp

    def assertResponseNoErrors(self, resp: dict, expected: dict):
        '''
        Assert that the resp (as retuened from query) has the data from
        expected
        '''
        self.assertNotIn('errors', resp, 'Response had errors')
        self.assertEqual(resp['data'], expected, 'Response has correct data')

    def test_create_user(self):
        resp = self.query(
            '''
        mutation register(
                $email: String!
                $username: String!
                $password1: String!
                $password2: String!
                ){
                register(
                          email: $email
                          username: $username
                          password1: $password1
                          password2: $password2
                ) {
                  success
                  errors
                  token
                  refreshToken
    }
  }
        ''',
        )
        self.assertResponseNoErrors(resp, {'register': {'success': True}})

    def test_password_change(self):
        resp = self.query(
            '''
        mutation {
            passwordChange(
                oldPassword: "admin123!@A",
                newPassword1: "test123!@A",
                newPassword2: "test123!@A",
            )
        }
        ''',
        )
        self.assertResponseNoErrors(resp, {'passwordChange': {'success': True}})

    def test_check_user(self):
        resp = self.query(
            '''
        user(id: ID!)
        {
        }
        )
        ''',
        )
        self.assertResponseNoErrors(resp, {'passwordChange': {'success': True}})
