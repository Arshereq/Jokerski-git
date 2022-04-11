import json
from graphene_django.utils.testing import GraphQLTestCase
from django.test import SimpleTestCase
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