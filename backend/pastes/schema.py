from matplotlib import textpath
from matplotlib.pyplot import title
import graphene
from .models import Paste

from graphene_django import DjangoObjectType

class PasteType(DjangoObjectType):
    class Meta:
        model = Paste
        fields = ('id','title','text', 'expire_after','visibility','author')

class Query(graphene.ObjectType):
    pastes = graphene.List(PasteType,id=graphene.Int())

    def resolve_pastes(self,info,id=None):
        if id:
            return Paste.objects.filter(id=id)
        return Paste.objects.all()

class CreatePaste(graphene.Mutation):
    paste = graphene.Field(PasteType)

    class Arguments:
        title = graphene.String(required=True)
        text = graphene.String(required=True)
        expire_after = graphene.String()
        visibility = graphene.String(required=True)
        author = graphene.String(required=True)
    def mutate(self,info,title,text,expire_after,visibility,author):
        paste = Paste(title=title,text=text,expire_after=expire_after,
                    visibility=visibility, author=author)
        paste.save()

        return CreatePaste(paste=paste)

class UpdatePaste(graphene.Mutation):
    paste = graphene.Field(PasteType)

    class Arguments:
        id = graphene.Int(required=True)
        title = graphene.String(required=True)
        text = graphene.String(required=True)
        visibility = graphene.String(required=True)

    def mutate(self,info,id,title,text,visibility):
        paste = Paste.objects.get(id=id)
        paste.title = title
        paste.text = text
        paste.visibility = visibility

        paste.save()

        return UpdatePaste(paste=paste)

class Mutation(graphene.ObjectType):
    create_paste = CreatePaste.Field()
    update_paste = UpdatePaste.Field()