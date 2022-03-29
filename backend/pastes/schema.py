import graphene
from .models import Paste

from graphene_django import DjangoObjectType, DjangoListField

class PasteType(DjangoObjectType):
    class Meta:
        model = Paste
        fields = ('id','title','text', 'expire_after','visibility','author')

class Query(graphene.ObjectType):
    pastes = DjangoListField(PasteType)

    def resolve_pastes(self,info):
        return Paste.objects.all()