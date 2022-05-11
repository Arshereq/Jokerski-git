import json
from django.test import TestCase
from django.test import Client

# Inherit from this in your test cases


class GraphQLTestCase(TestCase):

    def setUp(self):
        self._client = Client()

    def query(self, query: str, op_name: str = None, input: dict = None):
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

    def test_update_paste(self):
        resp = self.query(
        '''
        mutation {
            createPaste(
                title: "Testing title Test 2112 update",
                text: "Test update",
                visibility: false,
                expireAfter:"25",
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
        self.assertResponseNoErrors(resp, {'updatePaste': {'success': True}})

    def test_delete_paste(self):
        resp = self.query(
        '''
        mutation 
        {
            deletePaste($id: Int!)
            {
                deletePaste(id: $id)
                {
                    
                }
            }
        }
        ''',
        )
        self.assertResponseNoErrors(resp, {'deletePaste': {'success': True}})

