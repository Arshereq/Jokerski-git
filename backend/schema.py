from graphene_django import DjangoObjectType
import graphene
from users.models import User


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = ("name", "surname", "login", "password", "email")


class UpdateUser(graphene.Mutation):
    class Arguments:
        # Mutation to update a category
        name = graphene.String(required=True)
        surname = graphene.String(required=True)
        login = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)
        id = graphene.ID()

    category = graphene.Field(UserType)

    @classmethod
    def mutate(cls, root, info, name, login, surname, password, email):
        user = User.objects.get()
        user.name = name
        user.login = login
        user.surname = surname
        user.password = password
        user.email = email

        user.save()

        return UpdateUser(user=user)


class UserField(graphene.ObjectType):
    name = graphene.String(required=True)
    surname = graphene.String(required=True)
    login = graphene.String(required=True)
    password = graphene.String(required=True)
    email = graphene.String(required=True)


class CreateUser(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        surname = graphene.String(required=True)
        login = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    user = graphene.Field(lambda: UserField)

    @classmethod
    def mutate(cls, root, info, name, login, surname, password, email):
        user = User()
        user.name = name
        user.login = login
        user.surname = surname
        user.password = password
        user.email = email
        user.save()

        return CreateUser(user=user)


class Query(graphene.ObjectType):

    users = graphene.List(UserType)

    def resolve_users(root, info, **kwargs):
        # Querying a list
        return User.objects.all()


class Mutation(graphene.ObjectType):
    update_user = UpdateUser.Field()
    create_user = CreateUser.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
