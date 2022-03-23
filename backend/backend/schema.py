import graphene

from graphql_auth.schema import UserQuery, MeQuery
from graphql_auth import mutations


class AuthMutation(graphene.ObjectType):
    register = mutations.Register.Field()
    verify_account = mutations.VerifyAccount.Field()
    token_auth = mutations.ObtainJSONWebToken.Field()
    update_account = mutations.UpdateAccount.Field()


class AuthQuery(UserQuery, MeQuery, graphene.ObjectType):
    pass


class AuthMutations(AuthMutation, graphene.ObjectType):
    pass


# noinspection PyTypeChecker
schema = graphene.Schema(query=AuthQuery, mutation=AuthMutations)
