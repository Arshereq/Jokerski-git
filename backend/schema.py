import graphene

from backend.schema import AuthQuery, AuthMutations


class Query(AuthQuery, graphene.ObjectType):
    pass


class Mutation(AuthMutations, graphene.ObjectType):
    pass


# noinspection PyTypeChecker
schema = graphene.Schema(query=Query, mutation=Mutation)