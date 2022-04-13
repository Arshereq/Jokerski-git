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
        mutation {
            register(
                email: "test@wp.pl",
                username: "vat332",
                password1: "admin123!@A",
                password2: "admin123!@A",
            ){
                success,
                errors,
                token,
                refreshToken
                }
            }
        ''',
        )
        self.assertResponseNoErrors(resp, {'register': {'success': True}})    

    def test_create_paste(self):
        resp = self.query(
        '''
        mutation {
            createPaste(
                title: "Testing title Test 2112",
                text: "Test",
                visibility: true,
                expireAfter:"23",
                author:"vat332"
            ){
                paste{
                    id
                    title
                }
            }
        }
        ''',
        )
        self.assertResponseNoErrors(resp, {'createPaste': {'success': True}})
