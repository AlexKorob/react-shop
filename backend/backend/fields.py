from rest_framework import serializers


class PrimaryKeyRelatedSerializedField(serializers.PrimaryKeyRelatedField):
    def __init__(self, **kwargs):
        try:
            serializer = kwargs.pop("serializer")
        except KeyError:
            raise ValueError("Serializer param is necessary")
        self.serializer = serializer(read_only=True)

        super(PrimaryKeyRelatedSerializedField, self).__init__(**kwargs)

    def to_representation(self, value):
        instance = self.serializer.Meta.model.objects.get(id=value.pk)
        self.serializer.context.update(self.context)
        return self.serializer.to_representation(instance)
