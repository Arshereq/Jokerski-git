import json
from graphene_django.utils.testing import GraphQLTestCase
from schema import *

GRAPHQL_URL = "/graphql"
class TestApiPasteExpectResponse(GraphQLTestCase):
    def pastes_querry(self):
        response = self.query(
            '''
            query pastes{
                pastes{
                    id
                    title
                    text
                    author {
                    id
                    username
                    }
                }
                }
            ''',
            op_name='myModel'
        )

        content = json.loads(response.content)
        self.assertResponseNoErrors(response)

    def TestQueryWithVariable(self):
        response = self.query(
            '''
            query pastes($id: Int!){
                pastes(id: $id) {
                    id
                    title
                    text
                }
            }
            ''',
            op_name='pastes',
            variables={'id': 1}
        )

        content = json.loads(response.content)

        # This validates the status code and if you get errors
        self.assertResponseNoErrors(response)


    def TestApiMutationCreatePaste(self):
            response = self.query(
            '''
            mutation myMutation($input: MyMutationInput!){
                createPaste(input: $input) {
                    paste{
                        id
                        title
                    }
                }
            }
            ''',
                op_name='createPaste',
                input_data={
                            "title":"Test Mutation 2 create",
                            "author": "vat332",
                            "text": "hdfhhdghdgdhdhgfhdgdhgf",
                            "visibility": "True",
                            "expired_after": "24234"
                            }
            )
            self.assertResponseNoErrors(response)
