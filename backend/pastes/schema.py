import graphene
from .models import Paste, Vote
from users.models import User

from graphene_django import DjangoObjectType


class PasteType(DjangoObjectType):
    class Meta:
        model = Paste
        # fields = ('id', 'title', 'text', 'expire_after', 'visibility', 'author')


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class VoteType(DjangoObjectType):
    class Meta:
        model = Vote


class Query(graphene.ObjectType):
    pastes = graphene.List(PasteType,id=graphene.Int())
    votes = graphene.List(VoteType)

    def resolve_pastes(self,info,id=None):
        if id:
            return Paste.objects.filter(id=id)
        return Paste.objects.all()

    def resolve_votes(self, info, **kwargs):
        return Vote.objects.all()

class CreatePaste(graphene.Mutation):
    paste = graphene.Field(PasteType)

    class Arguments:
        title = graphene.String(required=True)
        text = graphene.String(required=True)
        expire_after = graphene.String()
        visibility = graphene.Boolean()
        author = graphene.String(required=True)

    def mutate(self, info, title, text, expire_after, visibility, author):
        user = info.context.user or None
        paste = Paste(
            title=title,
            text=text,
            expire_after=expire_after,
            visibility=visibility,
            author=user
        )

        paste.save()

        return CreatePaste(paste=paste)

class UpdatePaste(graphene.Mutation):
    paste = graphene.Field(PasteType)

    class Arguments:
        id = graphene.Int(required=True)
        title = graphene.String()
        text = graphene.String()
        visibility = graphene.String()
        expire_after = graphene.String()

    def mutate(self, info, id, title, text, visibility, expired_after):
        paste = Paste.objects.get(id=id)
        paste.title = title
        paste.text = text
        paste.visibility = visibility
        paste.expired_after = expired_after
        paste.save()

        return UpdatePaste(paste=paste)

class DeletePaste(graphene.Mutation):
    message = graphene.String()

    class Arguments:
        id = graphene.Int(required=True)

    def mutate(self,info,id):
        paste = Paste.objects.get(id=id)
        paste.delete()

        return DeletePaste(message=f"ID:{id} Deleted")


class CreateVote(graphene.Mutation):
    user = graphene.Field(UserType)
    paste = graphene.Field(PasteType)

    class Arguments:
        paste_id = graphene.Int()

    def mutate(self, info, paste_id):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('You must be logged to vote!')

        paste = Paste.objects.filter(id=paste_id).first()
        if not paste:
            raise Exception('Invalid Paste!')

        Vote.objects.create(
            user=user,
            paste=paste,
        )

        return CreateVote(user=user, paste=paste)


class Mutation(graphene.ObjectType):
    create_paste = CreatePaste.Field()
    update_paste = UpdatePaste.Field()
    delete_paste = DeletePaste.Field()
    create_vote = CreateVote.Field()