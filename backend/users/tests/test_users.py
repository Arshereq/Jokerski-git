# Django
from django.test import TestCase

# 3rd-Party
import graphene
from graphene.test import Client

# Project
from schema import Mutation, Query


class TestSchema(TestCase):
    def setUp(self) -> None:
        self.query = """
            query{
                users{
                    edges{
                        node{
                            id
                            username
                            firstName
                            lastName
                            isStaff
                            isActive
                            dateJoined
                            email
                            pasteSet{
                                id
                            }
                            pk
                            archived
                            verified
                            secondaryEmail
                            lastLogin
                        }
                    }
                }
            }
        """
        self.mutation = """
        mutation register(
            $email: String!
            $username: String!
            $password1: String!
            $password2: String!
        ) {
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
        """
        self.client = Client(graphene.Schema(query=Query, mutation=Mutation))

    def test_users_query(self) -> None:
        result = self.client.execute(self.query)
        self.assertDictEqual({"data": {"users": {"edges": []}}}, result)

    def test_addPaste_mutation(self) -> None:
        result = self.client.execute(self.mutation)
        self.assertDictEqual(
            {
                "data": {
                    "createPaste": {
                            "title": "Title test",
                            "text": "Paste text test",
                            "visible": True,
                            "expireAfter": "DAY",
                            "author": "vat332"
                        }
                }
            },
            result,
        )
