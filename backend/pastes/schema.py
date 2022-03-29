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