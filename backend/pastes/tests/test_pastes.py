from django.test import TestCase
from schema import *

import graphene
from graphene.test import Client


class TestApiPasteExpectResponse(TestCase):
    def setUp(self) -> None:
        self.query = """
            query{
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
            """
        self.mutation = """
            mutation{
                createPaste(input: {
                    title:"Testowy4",
                    author:"root",
                    text:"Testowy4",
                    visibility:true,
                    expireAfter:"34"
                }) 
                {
                    paste{
                        id
                        title
                    }
                }
            }
            """
        self.client = Client(graphene.Schema(query=Query, mutation=Mutation))

    def test_mutation_create_paste(self) -> None:
        result = self.client.execute(self.mutation)
        self.assertDictEqual(
            {
                {
                    "data": {
                        "createPaste": {
                            "paste": {
                                "id": "23",
                                "title": "Testowy4"
                            }
                        }
                    }
                }
            },
            result,
        )
