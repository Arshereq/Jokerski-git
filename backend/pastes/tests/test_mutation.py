import json
from graphene_django.utils.testing import GraphQLTestCase
from django.test import SimpleTestCase
from schema import *

GRAPHQL_URL = "/graphql"
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
