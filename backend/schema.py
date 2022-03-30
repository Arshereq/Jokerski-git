import graphene
from pastes import schema
from users.schema import AuthQuery, AuthMutations


class Query(schema.Query, AuthQuery, graphene.ObjectType):
    pass


class Mutation(schema.Mutation, AuthMutations, graphene.ObjectType):
    pass


# noinspection PyTypeChecker
schema = graphene.Schema(query=Query, mutation=Mutation)
